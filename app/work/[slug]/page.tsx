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
  return (
    <main>
      <section className="max-w-5xl mx-auto py-16 md:py-24 md:pb-10 mb-0 my-16 px-4 md:px-12 relative h-[54vh] sm:h-[64vh] flex justify-between flex-col ">
        <h1 className="text-[44px] sm:text-6xl md:text-8xl leading-none lg:leading-22 tracking-tight">{slug}</h1>
        <div className="flex justify-between gap-6 sm:gap-10 items-center">
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[11px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">role / Services</h2>
            <h3 className="text-[12px] sm:text-sm md:text-base">{project.service}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[11px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">Location</h2>
            <h3 className="text-[12px] sm:text-sm md:text-base">{project.location}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-[11px] sm:text-xs uppercase text-gray pb-5 sm:pb-7 mb-5 sm:mb-7">STACK</h2>
            <h3 className="text-[12px] sm:text-sm md:text-base">{project.stack}</h3>
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
        {/* computer video */}
        <div></div>
        {/* simple video */}
        <div></div>
        {/* big screen image / video */}
        <div></div>
        {/* laptop image or video */}
        <div></div>
        {/* 3 mobile size images */}
        <div></div>
        {/* next case */}
        <div></div>
      </section>
    </main>
  )
}

export default SingleWork
