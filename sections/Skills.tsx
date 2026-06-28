'use client';

import { skillsSet } from '@/constants'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto mb-5 px-6 xl:px-0">
      <h3 className="text-gray uppercase text-sm border-b border-border pb-8">Skills Set</h3>
      <div className="py-8 flex flex-col gap-6">
        {skillsSet.map((item, i) => (
          <div className="flex flex-col lg:flex-row gap-4 border-b border-border pb-6" key={item.category}>
            <motion.div
              initial={{y: 100}}
              whileInView={{y: 0}}
              transition={{
                duration: 0.7,
                delay: i * 0.1
              }}
              viewport={{
                once: true,
              }}
              className="flex-2">
              <h4 className="font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-10">{item.category}</h4>
            </motion.div>
            <div className="flex flex-3 gap-6 md:gap-8 flex-wrap">
              {item.skills.map((skill, ind) => (
                <motion.div
                  initial={{x: 100}}
                  whileInView={{x: 0}}
                  transition={{
                    duration: 0.9,
                    delay: ind * 0.1
                  }}
                  viewport={{
                    once: true,
                  }}
                className="flex gap-2 items-center overflow-hidden" key={skill.name}>
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={40}
                    height={40}
                    className={`w-8 h-8 md:h-10 md:w-10 object-contain ${skill.name.includes("Next.js") && "invert"}`}
                  />
                  <h5 className="text-lg md:text-xl font-light">{skill.name}</h5>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
