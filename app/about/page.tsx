import AboutComp from '@/components/comp/AboutComp'
import LoadingAnimation from '@/components/comp/LoadingAnimation'
import { services } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const About = () => {
  return (
    <main className="max-w-6xl px-10 mx-auto relative pt-20">
      <section className="py-20 px-12 relative border-b border-border h-full flex items-center">
        <h1 className="text-4xl md:text-[86px] md:leading-23 tracking-tight">Helping brands thrive <br />in the digital world</h1>
      <div className='bg-ctr right-17 -bottom-22 aspect-square w-40 h-40 flex items-center justify-center rounded-full absolute'>
        <Image src="/globes.gif" alt="globe" width={50} height={50} className="rounded-full  mix-blend-darken animate-rotate" />
      </div>
      </section>
      <AboutComp />
      <section>
        <h3 className='flex gap-3 items-end text-5xl tracking-tight'>I can help you with <LoadingAnimation /> </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
          {services.map((service) => (
            <div key={service.id}>
              <div className="border-b border-border pb-4">
                <p className="text-gray text-sm">{service.id}</p>
              </div>
              <div>
                <h4 className="py-9 text-2xl  md:text-3xl font-medium">{service.title}</h4>
                <p className="tracking-tight">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  )
}

export default About
