'use client';

import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'The Local Workshop',
      description: 'A modern site for a skilled carpenter with project galleries and booking system.',
    },
    {
      title: 'Glow & Co. Aesthetics',
      description: 'Clean and minimalist brand website for a growing aesthetics clinic.',
    },
    {
      title: 'RapidFit Plumbers',
      description: 'One-page brochure site optimized for local SEO and service call bookings.',
    },
  ];

  return (
    <main className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gold mb-12 text-center">Our Work</h1>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
