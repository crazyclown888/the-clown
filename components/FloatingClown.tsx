'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface FloatingClownProps {
  mouseX: number;
  mouseY: number;
}

export default function FloatingClown({ mouseX, mouseY }: FloatingClownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (mouseX - centerX) / 100;
    const distY = (mouseY - centerY) / 100;
    const distance = Math.sqrt(distX * distX + distY * distY);

    setScale(1 + Math.min(distance / 500, 0.1));
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: scale,
        y: [0, -20, 0],
      }}
      transition={{
        initial: { duration: 0.8, ease: 'easeOut' },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 0.3 },
      }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-red via-gold to-accent-red animate-pulse" />
      </div>

      {/* Clown Image Placeholder with breathing animation */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 40px rgba(197, 31, 31, 0.3)',
            '0 0 80px rgba(197, 31, 31, 0.6)',
            '0 0 40px rgba(197, 31, 31, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20"
      >
        {/* SVG Clown Head - Stylized */}
        <svg
          viewBox="0 0 300 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <defs>
            <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F5E6C8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#C9A227', stopOpacity: 1 }} />
            </linearGradient>
            <radialGradient id="glowRad">
              <stop offset="0%" style={{ stopColor: '#C61F1F', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#8A0E0E', stopOpacity: 0 }} />
            </radialGradient>
          </defs>

          {/* Glow */}
          <circle cx="150" cy="150" r="180" fill="url(#glowRad)" />

          {/* Face */}
          <ellipse cx="150" cy="140" rx="90" ry="100" fill="url(#faceGrad)" />

          {/* Left Eye White */}
          <ellipse cx="110" cy="110" rx="25" ry="35" fill="#FFFFFF" />
          {/* Left Eye Iris */}
          <circle cx="110" cy="115" r="15" fill="#8A0E0E" />
          {/* Left Eye Pupil */}
          <circle cx="112" cy="113" r="8" fill="#000000" />
          {/* Left Eye Shine */}
          <circle cx="114" cy="110" r="3" fill="#FFFFFF" />

          {/* Right Eye White */}
          <ellipse cx="190" cy="110" rx="25" ry="35" fill="#FFFFFF" />
          {/* Right Eye Iris */}
          <circle cx="190" cy="115" r="15" fill="#C61F1F" />
          {/* Right Eye Pupil */}
          <circle cx="188" cy="113" r="8" fill="#000000" />
          {/* Right Eye Shine */}
          <circle cx="186" cy="110" r="3" fill="#FFFFFF" />

          {/* Nose */}
          <circle cx="150" cy="145" r="15" fill="#C61F1F" />

          {/* Mouth */}
          <path
            d="M 130 180 Q 150 200 170 180"
            stroke="#8A0E0E"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Left Cheek */}
          <circle cx="80" cy="150" r="20" fill="#C61F1F" opacity="0.6" />
          {/* Right Cheek */}
          <circle cx="220" cy="150" r="20" fill="#C61F1F" opacity="0.6" />

          {/* Top Hat Base */}
          <rect x="100" y="20" width="100" height="30" fill="#1a1a1a" />
          {/* Top Hat Crown */}
          <polygon points="130,20 170,20 160,-20 140,-20" fill="#1a1a1a" />
          {/* Top Hat Band */}
          <rect x="105" y="48" width="90" height="8" fill="#C9A227" />

          {/* Left Pom Pom */}
          <circle cx="40" cy="90" r="20" fill="#C61F1F" />
          {/* Right Pom Pom */}
          <circle cx="260" cy="90" r="20" fill="#C61F1F" />

          {/* Collar */}
          <ellipse cx="150" cy="210" rx="100" ry="30" fill="#F5E6C8" />
          <path d="M 120 210 Q 110 230 120 250" stroke="#C61F1F" strokeWidth="3" fill="none" />
          <path d="M 180 210 Q 190 230 180 250" stroke="#C61F1F" strokeWidth="3" fill="none" />

          {/* Jacket */}
          <path
            d="M 100 250 L 80 350 L 220 350 L 200 250 Q 150 270 100 250"
            fill="#1a1a1a"
            stroke="#C9A227"
            strokeWidth="2"
          />

          {/* Buttons */}
          <circle cx="150" cy="280" r="6" fill="#C9A227" />
          <circle cx="150" cy="320" r="6" fill="#C9A227" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
