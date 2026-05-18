const team = [
  {
    name: "Elena Marchetti",
    role: "Founding Partner",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Marco Ferretti",
    role: "Lead Architect",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Sofia Ricci",
    role: "Interior & Materials",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-32 px-8 md:px-16"
      style={{ background: "#060608" }}
    >
      <div className="max-w-screen-xl mx-auto">
        <p
          className="font-mono text-xs tracking-widest mb-4"
          style={{ color: "rgba(120,160,255,0.5)" }}
        >
          06 / 07 — IL TEAM
        </p>
        <h2
          className="font-serif mb-20"
          style={{
            fontSize: "clamp(2rem,5vw,5rem)",
            color: "#E8E8E0",
          }}
        >
          Le persone dietro l&apos;opera.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 justify-items-center">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div
                className="polaroid w-56 mb-6"
                style={{
                  display: "inline-block",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  width={220}
                  height={260}
                  className="object-cover block w-full"
                  style={{ height: "260px" }}
                />
              </div>
              <p
                className="font-serif text-xl"
                style={{ color: "#E8E8E0" }}
              >
                {member.name}
              </p>
              <p
                className="font-mono text-xs tracking-widest mt-1"
                style={{ color: "rgba(120,160,255,0.6)" }}
              >
                {member.role.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
