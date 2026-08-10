import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Onze apps",
  description:
    "Ontdek de apps van MJoy-IT: software die het dagelijks leven eenvoudiger maakt, gebouwd vanuit eigen ervaring in Nederland.",
  alternates: { canonical: "/apps" },
};

const apps = [
  {
    name: "Harmoneaz",
    tagline: "Dé co-ouderschap app voor Nederland",
    description:
      "Plan zorgschema's, agenda's, afspraken en alles rondom de kinderen op één rustige plek. Vanuit eigen ervaring gebouwd, speciaal voor de Nederlandse situatie.",
    href: "/apps/harmoneaz",
    external: "https://harmoneaz.com",
    status: "Live",
  },
];

export default function Apps() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Apps" },
        ]}
      />
      <p className="font-mono text-sm uppercase tracking-widest text-signal">
        Portfolio
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Onze apps
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-fog">
        Software die het dagelijks leven eenvoudiger maakt — voor elke
        levensfase.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {apps.map((app) => (
          <div
            key={app.name}
            className="rounded-lg border border-line bg-panel p-6"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-xl font-bold">{app.name}</p>
              <span className="rounded-full border border-current px-2.5 py-0.5 font-mono text-xs text-current">
                {app.status}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-fog">{app.tagline}</p>
            <p className="mt-3 text-sm text-fog">{app.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={app.href}
                className="focus-ring rounded-sm font-mono text-sm text-signal hover:underline"
              >
                Het verhaal →
              </Link>
              <a
                href={app.external}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm font-mono text-sm text-current hover:underline"
              >
                {new URL(app.external).hostname} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
