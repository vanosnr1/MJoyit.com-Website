import Link from "next/link";
import StageJourney from "../components/StageJourney";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="font-mono text-sm uppercase tracking-widest text-signal">
          MJoy-IT
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Apps die het dagelijks leven eenvoudiger maken.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-fog">
          Wij zijn MJoy-IT, een startup uit Rotterdam. We bouwen apps die
          aanvoelen als een helpende hand — niet als een drempel.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://harmoneaz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Ontdek onze eerste app: Harmoneaz →
          </a>
          <Link
            href="/over-ons"
            className="focus-ring rounded-md border border-line px-6 py-3 font-mono text-sm font-medium text-paper transition-colors hover:border-signal"
          >
            Over ons
          </Link>
        </div>

        <div className="mt-20">
          <StageJourney className="h-24 w-full md:h-32" />
        </div>
      </section>

      {/* Lanceringsblok */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm uppercase tracking-widest text-current">
            Onze eerste app is live
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Harmoneaz 🎉
          </h2>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-fog">
              <p>
                Wat begon als een idee, is nu werkelijkheid: met trots
                presenteren we{" "}
                <span className="text-paper">
                  Harmoneaz — dé co-ouderschap app voor Nederland
                </span>
                . Plan zorgschema&apos;s, agenda&apos;s, afspraken en alles
                rondom de kinderen op één rustige plek, zonder eindeloze
                appjes.
              </p>
              <p>
                Harmoneaz is ontstaan uit eigen ervaring. Als co-ouder liepen
                we zelf tegen versnipperde notities, losse afspraken en
                misverstanden aan — en merkten we dat er in Nederland geen
                app was die écht aansloot op de Nederlandse situatie. Dat gat
                vullen we nu op.
              </p>
              <p>
                De app is beschikbaar voor iPhone en Android, met 14 dagen
                gratis proberen.
              </p>
              <Link
                href="/product"
                className="focus-ring mt-2 inline-block rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-current"
              >
                Lees het volledige verhaal →
              </Link>
            </div>

            <div className="rounded-lg border border-line bg-panel p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-fog">
                Harmoneaz
              </p>
              <p className="mt-2 font-display text-xl font-bold">
                Co-ouderschap app voor Nederland
              </p>
              <p className="mt-2 text-sm text-fog">
                Plan zorgschema&apos;s, agenda en alles rondom de kinderen op
                één rustige plek. 14 dagen gratis proberen.
              </p>
              <a
                href="https://harmoneaz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-block font-mono text-sm text-current hover:underline"
              >
                harmoneaz.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons teaser */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-signal">
                Wie zijn wij?
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                Mandy & Jeroen
              </h2>
            </div>
            <div>
              <p className="text-fog">
                We zijn deze reis begonnen met een duidelijke visie:
                technologie maken die niet aanvoelt als een obstakel, maar als
                een helpende hand — voor elke fase van het leven.
              </p>
              <Link
                href="/over-ons"
                className="focus-ring mt-5 inline-block font-mono text-sm text-current hover:underline"
              >
                Lees ons verhaal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
