import PhoneShowcase from "../../components/PhoneShowcase";

export const metadata = {
  title: "Harmoneaz — de eerste app van MJoy-IT",
  description:
    "Ontdek Harmoneaz, de eerste app van MJoy-IT: vanuit eigen ervaring ontwikkeld voor co-ouders in Nederland. Lees het verhaal achter de app en probeer 'm via harmoneaz.com.",
  keywords: [
    "Harmoneaz",
    "MJoy-IT apps",
    "app achter Harmoneaz",
    "co-ouderschap app Nederland",
  ],
  alternates: { canonical: "/product" },
};

const features = [
  {
    title: "Gedeeld zorgschema",
    description:
      "Eén heldere agenda voor de zorgregeling, zichtbaar en bewerkbaar voor beide ouders — geen losse appjes of verouderde schema's meer.",
  },
  {
    title: "Afspraken vastleggen",
    description:
      "Leg afspraken uit het ouderschapsplan en losse bijzonderheden vast op één plek, zodat niets meer verloren gaat in chatgeschiedenis.",
  },
  {
    title: "Kosten verdelen en verklaren",
    description:
      "Verdeel kosten zoals schoolkosten en medische kosten per post, met een duidelijke onderbouwing per bijdrage — geen welles-nietes meer over wie wat betaalt.",
  },
  {
    title: "Alimentatie met automatische indexatie",
    description:
      "Houd het alimentatiebedrag bij én laat de jaarlijkse wettelijke indexatie automatisch doorrekenen, zodat het bedrag altijd actueel en onderbouwd is.",
  },
  {
    title: "Inpaklijst per wissel",
    description:
      "Stel een vaste inpaklijst samen voor elke wissel, met ruimte om eenmalige items toe te voegen — zoals spullen voor een schoolreisje of logeerpartijtje.",
  },
  {
    title: "Taken en checklists",
    description:
      "Verdeel taken met een datum en verantwoordelijke ouder, zodat duidelijk is wie waarvoor zorgt — van een ouderavond tot nieuwe schoenen.",
  },
  {
    title: "Dagnotities",
    description:
      "Leg bijzonderheden over de kinderen vast en deel ze met de andere ouder, met vermelding van wie de notitie plaatste.",
  },
  {
    title: "Snel inzicht",
    description:
      "Zie in één oogopslag wat er vandaag en deze week speelt rond de kinderen, zonder te hoeven zoeken.",
  },
  {
    title: "Minder mentale belasting",
    description:
      "Alles staat vast op één rustige plek, zodat co-ouderschap minder denkwerk en minder stress kost.",
  },
];

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://harmoneaz.com/#app",
  name: "Harmoneaz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Co-ouderschap app voor Nederland: plan zorgschema's, agenda's en afspraken rondom de kinderen op één rustige plek.",
  url: "https://harmoneaz.com",
  sameAs: [
    "https://apps.apple.com/nl/app/harmoneaz/id6760933859",
    "https://play.google.com/store/apps/details?id=com.harmoneaz.app",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "14 dagen gratis proberen",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://mjoyit.com/#organization",
    name: "MJoy-IT",
    url: "https://mjoyit.com",
  },
};

export default function Product() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-current">
            Onze eerste app is live 🎉
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Harmoneaz — dé co-ouderschap app voor Nederland
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog">
            Plan zorgschema&apos;s, agenda&apos;s, afspraken en alles rondom
            de kinderen op één rustige plek — zonder eindeloze appjes, losse
            notities of verwarring tussen ouders.
          </p>
          <p className="mt-4 text-sm text-fog">
            Alles over de app zelf vind je op{" "}
            <a
              href="https://harmoneaz.com"
              className="focus-ring rounded-sm font-medium text-signal underline underline-offset-4 hover:text-current"
            >
              harmoneaz.com
            </a>
            .
          </p>
        </div>
        <PhoneShowcase />
      </div>

      {/* Ontstaan uit eigen ervaring */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Ontstaan uit eigen ervaring
        </p>
        <p className="mt-4 max-w-2xl text-fog">
          Harmoneaz is niet bedacht achter een bureau, maar ontstaan uit
          eigen ervaring. Als co-ouder liepen we zelf tegen versnipperde
          notities, losse afspraken en misverstanden aan — verspreid over
          WhatsApp, agenda&apos;s en mailtjes. Toen we op zoek gingen naar een
          oplossing, merkten we dat er in Nederland geen app was die écht
          aansloot op de Nederlandse situatie. Dat gat vullen we nu op.
        </p>
      </div>

      {/* Specifiek voor de Nederlandse markt */}
      <div className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Speciaal voor de Nederlandse markt
        </p>
        <p className="mt-4 max-w-2xl text-fog">
          Veel co-ouderschap apps komen oorspronkelijk uit het buitenland en
          voelen daardoor niet helemaal passend aan — andere begrippen,
          andere gewoontes, andere aannames over hoe ouderschap na een
          scheiding in de praktijk werkt. Harmoneaz is vanaf de eerste regel
          code gebouwd vóór en dóór ouders in Nederland: aansluitend op hoe
          het ouderschapsplan hier wordt ingevuld, in het Nederlands, en met
          oog voor de manier waarop Nederlandse gezinnen de zorg voor hun
          kinderen praktisch verdelen.
        </p>
      </div>

      {/* Features */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-current">
          Wat Harmoneaz voor je doet
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-line bg-panel p-5">
              <p className="font-display text-lg font-bold">{f.title}</p>
              <p className="mt-2 text-sm text-fog">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-line bg-panel">
          <div className="border-b border-line px-5 py-3">
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              In de app — alimentatie met automatische indexatie
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/app-screens/alimentatie-indexatie.webp"
            alt="Harmoneaz — ouderafspraken met kinderalimentatie en automatische jaarlijkse indexatie"
            className="w-full"
          />
        </div>
      </div>

      {/* Onderscheid */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Waarin Harmoneaz zich onderscheidt
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Gebouwd vanuit eigen ervaring
            </p>
            <p className="mt-2 text-sm text-fog">
              Geen aannames over wat co-ouders nodig hebben — we hebben het
              zelf meegemaakt en Harmoneaz daarop ingericht.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Echt Nederlands, geen vertaling
            </p>
            <p className="mt-2 text-sm text-fog">
              Ontworpen rond de Nederlandse situatie in plaats van een
              buitenlandse app met een Nederlands jasje.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Rust in plaats van ruis
            </p>
            <p className="mt-2 text-sm text-fog">
              Eén overzichtelijke plek in plaats van verspreide appjes,
              agenda&apos;s en documenten.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-lg border border-line bg-panel2 p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-fog">
          Beschikbaarheid
        </p>
        <p className="mt-2 font-display text-xl font-bold">
          Live voor iPhone en Android
        </p>
        <p className="mt-2 text-sm text-fog">
          Probeer Harmoneaz 14 dagen gratis.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://harmoneaz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-ink hover:scale-[1.02] transition-transform"
          >
            Ga naar harmoneaz.com
          </a>
          <a
            href="https://apps.apple.com/nl/app/harmoneaz/id6760933859"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-current"
          >
            Download op de App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.harmoneaz.app"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-current"
          >
            Ontdek het op Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
