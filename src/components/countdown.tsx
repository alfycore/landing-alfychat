'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

function calc(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  };
}

function Digit({ value }: { value: string }) {
  const [prev, setPrev] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrev(value);
        setIsFlipping(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [value, prev]);

  return (
    <div className="relative" style={{ perspective: '600px' }}>
      <div className="relative w-[32px] h-[48px] sm:w-[40px] sm:h-[60px] md:w-[48px] md:h-[72px]">
        {/* Background */}
        <div className="absolute inset-0 bg-black rounded-md border border-[#1a1a1a]" />

        {/* Top half - Static (always visible) */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-black overflow-hidden rounded-t-md z-10">
          <div className="absolute inset-x-0 top-0 h-[48px] sm:h-[60px] md:h-[72px] flex items-center justify-center">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
              {value}
            </span>
          </div>
        </div>

        {/* Bottom half - Static (always visible) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black overflow-hidden rounded-b-md z-10">
          <div className="absolute inset-x-0 bottom-0 h-[48px] sm:h-[60px] md:h-[72px] flex items-center justify-center">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
              {value}
            </span>
          </div>
        </div>

        {isFlipping && (
          <>
            {/* Top half - Flipping (previous) */}
            <motion.div
              key={value + '-top'}
              className="absolute inset-x-0 top-0 h-1/2 bg-black overflow-hidden rounded-t-md z-20"
              style={{
                transformOrigin: 'bottom',
                backfaceVisibility: 'hidden',
              }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -180 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="absolute inset-x-0 top-0 h-[48px] sm:h-[60px] md:h-[72px] flex items-center justify-center">
                <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
                  {prev}
                </span>
              </div>
            </motion.div>

            {/* Bottom half - Flipping (current) */}
            <motion.div
              key={value + '-bottom'}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-black overflow-hidden rounded-b-md z-20"
              style={{
                transformOrigin: 'top',
                backfaceVisibility: 'hidden',
              }}
              initial={{ rotateX: 180 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="absolute inset-x-0 bottom-0 h-[48px] sm:h-[60px] md:h-[72px] flex items-center justify-center">
                <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
                  {value}
                </span>
              </div>
            </motion.div>
          </>
        )}

        {/* Center split line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black z-30 shadow-lg" />
      </div>
    </div>
  );
}

function Flap({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  const digits = display.split('');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {digits.map((digit, idx) => (
          <Digit key={idx} value={digit} />
        ))}
      </div>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <div className="flex items-center justify-center self-start mt-3 sm:mt-4 md:mt-5">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-muted/40">:</span>
    </div>
  );
}

export default function Countdown() {
  const target = process.env.NEXT_PUBLIC_COUNTDOWN_TARGET;
  const [t, setT] = useState<TimeLeft | null>(null);
  const [ok, setOk] = useState(false);
  const { t: translations } = useLanguage();

  useEffect(() => {
    setOk(true);
    if (!target) return;
    const d = new Date(target);
    setT(calc(d));
    const i = setInterval(() => setT(calc(d)), 1000);
    return () => clearInterval(i);
  }, [target]);

  if (!target || !ok) return null;

  if (t && t.total <= 0) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card px-8 py-4 glow-md"
      >
        <span className="text-lg sm:text-xl font-semibold text-gradient">
          {translations.countdown.launched}
        </span>
      </motion.div>
    );
  }

  return (
    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
      <Flap value={t?.days ?? 0} label={translations.countdown.days} />
      <Sep />
      <Flap value={t?.hours ?? 0} label={translations.countdown.hours} />
      <Sep />
      <Flap value={t?.minutes ?? 0} label={translations.countdown.minutes} />
      <Sep />
      <Flap value={t?.seconds ?? 0} label={translations.countdown.seconds} />
    </div>
  );
}