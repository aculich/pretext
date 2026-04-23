import inventory from '../assets/ecosystem-inventory.json'

type Manifest = {
  generated_at: string
  counts: { total: number; core: number; adjacent: number; unclear: number }
  entries: Array<{
    fullName: string
    source: string
    category?: string
    summary?: string
    demoUrl?: string
    tags?: string[]
    repoUrl: string
    ghDescription: string | null
    relevance: string
    relevanceRationale: string
  }>
}

const manifest = inventory as Manifest

type Entry = Manifest['entries'][number]
type Row = Entry & { displayCategory: string; haystack: string }

function displayCategory(e: Entry): string {
  if (e.category) return e.category
  if (e.source === 'awesome-pretext-community') return 'Community'
  if (e.source === 'discovery-search') return 'Discovery'
  return 'ShipItAndPray catalog'
}

const rows: Row[] = manifest.entries.map((e) => ({
  ...e,
  displayCategory: displayCategory(e),
  haystack: [
    e.fullName,
    e.ghDescription ?? '',
    e.summary ?? '',
    (e.tags ?? []).join(' '),
    e.repoUrl,
    e.demoUrl ?? '',
  ]
    .join(' ')
    .toLowerCase(),
}))

const categories = ['All', ...Array.from(new Set(rows.map((r) => r.displayCategory))).sort()]

const PAGE = 60

const elStats = document.getElementById('stats')!
const elChips = document.getElementById('chips')!
const elGrid = document.getElementById('grid')!
const elSearch = document.querySelector('#search') as HTMLInputElement
const elMore = document.querySelector('#more') as HTMLButtonElement

let activeCategory = 'All'
let debouncedTerm = ''
let visibleCount = PAGE
let debounceTimer: ReturnType<typeof setTimeout> | null = null

function badgeClass(relevance: string): string {
  if (relevance.startsWith('core')) return 'core'
  if (relevance.startsWith('adjacent')) return 'adjacent'
  return 'unclear'
}

function filtered(): Row[] {
  return rows.filter((r) => {
    if (activeCategory !== 'All' && r.displayCategory !== activeCategory) return false
    if (debouncedTerm && !r.haystack.includes(debouncedTerm)) return false
    return true
  })
}

function renderChips(): void {
  elChips.innerHTML = ''
  for (const cat of categories) {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'chip'
    b.textContent = cat
    b.dataset['category'] = cat
    b.setAttribute('aria-pressed', cat === activeCategory ? 'true' : 'false')
    b.addEventListener('click', () => {
      activeCategory = cat
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
    p.textContent = 'No matches. Clear search or pick All.'
    frag.appendChild(p)
  } else {
    for (const r of slice) {
      const art = document.createElement('article')
      art.className = 'card'

      const row = document.createElement('div')
      row.className = 'row'
      const h3 = document.createElement('h3')
      h3.textContent = r.fullName
      const badge = document.createElement('span')
      badge.className = `badge ${badgeClass(r.relevance)}`
      badge.textContent = r.relevance
      row.appendChild(h3)
      row.appendChild(badge)
      art.appendChild(row)

      const meta = document.createElement('p')
      meta.className = 'meta'
      meta.textContent = `${r.displayCategory} · ${r.source}`
      art.appendChild(meta)

      const desc = document.createElement('p')
      desc.textContent = r.ghDescription ?? r.summary ?? ''
      art.appendChild(desc)

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

      const rat = document.createElement('p')
      rat.className = 'rationale'
      rat.textContent = r.relevanceRationale
      art.appendChild(rat)

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
