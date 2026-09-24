import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const required = [
  'index.html', 'vite.config.js', 'src/main.jsx', 'src/App.jsx', 'src/data.js',
  'src/styles.css', 'public/_redirects', '.github/workflows/deploy.yml',
  'public/logo.png', 'public/logo-symbol.png', 'public/images/bali.webp', 'public/images/elephants.webp',
];
for (const file of required) {
  if (!existsSync(join(root, file))) throw new Error(`Missing required project file: ${file}`);
}
const data = readFileSync(join(root, 'src/data.js'), 'utf8');
const images = [...data.matchAll(/['"](\/images\/[^'" ]+)['"]/g)].map(match => `public${match[1]}`);
for (const path of images) {
  if (!existsSync(join(root, path))) throw new Error(`Referenced photo is missing: ${path}`);
}
const code = readFileSync(join(root, 'src/App.jsx'), 'utf8');
for (const route of ['/destinations', '/services', '/gallery', '/testimonials', '/about', '/contact']) {
  if (!code.includes(route)) throw new Error(`Missing expected route: ${route}`);
}
console.log(`Project check passed: ${required.length} core files, ${images.length} local image references, 7 routes.`);
