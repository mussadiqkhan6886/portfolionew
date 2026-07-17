'use client';

import { projects } from '@/constants'
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap"
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { THUMB_H, THUMB_W } from './ProjectsShowCase';
import Image from 'next/image';
import TransitionLink from './TransitionLink';
import MagnetText from '../ui/MagnetEffect';
import ProjectShowCaseMobile from './ProjectShowCaseMobile';

const ProjectsAll = ({ option }: { option: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [smaller, setSmaller] = useState(false)
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setSmaller(window.innerWidth <= 750)
    }

    checkSize()

    window.addEventListener("resize", checkSize)
    return  () =>  window.removeEventListener("resize", checkSize)
  }, [])

  // Set up the magnetic-follow quickTo tweens once.
  useEffect(() => {
    if (!cursorRef.current) return;
    xTo.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.55,
      ease: "power3.out",
    });
    yTo.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.55,
      ease: "power3.out",
    });
  }, [option, smaller]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    xTo.current?.(x);
    yTo.current?.(y);
  };

  const activeProject = projects.find((p) => p.id === activeId) ?? null;


   return option === "grid" || smaller ? 
   <motion.section initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className="my-20">
     <ProjectShowCaseMobile smaller={smaller} work={true} />
   </motion.section>
        :  (
        <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovering(false);
        setActiveId(null);
      }}
      className="relative my-13 w-full"
    >
      <div
        ref={cursorRef}
        className="pointer-events-none absolute left-[-20%] top-[-14%] z-50"
      >
        <AnimatePresence>
          {isHovering && activeProject && (
            <motion.div
              key="thumb"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.35, ease: easeInOut }}
              style={{
                width: THUMB_W,
                height: THUMB_H,
                transform: "translate(-50%, -50%)",
              }}
              className="relative overflow-hidden"
            >
              {/* Crossfading image layer */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeProject.id}
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  exit={{ y: 300 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-cover flex items-center justify-center"
                >
                  <Image
                    src={activeProject.thumbnail}
                    alt={activeProject.title}
                    width={360}
                    height={300}
                    className="object-cover w-full h-full object-center"
                  />
                </motion.div>
              </AnimatePresence>

              <TransitionLink
                href={`/work/${activeProject.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <MagnetText
                  text="View"
                  className="pointer-events-auto rounded-full bg-ctr w-18 h-18 p-2 text-sm font-medium text-white text-center items-center justify-center "
                  strength={1}
                  dot={"no"}
                />
              </TransitionLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.table initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className="w-full border-collapse text-left table-fixed">
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
                onMouseEnter={() => {
                setIsHovering(true);
                setActiveId(item.id);
                }}
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