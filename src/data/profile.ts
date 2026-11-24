// Profile shown in the header. Only what the maintainer chose to publish (CLAUDE.md, "Personal data").

/** A link of the header; a link without `href` is not rendered (placeholder still to fill in). */
export interface ProfileLink {
  label: string;
  href?: string;
  icon: 'github' | 'linkedin' | 'coffee';
}

export interface Photo {
  /** Square image under `public/`, 256 px (1x and 2x of the 112 px avatar). */
  src: string;
  /** The same image at 512 px, for 3x screens and larger avatars. */
  srcLarge: string;
  alt: string;
}

export interface Profile {
  name: string;
  /** Shown in the neutral avatar while there is no photo. */
  initials: string;
  /** Short lines under the name, one per line. */
  bio: string[];
  photo?: Photo;
  links: ProfileLink[];
}

export const profile: Profile = {
  name: 'François G.',
  initials: 'FG',
  bio: [
    'Platform manager by day: multicloud PaaS on AWS, GCP and Alibaba Cloud, cloud transformation, FinOps.',
    'Side projects by night: agentic engineering, native apps, open source.',
  ],
  // Memoji supplied by the maintainer (2026-11-25): square crop on the head and shoulders, WebP, metadata stripped.
  // Without a photo the avatar shows the initials.
  photo: { src: '/profile-256.webp', srcLarge: '/profile-512.webp', alt: 'Memoji of François G.' },
  links: [
    { label: 'GitHub', href: 'https://github.com/francoisgn', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francois-g', icon: 'linkedin' },
    { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/francoisgn', icon: 'coffee' },
  ],
};

/** Public repository of this site, linked from the footer. */
export const siteRepo = 'https://github.com/francoisgn/francois-g.com';
