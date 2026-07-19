'use client';

export default function Disclaimer() {
  return (
    <main className="w-full min-h-screen bg-dark">
      <div className="container-custom py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-12">Disclaimer</h1>
        <div className="prose prose-invert max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Important Disclaimer</h2>
          <p className="text-accent-red font-bold mb-4">
            CRYPTO ASSETS ARE HIGHLY VOLATILE AND RISKY. THIS IS NOT FINANCIAL ADVICE.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">No Financial Advice</h2>
          <p className="text-primary/80 mb-4">
            THE CLOWN website and all materials provided are for informational purposes only and should not be construed as financial advice, investment advice, or any recommendation to buy, sell, or hold any cryptocurrency.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Risk Acknowledgment</h2>
          <p className="text-primary/80 mb-4">
            Cryptocurrency is extremely volatile and risky. The value of any cryptocurrency can drop to zero at any time. Do not invest any money you cannot afford to lose. Past performance does not guarantee future results.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Do Your Own Research</h2>
          <p className="text-primary/80 mb-4">
            Before making any investment decisions, conduct your own thorough research. Consult with qualified financial, legal, and tax professionals before making any investment.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">No Liability</h2>
          <p className="text-primary/80 mb-4">
            THE CLOWN team shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use our website or materials.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Regulatory Risks</h2>
          <p className="text-primary/80 mb-4">
            Cryptocurrency is subject to evolving regulatory requirements in different jurisdictions. THE CLOWN may be deemed a security or commodity in certain jurisdictions, which could result in regulatory action.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Smart Contract Risks</h2>
          <p className="text-primary/80 mb-4">
            Smart contracts may contain bugs or vulnerabilities that could result in loss of funds. Always verify contract addresses and conduct thorough audits.
          </p>

          <p className="text-primary/60 text-sm mt-12">
            Last updated: January 2024. By using this website, you acknowledge that you have read and understood this disclaimer.
          </p>
        </div>
      </div>
    </main>
  );
}
