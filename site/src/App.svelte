<script lang="ts">
  // Public site: texts, methodology and demo PNGs exported from the local version. It computes nothing.
  import { TEXT, type Lang } from './text'
  import Controls, { type Catalog } from './Controls.svelte'

  const PAGES = ['overview', 'explorer', 'baskets', 'events', 'cross', 'lab', 'funds', 'methods'] as const
  type Page = typeof PAGES[number]
  interface Shot { file: string, title: string, caption: string }
  interface Item { id: string, tab: Page, label: 'real' | 'synthetic', en?: Shot, tr?: Shot }

  const pageOf = (): Page => { const p = location.hash.replace(/^#\/?/, '') as Page; return PAGES.includes(p) ? p : 'overview' }
  let page = $state<Page>(pageOf())
  addEventListener('hashchange', () => { page = pageOf(); scrollTo(0, 0) })

  const stored = (k: string) => { try { return localStorage.getItem(k) } catch { return null } }
  let lang = $state<Lang>(stored('gdp-lang') === 'tr' ? 'tr' : 'en')
  let dark = $state(stored('gdp-theme') ? stored('gdp-theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches)
  $effect(() => { document.documentElement.lang = lang; try { localStorage.setItem('gdp-lang', lang) } catch { /* private mode */ } })
  $effect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; try { localStorage.setItem('gdp-theme', dark ? 'dark' : 'light') } catch { /* private mode */ } })
  const T = $derived(TEXT[lang])
  $effect(() => { document.title = `${T.nav[page]} · Great Divergence` })

  let items = $state<Item[]>([])
  fetch('./gallery.json', { cache: 'no-cache' }).then(r => (r.ok ? r.json() : { items: [] })).then(g => (items = g.items ?? [])).catch(() => {})
  const shot = (it: Item) => (lang === 'tr' ? it.tr ?? it.en : it.en ?? it.tr)!
  const shots = $derived(items.filter(it => it.tab === page && shot(it)))

  // names of every selectable series and the settings behind the PNGs (no values)
  let cat = $state<Catalog | null>(null), ctl = $state<Record<string, any>>({})
  fetch('./catalog.json').then(r => (r.ok ? r.json() : null)).then(x => (cat = x)).catch(() => {})
  fetch('./controls.json').then(r => (r.ok ? r.json() : {})).then(x => (ctl = x)).catch(() => {})

  // page scale ≈ 150 % (three zoom steps in Safari); on narrower windows less, so the layout keeps at least ~900 px
  const scale = () => { const z = Math.min(1.5, Math.max(1, innerWidth / 900)); document.documentElement.style.zoom = String(z); document.documentElement.style.setProperty('--z', String(z)) }
  scale(); addEventListener('resize', scale)

  let big = $state<Item | null>(null), full = $state(false)
  const open = (it: Item) => { full = false; big = it }
  let menu = $state(false)
  addEventListener('keydown', e => { if (e.key === 'Escape') big = null })
</script>

<div class="app">
<header class="top">
  <a class="brand" href="#/overview">Great Divergence</a>
  <button class="menu" type="button" aria-expanded={menu} onclick={() => (menu = !menu)}>☰</button>
  <nav class:open={menu}>
    {#each PAGES as p}<a href="#/{p}" aria-current={page === p ? 'page' : undefined} onclick={() => (menu = false)}>{T.nav[p]}</a>{/each}
  </nav>
  <div class="tools">
    <div class="lang" role="group" aria-label="Language">
      <button type="button" class:on={lang === 'en'} onclick={() => (lang = 'en')}>EN</button>
      <button type="button" class:on={lang === 'tr'} onclick={() => (lang = 'tr')}>TR</button>
    </div>
    <button type="button" onclick={() => (dark = !dark)} aria-label="Theme">{dark ? '☀' : '☾'}</button>
  </div>
</header>

{#snippet figure(it: Item)}
  {@const s = shot(it)}
  <figure class="card">
    <figcaption class="head"><h2>{s.title}</h2><span class="badge">{it.label === 'synthetic' ? T.demoSynth : T.demoReal}</span></figcaption>
    <button type="button" class="imgbtn" onclick={() => open(it)} aria-label={T.open}><img src="./demo/{s.file}" alt={s.title} loading="lazy" /></button>
    <p class="hint">{s.caption}</p>
    <p class="acts"><button type="button" class="link" onclick={() => open(it)}>{T.open}</button> · <a href="./demo/{s.file}" download={s.file}>{T.download}</a></p>
  </figure>
{/snippet}

<main>
  <h1>{page === 'overview' ? 'Great Divergence' : T.nav[page]}</h1>
  <p class="lead">{T.intro[page]}</p>
  {#if cat && ctl[page]}<Controls {page} {lang} {cat} {ctl} />{/if}

  {#if page === 'overview'}
    <!-- the result in one view: the two headline numbers and the main chart first, the reference tables below -->
    <section class="hero">
      <div class="stats">
        {#each T.headline as h}<div class="stat card"><span class="big">{h[0]}</span><span class="what">{h[1]}</span></div>{/each}
      </div>
      {#each shots as it (it.id)}{@render figure(it)}{/each}
    </section>
    <p class="note">{T.note}</p>
    <div class="grid2">
      <section class="card">
        <h2>{T.coverageTitle}</h2>
        <table>
          <thead><tr>{#each T.coverageHead as h, i}<th class:n={i === 1}>{h}</th>{/each}</tr></thead>
          <tbody>{#each T.coverageRows as r}<tr><td>{r[0]}</td><td class="n nw">{r[1]}</td><td class="nw">{r[2]}</td><td class="nw">{r[3]}</td></tr>{/each}</tbody>
        </table>
        <p class="hint">{T.coverageNote}</p>
      </section>
      <section class="card">
        <h2>{T.scaleTitle}</h2>
        <table><tbody>{#each T.scale as [k, v], i}<tr class:sub={i === 2}><td>{k}</td><td class="n">{v}</td></tr>{/each}</tbody></table>
        <p class="hint">{T.scaleNote}</p>
      </section>
    </div>
    <section class="card">
      <h2>{T.findingsTitle}</h2>
      <ul>{#each T.findings as f}<li>{f}</li>{/each}</ul>
    </section>
  {:else if page === 'funds'}
    <section class="card"><p>{T.fundsText}</p></section>
  {:else if page === 'methods'}
    <section class="card">
      <h2>{T.basketsTitle}</h2>
      {#each T.baskets as b}<p>{b}</p>{/each}
    </section>
    <section class="card">
      <h2>{T.rulesTitle}</h2>
      <ul>{#each T.rules as r}<li>{r}</li>{/each}</ul>
    </section>
  {/if}

  {#if page !== 'methods' && page !== 'overview'}
    <div class="gallery">
      {#each shots as it (it.id)}{@render figure(it)}{:else}<div class="slot card">{T.slot}</div>{/each}
    </div>
  {/if}
</main>

<footer>
  <span>{T.author} · <a href="mailto:cemkarakutuk@hotmail.com">cemkarakutuk@hotmail.com</a></span>
  <span>{T.disclaimer}</span>
</footer>

</div>

{#if big}
  {@const s = shot(big)}
  <div class="lightbox" role="dialog" aria-modal="true" aria-label={s.title} tabindex="-1" onclick={e => { if (e.target === e.currentTarget) big = null }} onkeydown={() => {}}>
    <div class="box">
      <div class="bar"><strong>{s.title}</strong><span><button type="button" onclick={() => (full = !full)}>{full ? T.fit : T.actual}</button> <a href="./demo/{s.file}" download={s.file}>{T.download}</a> <button type="button" onclick={() => (big = null)}>{T.close}</button></span></div>
      <!-- opens fitted to the window (axes and peak in one view); actual size scrolls -->
      <div class="scroll" class:full><button type="button" class="imgbtn" onclick={() => (full = !full)} aria-label={full ? T.fit : T.actual}><img src="./demo/{s.file}" alt={s.title} /></button></div>
      <p class="hint">{big.label === 'synthetic' ? T.demoSynth : T.demoReal} · {s.caption}</p>
    </div>
  </div>
{/if}

<style>
  .top { position: sticky; top: 0; z-index: 40; display: flex; align-items: center; gap: 14px; padding: 8px 18px; background: var(--bg); border-bottom: 1px solid var(--line); }
  .brand { font-weight: 700; color: var(--text); text-decoration: none; white-space: nowrap; }
  nav { display: flex; gap: 2px; flex-wrap: wrap; flex: 1; }
  nav a { color: var(--text-2); text-decoration: none; padding: 5px 10px; border-radius: 6px; font-size: 0.9rem; }
  nav a:hover { color: var(--text); background: var(--bg-2); }
  nav a[aria-current='page'] { color: var(--text); background: var(--bg-2); font-weight: 600; }
  .tools { display: flex; gap: 8px; align-items: center; }
  .lang { display: flex; }
  .lang button { border-radius: 0; min-width: 40px; margin-left: -1px; }
  .lang button:first-child { border-radius: 6px 0 0 6px; } .lang button:last-child { border-radius: 0 6px 6px 0; }
  .lang button.on { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
  .menu { display: none; }
  main { max-width: 1560px; margin: 0 auto; padding: 18px 18px 48px; }
  footer { border-top: 1px solid var(--line); padding: 14px 18px; display: flex; flex-wrap: wrap; gap: 6px 18px; font-size: 0.8rem; color: var(--text-2); }
  .note { max-width: 900px; margin-bottom: 14px; }
  ul { padding-left: 18px; } li { margin: 5px 0; }
  tr.sub td:first-child { padding-left: 18px; color: var(--text-2); }
  td.nw { white-space: nowrap; }
  .gallery { display: grid; grid-template-columns: 1fr; gap: 14px; }
  /* layout follows the scaled page width (container queries), as with browser zoom */
  .app { container: app / inline-size; }
  @container app (min-width: 1300px) { .gallery { grid-template-columns: 1fr 1fr; } }
  figure { margin: 0; }
  .head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .badge { font-size: 0.72rem; color: var(--text-2); border: 1px solid var(--line); border-radius: 999px; padding: 1px 8px; white-space: nowrap; }
  .imgbtn { display: block; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in; }
  .imgbtn img, .scroll img { display: block; width: 100%; height: auto; border-radius: 6px; }
  .acts { font-size: 0.82rem; margin: 2px 0 0; }
  .slot { border-style: dashed; color: var(--text-2); text-align: center; padding: 48px 16px; }
  .lightbox { position: fixed; inset: 0; height: calc(100vh / var(--z, 1)); z-index: 100; background: rgba(15, 23, 42, 0.72); display: flex; align-items: center; justify-content: center; padding: 16px; }
  .box { background: var(--card); border-radius: 12px; padding: 12px; width: min(1800px, 100%); max-height: 100%; display: flex; flex-direction: column; gap: 8px; }
  .bar { display: flex; justify-content: space-between; gap: 10px; align-items: center; flex-wrap: wrap; }
  .scroll { overflow: auto; display: flex; justify-content: center; min-height: 0; }
  .scroll .imgbtn { cursor: zoom-in; width: auto; }
  .scroll img { width: auto; max-width: 100%; max-height: calc(100vh / var(--z, 1) - 150px); object-fit: contain; }
  .scroll.full { display: block; }
  .scroll.full .imgbtn { cursor: zoom-out; }
  .scroll.full img { max-width: none; max-height: none; }
  .hero { display: grid; grid-template-columns: minmax(220px, 280px) 1fr; gap: 14px; align-items: start; margin-bottom: 4px; }
  .stats { display: flex; flex-direction: column; gap: 14px; }
  .stat { display: flex; flex-direction: column; gap: 4px; margin: 0; }
  .big { font-size: 2.2rem; font-weight: 700; line-height: 1.1; color: var(--accent); font-variant-numeric: tabular-nums; }
  .what { font-size: 0.88rem; color: var(--text-2); }
  @container app (max-width: 900px) { .hero { grid-template-columns: 1fr; } .stats { flex-direction: row; } .stat { flex: 1; } }
  @container app (max-width: 760px) {
    .menu { display: inline-block; margin-left: auto; }
    nav { display: none; flex-basis: 100%; order: 10; flex-direction: column; }
    nav.open { display: flex; }
    .top { flex-wrap: wrap; }
  }
</style>
