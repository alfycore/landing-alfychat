import Link from 'next/link';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-bg/80 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-brand-light" />
            </div>
            <span className="font-heading text-sm">
              ALFY<span className="text-gradient">CHAT</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>&copy; {new Date().getFullYear()} AlfyCore</span>
          <div className="flex items-center gap-4">
            <Link href="/legal/cgu" className="hover:text-text-primary transition-colors">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/legal/privacy" className="hover:text-text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/legal/mentions" className="hover:text-text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
