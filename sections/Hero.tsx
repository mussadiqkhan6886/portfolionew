import CurvedLoop, { ScrollVelocity } from '@/components/ui/HeroLoopName'
import Image from 'next/image'
import React from 'react'
import { HiArrowDownRight } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundSize: "contain", backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-screen relative bg-gray/98 overflow-hidden">
      <div className="absolute w-22 h-screen left-0 bg-gray" />
      <div className="absolute flex justify-between w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-37 items-center">
        <div className="bg-text text-white flex p-4 rounded-r-full items-center justify-between w-60">
          <div className="w-[50%] ml-7">
            <p className='leading-[1.2] font-medium tracking-tighter'>Located <br /> in the <br /> Pakistan</p>
          </div>
          <div className="w-[30%] flex justify-end">
            <div className='bg-gray aspect-square w-full flex items-center justify-center rounded-full '>
              <Image src="/globes.gif" alt="globe" width={42} height={42} className="rounded-full  mix-blend-darken animate-rotate" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-16 h-full justify-between pr-22">
          <HiArrowDownRight size={24} color='white' />
          <h2 className="text-white text-[32px] leading-tight tracking-tight">Freelance <br /> Designer & Developer</h2>
        </div>
      </div>
  
      <ScrollVelocity
        texts={['Mussadiq Khan ✦']} 
        velocity={75}
        className="custom-scroll-text"
        numCopies={4}
        damping={20}
        stiffness={800}
      />
    </section>
  )
}

export default Hero
