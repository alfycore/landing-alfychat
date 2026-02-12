'use client';

import { useLanguage } from '@/contexts/language-context';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 card p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
          language === 'fr'
            ? 'text-text-primary'
            : 'text-text-muted hover:text-text-secondary'
        }`}
      >
        {language === 'fr' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-surface-2"
            style={{ borderRadius: '6px' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">FR</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
          language === 'en'
            ? 'text-text-primary'
            : 'text-text-muted hover:text-text-secondary'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-surface-2"
            style={{ borderRadius: '6px' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
}
