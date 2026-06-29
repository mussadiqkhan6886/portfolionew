import MagnetText from '@/components/ui/MagnetEffect'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

const Works = () => {
  return (
    <main className="max-w-5xl px-5 mx-auto">
      <section className='min-h-[70vh] gap-8 h-full flex flex-col justify-end'>
        <h1 className="text-[80px] leading-22 tracking-tight">Engineering the future of <br /> digital experience</h1>
        <div className="flex justify-between w-full items-center">
          <p className="max-w-xl text-gray-700">Collaborating with forward-thinking brands to build fast, scalable, and beautifully engineered web systems. We transform complex product strategies into intuitive, high-performance interfaces that scale effortlessly.</p>
          <div className='flex gap-4'>
            <button>
              <MagnetText dot="no" strength={0.6} className='transition-color duration-300 px-5 py-5 hover:text-white hover:bg-ctr rounded-full border border-border bg-white' text={<FiMenu size={28} /> } />
            </button>
            <button>
              <MagnetText dot="no" strength={0.6} className='transition-color duration-300 px-5 py-5 hover:text-white hover:bg-ctr rounded-full border border-border bg-white' text={<HiOutlineSquares2X2 size={28} /> } />
            </button>
          </div>
        </div>
      </section>
      <section className="h-full">

      </section>
    </main>
  )
}

export default Works
