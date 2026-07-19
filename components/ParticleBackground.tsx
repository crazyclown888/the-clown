'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          size: Math.random() * 2 + 0.5,
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 9, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(245, 230, 200, 0.6)';

      particlesRef.current.forEach((particle) => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05;

        const opacity = 1 - particle.life / particle.maxLife;
        ctx.globalAlpha = opacity * 0.6;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vy = (Math.random() - 0.5) * 2 - 1;
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#090909' }}
    />
  );
}
