import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapAnimation = () => {
  const context = useRef<gsap.Context | null>(null);

  useEffect(() => {
    return () => {
      if (context.current) {
        context.current.revert();
      }
    };
  }, []);

  return context;
};

export const useScrollTrigger = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return elementRef;
};

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      const scrollY = window.scrollY;
      elementRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useMouse = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouseRef;
};
