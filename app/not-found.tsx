'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Page Not Found</h2>
        <p className="text-primary/70 text-lg md:text-xl mb-12 max-w-lg">
          The page you're looking for doesn't exist. But the circus is still going on!
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary text-dark font-bold rounded-full hover:shadow-lg hover:shadow-accent-red/50 transition-all duration-300 uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
