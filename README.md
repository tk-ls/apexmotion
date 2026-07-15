# Apex Motion Studios — Website

Marketing site for Apex Motion Studios: immersive one-take FPV drone tours and
cinematic exterior photography for luxury real estate in Sydney.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

| Route        | Page                                              |
| ------------ | ------------------------------------------------- |
| `/`          | Homepage — hero, value proposition, services      |
| `/portfolio` | Our Work — featured film + curated project grid   |
| `/services`  | Services & Packages — three tiers, process, trust |
| `/about`     | The Studio — story, crew, credentials             |
| `/contact`   | Book a Shoot — enquiry form + direct contact      |

Shared components live in `components/` (Header, Footer, TrustBand,
VideoPlaceholder). Design tokens (colours, fonts) are defined in
`app/globals.css`.

## Before launch — TODO

- [x] Real studio footage is live in `public/videos/` (cut down from the
      DJI originals in `~/Documents/iCloud Photos`, trimmed/transcoded with
      `avconvert`, ≤20 MB each for the Pages 25 MB file limit). Each clip
      ships a same-name `.jpg` first-frame poster — regenerate it when
      swapping a clip. Work-gallery tiles keep the "Sample project" badge
      because the project names are illustrative, not client campaigns;
      remove per-tile once real client work replaces them. Consider Vimeo
      Pro/Mux/R2 hosting for longer films later
- [ ] Activate the contact form: it POSTs to formsubmit.co →
      apexmotion@wlmail.xyz; the first submission triggers an activation
      email — click the link once the domain's catch-all is live
- [ ] Point `SITE_URL` in `components/pages/ContactPage.tsx` at the custom
      domain when it replaces apexmotion.pages.dev
- [ ] Add ABN to the footer
- [ ] Fix Cloudflare Pages git-build settings (build command `npm run build`,
      output dir `out`) — until then, deploy with
      `npm run build && npx wrangler pages deploy out --project-name apexmotion`
- [ ] Add a favicon/logo to replace the default `app/favicon.ico`
