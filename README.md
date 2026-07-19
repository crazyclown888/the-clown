# THE CLOWN - Premium Memecoin Website

> The Market Is The Biggest Joke.

A premium, production-ready memecoin website built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- 🎪 Full-screen hero with animated clown
- 🎬 Cinematic background effects with fog, particles, and spotlights
- 🎨 Premium glassmorphism design
- ✨ Smooth scroll animations with Lenis
- 🎭 Multiple themed sections (Story, Enemies, Tokenomics, Roadmap, Memes, FAQ, Community)
- 📱 Fully responsive design
- 🚀 Production-ready and Vercel-optimized
- ♿ Accessible and SEO-optimized

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js (React Three Fiber)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/the-clown.git
cd the-clown

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building

```bash
npm run build
npm start
```

## Project Structure

```
the-clown/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── privacy/
│   ├── terms/
│   ├── disclaimer/
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── not-found.tsx
│   └── global-error.tsx
├── components/
│   ├── HeroSection.tsx
│   ├── CinematicBackground.tsx
│   ├── FloatingClown.tsx
│   ├── HeroButtons.tsx
│   ├── StorySection.tsx
│   ├── EnemiesSection.tsx
│   ├── TokenomicsSection.tsx
│   ├── RoadmapSection.tsx
│   ├── MemesSection.tsx
│   ├── FAQSection.tsx
│   ├── CommunitySection.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── ParticleBackground.tsx
│   └── icons/
├── hooks/
│   ├── useAnimations.ts
│   └── useLenis.ts
├── animations/
│   ├── gsapAnimations.ts
│   └── framerVariants.ts
├── utils/
│   ├── cn.ts
│   └── helpers.ts
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── effects.css
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── package.json
```

## Color Palette

- **Background**: #090909 (Dark)
- **Primary**: #F5E6C8 (Cream/Gold)
- **Accent Red**: #C61F1F (Red)
- **Dark Red**: #8A0E0E (Dark Red)
- **Gold**: #C9A227 (Gold)
- **White**: #F5F5F5 (White)

## Sections

### Hero Section
Animated clown with cinematic background effects including fog, particles, spotlights, and breathing animation. Interactive mouse following for depth effect.

### Story Section
Full-screen animated text narrative telling the journey of THE CLOWN.

### Enemies Section
Premium glassmorphism cards with hover and click interactions including particle explosions.

### Tokenomics Section
Luxury circular infographic displaying token details with animated counters.

### Roadmap Section
Animated vertical timeline with 5 phases of the project.

### Memes Section
Infinite marquee of floating meme cards with hover animations.

### FAQ Section
Expandable accordion with commonly asked questions.

### Community Section
Calls-to-action buttons for Telegram, Twitter, DexScreener, and Pump.fun.

## SEO & Metadata

- OpenGraph meta tags
- Twitter Card tags
- Mobile-friendly viewport
- robots.txt for search engine crawling
- sitemap.xml for SEO indexing
- manifest.json for PWA support
- Dynamic metadata on all pages

## Deployment

### Vercel

This project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Performance

- ⚡ Optimized images with next/image
- 📦 Code splitting and lazy loading
- 🎯 Core Web Vitals optimized
- 🚀 Edge runtime support
- 📊 Bundle analysis ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a template or for educational purposes.

## Disclaimer

**IMPORTANT**: This is a memecoin and highly volatile cryptocurrency. This website and all materials are for informational purposes only and should not be construed as financial advice. Do your own research (DYOR) before investing. Never invest more than you can afford to lose.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Support

Join our community on:
- 🔗 Telegram
- 🐦 Twitter
- 📊 DexScreener
- 🎯 Pump.fun

---

Built with 💜 and 🤡 for the memecoin community.
