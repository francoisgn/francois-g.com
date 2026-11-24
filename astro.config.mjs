// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site served by GitHub Pages under the custom domain (public/CNAME).
export default defineConfig({
  site: 'https://francois-g.com',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
