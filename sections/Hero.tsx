import CurvedLoop from '@/components/ui/HeroLoopName'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundSize: "contain", backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-screen relative bg-gray/98">
      <div className="absolute w-22 h-screen left-0 bg-gray" />
      <div>

      </div>
        <CurvedLoop
          marqueeText="Mussadiq Khan ✦"
          speed={2}
          curveAmount={0}
          direction="right"
          interactive
        />
    </section>
  )
}

export default Hero
