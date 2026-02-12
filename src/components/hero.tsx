'use client';

import { motion } from 'framer-motion';
import Countdown from './countdown';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const fade = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-28 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          className="badge border-border-2 text-text-muted mb-10"
          {...fade(0.05)}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          {t.hero.status}
        </motion.div>

        {/* Logo + Title */}
        <motion.div {...fade(0.15)} className="flex flex-col items-center gap-5 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-brand-light" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            ALFY<span className="text-gradient">CHAT</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed mb-8"
          {...fade(0.3)}
        >
          {t.hero.title} {t.hero.subtitle}
        </motion.p>

        {/* Tags row */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-14" {...fade(0.4)}>
          {[
            { label: t.hero.badges.encryption, color: 'text-brand-light border-brand/20' },
            { label: t.hero.badges.hosted, color: 'text-success border-success/20' },
            { label: t.hero.badges.voice, color: 'text-warning border-warning/20' },
            { label: t.hero.badges.opensource, color: 'text-text-secondary border-border-2' },
          ].map((badge) => (
            <span key={badge.label} className={`badge ${badge.color}`}>{badge.label}</span>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div {...fade(0.55)} className="flex flex-col items-center gap-5">
          <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-medium">
            {t.countdown.title}
          </span>
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-4 h-7 rounded-full border border-border-2 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-text-muted"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
