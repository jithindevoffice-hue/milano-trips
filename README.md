# Milano Trips LLP · travel website

A **seven-page**, responsive React + Vite site based on the selected **Concept 5** design, prepared for **Cloudflare Pages with GitHub Actions**.

## Pages

| Path | Page |
|---|---|
| `/` | Home: hero, travel search, inspiration, services |
| `/destinations` | Destinations and travel ideas, searchable and filterable |
| `/services` | The six services listed in the brochure |
| `/gallery` | Filterable travel imagery with full-screen lightbox |
| `/testimonials` | Travel stories / testimonial-ready layout |
| `/about` | About Milano Trips and its approach |
| `/contact` | Contact information, enquiry form and WhatsApp |

### Local development

Requires Node.js **20.19+** and npm (Node 22 recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally http://localhost:5173. To build production files:

```bash
npm run check
npm run build
npm run preview
```

The static production output is in `dist/`. The Cloudflare Pages output directory is **`dist`**; the Vite build command is **`npm run build`**.

### GitHub Actions → Cloudflare Pages (production)

1. Create a **Cloudflare Pages** project named `milano-trips` using **Direct Upload**. Alternatively, set the GitHub Actions repository variable `CLOUDFLARE_PAGES_PROJECT` to your existing project name. Do not additionally connect Cloudflare's own Git integration to the same project unless you intentionally want two independent deploy triggers.
2. Create a Cloudflare API token with **Account → Cloudflare Pages → Edit** permission for your account. Copy your Cloudflare **Account ID** from the Cloudflare dashboard.
3. In the GitHub repository, go to **Settings → Secrets and variables → Actions → Secrets** and add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Optionally create an **Actions variable** `CLOUDFLARE_PAGES_PROJECT` if the project is not called `milano-trips`.
4. Push the project contents to GitHub and ensure the default branch is `main`. `.github/workflows/deploy.yml` will install dependencies, run the project checker, build the website and deploy `dist` on each push to `main`. Pull requests are checked and built, but not deployed. Workflow can also be run manually.
5. In **Cloudflare → Pages → your project → Custom domains**, connect your domain. Adjust DNS according to Cloudflare's domain instructions.

Cloudflare Pages supports the included `public/_redirects` SPA fallback, so directly opening `/destinations` or refreshing `/contact` works as well as clicking through the navigation. Keep tokens in GitHub Actions **secrets**, not in Vite environment variables or source code.

### Enquiries: intentionally no fake backend

The **Enquire**, **Contact** and **Plan your trip** forms use `mailto:` to open the visitor's email application with a prepared enquiry addressed to `info@milanotrips.com`. This is free and does **not** silently collect or store visitor information, but requires the visitor to actually send the message from their email app. WhatsApp buttons open a conversation to `+91 9746073527`. If you need server-delivered contact forms without requiring the visitor to have an email application, implement Cloudflare Pages Functions + Turnstile + an email delivery provider before publishing; there is no such backend or delivery promise included in this package.

### Source, copy and imagery

- **The brochure is the source of company details:** company name, slogan, service list, email, phone, website and three travel themes. There is no supplied office address, verified ratings, package price list, published departure schedule or consented client reviews, so this site does not invent any of those.
- The main brand logo is extracted from the supplied company brochure. Local images were prepared from the brochure, the selected generated design board and the other screenshots supplied as visual references. **Before a public/commercial launch, confirm ownership/licensing/permission for every photograph**, especially the sample gallery imagery from the other website screenshots. Replace any image not cleared for use with Milano's own or properly licensed photos.
- Destination descriptions are **travel inspiration only**, not confirmed offerings, fixed prices or departure dates. Client testimonial cards are **not fabricated**; that page contains clearly labeled travel-story content while verified, consented reviews are pending.
- Edit `src/data.js` for destinations, services and contact information. Edit `src/App.jsx` for page copy and `src/styles.css` for the design system. Add or replace optimised `.webp` pictures in `public/images/`.
- Google Fonts is used for typography; the font fails over to local sans-serif if blocked. Images are stored locally and do not need a stock-photo API key.

This ZIP is a complete **source repository** without `node_modules` or the generated `dist/` directory. Dependencies install on the first `npm install` / GitHub build. It is not a ready-to-run binary bundle.
