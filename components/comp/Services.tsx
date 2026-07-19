'use client';

import Image from 'next/image'
import CircularText from '../ui/CircularText';
import UseParallexImage from '@/lib/hooks/UseParallexImage';

const Services = () => {
    const {containerRef, imageBoxRef, imageRef} = UseParallexImage(-51, 15)
   
  return (
    <section ref={containerRef} className="pt-40 lg:pt-50 pb-30 flex flex-col-reverse md:flex-row  gap-14 lg:gap-20 lg:px-12">
        <div 
            ref={imageBoxRef} 
            className="relative w-full h-screen overflow-hidden "
            >
            <Image 
                ref={imageRef}
                src="/projectassets/abouts2.webp" 
                alt="about 2 image" 
                fill
                className="absolute top-0 left-0 w-full h-[130%] object-cover object-center" 
            />
        </div>
        <div className="md:w-[70%] lg:pt-20">
            <CircularText
                text="AVAILABLE FOR WORK • "
                onHover="pause"
                spinDuration={20}
                className="custom-class"
            />
            <h4 className="text-4xl lg:text-[44px] leading-none font-medium tracking-tight mb-10">Production Experience</h4>
            <p className="font-[450]">Over 1+ year of building production-ready web applications for businesses across Pakistan, Saudi Arabia, and the UK, delivering fast, scalable, and high-performance digital solutions.</p>
        </div>
      </section>
  )
}

export default Services
