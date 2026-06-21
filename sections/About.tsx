import MagnetText from '@/components/ui/MagnetEffect'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="bg-white flex flex-col md:flex-row justify-between gap-16 max-w-275 mx-auto px-5 pt-30 md:pt-40 pb-20">
      <article className="max-w-2xl">
        <p className="text-2xl sm:text-3xl leading-10">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>
      </article>

      <div className="flex flex-row md:flex-col gap-5 md:gap-18">
        <article className="max-w-xs pr-10">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </article>

        <Link href="/about">
          <MagnetText
            text="About Me"
            mobile={false}
            dot="no"
            strength={0.5}
            className="w-34 h-34 bg-text hover:bg-ctr-dark text-white rounded-full items-center justify-center transition-colors duration-300"
          />
        </Link>
      </div>
    </section>
  )
}

export default About