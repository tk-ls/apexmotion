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

- [ ] Replace all `VideoPlaceholder` components with real video embeds
      (Vimeo Pro or Mux recommended — see comments in
      `components/VideoPlaceholder.tsx`)
- [ ] Replace sample portfolio projects in `app/portfolio/page.tsx` with real
      shoots
- [ ] Wire the contact form to a backend (Formspree or a route handler +
      Resend — see comment in `app/contact/page.tsx`)
- [ ] Replace placeholder phone/email in `components/Footer.tsx` and
      `app/contact/page.tsx`
- [ ] Add ABN to the footer
- [ ] Register domain and deploy (Vercel is the simplest for Next.js)
- [ ] Add a favicon/logo to replace the default `app/favicon.ico`
