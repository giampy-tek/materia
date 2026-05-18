"use client";

export default function BlueprintVillaPrivata() {
  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="blueprint-svg w-full h-full"
      aria-hidden="true"
    >
      <text className="title" x="40" y="40">TAVOLA 04 — PIANTA PIANO TERRA</text>
      <text className="measure" x="40" y="56">VILLA PRIVATA — COMO 2023 — SCALA 1:150</text>

      {/* L-shaped main perimeter */}
      {/* Horizontal wing */}
      <polyline points="160,160 1240,160 1240,560 760,560 760,780 160,780 160,160" strokeWidth="1.2" />
      {/* Inner L corner */}
      <line x1="760" y1="560" x2="760" y2="560" strokeWidth="1.2" />

      {/* Vertical wing partition line */}
      <line x1="760" y1="160" x2="760" y2="560" strokeWidth="0.75" />

      {/* Horizontal wing rooms */}
      {/* Living zone */}
      <line x1="160" y1="420" x2="500" y2="420" strokeWidth="0.75" />
      <line x1="500" y1="160" x2="500" y2="560" strokeWidth="0.75" />
      <text className="measure" x="330" y="310" textAnchor="middle">SOGGIORNO</text>
      <text className="measure" x="330" y="490" textAnchor="middle">PRANZO</text>

      {/* Kitchen */}
      <line x1="500" y1="360" x2="760" y2="360" strokeWidth="0.75" />
      <rect x="520" y="180" width="220" height="50" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <rect x="520" y="380" width="220" height="50" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="630" y="330" textAnchor="middle">CUCINA</text>

      {/* Upper wing — bedrooms */}
      <line x1="900" y1="160" x2="900" y2="560" strokeWidth="0.75" />
      <line x1="1070" y1="160" x2="1070" y2="560" strokeWidth="0.75" />
      <line x1="900" y1="360" x2="1240" y2="360" strokeWidth="0.75" />
      <text className="measure" x="830" y="270" textAnchor="middle">CAMERA</text>
      <text className="measure" x="985" y="270" textAnchor="middle">CAMERA</text>
      <text className="measure" x="1155" y="270" textAnchor="middle">SUITE</text>
      <text className="measure" x="985" y="460" textAnchor="middle">BAGNO</text>
      <text className="measure" x="1155" y="460" textAnchor="middle">EN SUITE</text>

      {/* Vertical wing rooms */}
      <line x1="160" y1="560" x2="760" y2="560" strokeWidth="0.75" />
      <line x1="460" y1="560" x2="460" y2="780" strokeWidth="0.75" />
      <text className="measure" x="310" y="680" textAnchor="middle">STUDIO</text>
      <text className="measure" x="600" y="680" textAnchor="middle">GARAGE</text>

      {/* Pool — outside the L */}
      <rect x="800" y="600" width="380" height="220" strokeWidth="0.8" strokeDasharray="5,3" />
      <rect x="820" y="620" width="340" height="180" strokeWidth="0.4" stroke="rgba(120,160,255,0.3)" />
      {/* Pool lane lines */}
      <line x1="820" y1="710" x2="1160" y2="710" strokeWidth="0.25" stroke="rgba(120,160,255,0.15)" strokeDasharray="8,8" />
      <text className="measure" x="990" y="718" textAnchor="middle">PISCINA — 17.00 × 9.00 m</text>

      {/* Pool house */}
      <rect x="1200" y="600" width="160" height="100" strokeWidth="0.6" />
      <text className="measure" x="1280" y="658" textAnchor="middle">POOL</text>
      <text className="measure" x="1280" y="672" textAnchor="middle">HOUSE</text>

      {/* Entrance */}
      <line x1="340" y1="780" x2="460" y2="780" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <path d="M 340 780 Q 340 740 380 740" strokeWidth="0.4" />

      {/* Garden path */}
      <path d="M 400 780 Q 400 840 700 860 Q 900 870 990 820" strokeWidth="0.4" strokeDasharray="6,4" stroke="rgba(120,160,255,0.15)" />

      {/* Dimensions */}
      <line x1="160" y1="850" x2="1240" y2="850" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="160" y1="842" x2="160" y2="858" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1240" y1="842" x2="1240" y2="858" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="700" y="866" textAnchor="middle">32.40 m</text>

      <line x1="100" y1="160" x2="100" y2="780" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="92" y1="160" x2="108" y2="160" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="92" y1="780" x2="108" y2="780" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="96" y="474" textAnchor="middle" transform="rotate(-90,96,474)">20.00 m</text>

      {/* North arrow */}
      <line x1="1310" y1="820" x2="1310" y2="780" strokeWidth="0.8" stroke="rgba(120,160,255,0.4)" />
      <polyline points="1304,790 1310,778 1316,790" strokeWidth="0.6" stroke="rgba(120,160,255,0.4)" />
      <text className="measure" x="1310" y="838" textAnchor="middle">N</text>
    </svg>
  );
}
