'use client';

import Reveal from './reveal';
import { Database, Globe, Cpu, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Stack() {
  const { t } = useLanguage();

  const cols = [
    {
      label: t.stack.frontend.title,
      icon: Globe,
      items: ['Next.js 15', 'React 19', 'Shadcn/UI', 'Tailwind', 'Zustand'],
      color: 'text-brand-light',
      bg: 'bg-brand/10',
      border: 'border-brand/20',
    },
    {
      label: t.stack.gateway.title,
      icon: Layers,
      items: ['WebSocket', 'Express 5', 'Redis Pub/Sub'],
      color: 'text-success',
      bg: 'bg-success/10',
      border: 'border-success/20',
    },
    {
      label: t.stack.services.title,
      icon: Cpu,
      items: ['Auth', 'Users', 'Messaging', 'Voice', 'Crypto'],
      color: 'text-warning',
      bg: 'bg-warning/10',
      border: 'border-warning/20',
    },
    {
      label: t.stack.data.title,
      icon: Database,
      items: ['MySQL 8', 'Redis 7', 'AES-256', 'P2P / IndexedDB'],
      color: 'text-danger',
      bg: 'bg-danger/10',
      border: 'border-danger/20',
    },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-medium">
            {t.stack.title}
          </span>
          <h2 className="text-xl sm:text-2xl mt-3">
            {t.stack.subtitle}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cols.map((c) => (
              <div key={c.label} className="card p-4 sm:p-5 transition-all duration-300 hover:border-border-2">
                <div className={`flex items-center gap-2 mb-3`}>
                  <div className={`w-7 h-7 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <c.icon className={`w-3.5 h-3.5 ${c.color}`} />
                  </div>
                  <span className={`text-xs font-semibold ${c.color}`}>{c.label}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-2/60 text-text-muted border border-border/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
