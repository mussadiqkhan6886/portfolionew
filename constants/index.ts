import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSass,
  SiMongodb,
  SiShadcnui,
  SiMui,
  SiFramer,
  SiGreensock,
  SiFigma,
  SiGoogle,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiVercel,
  SiHostinger,
} from "react-icons/si";

import {
  FaCode,
  FaServer,
  FaKey,
  FaUniversalAccess,
  FaTachometerAlt,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";


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
    {id: "1",title: "ChunkD", role: "design & engineer", thumbnail: "/t4.png", link: "/work/s", location: "Saudi", stack: [], description: "", features: [], live: "", video: "", webVideo: "", mobileShots: []},
    {id: "2",title: "HALIR", role: "design & engineer", thumbnail: "/t2.png", link: "/work/k", location: "Pakistan", stack: [], description: "", features: [], live: "", video: "", webVideo: "", mobileShots: []},
    {id: "3",title: "Zevora", role: "development & SEO", thumbnail: "/t1.png", link: "/work/s", location: "UK", stack: [], description: "", features: [], live: "", video: "", webVideo: "", mobileShots: []},
    {id: "4",title: "True Horizon", role: "design & development", thumbnail: "/t3.png", link: "/work/l", location: "USA", stack: [], description: "", features: [], live: "", video: "", webVideo: "", mobileShots: []},
]

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
      { name: "Git", icon: "/skills/git.eps" },
      { name: "GitHub", icon: "/skills/github.png" },
      { name: "Vercel", icon: "/skills/vercel.svg" },
      { name: "Hostinger", icon: "/skills/hostinger.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
    ],
  },
];