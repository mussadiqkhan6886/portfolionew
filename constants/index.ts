
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
    thumbnail: "/projects/chunkd/chunkdMain.webp",
    link: "chunkd",
    location: "Lahore, Pakistan",
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    description:
      "Chunk'd Cookies is a premium cookie eCommerce platform built end-to-end with Next.js, TypeScript, and MongoDB. Engineered a custom order engine handling Build Your Own Box, limited drops, and standard orders, plus an admin dashboard for products, orders, and analytics optimized to stay fast under high-traffic drop launches.",
    problemStatement:
      "Client needed a flexible ordering system supporting Build Your Own Box, pre-order drops, standard orders, and deals, backed by an admin dashboard for products, orders, and sales analytics. The system had to stay performant and stable during high-demand drop events without lag.",
    mainObjective:
      "Engineer a self-serve storefront handling limited drops, custom box building, and daily order volume without performance loss under traffic spikes, while giving the owner full admin control over products, orders, and sales data through a secured dashboard.",
    features: [
      "Build Your Own Box",
      "Limited Cookie Drops",
      "Multiple Order Flows",
      "Dynamic Cart & Checkout",
      "Pickup & Delivery",
      "Coupon Code System",
      "Admin Sales Analytics",
      "ISR Product Pages",
      "100 overall Lighthouse Score",
      "Cloudinary Image Optimization",
    ],
    live: "https://www.chunkdpk.com",
    vid: "/projects/chunkd/laptop.webm",
    mobileShots: [
      { type: "video", sr: "/projects/chunkd/mb2video.mp4" },
      { type: "image", sr: "/projects/chunkd/mb3.webp" },
    ],
    logo: "/projects/chunkd/logo.png",
  },

  {
    id: "2",
    service: "Design, Development & SEO",
    title: "Zevora",
    role: "designer, developer & SEO",
    thumbnail: "/projects/zevora/zevoraMain.webp",
    link: "zevora",
    location: "Lahore, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "framer motion", "GSAP", "SEO", "Lenis"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "Zevora is a 150+ product luxury accessories store built and SEO-optimized from the ground up six-plus categories, COD checkout, and a scalable catalog engineered to compete with established sellers on zero ad spend. Implemented structured data, keyword-mapped landing pages, and Core Web Vitals optimization for organic search rankings.",
    problemStatement:
      "Client needed to compete with established jewelry sellers without a marketing budget. Required a platform presenting dozens of SKUs across six+ categories as premium rather than generic, ranking on Google for competitive local search terms, while converting cash-on-delivery shoppers wary of buying accessories unseen online.",
    mainObjective:
      "Build a high-trust, high-conversion storefront positioning the brand as accessible luxury, ranking organically for city and category search terms, and giving the client a simple way to add products, run deals, and track top sellers as the catalog scales.",
    features: [
      "Multi-Category Catalog",
      "Reusable Component Architecture",
      "Search & Filtering",
      "Sub-0.5s Page Load",
      "Conversion-Focused UI/UX",
      "Hot Sellers Section",
      "Cash on Delivery",
      "Deals & Bundles Engine",
      "Local SEO Targeting",
      "Structured Data",
      "ISR Product Pages",
      "99/100 Lighthouse Score",
      "Meta Pixel Events",
      "Cloudinary Media Delivery",
      "Secured Admin Dashboard",
    ],
    live: "https://www.zevoraofficial.com",
    vid: "/projects/zevora/laptop.webm",
    mobileShots: [
      { type: "image", sr: "/projects/zevora/mb3.webp" },
      { type: "video", sr: "/projects/zevora/mb2video.mp4" },
    ],
    logo: "/projects/zevora/logo.png",
  },

   {
    id: "6",
    service: "Design & Development",
    title: "Halir",
    role: "design & developer",
    thumbnail: "/projects/halir/halirMain.webp",
    link: "halir",
    location: "Islamabad, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "Framer motion", "GSAP"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "Halir Perfumery sells a product customers can't smell before buying, so the site is built around trust and sensory storytelling cinematic visuals, structured collections, and a dedicated longevity/quality section. Developed a full admin dashboard for Product CRUD & order management.",
    problemStatement:
      "Perfume is hard to sell online since customers can't smell it first. Client needed a site that could sell the feeling of a fragrance through visuals and trust signals like longevity claims and return policy, strong enough to convert cold visitors into buyers on brand experience alone.",
    mainObjective:
      "Translate an intangible sensory product into a visually convincing, story-led site that builds enough trust for visitors to buy an unfamiliar scent, while ranking for competitive local search terms and loading instantly so no customer drops off.",
    features: [
      "Story-Driven Landing Page",
      "Men/Women Collections",
      "Longevity Trust Section",
      "Gifting & Packaging Highlight",
      "Conversion-Focused UI/UX",
      "Optimized Load Speed",
      "Fragrance SEO Targeting",
      "Schema Markup",
      "ISR Product Catalog",
      "99/100 Lighthouse Score",
      "Context API State",
      "Secured JWT Admin",
    ],
    live: "https://www.halirperfumerypk.com",
    vid: "/projects/halir/laptop.webm",
    mobileShots: [
      { type: "image", sr: "/projects/halir/mb3.webp" },
      { type: "video", sr: "/projects/halir/mb2video.mp4" },
    ],
    logo: "/projects/halir/logo.png",
  },

  {
    id: "8",
    service: "Design & Development",
    title: "Amass Bakery",
    role: "design & developer",
    thumbnail: "/projects/amass/amassMain.webp",
    link: "amassbakery",
    location: "Al Khobar, Saudi Arabia",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI", "Swiper"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT ✦ (EN/AR)",
    description:
      "Amass Bakery replaced WhatsApp/Instagram cake ordering with a bilingual (EN/AR, true RTL) digital menu and cake builder. Engineered a calendar-based capacity system with per-category rules simple orders capped at 2/day, custom at 1/day, wedding on a separate flow all handled through admin dashboard auto-blocking dates once limits are hit, across a 50+ product catalog.",
    problemStatement:
      "Custom cake orders were handled through back-and-forth DMs, which doesn't scale and creates pricing and sizing confusion. Client, serving a bilingual Saudi audience, needed a structured way for customers to browse the menu, customize orders by occasion, and reach out with clear intent in English and Arabic.",
    mainObjective:
      "Replace unstructured DM-based ordering with a clear, bilingual digital menu and customization flow that lets customers self-serve occasion, size, and style requirements before contacting the bakery, cutting back-and-forth and increasing order clarity through automated capacity rules.",
    features: [
      "Bilingual RTL Site",
      "Custom Cake Builder",
      "Occasion Cake Gallery",
      "Wedding Cake Showcase",
      "Table Setup Services",
      "Digital Menu",
      "Video Category Navigation",
      "Local SEO Targeting",
      "ISR Menu Updates",
      "96/100 Lighthouse Score",
    ],
    live: "https://www.amassbakery.com",
    vid: "/projects/amass/laptop.webm",
    mobileShots: [
      { type: "image", sr: "/projects/amass/mb3.webp" },
      { type: "video", sr: "/projects/amass/mb2video.mp4" },
    ],
    logo: "/projects/amass/logo.webp",
  },

  {
    id: "3",
    service: "Design & Development",
    title: "True Horizon",
    role: "design & developer",
    thumbnail: "/projects/truehorizon/truehorizonMain.webp",
    link: "truehorizon",
    location: "UK, London",
    skillSet: ["nextjs", "typescript", "framer motion", "GSAP", "tailwindcss", "Swiper", "MUI", "cal.com"],
    stack: "NEXT.JS ✦ TYPESCRIPT ✦ FRAMER MOTION ✦ GSAP",
    description:
      "True Horizon is an AI automation agency site built with GSAP and Framer Motion to render interactive, working dashboard and voice-agent mock-ups instead of static screenshots. Engineered scroll-performant animation sequences with server-side rendering to keep first-contentful-paint fast on load-heavy interactive sections.",
    problemStatement:
      "AI consulting agencies typically rely on generic, text-heavy sites making abstract promises. Client needed a site proving what their automations, dashboards, and voice agents actually do in action, building trust with skeptical business owners while explaining a technical service simply, converting visitors into booked calls.",
    mainObjective:
      "Turn an abstract service into something visitors can see working through interactive dashboard, chatbot, and scheduling mock-ups, driving qualified leads to book a discovery call rather than bounce off a static, text-heavy services page.",
    features: [
      "Interactive Dashboard Previews",
      "Live AI Voice Demo",
      "Workflow Automation Showcase",
      "Case Study Metrics",
      "Tiered Pricing Section",
      "Call Booking Integration",
      "GSAP Scroll Interactions",
      "SSR Fast FCP",
      "Technical SEO",
      "97/100 Lighthouse Score",
    ],
    live: "https://www.truehorizon.uk",
    vid: "/projects/truehorizon/laptop.webm",
    mobileShots: [
      { type: "image", sr: "/projects/truehorizon/mb3.webp" },
      { type: "video", sr: "/projects/truehorizon/mb2video.mp4" },
    ],
    logo: "/projects/truehorizon/logo.png",
  },

  {
    id: "4",
    service: "Design & Development",
    title: "M&Z Store",
    role: "design & developer",
    thumbnail: "/projects/mzstore/mzstoreMain.webp",
    link: "mzstore",
    location: "Karachi, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "M&Z Store is a 200+ product eCommerce build for a modest-fashion fabric brand. Structured the catalog schema around fabric type rather than generic categories, and used ISR so weekly-rotating inventory updates instantly without redeploys. Built an advanced admin dashboard with product CRUD, variants, and sales analytics.",
    problemStatement:
      "The modest-fashion fabric market is fragmented and price-driven, with sellers operating through unstructured social pages. Client needed a proper store with variants to organize a large, fast-changing inventory by fabric type, communicate trust to first-time buyers, and support cash-on-delivery, the dominant local payment method.",
    mainObjective:
      "Engineer a scalable eCommerce platform with a fabric-based catalog architecture, streamlined inventory management for weekly rotations, ISR/SSG rendering for performance, later optimized to cut load time by 18% and support 200+ products through a secured admin dashboard.",
    features: [
      "Fabric-Based Collections",
      "Cash on Delivery",
      "Customer Reviews",
      "WhatsApp Ordering",
      "Meta Pixel Events",
      "Color Disclaimer Pages",
      "ISR Fast Inventory",
      "Cloudinary Image Pipeline",
      "99/100 Lighthouse Score",
      "Accessibility-Focused UI",
      "200+ Product Admin",
    ],
    live: "https://www.mzstorepk.com",
    vid: "/projects/mzstore/pc.webm",
    mobileShots: [
      { type: "image", sr: "/projects/mzstore/mb3.webp" },
      { type: "video", sr: "/projects/mzstore/mb2video.mp4" },
    ],
    logo: "/projects/mzstore/logo.jpeg",
  },

  {
    id: "5",
    service: "Design & Development",
    title: "MIRMEE",
    role: "design & developer",
    thumbnail: "/projects/mirmee/mirmeeMain.webp",
    link: "mirmee",
    location: "Islamabad, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "MIRMEE sells handmade hair accessories that go out of stock and rotate weekly. Built real-time stock-status logic directly into the catalog schema, not just a visual badge, so sold-out items never appear purchasable, paired with ISR so new drops and sale pricing update instantly across the site.",
    problemStatement:
      "As a handmade goods brand, client sells limited-quantity items that frequently sell out or rotate weekly, which most template stores handle poorly with broken links and stale listings. Needed a lightweight, boutique-feeling store clearly showing sale pricing and stock status without clutter.",
    mainObjective:
      "Create a clean, boutique-style shopping experience clearly communicating stock status and sale pricing in real time, while keeping page load instant on mobile, where the majority of the brand's audience shops and converts.",
    features: [
      "Real-Time Stock Status",
      "Sale Pricing Badges",
      "Multi-Category Catalog",
      "New Arrivals & Bundles",
      "Customer Testimonials",
      "Cart & Checkout Flow",
      "Cloudinary Image Delivery",
      "Sub-0.6s Mobile Load",
      "ISR Catalog Updates",
      "98/100 Lighthouse Score",
    ],
    live: "https://www.shopmirmee.com",
    vid: "/projects/mirmee/pc.webm",
    mobileShots: [
      { type: "image", sr: "/projects/mirmee/mb3.webp" },
      { type: "video", sr: "/projects/mirmee/mb2video.mp4" },
    ],
    logo: "/projects/mirmee/logo.jpg",
  },

  {
    id: "7",
    service: "Design & Development",
    title: "KPSLA",
    role: "design & developer",
    thumbnail: "/projects/kpsla/kpslaMain.webp",
    link: "kpsla",
    location: "Mardan, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "nodemailer", "tailwindcss", "context API", "MUI"],
    stack: "NEXT.JS ✦ MONGODB ✦ TYPESCRIPT",
    description:
      "KPSLA is the official platform for a province-wide student leadership organization. Built a registration system for a mostly Grade 7-12 audience with parental-consent messaging, plus an events system and leadership profiles. Used server-side rendering to keep pages crawlable and fast on low-end mobile devices across the region.",
    problemStatement:
      "As a student-led non-profit, KPSLA needed a credible online presence to be taken seriously by schools and parents without a corporate budget. Required a straightforward way for students to register as members, learn about events, and understand the organization's mission, including parental-consent concerns for underage members.",
    mainObjective:
      "Give a youth-led organization a credible web presence driving student registrations province-wide, clearly communicating mission and safety practices to parents, and centralizing events, mentorship info, and success stories in one fast, crawlable platform.",
    features: [
      "Membership Registration",
      "Events Listing System",
      "Leadership Profiles",
      "Impact Stat Counters",
      "Success Story Testimonials",
      "Parental Consent FAQ",
      "WhatsApp Contact Integration",
      "Regional SEO Targeting",
      "SSR Low-End Devices",
      "99/100 Lighthouse Score",
      "Secured JWT Admin",
    ],
    live: "https://www.kpsla.org",
    vid: "/projects/kpsla/pc.webm",
    mobileShots: [
      { type: "image", sr: "/projects/kpsla/mb3.webp" },
      { type: "video", sr: "/projects/kpsla/mb2video.mp4" },
    ],
    logo: "/projects/kpsla/logo.png",
  },

  
  {
    id: "9",
    service: "Design & Development",
    title: "Saba Writes",
    role: "design & developer",
    thumbnail: "/projects/saba/sabaMain.webp",
    link: "sabawrites",
    location: "Mardan, Pakistan",
    skillSet: ["nextjs", "REST APIs" ,"mongodb", "cloudinary", "typescript", "JWT", "bcryptjs", "tailwindcss", "Tiny MCE", "Swiper"],
    stack: "NEXT.JS ✦ TYPESCRIPT ✦ MONGODB",
    description:
      "Saba Writes is a content-first beauty and lifestyle blog engineered around organic discoverability static generation for published posts, ISR so new content goes live without a rebuild, and per-post technical SEO (meta, schema, related-story linking) so individual articles can rank against established beauty publications.",
    problemStatement:
      "Most personal blogs run on slow, generic templates that hurt reader experience and SEO, making it hard for a new voice to compete with established publications. Creator needed a fast, distraction-free reading experience combined with technical SEO strong enough to rank posts against larger competitors.",
    mainObjective:
      "Give an independent writer a fast, SEO-strong publishing platform that reads as professionally as a major lifestyle outlet, helping individual posts rank organically and building a loyal, returning readership through a clean, optimized architecture.",
    features: [
      "Blog-First Architecture",
      "Category Story Browsing",
      "Reading-Time Estimates",
      "Related Stories Carousel",
      "Author/About Page",
      "Per-Post Technical SEO",
      "SSG/ISR Instant Publishing",
      "99/100 Lighthouse Score",
      "Optimized Image Loading",
      "Distraction-Free Reading UI",
      "TinyMCE Admin Editor",
      "Blog CRUD Dashboard",
    ],
    live: "https://www.sabawrites.com",
    vid: "/projects/saba/laptop.webm",
    mobileShots: [
      { type: "image", sr: "/projects/saba/mb3.webp" },
      { type: "video", sr: "/projects/saba/mb2video.mp4" },
    ],
    logo: "/projects/saba/logo.png",
  },
];


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
      { name: "Lenis", icon: "/skills/lenis.png" },
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
    name: "IQzaibessence",
    review:
      "Excellent work, It is so pleasing to work with you. You are doing so good may Allah bless you more n more",
  },
  {
    name: "Mir Mee",
    review:
      "Working with Scrupulous(Mussadiq) was amazing they actually listened to what we wanted for Mirmee and just made it happen. The communication was super easy, and they didnt overcomplicate things. Out site looks great and the results speaks for themselves. Definitely going to work with them again",
    image: "/projects/mirmee/logo.jpg",
  },
  {
    name: "HALIR",
    review:
      "Work with mussadiq is peaceful you just have to put requirments and idea and he will bring that to internet. His work is professional and have 24/7 customer support. His creativity and work is outstanding have no doubt to come back to him.Beyond being talented he is an amazing person to work with.",
    image: "/projects/halir/logo.png",
  },
  {
    name: "Saba writes",
    review:
      "working with mussadiq was such a lovely experience mashallah, their work truly impressed me.May Allah put barakah in their work always.",
    image: "/projects/saba/logo.png",
  },
  {
    name: "Chunkd",
    review:
      "Honeslty, I am really impressed with mussadiq work. When I showed the website to my friends and family they really loved it. I personally loved how everything turned out, and it felt like my money was well spent, They even did a free logo redesign, which made everthing look even better.",
    image: "/projects/chunkd/logo.png",
  },
  {
    name: "KPSLA",
    review:
      "Working with mussadiq is a great experience. They handled eveything with professionalism and respect. Website turned out exactly how we wanted.",
    image: "/projects/kpsla/logo.png",
  },
  {
    name: "True Horizon",
    review:
      "Our website look out of this world that aniamtion and work was too impressing. He understand exactly what we needed and delivered without back-and-forth, highly recommended.",
    image: "/projects/truehorizon/logo.png",
  },
  {
    name: "Zayphire",
    review:
      "I am fully satisfied with his work. He is polite make changes on request and has built a fast and clean website. He truly knows his work and is one of the best really appreciated.",
  },
  {
    name: "M&Z Store",
    review:
      "I have worked with mussadiq almost half year and his work is amazing, he delivered a clean, fast and professional website exactly as I wanted.",
    image: "/projects/mzstore/logo.jpeg",
  },
  {
    name: "Zevora",
    review:
      "Working with mussadiq was a truly wonderful experience. He showed honesty, respect and patience, always listening carefully to my requirments. His work exceeded my expectations, and I am very happy with the final result may Allah bless them with more success. Highly recommended for anyone seeking a reliable and professional work",
    image: "/projects/zevora/logo.png",
  },
  {
    name: "Amass Bakery",
    review:
      "Mussadiq did an excellent job on our bakery website, His work quality is impressive, and he communicates with great professionalism and respecct. He listens carefully never dismisses ideas and always find solutions. I truly appreciate his attitude and dedication to delivering the best results",
    image: "/projects/amass/logo.webp",
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