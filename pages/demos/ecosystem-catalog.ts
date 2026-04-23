import inventory from '../assets/ecosystem-inventory.json'

type Manifest = {
  generated_at: string
  counts: { total: number; core: number; adjacent: number; unclear: number }
  entries: Array<{
    fullName: string
    source: string
    packageName?: string
    communityLabel?: string
    category?: string
    summary?: string
    demoUrl?: string
    tags?: string[]
    repoUrl: string
    ghDescription: string | null
    pushedAt?: string | null
    stargazerCount?: number
    forkCount?: number
    updatedAt?: string | null
    isArchived?: boolean
    isFork?: boolean
    relevance: string
    relevanceRationale: string
    declaresChenglouPretext?: boolean
  }>
}

const manifest = inventory as Manifest

type Entry = Manifest['entries'][number]
type Row = Entry & { haystack: string }

/** Uppercase chip label → awesome-pretext `category` string (exact casing from app.js). */
const CHIP_TO_CATEGORY: Record<string, string> = {
  FOUNDATIONS: 'Foundations',
  'CHAT & LOGS': 'Chat & Logs',
  'EDITORS & DOCS': 'Editors & Docs',
  'GRAPHICS & MEDIA': 'Graphics & Media',
  'PLATFORM TARGETS': 'Platform Targets',
  'TESTING & CI': 'Testing & CI',
}

const CHIP_ORDER = [
  'ALL',
  'FOUNDATIONS',
  'CHAT & LOGS',
  'EDITORS & DOCS',
  'GRAPHICS & MEDIA',
  'PLATFORM TARGETS',
  'TESTING & CI',
  'COMMUNITY',
  'PACKAGE USERS',
  'DISCOVERY',
] as const

type ChipId = (typeof CHIP_ORDER)[number]

const rows: Row[] = manifest.entries.map((e) => ({
  ...e,
  haystack: [
    e.fullName,
    e.packageName ?? '',
    e.communityLabel ?? '',
    e.category ?? '',
    e.summary ?? '',
    (e.tags ?? []).join(' '),
    e.repoUrl,
    e.demoUrl ?? '',
    e.ghDescription ?? '',
    e.stargazerCount != null ? String(e.stargazerCount) : '',
    e.forkCount != null ? String(e.forkCount) : '',
    e.pushedAt ?? '',
    e.updatedAt ?? '',
  ]
    .join(' ')
    .toLowerCase(),
}))

const PAGE = 60

const elStats = document.getElementById('stats')!
const elChips = document.getElementById('chips')!
const elGrid = document.getElementById('grid')!
const elSearch = document.querySelector('#search') as HTMLInputElement
const elMore = document.querySelector('#more') as HTMLButtonElement

let activeChip: ChipId = 'ALL'
let debouncedTerm = ''
let visibleCount = PAGE
let debounceTimer: ReturnType<typeof setTimeout> | null = null

function badgeClass(relevance: string): string {
  if (relevance.startsWith('core')) return 'core'
  if (relevance.startsWith('adjacent')) return 'adjacent'
  return 'unclear'
}

function matchesChip(r: Row, chip: ChipId): boolean {
  if (chip === 'ALL') return true
  if (chip === 'COMMUNITY') return r.source === 'awesome-pretext-community'
  if (chip === 'PACKAGE USERS') return r.source === 'pretext-dependent-search'
  if (chip === 'DISCOVERY') return r.source === 'discovery-search'
  const want = CHIP_TO_CATEGORY[chip]
  if (!want) return false
  return (r.category ?? '').toLowerCase() === want.toLowerCase()
}

function filtered(): Row[] {
  return rows.filter((r) => {
    if (!matchesChip(r, activeChip)) return false
    if (debouncedTerm && !r.haystack.includes(debouncedTerm)) return false
    return true
  })
}

function cardKicker(r: Row): string {
  if (r.category) return r.category.toUpperCase()
  if (r.source === 'awesome-pretext-community') return 'COMMUNITY'
  if (r.source === 'pretext-dependent-search') return 'PACKAGE USERS'
  if (r.source === 'discovery-search') return 'DISCOVERY'
  return 'ECOSYSTEM'
}

function titleText(r: Row): string {
  return r.packageName ?? r.fullName
}

function subtitleText(r: Row): string | null {
  if (r.packageName) return r.fullName
  return null
}

function descriptionText(r: Row): string {
  const gh = r.ghDescription ?? ''
  if (gh.startsWith('(gh repo view failed')) return r.summary ?? ''
  return gh || r.summary || ''
}

function ghStatsLine(r: Row): string {
  const parts: string[] = []
  if (r.stargazerCount != null) parts.push(`★ ${String(r.stargazerCount)}`)
  if (r.forkCount != null) parts.push(`forks ${String(r.forkCount)}`)
  if (r.pushedAt) parts.push(`pushed ${r.pushedAt.slice(0, 10)}`)
  else if (r.updatedAt) parts.push(`updated ${r.updatedAt.slice(0, 10)}`)
  if (r.isArchived) parts.push('archived')
  if (r.isFork) parts.push('fork')
  return parts.join(' · ')
}

/** Non-boilerplate classification blurb for `<details>` (omit for typical core packages). */
function classificationDetails(r: Row): { relevance: string; rationale: string } | null {
  if (r.relevance === 'core-pretext-ecosystem' && r.declaresChenglouPretext) return null
  return { relevance: r.relevance, rationale: r.relevanceRationale }
}

function renderChips(): void {
  elChips.innerHTML = ''
  for (const chip of CHIP_ORDER) {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'chip'
    b.textContent = chip
    b.dataset['chip'] = chip
    b.setAttribute('aria-pressed', chip === activeChip ? 'true' : 'false')
    b.addEventListener('click', () => {
      activeChip = chip
      visibleCount = PAGE
      renderChips()
      render()
    })
    elChips.appendChild(b)
  }
}

function render(): void {
  elStats.textContent = `Generated ${manifest.generated_at.slice(0, 10)} · ${String(manifest.counts.total)} repos · core ${String(manifest.counts.core)} · adjacent ${String(manifest.counts.adjacent)} · unclear ${String(manifest.counts.unclear)}`

  const list = filtered()
  const slice = list.slice(0, visibleCount)

  const frag = document.createDocumentFragment()
  if (slice.length === 0) {
    const p = document.createElement('p')
    p.className = 'empty'
    p.textContent = 'No matches. Clear search or pick ALL.'
    frag.appendChild(p)
  } else {
    for (const r of slice) {
      const art = document.createElement('article')
      art.className = 'card'

      const kicker = document.createElement('p')
      kicker.className = 'card-kicker'
      kicker.textContent = cardKicker(r)
      art.appendChild(kicker)

      const row = document.createElement('div')
      row.className = 'row'
      const titleBlock = document.createElement('div')
      titleBlock.className = 'title-block'
      const h3 = document.createElement('h3')
      h3.textContent = titleText(r)
      titleBlock.appendChild(h3)
      const sub = subtitleText(r)
      if (sub) {
        const s = document.createElement('p')
        s.className = 'repo-path'
        s.textContent = sub
        titleBlock.appendChild(s)
      }
      const badge = document.createElement('span')
      badge.className = `badge ${badgeClass(r.relevance)}`
      badge.textContent = r.relevance
      row.appendChild(titleBlock)
      row.appendChild(badge)
      art.appendChild(row)

      const stats = document.createElement('p')
      stats.className = 'gh-stats'
      stats.textContent = ghStatsLine(r)
      art.appendChild(stats)

      if (r.communityLabel) {
        const lab = document.createElement('p')
        lab.className = 'community-label'
        lab.textContent = r.communityLabel
        art.appendChild(lab)
      }

      const desc = document.createElement('p')
      desc.className = 'desc'
      desc.textContent = descriptionText(r)
      art.appendChild(desc)

      const tags = r.tags ?? []
      if (tags.length > 0) {
        const tagRow = document.createElement('div')
        tagRow.className = 'tag-row'
        for (const t of tags.slice(0, 10)) {
          const sp = document.createElement('span')
          sp.className = 'tag-pill'
          sp.textContent = t
          tagRow.appendChild(sp)
        }
        art.appendChild(tagRow)
      }

      const links = document.createElement('div')
      links.className = 'links'
      const aRepo = document.createElement('a')
      aRepo.className = 'pill'
      aRepo.href = r.repoUrl
      aRepo.target = '_blank'
      aRepo.rel = 'noopener noreferrer'
      aRepo.textContent = 'repo'
      links.appendChild(aRepo)
      if (r.demoUrl) {
        const aDemo = document.createElement('a')
        aDemo.className = 'pill'
        aDemo.href = r.demoUrl
        aDemo.target = '_blank'
        aDemo.rel = 'noopener noreferrer'
        aDemo.textContent = 'demo'
        links.appendChild(aDemo)
      }
      art.appendChild(links)

      const cls = classificationDetails(r)
      if (cls) {
        const det = document.createElement('details')
        det.className = 'classification'
        const sum = document.createElement('summary')
        sum.textContent = 'Classification note'
        det.appendChild(sum)
        const body = document.createElement('div')
        body.className = 'classification-body'
        const p = document.createElement('p')
        const strong = document.createElement('strong')
        strong.textContent = cls.relevance
        p.appendChild(strong)
        p.appendChild(document.createTextNode(` — ${cls.rationale}`))
        body.appendChild(p)
        det.appendChild(body)
        art.appendChild(det)
      }

      frag.appendChild(art)
    }
  }

  elGrid.replaceChildren(frag)

  if (list.length > visibleCount) {
    elMore.hidden = false
    elMore.textContent = `Load more (${String(list.length - visibleCount)} left)`
  } else {
    elMore.hidden = true
  }
}

elSearch.addEventListener('input', () => {
  const raw = elSearch.value.trim().toLowerCase()
  if (debounceTimer !== null) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedTerm = raw
    visibleCount = PAGE
    render()
  }, 140)
})

elMore.addEventListener('click', () => {
  visibleCount += PAGE
  render()
})

renderChips()
render()
