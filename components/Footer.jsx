import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-base font-bold">MJoy-IT</p>
            <p className="mt-3 text-sm text-fog">
              Startup uit Rotterdam. Wij bouwen apps die het dagelijks leven
              eenvoudiger maken — voor elke levensfase.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              Snelle links
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="focus-ring hover:text-current">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="focus-ring hover:text-current">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/product" className="focus-ring hover:text-current">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-ring hover:text-current">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              Onze apps
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://harmoneaz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-current"
                >
                  Harmoneaz — co-ouderschap app voor Nederland
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fog">
              Contact
            </p>
            <p className="mt-3 text-sm">
              <a href="mailto:info@mjoyit.com" className="focus-ring hover:text-current">
                info@mjoyit.com
              </a>
            </p>
          </div>
        </div>

        <p className="mt-12 font-mono text-xs text-fog/70">
          © {new Date().getFullYear()} MJoy-IT, gevestigd in Rotterdam. KvK:
          42007160
        </p>
      </div>
    </footer>
  );
}
