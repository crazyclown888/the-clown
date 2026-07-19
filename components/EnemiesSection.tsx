'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface EnemyCard {
  name: string;
  icon: string;
}

const enemies: EnemyCard[] = [
  { name: 'PEPE', icon: '🐸' },
  { name: 'BULL', icon: '🐂' },
  { name: 'SHIBA', icon: '🐕' },
  { name: 'TROLL', icon: '👹' },
];

export default function EnemiesSection() {
  const [exploded, setExploded] = useState<Set<number>>(new Set());

  const handleClick = (index: number) => {
    const newExploded = new Set(exploded);
    newExploded.add(index);
    setExploded(newExploded);

    setTimeout(() => {
      setExploded(new Set());
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark pointer-events-none" />

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
            THE ENEMIES
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            They stand in the way
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {enemies.map((enemy, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleClick(index)}
              className="relative cursor-pointer group"
            >
              {/* Glass Effect Card */}
              <motion.div
                animate={{
                  borderColor: exploded.has(index)
                    ? 'rgba(198, 31, 31, 1)'
                    : 'rgba(245, 230, 200, 0.2)',
                  boxShadow: exploded.has(index)
                    ? '0 0 40px rgba(198, 31, 31, 1)'
                    : '0 0 20px rgba(201, 162, 39, 0.3)',
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect p-8 md:p-12 h-64 md:h-80 flex flex-col items-center justify-center rounded-3xl border-2 transition-all duration-300 group-hover:border-accent-red/50 group-hover:shadow-lg group-hover:shadow-accent-red/30"
              >
                {/* X Mark */}
                <div className="mb-6 md:mb-8 text-accent-red text-4xl md:text-5xl font-black">❌</div>

                {/* Enemy Icon */}
                <motion.div
                  animate={exploded.has(index) ? { scale: [1, 1.5, 0] } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-6xl md:text-7xl mb-6 md:mb-8"
                >
                  {enemy.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-widest text-center">
                  {enemy.name}
                </h3>

                {/* Hover effect - Particles */}
                {exploded.has(index) && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: Math.cos((i / 8) * Math.PI * 2) * 100,
                          y: Math.sin((i / 8) * Math.PI * 2) * 100,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute w-2 h-2 bg-accent-red rounded-full"
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent-red to-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                animate={exploded.has(index) ? { opacity: [0.5, 0] } : {}}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
