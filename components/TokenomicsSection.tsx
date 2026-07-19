'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TokenomicsItem {
  label: string;
  value: string;
  color: string;
}

const tokenomicsData: TokenomicsItem[] = [
  { label: '0% Tax', value: '0%', color: 'from-primary to-primary' },
  { label: 'LP Burned', value: '100%', color: 'from-gold to-primary' },
  { label: 'Community Owned', value: '✓', color: 'from-accent-red to-gold' },
  { label: '100% Meme', value: '∞', color: 'from-dark-red to-accent-red' },
  { label: 'No VC', value: '✓', color: 'from-primary to-gold' },
  { label: 'No Presale', value: '✓', color: 'from-accent-red to-primary' },
];

export default function TokenomicsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/80 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.5), transparent)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(198, 31, 31, 0.5), transparent)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="text-hero font-black text-primary mb-6">
            TOKENOMICS
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            Completely Transparent & Community Driven
          </p>
        </motion.div>

        {/* Tokenomics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <motion.div
                animate={{
                  scale: activeIndex === index ? 1.05 : 1,
                  y: activeIndex === index ? -10 : 0,
                }}
                className="glass-effect p-8 md:p-12 rounded-3xl border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 h-48 md:h-56 flex flex-col items-center justify-center text-center"
              >
                {/* Value */}
                <motion.div
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                  }}
                  className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
                  {item.label}
                </h3>
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
                animate={activeIndex === index ? { opacity: 0.5 } : {}}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
