'use client';

import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import React, { ReactNode, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const FloatEffect = ({
  children,
  className,
  range = [0, 1],
  output = [80, -80],
}: {
  children: ReactNode;
  className?: string;
  range?: [number, number];
  output?: [number, number];
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, range, output);

  return (
    <motion.div ref={ref} className={twMerge(className)} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default FloatEffect;