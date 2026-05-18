"use client";

export default function BlueprintCasaLago() {
  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="blueprint-svg w-full h-full"
      aria-hidden="true"
    >
      <text className="title" x="40" y="40">TAVOLA 01 — PIANTA PIANO TERRA</text>
      <text className="measure" x="40" y="56">CASA SUL LAGO — VARESE 2023 — SCALA 1:100</text>

      {/* Main perimeter — rectangular with lake-facing glazing */}
      <rect x="200" y="150" width="1000" height="600" strokeWidth="1.2" />

      {/* Large glazed facade south (lake side) */}
      <line x1="200" y1="750" x2="400" y2="750" strokeWidth="0.4" stroke="rgba(120,160,255,0.08)" />
      <line x1="400" y1="750" x2="600" y2="750" strokeWidth="3" stroke="rgba(120,160,255,0.6)" />
      <line x1="600" y1="750" x2="800" y2="750" strokeWidth="3" stroke="rgba(120,160,255,0.6)" />
      <line x1="800" y1="750" x2="1000" y2="750" strokeWidth="3" stroke="rgba(120,160,255,0.6)" />
      <line x1="1000" y1="750" x2="1200" y2="750" strokeWidth="0.4" stroke="rgba(120,160,255,0.08)" />

      {/* Mullions on glazed south */}
      {[500, 600, 700, 800, 900, 1000].map((x) => (
        <line key={x} x1={x} y1="750" x2={x} y2="720" strokeWidth="0.4" />
      ))}

      {/* Internal partitions */}
      <line x1="200" y1="420" x2="680" y2="420" strokeWidth="0.75" />
      <line x1="680" y1="150" x2="680" y2="420" strokeWidth="0.75" />
      <line x1="680" y1="480" x2="680" y2="750" strokeWidth="0.75" />
      <line x1="200" y1="540" x2="460" y2="540" strokeWidth="0.75" />
      <line x1="460" y1="420" x2="460" y2="540" strokeWidth="0.75" />
      <line x1="900" y1="400" x2="1200" y2="400" strokeWidth="0.75" />
      <line x1="900" y1="150" x2="900" y2="400" strokeWidth="0.75" />

      {/* Door openings with arcs */}
      <path d="M 620 420 Q 660 420 660 460" strokeWidth="0.4" />
      <line x1="620" y1="420" x2="680" y2="420" strokeWidth="0" />
      <path d="M 460 490 Q 460 530 500 530" strokeWidth="0.4" />

      {/* Entrance north */}
      <line x1="670" y1="150" x2="740" y2="150" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <path d="M 670 150 Q 670 190 710 190" strokeWidth="0.4" />

      {/* Windows east/west */}
      <line x1="200" y1="280" x2="200" y2="360" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <line x1="200" y1="560" x2="200" y2="640" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <line x1="1200" y1="260" x2="1200" y2="380" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <line x1="1200" y1="500" x2="1200" y2="680" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />

      {/* Terrace lake side */}
      <rect x="350" y="750" width="700" height="80" strokeWidth="0.6" strokeDasharray="4,3" />
      <text className="measure" x="700" y="818" textAnchor="middle">TERRAZZA LAGO</text>

      {/* Room labels */}
      <text className="measure" x="340" y="310" textAnchor="middle">CAMERA</text>
      <text className="measure" x="340" y="490" textAnchor="middle">BAGNO</text>
      <text className="measure" x="840" y="460" textAnchor="middle">SOGGIORNO / PRANZO</text>
      <text className="measure" x="340" y="620" textAnchor="middle">STUDIO</text>
      <text className="measure" x="1040" y="290" textAnchor="middle">CUCINA</text>

      {/* Dimension lines */}
      <line x1="200" y1="100" x2="1200" y2="100" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="200" y1="92" x2="200" y2="108" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1200" y1="92" x2="1200" y2="108" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="700" y="96" textAnchor="middle">19.00 m</text>

      <line x1="1260" y1="150" x2="1260" y2="750" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1252" y1="150" x2="1268" y2="150" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1252" y1="750" x2="1268" y2="750" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="1264" y="454" textAnchor="start" transform="rotate(-90,1264,454)">11.40 m</text>

      {/* North arrow */}
      <line x1="80" y1="820" x2="80" y2="780" strokeWidth="0.8" stroke="rgba(120,160,255,0.4)" />
      <polyline points="74,790 80,778 86,790" strokeWidth="0.6" stroke="rgba(120,160,255,0.4)" />
      <text className="measure" x="80" y="838" textAnchor="middle">N</text>
    </svg>
  );
}
