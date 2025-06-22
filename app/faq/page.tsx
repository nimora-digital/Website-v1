'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer full-stack web development using React and Next.js, including custom storefronts, content websites, and scalable integrations. Each project is tailored to your business needs, with design and development handled in-house.",
  },
  {
    question: "Do you provide eCommerce solutions?",
    answer:
      "Yes, we build modern, conversion-focused storefronts with full eCommerce capabilities. While we primarily use custom React/Next.js solutions, we can explore integrations with platforms like Shopify upon request.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 2–4 weeks, depending on complexity and content readiness. We'll provide a detailed timeline after an initial consultation, but delivery times may vary based on client feedback and revision cycles.",
  },
  {
    question: "Can I request changes or revisions?",
    answer:
      "Absolutely. We work with you until your requirements are met. While we don’t limit revisions during initial delivery, longer-term revisions may be covered through a maintenance plan.",
  },
  {
    question: "Do you offer ongoing support or hosting?",
    answer:
      "Yes, we offer monthly plans that include maintenance, updates, and hosting. Hosting is outsourced to reliable partners, but we also have the capacity to host in-house for select clients when needed.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You’ll retain full ownership and access to your site. We remain available for ongoing support, feature updates, or marketing services depending on your chosen plan.",
  },
  {
    question: "Do I need to provide the content and media?",
    answer:
      "We aim to support you fully. You can provide your own content, or we can help with copywriting, design, and even photography (e.g. for food or product-based businesses).",
  },
  {
    question: "What makes Nimora Digital different?",
    answer:
      "We blend premium design with technical excellence. Everything is built and designed by our in-house team, allowing full customisation, consistent updates, and a truly luxurious client experience that outpaces template-based or offshore competitors.",
  },
];


export default function FAQPage() {
  return (
    <main className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gold mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-zinc-800 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
