import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'THE CLOWN - Premium Memecoin',
    short_name: 'THE CLOWN',
    description: 'The Market Is The Biggest Joke. Join the circus with THE CLOWN.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#090909',
    theme_color: '#F5E6C8',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['finance'],
    screenshots: [
      {
        src: '/screenshot-1.png',
        sizes: '540x720',
        type: 'image/png',
        form_factor: 'narrow',
      },
    ],
  };
}
