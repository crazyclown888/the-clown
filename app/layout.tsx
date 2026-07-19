import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/styles/effects.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'THE CLOWN - Premium Memecoin',
  description: 'The Market Is The Biggest Joke. THE CLOWN is a community-driven memecoin with zero taxes, burned LP, and 100% transparency. Join the circus.',
  keywords: [
    'memecoin',
    'crypto',
    'clown',
    'DeFi',
    'blockchain',
    'Solana',
    'meme',
    'community',
    'CLOWN',
    'token',
  ],
  authors: [{ name: 'THE CLOWN Team' }],
  creator: 'THE CLOWN',
  publisher: 'THE CLOWN',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://theclown.fun',
    title: 'THE CLOWN - Premium Memecoin',
    description: 'The Market Is The Biggest Joke. Join the circus with THE CLOWN.',
    siteName: 'THE CLOWN',
    images: [
      {
        url: 'https://theclown.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'THE CLOWN',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE CLOWN - Premium Memecoin',
    description: 'The Market Is The Biggest Joke. Join the circus with THE CLOWN.',
    creator: '@TheclownCrypto',
    images: ['https://theclown.fun/twitter-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#090909" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
