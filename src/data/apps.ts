// App Store apps. Each app's public pages (presentation, support, privacy) live on this site, under /<app>/.

export interface AppLinks {
  /** Public site of the app (a page of this site, or an external URL). */
  site: string;
  support: string;
  privacy: string;
  /** App Store page; the badge is not rendered while it is unset. */
  appStore?: string;
}

export interface App {
  name: string;
  platform: string;
  tagline: string;
  features: string[];
  /** Language of the app's own site and UI, when it is not English. */
  language?: string;
  /** App icon, light; `srcDark` is the dark appearance of the same icon, when the app has one. */
  icon: { src: string; srcDark?: string; alt: string };
  /** App Store marketing renders shown as a strip; each has its intrinsic size (avoids layout shift). */
  screenshots?: { src: string; alt: string; width: number; height: number }[];
  links: AppLinks;
}

// Pages of this site (src/pages/credit-immo/), linked from App Store Connect (support, privacy, marketing URLs).
const creditImmoSite = '/credit-immo/';

export const apps: App[] = [
  {
    name: 'Crédit Immo',
    platform: 'iPhone',
    tagline: 'A French mortgage simulator that runs the numbers the way your bank does, before the meeting.',
    features: [
      'Borrowing capacity',
      'Monthly payments',
      'HCSF 35 % rule',
      'Usury rate',
      'VEFA (off-plan)',
      'Gross-to-net salary',
      'Loan buyback',
    ],
    language: 'French',
    // Liquid Glass icon rendered by Icon Composer's ictool (ios-app_credit-immo, CreditImmo/AppIcon.icon), 256 px.
    icon: { src: '/apps/credit-immo.png', srcDark: '/apps/credit-immo-dark.png', alt: 'Crédit Immo app icon' },
    // App Store renders 1.1.0 (ios-app_credit-immo, build/appstore/archive/visuels-1.1.0/rendus/iphone/, already
    // public on the App Store), resized to 360 px wide WebP. Alt texts translate the French headline of each render.
    screenshots: [
      {
        src: '/apps/credit-immo/1-accroche.webp',
        alt: '"Your loan, worked out the way a bank does": the loan simulator with borrowing capacity and maximum monthly payment.',
        width: 360,
        height: 782,
      },
      {
        src: '/apps/credit-immo/2-capacite.webp',
        alt: '"How much can you borrow?": maximum capacity and monthly payment at the HCSF debt-to-income rate.',
        width: 360,
        height: 782,
      },
      {
        src: '/apps/credit-immo/3-projet.webp',
        alt: '"The real cost, before the bank does": interest, insurance and APR against the usury rate, with the financing plan.',
        width: 360,
        height: 782,
      },
      {
        src: '/apps/credit-immo/6-vefa.webp',
        alt: '"Off-plan (VEFA) without surprises": staged payment calls, interim interest and deferred repayment.',
        width: 360,
        height: 782,
      },
    ],
    links: {
      site: creditImmoSite,
      support: `${creditImmoSite}assistance/`,
      privacy: `${creditImmoSite}confidentialite/`,
      appStore: 'https://apps.apple.com/fr/app/credit-immobilier/id6833368341',
    },
  },
];
