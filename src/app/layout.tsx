import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import LanguageSwitch from '@/components/language-switch';

export const metadata: Metadata = {
  title: 'AlfyChat — Bientôt disponible',
  description:
    'AlfyChat : messagerie instantanée sécurisée, chiffrement E2E, hébergée en France, conforme RGPD.',
  keywords: ['messagerie', 'chat', 'chiffrement', 'E2E', 'RGPD', 'France', 'P2P'],
  openGraph: {
    title: 'AlfyChat — Bientôt disponible',
    description: 'Messagerie instantanée sécurisée, chiffrement E2E, hébergée en France.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-bg text-text-primary antialiased">
        <LanguageProvider>
          <LanguageSwitch />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
