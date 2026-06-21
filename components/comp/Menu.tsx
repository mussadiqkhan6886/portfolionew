'use client';

import React from 'react'
import MagnetText from '../ui/MagnetEffect';
import Link from 'next/link';
import { menu, socials } from '@/constants';
import {easeInOut, motion} from "framer-motion"


const Menu = ({close}: {close: (x: boolean) => void}) => {
  return (
    <aside onClick={() => close(false)} className="w-screen h-screen bg-text/10 absolute inset-0 cursor-pointer">
    <motion.div initial={{
        x: 1000,
        borderRadius: "600px",
      }}
      animate={{
        x: 0,
        borderRadius: "0px",
      }}
      exit={{
        x: 1000,
        borderRadius: "600px",
      }}
      transition={{
        duration: 1,
        ease: easeInOut,
        type: "tween"
      }} className="bg-text max-w-130 w-full h-screen z-40 p-8 top-0 right-0 fixed text-white">
      <div className="my-24 h-[53%]"> 
        <div>
            <p className={` text-gray uppercase text-xs font-bold pb-4 sm:pb-6 border-b border-gray/80`}>Navigation</p>
        </div>
        <nav>
            <ul className="flex gap-4 flex-col">
                <motion.li 
                initial={{
                  x: 120,
                  
                }}
                animate={{
                  x: 0,
                  
                }}
                exit={{
                  x: 120,
                  
                }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                  type: "tween",
                  delay: 0.1
                }}
                ><Link href="/"><MagnetText strength={0.1} className="w-full text-4xl sm:text-5xl pt-8" dot={"right"} mobile={true} text={"Home"} /></Link></motion.li>
                {menu.map(item => (
                    <motion.li initial={{
                  x: 120,
                  
                }}
                animate={{
                  x: 0,
                  
                }}
                exit={{
                  x: 120,
                  
                }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                  type: "tween",
                  delay: item.d
                }} key={item.link}><Link href={item.link}><MagnetText strength={0.1} className="w-full text-4xl sm:text-5xl" mobile={true} dot={"right"} text={item.title} /></Link></motion.li>
                ))}
            </ul>
        </nav>
      </div>
      <div >
        <p className=" text-gray uppercase text-xs font-bold pt-6 pb-4 border-t border-gray/80">SOCIALS</p>
        <div>
            <ul className="flex gap-6">
            {socials.map(item => (
                <li key={item.link}><Link href={item.link} target='_blank'><MagnetText text={item.title} mobile={false} dot={"down"} strength={0.2} /></Link></li>
            ))}
            </ul>
        </div>
      </div>
    </motion.div>
    </aside>
  )
}

export default Menu
