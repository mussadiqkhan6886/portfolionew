'use client';

import { projects } from '@/constants'
import React, { useEffect, useMemo, useState } from 'react'
import {  motion, Variants } from 'framer-motion';
import ProjectShowCaseMobile from './ProjectShowCaseMobile';
import useCustomCursor from '@/lib/hooks/useCustomCursor';
import CustomCursor from './CustomCursor';


const fadeUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
} as Variants

const ProjectsAll = ({ option }: { option: string }) => { 
  const [smaller, setSmaller] = useState(false)

  const {containerRef, cursorRef, activeId, isHovering, handleMouseMove, handleEnter, handleLeave} = useCustomCursor()

  useEffect(() => {
    const checkSize = () => {
      setSmaller(window.innerWidth <= 750)
    }

    checkSize()

    window.addEventListener("resize", checkSize)
    return  () =>  window.removeEventListener("resize", checkSize)
  }, [])


  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeId) ?? null,
    [activeId]
  );


   return option === "grid" || smaller ? 
   <motion.section variants={fadeUp} initial="initial" animate="animate" className="my-20">
     <ProjectShowCaseMobile smaller={smaller} work={true} />
   </motion.section>
        :  (
        <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="relative my-13 w-full"
    >
      <CustomCursor top={"left-[-20%]"} left={"top-[-14%]"} activeProject={activeProject} cursorRef={cursorRef} isHovering={isHovering} />

      <motion.table variants={fadeUp} initial="initial" animate="animate" className="w-full border-collapse text-left table-fixed">
        <thead>
            <tr className="border-b border-border/60 ">
                <th className="py-10 text-xs font-medium tracking-tight text-gray uppercase w-[35%]">CLIENT</th>
                <th className="py-10 text-xs font-medium tracking-tight text-gray uppercase w-[20%]">LOCATION</th>
                <th className="py-10 text-xs font-medium tracking-tight text-gray uppercase w-[35%]">SERVICES</th>
                <th className="py-10 text-xs font-medium tracking-tight text-gray uppercase w-[25%]">ROLE</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
            {projects.map((item) => (
            <tr
                key={item.id}
                onMouseEnter={() => handleEnter(item.id)}
                className="px-3 text-black hover:px-0 duration-300 transition-all"
            >
                <td className="py-9 pr-4 text-4xl capitalize tracking-tight">
                    {item.title}
                </td>

                <td className="py-9 pr-4  capitalize">
                {item.location}
                </td>

                <td className="py-9 pr-4   capitalize">
                {item.service}
                </td>

                <td className="py-9 capitalize ">
                {item.role}
                </td>
            </tr>
            ))}
        </tbody>
      </motion.table>
    </section>
      )
    
};

export default ProjectsAll;