// Demo: Luminance grid heatmap overlay.
//
// Renders a sample image and overlays the LuminanceMap as a colored grid so
// you can see, at a glance, where text would land on light vs dark cells.
// Also draws a synthetic "reading panel" rectangle and prints the suggested
// text style for it (color + panel opacity + WCAG contrast).

import {
  computeLuminanceMapFromBitmap,
  sampleRegion,
  suggestTextStyle,
  type LuminanceMap,
} from '../../src/luminance.js'

const samples = [
  // Public, free-to-use unsplash images sized for quick demos.
  'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
  'https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=1200',
]

interface Refs {
  pickEl: HTMLSelectElement
  imgEl: HTMLImageElement
  gridCanvas: HTMLCanvasElement
  panelRectEl: HTMLDivElement
  reportEl: HTMLPreElement
  colsInput: HTMLInputElement
  rowsInput: HTMLInputElement
  ratioInput: HTMLInputElement
}

function refs(): Refs {
  const get = <T extends HTMLElement>(id: string) => {
    const el = document.getElementById(id)
    if (!el) throw new Error(`missing #${id}`)
    return el as T
  }
  return {
    pickEl: get<HTMLSelectElement>('pick'),
    imgEl: get<HTMLImageElement>('sample'),
    gridCanvas: get<HTMLCanvasElement>('grid'),
    panelRectEl: get<HTMLDivElement>('panel-rect'),
    reportEl: get<HTMLPreElement>('report'),
    colsInput: get<HTMLInputElement>('cols'),
    rowsInput: get<HTMLInputElement>('rows'),
    ratioInput: get<HTMLInputElement>('ratio'),
  }
}

function paintGrid(canvas: HTMLCanvasElement, map: LuminanceMap): void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)
  const cw = w / map.cols
  const ch = h / map.rows
  for (let r = 0; r < map.rows; r++) {
    for (let c = 0; c < map.cols; c++) {
      const i = r * map.cols + c
      const L = map.mean[i] ?? 0
      const v = Math.round(L * 255)
      ctx.fillStyle = `rgba(${v}, ${v}, ${v}, 0.55)`
      ctx.fillRect(c * cw, r * ch, cw, ch)
      ctx.strokeStyle = 'rgba(255,80,80,0.5)'
      ctx.lineWidth = 1
      ctx.strokeRect(c * cw + 0.5, r * ch + 0.5, cw - 1, ch - 1)
    }
  }
}

async function rebuild(): Promise<void> {
  const r = refs()
  const cols = Math.max(2, Math.min(64, Number(r.colsInput.value) || 16))
  const rows = Math.max(2, Math.min(36, Number(r.rowsInput.value) || 9))
  const targetRatio = Math.max(1, Math.min(21, Number(r.ratioInput.value) || 4.5))

  // Wait for the image to be loaded before drawing.
  if (!r.imgEl.complete || r.imgEl.naturalWidth === 0) {
    await new Promise<void>((resolve) => {
      r.imgEl.addEventListener('load', () => resolve(), { once: true })
      r.imgEl.addEventListener('error', () => resolve(), { once: true })
    })
  }

  // Match the canvas size to the rendered image size.
  const rect = r.imgEl.getBoundingClientRect()
  r.gridCanvas.width = Math.max(1, Math.round(rect.width))
  r.gridCanvas.height = Math.max(1, Math.round(rect.height))

  const bitmap = await createImageBitmap(r.imgEl)
  const map = await computeLuminanceMapFromBitmap(bitmap, { cols, rows })
  paintGrid(r.gridCanvas, map)

  // Sample the region under the synthetic reading panel and emit a report.
  const pr = r.panelRectEl.getBoundingClientRect()
  const ir = r.imgEl.getBoundingClientRect()
  const norm = {
    x: (pr.left - ir.left) / ir.width,
    y: (pr.top - ir.top) / ir.height,
    w: pr.width / ir.width,
    h: pr.height / ir.height,
  }
  const sample = sampleRegion(map, norm)
  const suggestion = suggestTextStyle(sample, targetRatio)
  r.reportEl.textContent = JSON.stringify({ norm, sample, suggestion }, null, 2)

  // Live-apply the suggestion to the synthetic panel.
  r.panelRectEl.style.color = suggestion.color
  const cssColor = suggestion.panelColor
  r.panelRectEl.style.background = `${cssColor}${alphaToHex(suggestion.panelOpacity)}`
  r.panelRectEl.style.borderColor = suggestion.outlineColor
}

function alphaToHex(a: number): string {
  const v = Math.max(0, Math.min(255, Math.round(a * 255)))
  return v.toString(16).padStart(2, '0')
}

function init(): void {
  const r = refs()
  r.pickEl.innerHTML = ''
  for (const url of samples) {
    const o = document.createElement('option')
    o.value = url
    o.textContent = url.replace(/^https:\/\//, '').slice(0, 60) + '…'
    r.pickEl.appendChild(o)
  }
  r.imgEl.crossOrigin = 'anonymous'
  r.imgEl.src = samples[0] ?? ''
  r.pickEl.addEventListener('change', () => {
    r.imgEl.src = r.pickEl.value
    r.imgEl.addEventListener('load', () => void rebuild(), { once: true })
  })
  for (const inp of [r.colsInput, r.rowsInput, r.ratioInput]) {
    inp.addEventListener('change', () => void rebuild())
    inp.addEventListener('input', () => void rebuild())
  }
  // Drag the panel around so you can see the suggestion update.
  let dragging = false
  let ox = 0
  let oy = 0
  r.panelRectEl.addEventListener('pointerdown', (e: PointerEvent) => {
    dragging = true
    ox = e.clientX - r.panelRectEl.offsetLeft
    oy = e.clientY - r.panelRectEl.offsetTop
    r.panelRectEl.setPointerCapture(e.pointerId)
  })
  r.panelRectEl.addEventListener('pointermove', (e: PointerEvent) => {
    if (!dragging) return
    r.panelRectEl.style.left = `${e.clientX - ox}px`
    r.panelRectEl.style.top = `${e.clientY - oy}px`
    void rebuild()
  })
  r.panelRectEl.addEventListener('pointerup', () => {
    dragging = false
  })

  r.imgEl.addEventListener('load', () => void rebuild())
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
