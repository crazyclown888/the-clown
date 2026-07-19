'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import EnemiesSection from '@/components/EnemiesSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import MemesSection from '@/components/MemesSection';
import FAQSection from '@/components/FAQSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll
  useLenis();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="w-full overflow-hidden bg-dark">
      {/* Hero Section */}
      <HeroSection onExplore={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />

      {/* Story Section */}
      <StorySection />

      {/* Enemies Section */}
      <EnemiesSection />

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Memes Section */}
      <MemesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
