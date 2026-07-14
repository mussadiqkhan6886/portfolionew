'use client';

import React from 'react'
import TransitionLink from './TransitionLink'
import Image from 'next/image'
import MagnetText from '../ui/MagnetEffect'
import { useRef, useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import {gsap} from "gsap"

interface Props {
    name: string
    link: string
    image: string
}

const NextProj = ({name, link, image}: Props) => {

    const [isHovering, setIsHovering] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);

    useEffect(() => {
        if (!cursorRef.current) return;
        xTo.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.55,
        ease: "power3.out",
        });
        yTo.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.55,
        ease: "power3.out",
        });
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        xTo.current?.(x);
        yTo.current?.(y);
    };

  return (
    <div className="bg-text pt-10 text-white">
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
            max-w-sm mx-auto
            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            translate-y-[80%]
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
