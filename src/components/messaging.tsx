'use client';

import Reveal from './reveal';
import { Server, Smartphone, ArrowRight, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Messaging() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal className="mb-12 sm:mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-success font-medium">
            {t.messaging.title}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 mb-4">
            {t.messaging.subtitle}
          </h2>
        </Reveal>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Reveal delay={0.1}>
            <div className="card p-6 h-full transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center">
                  <Server className="w-4.5 h-4.5 text-brand-light" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{t.messaging.server.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-brand-light">{t.messaging.server.subtitle}</span>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {t.messaging.server.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card p-6 h-full transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/25 flex items-center justify-center">
                  <Smartphone className="w-4.5 h-4.5 text-success" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{t.messaging.p2p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-success">{t.messaging.p2p.subtitle}</span>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {t.messaging.p2p.description}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Flow summary */}
        <Reveal delay={0.3}>
          <div className="card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-brand-light" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-text-secondary leading-relaxed">
                <span className="text-text-primary font-medium">{t.messaging.flow.title}:</span>{' '}
                {t.messaging.flow.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted whitespace-nowrap">
              <span className="px-2.5 py-1 rounded-lg bg-surface-2/60 border border-border/40">{t.messaging.flow.step1}</span>
              <ArrowRight className="w-3 h-3 text-brand-light" />
              <span className="px-2.5 py-1 rounded-lg bg-surface-2/60 border border-border/40">{t.messaging.flow.step2}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
