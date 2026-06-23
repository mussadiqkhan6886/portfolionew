import { MaskContainer } from '@/components/ui/mask-effect'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Idea = () => {
  return (
    <section className="hidden md:block relative overflow-hidden lg:overflow-y-visible lg:overflow-x-clip">
      <video className="h-full scale-x-120 scale-y-111 w-full" src="/ropes.mp4" autoPlay loop muted playsInline />
      <div className="absolute z-20 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h4 className="text-3xl lg:text-5xl tracking-wide leading-wide mb-4 lg:mb-8 text-center font-light">Have <br /> an idea?</h4>
        <div className="flex h-28 w-full items-center justify-center overflow-hidden">
          <MaskContainer
            revealText={
              <Link href="/contact" className="rounded-full tracking-tight w-70 text-center text-5xl lg:text-6xl  text-white ">
                TELL US
              </Link>
            }
            className="h-24 lg:h-28 w-84 lg:w-94 border-border  border rounded-full text-black "
          >
            <Link href="/contact" className="flex items-start justify-start gap-3 uppercase">Let&apos;s build <FiArrowUpRight size={33} /> </Link>
          </MaskContainer>
        </div>
      </div>
    </section>
  )
}

export default Idea
