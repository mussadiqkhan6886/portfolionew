import TransitionLink from '@/components/comp/TransitionLink'
import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import ResponsiveSplitText from '@/components/ui/ScrollEffect'
import ScrollFloat from '@/components/ui/ScrollEffect'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row justify-between gap-16 max-w-240 mx-auto px-5 lg:px-0 pt-28 lg:pt-40 ">
      <article className="max-w-2xl">
        <ResponsiveSplitText
          className='text-3xl tracking-tight leading-10'
          text={"Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."}
        />
      </article>

      <div className="flex relative flex-row lg:flex-col gap-5 md:gap-18 h-70 sm:h-80 ">
        <article className="max-w-xs pr-3 sm:pr-0">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
        </article>

        <FloatEffect output={[100, -200]} className="absolute right-0 md:right-20 bottom-10 md:bottom-30 lg:left-0 lg:bottom-0">
          <TransitionLink href="/about">
            <MagnetText
              text="About Me"
              dot="no"
              strength={0.5}
              className="w-38 h-38 bg-text hover:bg-ctr-dark text-white rounded-full items-center justify-center transition-colors duration-300"
            />
          </TransitionLink>
        </FloatEffect>
      </div>
    </section>
  )
}

export default About