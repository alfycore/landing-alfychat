import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — AlfyChat',
  description: 'Politique de confidentialité et protection des données personnelles de AlfyChat. Document détaillé conforme RGPD.',
};

export default function PrivacyPage() {
  return (
    <article className="legal-content">
      <header className="mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-text-muted text-sm mb-4">
          Dernière mise à jour : 6 mars 2026
        </p>
        <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary leading-relaxed">
          La présente Politique de Confidentialité décrit la manière dont l&apos;association AlfyCore
          collecte, utilise, stocke et protège vos données personnelles dans le cadre de l&apos;utilisation
          d&apos;AlfyChat, conformément au Règlement Général sur la Protection des Données (RGPD —
          Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
        </div>
      </header>

      {/* Table des matières */}
      <nav className="mb-12 rounded-xl border border-border/40 bg-surface p-6">
        <h2 className="text-base font-semibold text-text-primary mb-4">Table des matières</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-brand-light list-decimal list-inside">
          <li><a href="#p-1" className="hover:underline">Responsable du traitement</a></li>
          <li><a href="#p-2" className="hover:underline">Données collectées</a></li>
          <li><a href="#p-3" className="hover:underline">Base légale des traitements</a></li>
          <li><a href="#p-4" className="hover:underline">Finalités du traitement</a></li>
          <li><a href="#p-5" className="hover:underline">Chiffrement des données</a></li>
          <li><a href="#p-6" className="hover:underline">Durée de conservation</a></li>
          <li><a href="#p-7" className="hover:underline">Stockage et hébergement</a></li>
          <li><a href="#p-8" className="hover:underline">Transferts de données</a></li>
          <li><a href="#p-9" className="hover:underline">Partage et sous-traitants</a></li>
          <li><a href="#p-10" className="hover:underline">Cookies</a></li>
          <li><a href="#p-11" className="hover:underline">Vos droits RGPD</a></li>
          <li><a href="#p-12" className="hover:underline">Sécurité des données</a></li>
          <li><a href="#p-13" className="hover:underline">Mineurs</a></li>
          <li><a href="#p-14" className="hover:underline">Violation de données</a></li>
          <li><a href="#p-15" className="hover:underline">Modifications</a></li>
          <li><a href="#p-16" className="hover:underline">Contact et réclamation</a></li>
        </ol>
      </nav>

      <section className="space-y-10">
        {/* 1 */}
        <div id="p-1">
          <h2 className="text-lg font-semibold text-text-primary mb-3">1. Responsable du traitement</h2>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1 mb-3">
            <p><strong className="text-text-primary">Responsable :</strong> Association AlfyCore</p>
            <p><strong className="text-text-primary">Statut :</strong> Association loi 1901</p>
            <p><strong className="text-text-primary">Email :</strong> <span className="text-brand-light">contact@alfychat.fr</span></p>
            <p><strong className="text-text-primary">Hébergement :</strong> Serveurs situés en France</p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            L&apos;association AlfyCore est responsable du traitement des données personnelles collectées
            dans le cadre de l&apos;utilisation d&apos;AlfyChat, au sens de l&apos;article 4(7) du RGPD.
          </p>
        </div>

        {/* 2 */}
        <div id="p-2">
          <h2 className="text-lg font-semibold text-text-primary mb-3">2. Données collectées</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Nous appliquons le principe de minimisation des données (Article 5.1.c RGPD). Seules les
            données strictement nécessaires au fonctionnement du Service sont collectées :
          </p>

          <h3 className="text-sm font-semibold text-text-primary mb-2 mt-4">2.1. Données fournies lors de l&apos;inscription</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-text-secondary border border-border/40 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/40">
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Donnée</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Obligatoire</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Finalité</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Adresse email</td>
                  <td className="px-4 py-3">Oui</td>
                  <td className="px-4 py-3">Identification, authentification, notifications de sécurité</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Identifiant (username)</td>
                  <td className="px-4 py-3">Oui</td>
                  <td className="px-4 py-3">Identification unique entre utilisateurs</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Nom d&apos;affichage</td>
                  <td className="px-4 py-3">Oui</td>
                  <td className="px-4 py-3">Affichage dans les conversations</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Mot de passe</td>
                  <td className="px-4 py-3">Oui</td>
                  <td className="px-4 py-3">Authentification (stocké hashé, jamais en clair)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-semibold text-text-primary mb-2">2.2. Données générées par l&apos;utilisation du Service</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-text-secondary border border-border/40 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/40">
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Donnée</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Finalité</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Conservation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Messages (chiffrés AES-256)</td>
                  <td className="px-4 py-3">Fonctionnement de la messagerie</td>
                  <td className="px-4 py-3">30 jours serveur, puis P2P</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Métadonnées de message (horodatage, expéditeur, destinataire)</td>
                  <td className="px-4 py-3">Acheminement, sync, affichage</td>
                  <td className="px-4 py-3">30 jours</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Statut de présence</td>
                  <td className="px-4 py-3">Fonctionnalité &quot;en ligne&quot;</td>
                  <td className="px-4 py-3">Temps réel uniquement (non stocké)</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Clés de chiffrement (niveaux 1 et 2)</td>
                  <td className="px-4 py-3">Chiffrement/déchiffrement</td>
                  <td className="px-4 py-3">Durée de la conversation</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Liste d&apos;amis et groupes</td>
                  <td className="px-4 py-3">Fonctionnement social</td>
                  <td className="px-4 py-3">Durée du compte</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Adresse IP</td>
                  <td className="px-4 py-3">Sécurité, prévention des abus, journalisation</td>
                  <td className="px-4 py-3">12 mois</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-semibold text-text-primary mb-2">2.3. Données NON collectées</h3>
          <p className="text-text-secondary leading-relaxed">
            AlfyChat ne collecte <strong className="text-text-primary">aucune</strong> des données suivantes :
            numéro de téléphone, localisation GPS, contacts du téléphone, historique de navigation,
            données biométriques, données de santé, opinions politiques ou religieuses.
          </p>
        </div>

        {/* 3 */}
        <div id="p-3">
          <h2 className="text-lg font-semibold text-text-primary mb-3">3. Base légale des traitements</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Conformément à l&apos;article 6 du RGPD, chaque traitement repose sur une base légale spécifique :
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-text-secondary border border-border/40 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/40">
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Traitement</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Base légale</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Article RGPD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Gestion du compte et messagerie</td>
                  <td className="px-4 py-3">Exécution du contrat</td>
                  <td className="px-4 py-3">Art. 6.1.b</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Acceptation des CGU</td>
                  <td className="px-4 py-3">Consentement</td>
                  <td className="px-4 py-3">Art. 6.1.a</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Journalisation des adresses IP</td>
                  <td className="px-4 py-3">Intérêt légitime (sécurité)</td>
                  <td className="px-4 py-3">Art. 6.1.f</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Conservation légale des données de connexion</td>
                  <td className="px-4 py-3">Obligation légale</td>
                  <td className="px-4 py-3">Art. 6.1.c</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 */}
        <div id="p-4">
          <h2 className="text-lg font-semibold text-text-primary mb-3">4. Finalités du traitement</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            Vos données sont traitées exclusivement pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li>Fourniture et fonctionnement du service de messagerie</li>
            <li>Gestion de votre compte utilisateur</li>
            <li>Chiffrement et déchiffrement des messages</li>
            <li>Synchronisation des messages entre vos appareils (30 jours serveur)</li>
            <li>Notifications en temps réel et statuts de présence</li>
            <li>Sécurité du Service : prévention des accès non autorisés, détection des abus</li>
            <li>Respect des obligations légales (conservation des données de connexion — décret n°2011-219)</li>
            <li>Support technique en cas de demande de l&apos;Utilisateur</li>
            <li>Amélioration du Service (statistiques anonymisées uniquement)</li>
          </ul>
        </div>

        {/* 5 */}
        <div id="p-5">
          <h2 className="text-lg font-semibold text-text-primary mb-3">5. Chiffrement des données</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Le chiffrement est un élément central d&apos;AlfyChat. Nous utilisons l&apos;algorithme AES-256-GCM,
            un standard cryptographique audité et recommandé par l&apos;ANSSI (Agence Nationale de la
            Sécurité des Systèmes d&apos;Information).
          </p>
          <div className="space-y-3 mb-3">
            <div className="pl-4 border-l-2 border-brand/30 text-text-secondary text-sm">
              <strong className="text-text-primary">Niveau 1 — Standard :</strong> Clé stockée sur le serveur,
              chiffrée au repos. L&apos;Éditeur a la capacité technique d&apos;accéder à la clé. Les messages
              sont récupérables en cas de changement d&apos;appareil. Recommandé pour les groupes.
            </div>
            <div className="pl-4 border-l-2 border-warning/40 text-text-secondary text-sm">
              <strong className="text-text-primary">Niveau 2 — Renforcé :</strong> Clé transmise au client avec
              backup serveur chiffré. Le backup ne peut être déchiffré qu&apos;avec la coopération de
              l&apos;Utilisateur. Équilibre entre sécurité et récupérabilité.
            </div>
            <div className="pl-4 border-l-2 border-danger/40 text-text-secondary text-sm">
              <strong className="text-text-primary">Niveau 3 — Maximum (E2E pur) :</strong> Clé transmise au
              client puis supprimée du serveur. Zéro connaissance côté serveur. Perte irréversible
              en cas de perte du client.
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Les appels vocaux P2P utilisent systématiquement un chiffrement E2E. Les flux audio
            ne transitent pas par nos serveurs.
          </p>
        </div>

        {/* 6 */}
        <div id="p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-3">6. Durée de conservation</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-text-secondary border border-border/40 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/40">
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Donnée</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Durée</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Données du compte</td>
                  <td className="px-4 py-3">Durée du compte + 30j après suppression</td>
                  <td className="px-4 py-3">Exécution du contrat + période de grâce</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Messages chiffrés</td>
                  <td className="px-4 py-3">30 jours sur serveur</td>
                  <td className="px-4 py-3">Synchronisation inter-appareils</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Adresses IP / logs de connexion</td>
                  <td className="px-4 py-3">12 mois</td>
                  <td className="px-4 py-3">Obligation légale (décret n°2011-219)</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3">Clés de chiffrement (niv. 1-2)</td>
                  <td className="px-4 py-3">Durée de la conversation</td>
                  <td className="px-4 py-3">Fonctionnement du chiffrement</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Clés de chiffrement (niv. 3)</td>
                  <td className="px-4 py-3">Supprimées immédiatement après transmission</td>
                  <td className="px-4 py-3">E2E pur — zéro connaissance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 7 */}
        <div id="p-7">
          <h2 className="text-lg font-semibold text-text-primary mb-3">7. Stockage et hébergement</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">7.1.</strong> L&apos;ensemble des données est stocké sur des serveurs
            physiquement situés en France, opérés par des hébergeurs conformes au RGPD.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">7.2.</strong> L&apos;architecture repose sur des services isolés
            (microservices) : service d&apos;authentification, service de messagerie, service utilisateur,
            service vocal — chacun avec sa propre base de données.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">7.3.</strong> Les bases de données utilisent MySQL 8 avec chiffrement
            au repos. Les communications internes utilisent Redis 7 avec des canaux pub/sub sécurisés.
          </p>
        </div>

        {/* 8 */}
        <div id="p-8">
          <h2 className="text-lg font-semibold text-text-primary mb-3">8. Transferts de données</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">8.1.</strong> Aucun transfert de données personnelles n&apos;est
            effectué hors de l&apos;Union Européenne ou de l&apos;Espace Économique Européen.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">8.2.</strong> En cas de nécessité future de transfert vers un pays
            tiers, des garanties appropriées seraient mises en place conformément aux articles 44 à 49
            du RGPD (clauses contractuelles types, décision d&apos;adéquation, etc.), et les Utilisateurs
            seraient informés préalablement.
          </p>
        </div>

        {/* 9 */}
        <div id="p-9">
          <h2 className="text-lg font-semibold text-text-primary mb-3">9. Partage de données et sous-traitants</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">9.1.</strong> Vos données ne sont <strong>jamais</strong> vendues,
            louées ou partagées à des tiers à des fins commerciales ou publicitaires.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">9.2.</strong> Les données ne peuvent être communiquées à des tiers
            que dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Obligation légale : réquisition judiciaire, demande d&apos;une autorité administrative compétente</li>
            <li>Sous-traitants techniques : uniquement les prestataires d&apos;hébergement, liés par un contrat
              de sous-traitance conforme à l&apos;article 28 du RGPD</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">9.3.</strong> Dans le cas d&apos;une réquisition judiciaire, seules les
            données non chiffrées pourront être fournies. Du fait du chiffrement E2E (niveaux 2 et 3),
            le contenu des messages est techniquement inaccessible à l&apos;Éditeur.
          </p>
        </div>

        {/* 10 */}
        <div id="p-10">
          <h2 className="text-lg font-semibold text-text-primary mb-3">10. Cookies</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">10.1.</strong> AlfyChat utilise exclusivement des cookies
            strictement nécessaires (exemptés de consentement selon la directive ePrivacy) :
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm text-text-secondary border border-border/40 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/40">
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Cookie</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Finalité</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3 font-mono text-xs">auth_token</td>
                  <td className="px-4 py-3">Authentification de session (JWT)</td>
                  <td className="px-4 py-3">7 jours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">preferences</td>
                  <td className="px-4 py-3">Langue, thème d&apos;interface</td>
                  <td className="px-4 py-3">1 an</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">10.2.</strong> Aucun cookie publicitaire, analytique, de suivi
            ou de profilage n&apos;est utilisé. Aucun outil de tracking tiers (Google Analytics, Facebook
            Pixel, etc.) n&apos;est intégré.
          </p>
        </div>

        {/* 11 */}
        <div id="p-11">
          <h2 className="text-lg font-semibold text-text-primary mb-3">11. Vos droits (RGPD)</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { title: 'Droit d\'accès', art: 'Art. 15', desc: 'Obtenir la confirmation que vos données sont traitées et en recevoir une copie complète dans un format lisible.' },
              { title: 'Droit de rectification', art: 'Art. 16', desc: 'Corriger des données inexactes ou incomplètes vous concernant (modifiable directement dans les paramètres du compte).' },
              { title: 'Droit à l\'effacement', art: 'Art. 17', desc: 'Obtenir la suppression de vos données et de votre compte. Exerçable directement via les paramètres de l\'application.' },
              { title: 'Droit à la limitation', art: 'Art. 18', desc: 'Demander la limitation du traitement dans les cas prévus par le RGPD (contestation de l\'exactitude, traitement illicite, etc.).' },
              { title: 'Droit à la portabilité', art: 'Art. 20', desc: 'Recevoir vos données dans un format structuré et lisible par machine (JSON). Exerçable via l\'export de données intégré.' },
              { title: 'Droit d\'opposition', art: 'Art. 21', desc: 'Vous opposer au traitement fondé sur l\'intérêt légitime, sous réserve de motifs légitimes impérieux de la part de l\'Éditeur.' },
            ].map((right) => (
              <div
                key={right.title}
                className="rounded-xl border border-border/40 bg-surface p-4"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-text-primary">{right.title}</h3>
                  <span className="text-[10px] font-mono text-text-muted px-1.5 py-0.5 rounded bg-surface-2/60 border border-border/40">{right.art}</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">Exercice des droits :</strong> Vous pouvez exercer vos droits :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
            <li>Via les paramètres de votre compte (export, suppression)</li>
            <li>Par email à : <span className="text-brand-light">contact@alfychat.fr</span></li>
          </ul>
          <p className="text-text-secondary leading-relaxed mt-2">
            Nous nous engageons à répondre dans un délai d&apos;un mois (extensible à trois mois en cas de
            complexité, conformément à l&apos;article 12.3 du RGPD). Une vérification d&apos;identité pourra
            être demandée.
          </p>
        </div>

        {/* 12 */}
        <div id="p-12">
          <h2 className="text-lg font-semibold text-text-primary mb-3">12. Sécurité des données</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            Nous mettons en œuvre des mesures techniques et organisationnelles conformes à l&apos;état de l&apos;art
            (Article 32 RGPD) pour protéger vos données :
          </p>
          <ul className="space-y-2 text-text-secondary text-sm ml-4">
            <li className="pl-3 border-l-2 border-border">
              <strong className="text-text-primary">Chiffrement :</strong> AES-256-GCM pour les messages,
              TLS 1.3 pour les communications en transit (HTTPS/WSS)
            </li>
            <li className="pl-3 border-l-2 border-border">
              <strong className="text-text-primary">Authentification :</strong> Mots de passe hashés avec
              bcrypt (facteur de coût adaptif), tokens JWT signés
            </li>
            <li className="pl-3 border-l-2 border-border">
              <strong className="text-text-primary">Architecture :</strong> Microservices isolés, chaque service
              ayant sa propre base de données et ses propres permissions
            </li>
            <li className="pl-3 border-l-2 border-border">
              <strong className="text-text-primary">Réseau :</strong> Pare-feu applicatif, limitation de débit
              (rate limiting), protection anti-DDoS
            </li>
            <li className="pl-3 border-l-2 border-border">
              <strong className="text-text-primary">Accès :</strong> Principe du moindre privilège, journalisation
              des accès administrateurs
            </li>
          </ul>
        </div>

        {/* 13 */}
        <div id="p-13">
          <h2 className="text-lg font-semibold text-text-primary mb-3">13. Mineurs</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">13.1.</strong> Le Service est accessible à partir de 13 ans.
            Conformément à l&apos;article 8 du RGPD et à l&apos;article 45 de la loi Informatique et Libertés,
            le traitement des données des mineurs de moins de 15 ans requiert le consentement du
            titulaire de l&apos;autorité parentale.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">13.2.</strong> Si nous apprenons que des données ont été collectées
            auprès d&apos;un mineur de moins de 13 ans, nous supprimerons le compte et les données
            associées dans les meilleurs délais.
          </p>
        </div>

        {/* 14 */}
        <div id="p-14">
          <h2 className="text-lg font-semibold text-text-primary mb-3">14. Violation de données</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">14.1.</strong> En cas de violation de données à caractère personnel
            (accès non autorisé, perte, divulgation), l&apos;Éditeur s&apos;engage à :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Notifier la CNIL dans les 72 heures suivant la prise de connaissance (Article 33 RGPD)</li>
            <li>Informer les Utilisateurs concernés sans délai injustifié si la violation est susceptible
              d&apos;engendrer un risque élevé pour leurs droits et libertés (Article 34 RGPD)</li>
            <li>Documenter l&apos;incident et les mesures correctives prises</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">14.2.</strong> Du fait du chiffrement AES-256, en cas de fuite
            de base de données, les contenus des messages resteraient illisibles sans les clés de
            déchiffrement correspondantes.
          </p>
        </div>

        {/* 15 */}
        <div id="p-15">
          <h2 className="text-lg font-semibold text-text-primary mb-3">15. Modifications de la politique</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">15.1.</strong> Nous nous réservons le droit de modifier cette
            Politique de Confidentialité. La date de dernière mise à jour est indiquée en haut du document.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">15.2.</strong> Les modifications substantielles seront notifiées
            par email et/ou via l&apos;application. La poursuite de l&apos;utilisation du Service après notification
            vaut acceptation des modifications.
          </p>
        </div>

        {/* 16 */}
        <div id="p-16">
          <h2 className="text-lg font-semibold text-text-primary mb-3">16. Contact et réclamation</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Pour toute question relative à la protection de vos données ou pour exercer vos droits :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1 mb-4">
            <p><strong className="text-text-primary">Association AlfyCore</strong></p>
            <p>Email : <span className="text-brand-light">contact@alfychat.fr</span></p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Si vous estimez que vos droits ne sont pas respectés après avoir contacté l&apos;Éditeur,
            vous pouvez introduire une réclamation auprès de la <strong className="text-text-primary">CNIL</strong>{' '}
            (Commission Nationale de l&apos;Informatique et des Libertés) :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1 mt-3">
            <p><strong className="text-text-primary">CNIL</strong></p>
            <p>3, Place de Fontenoy — TSA 80715 — 75334 PARIS CEDEX 07</p>
            <p>Tél. : 01 53 73 22 22</p>
            <p>Site : <span className="text-brand-light">www.cnil.fr</span></p>
          </div>
        </div>
      </section>

      {/* Links */}
      <div className="mt-12 pt-8 border-t border-border/40 flex flex-wrap gap-4 text-sm">
        <Link href="/legal/cgu" className="text-brand-light hover:underline">
          Conditions d&apos;utilisation →
        </Link>
        <Link href="/legal/mentions" className="text-brand-light hover:underline">
          Mentions Légales →
        </Link>
      </div>
    </article>
  );
}
