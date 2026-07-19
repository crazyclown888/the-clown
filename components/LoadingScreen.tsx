'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark" />

      {/* Animated circles */}
      <motion.div className="relative w-32 h-32 md:w-48 md:h-48">
        {/* Outer circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Middle circle */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-transparent border-b-accent-red border-l-gold"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner circle */}
        <motion.div
          className="absolute inset-8 rounded-full border-4 border-transparent border-t-accent-red border-r-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center clown emoji */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          🤡
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-primary text-xl md:text-2xl font-bold uppercase tracking-widest mb-4">
          THE CLOWN IS LOADING
        </h2>
        <div className="flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
