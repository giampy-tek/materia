"use client";

export default function BlueprintPiazzaMercato() {
  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      className="blueprint-svg w-full h-full"
      aria-hidden="true"
    >
      <text className="title" x="40" y="40">TAVOLA 02 — ASSONOMETRIA ISOMETRICA</text>
      <text className="measure" x="40" y="56">PIAZZA MERCATO — MILANO 2022 — SCALA 1:200</text>

      {/* Isometric base platform */}
      <polygon points="700,120 1200,360 700,600 200,360" strokeWidth="1" />
      {/* Left face */}
      <polygon points="200,360 700,600 700,720 200,480" strokeWidth="0.75" />
      {/* Right face */}
      <polygon points="1200,360 700,600 700,720 1200,480" strokeWidth="0.75" />

      {/* Central arcade structure — 5 arches */}
      {[0,1,2,3,4].map((i) => {
        const x = 380 + i * 130;
        const y = 290 - i * 24;
        const ex = x + 100;
        const ey = y + 24;
        return (
          <g key={i}>
            {/* Left pier */}
            <line x1={x} y1={y + 20} x2={x} y2={y + 120} strokeWidth="0.8" stroke="rgba(120,160,255,0.3)" />
            {/* Right pier */}
            <line x1={ex} y1={ey + 20} x2={ex} y2={ey + 120} strokeWidth="0.8" stroke="rgba(120,160,255,0.3)" />
            {/* Arch lintel */}
            <path d={`M ${x} ${y + 20} Q ${(x + ex) / 2} ${(y + ey) / 2 - 20} ${ex} ${ey + 20}`} strokeWidth="0.6" stroke="rgba(120,160,255,0.35)" />
          </g>
        );
      })}

      {/* Roof beams */}
      {[0,1,2,3].map((i) => (
        <line key={i}
          x1={380 + i * 130} y1={290 - i * 24}
          x2={380 + i * 130 + 100} y2={290 - i * 24 + 24}
          strokeWidth="0.4" stroke="rgba(120,160,255,0.2)"
        />
      ))}

      {/* Grid lines on base */}
      {[1,2,3,4].map((i) => (
        <line key={i}
          x1={200 + i * 200} y1={360 + i * 48 - 240}
          x2={200 + i * 200} y2={480 + i * 48 - 240}
          strokeWidth="0.3" stroke="rgba(120,160,255,0.15)"
        />
      ))}

      {/* Market stalls — top face grid */}
      {[0,1,2].map((row) =>
        [0,1,2,3].map((col) => (
          <rect key={`${row}-${col}`}
            x={280 + col * 140 + row * 70}
            y={260 + col * 56 - row * 28}
            width={100} height={40}
            strokeWidth="0.4"
            stroke="rgba(120,160,255,0.2)"
            transform={`skewX(-20)`}
          />
        ))
      )}

      {/* Canopy lines */}
      <line x1="200" y1="300" x2="1200" y2="300" strokeWidth="0.3" strokeDasharray="6,4" stroke="rgba(120,160,255,0.15)" />
      <line x1="200" y1="360" x2="1200" y2="360" strokeWidth="0.3" strokeDasharray="6,4" stroke="rgba(120,160,255,0.15)" />

      {/* Dimension annotations */}
      <line x1="200" y1="800" x2="700" y2="800" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="200" y1="793" x2="200" y2="807" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="700" y1="793" x2="700" y2="807" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="450" y="818" textAnchor="middle">18.60 m</text>

      <line x1="700" y1="800" x2="1200" y2="800" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="1200" y1="793" x2="1200" y2="807" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="950" y="818" textAnchor="middle">18.60 m</text>

      {/* Height annotation */}
      <line x1="140" y1="360" x2="140" y2="120" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="133" y1="360" x2="147" y2="360" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <line x1="133" y1="120" x2="147" y2="120" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" />
      <text className="measure" x="136" y="244" textAnchor="middle" transform="rotate(-90,136,244)">8.40 m</text>

      {/* Plan inset bottom right */}
      <rect x="1050" y="680" width="280" height="180" strokeWidth="0.4" strokeDasharray="3,3" />
      <text className="measure" x="1190" y="700" textAnchor="middle">PIANTA SCHEMATICA</text>
      <rect x="1080" y="710" width="220" height="120" strokeWidth="0.6" />
      {[0,1,2,3].map((i) => (
        <line key={i} x1={1080 + i * 55} y1="710" x2={1080 + i * 55} y2="830" strokeWidth="0.3" stroke="rgba(120,160,255,0.2)" />
      ))}
      {[0,1,2].map((i) => (
        <line key={i} x1="1080" y1={710 + i * 40} x2="1300" y2={710 + i * 40} strokeWidth="0.3" stroke="rgba(120,160,255,0.2)" />
      ))}
    </svg>
  );
}
