import { dictionaries, type Lang } from "@/lib/i18n";

const inputClasses =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].contact;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
        {t.h1}
      </h1>
      <p className="mt-5 max-w-2xl text-muted">{t.sub}</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        {/*
          TODO before launch: wire this form to a backend.
          Easiest options: Formspree (set action="https://formspree.io/f/YOUR_FORM_ID"
          and method="POST") or a Next.js route handler + email service (Resend).
        */}
        <form
          className="card grid gap-5 p-8 sm:grid-cols-2"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.name}
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
            <label
              htmlFor="agency"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.agency}
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
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.email}
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
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.phone}
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
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.address}
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
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.packageLabel}
            </label>
            <select id="package" name="package" className={inputClasses}>
              {t.packageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.timeline}
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              placeholder={t.timelinePlaceholder}
              className={inputClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-text"
            >
              {t.message}
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
              {t.submit}
            </button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="card p-7">
            <h2 className="font-bold text-text">{t.talkHeading}</h2>
            {/* TODO: Replace placeholder contact details before launch */}
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@apexmotionstudios.com.au"
                  className="hover:text-accent"
                >
                  hello@apexmotionstudios.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61400000000" className="hover:text-accent">
                  0400 000 000
                </a>
              </li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-bold text-text">{t.areaHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.areaBody}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
