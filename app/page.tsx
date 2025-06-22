'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import QuoteForm from '@/components/QuoteForm';

export default function Home() {
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This ensures we only scroll if the hash is present
    if (typeof window !== 'undefined' && window.location.hash === '#quote') {
      const scrollTo = () => {
        quoteRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      // Wait a tick to ensure the component is mounted
      setTimeout(scrollTo, 200);
    }
  }, [pathname, searchParams]);

  return (
    <main>
      <Hero quoteRef={quoteRef} />
      <Services />
      <div ref={quoteRef} id="quote">
        <QuoteForm />
      </div>
    </main>
  );
}
