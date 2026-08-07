export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met MJoy-IT uit Rotterdam. Vragen of feedback over onze apps, zoals de co-ouderschap app Harmoneaz? Mail ons.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-widest text-signal">
        Contact
      </p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Neem contact op
      </h1>
      <p className="mt-6 text-lg text-fog">
        Heb je een vraag, idee of feedback? We horen graag van je. Mail ons
        op{" "}
        <a
          href="mailto:info@mjoyit.com"
          className="focus-ring text-current hover:underline"
        >
          info@mjoyit.com
        </a>{" "}
        en we reageren zo snel mogelijk.
      </p>

      <div className="mt-12 rounded-lg border border-line bg-panel p-8">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              E-mail
            </p>
            <a
              href="mailto:info@mjoyit.com"
              className="focus-ring mt-1 block font-display text-xl font-bold hover:text-current"
            >
              info@mjoyit.com
            </a>
          </div>
          <div className="h-px bg-line" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              Locatie
            </p>
            <p className="mt-1 text-paper">Rotterdam, Nederland</p>
          </div>
          <div className="h-px bg-line" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              KvK
            </p>
            <p className="mt-1 text-paper">42007160</p>
          </div>
        </div>
      </div>
    </section>
  );
}
