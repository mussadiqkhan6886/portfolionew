'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'
import { HiArrowDownRight } from 'react-icons/hi2'

const HeroDetail = () => {

    const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, -220]);
  const y2 = useTransform(scrollY, [0, 800], [0, -280]);


  return (
    <motion.div style={{y}} className="absolute flex justify-between w-full left-1/2 bottom-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 h-32 sm:h-37 items-center">
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
        <div className="flex flex-col ml-10 mb-22 h-full justify-between pr-4 md:pr-22">
            <motion.div style={{y:y2}}>
                <HiArrowDownRight size={22} color='white' />
            </motion.div>
          <h2 className="text-white text-3xl sm:text-[32px] leading-tight tracking-tight">Freelance <br /> Designer & Developer</h2>
        </div>
      </motion.div>
  )
}

export default HeroDetail
