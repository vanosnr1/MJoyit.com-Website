"use client";

import { useEffect, useState } from "react";

export default function PhoneShowcase() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setScrolled((s) => !s);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[280px]">
      {/* Outer box: fixed aspect ratio via the padding-top technique,
          which — unlike the CSS `aspect-ratio` property — reliably gives
          absolutely positioned children a real pixel height to fill. */}
      <div className="relative w-full" style={{ paddingTop: "216.7%" }}>
        <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border-4 border-panel2 bg-ink shadow-[0_0_70px_-15px_rgba(79,124,255,0.35)]">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* dashboard: slides up and out when scrolled */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/app-screens/dashboard.webp"
            alt="Harmoneaz — dashboard met taken"
            className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              width: "100%",
              height: "100%",
              transform: scrolled ? "translateY(-100%)" : "translateY(0%)",
            }}
          />

          {/* zorgschema: slides up into view from below when scrolled */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/app-screens/zorgschema.webp"
            alt="Harmoneaz — zorgschema kalender"
            className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              width: "100%",
              height: "100%",
              transform: scrolled ? "translateY(0%)" : "translateY(100%)",
            }}
          />

          {/* scroll hint, only visible on the dashboard state */}
          <div
            className={`absolute bottom-3 left-1/2 z-20 -translate-x-1/2 transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-1 rounded-full bg-ink/70 px-3 py-1.5 backdrop-blur">
              <span className="font-mono text-[9px] uppercase tracking-widest text-fog">
                scroll voor zorgschema
              </span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="animate-bounce text-current"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setScrolled(false)}
          className={`focus-ring rounded-full px-3 py-1 font-mono text-[11px] transition-colors ${
            !scrolled ? "bg-panel text-paper" : "text-fog hover:text-paper"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setScrolled(true)}
          className={`focus-ring rounded-full px-3 py-1 font-mono text-[11px] transition-colors ${
            scrolled ? "bg-panel text-paper" : "text-fog hover:text-paper"
          }`}
        >
          Zorgschema
        </button>
      </div>
    </div>
  );
}
