/**
 * Clone or update every repo listed in research/forks/ecosystem-inventory.json
 * into upstream/<owner>-<repo>/ (shallow clone).
 *
 * Usage: bun run scripts/ecosystem-clone-upstream.ts
 */

import { existsSync } from 'node:fs'
import { mkdir, appendFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, '..')
const INVENTORY = join(ROOT, 'research', 'forks', 'ecosystem-inventory.json')
const UPSTREAM = join(ROOT, 'upstream')
const LOG = join(ROOT, 'research', 'forks', 'UPSTREAM-SYNC.log')

type Manifest = { entries: Array<{ fullName: string }> }

function cloneDir(fullName: string): string {
  return join(UPSTREAM, fullName.replace('/', '-'))
}

async function run(cmd: string[], cwd: string): Promise<number> {
  const proc = Bun.spawn(cmd, { cwd, stdout: 'inherit', stderr: 'inherit' })
  return proc.exited
}

async function main() {
  const raw = await Bun.file(INVENTORY).text()
  const manifest = JSON.parse(raw) as Manifest
  await mkdir(UPSTREAM, { recursive: true })

  const stamp = new Date().toISOString()
  await appendFile(LOG, `\n## ${stamp} ecosystem-clone-upstream\n`, 'utf8')

  let ok = 0
  let fail = 0
  for (const { fullName } of manifest.entries) {
    const dir = cloneDir(fullName)
    const url = `https://github.com/${fullName}.git`
    if (existsSync(join(dir, '.git'))) {
      const code = await run(['git', '-C', dir, 'fetch', '--depth', '1', 'origin'], ROOT)
      if (code === 0) {
        await run(['git', '-C', dir, 'pull', '--ff-only'], ROOT)
        await appendFile(LOG, `FETCH ${fullName} -> ${dir}\n`, 'utf8')
        ok++
      } else {
        await appendFile(LOG, `FAIL_FETCH ${fullName}\n`, 'utf8')
        fail++
      }
      continue
    }
    const code = await run(['git', 'clone', '--depth', '1', url, dir], ROOT)
    if (code === 0) {
      await appendFile(LOG, `CLONE ${fullName} -> ${dir}\n`, 'utf8')
      ok++
    } else {
      await appendFile(LOG, `FAIL_CLONE ${fullName}\n`, 'utf8')
      fail++
    }
  }

  await appendFile(LOG, `DONE ok=${ok} fail=${fail}\n`, 'utf8')
  console.log('Upstream clones:', { ok, fail, UPSTREAM })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
