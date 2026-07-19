'use client';

import { motion } from 'framer-motion';

interface Phase {
  number: number;
  title: string;
  description: string;
}

const phases: Phase[] = [
  { number: 1, title: 'Open The Circus', description: 'Launch and initial deployment' },
  { number: 2, title: 'Everyone Laughs', description: 'Community growth and viral expansion' },
  { number: 3, title: 'FOMO Starts', description: 'Market momentum and awareness' },
  { number: 4, title: 'Rule The Circus', description: 'Ecosystem dominance' },
  { number: 5, title: 'Moon', description: 'To infinity and beyond' },
];

export default function RoadmapSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark pointer-events-none" />

      {/* Vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: false }}
        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
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
            ROADMAP
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            The Journey Has Just Begun
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-12 md:space-y-20"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-center gap-8 md:gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                  className="glass-effect p-8 md:p-12 rounded-3xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl md:text-5xl font-black text-gold">
                      {phase.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-primary/70 text-base md:text-lg">
                    {phase.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-gold animate-pulse" />
                <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-dark border-4 border-gold" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
