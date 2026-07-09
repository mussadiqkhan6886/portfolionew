'use client';

import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import CircularText from '../ui/CircularText';

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageBoxRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
    let ctx = gsap.context(() => {

    gsap.fromTo(imageRef.current, 
        { yPercent: -51 },
        {
        yPercent: 15,
        scrollTrigger: {
            trigger: imageBoxRef.current,
            scrub: true,
        }
        }
    );

    }, containerRef); 

        return () => ctx.revert(); 
    }, []);

  return (
    <section ref={containerRef} className="pt-40 lg:pt-50 pb-30 flex flex-col-reverse md:flex-row  gap-14 lg:gap-20 lg:px-12">
        <div 
            ref={imageBoxRef} 
            className="relative w-full h-screen overflow-hidden "
            >
            <Image 
                ref={imageRef}
                src="/about2.jpg" 
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
