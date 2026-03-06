import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales — AlfyChat',
  description: 'Mentions légales du site AlfyChat conformément à la LCEN (loi n°2004-575).',
};

export default function MentionsPage() {
  return (
    <article className="legal-content">
      <header className="mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4">
          Mentions Légales
        </h1>
        <p className="text-text-muted text-sm mb-4">
          Dernière mise à jour : 6 mars 2026
        </p>
        <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary leading-relaxed">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans
          l&apos;Économie Numérique (LCEN), et notamment son article 6, il est porté à la connaissance
          des utilisateurs et visiteurs du site AlfyChat les informations suivantes.
        </div>
      </header>

      {/* Table des matières */}
      <nav className="mb-12 rounded-xl border border-border/40 bg-surface p-6">
        <h2 className="text-base font-semibold text-text-primary mb-4">Table des matières</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-brand-light list-decimal list-inside">
          <li><a href="#m-1" className="hover:underline">Éditeur du site</a></li>
          <li><a href="#m-2" className="hover:underline">Directeur de la publication</a></li>
          <li><a href="#m-3" className="hover:underline">Hébergement</a></li>
          <li><a href="#m-4" className="hover:underline">Propriété intellectuelle</a></li>
          <li><a href="#m-5" className="hover:underline">Conditions d&apos;accès</a></li>
          <li><a href="#m-6" className="hover:underline">Liens hypertextes</a></li>
          <li><a href="#m-7" className="hover:underline">Responsabilité</a></li>
          <li><a href="#m-8" className="hover:underline">Droit applicable</a></li>
          <li><a href="#m-9" className="hover:underline">Contact</a></li>
        </ol>
      </nav>

      <section className="space-y-10">
        {/* 1 */}
        <div id="m-1">
          <h2 className="text-lg font-semibold text-text-primary mb-3">1. Éditeur du site</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Le site AlfyChat est édité par :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1">
            <p><strong className="text-text-primary">Dénomination :</strong> Association AlfyCore</p>
            <p><strong className="text-text-primary">Forme juridique :</strong> Association loi 1901</p>
            <p><strong className="text-text-primary">Siège social :</strong> France</p>
            <p><strong className="text-text-primary">Email :</strong> <span className="text-brand-light">contact@alfychat.fr</span></p>
            <p><strong className="text-text-primary">Objet :</strong> Développement, maintenance et mise à disposition d&apos;un service de messagerie instantanée chiffrée</p>
          </div>
        </div>

        {/* 2 */}
        <div id="m-2">
          <h2 className="text-lg font-semibold text-text-primary mb-3">2. Directeur de la publication</h2>
          <p className="text-text-secondary leading-relaxed">
            Le directeur de la publication est le Président de l&apos;association AlfyCore, en sa qualité
            de représentant légal de l&apos;association, conformément à l&apos;article 6-III-1 de la LCEN.
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            Contact : <span className="text-brand-light">contact@alfychat.fr</span>
          </p>
        </div>

        {/* 3 */}
        <div id="m-3">
          <h2 className="text-lg font-semibold text-text-primary mb-3">3. Hébergement</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Le site et l&apos;application AlfyChat sont hébergés par :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1 mb-3">
            <p><strong className="text-text-primary">Localisation des serveurs :</strong> France</p>
            <p><strong className="text-text-primary">Infrastructure :</strong> Serveurs dédiés, conformes RGPD</p>
            <p><strong className="text-text-primary">Sécurité :</strong> Chiffrement au repos, communications TLS 1.3</p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Conformément à l&apos;article 6-I-2 de la LCEN, l&apos;hébergeur conserve les données de nature
            à permettre l&apos;identification de toute personne ayant contribué à la création d&apos;un contenu
            mis en ligne, pour une durée de 12 mois.
          </p>
        </div>

        {/* 4 */}
        <div id="m-4">
          <h2 className="text-lg font-semibold text-text-primary mb-3">4. Propriété intellectuelle</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">4.1.</strong> L&apos;ensemble du contenu du site AlfyChat
            (textes, graphismes, logos, icônes, images, code source, architecture logicielle) est
            la propriété exclusive de l&apos;association AlfyCore, sauf mention contraire, et est protégé
            par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">4.2.</strong> Toute reproduction, représentation, modification,
            publication, transmission, ou exploitation de tout ou partie du contenu du site, par quelque
            procédé que ce soit, sans l&apos;autorisation préalable écrite de l&apos;association AlfyCore, est
            strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2
            et suivants du Code de la Propriété Intellectuelle.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">4.3.</strong> La marque AlfyChat et le logo associé sont des
            marques déposées ou en cours de dépôt. Toute utilisation non autorisée est prohibée.
          </p>
        </div>

        {/* 5 */}
        <div id="m-5">
          <h2 className="text-lg font-semibold text-text-primary mb-3">5. Conditions d&apos;accès</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">5.1.</strong> Le site AlfyChat est accessible gratuitement
            depuis n&apos;importe quel appareil disposant d&apos;un accès Internet. Les frais d&apos;accès au réseau
            et de communication sont à la charge de l&apos;utilisateur.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">5.2.</strong> L&apos;Éditeur se réserve le droit de suspendre
            ou de restreindre l&apos;accès au site pour des raisons de maintenance, de mise à jour, ou pour
            toute autre raison technique, sans notification préalable et sans que cela ne donne droit
            à une quelconque indemnisation.
          </p>
        </div>

        {/* 6 */}
        <div id="m-6">
          <h2 className="text-lg font-semibold text-text-primary mb-3">6. Liens hypertextes</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">6.1.</strong> Le site peut contenir des liens hypertextes vers
            d&apos;autres sites Internet. L&apos;Éditeur n&apos;exerce aucun contrôle sur le contenu de ces sites
            tiers et décline toute responsabilité quant à leur contenu ou aux traitements de données
            personnelles qu&apos;ils effectuent.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">6.2.</strong> La mise en place de liens hypertextes vers le
            site AlfyChat est autorisée sans autorisation préalable, à condition que cela ne porte pas
            atteinte à l&apos;image de l&apos;Éditeur.
          </p>
        </div>

        {/* 7 */}
        <div id="m-7">
          <h2 className="text-lg font-semibold text-text-primary mb-3">7. Responsabilité</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">7.1.</strong> L&apos;Éditeur met tout en œuvre pour fournir des
            informations fiables et un service de qualité. Toutefois, il ne saurait être tenu responsable
            des erreurs, d&apos;une absence de disponibilité des informations, ou de la présence de virus
            sur le site.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">7.2.</strong> Conformément à l&apos;article 6-I-7 de la LCEN,
            l&apos;Éditeur n&apos;est pas soumis à une obligation générale de surveillance des informations
            transmises ou stockées. Toutefois, il s&apos;engage à agir promptement pour retirer tout contenu
            manifestement illicite porté à sa connaissance.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">7.3.</strong> En raison de la nature chiffrée des
            communications sur AlfyChat (chiffrement AES-256-GCM, E2E pour les niveaux 2 et 3),
            l&apos;Éditeur n&apos;a pas techniquement accès au contenu des messages échangés entre les utilisateurs.
          </p>
        </div>

        {/* 8 */}
        <div id="m-8">
          <h2 className="text-lg font-semibold text-text-primary mb-3">8. Droit applicable</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">8.1.</strong> Les présentes Mentions Légales sont régies par
            le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">8.2.</strong> Les textes de référence applicables sont notamment :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mt-2">
            <li>Loi n°2004-575 du 21 juin 2004 (LCEN)</li>
            <li>Règlement UE 2016/679 (RGPD)</li>
            <li>Loi n°78-17 du 6 janvier 1978 (Informatique et Libertés)</li>
            <li>Code de la Propriété Intellectuelle</li>
            <li>Code Pénal (articles relatifs aux infractions informatiques)</li>
          </ul>
        </div>

        {/* 9 */}
        <div id="m-9">
          <h2 className="text-lg font-semibold text-text-primary mb-3">9. Contact</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Pour toute question ou notification relative aux présentes Mentions Légales :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1">
            <p><strong className="text-text-primary">Association AlfyCore</strong></p>
            <p>Email : <span className="text-brand-light">contact@alfychat.fr</span></p>
          </div>
        </div>
      </section>

      {/* Links */}
      <div className="mt-12 pt-8 border-t border-border/40 flex flex-wrap gap-4 text-sm">
        <Link href="/legal/cgu" className="text-brand-light hover:underline">
          Conditions d&apos;utilisation →
        </Link>
        <Link href="/legal/privacy" className="text-brand-light hover:underline">
          Politique de Confidentialité →
        </Link>
      </div>
    </article>
  );
}
