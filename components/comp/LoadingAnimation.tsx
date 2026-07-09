'use client';

import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center gap-1.5 mb-3 md:mb-2">
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/80"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.8s',
          }}
        />
      ))}
    </div>
  );
};

export default LoadingAnimation;