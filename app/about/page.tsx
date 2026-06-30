import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main className="max-w-5xl px-10 mx-auto relative pt-20">
      <section className="py-20 relative border-b border-border h-full flex items-center">
        <h1 className="text-4xl md:text-[86px] md:leading-23 tracking-tight">Helping brands thrive <br />in the digital world</h1>
      <div className='bg-ctr right-17 -bottom-22 aspect-square w-40 h-40 flex items-center justify-center rounded-full absolute'>
        <Image src="/globes.gif" alt="globe" width={50} height={50} className="rounded-full  mix-blend-darken animate-rotate" />
      </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  )
}

export default About
