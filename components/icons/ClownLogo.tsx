import React from 'react';
import type { SVGProps } from 'react';

export const ClownLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="clownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F5E6C8', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#C9A227', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#clownGrad)" />
    <circle cx="70" cy="80" r="12" fill="#8A0E0E" />
    <circle cx="130" cy="80" r="12" fill="#C61F1F" />
    <circle cx="100" cy="100" r="10" fill="#C61F1F" />
  </svg>
);
