// Public texts (EN default, TR). No data: numbers here are published summary figures.
export const TEXT = {
 "en": {
  "nav": {
   "overview": "Overview",
   "explorer": "Explorer",
   "baskets": "Basket Builder",
   "events": "Event Window",
   "cross": "Cross-Market",
   "lab": "Divergence Lab",
   "funds": "Funds",
   "methods": "Methodology"
  },
  "author": "Prepared by Cem Karakütük",
  "disclaimer": "Not investment advice. Built to map fund-related events statistically.",
  "demoReal": "Demo PNG · Computed from real data",
  "demoSynth": "Demo PNG · Synthetic data",
  "open": "Enlarge",
  "download": "Download PNG",
  "close": "Close",
  "slot": "Image slot · awaiting selection",
  "intro": {
   "overview": "A statistical platform for Borsa Istanbul, TEFAS funds and world markets: when, and by how much, the stocks held by investment funds moved away from the market.",
   "explorer": "In the local Explorer, series can be compared by return, relative performance, volatility, correlation and beta.",
   "baskets": "The local tool builds baskets from stocks and computes each stock's contribution to the return.",
   "events": "Returns before and after selected events are compared on one shared session calendar.",
   "cross": "This section shows correlation and beta matrices for two periods, and market P/E indicators.",
   "lab": "The heatmaps show in which periods the fund baskets diverged from market indices.",
   "funds": "Fund prices, sizes, investor counts, estimated flows and the available KAP portfolios are examined here.",
   "methods": "How the baskets are built, the dates the data carry and the calculation rules."
  },
  "noteTitle": "About this site",
  "note": "The full analysis runs in a local version with its own data archive. Because of data providers' redistribution terms, the archive is not shared on this site. The charts here are fixed demo PNGs taken from the local version. Changing a date, series or benchmark and recalculating is done in the local version.",
  "coverageTitle": "Data coverage",
  "coverageHead": ["Data", "Count", "From", "To"],
  "coverageRows": [["Fund baskets", "4 series", "Jan 2005", "Nov 2026"], ["BIST total return indices and sectors", "12 series", "Jul 2018", "Nov 2026"], ["BIST price indices", "12 series", "Jan 2000", "Nov 2026"], ["Own BIST measures", "6 series", "Jan 2005", "Nov 2026"], ["TEFAS fund groups", "4 series", "Nov 2021", "Nov 2026"], ["World (ETF proxies)", "15 series", "Jan 2000", "Nov 2026"], ["FX, rates and macro", "8 series", "Jan 2000", "Nov 2026"], ["BIST stocks (daily prices)", "626 stocks", "Jan 2000", "Nov 2026"], ["TEFAS funds (unit prices)", "2,071 funds", "Nov 2021", "Nov 2026"], ["KAP fund portfolio reports", "230 fund–report periods, 11 funds", "Mar 2020", "Nov 2026"], ["Market P/E (monthly)", "13 markets", "Jan 2000", "Oct 2026"]],
  "coverageNote": "Start dates differ between series within a group; the table shows the earliest. 626 stocks + 2,071 funds + 61 other series = 2,758 selectable series.",
  "coverage": "The local Explorer holds 626 BIST stocks, 2,071 TEFAS funds and 61 other series. Stock history goes back to 2000 and TEFAS unit prices to November 2021; the start date varies by series. The KAP archive covers 230 fund–report periods for 11 funds, and the monthly P/E panel covers 13 markets.",
  "scaleTitle": "Scale of the local database",
  "scale": [
   [
    "Selectable series",
    "2,758"
   ],
   [
    "Date–series observations",
    "4,137,513"
   ],
   [
    "of which TEFAS fund prices",
    "1,657,202"
   ],
   [
    "Distinct pairs of series (e.g. correlation)",
    "3,801,903"
   ],
   [
    "Series–benchmark pairs (e.g. beta)",
    "7,603,806"
   ],
   [
    "× 3 frequencies × 3 bases",
    "68,434,254"
   ],
   [
    "Pair–date observations with both series observed",
    "2,769,098,445"
   ]
  ],
  "scaleNote": "Counted on the daily grid, January 2000 – November 2026, days with a value only. Pairs and combinations are calculations the local version can run, not stored results.",
  "findingsTitle": "Findings",
  "findings": [
   "Largest divergence on 15 Sep 2026: the liquidated-fund basket stood at 31.4 times the BIST 100 total return index (base 2 Jan 2025).",
   "From that peak to 4 Nov 2026 the basket fell 96.3%.",
   "Results depend on how the basket is defined. From 10 Sep 2025 to 2 Sep 2026 the ex-post basket returned 748%, the point-in-time top 10 163% and BIST 100 35%. The baskets differ in members, weights and KAP coverage; the gap is a sensitivity to the definition, not a measure of selection bias.",
   "Structural breaks: in the mean on 16 Sep 2026 and in the variance on 17 Sep 2026 (CUSUM p: mean 0.0079, variance < 0.0001).",
   "Correlation with BIST 100 fell from 0.60 (3 Aug – 16 Sep 2026) to 0.08 after the CMB decision (Fisher z, p = 0.010).",
   "In the rolling-z scan of the ex-post basket the first threshold crossings were 20 Mar 2025 (z > 1.96) and 22 Apr 2025 (multiple-test threshold). They are crossings in a basket chosen after the fact, not the start of the move."
  ],
  "fundsText": "The detailed sample has 10 liquidated and 20 comparison funds. On 31 August 2026 the three liquidated funds with KAP portfolio reports in the archive had a total TEFAS fund size of TRY 374.6 billion; the seven comparison funds had TRY 47.9 billion. The liquidated side was 7.8 times larger, and about 73% of its total belonged to TLY. Counting only funds with a valid KAP report on that date, the comparison side falls to six funds and TRY 35.9 billion, and the gap becomes 10.4 times.",
  "basketsTitle": "Baskets",
  "baskets": [
   "Liquidated-fund basket (FUND_HIGH): the 10 stocks most held by the funds liquidated under CMB Bulletin 2026/61, equal weight, chosen from August 2026 holdings (ex-post).",
   "Equity-fund basket (FUND_LOW): an equal-weight 10-stock basket chosen ex-post from the September 2026 KAP reports of AK3, GSP, HMG, KPC, MAC and YAS. Stocks were ranked by their average weight in the six funds' equity portfolios; FUND_HIGH members were left out.",
   "Equity-fund holdings (KAP_CMP, PIT) are built from the comparison funds' KAP reports available on each date, with stock weights based on the TRY value of positions. KAP_LIQ, on the liquidation side, is built the same way for DFI, THF and TLY. A report enters on the session after it became known; reports with an estimated publication date are marked, and reports older than 120 days drop out."
  ],
  "rulesTitle": "Calculation rules",
  "rules": [
   "Prices are adjusted for dividends and splits. The provider rounds adjusted closes to 4 decimals; we rebuild them at full precision from its adjustment factor. Gaps are not filled.",
   "A day without trading, or a row copied unchanged from the day before, is not an observation.",
   "Daily stock moves above ±35% are treated as data errors.",
   "A few missing sessions were filled from a second price source.",
   "TEFAS prices are shifted back one day; an unchanged unit price (no valuation that day) is not an observation.",
   "Turkish bond yields that jump and reverse the next day, and ETF closes unchanged for 5+ sessions, are dropped.",
   "Monthly P/E values repeated for 3+ months, or that jump and revert, are left blank.",
   "A KAP report whose equity holdings exceed its own portfolio total is scaled down to that total.",
   "TEFAS: a move above 30 % between two valuations is a review flag. A split or unit change is verified when units move against the price by a round factor (1, 2 or 5 × 10ⁿ) and is adjusted; a one-day wrong price (the next valuation returns to the previous level, or a placeholder row) is dropped. Anything else stays unresolved: no return is chained over it; the series ends before it in the chosen range and the date is shown. Group indices leave that fund out on that day; flows leave that day out.",
   "Return pairs (correlation, beta, excess, divergence) count only when both returns start and end in the same period: daily on the same sessions, so a series that skipped a session does not pair its multi-day return with a one-day return. A market holiday (no trading in either) is not a skipped session. Weekly and monthly pairs from different markets are matched by ISO week or calendar month, not by closing time; a missing week or month gives no return. The number of pairs used is shown.",
   "Event windows sit on the benchmark's sessions t−a … t+b. Every series is read on exactly those dates; a session it did not trade stays empty. Paths start at 0 at the close of t−1, so the event session's move shows at t.",
   "Rates and CDS change in points, not as returns: they are shown as levels and changes (pp, bp) and may be correlated with returns (labelled as such), but never compounded into relative performance, a return index or divergence statistics. Records known only to the month (the policy rate series) are monthly context, never an event day."
  ]
 },
 "tr": {
  "nav": {
   "overview": "Genel Bakış",
   "explorer": "Explorer",
   "baskets": "Sepet Oluşturucu",
   "events": "Olay Penceresi",
   "cross": "Piyasalar Arası",
   "lab": "Ayrışma Laboratuvarı",
   "funds": "Fonlar",
   "methods": "Metodoloji"
  },
  "author": "Hazırlayan: Cem Karakütük",
  "disclaimer": "Yatırım tavsiyesi içermez. Fon olaylarının istatistiksel haritasını çıkarmak amacıyla yapılmıştır.",
  "demoReal": "Demo PNG · Gerçek veriden hesaplandı",
  "demoSynth": "Demo PNG · Sentetik veri",
  "open": "Büyüt",
  "download": "PNG indir",
  "close": "Kapat",
  "slot": "Görsel yeri · seçim bekleniyor",
  "intro": {
   "overview": "Borsa İstanbul, TEFAS fonları ve dünya piyasaları için istatistiksel bir platform: yatırım fonlarının portföylerindeki hisselerin piyasadan ne zaman ve ne kadar ayrıştığını inceliyor.",
   "explorer": "Yerel Explorer'da seriler getiri, göreli performans, oynaklık, korelasyon ve beta üzerinden karşılaştırılabilir.",
   "baskets": "Yerel araçta hisselerden sepet kurulabilir ve her hissenin getiriye katkısı hesaplanabilir.",
   "events": "Seçili olayların öncesindeki ve sonrasındaki getiriler ortak seans takviminde karşılaştırılır.",
   "cross": "Bu bölüm iki dönemin korelasyon ve beta matrisleriyle piyasa F/K göstergelerini gösterir.",
   "lab": "Isı haritaları fon sepetleriyle piyasa endekslerinin hangi dönemlerde ayrıştığını gösterir.",
   "funds": "Fon fiyatları, büyüklükler, yatırımcı sayıları, tahmini akımlar ve mevcut KAP portföyleri burada incelenir.",
   "methods": "Sepetlerin nasıl kurulduğu, veri tarihleri ve hesaplama kuralları burada açıklanır."
  },
  "noteTitle": "Yayın notu",
  "note": "Tam analiz sürümü yerel veri arşiviyle çalışıyor. Veri sağlayıcılarının yeniden dağıtım koşulları nedeniyle arşiv bu sitede paylaşılmıyor. Buradaki grafikler, yerel sürümden alınmış sabit demo PNG'lerdir. Tarih, seri veya referansı değiştirip yeniden hesaplama yerel sürümde yapılır.",
  "coverageTitle": "Veri kapsamı",
  "coverageHead": ["Veri", "Sayı", "Başlangıç", "Bitiş"],
  "coverageRows": [["Fon sepetleri", "4 seri", "Oca 2005", "Kas 2026"], ["BIST getiri endeksleri ve sektörler", "12 seri", "Tem 2018", "Kas 2026"], ["BIST fiyat endeksleri", "12 seri", "Oca 2000", "Kas 2026"], ["Kendi BIST ölçülerimiz", "6 seri", "Oca 2005", "Kas 2026"], ["TEFAS fon grupları", "4 seri", "Kas 2021", "Kas 2026"], ["Dünya (ETF vekilleri)", "15 seri", "Oca 2000", "Kas 2026"], ["Kur, faiz ve makro", "8 seri", "Oca 2000", "Kas 2026"], ["BIST hisseleri (günlük fiyat)", "626 hisse", "Oca 2000", "Kas 2026"], ["TEFAS fonları (pay fiyatı)", "2.071 fon", "Kas 2021", "Kas 2026"], ["KAP fon portföy raporları", "230 fon–rapor dönemi, 11 fon", "Mar 2020", "Kas 2026"], ["Piyasa F/K (aylık)", "13 piyasa", "Oca 2000", "Eki 2026"]],
  "coverageNote": "Bir grubun içinde başlangıç tarihi seriden seriye değişir; tabloda en erkeni var. 626 hisse + 2.071 fon + 61 diğer seri = 2.758 seçilebilir seri.",
  "coverage": "Yerel Explorer'da 626 BIST hissesi, 2.071 TEFAS fonu ve 61 diğer seri bulunuyor. Hisse geçmişi 2000'e, TEFAS pay fiyatları Kasım 2021'e uzanıyor. Başlangıç tarihi seriye göre değişiyor. KAP arşivi 11 fon için 230 fon–rapor dönemini, aylık F/K paneli 13 piyasayı kapsıyor.",
  "scaleTitle": "Yerel veritabanının ölçeği",
  "scale": [
   [
    "Seçilebilir seri",
    "2.758"
   ],
   [
    "Tarih–seri gözlemi",
    "4.137.513"
   ],
   [
    "bunun TEFAS fon fiyatı olanı",
    "1.657.202"
   ],
   [
    "Farklı seri çifti (örneğin korelasyon)",
    "3.801.903"
   ],
   [
    "Seri–referans çifti (örneğin beta)",
    "7.603.806"
   ],
   [
    "× 3 frekans × 3 baz",
    "68.434.254"
   ],
   [
    "İki serinin de gözlendiği çift–tarih gözlemi",
    "2.769.098.445"
   ]
  ],
  "scaleNote": "Günlük ızgarada sayıldı, Ocak 2000 – Kasım 2026, yalnız değeri olan günler. Çiftler ve kombinasyonlar yerel sürümün yapabildiği hesaplardır, saklanmış sonuçlar değildir.",
  "findingsTitle": "Bulgular",
  "findings": [
   "En büyük ayrışma 15 Eylül 2026'da: tasfiye fonu sepeti BIST 100 getiri endeksinin 31,4 katına ulaştı (baz 2 Ocak 2025).",
   "Bu zirveden 4 Kasım 2026'ya kadar sepet %96,3 düştü.",
   "Sonuç sepetin nasıl tanımlandığına bağlı. 10 Eylül 2025 – 2 Eylül 2026 arasında ex-post sepet %748, PIT ilk 10 %163, BIST 100 %35 getirdi. Sepetlerin üyeleri, ağırlıkları ve KAP kapsamı farklı; aradaki fark tanıma duyarlılıktır, seçim yanlılığının ölçüsü değildir.",
   "Yapısal kırılmalar: ortalamada 16 Eylül 2026, varyansta 17 Eylül 2026 (CUSUM p: ortalama 0,0079, varyans < 0,0001).",
   "BIST 100 ile korelasyon 0,60'tan (3 Ağustos – 16 Eylül 2026) SPK kararından sonra 0,08'e indi (Fisher z, p = 0,010).",
   "Geriye dönük seçilen sepetin kayan z taramasında ilk eşik aşımları 20 Mart 2025 (z > 1,96) ve 22 Nisan 2025 (çoklu test eşiği). Bunlar sonradan seçilmiş bir sepetteki aşımlardır, hareketin başlangıcı değildir."
  ],
  "fundsText": "Ayrıntılı örneklem 10 tasfiye ve 20 karşılaştırma fonundan oluşuyor. 31 Ağustos 2026'da arşivde KAP portföy raporu bulunan üç tasfiye fonunun toplam TEFAS fon büyüklüğü 374,6 milyar TL, yedi karşılaştırma fonununki 47,9 milyar TL idi. Tasfiye tarafı 7,8 kat büyüktü ve toplamının yaklaşık %73'ü TLY'ye aitti. O tarihte geçerli KAP raporu olan fonları esas aldığımızda karşılaştırma tarafı altı fona ve 35,9 milyar TL'ye düşüyor. Ölçek farkı bu durumda 10,4 kat.",
  "basketsTitle": "Sepetler",
  "baskets": [
   "Tasfiye fonu sepeti (FUND_HIGH): SPK 2026/61 bülteniyle tasfiye edilen fonların en çok tuttuğu 10 hisse, eşit ağırlık; Ağustos 2026 portföylerinden geriye dönük seçildi.",
   "Equity-fund basket (FUND_LOW), AK3, GSP, HMG, KPC, MAC ve YAS'ın Eylül 2026 KAP raporlarından geriye dönük seçilmiş 10 hisselik eşit ağırlıklı sepettir. Hisseler, altı fonun hisse portföylerindeki ortalama ağırlığa göre sıralandı. FUND-HIGH üyeleri seçim dışında bırakıldı.",
   "Equity-fund holdings (KAP_CMP, PIT), karşılaştırma fonlarının ilgili tarihte kullanılabilir KAP raporlarından oluşturulur. Hisse ağırlıkları TL pozisyon değerine dayanır. Tasfiye tarafındaki KAP_LIQ aynı yöntemle DFI, THF ve TLY için oluşturulur. Bilinirlik tarihini izleyen seansta rapor hesaba girer. Yayın tarihi tahmin edilen raporlar işaretlenir ve 120 günü aşan raporlar kapsamdan çıkar."
  ],
  "rulesTitle": "Hesaplama kuralları",
  "rules": [
   "Fiyatlar temettü ve bölünmeye göre düzeltilmiştir. Sağlayıcı düzeltilmiş kapanışı 4 ondalığa yuvarlıyor; kendi düzeltme katsayısından tam hassasiyetle yeniden kuruyoruz. Boşluklar doldurulmaz.",
   "İşlem olmayan gün ya da önceki günden aynen kopyalanmış satır gözlem sayılmaz.",
   "±%35'ten büyük günlük hisse hareketleri veri hatası sayılır.",
   "Az sayıda eksik seans ikinci bir fiyat kaynağıyla tamamlandı.",
   "TEFAS fiyatları bir gün geri kaydırılır; değişmeyen birim fiyat (o gün değerleme yok) gözlem sayılmaz.",
   "Ertesi gün geri dönen Türk tahvil faizi sıçramaları ve 5+ seans değişmeyen ETF kapanışları çıkarılır.",
   "3+ ay aynı kalan ya da sıçrayıp geri dönen aylık F/K değerleri boş bırakılır.",
   "Hisse toplamı kendi portföy toplamını aşan KAP raporu bu toplama ölçeklenir.",
   "TEFAS: iki değerleme arasında %30'u aşan hareket inceleme bayrağıdır. Pay sayısı fiyatın tersine yuvarlak bir çarpanla (1, 2 ya da 5 × 10ⁿ) değişiyorsa bölünme ya da birim değişikliği doğrulanır ve düzeltilir; tek günlük hatalı fiyat (sonraki değerleme önceki düzeye döner ya da yer tutucu satır) atılır. Gerisi çözülmemiş kalır: üzerinden getiri zincirlenmez; seçilen aralıkta seri ondan önce biter ve tarih gösterilir. Grup endeksleri o gün o fonu dışarıda bırakır; akım hesabı o günü saymaz.",
   "Getiri çiftleri (korelasyon, beta, fazla getiri, ayrışma) iki getiri de aynı dönemde başlayıp aynı dönemde bitiyorsa sayılır: günlükte aynı seanslar; bir seansı atlayan serinin çok günlük getirisi tek günlük getiriyle eşlenmez. Piyasa tatili (ikisinde de işlem yok) atlanmış seans değildir. Farklı piyasalar haftalık ve aylıkta kapanış saatine göre değil ISO haftası ya da takvim ayına göre eşlenir; eksik hafta ya da ay getiri vermez. Kullanılan çift sayısı gösterilir.",
   "Olay pencereleri benchmark'ın t−a … t+b seanslarına oturur. Her seri tam bu tarihlerde okunur; işlem görmediği seans boş kalır. Yollar t−1 kapanışında 0'dan başlar; olay seansının hareketi t'de görünür.",
   "Faiz ve CDS getiri değil puan olarak değişir: seviye ve değişim (yp, bp) olarak gösterilir, getiriyle korelasyonu hesaplanabilir (etikette belirtilir), ama göreli performansa, getiri endeksine ya da ayrışma istatistiklerine bileşiklenmez. Yalnız ayı bilinen kayıtlar (politika faizi serisi) aylık bağlamdır, olay günü değildir."
  ]
 }
} as const
export type Lang = 'en' | 'tr'
