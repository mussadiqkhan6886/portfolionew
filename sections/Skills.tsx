'use client';

import { skillsSet } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const CUBIC_EASE = [0.215, 0.61, 0.355, 1] as const;

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04, // Perfectly timed sequential cascading effect
      delayChildren: 0.04,
    }
  }
};

// Smooth masked reveal variant rule
const maskRevealVariants = {
  initial: { y: "115%" },
  animate: { 
    y: "0%", 
    transition: { 
      duration: 0.70, 
      ease: CUBIC_EASE 
    } 
  }
};

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto my-5 px-6 xl:px-0 select-none">
      <h3 className="text-gray uppercase text-sm border-b border-border pb-8">Skills Set</h3>
      
      <div className="py-8 flex flex-col gap-10">
        {skillsSet.map((item) => (
          <motion.div 
            key={item.category}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-10%" }} // Triggers efficiently once per row
            className="flex flex-col lg:flex-row gap-6 border-b border-border pb-8 items-start"
          >
            <div className="flex-2 overflow-hidden py-1" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <motion.h4 
                variants={maskRevealVariants}
                className="font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-none will-change-transform"
              >
                {item.category}
              </motion.h4>
            </div>

            <div className="flex flex-3 gap-x-8 gap-y-5 flex-wrap items-center">
              {item.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="overflow-hidden py-1.5 px-0.5 inline-flex items-center justify-center"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                >
                  <motion.div
                    variants={maskRevealVariants}
                    className="flex gap-2.5 items-center will-change-transform"
                  >
                    <div className="relative h-6 w-6 sm:w-8 sm:h-8 md:h-9 md:w-9 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={36}
                        height={36}
                        className={`object-contain transition-transform duration-300 hover:scale-110 ${
                          skill.name.includes("Next.js") && "invert"
                        }`}
                      />
                    </div>
                    <h5 className="text-base sm:text-lg md:text-xl font-light tracking-wide">
                      {skill.name}
                    </h5>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills