// Adaptive-overlay Phase 2: per-image coarse luminance grid.
//
// This module is the contract that build-time Python (Pillow + numpy) and
// runtime browser code both speak. Both implementations must produce
// numerically identical LuminanceMap values for the same input image.
//
// The grid is intentionally coarse (e.g. 16x9) and packed as Uint8 to keep
// the per-frame payload tiny when baked into a manifest:
//   16 * 9 * 2 bytes = 288 bytes per frame for mean + stddev.
//
// "L" is Rec.709 relative luminance computed from sRGB after linearization,
// matching WCAG 2.x's contrast formulation. Values are 0..1.

/** A single grid cell. Mean and stddev are both in 0..1 luminance space. */
export interface LuminanceCell {
  /** Mean Rec.709 relative luminance over the cell, 0..1. */
  meanL: number
  /** Stddev of relative luminance over the cell, 0..1. Proxy for "busy-ness". */
  stddev: number
}

/** A 2D coarse luminance grid. Cell (col, row) lives at index row*cols + col. */
export interface LuminanceMap {
  /** Number of columns in the grid (e.g. 16). */
  cols: number
  /** Number of rows in the grid (e.g. 9). */
  rows: number
  /** Mean L per cell, length cols*rows, 0..1. */
  mean: Float32Array
  /** Stddev of L per cell, length cols*rows, 0..1. */
  stddev: Float32Array
}

/** Configuration for computeLuminanceMap. */
export interface LuminanceMapOptions {
  /** Grid columns. Default 16. */
  cols?: number
  /** Grid rows. Default 9. */
  rows?: number
}

/** Normalized rectangle in the source image's coordinate space, 0..1. */
export interface NormRect {
  x: number
  y: number
  w: number
  h: number
}

/** Result of sampling a region. All luminance values are 0..1. */
export interface RegionSample {
  /** Area-weighted mean luminance over the rectangle. */
  meanL: number
  /** Area-weighted mean stddev (busy-ness) over the rectangle. */
  stddev: number
}

/** A concrete recommendation for text rendering over the sampled region. */
export interface TextStyleSuggestion {
  /** Hex color suggested for text fill — black or white, whichever maximizes contrast. */
  color: string
  /** Suggested panel background opacity in [0, 1] to hit the requested contrast ratio. */
  panelOpacity: number
  /** Hex color suggested for the panel scrim background (matches text "anti-color"). */
  panelColor: string
  /** Suggested outline / halo color for the text_outline strategy. */
  outlineColor: string
  /** WCAG contrast ratio that would result from picking `color` against the unblended cell. */
  rawContrast: number
  /** WCAG contrast ratio after the suggested panel is applied. */
  effectiveContrast: number
}

/** Build a LuminanceMap directly from a packed RGBA pixel buffer.
 *
 * This is the lowest-level entry point. Both Node (after decoding via
 * Pillow/sharp on the Python side and shipping bytes) and the browser
 * (after OffscreenCanvas getImageData) end up calling this with the same
 * shape: width*height*4 RGBA bytes, sRGB-encoded, premultiplied alpha is
 * not assumed (alpha is ignored — text overlays only care about the
 * visible RGB).
 *
 * Algorithm:
 *  1. Subdivide the image into cols*rows cells.
 *  2. For each pixel, compute Rec.709 relative luminance after sRGB-linearize.
 *  3. Per cell, accumulate mean + variance (Welford-style).
 *  4. Emit Float32Arrays for mean + stddev.
 */
export function luminanceMapFromRgba(
  rgba: Uint8Array | Uint8ClampedArray,
  width: number,
  height: number,
  options: LuminanceMapOptions = {},
): LuminanceMap {
  const cols = Math.max(1, Math.floor(options.cols ?? 16))
  const rows = Math.max(1, Math.floor(options.rows ?? 9))
  if (rgba.length < width * height * 4) {
    throw new Error(
      `luminanceMapFromRgba: pixel buffer too short for ${width}x${height} (got ${rgba.length} bytes, need ${width * height * 4})`,
    )
  }

  const cellCount = cols * rows
  const sumL = new Float64Array(cellCount)
  const sumL2 = new Float64Array(cellCount)
  const counts = new Uint32Array(cellCount)

  const colW = width / cols
  const rowH = height / rows

  for (let y = 0; y < height; y++) {
    const rowIdx = Math.min(rows - 1, Math.floor(y / rowH))
    for (let x = 0; x < width; x++) {
      const colIdx = Math.min(cols - 1, Math.floor(x / colW))
      const cellIdx = rowIdx * cols + colIdx
      const i = (y * width + x) * 4
      // Bounds check guarded above; non-null assertion to satisfy
      // noUncheckedIndexedAccess without runtime cost.
      const r = rgba[i]! / 255
      const g = rgba[i + 1]! / 255
      const b = rgba[i + 2]! / 255
      const l = relativeLuminance(r, g, b)
      sumL[cellIdx]! += l
      sumL2[cellIdx]! += l * l
      counts[cellIdx]! += 1
    }
  }

  const mean = new Float32Array(cellCount)
  const stddev = new Float32Array(cellCount)
  for (let i = 0; i < cellCount; i++) {
    const n = counts[i]!
    if (n === 0) {
      mean[i] = 0
      stddev[i] = 0
      continue
    }
    const m = sumL[i]! / n
    const v = Math.max(0, sumL2[i]! / n - m * m)
    mean[i] = m
    stddev[i] = Math.sqrt(v)
  }
  return { cols, rows, mean, stddev }
}

/** Build a LuminanceMap from a browser ImageBitmap or HTMLCanvas. */
export async function computeLuminanceMapFromBitmap(
  bitmap: ImageBitmap | HTMLCanvasElement,
  options: LuminanceMapOptions = {},
): Promise<LuminanceMap> {
  const cols = Math.max(1, Math.floor(options.cols ?? 16))
  const rows = Math.max(1, Math.floor(options.rows ?? 9))
  // Downsample to (cols*16)x(rows*16) before reading pixels — this is small
  // enough to read back cheaply yet leaves ~16 samples per cell in each axis.
  const tw = cols * 16
  const th = rows * 16
  const off: OffscreenCanvas | HTMLCanvasElement =
    typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(tw, th)
      : Object.assign(document.createElement('canvas'), { width: tw, height: th })
  const ctx = (off as OffscreenCanvas).getContext('2d') as
    | OffscreenCanvasRenderingContext2D
    | CanvasRenderingContext2D
    | null
  if (!ctx) {
    throw new Error('computeLuminanceMapFromBitmap: 2D context unavailable')
  }
  ;(ctx as CanvasRenderingContext2D).imageSmoothingEnabled = true
  ;(ctx as CanvasRenderingContext2D).imageSmoothingQuality = 'high'
  ctx.drawImage(bitmap as CanvasImageSource, 0, 0, tw, th)
  const data = ctx.getImageData(0, 0, tw, th)
  return luminanceMapFromRgba(data.data, tw, th, { cols, rows })
}

/** Sample the area-weighted mean luminance + stddev under a normalized rect. */
export function sampleRegion(map: LuminanceMap, rect: NormRect): RegionSample {
  const x0 = clamp01(rect.x) * map.cols
  const y0 = clamp01(rect.y) * map.rows
  const x1 = clamp01(rect.x + rect.w) * map.cols
  const y1 = clamp01(rect.y + rect.h) * map.rows
  if (x1 <= x0 || y1 <= y0) {
    return { meanL: 0, stddev: 0 }
  }
  let weightedSum = 0
  let weightedSumStd = 0
  let weightTotal = 0
  for (let r = Math.floor(y0); r < Math.min(map.rows, Math.ceil(y1)); r++) {
    const cellTop = r
    const cellBot = r + 1
    const overlapY = Math.max(0, Math.min(cellBot, y1) - Math.max(cellTop, y0))
    if (overlapY <= 0) continue
    for (let c = Math.floor(x0); c < Math.min(map.cols, Math.ceil(x1)); c++) {
      const cellLeft = c
      const cellRight = c + 1
      const overlapX = Math.max(0, Math.min(cellRight, x1) - Math.max(cellLeft, x0))
      if (overlapX <= 0) continue
      const w = overlapX * overlapY
      const idx = r * map.cols + c
      weightedSum += map.mean[idx]! * w
      weightedSumStd += map.stddev[idx]! * w
      weightTotal += w
    }
  }
  if (weightTotal <= 0) return { meanL: 0, stddev: 0 }
  return {
    meanL: weightedSum / weightTotal,
    stddev: weightedSumStd / weightTotal,
  }
}

/** Suggest a text style for the sampled region, targeting a WCAG contrast ratio.
 *
 * @param sample Region sample as produced by `sampleRegion`.
 * @param targetRatio Target WCAG contrast ratio. Defaults to 4.5 (AA body text).
 * @returns A TextStyleSuggestion the caller can write to CSS variables.
 */
export function suggestTextStyle(
  sample: RegionSample,
  targetRatio: number = 4.5,
): TextStyleSuggestion {
  const bgL = clamp01(sample.meanL)
  const targetText = bgL < 0.5 ? '#f4f1ea' : '#0a0a0a'
  const textL = bgL < 0.5 ? 0.886 : 0.0114 // matches the two hex picks above
  const scrim = bgL < 0.5 ? '#000000' : '#ffffff'
  const scrimL = bgL < 0.5 ? 0.0 : 1.0
  const rawContrast = wcagContrast(textL, bgL)
  // Solve for opacity alpha so the blended panel hits the target ratio.
  // The CSS `background: rgba(scrim, alpha)` over the image yields an
  // effective luminance L_eff = alpha * scrimL + (1 - alpha) * bgL.
  // We want contrastRatio(textL, L_eff) >= target.
  // Solve for alpha in [0, 1].
  const targetEffective = solveForBg(textL, targetRatio, bgL)
  let alpha = 0
  if (Number.isFinite(targetEffective)) {
    const denom = scrimL - bgL
    alpha = denom === 0 ? 0 : (targetEffective - bgL) / denom
  }
  alpha = clamp01(alpha)
  // Add a small comfort cushion so we are not exactly at AA — 8% extra opacity
  // when alpha > 0 keeps text comfortably readable across nearby cells.
  const panelOpacity = alpha > 0 ? Math.min(1, alpha + 0.08) : 0
  const effectiveL = panelOpacity * scrimL + (1 - panelOpacity) * bgL
  const effectiveContrast = wcagContrast(textL, effectiveL)
  return {
    color: targetText,
    panelOpacity,
    panelColor: scrim,
    outlineColor: targetText === '#0a0a0a' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
    rawContrast,
    effectiveContrast,
  }
}

// --- Helpers ---

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0
  if (n < 0) return 0
  if (n > 1) return 1
  return n
}

/** sRGB -> linear single channel. */
function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

/** Rec.709 relative luminance from sRGB-encoded 0..1 channels. */
export function relativeLuminance(r: number, g: number, b: number): number {
  const R = srgbToLinear(r)
  const G = srgbToLinear(g)
  const B = srgbToLinear(b)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

/** WCAG 2.x contrast ratio between two relative luminances. */
export function wcagContrast(l1: number, l2: number): number {
  const a = Math.max(l1, l2) + 0.05
  const b = Math.min(l1, l2) + 0.05
  return a / b
}

/** Given fixed text luminance and target ratio, what bg L is needed?
 *
 * Picks the bg L on the same side of textL as the current bg (we are
 * pushing the panel toward the scrim color, not flipping past it).
 */
function solveForBg(textL: number, target: number, bgL: number): number {
  // contrast = (max+0.05) / (min+0.05) = target
  // Two solutions: bg = (textL + 0.05) * target - 0.05  (if bg > textL)
  //                bg = (textL + 0.05) / target - 0.05  (if bg < textL)
  if (bgL >= textL) {
    return (textL + 0.05) * target - 0.05
  }
  return (textL + 0.05) / target - 0.05
}

// --- Compact serialization for build-time bake ---

/** Pack a LuminanceMap as a JSON-friendly base64 payload (Uint8 mean+stddev). */
export interface PackedLuminanceMap {
  cols: number
  rows: number
  /** Base64-encoded uint8 array, length cols*rows, mean*255 rounded. */
  meanB64: string
  /** Base64-encoded uint8 array, length cols*rows, stddev*255 rounded. */
  stddevB64: string
}

export function packLuminanceMap(map: LuminanceMap): PackedLuminanceMap {
  const n = map.cols * map.rows
  const meanU8 = new Uint8Array(n)
  const sdU8 = new Uint8Array(n)
  for (let i = 0; i < n; i++) {
    meanU8[i] = Math.max(0, Math.min(255, Math.round(map.mean[i]! * 255)))
    sdU8[i] = Math.max(0, Math.min(255, Math.round(map.stddev[i]! * 255)))
  }
  return {
    cols: map.cols,
    rows: map.rows,
    meanB64: bytesToB64(meanU8),
    stddevB64: bytesToB64(sdU8),
  }
}

export function unpackLuminanceMap(packed: PackedLuminanceMap): LuminanceMap {
  const meanU8 = b64ToBytes(packed.meanB64)
  const sdU8 = b64ToBytes(packed.stddevB64)
  const n = packed.cols * packed.rows
  const mean = new Float32Array(n)
  const stddev = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    mean[i] = (meanU8[i] ?? 0) / 255
    stddev[i] = (sdU8[i] ?? 0) / 255
  }
  return { cols: packed.cols, rows: packed.rows, mean, stddev }
}

// Cross-runtime base64 helpers without pulling in @types/node. We probe a
// global named "Buffer" via globalThis to dodge the bare reference that the
// strict tsconfig would otherwise flag.
type NodeBufferLike = {
  from: (input: Uint8Array | string, enc?: string) => { toString: (enc: string) => string }
}
function getNodeBuffer(): NodeBufferLike | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = globalThis as any
  return g && g.Buffer && typeof g.Buffer.from === 'function' ? (g.Buffer as NodeBufferLike) : null
}

function bytesToB64(b: Uint8Array): string {
  const buf = getNodeBuffer()
  if (buf) {
    return buf.from(b).toString('base64')
  }
  let s = ''
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]!)
  return btoa(s)
}

function b64ToBytes(s: string): Uint8Array {
  const buf = getNodeBuffer()
  if (buf) {
    // node Buffer extends Uint8Array; copy through to satisfy strict typing.
    const arr = buf.from(s, 'base64') as unknown as ArrayLike<number>
    return new Uint8Array(arr)
  }
  const bin = atob(s)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}
