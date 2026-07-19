'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is THE CLOWN?',
    answer: 'THE CLOWN is a premium memecoin built by the community for the community. It represents the joke that the market has become, with zero taxes, burned LP, and 100% meme energy.',
  },
  {
    question: 'How do I buy THE CLOWN?',
    answer: 'You can purchase THE CLOWN on Pump.fun or any DEX that lists it. Click the BUY button on our website or visit DexScreener for more information.',
  },
  {
    question: 'What is the tokenomics?',
    answer: 'THE CLOWN has 0% tax, fully burned LP, is 100% community owned, with no VC backing and no presale. It\'s as transparent as it gets.',
  },
  {
    question: 'Is this safe?',
    answer: 'Cryptocurrency is always risky. Do your own research (DYOR). THE CLOWN is a community project with full transparency. Never invest more than you can afford to lose.',
  },
  {
    question: 'When is the roadmap launching?',
    answer: 'Our roadmap is public and we\'re committed to delivering on each phase. Follow our Telegram and Twitter for the latest updates.',
  },
  {
    question: 'How can I join the community?',
    answer: 'Join us on Telegram, Twitter, DexScreener, and Pump.fun. The community is everything, and we welcome everyone to join the circus.',
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-dark py-24 md:py-40 lg:py-52 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="text-hero font-black text-primary mb-6">
            FAQ
          </h2>
          <p className="text-lg md:text-2xl text-primary/70 uppercase tracking-widest">
            Frequently Asked Questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-3xl mx-auto space-y-4 md:space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full glass-effect p-6 md:p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-between text-left"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="glass-effect p-6 md:p-8 rounded-b-2xl border-2 border-t-0 border-primary/20 bg-primary/5">
                  <p className="text-primary/80 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
