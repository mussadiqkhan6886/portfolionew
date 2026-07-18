import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/comp/Header";
import Footer from "@/components/comp/Footer";
import { dSans } from "@/constants/font";
import SmoothScroll from "@/components/ui/SmoothScroll";
import IntroLoader from "@/components/ui/Intro";
import ReactLenis from "lenis/react"
import PageTransition from "@/components/ui/PageTransition";

export const SITE_URL = "https://mussadiqkhan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mussadiq Khan | Full-Stack Web Developer",
    template: "%s | Mussadiq Khan",
  },
  description:
    "Mussadiq Khan is a freelance Full-Stack Web Developer who has helped 20+ brands grow with custom, high-performance websites and scalable web applications, and is founder of Scrupulous.",
  keywords: [
    "Mussadiq Khan",
    "Full-Stack Web Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Web Developer Pakistan",
    "SEO Developer",
    "Portfolio",
    "Scrupulous",
  ],
  authors: [{ name: "Mussadiq Khan", url: SITE_URL }],
  creator: "Mussadiq Khan",
  publisher: "Mussadiq Khan",
  applicationName: "Mussadiq Khan Portfolio",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mussadiq Khan | Full-Stack Web Developer",
    title: "Mussadiq Khan | Full-Stack Web Developer",
    description:
      "Mussadiq Khan is a freelance Full-Stack Web Developer who has helped 20+ brands grow with custom, high-performance websites and scalable web applications, and is founder of Scrupulous.",
    images: [
      {
        url: "/img3.webp",
        width: 1200,
        height: 630,
        alt: "Mussadiq Khan | Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mussadiq Khan | Full-Stack Web Developer",
    description:
      "Mussadiq Khan is a freelance Full-Stack Web Developer who has helped 20+ brands grow with custom, high-performance websites and scalable web applications, and is founder of Scrupulous.",
    images: ["/img3.webp"],
    // creator: "@yourtwitterhandle", // ⬅ replace or remove
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "3o7TyGVcbl7HdUTElJVPYv05mzt8Ubwu9N0oQenA0F4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Mussadiq Khan",
    url: SITE_URL,
    image: `${SITE_URL}/about2.webp`, // ⬅ add a real photo/avatar
    jobTitle: "Full-Stack Web Developer",
   description: "Full-Stack Web Developer based in Pakistan specializing in Next.js, React, TypeScript, performance optimization, and technical SEO.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://github.com/mussadiqkhan6886",
      "https://www.linkedin.com/in/mussadiq-khan-dev",
      "https://www.instagram.com/mussadiqkhan__",
      "https://leetcode.com/u/immk6886/",
    ], 
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "UI/UX Design",
      "Frontend Development",
      "Full-Stack developer",
      "MERN stack",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Mussadiq Khan | Full-Stack Web Developer",
    description:
      "Portfolio showcasing modern websites, scalable web applications, case studies, and technical expertise by Full-Stack Web Developer Mussadiq Khan.",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en-US",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Scrupulous",
    url: SITE_URL,
    founder: {
      "@id": `${SITE_URL}/#person`,
    },
    logo: `${SITE_URL}/logo.png`, // Your Scrupulous logo
    description:
      "Scrupulous is a web development studio specializing in high-performance websites and scalable web applications.",
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased ${dSans.className}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ReactLenis root >
          <Header />
          <PageTransition />
          <IntroLoader />
            <SmoothScroll> {children} </SmoothScroll>
          <Footer />
        </ReactLenis>
        </body>
    </html>
  );
}
