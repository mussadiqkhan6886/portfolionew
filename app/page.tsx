import About from '@/sections/About'
import Certificates from '@/sections/Certificates'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Idea from '@/sections/Idea'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Testimonials from '@/sections/Testimonials'
import { Metadata } from 'next'
import React from 'react'
import { SITE_URL } from './layout'

export const metadata: Metadata = {
  title: "Mussadiq Khan | Full-Stack Web Developer",
  description:
    "Mussadiq Khan is a freelance Full-Stack Web Developer who has helped 20+ brands grow with custom, high-performance websites and scalable web applications, and is founder of Scrupulous.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mussadiq Khan | Full-Stack Web Developer",
    description:
      "Mussadiq Khan is a freelance Full-Stack Web Developer who has helped 20+ brands grow with custom, high-performance websites and scalable web applications, and is founder of Scrupulous.",
    url: SITE_URL,
    type: "website",
  },
};

const Home = () => {

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Work", "About", "Contact"],
    url: [
      SITE_URL,
      `${SITE_URL}/work`,
      `${SITE_URL}/about`,
      `${SITE_URL}/contact`,
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Mussadiq Khan | Full-Stack Web Developer",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    description:
      "Portfolio homepage of Mussadiq Khan, freelance Full-Stack web developer based in Pakistan.",
    breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE_URL}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

    <main className="lg:pb-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Testimonials />
      <Idea />
    </main>
    </>
  )
}

export default Home
