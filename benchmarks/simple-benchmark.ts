/**
 * Micro-benchmark for hot-path `layout()` timing.
 * Requires a canvas-capable environment (browser or runtime with `document` / OffscreenCanvas).
 * Plain `bun run` in the terminal will throw from measurement setup.
 */
import { prepare, layout } from '../src/layout.js'

const text = "Hello world ".repeat(100)
const font = '16px Arial' // safer default font
const prepared = prepare(text, font)

const ITERATIONS = 1000
const WIDTH = 300
const LINE_HEIGHT = 20

// Warm-up (important for accurate timing)
for (let i = 0; i < 100; i++) {
  layout(prepared, WIDTH, LINE_HEIGHT)
}

console.time('layout')
for (let i = 0; i < ITERATIONS; i++) {
  layout(prepared, WIDTH, LINE_HEIGHT)
}
console.timeEnd('layout')