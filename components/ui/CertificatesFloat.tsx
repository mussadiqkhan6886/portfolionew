"use client";

import { cert } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky -top-4 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20 + 20}px)`,
        }}
        className="relative flex h-60 w-90 min-[450px]:h-65 min-[450]:w-115 sm:h-100 sm:w-150 md:h-130 md:w-180 origin-top flex-col overflow-hidden"
      >
        <Image fill src={src} alt={title} className="h-full w-full object-contain" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
      <div
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[30vh] md:pb-[40vh]"
      >
        {cert.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (cert.length - i - 1) * 0.1,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
  );
};

export { Skiper16, StickyCard_001 };