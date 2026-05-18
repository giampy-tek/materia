export default function ContactSection() {
  return (
    <section
      className="relative py-32 px-8 md:px-16 overflow-hidden"
      style={{ background: "#060608" }}
    >
      {/* Decorative blueprint background — schematic map */}
      <svg
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        className="blueprint-svg absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {/* Street grid */}
        <line x1="0" y1="200" x2="1400" y2="200" />
        <line x1="0" y1="350" x2="1400" y2="350" />
        <line x1="0" y1="480" x2="1400" y2="480" />
        <line x1="200" y1="0" x2="200" y2="600" />
        <line x1="500" y1="0" x2="500" y2="600" />
        <line x1="800" y1="0" x2="800" y2="600" />
        <line x1="1100" y1="0" x2="1100" y2="600" />
        {/* Building footprints */}
        <rect x="240" y="220" width="220" height="110" strokeWidth="0.8" />
        <rect x="540" y="60" width="220" height="120" />
        <rect x="840" y="220" width="220" height="110" />
        <rect x="540" y="370" width="220" height="90" />
        <rect x="1140" y="70" width="200" height="100" />
        <rect x="30" y="60" width="140" height="120" />
        {/* Studio marker */}
        <circle cx="800" cy="350" r="8" strokeWidth="1.2" stroke="rgba(120,160,255,0.5)" />
        <circle cx="800" cy="350" r="20" strokeWidth="0.4" stroke="rgba(120,160,255,0.2)" strokeDasharray="4,4" />
        <text className="title" x="820" y="346">STUDIO MATERIA</text>
        {/* Diagonal street */}
        <line x1="0" y1="600" x2="500" y2="200" strokeWidth="0.4" />
        <line x1="900" y1="0" x2="1400" y2="400" strokeWidth="0.4" />
      </svg>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <p
          className="font-mono text-xs tracking-widest mb-4"
          style={{ color: "rgba(120,160,255,0.5)" }}
        >
          07 / 07 — CONTATTI
        </p>

        <a
          href="mailto:studio@materia-architettura.it"
          className="block font-serif italic leading-none transition-opacity duration-200 hover:opacity-60 cursor-pointer"
          style={{
            fontSize: "clamp(1.8rem,4vw,5rem)",
            color: "#E8E8E0",
            textDecoration: "underline",
            textDecorationColor: "rgba(120,160,255,0.3)",
            textUnderlineOffset: "8px",
          }}
        >
          studio@materia&#8209;architettura.it
        </a>

        <div className="mt-16 flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <p
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: "rgba(120,160,255,0.5)" }}
            >
              INDIRIZZO
            </p>
            <p className="font-mono text-sm leading-relaxed" style={{ color: "rgba(232,232,224,0.6)" }}>
              Via Montenapoleone, 12<br />
              20121 Milano, IT
            </p>
          </div>
          <div>
            <p
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: "rgba(120,160,255,0.5)" }}
            >
              TELEFONO
            </p>
            <p className="font-mono text-sm" style={{ color: "rgba(232,232,224,0.6)" }}>
              +39 02 3456 7890
            </p>
          </div>
          <div>
            <p
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: "rgba(120,160,255,0.5)" }}
            >
              ORARI
            </p>
            <p className="font-mono text-sm leading-relaxed" style={{ color: "rgba(232,232,224,0.6)" }}>
              Lun–Ven: 09:00–18:00<br />
              Su appuntamento
            </p>
          </div>
        </div>

        <div
          className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: "1px solid rgba(120,160,255,0.1)" }}
        >
          <p
            className="font-serif tracking-[0.2em]"
            style={{ color: "rgba(232,232,224,0.2)", fontSize: "1.5rem" }}
          >
            MATERIA
          </p>
          <p
            className="font-mono text-xs"
            style={{ color: "rgba(232,232,224,0.2)" }}
          >
            © {new Date().getFullYear()} Materia Studio di Architettura S.r.l.
          </p>
        </div>
      </div>
    </section>
  );
}
