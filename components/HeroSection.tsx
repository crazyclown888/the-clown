'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CinematicBackground from '@/components/CinematicBackground';
import FloatingClown from '@/components/FloatingClown';
import HeroButtons, { ScrollIndicator } from '@/components/HeroButtons';

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background Effects */}
      <CinematicBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12 px-4 w-full">
        {/* Floating Clown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-md md:max-w-2xl"
        >
          <FloatingClown mouseX={mousePos.x} mouseY={mousePos.y} />
        </motion.div>

        {/* Hero Title */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-shadow">
            <span className="bg-gradient-to-r from-primary via-gold to-accent-red bg-clip-text text-transparent">
              THE CLOWN
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <p className="text-xl md:text-3xl lg:text-4xl text-primary/90 font-light tracking-wide">
            The Market Is The Biggest Joke
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <HeroButtons onExplore={onExplore} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </div>
  );
}
