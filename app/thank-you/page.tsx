'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  return (
    <main className="bg-black text-white py-32 px-6 text-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gold mb-6">Thank You</h1>
        <p className="text-gray-400 mb-6">
          We’ve received your message and will get back to you shortly. You’re one step closer to a stunning online presence.
        </p>

        <Link
          href="/"
          className="inline-block mt-4 bg-gold text-black px-6 py-3 font-semibold rounded-md hover:bg-opacity-90 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
