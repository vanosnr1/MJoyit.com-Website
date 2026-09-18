import PhoneShowcase from "../../../components/PhoneShowcase";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Domeaz — de tweede app van MJoy-IT",
  description:
    "Ontdek Domeaz, de tweede app van MJoy-IT: alles van je huis op één plek. Apparaten met garantie, contracten met opzegtermijn en onderhoud met herinneringen. Gratis te beginnen via domeaz.app.",
  keywords: [
    "Domeaz",
    "MJoy-IT apps",
    "app voor je huis",
    "huisdossier app",
    "garantie en onderhoud bijhouden",
  ],
  alternates: { canonical: "/apps/domeaz" },
};

// Verwijzingen naar domeaz.app krijgen UTM-parameters, zodat de lancering in de
// statistieken van domeaz.app zichtbaar is. Storelinks blijven kaal: Apple gebruikt
// eigen campagneparameters (pt/ct) en daar hebben we geen provider-token voor.
const DOMEAZ_URL =
  "https://domeaz.app/?utm_source=mjoyit&utm_medium=referral&utm_campaign=launch";
const APP_STORE_URL = "https://apps.apple.com/nl/app/domeaz/id6806525988";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.domeaz.app";

const features = [
  {
    title: "Apparaten met garantie",
    description:
      "Leg vast wat er in huis staat: merk, model, serienummer, aankoopdatum en de bon. Domeaz waarschuwt je voordat een garantie afloopt.",
  },
  {
    title: "Smart Scan van het typeplaatje",
    description:
      "Maak een foto van het typeplaatje en Domeaz leest merk, model en serienummer eruit. Je hoeft alleen nog te controleren of het klopt.",
  },
  {
    title: "Handleiding en hulp bij een storing",
    description:
      "Zoek de handleiding bij je apparaat, en beschrijf een storing of foutcode voor een eerste inschatting van wat het kan zijn — en wat je zelf kunt nakijken.",
  },
  {
    title: "Contracten en opzegtermijnen",
    description:
      "Zet je contracten erin en zie tot wanneer je nog kunt opzeggen, zodat een contract niet stilzwijgend een jaar doorloopt.",
  },
  {
    title: "Vaste lasten in één oogopslag",
    description:
      "Wat je huis per maand en per jaar kost, uitgesplitst per categorie — energie, verzekeringen, internet en de rest.",
  },
  {
    title: "Onderhoud met herinneringen",
    description:
      "Terugkerende klussen op hun eigen ritme — jaarlijks cv-onderhoud, elk kwartaal de filters, de dakgoot in het najaar. Met een melding als het zover is.",
  },
  {
    title: "Contacten binnen handbereik",
    description:
      "De loodgieter, de installateur, de verhuurder — direct te bellen of mailen, en gekoppeld aan het apparaat of contract waar ze bij horen.",
  },
  {
    title: "Samen met je huisgenoten",
    description:
      "Nodig je huisgenoten uit met een code. Iedereen ziet hetzelfde huis, dezelfde apparaten en dezelfde afspraken.",
  },
  {
    title: "Over dit huis",
    description:
      "De dingen die je altijd kwijt bent: bouwjaar, energielabel, de kleurcode van de muurverf, welke groep in de meterkast bij de zolder hoort.",
  },
];

const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": "https://domeaz.app/#app",
  name: "Domeaz",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  inLanguage: ["nl", "en"],
  description:
    "Alles van je huis op één plek: apparaten met garantie, contracten en vaste lasten met opzegtermijn, onderhoud met herinneringen en contacten — gedeeld met je huisgenoten.",
  url: "https://domeaz.app",
  sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Gratis te beginnen; Premium € 1,99 per maand of € 19,99 per jaar",
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
          { name: "Domeaz" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppJsonLd) }}
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-current">
            Onze tweede app is live 🎉
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Domeaz — alles van je huis op één plek
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog">
            Welke cv-ketel hangt er, wanneer loopt de garantie van de
            wasmachine af, en tot wanneer kun je dat energiecontract nog
            opzeggen? Domeaz onthoudt het, en waarschuwt je op tijd.
          </p>
          <p className="mt-4 text-sm text-fog">
            Alles over de app zelf vind je op{" "}
            <a
              href={DOMEAZ_URL}
              className="focus-ring rounded-sm font-medium text-signal underline underline-offset-4 hover:text-current"
            >
              Domeaz, de app voor je huisdossier
            </a>
            .
          </p>
        </div>
        <PhoneShowcase
          screens={[
            {
              src: "/app-screens/domeaz-huis.webp",
              alt: "Domeaz — overzicht van het huis met onderhoud en aflopende garanties",
              label: "Ons huis",
            },
            {
              src: "/app-screens/domeaz-apparaten.webp",
              alt: "Domeaz — lijst met apparaten in huis",
              label: "Apparaten",
            },
          ]}
          hint="scroll voor apparaten"
        />
      </div>

      {/* Waarom Domeaz */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Waarom Domeaz bestaat
        </p>
        <p className="mt-4 max-w-2xl text-fog">
          De gegevens van een huis liggen verspreid: een bon in een la, een
          contract in je mailbox, het serienummer op een sticker achter de
          wasmachine. Precies op het moment dat je het nodig hebt — een
          storing, een garantieclaim, een opzegtermijn die verloopt — is het
          zoeken. Domeaz zet het op één plek en waarschuwt op tijd.
        </p>
      </div>

      {/* Na Harmoneaz */}
      <div className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          De tweede app van MJoy-IT
        </p>
        <p className="mt-4 max-w-2xl text-fog">
          Na Harmoneaz is Domeaz de volgende stap in onze missie: apps die
          het dagelijks leven eenvoudiger maken. Waar Harmoneaz co-ouders
          helpt de zorg voor de kinderen te regelen, houdt Domeaz het huis
          zelf bij — voor huiseigenaren en huurders, voor gezinnen en
          stellen, en voor iedereen met een tweede woning. Gemaakt in
          Nederland, in het Nederlands en het Engels. Lees meer op{" "}
          <a
            href={DOMEAZ_URL}
            className="focus-ring rounded-sm font-medium text-signal underline underline-offset-4 hover:text-current"
          >
            domeaz.app, waar je garanties, onderhoud en vaste lasten van je
            huis bijhoudt
          </a>
          .
        </p>
      </div>

      {/* Features */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-current">
          Wat Domeaz voor je doet
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
              In de app — vaste lasten en onderhoud
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 sm:gap-6 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-screens/domeaz-kosten.webp"
              alt="Domeaz — kosten en contracten met de vaste lasten per maand en per jaar"
              className="w-full rounded-2xl border border-line"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-screens/domeaz-onderhoud.webp"
              alt="Domeaz — onderhoudsoverzicht met terugkerende klussen"
              className="w-full rounded-2xl border border-line"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Onderscheid */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Waarin Domeaz zich onderscheidt
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Geen advertenties, geen tracking
            </p>
            <p className="mt-2 text-sm text-fog">
              Domeaz verdient aan abonnementen, niet aan je gegevens. Er zit
              geen advertentie- of trackingcode in de app.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Je gegevens blijven in de EU
            </p>
            <p className="mt-2 text-sm text-fog">
              Alles staat op servers in de Europese Unie. Je kunt je gegevens
              exporteren en je account zelf verwijderen, in de app.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel2 p-5">
            <p className="font-display text-base font-bold">
              Gratis is geen proefperiode
            </p>
            <p className="mt-2 text-sm text-fog">
              De gratis versie blijft werken. Premium haalt de limieten weg
              voor € 1,99 per maand of € 19,99 per jaar.
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
          Gratis te beginnen, in het Nederlands en het Engels.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={DOMEAZ_URL}
            target="_blank"
            rel="noopener"
            className="focus-ring rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-ink hover:scale-[1.02] transition-transform"
          >
            Ga naar domeaz.app
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-current"
          >
            Download op de App Store
          </a>
          <a
            href={PLAY_STORE_URL}
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
