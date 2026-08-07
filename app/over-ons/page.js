export const metadata = {
  title: "Over ons",
  description:
    "Wie zijn wij? Mandy en Jeroen, de gezichten achter MJoy-IT — een Rotterdamse startup die apps bouwt die het dagelijks leven eenvoudiger maken.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOns() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-widest text-signal">
        Wie zijn wij?
      </p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Mandy & Jeroen
      </h1>

      <div className="mt-10 space-y-6 text-fog">
        <p>
          Hoi! Wij zijn Mandy en Jeroen, de gezichten achter{" "}
          <span className="text-paper">MJoy-IT</span>.
        </p>
        <p>
          We zijn deze reis begonnen met een duidelijke visie: technologie
          maken die niet aanvoelt als een obstakel, maar als een helpende
          hand. Als startup zetten we ons in om het dagelijks leven
          eenvoudiger te maken met slimme apps.
        </p>
        <p>
          Wij geloven dat technologie intuïtief en toegankelijk moet zijn,
          waar je ook staat in het leven. Of je nu midden in een drukke
          carrière zit, een groeiend gezin runt of geniet van je latere
          jaren — onze missie is jouw digitale leven makkelijker maken. We
          ontwerpen met oog voor de mens, zodat onze apps écht iets
          toevoegen aan je dag.
        </p>
        <p>
          Onze eerste stap in die missie is{" "}
          <a
            href="https://harmoneaz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-current hover:underline"
          >
            Harmoneaz
          </a>
          , de co-ouderschap app voor Nederland. Het is voor ons persoonlijk:
          als je zelf weet hoe versnipperd co-ouderschap kan aanvoelen, wil je
          daar iets aan bouwen dat écht helpt.
        </p>
        <p>
          Bedankt dat je langskomt en vanaf het begin deel uitmaakt van ons
          verhaal.
        </p>
        <p className="font-display text-lg font-bold text-paper">
          Mandy & Jeroen
        </p>
      </div>

      <div className="mt-14 rounded-lg border border-line bg-panel p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-fog">
          MJoy-IT
        </p>
        <p className="mt-2 text-sm text-paper">Gevestigd in Rotterdam</p>
        <p className="text-sm text-paper">KvK 42007160</p>
      </div>
    </section>
  );
}
