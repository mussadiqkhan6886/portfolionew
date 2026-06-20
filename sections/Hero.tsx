import CurvedLoop from '@/components/ui/HeroLoopName'
import Image from 'next/image'
import React from 'react'
import { HiArrowDownRight, HiOutlineGlobeAlt } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundSize: "contain", backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-screen relative bg-gray/98">
      <div className="absolute w-22 h-screen left-0 bg-gray" />
      <div className="absolute flex justify-between w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-text text-white flex p-4 rounded-r-full items-center justify-between w-60">
          <div className="w-[50%] ml-7">
            <h2 className='leading-[1.2] font-medium tracking-tighter'>Located <br /> in the <br /> Pakistan</h2>
          </div>
          <div className="w-[30%] flex justify-end">
            <div className='bg-gray aspect-square w-full flex items-center justify-center rounded-full '>
              <Image src="/globes.gif" alt="globe" width={42} height={42} className="rounded-full  mix-blend-darken animate-rotate" />
            </div>
          </div>
        </div>
        <div>
          <HiArrowDownRight />
          <div>
            <h2>Freelance <br /> Designer & Developer</h2>
          </div>
        </div>
      </div>
        <CurvedLoop
          marqueeText="Mussadiq Khan ✦"
          speed={2}
          curveAmount={0}
          direction="right"
          interactive={false}
        />
    </section>
  )
}

export default Hero
