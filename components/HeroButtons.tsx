'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroButtonsProps {
  onExplore: () => void;
}

export default function HeroButtons({ onExplore }: HeroButtonsProps) {
  const buttons = [
    { label: 'BUY', href: 'https://pump.fun', color: 'bg-primary text-dark' },
    { label: 'CHART', href: 'https://dexscreener.com', color: 'border border-primary text-primary' },
    { label: 'TELEGRAM', href: 'https://t.me', color: 'border border-gold text-gold' },
    { label: 'X', href: 'https://twitter.com', color: 'border border-accent-red text-accent-red' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-4 justify-center mb-16 md:mb-24"
    >
      {buttons.map((button, index) => (
        <motion.a
          key={index}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-base transition-all duration-300 ${button.color} hover:shadow-lg hover:shadow-accent-red/50`}
        >
          {button.label}
        </motion.a>
      ))}
    </motion.div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex justify-center items-center gap-2 mt-12 md:mt-20"
    >
      <span className="text-primary/60 text-sm uppercase tracking-wider">Scroll</span>
      <ArrowDown className="w-5 h-5 text-primary/60" />
    </motion.div>
  );
}
