import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

const highPriorityPages = new Set([
  '/rfq-automation-software',
  '/rfq-email-management-tool',
  '/rfq-response-software',
  '/ai-rfq-processing-tool',
  '/rfq-email-automation',
  '/quotation-email-automation',
  '/rfq-software-for-manufacturers',
  '/quotation-builder',
  '/rfq-data-extraction-from-pdf',
  '/rfq-pdf-data-extraction',
  '/gmail-chrome-extension-for-sales',
  '/gmail-rfq-extension',
  '/rfq-software-for-distributors',
  '/rfq-management-for-export-companies',
  '/outlook-add-in-for-rfq',
  '/outlook-rfq-workflow',
  '/procurement-chrome-extension',
]);

export default defineConfig({
  site: 'https://rfqautopilot.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/success') && !page.endsWith('/404'),
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;

        if (pathname === '/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }

        if (highPriorityPages.has(pathname)) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }

        if (pathname === '/blog') {
          return { ...item, changefreq: 'weekly', priority: 0.8 };
        }

        if (pathname.startsWith('/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }

        return { ...item, changefreq: 'monthly', priority: 0.6 };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
