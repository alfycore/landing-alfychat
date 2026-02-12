import { redirect } from 'next/navigation';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Messaging from '@/components/messaging';
import Encryption from '@/components/encryption';
import Stack from '@/components/stack';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  const enabled = process.env.NEXT_PUBLIC_LANDING_ENABLED;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (enabled === 'false') {
    redirect(appUrl);
  }

  return (
    <main className="relative">
      <Hero />
      <div className="divider" />
      <Features />
      <div className="divider" />
      <Messaging />
      <div className="divider" />
      <Encryption />
      <div className="divider" />
      <Stack />
      <div className="divider" />
      <Cta />
      <Footer />
    </main>
  );
}
