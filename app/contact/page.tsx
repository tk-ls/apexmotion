import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Shoot",
  description:
    "Check availability for your listing. Tell us about the property and we'll confirm availability and a tailored quote within one business day.",
};

const inputClasses =
  "w-full border border-line bg-panel px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-cream focus:outline-none";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl">
        Check availability for&nbsp;your&nbsp;listing.
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        Tell us about the property and your campaign timeline — we&rsquo;ll
        come back with availability and a tailored quote within one business
        day.
      </p>

      <div className="mt-14 grid gap-12 border-t border-line pt-14 lg:grid-cols-[2fr_1fr]">
        {/*
          TODO before launch: wire this form to a backend.
          Easiest options: Formspree (set action="https://formspree.io/f/YOUR_FORM_ID"
          and method="POST") or a Next.js route handler + email service (Resend).
        */}
        <form className="grid gap-5 sm:grid-cols-2" action="#" method="POST">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-cream/85">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="agency" className="mb-2 block text-sm text-cream/85">
              Agency
            </label>
            <input
              id="agency"
              name="agency"
              type="text"
              autoComplete="organization"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-cream/85">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-cream/85">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="mb-2 block text-sm text-cream/85"
            >
              Property address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="package"
              className="mb-2 block text-sm text-cream/85"
            >
              Package of interest
            </label>
            <select id="package" name="package" className={inputClasses}>
              <option>Not sure yet</option>
              <option>Signature Exteriors</option>
              <option>The Immersive Tour</option>
              <option>The Campaign Suite</option>
              <option>Multi-listing / agency retainer</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block text-sm text-cream/85"
            >
              Preferred shoot window
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              placeholder="e.g. Week of 21 July"
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-cream/85"
            >
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-solid w-full sm:w-auto">
              Check Availability
            </button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="border-t border-line pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
              Prefer to talk?
            </h2>
            {/* TODO: Replace placeholder contact details before launch */}
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              <li>
                <a
                  href="mailto:hello@apexmotionstudios.com.au"
                  className="hover:text-cream"
                >
                  hello@apexmotionstudios.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61400000000" className="hover:text-cream">
                  0400 000 000
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-line pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
              Service area
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Greater Sydney — from the Eastern Suburbs and Lower North Shore
              to the Northern Beaches, Inner West and Hills District. Regional
              NSW by arrangement.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
