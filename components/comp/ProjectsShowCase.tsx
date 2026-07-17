"use client";

import { projects } from "@/constants";
import TransitionLink from "./TransitionLink";
import { twMerge } from "tailwind-merge";
import useCustomCursor from "@/lib/hooks/useCustomCursor";
import CustomCursor from "./CustomCursor";

export const THUMB_W = 380;
export const THUMB_H = 340;

export default function ProjectsShowcase({className}: {className?: string}) {
  
  const {containerRef, cursorRef, activeId, setActiveId, isHovering, setIsHovering, handleMouseMove, handleEnter, handleLeave} = useCustomCursor()

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={twMerge("relative max-w-240 mx-auto px-5 lg:px-0 w-full text-black", className)}
    >
      <h3 className="text-gray uppercase text-sm border-b border-border pb-10">Recent Work</h3>
      {projects.slice(0, 4).map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => handleEnter(project.id)}
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
      <CustomCursor top={"left-[-20%]"} left={"top-[-20%]"} activeProject={activeProject} cursorRef={cursorRef} isHovering={isHovering} />

      <div onMouseEnter={() => {
        setIsHovering(false) 
        setActiveId(null)}} 
        className="py-16">
      <TransitionLink href={"/work"} className="py-5 block hover:bg-ctr-dark duration-300 transition-all text-center max-w-40 mx-auto rounded-full border border-border hover:text-white">More work</TransitionLink>
      </div>
    </section>
  );
}