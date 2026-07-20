import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from "gsap"

const useCustomCursor = () => {
    const containerRef = useRef<HTMLDivElement>(null);
      const cursorRef = useRef<HTMLDivElement>(null);
    
      const xTo = useRef<gsap.QuickToFunc | null>(null);
      const yTo = useRef<gsap.QuickToFunc | null>(null);
    
      const [activeId, setActiveId] = useState<string | null>(null);
      const [isHovering, setIsHovering] = useState(false);
    
      // Set up the magnetic-follow quickTo tweens once.
      useLayoutEffect(() => {
        if (!cursorRef.current) return;
        xTo.current = gsap.quickTo(cursorRef.current, "x", {
          duration: 0.55,
          ease: "power3.out",
        });
        yTo.current = gsap.quickTo(cursorRef.current, "y", {
          duration: 0.55,
          ease: "power3.out",
        });
      });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        xTo.current?.(x);
        yTo.current?.(y);
      };
      
      const handleEnter = (id: string) => {
          setIsHovering(true);
          setActiveId(id);
        };

        const handleLeave = () => {
          setIsHovering(false);
          setActiveId(null);
        };
          
      return {containerRef, cursorRef, activeId, setActiveId, isHovering, setIsHovering, handleMouseMove, handleEnter, handleLeave}
}

export default useCustomCursor
