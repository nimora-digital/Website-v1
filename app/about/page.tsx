'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gold mb-6">About Nimora Digital</h1>
        <p className="text-gray-400 mb-4 leading-relaxed">
          We’re a tight-knit team of designers, developers, and tech consultants focused on helping
          small businesses look premium online. We believe design is a trust signal — and we build sites
          that look incredible and convert even better.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Whether youre a local builder or a global coach, we help you create a powerful first impression.
          Our mission is to give professional digital presence to those who deserve it.
        </p>
      </motion.div>
    </main>
  );
}
