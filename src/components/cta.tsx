'use client';

import Reveal from './reveal';
import Countdown from './countdown';
import { MessageCircle, Shield, Lock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <Reveal className="max-w-2xl mx-auto relative z-10">
        <div className="card p-8 sm:p-12 text-center">
          {/* App-like header */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-brand/15 border border-brand/25 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-brand-light" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl mb-3">
            {t.cta.title}
          </h2>
          <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
            {t.cta.subtitle}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: Shield, label: 'AES-256', color: 'text-brand-light bg-brand/10 border-brand/20' },
              { icon: Lock, label: 'E2E', color: 'text-success bg-success/10 border-success/20' },
              { icon: Users, label: 'RGPD', color: 'text-warning bg-warning/10 border-warning/20' },
            ].map((pill) => (
              <div key={pill.label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${pill.color}`}>
                <pill.icon className="w-3.5 h-3.5" />
                {pill.label}
              </div>
            ))}
          </div>

          <div className="inline-block">
            <Countdown />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
