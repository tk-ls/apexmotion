export type Lang = "en" | "zh";

export const langPrefix: Record<Lang, string> = { en: "", zh: "/zh" };

/** Build a locale-aware href, e.g. href("zh", "/portfolio") -> "/zh/portfolio" */
export function href(lang: Lang, path: string): string {
  if (path === "/") return langPrefix[lang] || "/";
  return `${langPrefix[lang]}${path}`;
}

const en = {
  logo: { primary: "APEX MOTION", secondary: "Studios" },
  nav: {
    items: [
      { path: "/", label: "Home" },
      { path: "/portfolio", label: "Work" },
      { path: "/services", label: "Services" },
      { path: "/about", label: "Studio" },
      { path: "/contact", label: "Contact" },
    ],
    cta: "Book Your Shoot",
  },
  footer: {
    badges: ["CASA-Registered Operator", "Fully Insured", "Safety Officer On-Site"],
    blurb:
      "Immersive FPV property films and cinematic exterior photography for Sydney’s premium real estate.",
    explore: "Explore",
    exploreLinks: [
      { path: "/portfolio", label: "Work" },
      { path: "/services", label: "Services & Packages" },
      { path: "/about", label: "The Studio" },
      { path: "/contact", label: "Book a Shoot" },
    ],
    contact: "Contact",
    servicing: "Servicing Greater Sydney",
    rights: "Apex Motion Studios",
  },
  trust: {
    eyebrow: "Trust & Compliance",
    heading: "Flown by professionals. Backed by certification.",
    items: [
      {
        index: "01",
        title: "CASA-Registered Operator",
        body: "Every flight is conducted under our registered operator and dedicated safety officer — no regulatory surprises, no cancelled shoots.",
      },
      {
        index: "02",
        title: "Full Public Liability Insurance",
        body: "Comprehensive cover on every job means zero liability exposure for your agency or your vendor.",
      },
      {
        index: "03",
        title: "A Two-Person Professional Crew",
        body: "Pilot plus safety officer on every shoot — a production partner your clients can trust on-site at their most valuable asset.",
      },
    ],
  },
  home: {
    eyebrow: "Sydney · Luxury Real Estate Media",
    h1: "Properties that sell themselves. Before the first inspection.",
    sub: "Immersive one-take drone tours and cinematic exterior photography for Sydney’s most distinctive properties.",
    ctaPrimary: "Check Availability",
    ctaSecondary: "Watch Our Work",
    showreelLabel: "Showreel — your best 15-second FPV clip",
    showreelSub: "Muted autoplay · replace with Vimeo Pro or Mux embed",
    aboutEyebrow: "The Studio",
    aboutHeading: "Immersive visual storytelling that moves buyers — and markets.",
    aboutP1:
      "Apex Motion Studios is a Sydney-based production studio specialising in immersive visual storytelling for premium real estate. Our signature one-take FPV tours carry buyers through a property in a single, seamless flight — revealing flow, scale and light in a way static photography never can.",
    aboutP2:
      "Paired with cinematic exterior aerials, the result is a listing that commands attention, draws more qualified buyers to inspection, and helps properties sell faster. Every shoot is fully insured and CASA-compliant, delivered by a dedicated two-person crew — so agents get broadcast-quality results with zero operational risk.",
    aboutLink: "Meet the studio",
    featureLabel: "One-take FPV tour — feature example",
    featureSub: "Click-to-play · lazy-loaded",
    servicesEyebrow: "What We Deliver",
    servicesHeading: "Three ways to elevate a campaign.",
    servicesLink: "Services & Packages",
    services: [
      {
        index: "01",
        title: "Signature Exteriors",
        body: "Cinematic exterior aerials and gimbal photography that give every listing a commanding first impression.",
        featured: false,
      },
      {
        index: "02",
        title: "The Immersive Tour",
        body: "Our signature one-take indoor FPV flight — a single, seamless journey through the property that reveals flow, scale and light.",
        featured: true,
      },
      {
        index: "03",
        title: "The Campaign Suite",
        body: "The complete marketing package: immersive tour, twilight shoot, lifestyle b-roll and vertical cuts for social — delivered fast.",
        featured: false,
      },
    ],
    mostPopular: "Most Popular",
    finalHeading: "Your next listing deserves more than photos.",
    finalCta: "Check Availability for Your Listing",
    finalNote:
      "Tell us about the property — we confirm availability within one business day.",
  },
  portfolio: {
    eyebrow: "Our Work",
    h1: "Every property has a story. We film it in one take.",
    sub: "A curated selection of immersive FPV tours and cinematic exterior films. Best experienced with sound on.",
    featuredLabel: "Featured film — your strongest one-take FPV tour",
    featuredSub: "Full-width hero · click-to-play with poster frame",
    sampleNote: "Sample project",
    projects: [
      { suburb: "Mosman", type: "Harbourside Residence" },
      { suburb: "Barangaroo", type: "Penthouse" },
      { suburb: "Vaucluse", type: "Estate & Grounds" },
      { suburb: "Surry Hills", type: "Warehouse Conversion" },
      { suburb: "Palm Beach", type: "Coastal Retreat" },
      { suburb: "Kellyville", type: "Development Showcase" },
    ],
    closingHeading: "Want your listing to look like this?",
    closingCta: "Check Availability for Your Listing",
  },
  services: {
    eyebrow: "Services & Packages",
    h1: "Per-property packages, built for campaigns.",
    sub: "Simple, per-listing pricing that scales with the property — no hourly rates, no surprises. Every package is quoted to the campaign.",
    mostPopular: "Most Popular",
    quoteCta: "Request a Quote",
    packages: [
      {
        index: "01",
        name: "Signature Exteriors",
        tagline: "The commanding first impression",
        featured: false,
        includes: [
          "Cinematic exterior drone aerials",
          "High-end gimbal photography",
          "Edited highlight photo set",
          "Colour-graded 60-second exterior film",
          "Delivery within 3 business days",
        ],
      },
      {
        index: "02",
        name: "The Immersive Tour",
        tagline: "Our signature one-take FPV experience",
        featured: true,
        includes: [
          "Everything in Signature Exteriors",
          "One-take indoor FPV tour",
          "Agent-branded final edit",
          "Vertical cuts for Instagram & TikTok",
          "Licensed soundtrack & sound design",
          "Delivery within 3 business days",
        ],
      },
      {
        index: "03",
        name: "The Campaign Suite",
        tagline: "The complete flagship campaign",
        featured: false,
        includes: [
          "Everything in The Immersive Tour",
          "Twilight exterior shoot",
          "Lifestyle & location b-roll",
          "Priority 48-hour turnaround",
          "Dedicated campaign consultation",
        ],
      },
    ],
    retainerPre: "Multi-listing and agency retainer packages available — ",
    retainerLink: "talk to us about your pipeline",
    retainerPost: ".",
    processEyebrow: "How It Works",
    processHeading: "From enquiry to campaign-ready in days.",
    process: [
      {
        step: "01",
        title: "Enquire",
        body: "Send the property address and your campaign timeline. We confirm availability and a tailored quote within one business day.",
      },
      {
        step: "02",
        title: "We Shoot",
        body: "Our two-person crew handles everything on-site — flight planning, safety checks and capture — typically in a single session.",
      },
      {
        step: "03",
        title: "You Launch",
        body: "Campaign-ready films, verticals and photography delivered within 3 business days (48 hours on Campaign Suite).",
      },
    ],
  },
  about: {
    eyebrow: "The Studio",
    h1: "A production partner, not a drone operator.",
    p1a: "Apex Motion Studios was founded on a simple observation: the properties that sell fastest are the ones buyers can already picture themselves living in. Static photography shows a house. A one-take FPV tour lets a buyer ",
    p1em: "move through a home",
    p1b: " — feeling its flow, its scale and its light before they ever step inside.",
    p2: "We operate as a dedicated two-person crew on every shoot. Our registered operator and safety officer oversees flight planning, risk assessment and compliance, while our pilot focuses entirely on the craft — threading a single, seamless flight path through a property that would take a conventional videographer a full day of cuts to approximate.",
    p3: "That structure is deliberate. It means agents and vendors get a professional production partner on-site: insured, CASA-compliant and accountable — with the cinematic instincts of a film crew and the reliability of an established supplier.",
    credentialsHeading: "Credentials",
    credentials: [
      "CASA-registered operator on every shoot",
      "Dedicated safety officer & documented flight planning",
      "Full public liability insurance",
      "Servicing Greater Sydney",
    ],
    everyShootHeading: "On every shoot",
    everyShootBody:
      "Pre-shoot site assessment · CASA-compliant flight plan · on-site safety officer · cinematic FPV capture · high-end gimbal & exterior aerials · colour-graded delivery within 3 business days.",
    closingHeading: "See the work for yourself.",
    closingWork: "View Our Work",
    closingBook: "Book Your Shoot",
  },
  contact: {
    eyebrow: "Contact",
    h1: "Check availability for your listing.",
    sub: "Tell us about the property and your campaign timeline — we’ll come back with availability and a tailored quote within one business day.",
    name: "Your name",
    agency: "Agency",
    email: "Email",
    phone: "Phone",
    address: "Property address",
    packageLabel: "Package of interest",
    packageOptions: [
      "Not sure yet",
      "Signature Exteriors",
      "The Immersive Tour",
      "The Campaign Suite",
      "Multi-listing / agency retainer",
    ],
    timeline: "Preferred shoot window",
    timelinePlaceholder: "e.g. Week of 21 July",
    message: "Anything else we should know?",
    submit: "Check Availability",
    talkHeading: "Prefer to talk?",
    areaHeading: "Service area",
    areaBody:
      "Greater Sydney — from the Eastern Suburbs and Lower North Shore to the Northern Beaches, Inner West and Hills District. Regional NSW by arrangement.",
  },
  meta: {
    home: {
      title: "Apex Motion Studios — Cinematic FPV Property Films, Sydney",
      description:
        "Immersive one-take FPV drone tours and cinematic exterior photography for Sydney's most distinctive properties. Fully insured, CASA-compliant.",
    },
    portfolio: {
      title: "Our Work",
      description:
        "A curated selection of one-take FPV property tours and cinematic exterior films for Sydney real estate.",
    },
    services: {
      title: "Services & Packages",
      description:
        "Per-property packages for real estate campaigns: cinematic exteriors, one-take FPV tours, and full campaign suites. Fully insured and CASA-compliant.",
    },
    about: {
      title: "The Studio",
      description:
        "Apex Motion Studios is a Sydney production studio for premium real estate media — a professional two-person crew, fully insured and CASA-compliant.",
    },
    contact: {
      title: "Book a Shoot",
      description:
        "Check availability for your listing. Tell us about the property and we'll confirm availability and a tailored quote within one business day.",
    },
  },
};

export type Dict = typeof en;

const zh: Dict = {
  logo: { primary: "一鸣惊人传媒", secondary: "Apex Motion Studios" },
  nav: {
    items: [
      { path: "/", label: "首页" },
      { path: "/portfolio", label: "作品" },
      { path: "/services", label: "服务" },
      { path: "/about", label: "工作室" },
      { path: "/contact", label: "联系" },
    ],
    cta: "预约拍摄",
  },
  footer: {
    badges: ["CASA 注册运营人", "全额保险保障", "现场安全官"],
    blurb: "为悉尼高端房产提供沉浸式 FPV 影片与电影级外景摄影。",
    explore: "探索",
    exploreLinks: [
      { path: "/portfolio", label: "作品集" },
      { path: "/services", label: "服务与套系" },
      { path: "/about", label: "工作室" },
      { path: "/contact", label: "预约拍摄" },
    ],
    contact: "联系方式",
    servicing: "服务大悉尼地区",
    rights: "一鸣惊人传媒 Apex Motion Studios",
  },
  trust: {
    eyebrow: "信任与合规",
    heading: "专业执飞，持证保障。",
    items: [
      {
        index: "01",
        title: "CASA 注册运营人",
        body: "每次飞行均由注册运营人与专职安全官全程督导——杜绝监管意外，绝不因合规问题取消拍摄。",
      },
      {
        index: "02",
        title: "全额公众责任保险",
        body: "每个项目均有全面的保险覆盖，中介机构与业主均无任何责任风险。",
      },
      {
        index: "03",
        title: "双人专业团队",
        body: "每次拍摄均配备飞手与安全官——一个值得客户信赖的制作伙伴，守护他们最贵重的资产。",
      },
    ],
  },
  home: {
    eyebrow: "悉尼 · 高端房产影像",
    h1: "好房源，自己会说话。在首次开放看房之前。",
    sub: "为悉尼最具辨识度的高端房源，打造一镜到底的沉浸式无人机导览与电影级外景影像。",
    ctaPrimary: "查询档期",
    ctaSecondary: "观看作品",
    showreelLabel: "精选集锦——您最精彩的 15 秒 FPV 镜头",
    showreelSub: "静音自动播放 · 替换为 Vimeo Pro 或 Mux 嵌入",
    aboutEyebrow: "工作室",
    aboutHeading: "以沉浸式影像叙事，打动买家、撬动市场。",
    aboutP1:
      "一鸣惊人传媒（Apex Motion Studios）是一家立足悉尼的影像制作工作室，专注于高端房产的沉浸式视觉叙事。我们标志性的一镜到底 FPV 导览，带领买家在一次流畅的飞行中穿越整套房源——空间的动线、尺度与光影，以静态照片无法企及的方式徐徐展开。",
    aboutP2:
      "配合电影级航拍外景，最终呈现的是一条令人过目难忘的房源影片：吸引更多高意向买家到场看房，助力房产更快成交。每次拍摄均有完善的保险保障、完全符合 CASA 民航规范，并由专业双人团队执行——中介方获得广播级的成片品质，无需承担任何运营风险。",
    aboutLink: "了解工作室",
    featureLabel: "一镜到底 FPV 导览——精选示例",
    featureSub: "点击播放 · 延迟加载",
    servicesEyebrow: "服务内容",
    servicesHeading: "提升房产营销的三种方式。",
    servicesLink: "服务与套系",
    services: [
      {
        index: "01",
        title: "臻选外景",
        body: "电影级航拍外景与地面稳定器摄影，让每套房源赢得先声夺人的第一印象。",
        featured: false,
      },
      {
        index: "02",
        title: "沉浸导览",
        body: "我们的招牌一镜到底室内 FPV 飞行——一次流畅完整的空间之旅，尽显动线、尺度与光影。",
        featured: true,
      },
      {
        index: "03",
        title: "全案套系",
        body: "完整的营销组合：沉浸导览、暮色拍摄、生活方式镜头与竖版社交媒体剪辑——快速交付。",
        featured: false,
      },
    ],
    mostPopular: "最受欢迎",
    finalHeading: "您的下一套房源，值得比照片更好的呈现。",
    finalCta: "查询档期",
    finalNote: "告诉我们房源信息——我们将在一个工作日内确认档期。",
  },
  portfolio: {
    eyebrow: "作品集",
    h1: "每套房产都有自己的故事。我们用一镜到底来讲述。",
    sub: "精选沉浸式 FPV 导览与电影级外景影片，建议开启声音观看。",
    featuredLabel: "主打影片——您最出色的一镜到底 FPV 导览",
    featuredSub: "通栏展示 · 点击播放并配封面帧",
    sampleNote: "示例项目",
    projects: [
      { suburb: "Mosman", type: "海港住宅" },
      { suburb: "Barangaroo", type: "顶层公寓" },
      { suburb: "Vaucluse", type: "庄园宅邸" },
      { suburb: "Surry Hills", type: "仓库改造" },
      { suburb: "Palm Beach", type: "海滨度假宅" },
      { suburb: "Kellyville", type: "开发项目展示" },
    ],
    closingHeading: "想让您的房源也如此呈现？",
    closingCta: "查询档期",
  },
  services: {
    eyebrow: "服务与套系",
    h1: "按房源计价的拍摄套系，为营销周期而生。",
    sub: "简单透明的按套计价，随房源规格灵活调整——没有时薪，没有意外。每个套系均按营销需求单独报价。",
    mostPopular: "最受欢迎",
    quoteCta: "获取报价",
    packages: [
      {
        index: "01",
        name: "臻选外景",
        tagline: "先声夺人的第一印象",
        featured: false,
        includes: [
          "电影级无人机航拍外景",
          "高端稳定器摄影",
          "精修亮点照片集",
          "调色完成的 60 秒外景影片",
          "3 个工作日内交付",
        ],
      },
      {
        index: "02",
        name: "沉浸导览",
        tagline: "招牌一镜到底 FPV 体验",
        featured: true,
        includes: [
          "包含「臻选外景」全部内容",
          "一镜到底室内 FPV 导览",
          "中介品牌定制成片",
          "Instagram 与 TikTok 竖版剪辑",
          "正版配乐与声音设计",
          "3 个工作日内交付",
        ],
      },
      {
        index: "03",
        name: "全案套系",
        tagline: "旗舰级完整营销方案",
        featured: false,
        includes: [
          "包含「沉浸导览」全部内容",
          "暮色外景拍摄",
          "生活方式与周边环境镜头",
          "48 小时优先交付",
          "专属营销顾问沟通",
        ],
      },
    ],
    retainerPre: "提供多房源与中介机构长期合作方案——",
    retainerLink: "欢迎洽谈您的房源计划",
    retainerPost: "。",
    processEyebrow: "合作流程",
    processHeading: "从咨询到交付，只需数日。",
    process: [
      {
        step: "01",
        title: "咨询",
        body: "发送房源地址与营销时间表，我们将在一个工作日内确认档期并提供专属报价。",
      },
      {
        step: "02",
        title: "拍摄",
        body: "双人团队全程负责现场事务——航线规划、安全检查与拍摄执行，通常一次完成。",
      },
      {
        step: "03",
        title: "交付",
        body: "3 个工作日内交付可直接投放的影片、竖版剪辑与照片（全案套系 48 小时）。",
      },
    ],
  },
  about: {
    eyebrow: "工作室",
    h1: "我们是制作伙伴，而非无人机操作员。",
    p1a: "一鸣惊人传媒源于一个简单的观察：卖得最快的房子，是买家已经能想象自己住进去的房子。静态照片只能展示房屋本身，而一镜到底的 FPV 导览让买家",
    p1em: "走进家中",
    p1b: "——在亲临现场之前，先感受它的动线、尺度与光影。",
    p2: "每次拍摄我们都以专职双人团队执行。注册运营人兼安全官负责航线规划、风险评估与合规事务，飞手则全情专注于创作本身——以一条流畅完整的飞行路线穿越房源，而传统摄像师需要整整一天的分镜剪辑才能接近这种效果。",
    p3: "这样的架构是有意为之。它意味着中介与业主在现场得到的是一个专业的制作伙伴：有保险、合规、可问责——既有电影团队的创作直觉，也有成熟供应商的稳定可靠。",
    credentialsHeading: "资质认证",
    credentials: [
      "每次拍摄均有 CASA 注册运营人在场",
      "专职安全官与完备的飞行计划文档",
      "全额公众责任保险",
      "服务大悉尼地区",
    ],
    everyShootHeading: "每次拍摄包含",
    everyShootBody:
      "拍摄前现场评估 · 符合 CASA 规范的飞行计划 · 现场安全官 · 电影级 FPV 拍摄 · 高端稳定器与航拍外景 · 3 个工作日内交付调色成片。",
    closingHeading: "亲自看看我们的作品。",
    closingWork: "查看作品",
    closingBook: "预约拍摄",
  },
  contact: {
    eyebrow: "联系我们",
    h1: "查询您房源的拍摄档期。",
    sub: "告诉我们房源信息与营销时间表——我们将在一个工作日内回复档期与专属报价。",
    name: "姓名",
    agency: "所属中介机构",
    email: "邮箱",
    phone: "电话",
    address: "房源地址",
    packageLabel: "意向套系",
    packageOptions: [
      "暂不确定",
      "臻选外景",
      "沉浸导览",
      "全案套系",
      "多房源 / 机构长期合作",
    ],
    timeline: "期望拍摄时间",
    timelinePlaceholder: "例如：7 月 21 日当周",
    message: "其他需要说明的信息",
    submit: "查询档期",
    talkHeading: "更愿意直接沟通？",
    areaHeading: "服务范围",
    areaBody:
      "大悉尼地区——从东区、下北岸到北部海滩、内西区与山区。新州其他地区可协商安排。",
  },
  meta: {
    home: {
      title: "一鸣惊人传媒 — 悉尼高端房产 FPV 影像 | Apex Motion Studios",
      description:
        "为悉尼最具辨识度的高端房源打造一镜到底 FPV 无人机导览与电影级外景摄影。全额保险，符合 CASA 规范。",
    },
    portfolio: {
      title: "作品集 | 一鸣惊人传媒",
      description: "精选一镜到底 FPV 房产导览与电影级外景影片。",
    },
    services: {
      title: "服务与套系 | 一鸣惊人传媒",
      description:
        "按房源计价的拍摄套系：电影级外景、一镜到底 FPV 导览与全案营销方案。全额保险，符合 CASA 规范。",
    },
    about: {
      title: "工作室 | 一鸣惊人传媒",
      description:
        "一鸣惊人传媒是立足悉尼的高端房产影像制作工作室——专业双人团队，全额保险，符合 CASA 规范。",
    },
    contact: {
      title: "预约拍摄 | 一鸣惊人传媒",
      description:
        "查询您房源的拍摄档期——我们将在一个工作日内回复档期与专属报价。",
    },
  },
};

export const dictionaries: Record<Lang, Dict> = { en, zh };
