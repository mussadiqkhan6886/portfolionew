import FloatEffect from '@/components/ui/FloatEffect'
import { ScrollVelocity } from '@/components/ui/HeroLoopName'
import Image from 'next/image'
import React from 'react'
import { HiArrowDownRight } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-dvh relative bg-gray/98 overflow-hidden bg-cover xl:bg-contain">
      <div className="absolute w-22 h-dvh left-0 bg-gray hidden lg:block" />
      <div className="absolute w-screen h-screen inset-0 bg-black/10" />
      <FloatEffect output={[10, -150]} className="absolute flex justify-between w-full left-1/2 bottom-0 sm:top-[57%] -translate-x-1/2 sm:-translate-y-1/2 h-32 sm:h-37 items-center">
        <div className="bg-text text-white hidden sm:flex p-4 rounded-r-full items-center justify-between w-60">
          <div className="w-[50%] ml-7">
            <p className='leading-[1.2] font-medium tracking-tighter'>Located <br /> in the <br /> Pakistan</p>
          </div>
          <div className="w-[30%] flex justify-end">
            <div className='bg-gray aspect-square w-full flex items-center justify-center rounded-full '>
              <Image src="/globes.gif" alt="globe" width={42} height={42} className="rounded-full  mix-blend-darken animate-rotate" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-10 mb-22 h-full justify-end pr-4 md:pr-22">
          <FloatEffect output={[0, -80]}>
            <HiArrowDownRight size={22} color='white' />
          </FloatEffect>
          <h2 className="text-white text-3xl sm:text-[32px] leading-tight tracking-tight">Freelance <br /> Designer & Developer</h2>
        </div>
      </FloatEffect>

      <ScrollVelocity
        texts={['Mussadiq Khan ✦']} 
        velocity={85}
        className="custom-scroll-text"
        numCopies={12}
        damping={100}
        stiffness={800}
      />
    </section>
  )
}

export default Hero
