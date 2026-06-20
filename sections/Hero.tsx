import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section style={{backgroundImage: `URL(${"/img3.png"})`, backgroundSize: "contain", backgroundPosition: "top", backgroundRepeat: "no-repeat"}} className="w-full h-screen relative bg-gray/98">
      <div className="absolute w-22 h-screen left-0 bg-gray" />
    </section>
  )
}

export default Hero
