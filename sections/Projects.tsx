"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import gsap from "gsap";
import { projects } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import MagnetText from "@/components/ui/MagnetEffect";

const THUMB_W = 360;
const THUMB_H = 340;

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
      className="relative max-w-240 mx-auto w-full text-black"
    >
      <h3 className="text-gray uppercase text-xs border-b border-border pb-10">Recent Work</h3>
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => {
            setIsHovering(true);
            setActiveId(project.id);
          }}
          className={`relative flex cursor-pointer items-center justify-between ${project.id === activeId ? "px-4" : "px-0"} border-b border-border transition-all duration-300 h-42`}
        >
          <h3 className={`text-2xl tracking-tight transition-colors duration-300 ${activeId !== project.id ? "text-black" : "text-gray"} sm:text-4xl md:text-8xl capitalize`}>
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
              className="relative overflow-hidden bg-border shadow-2xl shadow-black/50"
            >
              {/* Crossfading image layer */}
              <AnimatePresence>
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover flex items-center justify-center"
                >
                  <Image src={activeProject.thumbnail}
                  alt={activeProject.title} width={300} height={250} className="object-cover object-center" />
                </motion.div>
              </AnimatePresence>

              <Link
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <MagnetText text="View" className="pointer-events-auto rounded-full bg-ctr w-18 h-18 p-2 text-sm font-medium text-white text-center items-center justify-center transition-transform duration-300" strength={10} dot={"no"} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}