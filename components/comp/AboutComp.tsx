"use client"; 

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    

    gsap.fromTo(imageRef.current, 
      { yPercent: -15 }, // Starts shifted up inside the overflow-hidden box
      {
        yPercent: 15,    // Ends shifted down
        ease: "none",
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top bottom", // Starts when the top of the box enters the bottom of screen
          end: "bottom top",   // Ends when the bottom of the box leaves the top of screen
          scrub: true,        // Direct sync with scroll
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
      <section ref={containerRef} className="flex flex-col md:flex-row gap-8 py-26 relative items-start">
        
        <div ref={arrowRef} className="absolute -left-30 z-10">
          <FiArrowRight size={32} />
        </div>

        <div className="w-full md:w-82 space-y-5 mr-5">
          <p className=" text-black leading-tight">
            I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
          </p>
          <p className="text-gray">Always Exploring...</p>
        </div>

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