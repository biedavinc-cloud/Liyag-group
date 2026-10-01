/**
 * Post-build : génère une page HTML par route avec ses propres <title>, description, canonical, Open Graph,
 * ainsi que le sitemap. Les robots (Google, Bing, LinkedIn, WhatsApp, X…) lisent ces balises sans exécuter
 * le JavaScript. L'application React se charge ensuite normalement.
 * Ne casse jamais le build : en cas de problème, le site garde simplement le HTML générique.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const SITE = 'https://liyahgroup.me';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function loadRoutes() {
  const { build } = await import('esbuild');
  const result = await build({
    entryPoints: [path.join(root, 'src/data/seoRoutes.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
    logLevel: 'silent',
    alias: { '@': path.join(root, 'src') },
  });
  const code = result.outputFiles[0].text;
  return import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
}

function apply(html, r, structured) {
  const url = r.path === '/' ? `${SITE}/` : `${SITE}${r.path}`;
  const t = esc(r.title);
  const d = esc(r.description);
  const rep = (re, to) => (html = html.replace(re, to));
  rep(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  rep(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`);
  rep(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  rep(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`);
  rep(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${d}" />`);
  rep(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  rep(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`);
  rep(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${d}" />`);
  if (r.lang === 'fr') {
    rep(/<html lang="en">/, '<html lang="fr">');
    rep(/<meta property="og:locale" content="en_US" \/>/, '<meta property="og:locale" content="fr_FR" />');
  }
  rep(/<!--STRUCTURED_DATA-->/, structured);
  return html;
}

try {
  const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  const mod = await loadRoutes();
  const routes = mod.getSeoRoutes();
  const structured = [mod.organizationJsonLd, mod.websiteJsonLd]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join('\n    ');

  let count = 0;
  for (const r of routes) {
    const html = apply(template, r, structured);
    const file = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    count++;
  }

  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((r) => {
      const loc = r.path === '/' ? `${SITE}/` : `${SITE}${r.path}`;
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority.toFixed(1)}</priority></url>`;
    })
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  console.log(`[prerender] ${count} pages + sitemap.xml generated`);
} catch (err) {
  console.warn('[prerender] skipped (site still works with the generic HTML):', err && err.message ? err.message : err);
}
