import AnimateIn from "@/components/AnimateIn";

type Tech = {
  name: string;
  abbr: string;
  color: string;
};

const row1: Tech[] = [
  { name: "JavaScript", abbr: "JS",  color: "#F7DF1E" },
  { name: "TypeScript", abbr: "TS",  color: "#3178C6" },
  { name: "React",      abbr: "Re",  color: "#61DAFB" },
  { name: "Next.js",    abbr: "N↗",  color: "#ffffff" },
  { name: "Vite",       abbr: "⚡",   color: "#646CFF" },
  { name: "NestJS",     abbr: "N",   color: "#E0234E" },
  { name: "Git",        abbr: "git", color: "#F05032" },
];

const row2: Tech[] = [
  { name: "MySQL",      abbr: "MY",  color: "#4479A1" },
  { name: "PostgreSQL", abbr: "PG",  color: "#336791" },
  { name: "MongoDB",    abbr: "MG",  color: "#47A248" },
  { name: "Supabase",   abbr: "SB",  color: "#3ECF8E" },
  { name: "Docker",     abbr: "🐳",   color: "#2496ED" },
  { name: "Vercel",     abbr: "▲",   color: "#ffffff" },
  { name: "SQL",        abbr: "{}",  color: "#888888" },
];

function TechChip({ tech }: { tech: Tech }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/[0.07] bg-[#080808] shrink-0 group hover:border-white/[0.14] transition-all duration-300">
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold leading-none shrink-0 tracking-tighter"
        style={{
          background: tech.color + "22",
          color: tech.color,
          border: `1px solid ${tech.color}33`,
        }}
      >
        {tech.abbr}
      </span>
      <span className="text-xs font-medium text-[#555] group-hover:text-[#888] transition-colors duration-200 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ willChange: "transform" }}
      >
        {list.map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="max-w-5xl mx-auto px-6 mb-12">
        <AnimateIn>
          <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#444] mb-3 font-mono">
            stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
            Technologies
          </h2>
        </AnimateIn>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
