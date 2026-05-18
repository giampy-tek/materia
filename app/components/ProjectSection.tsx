"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectSectionProps {
  index: number;
  name: string;
  type: string;
  city: string;
  year: number;
  sqm: number;
  photo: string;
  Blueprint: React.ComponentType;
}

function useReducedMotionFlag(): boolean {
  const query =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
  return query?.matches ?? false;
}

export default function ProjectSection({
  index,
  name,
  type,
  city,
  year,
  sqm,
  photo,
  Blueprint,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotionFlag();

  useEffect(() => {
    if (reducedMotion) {
      if (photoRef.current) photoRef.current.style.opacity = "1";
      if (infoRef.current) infoRef.current.style.opacity = "1";
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const photoOpacity = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
      const infoOpacity = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
      if (photoRef.current) photoRef.current.style.opacity = String(photoOpacity);
      if (infoRef.current) infoRef.current.style.opacity = String(infoOpacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const padded = String(index + 1).padStart(2, "0");

  const InfoContent = () => (
    <>
      <p className="font-mono text-xs mb-4 tracking-widest" style={{ color: "#7890FF" }}>
        {String(index + 1).padStart(2, "0")} / 04
      </p>
      <h2
        className="font-serif mb-3 leading-none"
        style={{ fontSize: "clamp(2rem,5vw,6rem)", color: "#E8E8E0" }}
      >
        {name}
      </h2>
      <p
        className="font-mono text-xs tracking-widest mb-4"
        style={{ color: "rgba(232,232,224,0.5)" }}
      >
        {type.toUpperCase()} &nbsp;/&nbsp; {city.toUpperCase()} &nbsp;/&nbsp; {year}
      </p>
      <p
        className="font-serif mb-8"
        style={{ fontSize: "clamp(1.1rem,2vw,2.5rem)", color: "#7890FF" }}
      >
        {sqm} m²
      </p>
      <button
        className="font-mono text-xs tracking-widest px-6 py-3 border cursor-pointer transition-all duration-200 hover:bg-white hover:text-black"
        style={{ borderColor: "rgba(232,232,224,0.3)", color: "#E8E8E0" }}
      >
        VEDI PROGETTO →
      </button>
    </>
  );

  return (
    <>
      {/* ── MOBILE layout: foto + testo sotto, niente sticky ── */}
      <section
        className="block md:hidden"
        style={{ background: "#060608" }}
        aria-label={name}
      >
        <div className="relative w-full" style={{ height: "65vw", minHeight: "260px" }}>
          <Image
            src={photo}
            alt={`${name} — ${type}, ${city}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6,6,8,0) 60%, rgba(6,6,8,1) 100%)",
            }}
          />
        </div>
        <div className="px-8 py-10">
          <InfoContent />
        </div>
        {/* separator */}
        <div
          className="mx-8 mb-0"
          style={{ height: "1px", background: "rgba(120,160,255,0.1)" }}
        />
      </section>

      {/* ── DESKTOP layout: 250vh sticky scroll reveal ── */}
      <section
        ref={sectionRef}
        className="hidden md:block"
        style={{ height: "250vh" }}
        aria-label={name}
      >
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ background: "#060608" }}
        >
          {/* Blueprint layer */}
          <div className="blueprint-layer">
            <Blueprint />
          </div>

          {/* Photo layer */}
          <div ref={photoRef} className="photo-layer">
            <Image
              src={photo}
              alt={`${name} — ${type}, ${city}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,6,8,0.85) 0%, rgba(6,6,8,0.2) 50%, rgba(6,6,8,0.1) 100%)",
              }}
            />
          </div>

          {/* Info layer */}
          <div
            ref={infoRef}
            className="info-layer flex flex-col justify-end pb-16 px-16"
          >
            <div className="max-w-screen-lg">
              <InfoContent />
            </div>
          </div>

          {/* Project number watermark */}
          <div
            className="absolute top-8 right-8 font-mono"
            style={{ color: "rgba(120,160,255,0.3)", fontSize: "7vw", lineHeight: 1 }}
            aria-hidden="true"
          >
            {padded}
          </div>
        </div>
      </section>
    </>
  );
}
