'use client';

import { motion } from 'framer-motion';
import { useMouse } from '@/hooks/useAnimations';

export default function FloatingClown() {
  const mouse = useMouse();

  return (
    <motion.div
      className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center"
      animate={{
        x: (mouse.current.x - window.innerWidth / 2) * 0.05,
        y: (mouse.current.y - window.innerHeight / 2) * 0.05,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(198, 31, 31, 0.5), transparent)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main clown emoji */}
      <motion.div
        className="text-9xl md:text-9xl drop-shadow-2xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🤡
      </motion.div>

      {/* Particles around clown */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold rounded-full"
          animate={{
            x: Math.cos((i * Math.PI) / 3) * 100 + (Math.cos((i * Math.PI) / 3) * 20 * Math.sin(Date.now() / 1000)),
            y: Math.sin((i * Math.PI) / 3) * 100 + (Math.sin((i * Math.PI) / 3) * 20 * Math.cos(Date.now() / 1000)),
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </motion.div>
  );
}
