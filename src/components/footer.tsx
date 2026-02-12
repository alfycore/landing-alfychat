'use client';

import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <span>{t.footer.made}</span>
          <Heart className="w-3 h-3 text-danger fill-danger" />
          <span>{t.footer.by}</span>
        </div>
        <span className="text-[10px] text-text-muted">
          {t.footer.privacy} · {t.footer.hosted}
        </span>
      </div>
    </footer>
  );
}
