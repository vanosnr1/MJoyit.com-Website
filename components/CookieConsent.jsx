"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mjoyit-cookie-consent";

/**
 * Reads the saved consent, e.g. { functional: true, analytics: false }.
 * Use this later to conditionally load analytics scripts:
 *   if (getConsent()?.analytics) { ...load analytics... }
 */
export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  function save(consent) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...consent, date: new Date().toISOString() })
      );
    } catch (e) {}
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: consent }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookievoorkeuren"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-panel"
    >
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold">Cookies</p>
            <p className="mt-1 text-sm text-fog">
              Wij gebruiken functionele cookies om de site goed te laten werken. Met jouw
              toestemming gebruiken we ook analytische cookies om de site te verbeteren.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowPrefs(!showPrefs)}
              className="focus-ring rounded-sm px-3 py-2 font-mono text-xs text-fog transition-colors hover:text-paper"
            >
              Voorkeuren
            </button>
            <button
              onClick={() => save({ functional: true, analytics: false })}
              className="focus-ring rounded-sm border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-fog"
            >
              Alleen functioneel
            </button>
            <button
              onClick={() => save({ functional: true, analytics: true })}
              className="focus-ring rounded-sm bg-signal px-4 py-2 font-mono text-xs text-ink transition-opacity hover:opacity-90"
            >
              Alles accepteren
            </button>
          </div>
        </div>

        {showPrefs && (
          <div className="mt-4 border-t border-line pt-4">
            <div className="flex flex-col gap-3 text-sm">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked disabled className="mt-0.5 accent-current" />
                <span>
                  <span className="font-medium">Functioneel</span>
                  <span className="block text-fog">
                    Noodzakelijk voor de werking van de site. Altijd aan.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-0.5 accent-current"
                />
                <span>
                  <span className="font-medium">Analytisch</span>
                  <span className="block text-fog">
                    Anonieme statistieken over het gebruik van de site.
                  </span>
                </span>
              </label>
              <div>
                <button
                  onClick={() => save({ functional: true, analytics })}
                  className="focus-ring mt-1 rounded-sm border border-current px-4 py-2 font-mono text-xs text-current transition-colors hover:bg-current hover:text-ink"
                >
                  Keuze opslaan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
