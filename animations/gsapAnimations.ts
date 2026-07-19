import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (
  element: HTMLElement,
  animation: {
    from?: gsap.TweenVars;
    to: gsap.TweenVars;
    duration?: number;
    ease?: string;
  }
) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top center+=100',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  });

  if (animation.from) {
    timeline.fromTo(element, animation.from, animation.to, animation.duration || 0.8);
  } else {
    timeline.to(element, animation.to, 0);
  }

  return timeline;
};

export const parallaxEffect = (
  element: HTMLElement,
  speed: number = 0.5
) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      markers: false,
    },
  });
};

export const morphEffect = (
  element: HTMLElement,
  duration: number = 2
) => {
  gsap.to(element, {
    morphSVG: '+=360',
    duration,
    repeat: -1,
    ease: 'sine.inOut',
  });
};
