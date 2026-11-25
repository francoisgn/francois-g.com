// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site served by GitHub Pages under the custom domain (public/CNAME).
export default defineConfig({
  site: 'https://francois-g.com',
  // /cv/ is unlisted (noindex): kept out of the sitemap, which would advertise it.
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/cv/') })],
  build: { format: 'directory' },
});
