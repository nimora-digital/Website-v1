'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import QuoteForm from '@/components/QuoteForm';

function PageContent() {
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#quote') {
      const scrollTo = () => {
        quoteRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      setTimeout(scrollTo, 200);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Hero quoteRef={quoteRef} />
      <Services />
      <div ref={quoteRef} id="quote">
        <QuoteForm />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
