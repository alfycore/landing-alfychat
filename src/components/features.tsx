'use client';

import Reveal, { RevealGroup, RevealItem } from './reveal';
import {
  MessageCircle,
  Shield,
  Users,
  Phone,
  Lock,
  Globe,
  Zap,
  Palette,
  FileText,
  Bell,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageCircle,
      title: t.features.list.messaging.title,
      desc: t.features.list.messaging.description,
    },
    {
      icon: Lock,
      title: t.features.list.encryption.title,
      desc: t.features.list.encryption.description,
    },
    {
      icon: Phone,
      title: t.features.list.voice.title,
      desc: t.features.list.voice.description,
    },
    {
      icon: Users,
      title: t.features.list.groups.title,
      desc: t.features.list.groups.description,
    },
    {
      icon: Shield,
      title: t.features.list.privacy.title,
      desc: t.features.list.privacy.description,
    },
    {
      icon: Zap,
      title: t.features.list.fast.title,
      desc: t.features.list.fast.description,
    },
    {
      icon: Palette,
      title: t.features.list.customizable.title,
      desc: t.features.list.customizable.description,
    },
    {
      icon: Globe,
      title: t.features.list.france.title,
      desc: t.features.list.france.description,
    },
    {
      icon: Bell,
      title: t.features.list.notifications.title,
      desc: t.features.list.notifications.description,
    },
    {
      icon: FileText,
      title: t.features.list.opensource.title,
      desc: t.features.list.opensource.description,
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-16 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-light font-medium">
            {t.features.title}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 mb-4">
            {t.features.subtitle}
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.04}>
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="card-hover group flex items-start gap-4 p-5 sm:p-6">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-surface-3 border border-border flex items-center justify-center group-hover:border-brand/30 transition-colors">
                  <f.icon className="w-4 h-4 text-text-muted group-hover:text-brand-light transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-text-primary">{f.title}</h3>
                    <ArrowRight className="w-3 h-3 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
