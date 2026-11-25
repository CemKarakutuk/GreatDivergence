// Formulas of the local Methods page (same TeX), with their short explanations.
export const TEX = [
 "r_t = \\frac{P_t}{P_{t-1}} - 1, \\qquad P^{\\mathrm{USD}}_t = \\frac{P^{\\mathrm{TRY}}_t}{S_t}, \\qquad P^{\\mathrm{real}}_t = \\frac{P^{\\mathrm{TRY}}_t}{\\mathrm{CPI}_{m(t)}}",
 "D_t = \\sum_{\\tau \\le t} \\big[\\ln(1+r^{s}_\\tau) - \\ln(1+r^{b}_\\tau)\\big] = \\ln\\frac{P^{s}_t}{P^{s}_0} - \\ln\\frac{P^{b}_t}{P^{b}_0}",
 "I_t = 100 \\prod_{\\tau \\le t} (1 + r_\\tau), \\qquad \\mathrm{DD}_t = \\frac{I_t}{\\max_{\\tau \\le t} I_\\tau} - 1",
 "\\rho_t = \\frac{\\widehat{\\mathrm{cov}}_w(r^s, r^b)}{\\hat\\sigma_w(r^s)\\,\\hat\\sigma_w(r^b)}, \\qquad \\beta_t = \\frac{\\widehat{\\mathrm{cov}}_w(r^s, r^b)}{\\hat\\sigma^2_w(r^b)}, \\qquad \\sigma^{\\mathrm{ann}}_t = \\hat\\sigma_w(r)\\sqrt{A}",
 "\\hat\\sigma^2_{LR} = \\hat\\gamma_0 + 2\\sum_{j=1}^{L}\\Big(1 - \\frac{j}{L+1}\\Big)\\hat\\gamma_j, \\qquad L = \\Big\\lfloor 4\\Big(\\frac{T}{100}\\Big)^{2/9} \\Big\\rfloor",
 "z = \\frac{\\bar d}{\\sqrt{\\hat\\sigma^2_{LR}/T}}, \\qquad d_t = \\ln(1+r^s_t) - \\ln(1+r^b_t)",
 "z_t = \\frac{\\sum_{i=t-k+1}^{t} d_i - k\\,\\hat\\mu}{\\sqrt{k}\\,\\hat\\sigma_{LR}}, \\qquad z^{*} = \\Phi^{-1}\\Big(1 - \\frac{0.025}{N}\\Big)",
 "S = \\max_{t} \\frac{\\big|\\sum_{i \\le t} (d_i - \\bar d)\\big|}{\\hat\\sigma_{LR}\\sqrt{T}}, \\qquad p = \\Pr(K > S)",
 "\\min_{k_1 < \\dots < k_m} \\sum_{j=1}^{m+1} \\sum_{t=k_{j-1}+1}^{k_j} (d_t - \\mu_j)^2, \\qquad \\mathrm{LWZ}(m) = \\ln\\frac{\\mathrm{SSR}_m}{T-p} + p\\,\\frac{0.299\\,(\\ln T)^{2.1}}{T}",
 "\\hat k \\pm \\Big\\lceil 11.03\\,\\frac{\\hat\\sigma^2_{LR}}{\\hat\\delta^2} \\Big\\rceil, \\qquad \\hat\\delta = \\hat\\mu_{j+1} - \\hat\\mu_j",
 "R_t = \\frac{P_t}{P_{-1}} - 1, \\qquad R^{\\mathrm{before}} = \\prod_{t=-a}^{-1} (1 + r_t) - 1, \\qquad R^{\\mathrm{after}} = \\prod_{t=0}^{+b} (1 + r_t) - 1, \\qquad R_{\\mathrm{rel}} = \\frac{1 + R^{s}}{1 + R^{b}} - 1",
 "w_{i,t} = \\frac{V_{i,t}}{\\sum_j V_{j,t}}, \\qquad r^{\\mathrm{PIT}}_t = \\sum_i w_{i,t}\\, r_{i,t}",
 "c_i = \\sum_t \\frac{k_t}{K}\\, w_{i,t-1}\\, r_{i,t}, \\qquad k_t = \\frac{\\ln(1+r_t)}{r_t}, \\quad K = \\frac{\\ln(1+R)}{R}, \\quad \\sum_i c_i = R",
 "F_m = \\sum_{t \\in m} (N_t - N_{t-1})\\, p_t"
]
export const FORMULAS = {
 "en": {
  "title": "Measures",
  "items": [
   {
    "h": "Returns and basis",
    "d": "P: price or index level; S: USD/TRY; CPI: Turkish CPI of the month. Returns are taken between consecutive common observations."
   },
   {
    "h": "Log divergence",
    "d": "Series s against benchmark b. D = 1 means s did e ≈ 2.72 times better than b since the start of the range."
   },
   {
    "h": "Index and drawdown",
    "d": "I: index starting at 100; DD: fall from the running maximum."
   },
   {
    "h": "Rolling statistics",
    "d": "w: window length in observations; A: periods per year (252, 52 or 12)."
   },
   {
    "h": "Long-run variance",
    "d": "γ_j: autocovariance at lag j of the centred series; Bartlett weights; T: sample size."
   },
   {
    "h": "Mean excess return (HAC)",
    "d": "d: daily log excess return; the mean is tested against zero with the long-run variance."
   },
   {
    "h": "Unusualness (rolling z)",
    "d": "μ̂ and σ̂_LR come from the w observations before the k-period window (daily k = 60, w = 250; weekly 13 and 104). N: number of z values; z* is the Bonferroni threshold."
   },
   {
    "h": "CUSUM",
    "d": "K follows the Kolmogorov distribution. Applied to (d − d̄)² it tests the variance."
   },
   {
    "h": "Structural breaks (Bai–Perron)",
    "d": "Up to five breaks, each segment at least max(20, 5% of T) long; m chosen by LWZ (p = 2m + 1). Applied to (d − d̄)² for variance breaks."
   },
   {
    "h": "Break date interval",
    "d": "Approximate 95% interval (Bai 1997); δ̂: jump in the segment mean."
   },
   {
    "h": "Event window",
    "d": "P_{−1}: close of the last session before the event (t = −1). The chart shows R_t, so every line is 0 there. Before: a sessions up to that close; after: day 0 to day b. R_rel compares the series with the benchmark over the same span. Compounding keeps losses above −100% (a sum of daily returns can go below it)."
   },
   {
    "h": "Point-in-time basket",
    "d": "V: TL value held in the latest KAP report published before t (at most 120 days old)."
   },
   {
    "h": "Contribution",
    "d": "R: basket return; w: weight at the start of the day."
   },
   {
    "h": "Fund flow",
    "d": "N: units outstanding; p: unit price."
   }
  ]
 },
 "tr": {
  "title": "Ölçüler",
  "items": [
   {
    "h": "Getiri ve baz",
    "d": "P: fiyat ya da endeks; S: USD/TRY; TÜFE: ayın TÜFE'si. Getiri, ardışık ortak gözlemler arasında alınır."
   },
   {
    "h": "Log ayrışma",
    "d": "s serisi, b benchmark'ına karşı. D = 1, s'nin aralık başından bu yana b'den e ≈ 2,72 kat iyi gittiği anlamına gelir."
   },
   {
    "h": "Endeks ve düşüş",
    "d": "I: 100'den başlayan endeks; DD: o ana kadarki zirveden düşüş."
   },
   {
    "h": "Kayan istatistikler",
    "d": "w: gözlem cinsinden pencere; A: yıldaki dönem sayısı (252, 52 ya da 12)."
   },
   {
    "h": "Uzun dönem varyans",
    "d": "γ_j: ortalamadan arındırılmış serinin j gecikmeli otokovaryansı; Bartlett ağırlıkları; T: örneklem."
   },
   {
    "h": "Ortalama fazla getiri (HAC)",
    "d": "d: günlük log fazla getiri; ortalama uzun dönem varyansla sıfıra karşı test edilir."
   },
   {
    "h": "Olağandışılık (kayan z)",
    "d": "μ̂ ve σ̂_LR, k dönemlik pencereden önceki w gözlemden gelir (günlük k = 60, w = 250; haftalık 13 ve 104). N: z sayısı; z* Bonferroni eşiği."
   },
   {
    "h": "CUSUM",
    "d": "K, Kolmogorov dağılımına uyar. (d − d̄)² üzerinde varyansı test eder."
   },
   {
    "h": "Yapısal kırılma (Bai–Perron)",
    "d": "En çok beş kırılma, her segment en az max(20, T'nin %5'i); m, LWZ ile seçilir (p = 2m + 1). Varyans kırılmaları için (d − d̄)² kullanılır."
   },
   {
    "h": "Kırılma tarihi aralığı",
    "d": "Yaklaşık %95 aralık (Bai 1997); δ̂: segment ortalamasındaki sıçrama."
   },
   {
    "h": "Olay penceresi",
    "d": "P_{−1}: olaydan önceki son seansın kapanışı (t = −1). Grafik R_t'yi gösterir, bu yüzden her çizgi orada 0'dır. Önce: o kapanışa kadarki a seans; sonra: 0. günden b. güne. R_rel aynı aralıkta seriyi benchmark'la karşılaştırır. Bileşik hesap kaybı −%100'ün üstünde tutar (günlük getirilerin toplamı altına inebilir)."
   },
   {
    "h": "PIT sepet",
    "d": "V: t'den önce yayımlanmış son KAP raporunda tutulan TL değer (en çok 120 günlük)."
   },
   {
    "h": "Katkı",
    "d": "R: sepet getirisi; w: gün başı ağırlık."
   },
   {
    "h": "Fon akımı",
    "d": "N: pay adedi; p: birim fiyat."
   }
  ]
 }
} as const
