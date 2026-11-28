// Apps: App Store apps, whose public pages (presentation, support, privacy) live on this site under /<app>/, and
// open-source apps distributed from their GitHub repository.

/** An image under `public/`, with its intrinsic size (avoids layout shift). */
export interface Capture {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AppLinks {
  /** Public site of the app (a page of this site, or an external URL); unset for an app known by its repository. */
  site?: string;
  support?: string;
  privacy?: string;
  /** Source repository, for an open-source app. */
  source?: string;
  /** App Store page; the badge is not rendered while it is unset. */
  appStore?: string;
}

export interface App {
  name: string;
  /** Section of the home page: the iOS apps, or the homelab-grade projects. */
  category: 'ios' | 'homelab';
  platform: string;
  tagline: string;
  features: string[];
  /** Language of the app's own site and UI, when it is not English. */
  language?: string;
  /** App icon, light; `srcDark` is the dark appearance of the same icon, when the app has one. */
  icon: { src: string; srcDark?: string; alt: string; /** Opaque square, 180 px, for apple-touch-icon (iOS masks it). */ touch?: string };
  /** App Store marketing renders shown as a strip; each has its intrinsic size (avoids layout shift). */
  screenshots?: Capture[];
  /** Captures of the app's own tiles (cards, widgets), shown as a mosaic: each row at one height, full width. */
  tiles?: Capture[][];
  links: AppLinks;
}

// Pages of this site (src/pages/credit-immo/), linked from App Store Connect (support, privacy, marketing URLs).
const creditImmoSite = '/credit-immo/';

export const apps: App[] = [
  {
    name: 'Crédit Immo',
    category: 'ios',
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
    // touch: the app's flat icon (ios-app_credit-immo, design/icons/AppIcon.svg), opaque: transparent corners would
    // turn black on an iOS home screen.
    icon: {
      src: '/apps/credit-immo.png',
      srcDark: '/apps/credit-immo-dark.png',
      touch: '/apps/credit-immo-touch.png',
      alt: 'Crédit Immo app icon',
    },
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
  {
    name: 'SoHo Monitor',
    category: 'homelab',
    platform: 'macOS',
    // README of francoisgn/soho-monitor, read 2026-11-27: disk, CPU / memory and Claude cards done; Synology and
    // UniFi planned, so not listed. Requires macOS 26.
    tagline:
      'A native menu bar monitor for a small office: disk usage by your own categories, live CPU and memory, ' +
      'and your Claude plan usage, on a Liquid Glass desktop panel.',
    features: ['Disk by category', 'CPU and memory', 'Claude usage', 'YAML config', 'macOS 26'],
    // Liquid Glass icon rendered by Icon Composer's ictool (soho-monitor, Resources/AppIcon.icon, platform iOS for a
    // full-bleed square like Crédit Immo's), 256 px, Default and Dark renditions.
    icon: {
      src: '/apps/soho-monitor.png',
      srcDark: '/apps/soho-monitor-dark.png',
      alt: 'SoHo Monitor app icon',
    },
    // Captures from the soho-monitor README (docs/images/ at 2eb000b), converted to WebP; same ratio as the PNGs.
    tiles: [
      [
        {
          src: '/apps/soho-monitor/disk-card.webp',
          alt: 'Disk card: Macintosh HD, 314.1 GB of 494.4 GB used, 180.2 GB free, a segmented bar and chips for ' +
            'Dev, Applications, Photos, App data and other categories.',
          width: 884,
          height: 488,
        },
        {
          src: '/apps/soho-monitor/claude-card.webp',
          alt: 'Claude card: weekly limit bar and 5-hour and per-model donuts for two Claude plans.',
          width: 888,
          height: 676,
        },
      ],
      [
        {
          src: '/apps/soho-monitor/system-cards.webp',
          alt: 'CPU card at 21 % on an Apple M4 with a sparkline, and memory card at 65 %, pressure normal.',
          width: 888,
          height: 392,
        },
      ],
    ],
    links: {
      source: 'https://github.com/francoisgn/soho-monitor',
      support: 'https://github.com/francoisgn/soho-monitor/issues',
    },
  },
];
