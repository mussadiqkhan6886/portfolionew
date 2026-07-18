
export const menu = [
    {d: 0.2,link: "/work", title: "Work"},
    {d: 0.3,link: "/about", title: "About"},
    {d: 0.4,link: "/contact", title: "Contact"},
]

export const socials = [
    {link: "https://www.linkedin.com/in/mussadiq-khan-dev/", title: "Linkedin"},
    {link: "https://leetcode.com/u/immk6886/", title: "LeetCode"},
    {link: "https://github.com/mussadiqkhan6886", title: "Github"},
    {link: "mailto:mussadiqkhan6886@gmail.com", title: "Email"},
    {link: "https://scrupulous.vercel.app", title: "Scrupulous"},
]

export const projects = [
  {
    id: "1",
    service: "Design & Development",
    title: "ChunkD",
    role: "design & developer",
    thumbnail: "/projects/chunkd/chunkdMain.png",
    link: "chunkd",
    location: "Lahore, Pakistan",
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    description:
      "Chunk'd Cookies is a premium cookie eCommerce platform I designed and built end-to-end, including a custom order engine (Build Your Own Box, limited drops, standard orders) backed by MongoDB, and an admin dashboard for product, order, and sales analytics management, keeping the store fast even during high-traffic drop launches.",
    problemStatement:
      "The client wanted a bold, premium cookie brand experience inspired by the energy of Apple and Crumbl — clean, modern, and visually engaging. Beyond aesthetics, they needed a flexible ordering system supporting Build Your Own Box, Pre-Order Drops, Standard Orders, and Deals, along with a custom admin dashboard to manage products, orders, and business analytics efficiently, all without lag during high-demand drop events.",
    mainObjective:
      "Give a fast-growing cookie brand a self-serve storefront that can handle limited drops, custom box building, and daily order volume without slowing down or breaking under traffic spikes, while giving the owner full control over products and sales data.",
    features: [
      "Build Your Own Box",
      "Limited Cookie Drops",
      "Multiple Order Flows",
      "Dynamic Cart & Checkout",
      "Pickup & Delivery",
      "Coupon Code system",
      "Admin Dashboard with Sales Analytics & Product CRUD",
      "Mobile First, ISR-Driven Product Pages",
      "Lighthouse Performance Score: 99/100",
      "Image Optimization (Next/Image + Cloudinary CDN)",
    ],
    live: "www.chunkdpk.com",
    hero: "/projects/chunkd/hero.mp4",
    pcVideo: "/projects/chunkd/pc.mp4",
    laptopVideo: "/projects/chunkd/laptop.mp4",
    image1: "/projects/chunkd/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/chunkd/mb1.jpeg" },
      { type: "video", sr: "/projects/chunkd/mb2video.mp4" },
      { type: "image", sr: "/projects/chunkd/mb3.jpeg" },
    ],
    logo: "/projects/chunkd/logo.png",
  },

  {
    id: "2",
    service: "Design, Development & SEO",
    title: "Zevora",
    role: "designer, developer & SEO",
    thumbnail: "/projects/zevora/zevoraMain.png",
    link: "zevora",
    location: "Lahore, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "framer motion", "GSAP", "SEO", "Lenis"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "Zevora is a full-featured 150+ luxury accessories store I built and optimized for search from the ground up — six-plus product categories, COD checkout, and a scalable catalog engineered to compete with established local jewelry sellers with zero ad spend. I handled full technical and on-page SEO: structured data for every product and category, keyword-mapped city and product landing pages, and Core Web Vitals optimization to earn organic rankings in a highly competitive niche.",
    problemStatement:
      "The brand needed to compete with established jewelry and watch sellers in Pakistan without a large marketing budget. They lacked a platform that could present dozens of SKUs across six+ categories in a way that felt premium rather than generic, while still ranking on Google for highly competitive local search terms and converting cash-on-delivery shoppers who are wary of buying accessories sight-unseen online.",
    mainObjective:
      "Build a high-trust, high-conversion storefront that positions Zevora as an accessible luxury brand, ranks organically for dozens of city and category-specific search terms, and gives the client an easy way to add new products, run deals, and track hot sellers as the catalog grows.",
    features: [
      "Multi-Category Catalog",
      "Reusable Component-Based Architecture",
      "Products Search & filtering",
      "< 0.5s page load time",
      "conversion-Focused UI/UX",
      "Hot Sellers Section",
      "Cash on Delivery Checkout",
      "Deals & Bundles Engine",
      "Local SEO — city + product keyword targeting, 5k+ impressions in 3 months",
      "Structured Data",
      "ISR for Product & Collection Pages",
      "Lighthouse Performance Score: 99/100",
      "Meta events",
      "Cloudinary-based Media Delivery",
      "JWT & bcrypt secured Admin dashboard",
    ],
    live: "www.zevoraofficial.com",
    hero: "/projects/zevora/hero.mp4",
    pcVideo: "/projects/zevora/pc.mp4",
    laptopVideo: "/projects/zevora/laptop.mp4",
    image1: "/projects/zevora/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/zevora/mb1.jpeg" },
      { type: "video", sr: "/projects/zevora/mb2video.mp4" },
      { type: "image", sr: "/projects/zevora/mb3.jpeg" },
    ],
    logo: "/projects/zevora/logo.png",
  },

  {
    id: "3",
    service: "Design & Development",
    title: "True Horizon",
    role: "design & developer",
    thumbnail: "/projects/truehorizon/truehorizonMain.png",
    link: "truehorizon",
    location: "United Kingdom, London",
    skillSet: ["nextjs", "typescript", "framer motion", "GSAP", "tailwindcss", "Swiper", "MUI", "cal.com"],
    stack: "NEXT.JS ✦ TYPESCRIPT ✦ FRAMER MOTION ✦ GSAP",
    description:
      "True Horizon is an agency site I built for an AI automation consultancy, using GSAP and Framer Motion to build interactive, working mock-ups of their dashboards and voice agents instead of static screenshots, so visitors experience the product rather than read about it. I engineered the animation sequences to stay performant on scroll (no jank on load-heavy interactive sections) while keeping first-contentful-paint fast via server-side rendering.",
    problemStatement:
      "AI consulting agencies typically rely on generic slide-style websites that make abstract promises. The client needed a site that could visually prove what their automations, dashboards, and voice agents actually look like in action, build trust with skeptical business owners, and convert visitors into booked discovery calls, all while explaining a fairly technical service in a way non-technical founders could immediately understand.",
    mainObjective:
      "Turn an abstract service (AI automation consulting) into something visitors can 'see working' through interactive dashboard, chatbot, and scheduling mock-ups, and drive qualified leads to book a call, rather than bounce off a text-heavy services page.",
    features: [
      "Animated Interactive Dashboard Previews",
      "Live-style AI Voice Agent Demo Section",
      "Workflow Automation Showcase",
      "Case Study with Measurable Impact Metrics",
      "Tiered Pricing Section",
      "Call Booking Integration",
      "Scroll-triggered Micro-interactions (GSAP)",
      "SSR for Fast First Contentful Paint",
      "Technical SEO for AI/Automation Keywords",
      "Lighthouse Performance Score: 97/100",
    ],
    live: "www.truehorizon.uk",
    hero: "/projects/truehorizon/hero.mp4",
    pcVideo: "/projects/truehorizon/pc.mp4",
    laptopVideo: "/projects/truehorizon/laptop.mp4",
    image1: "/projects/truehorizon/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/truehorizon/mb1.jpeg" },
      { type: "video", sr: "/projects/truehorizon/mb2video.mp4" },
      { type: "image", sr: "/projects/truehorizon/mb3.jpeg" },
    ],
    logo: "/projects/truehorizon/logo.png",
  },

  {
    id: "4",
    service: "Design & Development",
    title: "M&Z Store",
    role: "design & developer",
    thumbnail: "/projects/mzstore/mzstoreMain.png",
    link: "mzstore",
    location: "Karachi, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "M&Z Store is a full eCommerce 200+ products build for a modest-fashion fabric brand — I structured the catalog schema around fabric type (lawn, organza, khaddi-net) rather than generic categories to match how customers actually shop, and used ISR so the client's weekly-rotating inventory reflects instantly without redeploys. Engineered advance level admin dashboard with PRODUCT CRUD and variants with business analytics",
    problemStatement:
      "The modest-fashion fabric market in Pakistan is fragmented and price-driven, with most sellers operating through unstructured social media pages. The client needed a proper online store with variants that could organize a large, fast-changing inventory of dupattas and chaddars by fabric type, communicate quality and trust to first-time buyers, and support cash-on-delivery, the dominant payment method for this audience.",
    mainObjective:
      "Engineered a scalable e-commerce platform for a modest fashion brand with a fabric-based catalog architecture, streamlined inventory management for weekly product rotations, implemented ISR and SSG for high-performance rendering, and later optimized the application to achieve an 18% faster load time.",
    features: [
      "Fabric-Based Collection Structure",
      "Cash on Delivery Checkout",
      "Customer Testimonials & Reviews",
      "WhatsApp Direct Ordering Integration",
      "Meta Events and Pixel",
      "Color Disclaimer & Policy Pages",
      "ISR for Fast-Updating Inventory",
      "Cloudinary Image Pipeline",
      "Lighthouse Performance Score: 99/100",
      "Accessibility-Focused UI",
      "Secured Admin dashboard that handles 200+ products",
    ],
    live: "www.mzstorepk.com",
    hero: "/projects/mzstore/hero.mp4",
    pcVideo: "/projects/mzstore/pc.mp4",
    laptopVideo: "/projects/mzstore/laptop.mp4",
    image1: "/projects/mzstore/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/mzstore/mb1.jpeg" },
      { type: "video", sr: "/projects/mzstore/mb2video.mp4" },
      { type: "image", sr: "/projects/mzstore/mb3.jpeg" },
    ],
    logo: "/projects/mzstore/logo.png",
  },

  {
    id: "5",
    service: "Design & Development",
    title: "MIRMEE",
    role: "design & developer",
    thumbnail: "/projects/mirmee/mirmeeMain.png",
    link: "mirmee",
    location: "Islamabad, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "MIRMEE sells handmade hair accessories that go out of stock and rotate weekly — a pattern most template stores handle badly with broken links and stale listings. I built real-time stock-status handling directly into the catalog schema (not just a visual badge) so out-of-stock items never appear purchasable, paired with ISR so new drops and sale pricing update instantly across the site.",
    problemStatement:
      "As a handmade goods brand, the client sells limited-quantity items that frequently go out of stock or rotate weekly, which most template storefronts handle poorly (broken links, no stock messaging). They needed a lightweight, boutique-feeling store that could clearly show sale pricing, out-of-stock states, and new arrivals without ever feeling cluttered.",
    mainObjective:
      "Create a clean, boutique-style shopping experience for a handmade small-batch brand that clearly communicates stock status and sale pricing in real time, while keeping page load instant on mobile, where the majority of the brand's audience shops.",
    features: [
      "Real-Time Stock Status (Sold Out Handling)",
      "Sale Pricing & Discount Badges",
      "Multi-Category Catalog",
      "New Arrivals & Bundles Sections",
      "Customer Testimonials",
      "Cart & Checkout Flow",
      "Cloudinary-Powered Image Delivery",
      "Mobile-First SEO Optimization — < 0.6s mobile load time",
      "ISR for Instant Catalog Updates",
      "Lighthouse Performance Score: 98/100",
    ],
    live: "www.shopmirmee.com",
    hero: "/projects/mirmee/hero.mp4",
    pcVideo: "/projects/mirmee/pc.mp4",
    laptopVideo: "/projects/mirmee/laptop.mp4",
    image1: "/projects/mirmee/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/mirmee/mb1.jpeg" },
      { type: "video", sr: "/projects/mirmee/mb2video.mp4" },
      { type: "image", sr: "/projects/mirmee/mb3.jpeg" },
    ],
    logo: "/projects/mirmee/logo.png",
  },

  {
    id: "6",
    service: "Design & Development",
    title: "Halir Perfumery",
    role: "design & developer",
    thumbnail: "/projects/halir/halirMain.png",
    link: "halir",
    location: "Islamabad, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "Framer motion", "GSAP"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "Halir Perfumery sells a product customers can't smell before buying, so I built the site around trust and sensory storytelling rather than a standard product grid — cinematic hero visuals, structured For Him/For Her collections, and a dedicated longevity/quality trust section to justify premium pricing. On the SEO side, I targeted competitive 'perfume in Pakistan' search terms with keyword-optimized collection pages and schema markup, backed by ISR so the catalog stays current.",
    problemStatement:
      "Perfume is one of the hardest products to sell online since customers can't smell it before buying. The client needed a website like Le Labo that could sell the feeling of a fragrance through visuals, storytelling and trust signals like longevity claims and a return policy, strong enough to convert a cold visitor into a buyer purely on brand experience.",
    mainObjective:
      "Translate an intangible sensory product into a visually convincing, story-led brand website that builds enough trust and desire for visitors to buy a scent they've never smelled, while ranking for competitive 'perfume in Pakistan' search terms and loads instantly and so no customer leaves",
    features: [
      "Story-Driven Brand Landing Page",
      "Men / Women / Hot Sellers Collections",
      "Longevity & Quality Trust Section",
      "Bespoke Gifting & Packaging Highlight",
      "Interactive Conversion-Focused UI/UX",
      "Faster load time",
      "Keyword-Targeted SEO for Fragrance Search Terms",
      "Schema Markup (Product, Organization)",
      "ISR for Product Catalog",
      "Lighthouse Performance Score: 99/100",
      "State Management Context API ",
      "Secured JWT Advance Admin Dashboard ",
    ],
    live: "www.halirperfumerypk.com",
    hero: "/projects/halir/hero.mp4",
    pcVideo: "/projects/halir/pc.mp4",
    laptopVideo: "/projects/halir/laptop.mp4",
    image1: "/projects/halir/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/halir/mb1.jpeg" },
      { type: "video", sr: "/projects/halir/mb2video.mp4" },
      { type: "image", sr: "/projects/halir/mb3.jpeg" },
    ],
    logo: "/projects/halir/logo.png",
  },

  {
    id: "7",
    service: "Design & Development",
    title: "KPSLA",
    role: "design & developer",
    thumbnail: "/projects/kpsla/kpslaMain.png",
    link: "kpsla",
    location: "Mardan, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "KPSLA is the official platform for a province-wide student leadership organization — I built a registration system for a mostly Grade 7-12 audience with parental-consent messaging designed to reassure parents, plus an events system and leadership profiles. I used server-side rendering to keep every page fully crawlable and fast on the low-end mobile devices common among the target audience across Khyber Pakhtunkhwa.",
    problemStatement:
      "As a student-led, non-profit organization, KPSLA needed a credible, professional online presence to be taken seriously by schools, parents, and partner organizations, without the budget of a corporate brand. They also needed a straightforward way for students across the province to register as members, learn about upcoming events, and for the organization to communicate its mission and leadership team clearly, including addressing parental-consent concerns for underage members.",
    mainObjective:
      "Give a youth-led leadership organization a credible, professional web presence that drives student registrations across Khyber Pakhtunkhwa, clearly communicates mission and safety practices to parents, and centralizes events, mentorship info, and success stories in one place.",
    features: [
      "Online Membership Registration",
      "Events Listing System",
      "Leadership & Chairman/President Profiles",
      "Impact Statistics Counters",
      "Success Stories / Testimonials",
      "FAQ Section (incl. Parental Consent Info)",
      "WhatsApp Contact Integration",
      "Regional SEO for KP-Based Search Reach",
      "SSR for Fast, Crawlable Content on Low-End Devices",
      "Lighthouse Performance Score: 99/100",
      "Admin Dashboard secured with JWT & bcryptjs",
    ],
    live: "www.kpsla.org",
    hero: "/projects/kpsla/hero.mp4",
    pcVideo: "/projects/kpsla/pc.mp4",
    laptopVideo: "/projects/kpsla/laptop.mp4",
    image1: "/projects/kpsla/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/kpsla/mb1.jpeg" },
      { type: "video", sr: "/projects/kpsla/mb2video.mp4" },
      { type: "image", sr: "/projects/kpsla/mb3.jpeg" },
    ],
    logo: "/projects/kpsla/logo.png",
  },

  {
    id: "8",
    service: "Design & Development",
    title: "Amass Bakery",
    role: "design & developer",
    thumbnail: "/projects/amassbakery/amassbakeryMain.png",
    link: "amassbakery",
    location: "Al Khobar, Saudi Arabia",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "Swiper"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT ✦ i18n (EN/AR)",
    description:
  "Amass Bakery replaced unstructured WhatsApp/Instagram cake ordering with a self-serve bilingual (English/Arabic, true RTL) digital menu and cake builder. The core engineering challenge was capacity: as a small business, the owner can't handle unlimited daily orders, so I built a calendar-based order system with different rules per category — simple orders capped at 2/day with 1-day lead time, custom orders capped at 1/day with 2-day lead time, and a separate flow for wedding orders — automatically blocking dates once a category hits its limit. The catalog itself spans 50+ products across categories, each with its own size-variant structure.",
    problemStatement:
      "Custom cake orders are traditionally handled through back-and-forth WhatsApp or Instagram messages, which doesn't scale and creates confusion around pricing, sizing, and occasion requirements. The client, serving a bilingual Saudi audience, needed a structured way for customers to explore the menu, understand customization options for birthdays, weddings and graduations, and reach out with clear intent, in both English and Arabic.",
    mainObjective:
      "Replace unstructured DM-based cake ordering with a clear, bilingual digital menu and customization journey that helps customers self-serve their cake requirements (occasion, size, style) before contacting the bakery, reducing back-and-forth and increasing order clarity.",
    features: [
      "Bilingual Site (English / Arabic with true RTL layout)",
      "Custom Cake Builder Flow",
      "Occasion Cake Gallery (Birthday, Graduation, Anniversary)",
      "Wedding Cake Showcase",
      "Table Setup Services Page",
      "Digital Menu",
      "Video-Led Category Navigation",
      "Local SEO for Al Khobar/Dammam Search Intent",
      "ISR for Menu & Gallery Updates",
      "Lighthouse Performance Score: 96/100",
    ],
    live: "www.amassbakery.com",
    hero: "/projects/amassbakery/hero.mp4",
    pcVideo: "/projects/amassbakery/pc.mp4",
    laptopVideo: "/projects/amassbakery/laptop.mp4",
    image1: "/projects/amassbakery/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/amassbakery/mb1.jpeg" },
      { type: "video", sr: "/projects/amassbakery/mb2video.mp4" },
      { type: "image", sr: "/projects/amassbakery/mb3.jpeg" },
    ],
    logo: "/projects/amassbakery/logo.png",
  },

  {
    id: "9",
    service: "Design & Development",
    title: "Saba Writes",
    role: "design & developer",
    thumbnail: "/projects/sabawrites/sabawritesMain.png",
    link: "sabawrites",
    location: "Mardan, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "tailwindcss", "Tiny MCE", "Swiper"],
    stack: "NEXT.JS ✦ TYPESCRIPT ✦ MONGODB",
    description:
      "Saba Writes is a content-first beauty and lifestyle blog where I engineered the entire architecture around organic discoverability — static generation for published posts, ISR for new content so posts go live without a rebuild, and per-post technical SEO (meta, schema, internal linking via related-stories) so individual articles can rank against established beauty publications, not just the homepage.",
    problemStatement:
      "Most personal blogs are built on slow, generic templates that hurt both reader experience and SEO rankings, making it hard for a new voice to compete with established beauty publications. The creator needed a fast, clean, distraction-free reading experience combined with technical SEO strong enough to rank individual blog posts against much larger competitors.",
    mainObjective:
      "Give an independent beauty and lifestyle writer a fast, SEO-strong publishing platform that reads as professionally as a major lifestyle outlet, helping individual posts rank organically and building a loyal, returning readership.",
    features: [
      "Blog-First Content Architecture",
      "Category-Based Story Browsing",
      "Reading-Time Estimates",
      "Related & Latest Stories Carousel",
      "Author/About Page",
      "Per-Post Technical SEO",
      "SSG/ISR for New Blog Posts published instantly",
      "Lighthouse Performance Score: 99/100",
      "Optimized Image Loading",
      "Clean, Distraction-Free Reading UI",
      "Tiny Mce in admin dashboard",
      "BLOGS CRUD in admin dashboard",
    ],
    live: "www.sabawrites.com",
    hero: "/projects/sabawrites/hero.mp4",
    pcVideo: "/projects/sabawrites/pc.mp4",
    laptopVideo: "/projects/sabawrites/laptop.mp4",
    image1: "/projects/sabawrites/image1.png",
    mobileShots: [
      { type: "image", sr: "/projects/sabawrites/mb1.jpeg" },
      { type: "video", sr: "/projects/sabawrites/mb2video.mp4" },
      { type: "image", sr: "/projects/sabawrites/mb3.jpeg" },
    ],
    logo: "/projects/sabawrites/logo.png",
  },
];

export const thumbnails1 = [
    "/t1.png", "/t2.png", "/t3.png", "/t4.png"
]
export const thumbnails2 = [
    "/t4.png", "/t3.png", "/t2.png", "/t1.png"
]

export const skillsSet = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "/skills/javascript.png" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Python", icon: "/skills/python.png" },
      { name: "C++", icon: "/skills/c++.png" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/next.svg" },
      { name: "Redux Toolkit", icon: "/skills/Redux.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
      { name: "HTML5", icon: "/skills/html.png" },
      { name: "CSS3", icon: "/skills/css.png" },
      { name: "Sass", icon: "/skills/Sass.png" },
    ],
  },
  {
    category: "Backend, APIs & Authentication",
    skills: [
      { name: "REST APIs", icon: "/skills/api.png" },
      { name: "Next.js API Routes", icon: "/skills/next.svg" },
      { name: "JWT Authentication", icon: "/skills/jwt.svg" },
      { name: "NextAuth.js", icon: "/skills/nextauth.png" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "/skills/MongoDB.png" },
    ],
  },
  {
    category: "UI Libraries & Design",
    skills: [
      { name: "shadcn/ui", icon: "/skills/shadcn-ui.svg" },
      { name: "Material UI", icon: "/skills/mui.png" },
      { name: "Framer Motion", icon: "/skills/fm.svg" },
      { name: "GSAP", icon: "/skills/gsap.svg" },
      { name: "Lenis", icon: "/skills/lenis.svg" },
      { name: "Figma", icon: "/skills/figma.png" },
      { name: "UI/UX Design", icon: "/skills/ui.png" },
    ],
  },
  {
    category: "Performance & SEO",
    skills: [
      { name: "Lighthouse", icon: "/skills/lighthouse.png" },
      { name: "Core Web Vitals", icon: "/skills/web-vitals.png" },
      { name: "Google Search Console", icon: "/skills/search-console.svg" },
      { name: "On-page & Technical SEO", icon: "/skills/seo.png" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Cloudinary", icon: "/skills/cloudinary.png" },
      { name: "Git", icon: "/skills/git.png" },
      { name: "GitHub", icon: "/skills/github.png" },
      { name: "Vercel", icon: "/skills/vercel.svg" },
      { name: "Hostinger", icon: "/skills/hostinger.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
    ],
  },
];

export const allReviews = [
  {
    name: "Ali Khan",
    review:
      "Working with Mussadiq was a great experience. He understood my requirements clearly and delivered a modern, responsive website that looks professional on every device.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Sarah Ahmed",
    review:
      "The website design was clean, fast, and exactly what I wanted. Communication was smooth throughout the project, and every small detail was handled carefully.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Hamza Shah",
    review:
      "Mussadiq improved the performance and user experience of our website significantly. The final result was fast, mobile-friendly, and visually impressive.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Ayesha Malik",
    review:
      "I really liked how professionally the project was managed. The design was modern, easy to use, and perfectly matched my business requirements.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Usman Tariq",
    review:
      "Excellent front-end developer. He converted our ideas into a polished website with smooth animations, responsive layouts, and a very clean interface.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Hira Noor",
    review:
      "The website feels premium and works perfectly on mobile as well as desktop. I appreciated the quick updates and attention to detail during the whole process.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Bilal Raza",
    review:
      "Very skilled and cooperative developer. He delivered the project on time and made sure everything was working properly before handing it over.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Zainab Fatima",
    review:
      "I am very happy with the final website. It is simple, attractive, and easy for visitors to navigate. Highly recommended for web development projects.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Danish Ali",
    review:
      "Mussadiq has strong problem-solving skills and great design sense. He made our website faster, more professional, and much easier to use.",
    image: "/reviews/s.jpg",
  },
  {
    name: "Mariam Iqbal",
    review:
      "A reliable developer who listens carefully and delivers quality work. The portfolio website he created was modern, responsive, and exceeded my expectations.",
    image: "/reviews/s.jpg",
  },
];

export const cert = [
  {id: 1, src: "/certificate/frontend.png", title:"frontend"},
  {id: 2, src: "/certificate/javascript.png", title:"javascript"},
  {id: 3, src: "/certificate/responsive.png", title:"responsive"},
  {id: 4, src: "/certificate/redux.png", title:"redux"},
  {id: 5, src: "/certificate/nextjs.webp", title:"nextjs"},
  {id: 6, src: "/certificate/interview.png", title:"interview"},
  {id: 7, src: "/certificate/typescript.png", title:"typescript"},
  {id: 8, src: "/certificate/figma.png", title:"figma"},
  {id: 9, src: "/certificate/prompt.png", title:"prompt"},
  {id: 10, src: "/certificate/aurex.png", title:"aurex"},
]

export const experiences: ExperienceItem[] = [
  {
    index: "01",
    role: ["Full-Stack Developer", "& Founder"],
    company: "Scrupulous",
    type: "Freelance Agency",
    period: "Aug 2025 — Present",
    location: "Islamabad, PK",
    bullets: [
      "Built and deployed 20+ production websites for clients across Pakistan, Saudi Arabia, and the UK, solo, end-to-end.",
      "Architected full-stack Next.js + TypeScript apps with MongoDB, NextAuth, Context API, Cloudinary, and REST API routes.",
      "Engineered admin dashboards with product CRUD, order fulfilment, coupon engines, and real-time analytics.",
      "Achieved 99+ Lighthouse SEO scores via JSON-LD, XML sitemaps, Open Graph, Semantic tags, A11y, GSC & Meta Pixel integration.",
    ],
    tags: ["Next.js 16", "TypeScript", "MongoDB", "Tailwind CSS", "Cloudinary", "JWT", "SEO", "Perfomance Optimzation", "Context API"],
  },
  {
    index: "02",
    role: ["Front-End Developer", "Intern"],
    company: "Code Alpha",
    type: "Remote",
    period: "Feb 2024 — Mar 2024",
    location: "Remote",
    bullets: [
      "Shipped three interactive JS apps — Calculator, 3D CSS Gallery, Music Player — demonstrating DOM manipulation and event delegation.",
      "Resolved cross-browser CSS inconsistencies across mobile, tablet, and desktop viewports.",
      "Built responsive, animation-driven UIs in a production-speed remote environment.",
    ],
    tags: ["JavaScript", "CSS3", "HTML5" ,"DOM Manipulation", "Responsive Design", "CSS Animation"],
  },
];

export const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for speed, scalability, and a seamless user experience that helps your business stand out.",
  },
  {
    id: "02",
    title: "Performance & SEO",
    description:
      "Optimize your website for faster load times, better search rankings, and higher conversions with technical SEO and Core Web Vitals improvements.",
  },
  {
    id: "03",
    title: "End-to-End Solutions",
    description:
      "From strategy and development to deployment and ongoing support, I deliver complete digital solutions that are built to grow with your business.",
  },
];