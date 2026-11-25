<script lang="ts" module>
  export interface Catalog { groups: { id: string, en: string, tr: string }[], series: { id: string, g: string, en: string, tr: string }[], stocks: [string, string][], funds: [string, string, string][] }
</script>

<script lang="ts">
  // Read-only copy of a page's control panel: the settings behind its demo PNGs, and the full list of selectable series.
  import { UI, MARKETS } from './ui'
  import type { Lang } from './text'

  interface Props { page: string, lang: Lang, cat: Catalog, ctl: Record<string, any> }
  let { page, lang, cat, ctl }: Props = $props()
  const U = $derived(UI[lang])
  const o = (k: string) => U.opt[k] ?? k

  const byId = $derived(new Map(cat.series.map(s => [s.id, s])))
  const stockName = $derived(new Map(cat.stocks))
  const fundName = $derived(new Map(cat.funds.map(f => [f[0], f[1]])))
  const users = $derived((ctl.userBaskets ?? []) as { id: string, label: string, members: string[] }[])
  function name(id: string) {
    if (id.startsWith('S:')) return `${id.slice(2)} · ${stockName.get(id.slice(2)) ?? ''}`
    if (id.startsWith('T:') || id.startsWith('F_')) return `${id.slice(2)} · ${fundName.get(id.slice(2)) ?? ''}`
    if (id.startsWith('U:')) return users.find(u => u.id === id)?.label ?? id.slice(2)
    const s = byId.get(id)
    return s ? s[lang] : id
  }
  const MON = { en: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '), tr: 'Oca Şub Mar Nis May Haz Tem Ağu Eyl Eki Kas Ara'.split(' ') }
  const date = (s: string) => { if (!s) return U.latest; const [y, m, d] = s.split('-').map(Number); return `${d} ${MON[lang][m - 1]} ${y}` }

  // picker (one open at a time): browse every selectable series by group, with search
  let open = $state<string | null>(null), tab = $state('fund_basket'), q = $state('')
  const fold = (s: string) => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i')
  const tabs = $derived([...cat.groups.map(g => ({ id: g.id, label: g[lang], n: cat.series.filter(s => s.g === g.id).length })),
    { id: 'stock', label: U.stocks, n: cat.stocks.length }, { id: 'funds', label: U.funds, n: cat.funds.length },
    ...(users.length ? [{ id: 'user', label: U.mine, n: users.length }] : [])])
  const SHOW = 300
  const list = $derived.by(() => {
    const f = fold(q.trim())
    const hit = (...xs: string[]) => !f || xs.some(x => fold(x).includes(f))
    let all: { id: string, label: string }[]
    if (tab === 'stock') all = cat.stocks.filter(([s, n]) => hit(s, n)).map(([s, n]) => ({ id: 'S:' + s, label: `${s} · ${n}` }))
    else if (tab === 'funds') all = cat.funds.filter(([c, n]) => hit(c, n)).map(([c, n, e]) => ({ id: e || 'T:' + c, label: `${c} · ${n}` }))
    else if (tab === 'user') all = users.map(u => ({ id: u.id, label: `${u.label} (${u.members.join(', ')})` }))
    else all = cat.series.filter(s => (f ? true : s.g === tab) && hit(s.id, s.en, s.tr)).map(s => ({ id: s.id, label: s[lang] }))
    return { items: all.slice(0, SHOW), total: all.length }
  })
  const toggle = (k: string) => { open = open === k ? null : k; q = '' }

  const c = $derived(ctl[page] ?? {})
</script>

{#snippet chips(key: string, ids: string[], single = false, title = U.series)}
  <div class="picker">
    <span class="lab">{title}</span>
    <div class="chips">
      {#each ids as id}<span class="chip">{name(id)}</span>{/each}
      <button type="button" class="add" aria-expanded={open === key} onclick={() => toggle(key)}>{single ? U.change : U.add}</button>
    </div>
    {#if open === key}
      <div class="panel">
        <div class="tabs">{#each tabs as g}<button type="button" class:on={tab === g.id} onclick={() => (tab = g.id)}>{g.label} <small>{g.n}</small></button>{/each}</div>
        <input type="search" placeholder={U.search} bind:value={q} />
        <ul>
          {#each list.items as it (it.id)}<li><label><input type={single ? 'radio' : 'checkbox'} checked={ids.includes(it.id)} disabled /> <span>{it.label}</span></label></li>
          {:else}<li class="empty">{U.none}</li>{/each}
        </ul>
        {#if list.total > SHOW}<p class="more">{U.showing.replace('{n}', String(SHOW)).replace('{m}', String(list.total))}</p>{/if}
        <div class="foot"><button type="button" onclick={() => (open = null)}>{U.close}</button></div>
      </div>
    {/if}
  </div>
{/snippet}

{#snippet seg(label: string, opts: string[], value: string)}
  <div class="seg"><span class="lab">{label}</span>{#each opts as v}<button type="button" class:on={v === value} disabled>{o(v)}</button>{/each}</div>
{/snippet}

{#snippet field(label: string, value: string)}
  <span class="field"><span class="lab">{label}</span><span class="val">{value}</span></span>
{/snippet}

<section class="card controls">
  {#if page === 'explorer'}
    <div class="row2">{@render chips('s', c.series ?? [])}{@render chips('b', c.bench ?? [], true, U.bench)}</div>
    <div class="row">{@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.basis)}{@render seg(U.freq, ['A', 'D', 'W', 'M'], c.freq)}
      {@render field(U.from, date(c.from))}{@render field(U.to, date(c.to))}{@render field(U.window, String(c.window || ''))}</div>
    <div class="row"><span class="lab">{U.charts}</span>{#each c.charts ?? [] as k}<span class="tag">{o(k === 'logdiv' ? 'logdivC' : k)}</span>{/each}</div>
  {:else if page === 'baskets'}
    <div class="row2">{@render chips('s', c.picks ?? [], false, U.stocks)}{@render chips('b', c.bench ?? [], true, U.bench)}</div>
    <div class="row">{@render seg(U.weighting, ['equal', 'market_cap', 'custom'], c.weighting)}{@render seg(U.rebalance, ['daily', 'monthly', 'hold'], c.rebalance)}
      {@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.basis)}{@render field(U.from, date(c.from))}{@render field(U.to, date(c.to))}</div>
  {:else if page === 'events'}
    <div class="row2">{@render chips('s', c.series ?? [])}{@render chips('b', c.bench ?? [], true, U.bench)}</div>
    <div class="row">{@render field(U.date, date(c.a))}{@render field(U.evWindow, `−${c.pre} / +${c.post}`)}
      {@render seg(U.measure, ['raw', 'rel'], c.measure)}{@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.basis)}</div>
  {:else if page === 'cross'}
    {@render chips('s', c.ids ?? [], false, U.markets)}
    <div class="row">{@render seg(U.measure, ['corr', 'beta'], c.metric)}{@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.basis)}{@render seg(U.freq, ['D', 'W', 'M'], c.freq)}</div>
    <div class="row">{@render field(U.matrixA, `${date(c.a?.from)} – ${date(c.a?.to)}`)}{@render field(U.matrixB, `${date(c.b?.from)} – ${date(c.b?.to)}`)}</div>
    <div class="row"><span class="lab">{U.pe}</span>{#each Object.keys(MARKETS) as m}<label class="sm"><input type="checkbox" checked={(c.pe ?? []).includes(m)} disabled /> {MARKETS[m][lang === 'tr' ? 1 : 0]}</label>{/each}</div>
  {:else if page === 'lab'}
    <div class="row2">{@render chips('s', c.ids ?? [])}{@render chips('b', c.bench ?? [], true, U.bench)}</div>
    <div class="row">{@render seg(U.measure, ['ret', 'excess', 'cumdiv', 'corr', 'beta', 'vol', 'pe_chg', 'pe_rel'], c.measure)}{@render seg(U.freq, ['W', 'M'], c.freq)}
      {@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.basis)}{@render field(U.window, String(c.win ?? ''))}{@render field(U.from, date(c.from))}{@render field(U.to, date(c.to))}</div>
    {@render chips('k', c.stocks ?? [], false, U.stocksTab)}
    <div class="row">{@render seg(U.metric, ['index', 'cum', 'logdiv', 'dd', 'vol', 'mcap'], c.sMetric)}{@render seg(U.freq, ['D', 'W', 'M'], c.sFreq)}
      {@render seg(U.basis, ['TRY', 'USD', 'REAL'], c.sBasis)}{@render field(U.from, date(c.sFrom))}</div>
  {:else if page === 'funds'}
    <div class="row">{@render seg(U.metric, ['aum', 'flow', 'flowpct', 'investors'], c.metric)}{@render field(U.fund, name('T:' + c.fund))}
      {@render seg(U.metric, ['price', 'aum', 'investors'], c.fMetric)}{@render field(U.kap, `${c.kFund} · ${c.kPeriod}`)}</div>
  {/if}
  <p class="hint">{U.readonly}</p>
</section>

<style>
  .controls { display: flex; flex-direction: column; gap: 10px; }
  .row2 { display: grid; grid-template-columns: 2fr 1fr; gap: 16px; }
  .row { display: flex; flex-wrap: wrap; gap: 8px 18px; align-items: center; }
  .lab { font-size: 0.74rem; color: var(--text-2); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; margin-right: 6px; }
  .picker { position: relative; min-width: 0; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
  .chip, .tag { border: 1px solid var(--line); border-radius: 999px; padding: 2px 10px; font-size: 0.84rem; background: var(--bg-2); }
  .tag { font-size: 0.78rem; }
  .add { border-radius: 999px; font-size: 0.82rem; }
  .panel { position: absolute; z-index: 30; left: 0; top: 100%; margin-top: 6px; width: min(720px, 92vw); background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 10px; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.18); }
  .tabs { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
  .tabs button { font-size: 0.8rem; padding: 3px 8px; }
  .tabs button.on { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
  .tabs small { opacity: 0.7; }
  input[type='search'] { width: 100%; margin-bottom: 6px; }
  ul { list-style: none; padding: 0; margin: 0; max-height: 320px; overflow: auto; }
  li label { display: flex; gap: 8px; align-items: center; padding: 3px 4px; font-size: 0.86rem; }
  li.empty { color: var(--text-2); padding: 8px; }
  .more { color: var(--text-2); font-size: 0.78rem; margin: 4px 2px 0; }
  .foot { display: flex; justify-content: flex-end; margin-top: 6px; }
  .seg { display: inline-flex; align-items: center; flex-wrap: wrap; }
  .seg button { border-radius: 0; margin-left: -1px; font-size: 0.82rem; padding: 3px 9px; opacity: 1; cursor: default; }
  .seg button:nth-child(2) { border-radius: 6px 0 0 6px; } .seg button:last-child { border-radius: 0 6px 6px 0; }
  .seg button.on { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
  .field { display: inline-flex; align-items: center; }
  .val { border: 1px solid var(--line); border-radius: 6px; padding: 3px 9px; font-size: 0.84rem; background: var(--bg-2); }
  .sm { font-size: 0.82rem; display: inline-flex; gap: 4px; align-items: center; }
  @media (max-width: 800px) { .row2 { grid-template-columns: 1fr; } }
</style>
