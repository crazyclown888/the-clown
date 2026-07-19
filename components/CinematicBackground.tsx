'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from '@/hooks/useAnimations';

export default function CinematicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useMouse();

  useEffect(() => {
    const handleMouseMove = () => {
      if (!containerRef.current) return;

      const spotlights = containerRef.current.querySelectorAll('.spotlight');
      spotlights.forEach((spotlight) => {
        const rect = spotlight.getBoundingClientRect();
        const x = mouseRef.current.x - rect.left - rect.width / 2;
        const y = mouseRef.current.y - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        (spotlight as HTMLElement).style.opacity = Math.max(
          0,
          1 - distance / 500
        ).toString();
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseRef]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Animated Fog */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/5 to-dark pointer-events-none"
      />

      {/* Spotlights */}
      <motion.div
        className="spotlight absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(197, 31, 31, 0.4) 0%, rgba(197, 31, 31, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        className="spotlight absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.2) 0%, rgba(201, 162, 39, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </div>
  );
}
