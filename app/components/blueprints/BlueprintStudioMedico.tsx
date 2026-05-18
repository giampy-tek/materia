"use client";

export default function BlueprintStudioMedico() {
  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="blueprint-svg w-full h-full"
      aria-hidden="true"
    >
      <text className="title" x="40" y="40">TAVOLA 03 — PIANTA PIANO UNICO</text>
      <text className="measure" x="40" y="56">STUDIO MEDICO — TORINO 2024 — SCALA 1:75</text>

      {/* Main perimeter */}
      <rect x="160" y="120" width="1080" height="660" strokeWidth="1.2" />

      {/* Central corridor */}
      <line x1="160" y1="450" x2="1240" y2="450" strokeWidth="0.75" />
      <line x1="160" y1="510" x2="1240" y2="510" strokeWidth="0.75" />

      {/* Corridor dimension */}
      <text className="measure" x="700" y="487" textAnchor="middle">CORRIDOIO CENTRALE — 1.80 m</text>

      {/* Rooms north side — 5 consultation rooms */}
      {[0,1,2,3,4].map((i) => {
        const x = 160 + i * 216;
        return (
          <g key={i}>
            <line x1={x + 216} y1="120" x2={x + 216} y2="450" strokeWidth="0.75" />
            {/* Door */}
            <line x1={x + 80} y1="450" x2={x + 136} y2="450" strokeWidth="2.5" stroke="rgba(120,160,255,0.08)" />
            <path d={`M ${x + 80} 450 Q ${x + 80} 414 ${x + 116} 414`} strokeWidth="0.4" />
            {/* Examination table */}
            <rect x={x + 36} y="200" width="80" height="160" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
            <rect x={x + 140} y="160" width="56" height="56" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
            <text className="measure" x={x + 108} y={450 - 20} textAnchor="middle">{`CONS.0${i + 1}`}</text>
          </g>
        );
      })}

      {/* Rooms south side — waiting + services */}
      {/* Waiting room */}
      <line x1="160" y1="720" x2="160" y2="510" strokeWidth="0" />
      <line x1="540" y1="510" x2="540" y2="780" strokeWidth="0.75" />
      {/* Seating */}
      {[0,1,2,3].map((i) => (
        <rect key={i} x={180 + i * 76} y="560" width="56" height="56" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      ))}
      <text className="measure" x="350" y="680" textAnchor="middle">SALA ATTESA</text>

      {/* Reception */}
      <rect x="560" y="530" width="200" height="80" strokeWidth="0.6" />
      <text className="measure" x="660" y="578" textAnchor="middle">RECEPTION</text>

      {/* Bathrooms */}
      <line x1="820" y1="510" x2="820" y2="780" strokeWidth="0.75" />
      <line x1="1020" y1="510" x2="1020" y2="780" strokeWidth="0.75" />
      <line x1="820" y1="645" x2="1020" y2="645" strokeWidth="0.75" />
      {/* WC fixtures */}
      <rect x="840" y="530" width="40" height="56" rx="8" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <rect x="910" y="530" width="88" height="44" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <rect x="840" y="660" width="40" height="56" rx="8" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <rect x="910" y="660" width="88" height="44" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="920" y="598" textAnchor="middle">WC</text>
      <text className="measure" x="920" y="714" textAnchor="middle">WC</text>

      {/* Pharmacy storage */}
      <line x1="1040" y1="510" x2="1040" y2="780" strokeWidth="0.75" />
      <rect x="1060" y="530" width="40" height="200" strokeWidth="0.4" stroke="rgba(120,160,255,0.15)" />
      <rect x="1120" y="530" width="40" height="200" strokeWidth="0.4" stroke="rgba(120,160,255,0.15)" />
      <rect x="1180" y="530" width="40" height="200" strokeWidth="0.4" stroke="rgba(120,160,255,0.15)" />
      <text className="measure" x="1140" y="680" textAnchor="middle">DEPOSITO</text>

      {/* Entrance */}
      <line x1="620" y1="780" x2="760" y2="780" strokeWidth="3" stroke="rgba(120,160,255,0.5)" />
      <path d="M 620 780 Q 620 740 660 740" strokeWidth="0.4" />

      {/* External dimension */}
      <line x1="160" y1="860" x2="1240" y2="860" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="160" y1="852" x2="160" y2="868" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1240" y1="852" x2="1240" y2="868" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="700" y="876" textAnchor="middle">21.60 m</text>

      <line x1="120" y1="120" x2="120" y2="780" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="112" y1="120" x2="128" y2="120" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="112" y1="780" x2="128" y2="780" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="116" y="454" textAnchor="middle" transform="rotate(-90,116,454)">13.20 m</text>
    </svg>
  );
}
