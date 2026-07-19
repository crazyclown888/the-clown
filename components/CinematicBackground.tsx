'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CinematicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const lights = containerRef.current?.querySelectorAll('[data-light]');
      lights?.forEach((light) => {
        const multiplier = parseFloat(light.getAttribute('data-multiplier') || '1');
        (light as HTMLElement).style.transform = `translate(${x * multiplier}px, ${y * multiplier}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark" />

      {/* Animated fog layers */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(245, 230, 200, 0.3), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        data-light
        data-multiplier="0.5"
      />

      {/* Red accent fog */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(198, 31, 31, 0.4), transparent)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        data-light
        data-multiplier="0.3"
      />

      {/* Gold accent fog */}
      <motion.div
        className="absolute top-1/3 right-0 w-1/2 h-1/2 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.3), transparent)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        data-light
        data-multiplier="0.4"
      />

      {/* Spotlight effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top spotlight */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(245, 230, 200, 0.5), transparent)',
            filter: 'blur(60px)',
            boxShadow: '0 0 100px rgba(245, 230, 200, 0.2)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center spotlight */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(198, 31, 31, 0.4), transparent)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.1, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
        backgroundImage: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.1"/%3E%3C/svg%3E)',
      }} />
    </div>
  );
}
