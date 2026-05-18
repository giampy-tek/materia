"use client";

export default function BlueprintFilosofia() {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid meet"
      className="blueprint-svg w-full h-full"
      aria-hidden="true"
    >
      <text className="title" x="20" y="24">SEZIONE TRASVERSALE — S.01</text>
      <text className="measure" x="20" y="38">SCALA 1:50</text>

      {/* Ground line */}
      <line x1="20" y1="340" x2="580" y2="340" strokeWidth="1.5" stroke="rgba(120,160,255,0.4)" />
      {/* Foundation */}
      <rect x="60" y="340" width="480" height="20" strokeWidth="1" />
      {/* Left wall */}
      <rect x="60" y="120" width="24" height="220" strokeWidth="1" />
      {/* Right wall */}
      <rect x="516" y="120" width="24" height="220" strokeWidth="1" />
      {/* Roof slab */}
      <rect x="50" y="108" width="500" height="18" strokeWidth="1" />
      {/* Floor slab */}
      <rect x="60" y="230" width="480" height="14" strokeWidth="0.75" />
      {/* Interior partition */}
      <rect x="280" y="126" width="16" height="104" strokeWidth="0.5" />
      {/* Door opening ground floor */}
      <line x1="180" y1="244" x2="180" y2="340" strokeWidth="0.5" />
      <line x1="240" y1="244" x2="240" y2="340" strokeWidth="0.5" />
      {/* Door arc */}
      <path d="M 180 340 Q 180 290 210 290" strokeWidth="0.4" />
      {/* Window ground floor right */}
      <rect x="360" y="268" width="80" height="56" strokeWidth="0.5" />
      <line x1="360" y1="296" x2="440" y2="296" strokeWidth="0.3" />
      {/* Window upper floor left */}
      <rect x="100" y="142" width="100" height="60" strokeWidth="0.5" />
      <line x1="100" y1="172" x2="200" y2="172" strokeWidth="0.3" />
      {/* Window upper floor right */}
      <rect x="400" y="142" width="100" height="60" strokeWidth="0.5" />
      <line x1="400" y1="172" x2="500" y2="172" strokeWidth="0.3" />

      {/* Height dimension */}
      <line x1="30" y1="108" x2="30" y2="340" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="24" y1="108" x2="36" y2="108" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="24" y1="340" x2="36" y2="340" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="26" y="230" textAnchor="middle" transform="rotate(-90,26,230)">7.20 m</text>

      {/* Width dimension */}
      <line x1="60" y1="378" x2="540" y2="378" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="60" y1="372" x2="60" y2="384" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="540" y1="372" x2="540" y2="384" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="300" y="390" textAnchor="middle">12.80 m</text>

      {/* Floor labels */}
      <text className="measure" x="550" y="296" textAnchor="start">P.T.</text>
      <text className="measure" x="550" y="185" textAnchor="start">P.1</text>
    </svg>
  );
}
