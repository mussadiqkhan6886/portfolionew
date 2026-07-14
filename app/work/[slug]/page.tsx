import NextProj from '@/components/comp/NextProj'
import ProjectThumb from '@/components/comp/ProjectThumb'
import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface Params {
    params: Promise<{slug: string}>
}

const SingleWork = async ({params}: Params) => {
  const {slug} = await params

  const project = projects.find(p => p.link === slug)

  if(!project){
    return notFound()
  }

  const currentIndex = projects.findIndex(p => p.id === project.id)

  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main>
      <section className="max-w-5xl mx-auto py-16 md:py-24 md:pb-10 mb-0 my-16 px-4 md:px-12 relative h-[54vh] sm:h-[64vh] flex justify-between flex-col ">
        <h1 className="text-[44px] sm:text-6xl md:text-8xl leading-none lg:leading-22 capitalize tracking-tight">{slug}</h1>
        <div className="flex justify-between gap-5 sm:gap-10 items-center">
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">role / Services</h2>
            <h3 className="text-[11px] sm:text-sm md:text-base">{project.service}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">Location</h2>
            <h3 className="text-[11px] sm:text-sm md:text-base">{project.location}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[10px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">STACK</h2>
            <h3 className="text-[11px] sm:text-sm md:text-base">{project.stack}</h3>
          </div>
        </div>
        <div className="absolute z-50 -bottom-30 right-10">
          <FloatEffect output={[0,-250]}>
            <Link href={'/'}>
              <MagnetText dot="no" text="Live Site" strength={0.6} className="absolute w-41 h-41 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-20 right-8" />
            </Link>
          </FloatEffect>
        </div>
      </section>
      <section>
        {/* main image */}
        <ProjectThumb thumbnail={project.thumbnail} logo={project.logo as string} title={project.title}  />
        {/* laptop video */}
        {/* <div className="relative mx-auto w-[1200px] my-20">
            <div className="absolute left-[12.5%] top-2 w-[74.5%] h-full overflow-hidden rounded-lg">
              <video
                src={project.laptopVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <Image
              src="/projectassets/laptop.png"
              alt="Laptop"
              width={1200}
              height={750}
              className="relative z-10 w-full h-auto pointer-events-none"
            />
        </div> */}
        {/* simple video */}
        <div>
          <video src={project.hero} autoPlay
                muted
                loop
                playsInline
                className="w-full object-contain"  />
        </div>
        {/* big screen image / video */}
        {/* <div className="relative mx-auto w-[900px] my-20">
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden rounded-lg">
              <video
                src={project.pcVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-contain rounded-lg"
              />
            </div>

            <Image
              src="/projectassets/pc.png"
              alt="pc"
              width={1200}
              height={750}
              className="relative z-10 w-full h-auto pointer-events-none"
            />
        </div> */}
        {/*big image */}
        <div className="w-full relative h-screen">
          <Image loading="lazy" src={project.image1 as string} alt="image 1" fill className="w-full h-full" />
        </div>
        
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto lg:gap-16 py-30">
          {project.mobileShots.map((item, i) => (
            <div
              key={i}
              className="relative max-h-screen aspect-[1/2] scale-85 xl:scale-100 w-full"
            >
              {/* Phone Frame */}
              <Image
                src="/projectassets/phone.png"
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
