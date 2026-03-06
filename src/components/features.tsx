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
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: MessageCircle, title: t.features.list.messaging.title, desc: t.features.list.messaging.description, color: '#6C5CE7' },
    { icon: Lock, title: t.features.list.encryption.title, desc: t.features.list.encryption.description, color: '#818CF8' },
    { icon: Phone, title: t.features.list.voice.title, desc: t.features.list.voice.description, color: '#FBBF24' },
    { icon: Users, title: t.features.list.groups.title, desc: t.features.list.groups.description, color: '#6C5CE7' },
    { icon: Shield, title: t.features.list.privacy.title, desc: t.features.list.privacy.description, color: '#34D399' },
    { icon: Zap, title: t.features.list.fast.title, desc: t.features.list.fast.description, color: '#FBBF24' },
    { icon: Palette, title: t.features.list.customizable.title, desc: t.features.list.customizable.description, color: '#818CF8' },
    { icon: Globe, title: t.features.list.france.title, desc: t.features.list.france.description, color: '#34D399' },
    { icon: Bell, title: t.features.list.notifications.title, desc: t.features.list.notifications.description, color: '#FBBF24' },
    { icon: FileText, title: t.features.list.opensource.title, desc: t.features.list.opensource.description, color: '#34D399' },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16 sm:mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] text-brand-light font-medium border border-brand/20 bg-brand/[0.06] mb-6">
            {t.features.title}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 mb-4">
            {t.features.subtitle}
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group relative h-full rounded-2xl border border-border/60 bg-surface p-6 transition-all duration-300 hover:border-brand/30 overflow-hidden">
                <div>
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-300"
                    style={{
                      background: f.color + '12',
                      borderColor: f.color + '25',
                    }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-semibold text-text-primary mb-2">{f.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
