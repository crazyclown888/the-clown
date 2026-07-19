'use client';

import { useEffect } from 'react';
import Lenis from '@react-three/lenis';

export const useLenis = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Lenis for smooth scrolling
    const lenis = new (Lenis as any)({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
