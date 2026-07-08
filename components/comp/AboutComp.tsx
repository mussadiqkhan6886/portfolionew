"use client"; 

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatEffect from '../ui/FloatEffect';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
  let ctx = gsap.context(() => {

    gsap.fromTo(imageRef.current, 
      { yPercent: -15 },
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
      <section ref={containerRef} className="flex flex-col lg:flex-row gap-8 md:px-13 py-14 md:py-26 relative items-start">
        
        <FloatEffect output={[-15, 100]}  className="w-full lg:w-99 mb-6 lg:mb-0 space-y-5 mr-5">
          <p >
            I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
          </p>
          <p className="text-gray">Always Exploring...</p>
        </FloatEffect>

        <div 
          ref={imageBoxRef} 
          className="relative w-full h-[115vh] overflow-hidden "
        >
          <Image 
            ref={imageRef}
            src="/about1.jpg" 
            alt="about image" 
            fill
            className="absolute top-0 left-0 w-full h-[130%] object-cover object-center" 
          />
        </div>

      </section>
  );
};

export default About;