import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — AlfyChat",
  description: "Conditions générales d'utilisation de la plateforme AlfyChat. Document complet et détaillé.",
};

export default function CGUPage() {
  return (
    <article className="legal-content">
      <header className="mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-text-muted text-sm mb-4">
          Dernière mise à jour : 6 mars 2026
        </p>
        <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary leading-relaxed">
          Les présentes Conditions Générales d&apos;Utilisation constituent un contrat juridiquement contraignant
          entre vous (&quot;l&apos;Utilisateur&quot;) et l&apos;association AlfyCore (&quot;l&apos;Éditeur&quot;). Veuillez les lire
          attentivement avant d&apos;utiliser AlfyChat. En accédant ou en utilisant le service, vous reconnaissez
          avoir lu, compris et accepté l&apos;intégralité des présentes CGU.
        </div>
      </header>

      {/* Table des matières */}
      <nav className="mb-12 rounded-xl border border-border/40 bg-surface p-6">
        <h2 className="text-base font-semibold text-text-primary mb-4">Table des matières</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-brand-light list-decimal list-inside">
          <li><a href="#article-1" className="hover:underline">Définitions</a></li>
          <li><a href="#article-2" className="hover:underline">Objet</a></li>
          <li><a href="#article-3" className="hover:underline">Acceptation des CGU</a></li>
          <li><a href="#article-4" className="hover:underline">Description du service</a></li>
          <li><a href="#article-5" className="hover:underline">Inscription et compte</a></li>
          <li><a href="#article-6" className="hover:underline">Obligations de l&apos;Utilisateur</a></li>
          <li><a href="#article-7" className="hover:underline">Contenus interdits</a></li>
          <li><a href="#article-8" className="hover:underline">Chiffrement et sécurité</a></li>
          <li><a href="#article-9" className="hover:underline">Stockage des données</a></li>
          <li><a href="#article-10" className="hover:underline">Propriété intellectuelle</a></li>
          <li><a href="#article-11" className="hover:underline">Disponibilité du service</a></li>
          <li><a href="#article-12" className="hover:underline">Responsabilité de l&apos;Éditeur</a></li>
          <li><a href="#article-13" className="hover:underline">Responsabilité de l&apos;Utilisateur</a></li>
          <li><a href="#article-14" className="hover:underline">Modération et signalement</a></li>
          <li><a href="#article-15" className="hover:underline">Suspension et résiliation</a></li>
          <li><a href="#article-16" className="hover:underline">Protection des données</a></li>
          <li><a href="#article-17" className="hover:underline">Cookies</a></li>
          <li><a href="#article-18" className="hover:underline">Communications</a></li>
          <li><a href="#article-19" className="hover:underline">Mineurs</a></li>
          <li><a href="#article-20" className="hover:underline">Force majeure</a></li>
          <li><a href="#article-21" className="hover:underline">Modification des CGU</a></li>
          <li><a href="#article-22" className="hover:underline">Nullité partielle</a></li>
          <li><a href="#article-23" className="hover:underline">Droit applicable et litiges</a></li>
          <li><a href="#article-24" className="hover:underline">Contact</a></li>
        </ol>
      </nav>

      <section className="space-y-10">
        {/* Article 1 */}
        <div id="article-1">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 1 — Définitions</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Dans les présentes CGU, les termes suivants ont la signification définie ci-dessous :
          </p>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;AlfyChat&quot; ou &quot;le Service&quot;</strong> : désigne la plateforme
              de messagerie instantanée chiffrée accessible via l&apos;application web, développée et éditée par l&apos;association AlfyCore.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Éditeur&quot;</strong> : désigne l&apos;association AlfyCore,
              association loi 1901, éditrice et responsable du traitement des données du Service.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Utilisateur&quot;</strong> : désigne toute personne physique
              ayant créé un compte sur AlfyChat et utilisant le Service.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Compte&quot;</strong> : désigne l&apos;espace personnel de
              l&apos;Utilisateur, créé lors de l&apos;inscription, identifié par une adresse email unique et un identifiant.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Contenu&quot;</strong> : désigne tout message texte, fichier,
              image, lien, réaction, ou toute autre donnée transmise par l&apos;Utilisateur via le Service.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Chiffrement E2E&quot;</strong> : désigne le chiffrement de bout
              en bout (End-to-End Encryption), mécanisme cryptographique garantissant que seuls l&apos;expéditeur
              et le(s) destinataire(s) peuvent lire le contenu des messages.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;Groupe&quot;</strong> : désigne une conversation impliquant
              trois Utilisateurs ou plus, avec un système de rôles et de permissions.
            </li>
            <li className="pl-4 border-l-2 border-border">
              <strong className="text-text-primary">&quot;P2P&quot;</strong> : désigne le mécanisme pair-à-pair
              (peer-to-peer) utilisé pour le stockage décentralisé de l&apos;historique des messages au-delà de 30 jours.
            </li>
          </ul>
        </div>

        {/* Article 2 */}
        <div id="article-2">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 2 — Objet</h2>
          <p className="text-text-secondary leading-relaxed">
            Les présentes Conditions Générales d&apos;Utilisation ont pour objet de définir les conditions
            d&apos;accès et d&apos;utilisation du Service AlfyChat, les droits et obligations respectifs de
            l&apos;Éditeur et de l&apos;Utilisateur, ainsi que les modalités de fonctionnement du chiffrement,
            du stockage des données et de la gestion des comptes. Elles constituent le contrat entre
            l&apos;Éditeur et l&apos;Utilisateur pour l&apos;utilisation du Service.
          </p>
        </div>

        {/* Article 3 */}
        <div id="article-3">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 3 — Acceptation des CGU</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">3.1.</strong> L&apos;accès et l&apos;utilisation du Service sont subordonnés
            à l&apos;acceptation préalable et sans réserve des présentes CGU. Cette acceptation est matérialisée par :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>La case à cocher lors de la création du compte</li>
            <li>L&apos;utilisation effective du Service après inscription</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">3.2.</strong> L&apos;Utilisateur est invité à lire attentivement les CGU
            dans leur intégralité, ainsi que la{' '}
            <Link href="/legal/privacy" className="text-brand-light hover:underline">
              Politique de Confidentialité
            </Link>{' '}
            et les{' '}
            <Link href="/legal/mentions" className="text-brand-light hover:underline">
              Mentions Légales
            </Link>
            , qui complètent les présentes.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">3.3.</strong> Si l&apos;Utilisateur n&apos;accepte pas les CGU, il ne doit
            pas accéder au Service ni créer de compte.
          </p>
        </div>

        {/* Article 4 */}
        <div id="article-4">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 4 — Description du service</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            <strong className="text-text-primary">4.1.</strong> AlfyChat est un service de messagerie instantanée
            sécurisée, gratuit, hébergé en France, offrant les fonctionnalités suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Messagerie privée en temps réel (via WebSocket)</li>
            <li>Conversations de groupe avec système de rôles (administrateur, modérateur, membre)</li>
            <li>Chiffrement AES-256-GCM à 3 niveaux de sécurité (cf. Article 8)</li>
            <li>Appels vocaux pair-à-pair chiffrés de bout en bout</li>
            <li>Système de présence en ligne et statuts de lecture</li>
            <li>Notifications en temps réel</li>
            <li>Gestion d&apos;amis et de contacts</li>
            <li>Personnalisation de l&apos;interface (thèmes, mode sombre natif)</li>
            <li>Stockage hybride serveur/P2P (cf. Article 9)</li>
            <li>Export de données conforme à l&apos;article 20 du RGPD</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">4.2.</strong> Le Service est fourni &quot;en l&apos;état&quot;. L&apos;Éditeur
            se réserve le droit de faire évoluer les fonctionnalités, d&apos;en ajouter ou d&apos;en retirer,
            sans que cela constitue une modification substantielle des CGU.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">4.3.</strong> Le Service est accessible gratuitement.
            L&apos;Éditeur se réserve la possibilité de proposer des fonctionnalités premium optionnelles
            à l&apos;avenir, qui feraient l&apos;objet de conditions spécifiques.
          </p>
        </div>

        {/* Article 5 */}
        <div id="article-5">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 5 — Inscription et compte</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">5.1. Conditions d&apos;inscription.</strong> L&apos;inscription est
            gratuite et ouverte à toute personne physique âgée d&apos;au moins 13 ans (cf. Article 19).
            L&apos;Utilisateur doit fournir les informations suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Une adresse email valide et vérifiable</li>
            <li>Un identifiant unique (username)</li>
            <li>Un nom d&apos;affichage</li>
            <li>Un mot de passe d&apos;au minimum 8 caractères</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">5.2. Exactitude des informations.</strong> L&apos;Utilisateur
            s&apos;engage à fournir des informations exactes, complètes et à jour. Toute fausse déclaration
            pourra entraîner la suspension ou la suppression du compte.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">5.3. Sécurité du compte.</strong> L&apos;Utilisateur est seul
            responsable de la confidentialité de ses identifiants de connexion (email et mot de passe).
            Toute activité réalisée depuis son compte est présumée être de son fait. En cas de
            compromission suspectée, l&apos;Utilisateur doit immédiatement modifier son mot de passe et
            contacter l&apos;Éditeur.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">5.4. Unicité du compte.</strong> Chaque personne physique ne
            peut détenir qu&apos;un seul compte. La création de comptes multiples dans le but de contourner
            une sanction est interdite.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">5.5. Suppression du compte.</strong> L&apos;Utilisateur peut à tout
            moment supprimer son compte depuis les paramètres de l&apos;application. La suppression entraîne
            l&apos;effacement irréversible de toutes les données personnelles stockées sur nos serveurs,
            conformément à l&apos;article 17 du RGPD (droit à l&apos;effacement). Les messages déjà distribués
            aux autres Utilisateurs ne seront pas supprimés de leurs appareils.
          </p>
        </div>

        {/* Article 6 */}
        <div id="article-6">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 6 — Obligations de l&apos;Utilisateur</h2>
          <p className="text-text-secondary leading-relaxed mb-2">L&apos;Utilisateur s&apos;engage à :</p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Utiliser le Service de manière conforme aux lois et réglementations en vigueur en France et dans l&apos;Union Européenne</li>
            <li>Respecter les droits des autres Utilisateurs, notamment leur droit à la vie privée et à l&apos;image</li>
            <li>Ne pas porter atteinte au bon fonctionnement du Service (attaques DDoS, exploitation de failles, injection, etc.)</li>
            <li>Ne pas tenter d&apos;accéder de manière non autorisée aux systèmes, serveurs ou données de l&apos;Éditeur</li>
            <li>Ne pas utiliser des outils automatisés (bots, scripts, scrapers) sans autorisation écrite de l&apos;Éditeur</li>
            <li>Ne pas revendre, redistribuer ou sous-licencier l&apos;accès au Service</li>
            <li>Signaler tout contenu illicite ou tout comportement abusif d&apos;un autre Utilisateur</li>
          </ul>
        </div>

        {/* Article 7 */}
        <div id="article-7">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 7 — Contenus interdits</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">7.1.</strong> Il est strictement interdit de diffuser via le Service
            tout contenu :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Constituant une incitation à la haine, la violence ou la discrimination (art. 24 de la loi du 29 juillet 1881)</li>
            <li>Pédopornographique ou à caractère sexuel impliquant des mineurs (art. 227-23 du Code pénal)</li>
            <li>Constituant du harcèlement, des menaces ou de l&apos;intimidation (art. 222-33-2-2 du Code pénal)</li>
            <li>Portant atteinte à la vie privée d&apos;autrui (art. 226-1 du Code pénal)</li>
            <li>Usurpant l&apos;identité d&apos;un tiers (art. 226-4-1 du Code pénal)</li>
            <li>Constituant de la diffamation ou de l&apos;injure (loi du 29 juillet 1881)</li>
            <li>Faisant l&apos;apologie du terrorisme (art. 421-2-5 du Code pénal)</li>
            <li>Contenant des logiciels malveillants (virus, malware, ransomware)</li>
            <li>Constituant du spam, de la publicité non sollicitée ou du phishing</li>
            <li>Violant les droits de propriété intellectuelle d&apos;un tiers</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">7.2.</strong> L&apos;Éditeur rappelle que le chiffrement de bout en bout
            ne saurait servir de prétexte à la commission d&apos;infractions. Les Utilisateurs restent
            personnellement responsables des contenus qu&apos;ils échangent.
          </p>
        </div>

        {/* Article 8 */}
        <div id="article-8">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 8 — Chiffrement et sécurité</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            <strong className="text-text-primary">8.1. Architecture de chiffrement.</strong> AlfyChat utilise le
            chiffrement AES-256-GCM (Advanced Encryption Standard, 256 bits, mode Galois/Counter Mode),
            un standard cryptographique reconnu et recommandé par l&apos;ANSSI. Trois niveaux de sécurité sont proposés :
          </p>
          <div className="space-y-3 mb-4">
            <div className="rounded-xl border border-brand/20 bg-surface p-4">
              <h3 className="text-sm font-semibold text-brand-light mb-1">Niveau 1 — Standard</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                La clé de chiffrement est générée et stockée sur le serveur. Les messages sont chiffrés
                en transit et au repos. L&apos;Éditeur peut techniquement accéder aux clés en cas d&apos;obligation
                légale (réquisition judiciaire). Ce niveau est recommandé pour les groupes et convient
                à la majorité des usages. Il permet la synchronisation automatique entre appareils et
                la récupération des messages en cas de changement d&apos;appareil.
              </p>
            </div>
            <div className="rounded-xl border border-warning/20 bg-surface p-4">
              <h3 className="text-sm font-semibold text-warning mb-1">Niveau 2 — Renforcé</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                La clé de chiffrement est transmise à l&apos;Utilisateur, avec un backup chiffré conservé
                sur le serveur. Ce niveau offre une confidentialité accrue tout en permettant la
                récupération de la clé en cas de perte. Le backup serveur est lui-même chiffré et
                ne peut être déchiffré qu&apos;avec la coopération de l&apos;Utilisateur.
              </p>
            </div>
            <div className="rounded-xl border border-danger/20 bg-surface p-4">
              <h3 className="text-sm font-semibold text-danger mb-1">Niveau 3 — Maximum</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                La clé de chiffrement est transmise à l&apos;Utilisateur puis <strong>définitivement supprimée du
                serveur</strong>. Ce niveau garantit un chiffrement E2E pur : aucune trace de la clé ne
                subsiste côté serveur. <strong>Attention :</strong> en cas de perte de la clé côté client
                (perte de l&apos;appareil, désinstallation, etc.), les messages chiffrés avec ce niveau
                seront <strong>irréversiblement perdus</strong>. L&apos;Éditeur ne pourra en aucun cas les récupérer.
              </p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">8.2. Choix du niveau.</strong> Le niveau de chiffrement est
            configurable par conversation. L&apos;Utilisateur est informé du niveau actif via l&apos;interface.
            Le changement de niveau ne s&apos;applique qu&apos;aux nouveaux messages ; les messages existants
            conservent leur niveau de chiffrement d&apos;origine.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">8.3. Appels vocaux.</strong> Les appels vocaux P2P utilisent
            systématiquement le chiffrement E2E (équivalent Niveau 3). Les flux audio transitent
            directement entre les appareils des Utilisateurs sans passer par les serveurs de l&apos;Éditeur.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">8.4. Limitation de responsabilité.</strong> L&apos;Éditeur ne saurait
            être tenu responsable de la perte de données résultant de l&apos;utilisation du Niveau 3 de
            chiffrement, ni de toute faille de sécurité résultant d&apos;une négligence de l&apos;Utilisateur
            (mot de passe faible, appareil compromis, partage d&apos;identifiants).
          </p>
        </div>

        {/* Article 9 */}
        <div id="article-9">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 9 — Stockage des données</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">9.1. Stockage hybride.</strong> AlfyChat utilise un système
            de stockage hybride intelligent :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li><strong className="text-text-primary">Serveur (0-30 jours) :</strong> les messages des 30 derniers jours
              sont stockés chiffrés sur nos serveurs situés en France, permettant un accès instantané
              et la synchronisation entre appareils.</li>
            <li><strong className="text-text-primary">P2P (après 30 jours) :</strong> au-delà de 30 jours, les messages
              sont automatiquement transférés de manière chiffrée sur les appareils de l&apos;Utilisateur.
              Le stockage P2P est illimité et garantit une confidentialité totale.</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">9.2. Suppression côté serveur.</strong> Après le transfert P2P,
            les messages sont supprimés de nos serveurs de manière sécurisée. Cette suppression est
            irréversible.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">9.3. Hébergement.</strong> L&apos;ensemble des serveurs sont situés
            en France. Aucun transfert de données hors de l&apos;Union Européenne n&apos;est effectué. Pour plus
            de détails, consultez notre{' '}
            <Link href="/legal/privacy" className="text-brand-light hover:underline">
              Politique de Confidentialité
            </Link>.
          </p>
        </div>

        {/* Article 10 */}
        <div id="article-10">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 10 — Propriété intellectuelle</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">10.1.</strong> L&apos;ensemble des éléments constituant la plateforme
            AlfyChat — incluant mais non limité à l&apos;interface utilisateur, le code source, le design,
            les graphismes, le logo, la marque &quot;AlfyChat&quot;, les textes, la documentation, et
            l&apos;architecture technique — sont la propriété exclusive de l&apos;association AlfyCore ou font
            l&apos;objet de licences appropriées.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">10.2.</strong> Toute reproduction, représentation, modification,
            publication, adaptation, ou exploitation non autorisée de tout ou partie de ces éléments
            est interdite, conformément aux articles L.122-4 et L.335-2 du Code de la Propriété Intellectuelle.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">10.3.</strong> L&apos;Utilisateur conserve la propriété intellectuelle
            de ses Contenus. En utilisant le Service, il accorde à l&apos;Éditeur une licence technique
            limitée, non-exclusive, pour le seul stockage, transmission et affichage des Contenus
            dans le cadre du fonctionnement normal du Service.
          </p>
        </div>

        {/* Article 11 */}
        <div id="article-11">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 11 — Disponibilité du service</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">11.1.</strong> L&apos;Éditeur s&apos;efforce de maintenir le Service
            accessible 24 heures sur 24, 7 jours sur 7, mais ne garantit pas une disponibilité
            ininterrompue. Le Service peut être temporairement indisponible pour des raisons de
            maintenance, de mise à jour, ou en cas d&apos;événements indépendants de la volonté de l&apos;Éditeur.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">11.2.</strong> Les maintenances planifiées seront, dans la mesure
            du possible, annoncées à l&apos;avance. Les maintenances d&apos;urgence (failles de sécurité critiques,
            incidents serveur) pourront être effectuées sans préavis.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">11.3.</strong> L&apos;Éditeur ne saurait être tenu responsable des
            dommages résultant de l&apos;indisponibilité du Service.
          </p>
        </div>

        {/* Article 12 */}
        <div id="article-12">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 12 — Responsabilité de l&apos;Éditeur</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">12.1.</strong> L&apos;Éditeur met en œuvre tous les moyens raisonnables
            pour assurer la sécurité et la fiabilité du Service, conformément aux standards de l&apos;industrie
            et aux recommandations de l&apos;ANSSI.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">12.2.</strong> L&apos;Éditeur n&apos;est pas responsable :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Des contenus échangés entre Utilisateurs</li>
            <li>De la perte de données résultant de l&apos;utilisation du chiffrement Niveau 3</li>
            <li>Des dommages résultant de la compromission du compte d&apos;un Utilisateur par sa propre négligence</li>
            <li>Des dysfonctionnements liés à l&apos;infrastructure réseau ou au matériel de l&apos;Utilisateur</li>
            <li>De tout dommage indirect, y compris la perte de profit, de données ou d&apos;opportunité</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">12.3.</strong> En qualité d&apos;hébergeur technique au sens de
            l&apos;article 6-I-2 de la loi n°2004-575 du 21 juin 2004 (LCEN), l&apos;Éditeur n&apos;est pas tenu
            d&apos;une obligation générale de surveillance des contenus, mais agira promptement sur
            signalement de contenus manifestement illicites.
          </p>
        </div>

        {/* Article 13 */}
        <div id="article-13">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 13 — Responsabilité de l&apos;Utilisateur</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">13.1.</strong> L&apos;Utilisateur est seul responsable de l&apos;utilisation
            qu&apos;il fait du Service et des Contenus qu&apos;il diffuse. Il garantit l&apos;Éditeur contre toute
            réclamation, plainte ou action de tiers résultant de ses Contenus ou de son utilisation
            du Service.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">13.2.</strong> L&apos;Utilisateur s&apos;engage à indemniser l&apos;Éditeur de
            tout dommage, coût ou dépense (y compris les frais d&apos;avocat) résultant du non-respect des
            présentes CGU ou de la violation d&apos;un droit de tiers.
          </p>
        </div>

        {/* Article 14 */}
        <div id="article-14">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 14 — Modération et signalement</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">14.1.</strong> AlfyChat met à disposition des Utilisateurs un
            système de signalement permettant de rapporter tout contenu ou comportement contraire
            aux présentes CGU.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">14.2.</strong> Du fait du chiffrement E2E, l&apos;Éditeur ne peut pas
            lire ni modérer proactivement le contenu des conversations utilisant les Niveaux 2 et 3.
            La modération repose donc principalement sur les signalements des Utilisateurs et les
            métadonnées non chiffrées (fréquence et volume des messages, comportement réseau suspect).
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">14.3.</strong> Les faux signalements abusifs ou le détournement
            du système de signalement constituent une violation des CGU et peuvent entraîner des sanctions.
          </p>
        </div>

        {/* Article 15 */}
        <div id="article-15">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 15 — Suspension et résiliation</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">15.1. Suspension.</strong> L&apos;Éditeur se réserve le droit de
            suspendre temporairement l&apos;accès d&apos;un Utilisateur au Service en cas de :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Violation avérée ou suspectée des présentes CGU</li>
            <li>Comportement nuisant au fonctionnement du Service ou aux autres Utilisateurs</li>
            <li>Demande d&apos;une autorité judiciaire ou administrative compétente</li>
            <li>Suspicion de compromission du compte</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">15.2. Résiliation.</strong> L&apos;Éditeur peut procéder à la
            suppression définitive d&apos;un compte en cas de violation grave ou répétée des CGU, après
            notification à l&apos;adresse email de l&apos;Utilisateur, sauf urgence.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">15.3. Résiliation par l&apos;Utilisateur.</strong> L&apos;Utilisateur peut
            à tout moment supprimer son compte (cf. Article 5.5). Les données seront traitées
            conformément à la Politique de Confidentialité.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">15.4. Effet de la résiliation.</strong> La résiliation entraîne
            la suppression du compte et des données personnelles dans un délai de 30 jours, sauf
            obligation légale de conservation.
          </p>
        </div>

        {/* Article 16 */}
        <div id="article-16">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 16 — Protection des données personnelles</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">16.1.</strong> Le traitement des données personnelles des Utilisateurs
            est détaillé dans notre{' '}
            <Link href="/legal/privacy" className="text-brand-light hover:underline">
              Politique de Confidentialité
            </Link>
            , qui fait partie intégrante des présentes CGU.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">16.2.</strong> Conformément au RGPD (Règlement UE 2016/679),
            l&apos;Utilisateur dispose des droits suivants sur ses données personnelles : accès (Art. 15),
            rectification (Art. 16), effacement (Art. 17), limitation (Art. 18), portabilité (Art. 20),
            opposition (Art. 21).
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">16.3.</strong> Pour exercer ces droits, l&apos;Utilisateur peut
            utiliser les fonctionnalités intégrées à l&apos;application (export, suppression de compte)
            ou contacter l&apos;Éditeur à l&apos;adresse indiquée à l&apos;Article 24.
          </p>
        </div>

        {/* Article 17 */}
        <div id="article-17">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 17 — Cookies</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">17.1.</strong> AlfyChat utilise exclusivement des cookies strictement
            nécessaires au fonctionnement du Service :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li><strong className="text-text-primary">Cookie d&apos;authentification :</strong> maintien de la session de l&apos;Utilisateur (JWT)</li>
            <li><strong className="text-text-primary">Cookie de préférence :</strong> langue d&apos;interface, thème</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">17.2.</strong> Aucun cookie publicitaire, analytique ou de suivi
            tiers n&apos;est utilisé. Conformément à la directive ePrivacy, ces cookies strictement
            nécessaires ne requièrent pas le consentement préalable de l&apos;Utilisateur.
          </p>
        </div>

        {/* Article 18 */}
        <div id="article-18">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 18 — Communications</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">18.1.</strong> En créant un compte, l&apos;Utilisateur accepte de
            recevoir les communications suivantes à l&apos;adresse email fournie :
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4 mb-3">
            <li>Notifications de sécurité (connexion inhabituelle, changement de mot de passe)</li>
            <li>Notifications relatives au compte (suspension, modification des CGU)</li>
            <li>Communications de service (maintenance planifiée, évolutions majeures)</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">18.2.</strong> L&apos;Éditeur ne transmettra jamais l&apos;adresse email
            de l&apos;Utilisateur à des tiers à des fins commerciales. Aucune newsletter marketing ne sera
            envoyée sans consentement explicite préalable.
          </p>
        </div>

        {/* Article 19 */}
        <div id="article-19">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 19 — Mineurs</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">19.1.</strong> Le Service est accessible à partir de 13 ans.
            Pour les Utilisateurs âgés de 13 à 15 ans, le consentement d&apos;un parent ou tuteur légal
            est requis pour le traitement des données personnelles, conformément à l&apos;article 8 du RGPD
            et à l&apos;article 45 de la loi Informatique et Libertés modifiée.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">19.2.</strong> L&apos;Éditeur se réserve le droit de demander une
            vérification d&apos;âge en cas de doute et de suspendre tout compte ne satisfaisant pas aux
            conditions d&apos;âge minimum.
          </p>
        </div>

        {/* Article 20 */}
        <div id="article-20">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 20 — Force majeure</h2>
          <p className="text-text-secondary leading-relaxed">
            L&apos;Éditeur ne pourra être tenu responsable de l&apos;inexécution de ses obligations résultant
            d&apos;un événement de force majeure au sens de l&apos;article 1218 du Code civil, notamment :
            catastrophes naturelles, pandémies, guerres, actes de terrorisme, grèves générales,
            défaillances des réseaux de télécommunication, cyberattaques d&apos;envergure, décisions
            gouvernementales ou réglementaires, ou tout autre événement échappant au contrôle
            raisonnable de l&apos;Éditeur.
          </p>
        </div>

        {/* Article 21 */}
        <div id="article-21">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 21 — Modification des CGU</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">21.1.</strong> L&apos;Éditeur se réserve le droit de modifier les
            présentes CGU à tout moment. La date de dernière mise à jour est indiquée en haut du document.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">21.2.</strong> Les modifications substantielles seront notifiées
            aux Utilisateurs par email et/ou via une notification dans l&apos;application au moins 30 jours
            avant leur entrée en vigueur.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">21.3.</strong> La poursuite de l&apos;utilisation du Service après
            l&apos;entrée en vigueur des modifications vaut acceptation des nouvelles CGU. Si l&apos;Utilisateur
            n&apos;accepte pas les nouvelles conditions, il doit cesser d&apos;utiliser le Service et supprimer
            son compte.
          </p>
        </div>

        {/* Article 22 */}
        <div id="article-22">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 22 — Nullité partielle</h2>
          <p className="text-text-secondary leading-relaxed">
            Si l&apos;une des clauses des présentes CGU venait à être déclarée nulle ou inapplicable par
            une décision de justice, les autres clauses conserveraient leur plein effet. La clause
            déclarée nulle serait remplacée par une clause valide se rapprochant le plus possible
            de l&apos;intention originale des parties.
          </p>
        </div>

        {/* Article 23 */}
        <div id="article-23">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 23 — Droit applicable et litiges</h2>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">23.1.</strong> Les présentes CGU sont régies par le droit français,
            quel que soit le lieu d&apos;utilisation du Service.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">23.2.</strong> En cas de litige, les parties s&apos;engagent à
            rechercher une solution amiable avant toute action en justice. L&apos;Utilisateur peut contacter
            l&apos;Éditeur à l&apos;adresse indiquée à l&apos;Article 24.
          </p>
          <p className="text-text-secondary leading-relaxed mb-2">
            <strong className="text-text-primary">23.3.</strong> Conformément aux articles L.611-1 et R.612-1
            du Code de la consommation, l&apos;Utilisateur consommateur peut recourir gratuitement au
            service de médiation de la consommation.
          </p>
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">23.4.</strong> À défaut de résolution amiable, tout litige sera
            soumis aux tribunaux compétents français.
          </p>
        </div>

        {/* Article 24 */}
        <div id="article-24">
          <h2 className="text-lg font-semibold text-text-primary mb-3">Article 24 — Contact</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Pour toute question relative aux présentes CGU, à votre compte ou au fonctionnement
            du Service, vous pouvez contacter l&apos;association AlfyCore :
          </p>
          <div className="rounded-xl border border-border/40 bg-surface p-4 text-sm text-text-secondary space-y-1">
            <p><strong className="text-text-primary">Association AlfyCore</strong> — Éditeur d&apos;AlfyChat</p>
            <p>Email : <span className="text-brand-light">contact@alfychat.fr</span></p>
          </div>
        </div>
      </section>

      {/* Links */}
      <div className="mt-12 pt-8 border-t border-border/40 flex flex-wrap gap-4 text-sm">
        <Link href="/legal/privacy" className="text-brand-light hover:underline">
          Politique de Confidentialité →
        </Link>
        <Link href="/legal/mentions" className="text-brand-light hover:underline">
          Mentions Légales →
        </Link>
      </div>
    </article>
  );
}
