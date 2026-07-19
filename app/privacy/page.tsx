'use client';

export default function Privacy() {
  return (
    <main className="w-full min-h-screen bg-dark">
      <div className="container-custom py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-12">Privacy Policy</h1>
        <div className="prose prose-invert max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Introduction</h2>
          <p className="text-primary/80 mb-4">
            This Privacy Policy explains how THE CLOWN collects, uses, and protects your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Information We Collect</h2>
          <p className="text-primary/80 mb-4">
            We may collect information about your browsing habits, IP address, and device information through analytics tools.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-primary/80 mb-4">
            We use the information we collect to improve our website and understand how visitors use our platform.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Security</h2>
          <p className="text-primary/80 mb-4">
            We take reasonable steps to protect your information from unauthorized access or alteration.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
          <p className="text-primary/80 mb-4">
            If you have questions about this Privacy Policy, please contact us through our social media channels.
          </p>

          <p className="text-primary/60 text-sm mt-12">
            Last updated: January 2024
          </p>
        </div>
      </div>
    </main>
  );
}
