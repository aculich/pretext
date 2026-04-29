// Adaptive-overlay Phase 4: per-line geometry helpers.
//
// This module is a *thin* convenience layer over the existing layout
// primitives (`prepareWithSegments`, `walkLineRanges`, `measureLineStats`).
// It exists so adaptive-overlay engines (e.g. `storyvale-contrast.js`) can
// get the rectangles each laid-out line occupies in **container space**
// without re-implementing line-height arithmetic.
//
// Design constraints:
//
// 1. No new dependency. Only the existing `layout.ts` exports are used.
// 2. Pretext is the source of truth for line *widths*; this module supplies
//    only `(x, y, w, h)` in caller coordinates.
// 3. `walkLineBoundingBoxes` is allocation-free in the hot loop — callers
//    that need a list use the array form, while streaming consumers can use
//    the walk form.

import {
  walkLineRanges,
  type LayoutLineRange,
  type PreparedTextWithSegments,
} from './layout.js'

/** A laid-out line's bounding box in caller (container) coordinates. */
export interface LineBoundingBox {
  /** Top-left x in container space. */
  x: number
  /** Top-left y in container space. */
  y: number
  /** Width of the laid-out glyph run; tracks pretext's own line width. */
  w: number
  /** Line-height in container space — typically the caller's line-height. */
  h: number
  /** 0-based ordinal of the line within the column. */
  index: number
  /** Convenience: pretext-side cursors so callers can map back to text. */
  range: LayoutLineRange
}

/** Configuration for the bbox helpers. */
export interface LineBoundingBoxOptions {
  /** Origin x of the first line (container coords). Default ``0``. */
  originX?: number
  /** Origin y of the first line (container coords). Default ``0``. */
  originY?: number
  /** Available column width — passed straight through to ``walkLineRanges``. */
  maxWidth: number
  /** Line height in container space (vertical advance per line). */
  lineHeight: number
}

/** Stream per-line bounding boxes through ``onLine``.
 *
 * Yields one ``LineBoundingBox`` per wrapped line, in document order. The
 * loop is allocation-free aside from the box object itself; consumers that
 * mutate the box must finish reading before the next callback fires.
 */
export function walkLineBoundingBoxes(
  prepared: PreparedTextWithSegments,
  options: LineBoundingBoxOptions,
  onLine: (box: LineBoundingBox) => void,
): number {
  const ox = options.originX ?? 0
  const oy = options.originY ?? 0
  const lh = options.lineHeight
  if (!(lh > 0)) {
    throw new Error(
      `walkLineBoundingBoxes: lineHeight must be > 0 (got ${options.lineHeight})`,
    )
  }
  let i = 0
  return walkLineRanges(prepared, options.maxWidth, (range) => {
    onLine({
      x: ox,
      y: oy + i * lh,
      w: range.width,
      h: lh,
      index: i,
      range,
    })
    i++
  })
}

/** Eager variant: collect all bounding boxes into an array. */
export function lineBoundingBoxes(
  prepared: PreparedTextWithSegments,
  options: LineBoundingBoxOptions,
): LineBoundingBox[] {
  const out: LineBoundingBox[] = []
  walkLineBoundingBoxes(prepared, options, (b) => {
    // Decouple from the streaming box: callers expect a stable snapshot.
    out.push({ x: b.x, y: b.y, w: b.w, h: b.h, index: b.index, range: b.range })
  })
  return out
}

/** Normalize a list of caller-space bboxes by an outer rect.
 *
 * The adaptive-overlay engine needs *normalized* rectangles (0..1 in image
 * space) so it can sample a `LuminanceMap` cell-aware. ``outer`` is the
 * rectangle that maps to ``(0, 0, 1, 1)`` — typically the canvas or stage
 * element's ``getBoundingClientRect()`` — and the boxes are already in
 * the same coordinate frame.
 */
export function normalizeLineBoundingBoxes(
  boxes: ReadonlyArray<LineBoundingBox>,
  outer: { x: number; y: number; w: number; h: number },
): Array<{ x: number; y: number; w: number; h: number; index: number }> {
  if (outer.w <= 0 || outer.h <= 0) return []
  const out: Array<{ x: number; y: number; w: number; h: number; index: number }> = []
  for (const b of boxes) {
    out.push({
      x: clamp01((b.x - outer.x) / outer.w),
      y: clamp01((b.y - outer.y) / outer.h),
      w: clamp01(b.w / outer.w),
      h: clamp01(b.h / outer.h),
      index: b.index,
    })
  }
  return out
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0
  if (n < 0) return 0
  if (n > 1) return 1
  return n
}
