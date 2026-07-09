import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import Link from 'next/link'
import React from 'react'

interface Params {
    params: Promise<{slug: string}>
}

const SingleWork = async ({params}: Params) => {
  const {slug} = await params
  return (
    <main>
      <section className="relative">
        <h1>{slug}</h1>
        <div>
          <div>
            <h2>Services</h2>
          </div>
          <div>
            <h2>Location</h2>
          </div>
          <div>
            <h2>STACK</h2>
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
    </main>
  )
}

export default SingleWork
