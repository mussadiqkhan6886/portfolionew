import type { Metadata } from "next";
import ContactForm from '@/components/comp/ContactForm';
import MagnetText from '@/components/ui/MagnetEffect';
import { SITE_URL } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous, to start your next web project. Email, call, or send a message directly.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mussadiq Khan",
    description:
      "Start a project together — get in touch with Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/img3.webp",
        width: 1200,
        height: 630,
        alt: "Contact Mussadiq Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mussadiq Khan",
    description:
      "Start a project together — get in touch with Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous.",
    images: ["/img3.webp"],
  },
};

const Contact = () => {
  const url = `${SITE_URL}/contact`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: url },
    ],
  }

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    url,
    name: "Contact | Mussadiq Khan",
    description:
      "Contact page for Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
      "@type": "Person",
      name: "Mussadiq Khan",
      email: "mussadiqkhan6886@gmail.com",
      telephone: "+92-318-9328584",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "business",
        email: "mussadiqkhan6886@gmail.com",
        telephone: "+92-318-9328584",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Urdu"],
      },
    },
  }

  return (
    <main className="bg-text text-white py-20 px-6 sm:px-20 xl:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <section className="max-w-4xl flex flex-col md:flex-row justify-between w-full mx-auto relative">
        <section className="block pt-14 md:hidden relative">
          <div>
              <h1 className="text-[clamp(42px,7vw,90px)] leading-none tracking-tight text-white">
                  <Image
                  src="/img3.webp"
                  alt="Mussadiq Khan"
                  fetchPriority="high"
                  priority
                  className="w-18 h-18 inline-block mr-4 rounded-full object-cover"
                  width={200}
                  height={200}
                /> Let&apos;s start a 
                <br />
                project together
              </h1>
            </div>
  
            <div className="absolute top-10 right-0 w-13 h-13 rounded-full">
              <FiArrowDownLeft size={22} />
            </div>

            <div className="flex flex-col mt-14 gap-3 items-start">
            <h2 className="text-xs text-gray/80 uppercase font-[450]">Contact Details</h2>
            <Link
              href="mailto:mussadiqkhan6886@gmail.com"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="mussadiqkhan6886@gmail.com" />
              </Link>

              <Link
                href="tel:+923189328584"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="+92 318 9328584" />
                
              </Link>

              <Link
                href="/Resume.docx.pdf"
                download="/Resume.docx.pdf"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="Download CV" />
              </Link>
            </div>
        </section>
        <section className="md:py-20">
          <h1 className="text-[clamp(42px,7vw,84px)] tracking-tight leading-none hidden md:block">Let's start a <br /> project together</h1>
          <ContactForm />
        </section>
        
        <section className="w-[30%]  hidden md:block lg:w-[20%] pt-40">
          <div className="relative mb-34">
            <Image
              src="/img3.webp"
              alt="Mussadiq Khan"
              className="w-23 h-23 inline-block rounded-full object-cover"
              width={200}
              height={200}
            />
            <FiArrowDownRight className="absolute left-0 -bottom-18" size={30} />
          </div>
          
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-xs text-gray/80 uppercase font-[450]">Contact Details</h2>
            <Link
              href="mailto:mussadiqkhan6886@gmail.com"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="mussadiqkhan6886@gmail.com" />
              </Link>

              <Link
                href="tel:+923189328584"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="+92 318 9328584" />
                
              </Link>

              <Link
                href="/Resume.docx.pdf"
                download="/Resume.docx.pdf"
              >
                <MagnetText strength={0.2} className="hover:border-b border-white w-full text-sm md:text-base" dot="no" text="Download CV" />
              </Link>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Contact