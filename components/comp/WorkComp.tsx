'use client';

import MagnetText from '@/components/ui/MagnetEffect'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

const WorkComp = () => {
    const [option, setOption] = useState<"col" | "grid">("col")

  return (
    <>
      <section className='min-h-[70vh] gap-8 h-full flex flex-col justify-end'>
        <h1 className="text-[80px] leading-22 tracking-tight">Engineering the future of <br /> digital experience</h1>
        <div className="flex justify-between w-full items-center">
          <p className="max-w-xl text-gray-700">Collaborating with forward-thinking brands to build fast, scalable, and beautifully engineered web systems. We transform complex product strategies into intuitive, high-performance interfaces that scale effortlessly.</p>
          <div className='flex gap-4'>
            <button onClick={() => setOption("col")}>
              <MagnetText dot="no" strength={0.6} className={`px-5 py-5 transition-color duration-300 rounded-full ${option === "col" ? "bg-black text-white border border-black" : "bg-white border border-border hover:bg-ctr hover:text-white"}`} text={<FiMenu size={28} /> } />
            </button>
            <button onClick={() => setOption("grid")}>
              <MagnetText dot="no" strength={0.6} className={`px-5 py-5 transition-color duration-300 rounded-full ${option === "grid" ? "bg-black text-white border border-black" : "bg-white border border-border hover:bg-ctr hover:text-white"}`} text={<HiOutlineSquares2X2 size={28} /> } />
            </button>
          </div>
        </div>
      </section>
      <section className="h-full">

      </section>
    </>
  )
}

export default WorkComp
