import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import { projects } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface Params {
    params: Promise<{slug: string}>
}

const SingleWork = async ({params}: Params) => {
  const {slug} = await params

  const project = projects.find(p => p.link === slug)

  if(!project){
    return <main className="bg-border relative text-ctr-dark flex items-center justify-center h-screen">
      <h1 className="font-semibold text-5xl md:text-6xl lg:text-8xl">
        Error 404
        <br />
        Are you lost?
      </h1>
       <div className="absolute left-3/4 bottom-[30%] lg:bottom-[50%] -translate-x-3/2 -translate-y-3/2">
          <FloatEffect output={[100,250]}>
            <Link href={'/'}>
              <MagnetText dot="no" text="Go Back Home" className="absolute w-38 h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-5 right-8" />
            </Link>
          </FloatEffect>
        </div>
    </main>
  }
  return (
    <main>
      <section className="max-w-5xl mx-auto py-16 md:py-24 my-16 md:px-12 relative h-[70vh] flex justify-between flex-col ">
        <h1 className="text-[44px] md:text-6xl lg:text-8xl leading-none lg:leading-22 tracking-tight">{slug}</h1>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="border-b border-border/50 text-xs uppercase text-gray pb-4">Services</h2>
          </div>
          <div>
            <h2 className="border-b border-border/50 text-xs uppercase text-gray pb-4">Location</h2>
          </div>
          <div>
            <h2 className="border-b border-border/50 text-xs uppercase text-gray pb-4">STACK</h2>
          </div>
        </div>
        <div className="absolute -bottom-15 right-10">
          <FloatEffect output={[100,250]}>
            <Link href={'/'}>
              <MagnetText dot="no" text="Live Site" className="absolute w-38 h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full text-white -bottom-5 right-8" />
            </Link>
          </FloatEffect>
        </div>
      </section>
      <section>

      </section>
    </main>
  )
}

export default SingleWork
