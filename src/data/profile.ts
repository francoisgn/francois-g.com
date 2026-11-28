// Profile shown in the header. Only what the maintainer chose to publish (CLAUDE.md, "Personal data").

/** A link of the header; a link without `href` is not rendered (placeholder still to fill in). */
export interface ProfileLink {
  label: string;
  href?: string;
  icon: 'github' | 'linkedin' | 'coffee' | 'chat';
  /** The call to action: a filled pill, first in the row. */
  primary?: boolean;
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
  /** Role, under the name. */
  role: string;
  /** Short lines under the role, one per line. */
  bio: string[];
  photo?: Photo;
  links: ProfileLink[];
}

export const profile: Profile = {
  name: 'François G.',
  initials: 'FG',
  // Wording validated by the maintainer (2026-11-28): no employer named on the home page (the /cv/ page keeps them).
  role: 'Group Cloud Center of Excellence Lead & Head of Platform Engineering',
  bio: [
    'I build multicloud platforms on Google Cloud, AWS and Alibaba Cloud, and the internal developer platform that ' +
      'lets engineers, and now their AI agents, ship safely at scale.',
    'Ten years as an SRE keeping critical systems up, then leading the teams that keep them up: a decade of ' +
      'international teams across Europe, the Middle East and India.',
    'I run transformations that land: a clear target, measurable outcomes, and platforms teams actually choose to use.',
  ],
  // Memoji supplied by the maintainer (2026-11-25): square crop on the head and shoulders, WebP, metadata stripped.
  // Without a photo the avatar shows the initials.
  photo: { src: '/profile-256.webp', srcLarge: '/profile-512.webp', alt: 'Memoji of François G.' },
  // "Get in touch" opens LinkedIn: no email address in clear on the site (CLAUDE.md, decision 2026-11-28).
  links: [
    { label: 'Get in touch', href: 'https://www.linkedin.com/in/francois-g', icon: 'chat', primary: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francois-g', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/francoisgn', icon: 'github' },
    { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/francoisgn', icon: 'coffee' },
  ],
};

/** Public repository of this site, linked from the footer. */
export const siteRepo = 'https://github.com/francoisgn/francois-g.com';
