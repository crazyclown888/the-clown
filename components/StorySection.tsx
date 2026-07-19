'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentences = [
    'They laughed.',
    'They sold.',
    'We bought.',
    'The Clown Won.',
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-dark flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          {sentences.map((sentence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              viewport={{ once: false, margin: '-100px' }}
              className="mb-24 md:mb-32"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase text-center leading-tight">
                {index === 0 && (
                  <span className="text-primary">{sentence}</span>
                )}
                {index === 1 && (
                  <span className="text-accent-red">{sentence}</span>
                )}
                {index === 2 && (
                  <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                    {sentence}
                  </span>
                )}
                {index === 3 && (
                  <span className="bg-gradient-to-r from-gold via-accent-red to-primary bg-clip-text text-transparent animate-pulse">
                    {sentence}
                  </span>
                )}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
