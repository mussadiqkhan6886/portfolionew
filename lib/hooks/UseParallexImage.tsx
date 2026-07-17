import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UseParallexImage = (startingY: number, endingY:number) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageBoxRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
    let ctx = gsap.context(() => {

        gsap.fromTo(imageRef.current, 
        { yPercent: startingY },
        {
            yPercent: endingY,
            scrollTrigger: {
            trigger: imageBoxRef.current,
            scrub: true,
            }
        }
        );

    }, containerRef); 

    return () => ctx.revert(); 
    }, []);

  return {containerRef, imageBoxRef, imageRef}
}

export default UseParallexImage
