// Labels of the read-only control panels (same controls as the local version).
export const UI = {
  en: {
    readonly: 'Settings used for the demo PNGs on this page. Selecting and recalculating works in the local version; the lists show every series available there.',
    series: 'Series', bench: 'Benchmark', add: '+ Add', change: 'Change', search: 'Search', close: 'Close', showing: 'Showing {n} of {m}', none: 'Nothing found',
    stocks: 'Stocks', funds: 'TEFAS funds', mine: 'My baskets', basis: 'Basis', freq: 'Frequency', from: 'From', to: 'To', window: 'Rolling window', charts: 'Charts',
    measure: 'Measure', date: 'Date', evWindow: 'Window', weighting: 'Weighting', rebalance: 'Rebalance', matrixA: 'Matrix A', matrixB: 'Matrix B',
    markets: 'Markets and series', pe: 'P/E markets', tab: 'View', stocksTab: 'Stocks', heatTab: 'Heatmap', metric: 'Metric', fund: 'Fund', kap: 'KAP portfolio', period: 'Report',
    latest: 'latest', all: 'all',
    opt: {
      TRY: 'TRY', USD: 'USD', REAL: 'Real TRY', A: 'Auto', D: 'Daily', W: 'Weekly', M: 'Monthly',
      corr: 'Correlation', beta: 'Beta (row on column)', raw: 'Return', rel: 'vs benchmark',
      equal: 'Equal', market_cap: 'Market value', custom: 'Custom', daily: 'Daily', monthly: 'Monthly', hold: 'Buy and hold',
      ret: 'Return', excess: 'Excess vs benchmark', cumdiv: 'Cumulative divergence', vol: 'Rolling volatility', pe_chg: 'P/E change', pe_rel: 'P/E vs world',
      index: 'Index (start = 100)', cum: 'Cumulative return', logdiv: 'Relative to benchmark', dd: 'Drawdown', mcap: 'Market value',
      aum: 'Assets', flow: 'Net flow', flowpct: 'Flow / assets', investors: 'Investors', price: 'Unit price',
      logdivC: 'Relative performance', rebased: 'Index (start = 100)', cumret: 'Cumulative return', rollcorr: 'Rolling correlation', rollbeta: 'Rolling beta',
      rollvol: 'Rolling volatility', drawdown: 'Drawdown', zscore: 'Unusualness (z)', level: 'Level', change: 'Change (rates)',
    } as Record<string, string>,
  },
  tr: {
    readonly: 'Bu sayfadaki demo PNG\'lerin alındığı ayarlar. Seçim ve yeniden hesaplama yerel sürümde yapılır; listeler orada bulunan bütün serileri gösterir.',
    series: 'Seriler', bench: 'Benchmark', add: '+ Ekle', change: 'Değiştir', search: 'Ara', close: 'Kapat', showing: '{m} sonucun {n} tanesi', none: 'Sonuç yok',
    stocks: 'Hisseler', funds: 'TEFAS fonları', mine: 'Sepetlerim', basis: 'Baz', freq: 'Frekans', from: 'Başlangıç', to: 'Bitiş', window: 'Kayan pencere', charts: 'Grafikler',
    measure: 'Ölçü', date: 'Tarih', evWindow: 'Pencere', weighting: 'Ağırlık', rebalance: 'Dengeleme', matrixA: 'Matris A', matrixB: 'Matris B',
    markets: 'Piyasalar ve seriler', pe: 'F/K piyasaları', tab: 'Görünüm', stocksTab: 'Hisseler', heatTab: 'Isı haritası', metric: 'Ölçü', fund: 'Fon', kap: 'KAP portföyü', period: 'Rapor',
    latest: 'son veri', all: 'tümü',
    opt: {
      TRY: 'TL', USD: 'USD', REAL: 'Reel TL', A: 'Otomatik', D: 'Günlük', W: 'Haftalık', M: 'Aylık',
      corr: 'Korelasyon', beta: 'Beta (satırın sütuna)', raw: 'Getiri', rel: 'Benchmark\'a göre',
      equal: 'Eşit', market_cap: 'Piyasa değeri', custom: 'Özel', daily: 'Günlük', monthly: 'Aylık', hold: 'Al ve tut',
      ret: 'Getiri', excess: 'Benchmark\'a göre fazla', cumdiv: 'Kümülatif ayrışma', vol: 'Kayan oynaklık', pe_chg: 'F/K değişimi', pe_rel: 'Dünyaya göre F/K',
      index: 'Endeks (başlangıç = 100)', cum: 'Kümülatif getiri', logdiv: 'Benchmark\'a göre', dd: 'Zirveden düşüş', mcap: 'Piyasa değeri',
      aum: 'Büyüklük', flow: 'Net akım', flowpct: 'Akım / büyüklük', investors: 'Yatırımcı', price: 'Birim fiyat',
      logdivC: 'Göreli performans', rebased: 'Endeks (başlangıç = 100)', cumret: 'Kümülatif getiri', rollcorr: 'Kayan korelasyon', rollbeta: 'Kayan beta',
      rollvol: 'Kayan oynaklık', drawdown: 'Zirveden düşüş', zscore: 'Olağandışılık (z)', level: 'Seviye', change: 'Değişim (faiz)',
    } as Record<string, string>,
  },
}
export const MARKETS: Record<string, [string, string]> = {
  TR: ['Turkey', 'Türkiye'], WORLD: ['World', 'Dünya'], US: ['United States', 'ABD'], EUROPE: ['Europe', 'Avrupa'], R2000: ['US small caps', 'ABD küçük şirketler'],
  BR: ['Brazil', 'Brezilya'], CL: ['Chile', 'Şili'], CN: ['China', 'Çin'], ID: ['Indonesia', 'Endonezya'], IN: ['India', 'Hindistan'], MX: ['Mexico', 'Meksika'],
  PH: ['Philippines', 'Filipinler'], TH: ['Thailand', 'Tayland'],
}
