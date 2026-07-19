'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Send, ExternalLink } from 'lucide-react';

interface CommunityLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hoverColor: string;
}

const communityLinks: CommunityLink[] = [
  {
    name: 'TELEGRAM',
    icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />,
    url: 'https://t.me',
    color: 'border-primary/50 text-primary',
    hoverColor: 'border-primary text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/50',
  },
  {
    name: 'X (TWITTER)',
    icon: <Send className="w-8 h-8 md:w-10 md:h-10" />,
    url: 'https://twitter.com',
    color: 'border-accent-red/50 text-accent-red',
    hoverColor: 'border-accent-red text-accent-red hover:bg-accent-red/10 hover:shadow-lg hover:shadow-accent-red/50',
  },
  {
    name: 'DEXSCREENER',
    icon: <ExternalLink className="w-8 h-8 md:w-10 md:h-10" />,
    url: 'https://dexscreener.com',
    color: 'border-gold/50 text-gold',
    hoverColor: 'border-gold text-gold hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/50',
  },
  {
    name: 'PUMP.FUN',
    icon: <ExternalLink className="w-8 h-8 md:w-10 md:h-10" />,
    url: 'https://pump.fun',
    color: 'border-white/50 text-white',
    hoverColor: 'border-white text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/50',
  },
];

export default function CommunitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark pointer-events-none" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(245, 230, 200, 0.5), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(198, 31, 31, 0.5), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 container-custom w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="text-hero font-black text-primary mb-6">
            JOIN THE CIRCUS
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            Connect with the community
          </p>
        </motion.div>

        {/* Community Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {communityLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center flex-col p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 cursor-pointer group ${link.hoverColor} ${link.color}`}
            >
              {/* Icon with animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4"
              >
                {link.icon}
              </motion.div>

              {/* Text */}
              <span className="text-sm md:text-base font-bold uppercase tracking-widest text-center">
                {link.name}
              </span>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"
                style={{
                  background: link.color.includes('primary')
                    ? 'linear-gradient(135deg, #F5E6C8, #C9A227)'
                    : link.color.includes('accent')
                      ? 'linear-gradient(135deg, #C61F1F, #8A0E0E)'
                      : 'linear-gradient(135deg, #C9A227, #F5E6C8)',
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
