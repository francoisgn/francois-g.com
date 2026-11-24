// App Store apps. Feature list taken from the app's public site (francoisgn/ios-app_credit-immo-pub, index.md).

export interface AppLinks {
  /** Public site of the app. */
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
  icon: { src: string; alt: string };
  links: AppLinks;
}

const creditImmoSite = 'https://francoisgn.github.io/ios-app_credit-immo-pub/';

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
    icon: { src: '/apps/credit-immo.png', alt: 'Crédit Immo app icon' },
    links: {
      site: creditImmoSite,
      support: `${creditImmoSite}assistance`,
      privacy: `${creditImmoSite}confidentialite`,
      // TODO(operator): set the App Store URL (https://apps.apple.com/…/id…); the badge stays hidden until then.
      appStore: undefined,
    },
  },
];
