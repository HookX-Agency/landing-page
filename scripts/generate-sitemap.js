// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://createhookx.com';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/services', priority: '0.8' },
  { path: '/portfolio', priority: '0.8' },
  { path: '/pricing', priority: '0.8' },
  { path: '/testimonials', priority: '0.8' },
  { path: '/faq', priority: '0.6' },
  { path: '/contact', priority: '0.7' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('\n')}
</urlset>`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated at:', sitemapPath);
