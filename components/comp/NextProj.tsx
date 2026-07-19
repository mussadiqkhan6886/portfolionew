'use client';

import React from 'react'
import TransitionLink from './TransitionLink'
import Image from 'next/image'
import MagnetText from '../ui/MagnetEffect'
import { AnimatePresence, easeInOut, motion } from "motion/react";
import useCustomCursor from '@/lib/hooks/useCustomCursor';

interface Props {
    name: string
    link: string
    image: string
}

const NextProj = ({name, link, image}: Props) => {

    
  const {containerRef, cursorRef, isHovering, setIsHovering, handleMouseMove} = useCustomCursor()

  return (
    <div className="bg-text pt-10 pb-3 md:pb-0 text-white">
        <motion.div onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)} ref={containerRef}
      onMouseMove={handleMouseMove} className="max-w-4xl group mx-auto text-center relative">
        <TransitionLink href={`/work/${link}`}>
        <p className="text-sm uppercase">Next Case</p>

        <h4 className="text-6xl md:text-7xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-4 font-semibold group-hover:text-gray my-20 transition-all duration-300">{name}</h4>

        <div className=" mb-16 overflow-hidden h-[220px] border-b border-gray/40">
            <Image
            src={image}
            alt="next project image"
            loading="lazy"
            width={1200}
            height={800}
            className="
            w-full
            h-auto
            max-w-xs sm:max-w-sm mx-auto
            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            translate-y-[70%]
            group-hover:translate-y-[35%]
            "
        />
            
        </div>
        <div
          ref={cursorRef}
          className="hidden md:block pointer-events-none absolute -left-13 -top-12 z-50"
        >
          <AnimatePresence>
            {isHovering && (
              <motion.div
                key="thumb"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.35, ease: easeInOut }}
                style={{
                  width: 130,
                  height: 130,
                  transform: "translate(-50%, -50%)",
                }}
                className="relative overflow-hidden "
              >
  
                <button
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <MagnetText text={"Next Case"} className="pointer-events-auto rounded-full bg-ctr w-28 h-28 p-2 text-sm font-medium text-white text-center items-center justify-center transition-transform duration-300" strength={0.6} dot={"no"} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        </TransitionLink>
       
        </motion.div>
        <TransitionLink href={"/work"} >
            <MagnetText text="All work" dot="no" strength={0.6} className="py-5 block hover:bg-ctr-dark  text-center max-w-34 mx-auto rounded-full border border-gray/40 " />
        </TransitionLink>
    </div>
  )
}

export default NextProj
