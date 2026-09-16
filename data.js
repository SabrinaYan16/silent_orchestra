/* ============================================================================
   THE SILENT ORCHESTRA — verified data layer  (STRICT REAL EDITION)
   ----------------------------------------------------------------------------
   ADMISSION RULE for this edition:
     A species may occupy a desk ONLY IF
       (a) its IUCN category is VU, EN or CR (threatened), and
       (b) the photograph on that desk is genuinely that species, and
       (c) the recording on that desk is genuinely that species — or the desk
           carries NO audio at all and says so.
   Nothing is renamed without its media being replaced too. No synthesised
   sound is ever presented as a species' voice.

   type: "measured"  = survey/census-derived
         "modelled"  = output of a population model for a past/present year
         "index"     = relative index or % change, NOT a headcount
         "projected" = forward-looking model output  (none found for 2040-50)
   ========================================================================== */

const ORCHESTRA = [
  {
    id: "bluewhale",
    section: "contrabass",
    zh: "蓝鲸", en: "Blue whale", sci: "Balaenoptera musculus",
    scope: "南极亚种 B. m. intermedia（南纬60°以南），非全球总数",
    scopeEn: "Antarctic subspecies, not a global total",
    iucn: "EN", iucnZh: "濒危",
    focus: "15% 75%",
    voice: "10–40 Hz 的次声脉冲",
    voiceEn: "infrasonic pulses",
    audioNote: "NOAA 原始录音，Commons 标注 speed 1x。实测该文件在 160–500 Hz 有强能量，因此未做任何变调即可听见。",
    points: [
      { year: 1981, value: 453,  type: "measured", cv: 0.40, note: "IDCR/SOWER 环极调查 CPI 中位年" },
      { year: 1988, value: 559,  type: "measured", cv: 0.47, note: "CPII 中位年" },
      { year: 1998, value: 2280, type: "measured", cv: 0.36, note: "CPIII 中位年，该亚种最新完整估计" }
    ],
    baseline: { low: 202000, high: 311000, type: "modelled", note: "开发前（pre-exploitation）南极蓝鲸" },
    pctOfBaseline: "约 1%",
    rate: { pct: 8.2, ci: [1.6, 14.8], note: "年增长率" },
    dataEnds: 1998,
    trend: "recovering",
    sources: [
      { t: "Branch et al., J. Cetacean Res. Manage.", doi: "10.47536/jcrm.v9i3.674" },
      { t: "Status of the world's baleen whales, Mar. Mammal Sci.", doi: "10.1111/mms.12281" }
    ],
    },
  
  {
    id: "kakapo",
    section: "solo",
    zh: "鸮鹦鹉", en: "Kākāpō", sci: "Strigops habroptila",
    scope: "全球总数（全部为野生，位于无捕食者岛屿与围栏保护区）",
    scopeEn: "entire world population",
    iucn: "CR", iucnZh: "极危",
    focus: "39% 43%",
    voice: "雄鸟求偶的低频 booming",
    voiceEn: "male booming",
    audioNote: "成年雄鸟为吸引雌鸟而 booming。全世界只剩 325 只鸟会发出这个声音。",
    points: [
      { year: 2026, value: 325, type: "measured", note: "新西兰环保部：现存 325 只" }
    ],
    extra: "1894 年即开始保护，20 世纪中叶几近灭绝；1977 年在斯图尔特岛重新发现，1995 年前的数字精度较低",
    dataEnds: 2026,
    trend: "recovering-critical",
    sources: [{ t: "NZ Department of Conservation — Kākāpō", url: "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/" }],
    },
  {
    id: "coral",
    section: "texture",
    zh: "珊瑚礁", en: "Coral reef", sci: "Reef-building corals (Scleractinia)",
    scope: "作为生态系统整体呈现，不指定单一珊瑚物种",
    scopeEn: "presented as an ecosystem, not a single species",
    iucn: "—", iucnZh: "生态系统层面（见下）",
    focus: "50% 52%",
    voice: "珊瑚礁声景（鼓虾、石斑鱼与鱼群的叫声）",
    voiceEn: "reef soundscape (snapping shrimp, groupers, fish grunts)",
    audioNote: "NOAA-Navy SanctSound 监测项目实地录音（公共领域）：2019-03-24 佛罗里达礁群（Key West 以南）的珊瑚礁声景，含鼓虾、红石斑鱼、黑石斑鱼与鱼群叫声。",
    image: "img/coral-reef.jpg",
    bleachImage: "img/coral-bleach.jpg",
    points: [], dataEnds: null, trend: "tipping-risk",
    tipping: {
      report: "2025 Global Tipping Points Report",
      threshold: "约 1.5°C",
      text: "2025 Global Tipping Points Report 将暖水珊瑚礁列为面临气候临界点风险的生态系统。" +
            "全球升温达到约 1.5°C 后，珊瑚礁将遭遇更频繁、更广泛、恢复间隔更短的海洋热浪与白化事件；" +
            "随着热压力持续累积，部分珊瑚礁生态系统可能跨越自身恢复能力的临界点，出现不可逆的结构性损失。",
      nuance: "这里的「不可逆」指部分生态系统状态可能无法在原有时间尺度内回到从前，" +
              "并不等于每一次白化事件都会立刻造成整片珊瑚礁永久死亡。这个区分在本作品中被刻意保留。"
    },
    sources: [
      { t: "Global Tipping Points Report 2025", url: "https://global-tipping-points.org/" }
    ],
    },
  {
    id: "emberiza",
    section: "woodwind",
    zh: "黄胸鹀", en: "Yellow-breasted bunting", sci: "Emberiza aureola",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "CR", iucnZh: "极危",
    focus: "50% 50%",
    voice: "清脆的鸣唱", voiceEn: "clear, melodious song",
    audioNote: "iNaturalist 实地录音（CC BY-NC）。录音者 nadezhda_boiko，2026-06-27，俄罗斯伊尔库茨克州。",
    points: [
      { year: 2013, value: 12, type: "index", note: "Kamp et al. 2015：较 1980 年代下降 84.3–94.7%" }
    ],
    longTerm: { period: "1980–2013", pct: 90, type: "modelled",
      note: "三代（约 33 年）下降 84.3–94.7%（取中值约 90%）",
      basis: "Kamp et al. 2015, Conservation Biology" },
    dataEnds: 2013,
    trend: "declining",
    sources: [
      { t: "Kamp et al. 2015, Conservation Biology", doi: "10.1111/cobi.12539" }
    ]
  },
  {
    id: "spoonbill",
    section: "woodwind",
    zh: "勺嘴鹬", en: "Spoon-billed sandpiper", sci: "Calidris pygmaea",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "CR", iucnZh: "极危",
    focus: "50% 50%",
    voice: "高频的叫声", voiceEn: "high-pitched calls",
    audioNote: "xeno-canto XC486596（CC BY-NC-SA 4.0）。录音者 Jens Kirkeby，2019-06-13，俄罗斯楚科奇 Beringovsky Coast。alarm call + song。",
    points: [
      { year: 2024, value: 443, type: "measured", note: "2024 年标志重捕估计成熟个体数" }
    ],
    baseline: { low: 2000, high: 2800, type: "modelled", note: "1970 年代繁殖对估计（约 2,000–2,800 对）" },
    pctOfBaseline: "约 16%",
    rate: { pct: -5, note: "近年年降幅约 5%" },
    dataEnds: 2024,
    trend: "declining",
    sources: [
      { t: "IUCN Red List — Calidris pygmaea", url: "https://www.iucnredlist.org/species/22693452/178084284" }
    ],
    },
  {
    id: "bumblebee",
    section: "texture",
    zh: "熊蜂属", en: "Bumblebees (genus Bombus)", sci: "Bombus spp.（全球约 250 种）",
    scope: "属级整体：全球约 250 种，IUCN 已评估 153 种", scopeEn: "genus level: ~250 species worldwide, 153 assessed by IUCN",
    iucn: "—", iucnZh: "属级无统一评级（已评估物种中约 1/4 受威胁，北美含 4 种极危）",
    focus: "50% 50%",
    voice: "采蜜飞行的嗡嗡声", voiceEn: "foraging buzz",
    audioNote: "录音为常见且稳定的近缘种——东部熊蜂 Bombus impatiens（iNaturalist 实地录音，CC BY-NC 4.0，录音者 sarahemss，2026-09-01，美国威斯康星州）。它真实代表熊蜂属的典型鸣声，但属于未下降的常见种，不代表正在下降的种群本身。",
    points: [
      { year: 1998, value: 100, type: "index", note: "基准（约一代前）" },
      { year: 2020, value: 54, type: "index", note: "北美栖息地占用率 −46%（Soroye et al. 2020, Science）" },
      { year: 2020, value: 83, type: "index", note: "欧洲栖息地占用率 −17%（同上）" }
    ],
    baseline: { low: 100, high: 100, type: "index", note: "1998 年前后基准（约一代）" },
    pctOfBaseline: "北美约 54%，欧洲约 83%",
    extra: "IUCN 按物种评估，熊蜂属无正式属级评级；已评估 153/250 种中约 1/4 受威胁（北美 4 种极危）。大陆尺度栖息地占用率约一代（25 年）内下降：北美 −46%、欧洲 −17%（Soroye et al. 2020）。北美另有 4 种相对丰度下降最高达 96%、分布区收缩 23–87%（Cameron et al. 2011）。",
    dataEnds: 2020,
    trend: "declining",
    sources: [
      { t: "Soroye et al. 2020, Science", doi: "10.1126/science.aax8591" },
      { t: "Cameron et al. 2011, PNAS", doi: "10.1073/pnas.1014743108" }
    ]
  },
  {
    id: "rightwhale",
    section: "contrabass",
    zh: "北大西洋露脊鲸", en: "North Atlantic right whale", sci: "Eubalaena glacialis",
    scope: "全球总数（北大西洋西部）", scopeEn: "entire global population (western North Atlantic)",
    iucn: "CR", iucnZh: "极危",
    focus: "50% 50%",
    voice: "低频呻吟与 upcall", voiceEn: "low-frequency moans and upcalls",
    audioNote: "NOAA 公有领域录音（Eugl-multisound，含 upcall、呻吟与 gunshot）。",
    points: [
      { year: 2023, value: 372, type: "measured", note: "NARWC 2024：372 头（95% CI 360–383）" }
    ],
    baseline: { low: 483, high: 483, type: "measured", note: "2010 年估计 483 头" },
    pctOfBaseline: "约 77%",
    rate: { pct: -2.6, note: "2010–2023 年均降幅" },
    dataEnds: 2023,
    trend: "declining",
    sources: [
      { t: "Linden 2024, NARWC", url: "https://www.fisheries.noaa.gov/species/north-atlantic-right-whale" }
    ]
  },
  {
    id: "vaquita",
    section: "texture",
    zh: "小头鼠海豚", en: "Vaquita", sci: "Phocoena sinus",
    scope: "全球总数（加利福尼亚湾北部）", scopeEn: "entire global population (northern Gulf of California)",
    iucn: "CR", iucnZh: "极危",
    focus: "25% 50%",
    voice: "视频片段（物种介绍与水下声景）", voiceEn: "video excerpt (species introduction and underwater soundscape)",
    audioNote: "取自 Sea Shepherd Conservation Society 2025 年发布的《The Voice of the Vaquita》视频，CONANP 科学家在上加利福尼亚湾零容忍区域通过水听器录制的真实回声定位咔哒声（原频率约 139 kHz，已降频以便人耳可闻）。该视频发布于 Facebook、无明确许可——经作者决定使用并注明来源。",
    points: [
      { year: 1997, value: 567, type: "measured", note: "Jaramillo-Legorreta et al. 2019" },
      { year: 2008, value: 245, type: "measured", note: "Jaramillo-Legorreta et al. 2019" },
      { year: 2015, value: 60, type: "measured", note: "Jaramillo-Legorreta et al. 2019" },
      { year: 2023, value: 10, type: "measured", note: "IUCN-CSG：8–13 头（取 10）" },
      { year: 2024, value: 7, type: "measured", note: "IUCN-CSG：约 6–8 头（取 7）" }
    ],
    dataEnds: 2024,
    trend: "declining",
    sources: [
      { t: "Jaramillo-Legorreta et al. 2019, Science", doi: "10.1126/science.aaw2373" }
    ]
  },
  {
    id: "bustard",
    section: "contrabass",
    zh: "大鸨", en: "Great Bustard", sci: "Otis tarda",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "深沉的求偶低鸣", voiceEn: "deep lek-display booming",
    audioNote: "xeno-canto XC459281（CC BY-NC-SA 4.0）。录音者 Lukas Pelikan，2019-02-26，德国 Sachsen-Anhalt。lek display，多只雄鸟约 1–2 kHz 的深鸣。",
    points: [
      { year: 2010, value: 50500, type: "measured", note: "全球估计 44,000–57,000（取中值）" },
      { year: 2022, value: 33500, type: "measured", note: "31,000–36,000（取中值），较 2005 年 −34%" },
      { year: 2026, value: 31300, type: "measured", note: "指名亚种 29,600–33,000（取中值）" }
    ],
    baseline: { low: 44000, high: 57000, type: "measured", note: "2010 年全球估计" },
    rate: { pct: -3.23, note: "2005–2022 年均降幅" },
    dataEnds: 2026,
    trend: "declining",
    sources: [
      { t: "Alonso & Palacín 2022, Bird Conservation International", doi: "10.1017/S095927092200003X" },
      { t: "Oparina 2026, Biology Bulletin" }
    ]
  },
  {
    id: "stork",
    section: "brass",
    zh: "东方白鹳", en: "Oriental Stork", sci: "Ciconia boyciana",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "响亮的喙击声", voiceEn: "loud bill clattering",
    audioNote: "xeno-canto XC401954（CC BY-NC-SA 4.0）。录音者 Oscar Campbell，2017-12-26，中国南昌。bill rattling（两只鸟短暂对峙）。",
    points: [
      { year: 2000, value: 3000, type: "measured", note: "全球种群估计约 3,000" },
      { year: 2018, value: 1750, type: "measured", note: "成熟个体估计 1,000–2,499（取中值）" }
    ],
    baseline: { low: 1000, high: 2499, type: "measured", note: "2018 年 IUCN 成熟个体估计" },
    dataEnds: 2018,
    trend: "declining",
    sources: [
      { t: "BirdLife International 2018 IUCN assessment", doi: "10.2305/IUCN.UK.2018-2.RLTS.T22697695A131942061.en" },
      { t: "Ha et al. 2024, Bird Conservation International", doi: "10.1017/S0959270924000194" }
    ]
  },
  {
    id: "scalysided-merganser",
    section: "solo",
    zh: "中华秋沙鸭", en: "Scaly-sided Merganser", sci: "Mergus squamatus",
    scope: "Primorye 繁殖种群（俄罗斯）", scopeEn: "Primorye breeding population (Russia)",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "轻柔的鸣叫", voiceEn: "soft croaks and whistles",
    audioNote: "xeno-canto XC435910（CC BY-NC-SA 4.0）。录音者 Qing Zeng，2011-06-01，中国黑龙江碧水自然保护区。song。",
    points: [
      { year: 1982, value: 1000, type: "measured", note: "1980 年代初 Primorye 繁殖种群约 1,000 对" },
      { year: 2012, value: 448, type: "measured", note: "同区域 −55%" }
    ],
    baseline: { low: 1000, high: 1000, type: "measured", note: "1980 年代初 Primorye 繁殖种群" },
    dataEnds: 2012,
    trend: "declining",
    sources: [
      { t: "Solovyeva et al. 2014, Bird Conservation International", doi: "10.1017/S0959270913000610" },
      { t: "IUCN Red List — Mergus squamatus", url: "https://www.iucnredlist.org/species/22680488" }
    ]
  },
  {
    id: "saker-falcon",
    section: "woodwind",
    zh: "猎隼", en: "Saker Falcon", sci: "Falco cherrug",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "尖锐的叫声", voiceEn: "sharp, piercing calls",
    audioNote: "xeno-canto XC1094307（CC BY-NC-SA 4.0）。录音者 András Schmidt，2002-03-23，匈牙利 Börzsöny。call（巢上雌鸟）。",
    points: [
      { year: 1990, value: 22100, type: "modelled", note: "全球估计 17,400–28,800 对（取中值）" },
      { year: 2013, value: 10500, type: "measured", note: "全球估计 6,100–14,900 对（取中值，CMS Raptors MoU）" }
    ],
    baseline: { low: 17400, high: 28800, type: "modelled", note: "1990 年全球估计（对）" },
    rate: { pct: -44.6, note: "2002–2021 年降幅" },
    dataEnds: 2013,
    trend: "declining",
    sources: [
      { t: "BirdLife International 2021, IUCN Red List", url: "https://www.iucnredlist.org/species/22696495" },
      { t: "CMS SakerGAP 2015–2024" }
    ]
  },
  {
    id: "green-peafowl",
    section: "brass",
    zh: "绿孔雀", en: "Green Peafowl", sci: "Pavo muticus",
    scope: "中国云南种群", scopeEn: "China (Yunnan) population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "响亮的鸣叫", voiceEn: "loud, raucous calls",
    audioNote: "xeno-canto XC382431（CC BY-NC-SA 4.0）。录音者 Gu Bojian，2017-03-10，中国云南楚雄小江河。call。",
    points: [
      { year: 1995, value: 950, type: "measured", note: "1991–96 年中国云南 800–1,100 只（取中值）" },
      { year: 2016, value: 210, type: "measured", note: "2014–17 年仅存 ≥183–240 只（取中值），约为此前的 30%" }
    ],
    baseline: { low: 800, high: 1100, type: "measured", note: "1991–96 年中国云南种群" },
    dataEnds: 2016,
    trend: "declining",
    sources: [
      { t: "Kong et al. 2018, Avian Research", doi: "10.1186/s40657-018-0110-0" },
      { t: "IUCN Red List — Pavo muticus" }
    ]
  },
  {
    id: "whiteheaded-duck",
    section: "texture",
    zh: "白头硬尾鸭", en: "White-headed Duck", sci: "Oxyura leucocephala",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "求偶时的气泡声", voiceEn: "rhythmic bubbling display",
    audioNote: "xeno-canto XC1105811（CC BY-NC-SA 4.0）。录音者 João Ferreira Tomás，2026-04-23，西班牙 Ciudad Real。song/display song（雄鸟求偶）。",
    points: [
      { year: 1900, value: 100000, type: "measured", note: "20 世纪初全球估计 >100,000" },
      { year: 1996, value: 20000, type: "measured", note: "全球估计" },
      { year: 2003, value: 10500, type: "measured", note: "全球估计 8,000–13,000（取中值）" },
      { year: 2017, value: 7000, type: "measured", note: "IUCN 估计 5,300–8,700 成熟个体（取中值）" }
    ],
    baseline: { low: 100000, high: 100000, type: "measured", note: "20 世纪初全球估计" },
    dataEnds: 2017,
    trend: "declining",
    sources: [
      { t: "IUCN Red List — Oxyura leucocephala", url: "https://www.iucnredlist.org/species/22679814" },
      { t: "CMS/AEWA/EU International Single Species Action Plan 2018–2027" }
    ]
  },
  {
    id: "bengal-florican",
    section: "contrabass",
    zh: "孟加拉鸨", en: "Bengal Florican", sci: "Houbaropsis bengalensis",
    scope: "柬埔寨洞里萨湖繁殖雄鸟（displaying males）", scopeEn: "displaying males, Tonle Sap, Cambodia",
    iucn: "CR", iucnZh: "极危",
    focus: "50% 50%",
    voice: "低沉的求偶鸣叫", voiceEn: "low booming display",
    audioNote: "xeno-canto XC881503（CC BY-NC-SA 4.0）。录音者 Pradnyavant Mane，2024-03-09，印度阿萨姆邦 Manas 国家公园。flight call。",
    points: [
      { year: 2006, value: 416, type: "measured", note: "2005–07 年柬埔寨洞里萨湖 416 只繁殖雄鸟" },
      { year: 2012, value: 216, type: "measured", note: "−48%" },
      { year: 2018, value: 104, type: "measured", note: "较 2012 年再 −52%（138 只成鸟）" }
    ],
    baseline: { low: 416, high: 416, type: "measured", note: "2005–07 年柬埔寨洞里萨湖" },
    dataEnds: 2018,
    trend: "declining",
    sources: [
      { t: "Mahood et al. 2019, Bird Conservation International", doi: "10.1017/S0959270919000157" },
      { t: "Inskipp et al. 2024, Nepal Journal of Zoology", doi: "10.3126/njz.v8i2.74929" },
      { t: "IUCN 2018", doi: "10.2305/IUCN.UK.2018-2.RLTS.T22692015A130184896.en" }
    ]
  },
  {
    id: "hainan-peacockpheasant",
    section: "brass",
    zh: "海南孔雀雉", en: "Hainan Peacock-pheasant", sci: "Polyplectron katsumatae",
    scope: "海南岛种群", scopeEn: "Hainan Island population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "响亮的鸣叫", voiceEn: "loud, resonant calls",
    audioNote: "xeno-canto XC172567（CC BY-NC-SA 4.0）。录音者 Jon Hornbuckle，2013-06-06，中国海南尖峰岭自然保护区。song。",
    points: [
      { year: 1990, value: 2775, type: "measured", note: "海南岛估计" },
      { year: 2000, value: 300, type: "measured", note: "十年内 −89%" }
    ],
    baseline: { low: 2775, high: 2775, type: "measured", note: "1990 年海南岛估计" },
    dataEnds: 2000,
    trend: "declining",
    sources: [
      { t: "Chang et al. 2013, Chinese Science Bulletin", doi: "10.1007/s11434-012-5629-6" },
      { t: "IUCN 2021 assessment" }
    ]
  },
  {
    id: "tiger",
    section: "brass",
    zh: "虎", en: "Tiger", sci: "Panthera tigris",
    scope: "印度种群（全球最大种群，占全球约 80%）", scopeEn: "India population (largest globally)",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "低吼与咆哮（growling & snarling）", voiceEn: "growls and snarls",
    audioNote: "Wikimedia Commons CC0 录音（schots，经 Victorgrigas 上传），动物园内虎的低吼与咆哮。",
    points: [
      { year: 1973, value: 1827, type: "measured", note: "Project Tiger 启动时印度估计" },
      { year: 2006, value: 1411, type: "measured", note: "AITE 第一轮普查" },
      { year: 2010, value: 1706, type: "measured", note: "AITE" },
      { year: 2014, value: 2226, type: "measured", note: "AITE" },
      { year: 2018, value: 2967, type: "measured", note: "AITE 第四轮" },
      { year: 2022, value: 3682, type: "measured", note: "AITE 第五轮" }
    ],
    longTerm: { period: "1996–2022", pct: 45, type: "measured",
      note: "全球：约 8,262 → 约 4,500（−45%，IUCN）；印度 2006–2022 年普查连续回升（年增约 6%）",
      basis: "IUCN Red List — Panthera tigris; India AITE census" },
    extra: "全球趋势：1996 年约 8,262 头 → 2010 年约 3,200 头（最低点）→ 2022 年约 4,500 头（回升）；印度占全球约 80%，其 2006–2022 年普查连续回升。IUCN 全球趋势列为「未知/混合」。",
    rate: { pct: 6, note: "印度 2006–2022 年均回升" },
    dataEnds: 2022,
    trend: "recovering",
    sources: [
      { t: "IUCN Red List — Panthera tigris", url: "https://www.iucnredlist.org/species/15955/50659951" },
      { t: "India National Tiger Conservation Authority (AITE)" }
    ]
  },
  {
    id: "lion",
    section: "brass",
    zh: "非洲狮", en: "African Lion", sci: "Panthera leo",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "VU", iucnZh: "易危",
    focus: "50% 50%",
    voice: "连续吼叫回合（roaring bout）", voiceEn: "roaring bout",
    audioNote: "Wikimedia Commons CC BY 4.0 录音（Lionroar.wav，学术论文附件，坦桑尼亚野外录音），连续吼叫回合。",
    points: [
      { year: 2002, value: 37945, type: "measured", note: "Chardonnet 2002 全球估计" },
      { year: 2006, value: 33160, type: "measured", note: "IUCN 2006 估计" },
      { year: 2013, value: 32000, type: "measured", note: "Riggio et al. 2013" },
      { year: 2023, value: 22500, type: "measured", note: "Nicholson et al. 2023：20,000–25,000（取中值）" }
    ],
    longTerm: { period: "1960s–2023", pct: 77, type: "modelled",
      note: "1960 年代约 10 万 → 2023 年约 2.2 万（−77%）；2002–2023 年分布范围下降 36%",
      basis: "IUCN 2023 assessment (Nicholson et al.)" },
    rate: { pct: -36, note: "2002–2023 年分布范围降幅（IUCN 2023）" },
    dataEnds: 2023,
    trend: "declining",
    sources: [
      { t: "IUCN Red List — Panthera leo", url: "https://www.iucnredlist.org/species/15951/115130419" },
      { t: "Nicholson et al. 2023, IUCN RLA" }
    ]
  },
  {
    id: "asianelephant",
    section: "contrabass",
    zh: "亚洲象", en: "Asian Elephant", sci: "Elephas maximus",
    scope: "全球总数", scopeEn: "entire global population",
    iucn: "EN", iucnZh: "濒危",
    focus: "50% 50%",
    voice: "号角声（trumpeting）", voiceEn: "trumpeting",
    audioNote: "Wikimedia Commons CC0 录音（Elephant voice - trumpeting.ogg），亚洲象号角声，仅 1.4 秒，循环播放。",
    points: [
      { year: 2018, value: 50000, type: "measured", note: "Menon & Tiwari 2019：48,323–51,680（取中值）" }
    ],
    longTerm: { period: "约 1970–2018（三代）", pct: 50, type: "modelled",
      note: "IUCN A2c：基于栖息地丧失推断三代下降 >50%；调查估计因覆盖扩大而上升，不代表种群增长",
      basis: "IUCN Red List — Elephas maximus" },
    extra: "全球调查估计从 1978 年约 28,000–42,000 升至 2018 年约 48,000–52,000，系调查覆盖扩大所致；IUCN 依据栖息地丧失推断真实趋势为下降。",
    dataEnds: 2018,
    trend: "declining",
    sources: [
      { t: "IUCN Red List — Elephas maximus", url: "https://www.iucnredlist.org/species/7140/12828813" },
      { t: "Menon & Tiwari 2019, IUCN SSC Asian Elephant Specialist Group" }
    ]
  },
  {
    id: "cheetah",
    section: "brass",
    zh: "猎豹", en: "Cheetah", sci: "Acinonyx jubatus",
    scope: "津巴布韦种群（全球分布区之一）", scopeEn: "Zimbabwe population",
    iucn: "VU", iucnZh: "易危",
    focus: "50% 50%",
    voice: "七种叫声（purr/hiss/growl/chirr/meow/chirp/howl）", voiceEn: "seven call types",
    audioNote: "Wikimedia Commons CC BY 4.0 录音（PLOS ONE 论文附件，Smirnova et al.），圈养猎豹七种叫声序列。",
    points: [
      { year: 1999, value: 1520, type: "measured", note: "van der Meer 2016：津巴布韦估计" },
      { year: 2015, value: 160, type: "measured", note: "van der Meer 2018：150–170（取中值）" }
    ],
    longTerm: { period: "1900–2017", pct: 93, type: "modelled",
      note: "全球：约 10 万 → 约 6,500 成体（−93%）；津巴布韦 1999–2015 年 −90%",
      basis: "Durant et al. 2017, PeerJ; van der Meer 2016/2018" },
    rate: { pct: -90, note: "津巴布韦 1999–2015 年降幅" },
    dataEnds: 2015,
    trend: "declining",
    sources: [
      { t: "Durant et al. 2017, PeerJ", doi: "10.7717/peerj.2886" },
      { t: "IUCN Red List — Acinonyx jubatus", url: "https://www.iucnredlist.org/species/219/50649567" }
    ]
  }
];

/* ---------------------------------------------------------------------------
   Species that were REMOVED from this edition, and why. Rendered in the
   programme notes so the absences are visible rather than hidden.
   --------------------------------------------------------------------------- */
const REMOVED = [
  { zh: "丹顶鹤", sci: "Grus japonensis", iucn: "VU",
    why: "本地音频文件的元数据显示为 Hip Hop 音乐，不是真实鹤鸣；未能取得替代的真实野外录音。" },
  { zh: "座头鲸", sci: "Megaptera novaeangliae", iucn: "LC",
    why: "IUCN 无危，不符合本版「仅濒危 / 极危」的标准。其录音在 Commons 上亦标注为加速 10 倍。" },
  { zh: "抹香鲸", sci: "Physeter macrocephalus", iucn: "VU",
    why: "易危；本版未重新收录。" },
  { zh: "白腰杓鹬", sci: "Numenius arquata", iucn: "NT",
    why: "近危，未达本版 VU/EN/CR 门槛。" },
  { zh: "中华凤头燕鸥", sci: "Thalasseus bernsteini", iucn: "CR",
    why: "数量在增长（恢复中），本版只收录数量下降的物种。" },
  { zh: "白鹤", sci: "Leucogeranus leucogeranus", iucn: "CR",
    why: "数量在增长（恢复中），本版只收录数量下降的物种。" },
  { zh: "朱鹮", sci: "Nipponia nippon", iucn: "EN",
    why: "数量在增长（恢复中），本版只收录数量下降的物种。" },
  { zh: "大滨鹬", sci: "Calidris tenuirostris", iucn: "EN",
    why: "趋势数据互相矛盾（不同调查显示下降、稳定甚至上升），无法诚实呈现趋势曲线，整体移除。" },
  { zh: "西部大猩猩", sci: "Gorilla gorilla", iucn: "CR",
    why: "本版为容纳虎、狮、亚洲象、猎豹而替换出（席位保持 20）。" },
  { zh: "婆罗洲猩猩", sci: "Pongo pygmaeus", iucn: "CR",
    why: "本版为容纳虎、狮、亚洲象、猎豹而替换出（席位保持 20）。" },
  { zh: "黑猩猩", sci: "Pan troglodytes", iucn: "EN",
    why: "本版为容纳虎、狮、亚洲象、猎豹而替换出（席位保持 20）。" },
  { zh: "非洲草原象", sci: "Loxodonta africana", iucn: "EN",
    why: "为容纳数量更少的亚洲象（约 5 万 vs 约 41.5 万）而替换出。" }
];

/* ---------------------------------------------------------------------------
   The conductor's reference: WWF Living Planet Index.
   Verified verbatim from the WWF Living Planet Report 2024 PDF text.
   --------------------------------------------------------------------------- */
const LPI = {
  headline: 73,
  period: "1970–2020",
  populations: "近 35,000 个种群趋势",
  species: "5,495 个物种",
  edition: "WWF《地球生命力报告 2024》",
  realms:  [ { k: "淡水", v: 85 }, { k: "陆地", v: 69 }, { k: "海洋", v: 56 } ],
  regions: [ { k: "拉丁美洲与加勒比", v: 95 }, { k: "非洲", v: 76 },
             { k: "亚太", v: 60 }, { k: "北美", v: 39 }, { k: "欧洲与中亚", v: 35 } ],
  whatItIs:
    "LPI 衡量的是受监测野生动物种群规模的**平均变化率**，而不是动物个体的损失数量，也不是灭绝物种的数量。" +
    "数据中同时包含上升、下降与稳定的种群。",
  caveat:
    "报告原文亦指出：全球 LPI 无法呈现全部图景 —— 各区域趋势因所受压力的类型与强度不同而差异很大。" +
    "欧洲与北美降幅较小，部分原因是这些地区在 1970 年之前就已出现大规模的自然损失。"
};

/* ---------------------------------------------------------------------------
   Media credits. Audio/photo files were downloaded from Wikimedia Commons,
   xeno-canto, NOAA Fisheries and iNaturalist; licenses read from each source;
   durations confirmed with ffprobe. The coral photographs came from NOAA
   (Flower Garden Banks) and Oregon State University (bleaching, via Wikimedia Commons).
   Coverage assertion: every id in ORCHESTRA must appear in images, and every
   id WITHOUT noAudio must appear in audio.
   --------------------------------------------------------------------------- */
const CREDITS = {
  audio: {
    bluewhale: { file: "Blue Whale NE Pacific 1x.oga", by: "Recorded by NOAA",
                 lic: "CC0", src: "Wikimedia Commons" },
    
    kakapo:    { file: "Kakapo-18.wav", by: "Unknown author",
                 lic: "CC BY 4.0", src: "Wikimedia Commons" },
    spoonbill: { file: "XC486596", by: "Jens Kirkeby", lic: "CC BY-NC-SA 4.0", src: "xeno-canto" },
    emberiza:  { file: "iNaturalist sound 2044990", by: "nadezhda_boiko", lic: "CC BY-NC", src: "iNaturalist" },
    rightwhale: { file: "Eugl-multisound-NOAA-PAGroup-01", by: "NOAA", lic: "Public domain", src: "NOAA Fisheries" },
    bustard:   { file: "XC459281", by: "Lukas Pelikan", lic: "CC BY-NC-SA 4.0", src: "xeno-canto" },
    stork:     { file: "XC401954", by: "Oscar Campbell", lic: "CC BY-NC-SA 4.0", src: "xeno-canto" },
    "scalysided-merganser": { file: "audio/scalysided-merganser.mp3", by: "Qing Zeng", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC435910" },
    "saker-falcon": { file: "audio/saker-falcon.mp3", by: "András Schmidt", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC1094307" },
    "green-peafowl": { file: "audio/green-peafowl.mp3", by: "Gu Bojian", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC382431" },
    "whiteheaded-duck": { file: "audio/whiteheaded-duck.mp3", by: "João Ferreira Tomás", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC1105811" },
    "bengal-florican": { file: "audio/bengal-florican.mp3", by: "Pradnyavant Mane", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC881503" },
    "hainan-peacockpheasant": { file: "audio/hainan-peacockpheasant.mp3", by: "Jon Hornbuckle", lic: "CC BY-NC-SA 4.0", src: "xeno-canto XC172567" },
    coral:     { file: "SanctSound_FK03_01_soundscape_20190324T000934Z (NOAA SanctSound)", by: "NOAA-Navy SanctSound Monitoring Project", lic: "Public domain (US Government work)", src: "https://sanctsound.ioos.us/sounds.html" },
    vaquita:   { file: "vaquita.mp3", by: "Sea Shepherd Conservation Society / CONANP", lic: "No explicit license — used with attribution per artist decision", src: "https://www.facebook.com/SeaShepherdSSCS/videos/1405533460747260/" },
    bumblebee: { file: "iNaturalist sound 2142735", by: "sarahemss", lic: "CC BY-NC 4.0", src: "iNaturalist obs 396371350" },
    tiger:      { file: "439280_schots_angry-tiger.wav", by: "schots（经 Victorgrigas 上传至 Commons）", lic: "CC0", src: "Wikimedia Commons" },
    lion:       { file: "Lionroar.wav", by: "Jonathan Growcott 等（学术论文作者）", lic: "CC BY 4.0", src: "Wikimedia Commons" },
    asianelephant: { file: "Elephant_voice_-_trumpeting.ogg", by: "தகவலுழவன் (Info-farmer)", lic: "CC0", src: "Wikimedia Commons" },
    cheetah:    { file: "Acoustic-Structure-and-Contextual-Use-of-Calls-by-Captive-Male-and-Female-Cheetahs (PLOS ONE)", by: "Smirnova D, Volodin I, Demina T, Volodina E", lic: "CC BY 4.0", src: "Wikimedia Commons" }
  },
  images: {
    bluewhale: { by: "NOAA Photo Library", lic: "Public domain", src: "Wikimedia Commons" },
    
    kakapo:    { by: "Department of Conservation (NZ)", lic: "CC BY 2.0", src: "Wikimedia Commons" },
    coral:     { by: "Frank and Joyce Burek（NOAA 国家海洋保护区）", lic: "Public Domain（NOAA）", src: "https://sanctuaries.noaa.gov/pgallery/pgflower/habitats/habitats_14.html",
                 bleach: { by: "Oregon State University", lic: "CC BY-SA 2.0", src: "https://commons.wikimedia.org/wiki/File:Bleached_coral_(24577819729).jpg" } },
    spoonbill: { by: "Dan Vickers", lic: "CC BY", src: "iNaturalist" },
    emberiza:  { by: "tianyang", lic: "CC BY-NC", src: "iNaturalist" },
    bumblebee: { by: "iNaturalist 摄影者", lic: "CC0", src: "iNaturalist" },
    rightwhale: { by: "Ellen O'Donnell（NOAA Teacher at Sea）", lic: "Public Domain（NOAA）", src: "https://noaateacheratsea.blog/2012/05/21/ellen-odonnell-whales-up-close-may-18-2012/" },
    vaquita:   { by: "Paula Olson（NOAA SWFSC）", lic: "Public Domain（NOAA）", src: "https://commons.wikimedia.org/wiki/File:Vaquita6_Olson_NOAA.jpg" },
    bustard:   { by: "igor_sikorskiy（iNaturalist）", lic: "CC BY 4.0", src: "https://www.inaturalist.org/observations/381736896" },
    stork:     { by: "vadawhite", lic: "CC BY-NC", src: "iNaturalist" },
    "scalysided-merganser": { file: "img/scalysided-merganser.jpg", by: "DickDaniels（theworldbirds.org）", lic: "CC BY-SA 3.0", src: "https://commons.wikimedia.org/wiki/File:Scaly-sided_Merganser_RWD.jpg" },
    "saker-falcon": { file: "img/saker-falcon.jpg", by: "ivan_matsanke（iNaturalist）", lic: "CC BY-NC 4.0", src: "https://www.inaturalist.org/observations/384800225" },
    "green-peafowl": { file: "img/green-peafowl.jpg", by: "Crisco 1492（Wikimedia Commons）", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Green_peafowl_(Pavo_muticus),_Gembira_Loka_Zoo,_Yogyakarta,_2015-03-15.jpg" },
    "whiteheaded-duck": { file: "img/whiteheaded-duck.jpg", by: "aissadjamelfilali", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Male_white-headed_duck_(Oxyura_leucocephala)_in_Algeria.jpg" },
    "bengal-florican": { file: "img/bengal-florican.jpg", by: "subhayan", lic: "CC BY-NC", src: "iNaturalist" },
    "hainan-peacockpheasant": { file: "img/hainan-peacockpheasant.jpg", by: "xihong", lic: "CC BY-NC", src: "iNaturalist" },
    tiger:      { file: "img/tiger.jpg", by: "Charles J. Sharp", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Walking_tiger_female.jpg" },
    lion:       { file: "img/lion.jpg", by: "© Giles Laurent, gileslaurent.com", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
    asianelephant: { file: "img/asianelephant.jpg", by: "Tagooty", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:Male_Elephant_Tusker_Nagarhole_Karnataka_Apr22_D72_23736.jpg" },
    cheetah:    { file: "img/cheetah.jpg", by: "© Giles Laurent, gileslaurent.com", lic: "CC BY-SA 4.0", src: "https://commons.wikimedia.org/wiki/File:037_Cheetah_close-up_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" }
  }
};

const SECTIONS = {
  contrabass: { zh: "低音声部", en: "Contrabass", desc: "次声脉冲：人耳边缘的声音" },
  brass:      { zh: "铜管",     en: "Brass",      desc: "隆鸣：能传播数十公里" },
  solo:       { zh: "独奏",     en: "Solo",       desc: "全世界仅 325 位演奏者" },
  woodwind:   { zh: "木管",     en: "Woodwind",   desc: "鸟鸣：高频而纤细" },
  texture:    { zh: "织体声部", en: "Texture", desc: "织体：环境声景与特殊音色" }
};
