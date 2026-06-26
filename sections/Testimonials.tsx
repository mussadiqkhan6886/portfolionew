"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { allReviews } from '@/constants';
import Image from 'next/image';

// Duplicate once cleanly for a seamless transform loop
const duplicatedReviews = [...allReviews, ...allReviews];

const ReviewCard = ({ review }: { review: (typeof allReviews)[0] }) => (
  <div className="p-6 bg-black border border-zinc-900 rounded-none mb-6 w-full group hover:border-white transition-colors duration-300">
    <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 leading-relaxed text-sm mb-6">
      "{review.review}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
      <div className="w-8 h-8 rounded-full overflow-hidden grayscale contract-125 border border-zinc-800">
        <Image 
          src={review.image} 
          alt={`${review.name} image`} 
          width={32} 
          height={32}  
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h4 className="font-medium text-white text-xs uppercase tracking-wider">{review.name}</h4>
        <p className="text-[10px] text-zinc-600 tracking-wide uppercase mt-0.5">Verified Client</p>
      </div>
    </div>
  </div>
);

const ReviewColumn = ({ reviews, duration, reverse = false }: { reviews: typeof allReviews, duration: number, reverse?: boolean }) => (
  <motion.div 
    initial={{ y: reverse ? "-50%" : "0%" }}
    animate={{ y: reverse ? "0%" : "-50%" }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex flex-col data-[active=true]:pause"
  >
    {reviews.map((rev, i) => (
      <ReviewCard key={i} review={rev} />
    ))}
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Layout: Ultra Minimalist Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-600 block mb-3">03 / RETROSPECTIVE</span>
            <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-white uppercase">
              Client Reviews
            </h3>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
            Selected feedback from collaborations, detailing execution, performance optimizations, and design systems.
          </p>
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