'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

interface HeroButtonsProps {
  onExplore?: () => void;
}

export default function HeroButtons({ onExplore }: HeroButtonsProps) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
    >
      {/* Explore Button */}
      <motion.button
        custom={0}
        variants={buttonVariants}
        onClick={onExplore}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 md:px-12 py-3 md:py-4 bg-primary text-dark font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
      >
        {/* Background shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
        <span className="relative flex items-center gap-2">
          Explore
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </span>
      </motion.button>

      {/* Buy Now Button */}
      <motion.a
        custom={1}
        variants={buttonVariants}
        href="https://pump.fun"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 md:px-12 py-3 md:py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30"
      >
        {/* Border gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold to-accent-red opacity-0 group-hover:opacity-50 transition-all duration-300" style={{ padding: '2px' }} />
        <span className="relative flex items-center gap-2">
          Buy Now
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.a>

      {/* Community Button */}
      <motion.a
        custom={2}
        variants={buttonVariants}
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 md:px-12 py-3 md:py-4 border-2 border-accent-red text-accent-red font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:bg-accent-red/10 hover:shadow-lg hover:shadow-accent-red/30"
      >
        <span className="relative flex items-center gap-2">
          Join Community
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.a>
    </motion.div>
  );
}
