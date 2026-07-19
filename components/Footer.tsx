'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="relative w-full bg-dark border-t border-primary/10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark pointer-events-none" />

      <div className="relative z-10 container-custom py-16 md:py-24">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16"
        >
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">
              THE CLOWN
            </h3>
            <p className="text-primary/60 text-sm md:text-base leading-relaxed">
              The ultimate memecoin for those who get the joke. Built by the community, for the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-primary uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'Story', 'Tokenomics', 'Roadmap', 'Community'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="text-primary/70 hover:text-primary transition-colors duration-300 text-sm md:text-base"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-primary uppercase tracking-wide">Connect</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Telegram', url: 'https://t.me' },
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'DexScreener', url: 'https://dexscreener.com' },
                { name: 'Pump.fun', url: 'https://pump.fun' },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="text-primary/70 hover:text-gold transition-colors duration-300 text-sm md:text-base"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-12 md:my-16" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-primary/50 text-xs md:text-sm">
            © {currentYear} THE CLOWN. All rights reserved. Built with ✨ and 🤡
          </p>

          {/* Additional Info */}
          <div className="flex items-center gap-6 md:gap-8 text-xs md:text-sm">
            <a href="/privacy" className="text-primary/50 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-primary/50 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="/disclaimer" className="text-primary/50 hover:text-primary transition-colors">
              Disclaimer
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
