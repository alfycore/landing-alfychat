'use client';

import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/60 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 text-brand-light" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <span>{t.footer.made}</span>
            <Heart className="w-3 h-3 text-danger fill-danger" />
            <span>{t.footer.by}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/legal/cgu"
            className="text-[11px] text-text-muted hover:text-text-secondary transition-colors"
          >
            Conditions d&apos;utilisation
          </Link>
          <span className="text-border/60">·</span>
          <Link
            href="/legal/privacy"
            className="text-[11px] text-text-muted hover:text-text-secondary transition-colors"
          >
            Politique de confidentialité
          </Link>
          <span className="text-border/60">·</span>
          <Link
            href="/legal/mentions"
            className="text-[11px] text-text-muted hover:text-text-secondary transition-colors"
          >
            Mentions légales
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-text-muted px-2.5 py-1 rounded-lg bg-surface-2/40 border border-border/30">
            {t.footer.privacy}
          </span>
          <span className="text-[10px] text-text-muted px-2.5 py-1 rounded-lg bg-surface-2/40 border border-border/30">
            {t.footer.hosted}
          </span>
        </div>
      </div>
    </footer>
  );
}
