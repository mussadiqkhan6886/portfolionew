'use client';

import { motion } from 'framer-motion';

const FeaturesProj = ({ features }: { features: string[] }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-14">
      <h2 className="mb-6 text-lg sm:text-xl  text-gray uppercase">
        Key Features
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 14,
              delay: index * 0.07,
            }}
            className="group flex items-center gap-4 rounded-2xl border border-border p-5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray text-xs font-semibold text-white">
              {String(index + 1).padStart(2, '0')}
            </div>

            <p className="leading-7">{feature}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesProj;