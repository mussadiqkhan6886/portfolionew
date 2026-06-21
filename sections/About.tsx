import FloatEffect from '@/components/ui/FloatEffect'
import MagnetText from '@/components/ui/MagnetEffect'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="bg-white flex flex-col lg:flex-row justify-between gap-16 max-w-270 mx-auto px-5 md:px-0 pt-30 md:pt-40 lg:pb-20">
      <article className="max-w-2xl">
        <p className="text-3xl leading-10">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>
      </article>

      <div className="flex relative flex-row lg:flex-col gap-5 md:gap-18 h-70 sm:h-80 ">
        <article className="max-w-xs pr-3 md:pr-10">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </article>

        <FloatEffect output={[100, -200]} className="absolute right-0 md:right-20 bottom-10 md:bottom-30 lg:left-0 lg:bottom-0">
          <Link href="/about">
            <MagnetText
              text="About Me"
              mobile={false}
              dot="no"
              strength={0.5}
              className="w-38 h-38 bg-text hover:bg-ctr-dark text-white rounded-full items-center justify-center transition-colors duration-300"
            />
          </Link>
        </FloatEffect>
      </div>
    </section>
  )
}

export default About