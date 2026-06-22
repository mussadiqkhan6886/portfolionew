import { MaskContainer } from '@/components/ui/mask-effect'
import Link from 'next/link'
import React from 'react'

const Idea = () => {
  return (
    <section className="relative">
      <video className="h-full scale-x-120 scale-y-111 w-full" src="/ropes.mp4" autoPlay loop muted playsInline />
      <div className="absolute z-20 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h4 className="text-4xl sm:text-5xl tracking-wide leading-wide mb-8 text-center font-light">Have <br /> an idea?</h4>
        <div className="flex h-28 w-full items-center justify-center overflow-hidden">
          <MaskContainer
            revealText={
              <Link href="/contact" className="rounded-full tracking-tight w-70 text-center text-5xl font-black text-white ">
                TELL US
              </Link>
            }
            className="h-28 border-border font-black border rounded-full text-black "
          >
            <Link href="/contact" className="">TELL US</Link>
          </MaskContainer>
        </div>
      </div>
    </section>
  )
}

export default Idea
