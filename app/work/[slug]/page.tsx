import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import { projects } from '@/constants'
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
      <section className="max-w-5xl mx-auto py-16 md:py-24 my-16 md:px-12 relative h-[70vh] flex justify-between flex-col ">
        <h1 className="text-[44px] md:text-6xl lg:text-8xl leading-none lg:leading-22 tracking-tight">{slug}</h1>
        <div className="flex justify-between gap-10 items-center">
          <div className="w-full">
            <h2 className="border-b border-border/70 text-xs uppercase text-gray pb-7 mb-7">role / Services</h2>
            <h3>{project.service}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-xs uppercase text-gray pb-7 mb-7">Location</h2>
            <h3>{project.location}</h3>
          </div>
          <div className="w-full">
            <h2 className="border-b border-border/70 text-xs uppercase text-gray pb-7 mb-7">STACK</h2>
            <h3>{project.stack}</h3>
          </div>
        </div>
        <div className="absolute -bottom-15 right-10">
          <FloatEffect output={[0,-250]}>
            <Link href={'/'}>
              <MagnetText dot="no" text="Live Site" strength={0.6} className="absolute w-41 h-41 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-10 right-8" />
            </Link>
          </FloatEffect>
        </div>
      </section>
      <section>
        {/* main image */}
        <div></div>
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
