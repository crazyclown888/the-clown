'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MemeCard {
  id: number;
  emoji: string;
  title: string;
}

const memes: MemeCard[] = [
  { id: 1, emoji: '🤡', title: 'The Jester' },
  { id: 2, emoji: '💸', title: 'Money Printer' },
  { id: 3, emoji: '🚀', title: 'To The Moon' },
  { id: 4, emoji: '💎', title: 'Diamond Hands' },
  { id: 5, emoji: '🎪', title: 'Circus Master' },
  { id: 6, emoji: '🌙', title: 'Midnight Clown' },
  { id: 7, emoji: '🔥', title: 'On Fire' },
  { id: 8, emoji: '👑', title: 'The King' },
];

export default function MemesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Duplicate memes for infinite scroll effect
  const duplicatedMemes = [...memes, ...memes, ...memes];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/80 pointer-events-none" />

      <div className="relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="container-custom mb-20 md:mb-32 text-center"
        >
          <h2 className="text-hero font-black text-primary mb-6">
            THE MEMES
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            Where The Fun Never Stops
          </p>
        </motion.div>

        {/* Scrolling Memes */}
        <div className="relative w-full overflow-hidden py-12">
          {/* Fade effect left */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
          {/* Fade effect right */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />

          <motion.div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-hidden px-4 md:px-8 pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {duplicatedMemes.map((meme, index) => (
              <motion.div
                key={`${meme.id}-${index}`}
                onMouseEnter={() => setHoveredId(meme.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -20, scale: 1.05 }}
                className="flex-shrink-0 w-48 md:w-56 cursor-pointer group"
              >
                {/* Card */}
                <motion.div
                  animate={{
                    borderColor: hoveredId === meme.id ? 'rgba(201, 162, 39, 1)' : 'rgba(245, 230, 200, 0.2)',
                    boxShadow: hoveredId === meme.id
                      ? '0 0 30px rgba(201, 162, 39, 0.5)'
                      : '0 0 10px rgba(245, 230, 200, 0.1)',
                  }}
                  className="glass-effect p-8 md:p-10 h-48 md:h-56 rounded-2xl border-2 flex flex-col items-center justify-center text-center transition-all duration-300"
                >
                  {/* Emoji */}
                  <motion.div
                    animate={hoveredId === meme.id ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-7xl mb-4"
                  >
                    {meme.emoji}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide">
                    {meme.title}
                  </h3>

                  {/* Particles on hover */}
                  {hoveredId === meme.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                          }}
                          animate={{
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.8 }}
                          className="absolute w-1 h-1 bg-gold rounded-full"
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
