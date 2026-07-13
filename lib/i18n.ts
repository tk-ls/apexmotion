export type Lang = "en" | "zh";

export const langPrefix: Record<Lang, string> = { en: "", zh: "/zh" };

/** Build a locale-aware href, e.g. href("zh", "/property") -> "/zh/property" */
export function href(lang: Lang, path: string): string {
  if (path === "/") return langPrefix[lang] || "/";
  return `${langPrefix[lang]}${path}`;
}

export const VERTICAL_KEYS = ["property", "advertising", "events"] as const;
export type VerticalKey = (typeof VERTICAL_KEYS)[number];

type Tile = { title: string; tag: string; video: string };
type WorkPage = {
  label: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  tiles: Tile[];
};
type Tier = {
  name: string;
  tagline: string;
  featured: boolean;
  includes: string[];
};
export type Vertical = {
  label: string;
  landing: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    sub: string;
    p1: string;
    p2: string;
    video: string;
    workHeading: string;
    packagesTitle: string;
    packagesBlurb: string;
    packagesLink: string;
  };
  workOrder: string[];
  work: Record<string, WorkPage>;
  packages: {
    label: string;
    title: string;
    description: string;
    h1: string;
    sub: string;
    tiers: Tier[];
  };
};

type NavMenu = {
  key: VerticalKey;
  label: string;
  items: { path: string; label: string }[];
};

const enVerticals: Record<VerticalKey, Vertical> = {
  property: {
    label: "Property",
    landing: {
      title: "Property Films & FPV Tours",
      description:
        "One-take FPV home tours and cinematic exteriors for Sydney's most distinctive listings. Fully insured and CASA-compliant.",
      eyebrow: "Property",
      h1: "Homes that sell before the first inspection.",
      sub: "One-take FPV tours and cinematic exteriors for Sydney's most distinctive listings.",
      p1: "Our signature one-take FPV tours carry buyers through a property in a single, seamless flight, revealing flow, scale and light in a way static photography never can.",
      p2: "Paired with cinematic exterior aerials, the result is a listing that commands attention, draws more qualified buyers to inspection, and helps properties sell faster, with zero operational risk to your agency.",
      video: "/videos/showreel-placeholder.mp4",
      workHeading: "Selected work",
      packagesTitle: "Three packages, priced per property",
      packagesBlurb:
        "No hourly rates and no surprises. One quote covers the campaign.",
      packagesLink: "View packages & pricing",
    },
    workOrder: ["fpv-tours", "exteriors"],
    work: {
      "fpv-tours": {
        label: "FPV Home Tours",
        title: "FPV Home Tours",
        description:
          "A curated selection of one-take indoor FPV property tours across Sydney.",
        h1: "One flight through the whole home.",
        sub: "A curated selection of one-take indoor FPV tours. Best watched with sound on.",
        tiles: [
          {
            title: "Mosman",
            tag: "Harbourside Residence",
            video: "/videos/showreel-placeholder.mp4",
          },
          {
            title: "Barangaroo",
            tag: "Penthouse",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "Vaucluse",
            tag: "Estate & Grounds",
            video: "/videos/tile-country-estate.mp4",
          },
        ],
      },
      exteriors: {
        label: "Exteriors & Twilight",
        title: "Exteriors & Twilight",
        description:
          "Cinematic exterior aerials and twilight shoots for Sydney real estate.",
        h1: "First impressions, from the air.",
        sub: "A curated selection of cinematic exterior aerials and twilight shoots.",
        tiles: [
          {
            title: "Surry Hills",
            tag: "Warehouse Conversion",
            video: "/videos/tile-city-buildings.mp4",
          },
          {
            title: "Palm Beach",
            tag: "Coastal Retreat",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "Kellyville",
            tag: "Development Showcase",
            video: "/videos/tile-suburbs.mp4",
          },
        ],
      },
    },
    packages: {
      label: "Packages",
      title: "Property Packages",
      description:
        "Per-property packages for real estate campaigns: cinematic exteriors, one-take FPV tours and full campaign suites.",
      h1: "Per-property packages, built for campaigns.",
      sub: "Simple per-listing pricing that scales with the property. No hourly rates, no surprises, and every package is quoted to the campaign.",
      tiers: [
        {
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
    },
  },
  advertising: {
    label: "Advertising",
    landing: {
      title: "Advertising & Brand Films",
      description:
        "Brand films, product spots and social-first content with FPV energy, shot by a fully insured, CASA-compliant Sydney crew.",
      eyebrow: "Advertising",
      h1: "Brand stories with a camera that can fly.",
      sub: "Brand films, product spots and social content from angles no tripod can reach.",
      p1: "The same one-take craft that sells homes makes products and places feel alive. We plan the flight around your story, then deliver one hero film and every cutdown your channels need.",
      p2: "Full public liability insurance and CASA compliance let us fly where most productions can't: indoors, low, and close to the subject. Every path is planned and rehearsed before the camera rolls.",
      video: "/videos/feature-street-tour.mp4",
      workHeading: "Selected work",
      packagesTitle: "From a social sprint to a full campaign",
      packagesBlurb:
        "Three ways to engage us, each quoted to the brief before we roll.",
      packagesLink: "View packages & pricing",
    },
    workOrder: ["brand-films", "social"],
    work: {
      "brand-films": {
        label: "Brand Films",
        title: "Brand Films",
        description:
          "Hero brand films and commercials built around cinematic aerial work.",
        h1: "One hero film carries the campaign.",
        sub: "A selection of brand films and commercial work.",
        tiles: [
          {
            title: "Coastal resort",
            tag: "Brand Film",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "Street launch teaser",
            tag: "Commercial",
            video: "/videos/feature-street-tour.mp4",
          },
          {
            title: "Campus identity",
            tag: "Corporate Film",
            video: "/videos/tile-city-buildings.mp4",
          },
        ],
      },
      social: {
        label: "Social Cuts",
        title: "Social Cuts",
        description:
          "Vertical-first social content for Instagram and TikTok, cut from cinematic aerial footage.",
        h1: "Three seconds to earn the scroll.",
        sub: "Vertical-first content made for Instagram and TikTok.",
        tiles: [
          {
            title: "Apartment launch",
            tag: "Vertical Cut",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "Suburb flyover",
            tag: "Quick Cut",
            video: "/videos/tile-suburbs.mp4",
          },
          {
            title: "Street run",
            tag: "FPV Reel",
            video: "/videos/feature-street-tour.mp4",
          },
        ],
      },
    },
    packages: {
      label: "Packages",
      title: "Advertising Packages",
      description:
        "Advertising production packages: social sprints, hero brand films and full multi-format campaigns.",
      h1: "From one reel to a full campaign.",
      sub: "Every engagement is quoted to the brief. These are the three shapes most projects take.",
      tiers: [
        {
          name: "Social Sprint",
          tagline: "Half-day shoot, online in days",
          featured: false,
          includes: [
            "Half-day shoot",
            "3 vertical edits",
            "Platform-ready colour grades",
            "Delivery within 3 business days",
          ],
        },
        {
          name: "Brand Film",
          tagline: "One hero film, every cutdown",
          featured: true,
          includes: [
            "Full-day shoot",
            "60–90 second hero film",
            "3 horizontal and 3 vertical cutdowns",
            "Licensed music & sound design",
            "Dedicated creative session",
          ],
        },
        {
          name: "Full Campaign",
          tagline: "Multi-location, every format",
          featured: false,
          includes: [
            "Everything in Brand Film",
            "Multi-location shoot days",
            "Stills photography alongside",
            "Priority scheduling & turnaround",
          ],
        },
      ],
    },
  },
  events: {
    label: "Events",
    landing: {
      title: "Event Films & Live Coverage",
      description:
        "Aftermovies and live aerial coverage for launches, festivals and private events across Sydney.",
      eyebrow: "Events",
      h1: "The day moves fast. The film keeps it.",
      sub: "Aftermovies and live coverage for launches, festivals and private events.",
      p1: "An event only happens once. Aerial cameras hold the scale, ground cameras catch the detail, and one crew covers both, so the energy reaches everyone who wasn't there by the next morning.",
      p2: "Flying near crowds has strict rules. Flight paths are planned in advance and our safety officer watches the whole time, which is how the audience stays safe and the shots stay big.",
      video: "/videos/tile-bay.mp4",
      workHeading: "Selected work",
      packagesTitle: "From highlights to a live feed",
      packagesBlurb:
        "Three coverage levels, each quoted to the run sheet before the day.",
      packagesLink: "View packages & pricing",
    },
    workOrder: ["aftermovies", "live"],
    work: {
      aftermovies: {
        label: "Aftermovies",
        title: "Aftermovies",
        description:
          "Event aftermovies and highlight films shot from the air and the ground.",
        h1: "Ninety seconds that hold the whole day.",
        sub: "A selection of event aftermovies and highlight films.",
        tiles: [
          {
            title: "Waterfront festival",
            tag: "Aftermovie",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "Launch night",
            tag: "Highlights",
            video: "/videos/tile-city-buildings.mp4",
          },
          {
            title: "Community fair",
            tag: "Aftermovie",
            video: "/videos/tile-suburbs.mp4",
          },
        ],
      },
      live: {
        label: "Live Coverage",
        title: "Live Coverage",
        description:
          "Multi-camera live streams with aerial feeds for events and broadcasts.",
        h1: "For everyone who couldn't be there.",
        sub: "Multi-camera live streams with an aerial feed.",
        tiles: [
          {
            title: "Auction day stream",
            tag: "Live Stream",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "Race day aerials",
            tag: "Live Feed",
            video: "/videos/showreel-placeholder.mp4",
          },
          {
            title: "Gala broadcast",
            tag: "Live Stream",
            video: "/videos/feature-street-tour.mp4",
          },
        ],
      },
    },
    packages: {
      label: "Packages",
      title: "Event Packages",
      description:
        "Event coverage packages: highlight aftermovies, full two-camera coverage and live streaming with aerial feeds.",
      h1: "Coverage that matches the occasion.",
      sub: "Every event is quoted to the run sheet. These are the three coverage levels most days call for.",
      tiers: [
        {
          name: "Highlights",
          tagline: "A 90-second memory of the day",
          featured: false,
          includes: [
            "Aerial and ground coverage",
            "60–90 second aftermovie",
            "Vertical social cut",
            "Delivery within 3 business days",
          ],
        },
        {
          name: "Full Coverage",
          tagline: "Air and ground, start to finish",
          featured: true,
          includes: [
            "Two-camera coverage all day",
            "Aftermovie plus full-length edit",
            "Same-night teaser cut",
            "Licensed soundtrack",
          ],
        },
        {
          name: "Live + Post",
          tagline: "A live feed and the film after",
          featured: false,
          includes: [
            "Everything in Full Coverage",
            "Multi-camera live stream",
            "Aerial feed into your broadcast",
            "48-hour priority delivery",
          ],
        },
      ],
    },
  },
};

const en = {
  logo: { primary: "Apex Motion", secondary: "Studios" },
  nav: {
    menus: [
      {
        key: "property",
        label: "Property",
        items: [
          { path: "/property", label: "Overview" },
          { path: "/property/fpv-tours", label: "FPV Home Tours" },
          { path: "/property/exteriors", label: "Exteriors & Twilight" },
          { path: "/property/packages", label: "Packages" },
        ],
      },
      {
        key: "advertising",
        label: "Advertising",
        items: [
          { path: "/advertising", label: "Overview" },
          { path: "/advertising/brand-films", label: "Brand Films" },
          { path: "/advertising/social", label: "Social Cuts" },
          { path: "/advertising/packages", label: "Packages" },
        ],
      },
      {
        key: "events",
        label: "Events",
        items: [
          { path: "/events", label: "Overview" },
          { path: "/events/aftermovies", label: "Aftermovies" },
          { path: "/events/live", label: "Live Coverage" },
          { path: "/events/packages", label: "Packages" },
        ],
      },
    ] as NavMenu[],
    links: [
      { path: "/about", label: "Studio" },
      { path: "/contact", label: "Contact" },
    ],
    cta: "Book Your Shoot",
  },
  common: {
    sampleNote: "Sample project",
    mostPopular: "Most Popular",
    quoteCta: "Request a Quote",
    retainerPre: "Shooting more than once? ",
    retainerLink: "Ask about an ongoing partnership",
    retainerPost: ".",
    processEyebrow: "How It Works",
    processHeading: "From enquiry to delivery in days.",
    process: [
      {
        step: "01",
        title: "Enquire",
        body: "Tell us what you're shooting, where and when. We confirm availability and a quote within one business day.",
      },
      {
        step: "02",
        title: "We Shoot",
        body: "Our two-person crew handles the day: flight planning, safety checks and capture.",
      },
      {
        step: "03",
        title: "You Launch",
        body: "Edited, graded and delivered ready to publish, usually within 3 business days.",
      },
    ],
    ctaHeading: "Tell us about the shoot.",
    ctaButton: "Check Availability",
    ctaNote: "We confirm availability within one business day.",
  },
  footer: {
    badges: ["CASA-Registered Operator", "Fully Insured", "Safety Officer On-Site"],
    blurb:
      "Cinematic FPV films and aerial photography for Sydney property, brands and events.",
    explore: "Explore",
    exploreLinks: [
      { path: "/property", label: "Property" },
      { path: "/advertising", label: "Advertising" },
      { path: "/events", label: "Events" },
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
        body: "Every flight is conducted under our registered operator and dedicated safety officer, so there are no regulatory surprises and no cancelled shoots.",
      },
      {
        index: "02",
        title: "Full Public Liability Insurance",
        body: "Comprehensive cover on every job means zero liability exposure for you or your client.",
      },
      {
        index: "03",
        title: "A Two-Person Professional Crew",
        body: "A pilot and a safety officer on every shoot: a production partner your clients can trust on-site.",
      },
    ],
  },
  home: {
    eyebrow: "Sydney · Cinematic Drone Production",
    h1: "Cinema-grade drone films. For property, brands and events.",
    sub: "A Sydney production studio flying one-take FPV and cinematic aerials, fully insured and CASA-compliant.",
    ctaPrimary: "Check Availability",
    ctaSecondary: "Watch Our Work",
    cinemaEyebrow: "The screening room",
    cinemaCaption: "Lights down. Sound on.",
    cinemaHint: "Keep scrolling",
    aboutEyebrow: "The Studio",
    aboutHeading: "One crew, one seamless take, any story.",
    aboutP1:
      "Apex Motion Studios started in real estate, where our one-take FPV tours helped homes sell before the first inspection. The same craft now shoots brand films and event coverage across Sydney: one dedicated crew, cinema-grade gear, and a single seamless take where it counts.",
    aboutLink: "Meet the studio",
    verticalsEyebrow: "What We Shoot",
    verticalsHeading: "Three lines of work. One standard.",
    verticals: [
      {
        key: "property",
        title: "Property",
        body: "One-take FPV tours and cinematic exteriors that get buyers through the door.",
        link: "Explore Property",
      },
      {
        key: "advertising",
        title: "Advertising",
        body: "Brand films and social-first cuts with aerials most productions can't get.",
        link: "Explore Advertising",
      },
      {
        key: "events",
        title: "Events",
        body: "Aftermovies and live coverage that keep the scale of the day.",
        link: "Explore Events",
      },
    ],
    finalHeading: "The story is there. Let's shoot it properly.",
    finalCta: "Check Availability",
    finalNote:
      "Tell us about the shoot and we'll confirm availability within one business day.",
  },
  about: {
    eyebrow: "The Studio",
    h1: "A production partner, not a drone operator.",
    p1a: "Apex Motion Studios was founded on a simple observation: the properties that sell fastest are the ones buyers can already picture themselves living in. Static photography shows a house. A one-take FPV tour lets a buyer ",
    p1em: "move through a home",
    p1b: ", feeling its flow, its scale and its light before they ever step inside.",
    p2: "We operate as a dedicated two-person crew on every shoot. Our registered operator and safety officer oversees flight planning, risk assessment and compliance, while our pilot focuses entirely on the craft: threading a single, seamless flight path through a property that would take a conventional videographer a full day of cuts to approximate.",
    p3: "That structure is deliberate. It means clients get a true production partner on-site, with the cinematic instincts of a film crew and the reliability of an established supplier. The same crew now shoots brand and event work across Sydney.",
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
    h1: "Check availability for your shoot.",
    sub: "Tell us about the project and your timeline. We’ll come back with availability and a tailored quote within one business day.",
    name: "Your name",
    agency: "Company or agency",
    email: "Email",
    phone: "Phone",
    address: "Location / property address",
    packageLabel: "What are we shooting?",
    packageOptions: [
      "Not sure yet",
      "Property shoot",
      "Advertising / brand film",
      "Event coverage",
      "Ongoing partnership",
    ],
    timeline: "Preferred shoot window",
    timelinePlaceholder: "e.g. Week of 21 July",
    message: "Anything else we should know?",
    submit: "Check Availability",
    talkHeading: "Prefer to talk?",
    thanksTitle: "Enquiry sent.",
    thanksBody:
      "We'll come back with availability and a tailored quote within one business day.",
    thanksBack: "Back to home",
    areaHeading: "Service area",
    areaBody:
      "Greater Sydney, from the Eastern Suburbs and Lower North Shore to the Northern Beaches, Inner West and Hills District. Regional NSW by arrangement.",
  },
  meta: {
    home: {
      title: "Apex Motion Studios — Cinematic Drone Films, Sydney",
      description:
        "Cinema-grade FPV and aerial films for property, brands and events across Sydney. One seamless take, fully insured, CASA-compliant.",
    },
    about: {
      title: "The Studio",
      description:
        "Apex Motion Studios is a Sydney production studio for cinematic drone films, run by a professional two-person crew, fully insured and CASA-compliant.",
    },
    contact: {
      title: "Book a Shoot",
      description:
        "Check availability for your shoot. Tell us about the project and we'll confirm availability and a tailored quote within one business day.",
    },
  },
  verticals: enVerticals,
};

export type Dict = typeof en;

const zhVerticals: Record<VerticalKey, Vertical> = {
  property: {
    label: "房产",
    landing: {
      title: "房产影像 | 一鸣惊人传媒",
      description:
        "一镜到底 FPV 室内导览与电影级外景，为悉尼最具辨识度的房源而拍。全额保险，符合 CASA 规范。",
      eyebrow: "房产影像",
      h1: "首次开放看房前，买家已经动心。",
      sub: "一镜到底室内导览与电影级外景，为悉尼最具辨识度的房源而拍。",
      p1: "我们的招牌是一镜到底 FPV 导览：一次流畅的飞行，带买家穿过整套房源，动线、尺度与光影一路展开。这样的临场感，静态照片给不了。",
      p2: "配上电影级航拍外景，房源第一眼就与众不同：更多高意向买家走进开放看房，成交也来得更快，中介方不必承担任何运营风险。",
      video: "/videos/showreel-placeholder.mp4",
      workHeading: "作品精选",
      packagesTitle: "三档套系，按房源计价",
      packagesBlurb: "不按小时计费，一份报价讲清整个营销周期。",
      packagesLink: "查看套系与报价",
    },
    workOrder: ["fpv-tours", "exteriors"],
    work: {
      "fpv-tours": {
        label: "FPV 室内导览",
        title: "FPV 室内导览 | 一鸣惊人传媒",
        description: "悉尼高端房源的一镜到底室内 FPV 导览精选。",
        h1: "一趟飞行，走完整套房源。",
        sub: "一镜到底室内导览精选，建议开着声音看。",
        tiles: [
          {
            title: "Mosman",
            tag: "海港住宅",
            video: "/videos/showreel-placeholder.mp4",
          },
          {
            title: "Barangaroo",
            tag: "顶层公寓",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "Vaucluse",
            tag: "庄园宅邸",
            video: "/videos/tile-country-estate.mp4",
          },
        ],
      },
      exteriors: {
        label: "外景与暮色",
        title: "外景与暮色 | 一鸣惊人传媒",
        description: "悉尼房产的电影级外景航拍与暮色拍摄精选。",
        h1: "第一印象，从空中开始。",
        sub: "电影级外景航拍与暮色拍摄精选。",
        tiles: [
          {
            title: "Surry Hills",
            tag: "仓库改造",
            video: "/videos/tile-city-buildings.mp4",
          },
          {
            title: "Palm Beach",
            tag: "海滨度假宅",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "Kellyville",
            tag: "开发项目展示",
            video: "/videos/tile-suburbs.mp4",
          },
        ],
      },
    },
    packages: {
      label: "套系与报价",
      title: "房产套系 | 一鸣惊人传媒",
      description:
        "按房源计价的拍摄套系：电影级外景、一镜到底 FPV 导览与全案营销方案。",
      h1: "套系按房源计价，为营销周期而设。",
      sub: "一套房源，一份报价，价格随规格而定。不按小时计费，也没有意料之外的账单。",
      tiers: [
        {
          name: "臻选外景",
          tagline: "先声夺人的第一印象",
          featured: false,
          includes: [
            "电影级外景航拍",
            "地面稳定器摄影",
            "精修房源照片集",
            "60 秒外景调色成片",
          ],
        },
        {
          name: "沉浸导览",
          tagline: "一次飞行，穿越整套房源",
          featured: true,
          includes: [
            "包含「臻选外景」全部内容",
            "一镜到底室内 FPV 导览",
            "中介品牌定制成片",
            "Instagram 与 TikTok 竖版剪辑",
            "正版配乐与声音设计",
          ],
        },
        {
          name: "旗舰全案",
          tagline: "营销所需，一次备齐",
          featured: false,
          includes: [
            "包含「沉浸导览」全部内容",
            "暮色拍摄",
            "生活方式与周边环境镜头",
            "48 小时优先交付",
            "专属营销顾问",
          ],
        },
      ],
    },
  },
  advertising: {
    label: "广告",
    landing: {
      title: "商业广告 | 一鸣惊人传媒",
      description:
        "品牌影片、产品短片与社媒内容，用一般团队拍不到的航拍视角。全额保险，符合 CASA 规范。",
      eyebrow: "商业广告",
      h1: "品牌故事，配一台会飞的摄影机。",
      sub: "品牌影片、产品短片与社媒内容，用三脚架够不到的视角。",
      p1: "让房子提前售出的那套一镜到底功夫，同样能让产品和场地活起来。我们围绕您的故事设计航线，交付一支主片，以及各渠道需要的全部剪辑版本。",
      p2: "全额公众责任险与 CASA 合规，让我们能飞进一般团队进不去的地方：室内、低空、贴近主体。每条航线都在开机前规划并演练到位。",
      video: "/videos/feature-street-tour.mp4",
      workHeading: "作品精选",
      packagesTitle: "从一条短片到一整场投放",
      packagesBlurb: "三种合作方式，均在开拍前按需求单独报价。",
      packagesLink: "查看套系与报价",
    },
    workOrder: ["brand-films", "social"],
    work: {
      "brand-films": {
        label: "品牌影片",
        title: "品牌影片 | 一鸣惊人传媒",
        description: "以电影级航拍为核心的品牌影片与广告片精选。",
        h1: "一支主片，撑起整场投放。",
        sub: "品牌影片与商业广告作品精选。",
        tiles: [
          {
            title: "海岸度假品牌片",
            tag: "品牌影片",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "街区发布预告",
            tag: "广告片",
            video: "/videos/feature-street-tour.mp4",
          },
          {
            title: "园区形象片",
            tag: "形象片",
            video: "/videos/tile-city-buildings.mp4",
          },
        ],
      },
      social: {
        label: "社媒短片",
        title: "社媒短片 | 一鸣惊人传媒",
        description: "为 Instagram 与 TikTok 定制的竖版航拍内容精选。",
        h1: "竖屏时代，注意力只给三秒。",
        sub: "为 Instagram 与 TikTok 定制的竖版内容精选。",
        tiles: [
          {
            title: "公寓开盘短片",
            tag: "竖版剪辑",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "郊区航拍快剪",
            tag: "快剪",
            video: "/videos/tile-suburbs.mp4",
          },
          {
            title: "街景穿越",
            tag: "FPV 短片",
            video: "/videos/feature-street-tour.mp4",
          },
        ],
      },
    },
    packages: {
      label: "套系与报价",
      title: "广告套系 | 一鸣惊人传媒",
      description: "广告制作套系：社媒短片、品牌主片与多场地整合投放。",
      h1: "从一条短片，到一整场投放。",
      sub: "每个项目都按创意需求单独报价。多数合作，落在这三种形态里。",
      tiers: [
        {
          name: "社媒短片",
          tagline: "半天拍完，几天上线",
          featured: false,
          includes: [
            "半天拍摄",
            "3 条竖版剪辑",
            "平台适配调色",
            "3 个工作日内交付",
          ],
        },
        {
          name: "品牌影片",
          tagline: "一支主片与全部剪辑版本",
          featured: true,
          includes: [
            "全天拍摄",
            "60–90 秒品牌主片",
            "横版与竖版剪辑各 3 条",
            "正版配乐与声音设计",
            "专属创意沟通",
          ],
        },
        {
          name: "广告全案",
          tagline: "多场地、多格式的完整交付",
          featured: false,
          includes: [
            "包含「品牌影片」全部内容",
            "多场地拍摄",
            "平面摄影同步交付",
            "优先档期与加急交付",
          ],
        },
      ],
    },
  },
  events: {
    label: "活动",
    landing: {
      title: "活动记录 | 一鸣惊人传媒",
      description:
        "为发布会、庆典与私人活动拍摄集锦影片与现场直播。全额保险，符合 CASA 规范。",
      eyebrow: "活动记录",
      h1: "现场散得快，影片留得住。",
      sub: "为发布会、庆典与私人活动，拍摄集锦影片与现场直播。",
      p1: "活动只发生一次。空中机位负责场面，地面机位负责细节，一支团队同时抓两头，第二天一早，现场的热度就能递到没来的人眼前。",
      p2: "人群附近的飞行有严格的规矩。航线提前规划，安全官全程盯守，观众的安全和大场面，两样都不放过。",
      video: "/videos/tile-bay.mp4",
      workHeading: "作品精选",
      packagesTitle: "从精华集锦到直播信号",
      packagesBlurb: "三种记录深度，均按活动流程单独报价。",
      packagesLink: "查看套系与报价",
    },
    workOrder: ["aftermovies", "live"],
    work: {
      aftermovies: {
        label: "活动集锦",
        title: "活动集锦 | 一鸣惊人传媒",
        description: "空地双机位拍摄的活动集锦影片精选。",
        h1: "九十秒，讲完一整天。",
        sub: "活动集锦影片精选。",
        tiles: [
          {
            title: "海滨音乐节",
            tag: "集锦影片",
            video: "/videos/tile-bay.mp4",
          },
          {
            title: "产品发布夜",
            tag: "精华集锦",
            video: "/videos/tile-city-buildings.mp4",
          },
          {
            title: "社区嘉年华",
            tag: "集锦影片",
            video: "/videos/tile-suburbs.mp4",
          },
        ],
      },
      live: {
        label: "现场直播",
        title: "现场直播 | 一鸣惊人传媒",
        description: "带航拍信号的多机位活动直播精选。",
        h1: "不在场的人，也在场。",
        sub: "多机位直播与航拍信号接入。",
        tiles: [
          {
            title: "开盘直播",
            tag: "直播",
            video: "/videos/tile-apartments.mp4",
          },
          {
            title: "赛事航拍信号",
            tag: "航拍直播",
            video: "/videos/showreel-placeholder.mp4",
          },
          {
            title: "晚会直播",
            tag: "直播",
            video: "/videos/feature-street-tour.mp4",
          },
        ],
      },
    },
    packages: {
      label: "套系与报价",
      title: "活动套系 | 一鸣惊人传媒",
      description: "活动记录套系：精华集锦、全程记录与直播加成片。",
      h1: "多大的场面，配多深的记录。",
      sub: "每场活动都按流程单独报价。多数活动，落在这三种深度里。",
      tiers: [
        {
          name: "精华集锦",
          tagline: "一支 90 秒的现场记忆",
          featured: false,
          includes: [
            "空中与地面双视角拍摄",
            "60–90 秒集锦影片",
            "竖版社媒剪辑",
            "3 个工作日内交付",
          ],
        },
        {
          name: "全程记录",
          tagline: "空地双机位，从头到尾",
          featured: true,
          includes: [
            "双机位全天拍摄",
            "集锦影片与完整长片",
            "当晚可发的快剪版本",
            "正版配乐",
          ],
        },
        {
          name: "直播与成片",
          tagline: "一路直播信号，一支赛后成片",
          featured: false,
          includes: [
            "包含「全程记录」全部内容",
            "多机位直播信号",
            "航拍画面接入导播台",
            "48 小时优先交付",
          ],
        },
      ],
    },
  },
};

const zh: Dict = {
  logo: { primary: "一鸣惊人传媒", secondary: "Apex Motion Studios" },
  nav: {
    menus: [
      {
        key: "property",
        label: "房产",
        items: [
          { path: "/property", label: "总览" },
          { path: "/property/fpv-tours", label: "FPV 室内导览" },
          { path: "/property/exteriors", label: "外景与暮色" },
          { path: "/property/packages", label: "套系与报价" },
        ],
      },
      {
        key: "advertising",
        label: "广告",
        items: [
          { path: "/advertising", label: "总览" },
          { path: "/advertising/brand-films", label: "品牌影片" },
          { path: "/advertising/social", label: "社媒短片" },
          { path: "/advertising/packages", label: "套系与报价" },
        ],
      },
      {
        key: "events",
        label: "活动",
        items: [
          { path: "/events", label: "总览" },
          { path: "/events/aftermovies", label: "活动集锦" },
          { path: "/events/live", label: "现场直播" },
          { path: "/events/packages", label: "套系与报价" },
        ],
      },
    ] as NavMenu[],
    links: [
      { path: "/about", label: "工作室" },
      { path: "/contact", label: "联系" },
    ],
    cta: "预约拍摄",
  },
  common: {
    sampleNote: "示例项目",
    mostPopular: "最受欢迎",
    quoteCta: "获取报价",
    retainerPre: "有长期拍摄需求？",
    retainerLink: "聊聊框架合作",
    retainerPost: "。",
    processEyebrow: "合作流程",
    processHeading: "从询价到交付，只需数日。",
    process: [
      {
        step: "01",
        title: "询价",
        body: "告诉我们拍什么、在哪儿、什么时候。档期与报价，一个工作日内回复。",
      },
      {
        step: "02",
        title: "拍摄",
        body: "现场交给双人团队：航线规划、安全检查与正式拍摄。",
      },
      {
        step: "03",
        title: "交付",
        body: "剪辑调色一步到位，交付即可发布，通常 3 个工作日内。",
      },
    ],
    ctaHeading: "说说您要拍什么。",
    ctaButton: "查询档期",
    ctaNote: "一个工作日内确认档期。",
  },
  footer: {
    badges: ["CASA 注册运营人", "全额公众责任险", "现场安全官"],
    blurb: "为悉尼的房产、品牌与活动，拍摄电影级 FPV 影片与航拍影像。",
    explore: "导航",
    exploreLinks: [
      { path: "/property", label: "房产影像" },
      { path: "/advertising", label: "商业广告" },
      { path: "/events", label: "活动记录" },
      { path: "/about", label: "工作室" },
      { path: "/contact", label: "预约拍摄" },
    ],
    contact: "联系方式",
    servicing: "服务大悉尼地区",
    rights: "一鸣惊人传媒 Apex Motion Studios",
  },
  trust: {
    eyebrow: "信任与合规",
    heading: "专业执飞，资质托底。",
    items: [
      {
        index: "01",
        title: "CASA 注册运营人",
        body: "每一次飞行，都由注册运营人兼安全官全程把关。合规功课在起飞前做足：没有监管意外，也不会临时取消拍摄。",
      },
      {
        index: "02",
        title: "全额公众责任险",
        body: "每一次拍摄，保险在开拍前就已全额到位。即便现场有意外，责任风险也不会落到您或您的客户头上。",
      },
      {
        index: "03",
        title: "专职双人团队",
        body: "到场的永远是两个人：飞手专注飞行，安全官照看现场。一个值得托付的制作伙伴。",
      },
    ],
  },
  home: {
    eyebrow: "悉尼 · 电影级无人机影像",
    h1: "电影级无人机影像。为房产、品牌与活动而拍。",
    sub: "立足悉尼的影像制作工作室：一镜到底 FPV 与电影级航拍，全额保险，符合 CASA 规范。",
    ctaPrimary: "查询档期",
    ctaSecondary: "观看作品",
    cinemaEyebrow: "放映厅",
    cinemaCaption: "灯光暗下，请开声音。",
    cinemaHint: "继续下滑",
    aboutEyebrow: "工作室",
    aboutHeading: "一支团队，一条镜头，讲好每个故事。",
    aboutP1:
      "一鸣惊人传媒从房产影像起步：一镜到底的 FPV 导览，让房子在首次开放看房前就打动买家。如今同一支团队，也为品牌与活动掌机：专职双人团队，电影级设备，关键时刻一条镜头到底。",
    aboutLink: "了解工作室",
    verticalsEyebrow: "服务内容",
    verticalsHeading: "三类拍摄，一个标准。",
    verticals: [
      {
        key: "property",
        title: "房产影像",
        body: "一镜到底室内导览与电影级外景，让买家在看房前先动心。",
        link: "了解房产影像",
      },
      {
        key: "advertising",
        title: "商业广告",
        body: "品牌影片与社媒短片，配一般团队拍不到的航拍视角。",
        link: "了解商业广告",
      },
      {
        key: "events",
        title: "活动记录",
        body: "集锦影片与现场直播，把现场的规模感留下来。",
        link: "了解活动记录",
      },
    ],
    finalHeading: "故事就在那儿，值得好好拍一次。",
    finalCta: "查询档期",
    finalNote: "说说您要拍什么，一个工作日内确认档期。",
  },
  about: {
    eyebrow: "工作室",
    h1: "我们是制作伙伴，而非无人机操作员。",
    p1a: "一鸣惊人传媒源于一个朴素的观察：卖得最快的房子，是买家已经能想象自己住进去的房子。静态照片拍的是房子，一镜到底 FPV 导览让买家提前",
    p1em: "走进一个家",
    p1b: "。动线、尺度与光影，人还没进门，心里已经有数。",
    p2: "每次拍摄，到场的都是专职双人团队。注册运营人兼安全官统筹航线规划、风险评估与合规，飞手只专注一件事：创作。一条流畅的飞行路线穿越整套房源，换作传统摄像师，剪上一整天也只能接近这个效果。",
    p3: "这样的架构是刻意为之。客户请到现场的，是一个专业的制作伙伴：论创作，有电影团队的直觉；论交付，有成熟供应商的可靠。如今，这支团队也为悉尼的品牌与活动掌机。",
    credentialsHeading: "资质与保障",
    credentials: [
      "每次拍摄均有 CASA 注册运营人在场",
      "专职安全官与留档备查的飞行计划",
      "全额公众责任险",
      "服务大悉尼地区",
    ],
    everyShootHeading: "每次拍摄均包含",
    everyShootBody:
      "拍摄前实地勘查 · 符合 CASA 规范的飞行计划 · 现场安全官 · 电影级 FPV 拍摄 · 高端稳定器摄影与航拍外景 · 3 个工作日内交付调色成片。",
    closingHeading: "剩下的，交给作品来说。",
    closingWork: "查看作品",
    closingBook: "预约拍摄",
  },
  contact: {
    eyebrow: "联系我们",
    h1: "查询您的拍摄档期。",
    sub: "说说项目内容和时间安排。档期与报价，一个工作日内回复。",
    name: "姓名",
    agency: "公司或机构",
    email: "邮箱",
    phone: "电话",
    address: "拍摄地点或房源地址",
    packageLabel: "拍摄类型",
    packageOptions: ["还没想好", "房产拍摄", "商业广告", "活动记录", "长期合作"],
    timeline: "期望拍摄时间",
    timelinePlaceholder: "例如：7 月 21 日当周",
    message: "其他需要说明的信息",
    submit: "查询档期",
    talkHeading: "更愿意直接聊？",
    thanksTitle: "已收到您的询价。",
    thanksBody: "我们将在一个工作日内回复档期与专属报价。",
    thanksBack: "返回首页",
    areaHeading: "服务范围",
    areaBody:
      "服务覆盖大悉尼：东区、下北岸、北部海滩、内西区与山区（Hills District）。新州其他地区可另行安排。",
  },
  meta: {
    home: {
      title: "一鸣惊人传媒 — 悉尼电影级无人机影像 | Apex Motion Studios",
      description:
        "为悉尼的房产、品牌与活动，拍摄电影级 FPV 与航拍影像。一镜到底，全额保险，符合 CASA 规范。",
    },
    about: {
      title: "工作室 | 一鸣惊人传媒",
      description:
        "一鸣惊人传媒是立足悉尼的电影级无人机影像工作室：专职双人团队，全额保险，符合 CASA 规范。",
    },
    contact: {
      title: "预约拍摄 | 一鸣惊人传媒",
      description: "查询您的拍摄档期。档期与报价，一个工作日内回复。",
    },
  },
  verticals: zhVerticals,
};

export const dictionaries: Record<Lang, Dict> = { en, zh };
