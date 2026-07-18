import type { Metadata } from "next";
import WorkComp from "@/components/comp/WorkComp";
import { SITE_URL } from "../layout";
import { projects } from "@/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore selected projects by Mussadiq Khan — custom, high-performance websites and scalable web applications built with Next.js, React, MONGODB and TypeScript for 20+ brands.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Mussadiq Khan",
    description:
      "Selected case studies and projects by Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous.",
    url: `${SITE_URL}/work`,
    type: "website",
    images: [
      {
        url: "/img3.webp",
        width: 1200,
        height: 630,
        alt: "Mussadiq Khan | Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Mussadiq Khan",
    description:
      "Selected case studies and projects by Mussadiq Khan, Full-Stack Web Developer and founder of Scrupulous.",
    images: ["/img3.webp"],
  },
};

const Works = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/work#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
    ],
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/work#webpage`,
    url: `${SITE_URL}/work`,
    name: "Work | Mussadiq Khan",
    description:
      "A collection of selected web development projects and case studies by Mussadiq Khan.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    breadcrumb: { "@id": `${SITE_URL}/work#breadcrumb` },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/work#itemlist`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        url: `${SITE_URL}/work/${project.link}`,
        description: project.description,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="max-w-5xl md:px-5 mx-auto">
        <WorkComp />
      </main>
    </>
  );
};

export default Works;