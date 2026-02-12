'use client';

import Reveal, { RevealGroup, RevealItem } from './reveal';
import { Lock, Shield, Key, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Encryption() {
  const { t } = useLanguage();

  const levels = [
    {
      level: 1,
      name: t.encryption.levels.standard.title,
      icon: Lock,
      desc: t.encryption.levels.standard.description,
      items: [
        t.encryption.levels.standard.features.encryption,
        t.encryption.levels.standard.features.keys,
        t.encryption.levels.standard.features.forward,
      ],
      accent: 'text-brand-light border-brand/20 bg-brand/10',
      check: 'text-brand-light',
    },
    {
      level: 2,
      name: t.encryption.levels.enhanced.title,
      icon: Shield,
      desc: t.encryption.levels.enhanced.description,
      items: [
        t.encryption.levels.enhanced.features.rotation,
        t.encryption.levels.enhanced.features.verification,
        t.encryption.levels.enhanced.features.expiry,
      ],
      accent: 'text-warning border-warning/20 bg-warning/10',
      check: 'text-warning',
    },
    {
      level: 3,
      name: t.encryption.levels.maximum.title,
      icon: Key,
      desc: t.encryption.levels.maximum.description,
      items: [
        t.encryption.levels.maximum.features.ephemeral,
        t.encryption.levels.maximum.features.screenshot,
        t.encryption.levels.maximum.features.verification,
      ],
      accent: 'text-danger border-danger/20 bg-danger/10',
      check: 'text-danger',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-14 sm:mb-18">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-light font-medium">
            {t.encryption.title}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 mb-4">
            {t.encryption.subtitle}
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-3" stagger={0.08}>
          {levels.map((l) => (
            <RevealItem key={l.level}>
              <div className="card p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${l.accent}`}>
                    <l.icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted">
                    LVL {l.level}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-text-primary mb-1.5">{l.name}</h3>
                <p className="text-xs text-text-muted leading-relaxed mb-5">{l.desc}</p>

                <ul className="space-y-2.5 mt-auto">
                  {l.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 ${l.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
