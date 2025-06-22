// layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nimora Digital',
  description: 'Crafting exceptional websites for premium local businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
