'use client';

import Reveal from './reveal';
import Countdown from './countdown';
import { useLanguage } from '@/contexts/language-context';

export default function Cta() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 sm:py-32 px-4">
      <Reveal className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl mb-3">
          {t.cta.title}
        </h2>
        <p className="text-text-secondary text-sm mb-10">
          {t.cta.subtitle}
        </p>
        <div className="card p-6 sm:p-8 glow-sm inline-block">
          <Countdown />
        </div>
      </Reveal>
    </section>
  );
}
