import type { Metadata } from "next";
import FeaturesProj from '@/components/comp/FeaturesProj'
import NextProj from '@/components/comp/NextProj'
import ProblemStat from '@/components/comp/ProblemStat'
import ProjectThumb from '@/components/comp/ProjectThumb'
import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import { projects } from '@/constants'
import { SITE_URL } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface Params {
    params: Promise<{slug: string}>
}

export const generateStaticParams = () => {
  return projects.map(item => ({
     slug: item.link
  }))
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = await params
  const project = projects.find(p => p.link === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const url = `${SITE_URL}/work/${project.link}`

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/work/${project.link}`,
    },
    openGraph: {
      title: `${project.title} | Mussadiq Khan`,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mussadiq Khan`,
      description: project.description,
      images: [project.thumbnail],
    },
  }
}

const SingleWork = async ({params}: Params) => {
  const {slug} = await params

  const project = projects.find(p => p.link === slug)

  if(!project){
    return notFound()
  }

  const currentIndex = projects.findIndex(p => p.id === project.id)

  const nextProject = projects[(currentIndex + 1) % projects.length]

  const url = `${SITE_URL}/work/${project.link}`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  }

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.title,
    description: project.description,
    url,
    image: project.thumbnail,
    creator: { "@id": `${SITE_URL}/#person` },
    about: project.stack,
    keywords: Array.isArray(project.skillSet) ? project.skillSet.join(", ") : undefined,
    isPartOf: { "@id": `${SITE_URL}/work#webpage` },
    locationCreated: project.location
      ? { "@type": "Place", name: project.location }
      : undefined,
  }

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${project.title} | Mussadiq Khan`,
    description: project.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${url}#creativework` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <section className="max-w-5xl mx-auto px-4 md:px-12 relative h-screen flex pt-16 sm:pt-12 md:pt-5 justify-evenly flex-col ">
        <h1 className="text-[44px] sm:text-6xl md:text-8xl leading-none lg:leading-22 tracking-tight">{project.title}</h1>
        <p className="text-sm hidden md:block">{project.description}</p>
        <div className="grid grid-cols-2 sm:flex justify-between  mt-5 md:mt-0 gap-5 sm:gap-10 items-center">
          <div className="sm:w-[80%] mb-1 md:mb-0">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-2 md:pb-6 mb-2 md:mb-6">role / Services</h2>
            <h3 className="text-[12px] md:text-sm">{project.service}</h3>
          </div>
          <div className="w-[80%] mb-1 md:mb-0">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-2 md:pb-6 mb-2 md:mb-6">Location</h2>
            <h3 className="text-[12px] md:text-sm">{project.location}</h3>
          </div>
          <div className="w-full col-span-2 mb-1 md:mb-0">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-2 md:pb-6 mb-2 md:mb-6">STACK</h2>
            <h3 className="text-[12px] md:text-sm">{project.stack}</h3>
          </div>
        </div>

        <ProblemStat problemStatement={project.problemStatement} mainObjective={project.mainObjective} techStack={project.skillSet as string[]} description={project.description} />

        <div className="absolute z-50 -bottom-30 right-10">
          <FloatEffect output={[0,-250]}>
            <Link target="_blank" href={project.live}>
              <MagnetText dot="no" text="Live Site" strength={0.6} className="absolute w-41 h-41 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-20 right-8" />
            </Link>
          </FloatEffect>
        </div>
      </section>
      <section>
        {/* main image */}
        <ProjectThumb thumbnail={project.thumbnail} logo={project.logo} title={project.title}  />
        {/* laptop video */}
        <div className="relative mx-auto max-w-6xl my-20">
            <div className="absolute left-[12.5%] -top-1 sm:-top-2 md:-top-3  w-[74.5%] h-full overflow-hidden rounded-lg">
              <video
                src={project.laptopVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full rounded-3xl  object-contain "
              />
            </div>

            <Image
              src="/projectassets/laptop.webp"
              alt="Laptop"
              width={1200}
              height={750}
              className="relative z-10 w-full scale-y-90 h-auto pointer-events-none"
            />
        </div>
        <FeaturesProj features={project.features} />
        {/* pc*/}
        <div className="relative mx-auto max-w-6xl my-20 ">
            <div className="absolute left-0 bg-gray top-3 md:top-9 lg:top-16 xl:top-18 w-full h-full overflow-hidden rounded-lg">
              <video
                src={project.pcVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-contain rounded-lg lg:scale-80"
              />
            </div>

            <Image
              src="/projectassets/pc.webp"
              alt="pc"
              width={1200}
              height={750}
              className="relative z-10 w-full scale-y-95 md:scale-y-91 lg:scale-80 lg:scale-y-73 h-auto pointer-events-none"
            />
        </div>
        {/* mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto lg:gap-16 py-20">
          {project.mobileShots.map((item, i) => (
            <div
              key={i}
              className="relative max-h-screen aspect-[1/2] scale-85 xl:scale-100 w-full"
            >
              {/* Phone Frame */}
              <Image
                src="/projectassets/phone.webp"
                alt="Phone Frame"
                fill
                className="pointer-events-none z-20 object-contain"
              />

              {/* Screen */}
              <div className="absolute left-0 sm:left-[5.5%] top-4 sm:top-3 h-[96%] sm:h-[97%] w-full sm:w-[89%] overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.sr}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-[8%] sm:rounded-[40%] md:rounded-[30%] lg:rounded-[20%] xl:rounded-[5%] object-contain"
                  />
                ) : (
                  <Image
                    src={item.sr}
                    alt={`Mobile ${i + 1}`}
                    fill
                    loading="lazy"
                    className="object-contain rounded-xl"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* next case */}
        <NextProj image={nextProject.thumbnail} name={nextProject.title} link={nextProject.link} />
      </section>
    </main>
  )
}

export default SingleWork