'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Scroll to quote if on homepage
  const handleQuoteClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const isHome = window.location.pathname === '/';
    if (isHome) {
      const section = document.getElementById('quote');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#quote');
    }
    setMenuOpen(false); // close menu if open
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="w-full bg-black/90 backdrop-blur-lg border-b border-zinc-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-gold text-3xl font-serif font-bold tracking-tight">
          Nimora
        </Link>

        <nav className="flex space-x-8 text-sm text-white font-semibold tracking-wide">
          {/* <Link href="/portfolio" className="hover:text-gold hover:underline transition-all">
            Portfolio
          </Link> */}
          <Link href="/faq" className="hover:text-gold hover:underline transition-all">
            FAQ
          </Link>

          <div className="relative">
            <button
              onClick={handleQuoteClick}
              className="relative text-white hover:text-gold transition"
            >
              Get a Quote
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-10 bg-black text-white rounded-md border border-zinc-700 shadow-lg p-4 space-y-2 z-50"
                >
                  <Link href="/faq" className="block hover:text-gold">
                    FAQ
                  </Link>
                  <Link href="/portfolio" className="block hover:text-gold">
                    Portfolio
                  </Link>
                  <button
                    onClick={handleQuoteClick}
                    className="block text-left w-full hover:text-gold"
                  >
                    Schedule a Quote
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
