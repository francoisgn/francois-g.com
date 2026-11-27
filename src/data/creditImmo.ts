// Crédit Immo pages (src/pages/credit-immo/), in French like the app. Text taken from the app's former public site
// (francoisgn/ios-app_credit-immo-pub: index.md, assistance.md), moved here on 27/11/2026 (issue #11).
// App Store Connect links to these pages: changing a URL means changing it there too (ios-app_credit-immo#305).

import { apps } from './apps';

const app = apps.find((a) => a.name === 'Crédit Immo');
if (!app) throw new Error('Crédit Immo is missing from src/data/apps.ts');

export const creditImmo = {
  app,
  base: '/credit-immo/',
  pages: [
    { href: '/credit-immo/', label: 'Présentation' },
    { href: '/credit-immo/assistance/', label: 'Assistance' },
    { href: '/credit-immo/confidentialite/', label: 'Confidentialité' },
  ],
  title: 'Crédit Immo : simulateur de crédit immobilier pour iPhone',
  description:
    "Combien pouvez-vous vraiment emprunter ? Crédit Immo refait le calcul comme votre banque, avant le rendez-vous. " +
    'Capacité d’emprunt, coût du crédit, faisabilité bancaire, brut → net, rachat. Sans compte, sans publicité.',
  hero: {
    title: 'Combien pouvez-vous vraiment emprunter ?',
    lead: 'Le calcul de votre banque, avant le rendez-vous.',
    text:
      'Crédit Immo refait le calcul comme votre banque : 35 % d’endettement assurance comprise, durée, taux ' +
      'd’usure, reste à vivre. Vous savez si votre projet passe avant le rendez-vous.',
    facts: ['Gratuite', 'iPhone, iPhone Duo et iPad', 'Sans compte, sans publicité'],
  },
  // Gradient of the app icon's background (ios-app_credit-immo, docs/DESIGN.md, « Icône d'app »), for decoration.
  // Text in the gradient uses darker (light mode) or lighter (dark mode) shades of the same hues: contrast ≥ 5:1 on
  // the page background (WCAG AA for small text); the icon's own pink is 2.7:1 on #f2f2f7.
  gradient: {
    from: '#5B4BFF',
    to: '#F0649A',
    text: { light: ['#4A3AE8', '#B8336A'], dark: ['#A69CFF', '#FF8AB8'] },
  },
  features: [
    {
      title: 'Capacité d’emprunt',
      text: 'Mensualité maximale et montant empruntable selon la norme HCSF, crédits en cours compris.',
    },
    {
      title: 'Votre projet, chiffré',
      text: 'Prix, travaux, frais de notaire, apport, VEFA, acheter ou louer.',
    },
    {
      title: 'Tout comprendre',
      text: 'Amortissement interactif, coût total, TAEG estimé, faisabilité en vert, orange ou rouge.',
    },
    {
      title: 'Du brut au net',
      text: 'Calcul officiel de l’URSSAF ou hors connexion, prélèvement à la source.',
    },
    {
      title: 'Rachat de crédit',
      text: 'Gain net, mois d’équilibre, meilleur moment pour racheter.',
    },
    {
      title: 'Privé par conception',
      text: 'Aucun compte, aucun traceur. Vos simulations restent sur l’iPhone ou dans votre iCloud privé.',
    },
  ],
  // App Store renders 1.1.0 (ios-app_credit-immo, visuels-1.1.0/rendus/iphone/), 360 px wide WebP, same order.
  screenshots: [
    { src: '/apps/credit-immo/1-accroche.webp', alt: '« Votre crédit, calculé comme une banque » : capacité d’emprunt et mensualité maximale.' },
    { src: '/apps/credit-immo/2-capacite.webp', alt: '« Combien pouvez-vous emprunter ? » : capacité maximale au taux d’endettement HCSF.' },
    { src: '/apps/credit-immo/3-projet.webp', alt: '« Le coût réel, avant la banque » : intérêts, assurance, TAEG face au taux d’usure.' },
    { src: '/apps/credit-immo/4-revenus.webp', alt: '« Du brut au net, au centime » : salaire brut vers net, prélèvement à la source.' },
    { src: '/apps/credit-immo/5-rachat.webp', alt: '« Faut-il renégocier ? » : gain net et mois d’équilibre d’un rachat de crédit.' },
    { src: '/apps/credit-immo/6-vefa.webp', alt: '« Achat sur plan, sans surprise » : appels de fonds et intérêts intercalaires d’une VEFA.' },
    { src: '/apps/credit-immo/7-partout.webp', alt: '« Vos simulations, partout avec vous » : sauvegardes synchronisées par iCloud.' },
    { src: '/apps/credit-immo/8-apparence.webp', alt: '« À votre image » : apparence et icônes de l’app.' },
  ].map((s) => ({ ...s, width: 360, height: 782 })),
  disclaimer:
    'Les résultats sont des simulations indicatives et non contractuelles. Seule une banque ou un courtier peut vous ' +
    'faire une offre de prêt.',
  support: {
    // Kept on the app's public repository (issue forms bug / question): no email address in clear (CLAUDE.md).
    newIssue: 'https://github.com/francoisgn/ios-app_credit-immo-pub/issues/new/choose',
    faq: [
      {
        q: 'Les résultats sont-ils une offre de prêt ?',
        a: 'Non. Crédit Immo est un outil de simulation : les chiffres sont indicatifs et non contractuels. Seule une banque ou un courtier peut vous faire une offre.',
      },
      {
        q: 'Mes simulations sont-elles envoyées quelque part ?',
        a: 'Non, elles restent sur votre iPhone ou dans votre iCloud privé. Voir la politique de confidentialité.',
        link: { href: '/credit-immo/confidentialite/', label: 'Politique de confidentialité' },
      },
      {
        q: 'J’ai changé d’iPhone, où sont mes simulations ?',
        a: 'Avec la synchronisation iCloud activée (Réglages de l’app), elles reviennent automatiquement sur le nouvel appareil connecté au même compte iCloud.',
      },
      {
        q: 'J’ai acheté un pack d’icônes, il n’apparaît plus.',
        a: 'Réglages de l’app › Soutenir l’app › Restaurer les achats.',
      },
    ],
  },
} as const;
