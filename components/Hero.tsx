'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RefObject } from 'react';

export default function Hero({ quoteRef }: { quoteRef: RefObject<HTMLDivElement | null> }) {
  const scrollToQuote = () => {
    if (quoteRef.current) {
      quoteRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Taller Wave Background (Top, covers 50% height) */}
      <div className="absolute top-0 left-0 w-full h-[50%] -z-10 opacity-20 overflow-hidden">
        <div className="flex w-[200%] h-full animate-waveLoop">
          {[...Array(2)].map((_, i) => (
            <svg
              key={i}
              className="w-[50%] h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,200 C150,100 350,300 600,200 C850,100 1050,300 1200,200 L1200,0 L0,0 Z"
                fill="#d4af37"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-serif font-bold text-gold drop-shadow-xl mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Crafting Exceptional Websites
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-white text-lg md:text-xl max-w-xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We build high-quality websites for small businesses to help them thrive online.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/portfolio"
            className="bg-gold text-black px-8 py-3 rounded-full shadow-gold hover:glow-on-hover font-medium transition-all"
          >
            Our Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={scrollToQuote}
            className="border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition-all font-medium"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
