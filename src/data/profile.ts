// Profile shown in the header. Only what the maintainer chose to publish (CLAUDE.md, "Personal data").

/** A link of the header; a link without `href` is not rendered (placeholder still to fill in). */
export interface ProfileLink {
  label: string;
  href?: string;
  icon: 'github' | 'linkedin' | 'coffee';
}

export interface Photo {
  /** Path under `public/`, e.g. `/profile.jpg`. */
  src: string;
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
  // TODO(operator): add a photo (e.g. public/profile.jpg, square, at least 256 px) and set
  // photo: { src: '/profile.jpg', alt: 'Portrait of François G.' }. Until then the avatar shows the initials.
  photo: undefined,
  links: [
    { label: 'GitHub', href: 'https://github.com/francoisgn', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francois-g', icon: 'linkedin' },
    { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/francoisgn', icon: 'coffee' },
  ],
};

/** Public repository of this site, linked from the footer. */
export const siteRepo = 'https://github.com/francoisgn/francois-g.com';
