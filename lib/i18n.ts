export type Lang = "en" | "zh";

export const langPrefix: Record<Lang, string> = { en: "", zh: "/zh" };

/** Build a locale-aware href, e.g. href("zh", "/portfolio") -> "/zh/portfolio" */
export function href(lang: Lang, path: string): string {
  if (path === "/") return langPrefix[lang] || "/";
  return `${langPrefix[lang]}${path}`;
}

const en = {
  logo: { primary: "Apex Motion", secondary: "Studios" },
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
    cinemaEyebrow: "The screening room",
    cinemaCaption: "Lights down. Sound on.",
    cinemaHint: "Keep scrolling",
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
        body: "Our signature flight: one seamless take through the whole property, and the centrepiece of a campaign.",
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
    p3: "That structure is deliberate. It means agents and vendors get a true production partner on-site — the cinematic instincts of a film crew, backed by the reliability of an established supplier.",
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
  "logo": {
    "primary": "一鸣惊人传媒",
    "secondary": "Apex Motion Studios"
  },
  "nav": {
    "items": [
      {
        "path": "/",
        "label": "首页"
      },
      {
        "path": "/portfolio",
        "label": "作品"
      },
      {
        "path": "/services",
        "label": "服务"
      },
      {
        "path": "/about",
        "label": "工作室"
      },
      {
        "path": "/contact",
        "label": "联系"
      }
    ],
    "cta": "预约拍摄"
  },
  "footer": {
    "badges": [
      "CASA 注册运营人",
      "全额公众责任险",
      "现场安全官"
    ],
    "blurb": "专注悉尼高端房产影像：沉浸式 FPV 导览与电影级外景摄影。",
    "explore": "导航",
    "exploreLinks": [
      {
        "path": "/portfolio",
        "label": "作品集"
      },
      {
        "path": "/services",
        "label": "服务与套系"
      },
      {
        "path": "/about",
        "label": "工作室"
      },
      {
        "path": "/contact",
        "label": "预约拍摄"
      }
    ],
    "contact": "联系方式",
    "servicing": "服务大悉尼地区",
    "rights": "一鸣惊人传媒 Apex Motion Studios"
  },
  "trust": {
    "eyebrow": "信任与合规",
    "heading": "专业执飞，资质托底。",
    "items": [
      {
        "index": "01",
        "title": "CASA 注册运营人",
        "body": "每一次飞行，都由注册运营人兼安全官全程把关。合规功课在起飞前做足——没有监管意外，也不会临时取消拍摄。"
      },
      {
        "index": "02",
        "title": "全额公众责任险",
        "body": "每一次拍摄，保险在开拍前就已全额到位。即便现场有意外，责任风险也不会落到中介机构或业主头上。"
      },
      {
        "index": "03",
        "title": "专职双人团队",
        "body": "到场的永远是两个人：飞手专注飞行，安全官照看现场。在业主最贵重的资产里拍摄，我们是值得托付的制作伙伴。"
      }
    ]
  },
  "home": {
    "eyebrow": "悉尼·高端房产影像",
    "h1": "首次开放看房前，买家已经动心。",
    "sub": "一镜到底 FPV 导览与电影级外景影像，只为悉尼最出众的房源。",
    "ctaPrimary": "查询档期",
    "ctaSecondary": "观看作品",
    "showreelLabel": "精选集锦——放您最出彩的 15 秒 FPV 镜头",
    "showreelSub": "静音自动播放 · 替换为 Vimeo Pro 或 Mux 嵌入",
    "cinemaEyebrow": "放映厅",
    "cinemaCaption": "灯光暗下，请开声音。",
    "cinemaHint": "继续下滑",
    "aboutEyebrow": "工作室",
    "aboutHeading": "沉浸式影像，先打动买家，再打动市场。",
    "aboutP1": "一鸣惊人传媒（Apex Motion Studios）是悉尼一家高端房产影像工作室。我们的招牌是一镜到底 FPV 导览：一次流畅的飞行，带买家穿过整套房源，动线、尺度与光影一路展开。这样的临场感，静态照片给不了。",
    "aboutP2": "配上电影级航拍外景，房源第一眼就与众不同——更多高意向买家走进开放看房，成交也来得更快。每次拍摄都有全额公众责任险，符合 CASA 规范，由专职双人团队执行；您拿到广播级成片，不必承担任何运营风险。",
    "aboutLink": "了解工作室",
    "featureLabel": "一镜到底 FPV 导览——精选示例",
    "featureSub": "点击播放 · 延迟加载",
    "servicesEyebrow": "服务内容",
    "servicesHeading": "一套房源，三种拍法。",
    "servicesLink": "服务与套系",
    "services": [
      {
        "index": "01",
        "title": "臻选外景",
        "body": "电影级航拍外景与地面稳定器摄影。房源的第一印象，从空中开始。",
        "featured": false
      },
      {
        "index": "02",
        "title": "沉浸导览",
        "body": "我们的招牌：一趟室内飞行走完整套房源，是整场营销的主角。",
        "featured": true
      },
      {
        "index": "03",
        "title": "旗舰全案",
        "body": "一次拍齐整套营销素材：沉浸导览、暮色拍摄、生活方式镜头与竖版剪辑——48 小时优先交付。",
        "featured": false
      }
    ],
    "mostPopular": "最受欢迎",
    "finalHeading": "下一套房源，不该只有照片。",
    "finalCta": "查询档期",
    "finalNote": "把房源信息告诉我们，一个工作日内确认档期。"
  },
  "portfolio": {
    "eyebrow": "作品集",
    "h1": "每套房子都有故事，我们一镜到底讲完。",
    "sub": "精选沉浸式 FPV 导览与电影级外景影片，每一支都值得开着声音看。",
    "featuredLabel": "主打影片——您最出色的一镜到底 FPV 导览",
    "featuredSub": "通栏展示 · 点击播放，带封面帧",
    "sampleNote": "示例项目",
    "closingHeading": "想让您的房源也这样亮相？",
    "closingCta": "查询档期",
    "projects": [
      {
        "suburb": "Mosman",
        "type": "海港住宅"
      },
      {
        "suburb": "Barangaroo",
        "type": "顶层公寓"
      },
      {
        "suburb": "Vaucluse",
        "type": "庄园宅邸"
      },
      {
        "suburb": "Surry Hills",
        "type": "仓库改造"
      },
      {
        "suburb": "Palm Beach",
        "type": "海滨度假宅"
      },
      {
        "suburb": "Kellyville",
        "type": "开发项目展示"
      }
    ]
  },
  "services": {
    "eyebrow": "服务与套系",
    "h1": "套系按房源计价，为营销周期而设。",
    "sub": "一套房源，一份报价，价格随规格而定。不按小时计费，也没有意料之外的账单。三档套系，均按营销需求单独报价。",
    "mostPopular": "最受欢迎",
    "quoteCta": "获取报价",
    "packages": [
      {
        "index": "01",
        "name": "臻选外景",
        "tagline": "先声夺人的第一印象",
        "featured": false,
        "includes": [
          "电影级外景航拍",
          "地面稳定器摄影",
          "精修房源照片集",
          "60 秒外景调色成片"
        ]
      },
      {
        "index": "02",
        "name": "沉浸导览",
        "tagline": "一次飞行，穿越整套房源",
        "featured": true,
        "includes": [
          "包含「臻选外景」全部内容",
          "一镜到底室内 FPV 导览",
          "中介品牌定制成片",
          "Instagram 与 TikTok 竖版剪辑",
          "正版配乐与声音设计"
        ]
      },
      {
        "index": "03",
        "name": "旗舰全案",
        "tagline": "营销所需，一次备齐",
        "featured": false,
        "includes": [
          "包含「沉浸导览」全部内容",
          "暮色拍摄",
          "生活方式与周边环境镜头",
          "48 小时优先交付",
          "专属营销顾问"
        ]
      }
    ],
    "retainerPre": "多房源拍摄与中介机构长期合作均可安排——",
    "retainerLink": "聊聊您接下来的房源",
    "retainerPost": "。",
    "processEyebrow": "合作流程",
    "processHeading": "从询价到可直接投放，只需几天。",
    "process": [
      {
        "step": "01",
        "title": "询价",
        "body": "发来房源地址与营销时间表即可。档期与报价，一个工作日内回复。"
      },
      {
        "step": "02",
        "title": "拍摄",
        "body": "现场交给双人团队：航线规划、安全检查与正式拍摄，通常一次完成。"
      },
      {
        "step": "03",
        "title": "交付",
        "body": "影片、竖版剪辑与照片，3 个工作日内交付，拿到即可直接投放。选「旗舰全案」，48 小时优先交付。"
      }
    ]
  },
  "about": {
    "eyebrow": "工作室",
    "h1": "制作伙伴，而非无人机操作员。",
    "p1a": "一鸣惊人传媒（Apex Motion Studios）的起点，是一个朴素的观察：卖得最快的房子，是买家已经能想象自己住进去的房子。静态照片拍的是房子，一镜到底 FPV 导览让买家提前",
    "p1em": "走进一个家",
    "p1b": "——动线、尺度与光影，人还没进门，心里已经有数。",
    "p2": "每次拍摄，到场的都是专职双人团队。注册运营人兼安全官统筹航线规划、风险评估与合规，飞手只专注一件事——创作。一条流畅的飞行路线穿越整套房源，换作传统摄像师，剪上一整天也只能接近这个效果。",
    "p3": "这样的架构是刻意为之。中介和业主请到现场的，是一个专业的制作伙伴——论创作，有电影团队的直觉；论交付，有成熟供应商的可靠。",
    "credentialsHeading": "资质与保障",
    "credentials": [
      "每次拍摄均有 CASA 注册运营人在场",
      "专职安全官与留档备查的飞行计划",
      "全额公众责任险",
      "服务大悉尼地区"
    ],
    "everyShootHeading": "每次拍摄均包含",
    "everyShootBody": "拍摄前实地勘查 · 符合 CASA 规范的飞行计划 · 现场安全官 · 电影级 FPV 拍摄 · 高端稳定器摄影与航拍外景 · 3 个工作日内交付调色成片。",
    "closingHeading": "剩下的，交给作品来说。",
    "closingWork": "查看作品",
    "closingBook": "预约拍摄"
  },
  "contact": {
    "eyebrow": "预约与询价",
    "h1": "查询档期，其余交给我们。",
    "sub": "留下房源信息与营销时间表。档期与报价，一个工作日内回复。",
    "name": "姓名",
    "agency": "所属中介机构",
    "email": "邮箱",
    "phone": "电话",
    "address": "房源地址",
    "packageLabel": "意向套系",
    "packageOptions": [
      "还没想好",
      "臻选外景",
      "沉浸导览",
      "旗舰全案",
      "多房源与中介机构长期合作"
    ],
    "timeline": "期望拍摄时间",
    "timelinePlaceholder": "例如：7 月 21 日当周",
    "message": "补充说明",
    "submit": "查询档期",
    "talkHeading": "更愿意直接聊？",
    "areaHeading": "服务范围",
    "areaBody": "服务覆盖大悉尼：东区、下北岸、北部海滩、内西区与山区（Hills District）。新州其他地区可另行安排。"
  },
  "meta": {
    "home": {
      "title": "一鸣惊人传媒 Apex Motion Studios | 悉尼高端房产 FPV 影像",
      "description": "一次流畅飞行，看清一套房子的动线、尺度与光影。我们为悉尼高端房源拍摄一镜到底 FPV 导览与电影级外景，让买家在开放看房前先动心。全额公众责任险，符合 CASA 规范。"
    },
    "portfolio": {
      "title": "作品集 | 一鸣惊人传媒",
      "description": "精选作品：悉尼高端房源的一镜到底 FPV 导览与电影级外景影片。一次流畅的飞行，让买家在开放看房前看懂动线与尺度。每次执飞都符合 CASA 规范。"
    },
    "services": {
      "title": "服务与套系 | 一鸣惊人传媒",
      "description": "三档套系，按房源计价：「臻选外景」「沉浸导览」与「旗舰全案」，涵盖电影级外景与一镜到底 FPV 导览，成片可直接投放。3 个工作日内交付，旗舰全案 48 小时优先交付。"
    },
    "about": {
      "title": "工作室 | 一鸣惊人传媒",
      "description": "一鸣惊人传媒（Apex Motion Studios）是悉尼一家高端房产影像工作室。每次拍摄，专职双人团队到场：注册运营人兼安全官把关现场，飞手专注飞行。全额公众责任险，符合 CASA 规范。"
    },
    "contact": {
      "title": "预约拍摄 | 一鸣惊人传媒",
      "description": "查询您房源的拍摄档期。留下位置与基本信息，我们在一个工作日内回复，确认档期并附上定制报价。趁首次开放看房之前，把影像准备好。"
    }
  }
};

export const dictionaries: Record<Lang, Dict> = { en, zh };
