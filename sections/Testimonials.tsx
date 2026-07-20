"use client";

import React, { useState } from 'react';
import { allReviews } from '@/constants';
import Image from 'next/image';

const duplicatedReviews = [...allReviews, ...allReviews];

const ReviewCard = ({ review }: { review: (typeof allReviews)[0] }) => (
  <div className="p-6 bg-black border border-zinc-900 rounded-none mb-6 w-full group hover:border-white transition-all duration-300">
    <p className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed text-sm mb-6">
      "{review.review}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
      <div className="w-8 h-8 rounded-full overflow-hidden border bg-gray border-zinc-800">
        {review.image ? <Image 
          src={review.image} 
          alt={`${review.name} image`} 
          width={50} 
          height={50}  
          loading="lazy"
          className="object-contain w-full h-full"
        /> :
          <p className='uppercase text-center text-xl font-bold text-black'>{review.name[0]}</p>
        }
      </div>
      <div>
        <h4 className="font-medium text-white/90 text-xs uppercase tracking-wider">{review.name}</h4>
        <p className="text-[10px] text-gray tracking-wide uppercase mt-0.5">Verified Client</p>
      </div>
    </div>
  </div>
);

const ReviewColumn = ({ reviews, duration, reverse = false }: {
  reviews: typeof allReviews,
  duration: number,
  reverse?: boolean
}) => {
  
  const [pause, setPause] = useState(false)

  return(
  <div
    data-active="false"
    onMouseEnter={() => setPause(true)}
    onMouseLeave={() => setPause(false)}
    className={`flex flex-col ${
      reverse ? "animate-scroll-up" : "animate-scroll-down"
    }`}
     style={{
    animationPlayState: pause ? "paused" : "running",
    animationDuration: `${duration}s`,
  }}
  >
    {reviews.map((rev, i) => (
      <ReviewCard key={i} review={rev} />
    ))}
  </div>
);}

const Testimonials = () => {
  return (
    <section className="py-18 bg-black overflow-hidden relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-gray block mb-2">20+ Happy Clients</span>
            <h3 className="text-4xl font-light tracking-tighter text-white uppercase">
              Client Reviews
            </h3>
        </div>

        {/* The Scrolling Stage */}
        <div className="relative h-[650px] overflow-hidden">
          
          {/* Subtle Monochromatic Fade Masks */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            
            {/* Column 1 - Downwards standard */}
            <div className="relative overflow-hidden h-full">
              <ReviewColumn reviews={duplicatedReviews} duration={35} />
            </div>

            {/* Column 2 - Reverse Upwards movement to create visual juxtaposition */}
            <div className="relative overflow-hidden h-full hidden md:block">
              <ReviewColumn reviews={duplicatedReviews} duration={45} reverse={true} />
            </div>

            {/* Column 3 - Faster Downwards */}
            <div className="relative overflow-hidden h-full hidden lg:block">
              <ReviewColumn reviews={duplicatedReviews} duration={28} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;