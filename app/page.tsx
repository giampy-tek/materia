import BlueprintHero from "@/app/components/BlueprintHero";
import BlueprintFilosofia from "@/app/components/BlueprintFilosofia";
import ProjectSection from "@/app/components/ProjectSection";
import BlueprintCasaLago from "@/app/components/blueprints/BlueprintCasaLago";
import BlueprintPiazzaMercato from "@/app/components/blueprints/BlueprintPiazzaMercato";
import BlueprintStudioMedico from "@/app/components/blueprints/BlueprintStudioMedico";
import BlueprintVillaPrivata from "@/app/components/blueprints/BlueprintVillaPrivata";
import TeamSection from "@/app/components/TeamSection";
import ContactSection from "@/app/components/ContactSection";

const projects = [
  {
    name: "Casa sul Lago",
    type: "Residenziale",
    city: "Varese",
    year: 2023,
    sqm: 380,
    photo:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&auto=format&fit=crop",
    Blueprint: BlueprintCasaLago,
  },
  {
    name: "Piazza Mercato",
    type: "Pubblico",
    city: "Milano",
    year: 2022,
    sqm: 1200,
    photo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop",
    Blueprint: BlueprintPiazzaMercato,
  },
  {
    name: "Studio Medico",
    type: "Healthcare",
    city: "Torino",
    year: 2024,
    sqm: 220,
    photo:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&auto=format&fit=crop",
    Blueprint: BlueprintStudioMedico,
  },
  {
    name: "Villa Privata",
    type: "Residenziale",
    city: "Como",
    year: 2023,
    sqm: 650,
    photo:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&auto=format&fit=crop",
    Blueprint: BlueprintVillaPrivata,
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FilosofiaSection />
      {projects.map((project, i) => (
        <ProjectSection
          key={project.name}
          index={i}
          name={project.name}
          type={project.type}
          city={project.city}
          year={project.year}
          sqm={project.sqm}
          photo={project.photo}
          Blueprint={project.Blueprint}
        />
      ))}
      <TeamSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#060608" }}
    >
      <BlueprintHero />

      <div className="relative z-10 text-center px-4">
        <h1
          className="font-serif font-black tracking-[0.3em] uppercase leading-none select-none"
          style={{
            fontSize: "clamp(3.5rem,12vw,14rem)",
            color: "#E8E8E0",
            textShadow: "0 0 80px rgba(120,160,255,0.08)",
          }}
        >
          MATERIA
        </h1>
        <p
          className="font-sans font-light tracking-[0.25em] uppercase mt-6"
          style={{
            fontSize: "clamp(0.65rem,1.2vw,1rem)",
            color: "rgba(232,232,224,0.45)",
          }}
        >
          Architettura che resiste al tempo.
        </p>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(120,160,255,0.35)" }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scorri</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="0.8" />
          <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

function FilosofiaSection() {
  return (
    <section
      className="min-h-[60vh] flex items-center"
      style={{ background: "#060608" }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="font-serif italic leading-tight"
            style={{
              fontSize: "clamp(1.8rem,4vw,5rem)",
              color: "#E8E8E0",
            }}
          >
            &ldquo;Costruiamo per chi verrà dopo di noi.&rdquo;
          </p>
          <div
            className="mt-8 h-px w-24"
            style={{ background: "rgba(120,160,255,0.3)" }}
          />
          <p
            className="font-mono text-xs tracking-widest mt-4"
            style={{ color: "rgba(120,160,255,0.5)" }}
          >
            MATERIA — STUDIO DI ARCHITETTURA
          </p>
        </div>

        <div className="hidden md:block relative" style={{ height: "340px" }}>
          <BlueprintFilosofia />
        </div>
      </div>
    </section>
  );
}
