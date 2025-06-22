// Services.tsx
'use client';
import { motion } from 'framer-motion';
import { Shield, MonitorSmartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Custom Website Design',
    description: 'Creating unique, tailored websites that represent your brand and engage visitors.',
    icon: Shield,
  },
  {
    title: 'Responsive Development',
    description: 'Ensuring your website looks and functions perfectly on all devices.',
    icon: MonitorSmartphone,
  },
  {
    title: 'SEO Optimization',
    description: "Improving your website’s visibility on search engines for better traffic and leads.",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20 px-6">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm tracking-wide text-gold uppercase mb-2">Services</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-semibold text-gold">Our Expertise</h3>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-zinc-300">
          We provide a range of web design solutions to meet your business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 shadow-md hover:shadow-gold transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <service.icon className="w-10 h-10 text-gold mb-4" />
            <h4 className="text-xl font-serif font-semibold text-white mb-2">{service.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
