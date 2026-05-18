"use client";

export default function BlueprintHero() {
  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="blueprint-svg absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {/* Outer perimeter */}
      <rect className="bp-draw" x="120" y="80" width="1160" height="740" strokeWidth="1" style={{ animationDelay: "0s" }} />
      {/* Inner courtyard */}
      <rect className="bp-draw" x="320" y="200" width="760" height="500" strokeWidth="0.75" style={{ animationDelay: "0.15s" }} />
      {/* Floor grid lines horizontal */}
      <line className="bp-draw" x1="120" y1="330" x2="1280" y2="330" style={{ animationDelay: "0.2s" }} />
      <line className="bp-draw" x1="120" y1="570" x2="1280" y2="570" style={{ animationDelay: "0.25s" }} />
      {/* Floor grid lines vertical */}
      <line className="bp-draw" x1="420" y1="80" x2="420" y2="820" style={{ animationDelay: "0.3s" }} />
      <line className="bp-draw" x1="700" y1="80" x2="700" y2="820" style={{ animationDelay: "0.35s" }} />
      <line className="bp-draw" x1="980" y1="80" x2="980" y2="820" style={{ animationDelay: "0.4s" }} />
      {/* Windows north */}
      <line className="bp-draw" x1="180" y1="80" x2="260" y2="80" strokeWidth="2.5" stroke="rgba(120,160,255,0.55)" style={{ animationDelay: "0.5s" }} />
      <line className="bp-draw" x1="460" y1="80" x2="560" y2="80" strokeWidth="2.5" stroke="rgba(120,160,255,0.55)" style={{ animationDelay: "0.55s" }} />
      <line className="bp-draw" x1="740" y1="80" x2="840" y2="80" strokeWidth="2.5" stroke="rgba(120,160,255,0.55)" style={{ animationDelay: "0.6s" }} />
      <line className="bp-draw" x1="1040" y1="80" x2="1140" y2="80" strokeWidth="2.5" stroke="rgba(120,160,255,0.55)" style={{ animationDelay: "0.65s" }} />
      {/* Entrance */}
      <line className="bp-draw" x1="620" y1="820" x2="780" y2="820" strokeWidth="2.5" stroke="rgba(120,160,255,0.55)" style={{ animationDelay: "0.7s" }} />
      {/* Door arc */}
      <path className="bp-draw" d="M 620 820 Q 620 780 660 780" strokeWidth="0.5" style={{ animationDelay: "0.75s" }} />
      {/* Internal partitions */}
      <line className="bp-draw" x1="320" y1="400" x2="500" y2="400" style={{ animationDelay: "0.45s" }} />
      <line className="bp-draw" x1="900" y1="400" x2="1080" y2="400" style={{ animationDelay: "0.48s" }} />
      <line className="bp-draw" x1="500" y1="200" x2="500" y2="400" style={{ animationDelay: "0.5s" }} />
      <line className="bp-draw" x1="900" y1="200" x2="900" y2="400" style={{ animationDelay: "0.52s" }} />
      {/* Dimension lines */}
      <line x1="120" y1="50" x2="1280" y2="50" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="120" y1="44" x2="120" y2="56" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1280" y1="44" x2="1280" y2="56" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="694" y="46" textAnchor="middle">24.00 m</text>
      <line x1="90" y1="80" x2="90" y2="820" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="84" y1="80" x2="96" y2="80" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="84" y1="820" x2="96" y2="820" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="86" y="454" textAnchor="middle" transform="rotate(-90,86,454)">15.50 m</text>
      <text className="title" x="130" y="106">TAVOLA 00 — PIANTA GENERALE</text>
      <text className="measure" x="130" y="122">SCALA 1:200</text>
      {/* Corner marks */}
      <line x1="120" y1="90" x2="130" y2="80" strokeWidth="0.4" stroke="rgba(120,160,255,0.15)" />
      <line x1="1270" y1="80" x2="1280" y2="90" strokeWidth="0.4" stroke="rgba(120,160,255,0.15)" />
    </svg>
  );
}
