'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading && progress >= 100) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-dark z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-12"
      >
        {/* Animated Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-32 h-32 md:w-40 md:h-40"
        >
          <div className="w-full h-full rounded-full border-4 border-transparent border-t-primary border-r-gold border-b-accent-red border-l-primary shadow-lg shadow-accent-red/50" />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-widest"
        >
          THE CLOWN
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-primary via-gold to-accent-red"
          />
        </div>

        {/* Progress Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary/70 text-sm uppercase tracking-wider"
        >
          {Math.round(Math.min(progress, 100))}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
