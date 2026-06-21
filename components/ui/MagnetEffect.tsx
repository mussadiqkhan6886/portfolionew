"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface MagnetTextProps {
  text: string | ReactNode;
  className?: string;
  strength?: number;
  dot?: "down" | "left" | "right" | "no";
  pathname?: string
  active?: boolean
}

export default function MagnetText({
  text,
  className = "",
  strength = 0.4,
  dot = "down",
  pathname,
  active
}: MagnetTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enter, setEnter] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) * strength;
    const offsetY = (e.clientY - centerY) * strength;

    setPosition({ x: offsetX, y: offsetY });
    setEnter(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setEnter(false);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className={twMerge(
        "inline-flex relative  cursor-pointer select-none",
        className
      )}
    >
      {text}
      {dot !== "no" && (
        <motion.span
          className={`absolute ${
            dot === "down"
              ? "-bottom-4 left-1/2 -translate-x-1/2"
              : dot === "left"
              ? "top-1/2 -translate-y-1/2 -left-5 -translate-x-1/2"
              : "top-1/2 -right-0 -translate-x-1/2"
          } block ${pathname === "/" ? "bg-white" : "bg-black"} rounded-full ${
            enter || active ? "opacity-100 w-1.5 h-1.5" : "opacity-0 h-0 w-0"
          } transition-all duration-300 ease-in-out`}
        />
      )}
    </motion.span>
  );
}