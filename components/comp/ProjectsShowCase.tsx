"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import gsap from "gsap";
import { projects } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import MagnetText from "@/components/ui/MagnetEffect";
import TransitionLink from "./TransitionLink";

export const THUMB_W = 380;
export const THUMB_H = 340;

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

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
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    xTo.current?.(x);
    yTo.current?.(y);
  };

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovering(false);
        setActiveId(null);
      }}
      className="relative max-w-240 mx-auto px-5 lg:px-0 w-full text-black"
    >
      <h3 className="text-gray uppercase text-sm border-b border-border pb-10">Recent Work</h3>
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => {
            setIsHovering(true);
            setActiveId(project.id);
          }}
          className={`relative flex cursor-pointer items-center justify-between ${project.id === activeId ? "px-4" : "px-0"} border-b border-border transition-all duration-300 h-40`}
        >
          <h3 className={`text-2xl tracking-tight transition-colors duration-300 ${activeId !== project.id ? "text-black" : "text-gray"} sm:text-4xl md:text-7xl capitalize`}>
            {project.title}
          </h3>
          <p className={`transition-colors capitalize duration-300 ${activeId !== project.id ? "text-black" : "text-gray"}`}>
            {project.role}
          </p>
        </div>
      ))}

      {/* Cursor-following magnet thumbnail */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute left-[-20%] top-[-20%] z-50"
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
              className="relative overflow-hidden "
            >
              {/* Crossfading image layer */}
              <AnimatePresence>
                <motion.div
                  key={activeProject.id}
                  initial={{ y:300 }}
                  animate={{ y: 0 }}
                  exit={{ y:300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover flex items-center justify-center"
                >
                  <Image src={activeProject.thumbnail}
                  alt={activeProject.title} width={360} height={300} className="object-cover w-full h-full object-center" />
                </motion.div>
              </AnimatePresence>

              <TransitionLink
                href={`/work/${activeProject.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <MagnetText text="View" className="pointer-events-auto rounded-full bg-ctr w-18 h-18 p-2 text-sm font-medium text-white text-center items-center justify-center transition-transform duration-300" strength={7} dot={"no"} />
              </TransitionLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div onMouseEnter={() => {
        setIsHovering(false) 
        setActiveId(null)}} className="py-16">

      <TransitionLink href={"/work"} className="py-5 block hover:bg-ctr-dark duration-300 transition-all text-center max-w-40 mx-auto rounded-full border border-border hover:text-white">More work</TransitionLink>
      </div>
    </section>
  );
}