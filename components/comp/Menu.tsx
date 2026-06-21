'use client';

import React from 'react'
import { FiX } from 'react-icons/fi'
import MagnetText from '../ui/MagnetEffect';
import Link from 'next/link';
import { menu, socials } from '@/constants';

interface Params {
    close: (x: boolean) => void
}

const Menu = ({close}: Params) => {
  return (
    <aside className="bg-text w-screen h-screen z-50 p-8 inset-0 absolute text-white">
      <div className="flex items-end justify-end">
        <button onClick={() => close(false)} >
            <MagnetText mobile={false} dot={"no"} text={<FiX size={32} color={"white"} /> } strength={0.5} className=" w-18 h-18 rounded-full bg-ctr-dark justify-center items-center " />
        </button>
      </div>
      <div className="mt-4 mb-27"> 
        <div>
            <p className={` text-gray uppercase text-xs font-bold pb-6 border-b border-gray/80`}>Navigation</p>
        </div>
        <nav>
            <ul className="flex gap-4 flex-col">
                <li><Link href="/"><MagnetText strength={0.1} className="w-full text-5xl pt-8" dot={"right"} mobile={true} text={"Home"} /></Link></li>
                {menu.map(item => (
                    <li key={item.link}><Link href={item.link}><MagnetText strength={0.1} className="w-full text-5xl" mobile={true} dot={"right"} text={item.title} /></Link></li>
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
    </aside>
  )
}

export default Menu
