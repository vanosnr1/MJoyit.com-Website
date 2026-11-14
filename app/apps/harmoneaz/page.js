import PhoneShowcase from "../../../components/PhoneShowcase";
import Breadcrumbs from "../../../components/Breadcrumbs";

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
  alternates: { canonical: "/apps/harmoneaz" },
};

const features = [
  {
    title: "Zorgschema en kalender",
    description:
      "Zie per dag bij wie de kinderen zijn. Een ruil of vakantieweek leg je vast als tijdelijke afwijking; het vaste schema blijft eronder staan. Afspraken staan voor beide ouders tegelijk in de agenda.",
  },
  {
    title: "Wisseldag zonder vergeten spullen",
    description:
      "Bij elke wisseldag staat klaar wat mee moet en wat de andere ouder moet weten: de inpaklijst en de dagnotities van de afgelopen dagen.",
  },
  {
    title: "Afspraken vastleggen",
    description:
      "Zet de afspraken uit jullie ouderschapsplan of convenant in de app, zodat ze niet in een la verdwijnen.",
  },
  {
    title: "Alimentatie met indexatie",
    description:
      "Houd de alimentatie bij; voor Nederland past de app de jaarlijkse wettelijke indexatie toe, zodat het bedrag actueel en onderbouwd is.",
  },
  {
    title: "Kosten en kinderrekening",
    description:
      "Begin een uitgave met een foto van het bonnetje: de app vult bedrag, datum en winkel alvast in. Harmoneaz houdt bij hoe de kosten verdeeld zijn en wat er nog verrekend moet worden.",
  },
  {
    title: "Overleg per onderwerp",
    description:
      "School, vakantie, de nieuwe fiets: elk onderwerp krijgt een eigen gesprek. Verzonden berichten blijven staan, zodat het voor beide ouders een betrouwbaar overzicht is.",
  },
  {
    title: "Taken",
    description:
      "Verdeel taken met een datum en verantwoordelijke ouder, zodat duidelijk is wie waarvoor zorgt — van een ouderavond tot nieuwe schoenen.",
  },
  {
    title: "Ook voor de kinderen",
    description:
      "Kinderen kunnen met een eigen account meekijken. Ouders bepalen wat ze zien en wat ze mogen doen.",
  },
  {
    title: "Voor scheidingsspecialisten",
    description:
      "Mediators en andere specialisten lezen het ouderschapsplan in en zetten het gezin samen met de ouders klaar in het specialistenportaal.",
  },
];

const screens = [
  {
    src: "/app-screens/harmoneaz-afspraken.webp",
    alt: "Harmoneaz — vastgelegde afspraken en alimentatie",
    label: "Afspraken",
  },
  {
    src: "/app-screens/harmoneaz-kosten.webp",
    alt: "Harmoneaz — het kostenoverzicht met uitgaven en de stand tussen beide ouders",
    label: "Kosten",
  },
  {
    src: "/app-screens/harmoneaz-overleg-gesprek.webp",
    alt: "Harmoneaz — een gesprek in Overleg over het onderwerp School",
    label: "Overleg",
  },
];

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://harmoneaz.com/#app",
  name: "Harmoneaz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, iPadOS, Android",
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
    description: "Gratis je groep opzetten; daarna Pro per ouder, eerst 14 dagen gratis",
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
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Apps", href: "/apps" },
          { name: "Harmoneaz" },
        ]}
      />
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

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {screens.map((sc) => (
            <figure key={sc.src} className="overflow-hidden rounded-lg border border-line bg-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={sc.src} alt={sc.alt} className="w-full" loading="lazy" />
              <figcaption className="border-t border-line px-4 py-3 font-mono text-xs uppercase tracking-widest text-fog">
                {sc.label}
              </figcaption>
            </figure>
          ))}
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
          Live voor iPhone, iPad en Android
        </p>
        <p className="mt-2 text-sm text-fog">
          Je groep opzetten en de andere ouder uitnodigen is gratis. Daarna
          kiest elke ouder zelf voor Pro (€ 3,99 per maand of € 34,99 per
          jaar), eerst 14 dagen gratis.
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
