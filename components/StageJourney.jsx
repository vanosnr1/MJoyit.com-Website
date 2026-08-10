"use client";

import { useState } from "react";

const stages = [
  {
    label: "Jonge carrière",
    cx: 90,
    cy: 115,
    color: "rgb(var(--c-signal))",
    text: "Weinig tijd, veel te regelen. Apps die dingen sneller maken, niet ingewikkelder.",
  },
  {
    label: "Groeiend gezin",
    cx: 400,
    cy: 88,
    color: "rgb(var(--c-current))",
    text: "Zorg, planning en afspraken delen met anderen — zonder chaos in appjes en agenda's.",
  },
  {
    label: "Latere jaren",
    cx: 720,
    cy: 34,
    color: "rgb(var(--c-paper))",
    text: "Rust en overzicht, ook als het leven er anders uitziet dan tien jaar geleden.",
  },
];

export default function StageJourney({ className = "" }) {
  const [active, setActive] = useState(1);

  return (
    <div>
      <svg
        viewBox="0 0 800 160"
        fill="none"
        className={className}
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 C 100 120, 140 40, 260 40 S 420 130, 540 100 S 700 20, 800 40"
          stroke="url(#stageGradient)"
          strokeWidth="2.5"
          className="wave-path"
        />
        {stages.map((s, i) => (
          <g key={s.label}>
            <circle
              cx={s.cx}
              cy={s.cy}
              r={active === i ? 14 : 9}
              fill={s.color}
              opacity={active === i ? 0.15 : 0}
              className="transition-all duration-300"
            />
            <circle
              cx={s.cx}
              cy={s.cy}
              r={active === i ? 6 : 4}
              fill={s.color}
              stroke={active === i ? "rgb(var(--c-ink))" : "none"}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              tabIndex={0}
              role="button"
              aria-label={s.label}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(i);
              }}
            />
          </g>
        ))}
        <defs>
          <linearGradient
            id="stageGradient"
            x1="0"
            y1="0"
            x2="800"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="rgb(var(--c-signal))" />
            <stop offset="0.5" stopColor="rgb(var(--c-current))" />
            <stop offset="1" stopColor="rgb(var(--c-paper))" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-3 flex justify-between font-mono text-xs">
        {stages.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`focus-ring rounded-sm transition-colors ${
              active === i ? "text-paper" : "text-fog hover:text-paper"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="mt-4 max-w-md text-sm text-fog transition-opacity duration-300">
        {stages[active].text}
      </p>
    </div>
  );
}
