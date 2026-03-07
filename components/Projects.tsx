import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

// ─────────────────────────────────────────────────────────────────────────────
//  To add a custom screenshot for a project:
//    1. Drop the image in: public/projects/<filename>.png
//    2. Set  image: "/projects/<filename>.png"  on the entry below
//
//  GitHub preview images are used by default (always available, no config needed).
// ─────────────────────────────────────────────────────────────────────────────

type Project = {
  title: string;
  description: string;
  tags: string[];
  lang: string;
  github: string;
  live?: string;
  image?: string;
  ghRepo: string;
};

const projects: Project[] = [
  {
    title: "BONTEN Enterprises",
    description: "my tech company's website",
    tags: ["tailwindcss", "TypeScript", "Next.js", "Vercel"],
    lang: "TypeScript",
    github: "https://github.com/kaykuriel/bonten",
    live: "https://bonten-silk.vercel.app/",
    ghRepo: "Bonten",
    image: "/projects/Bonten.png",
  },
  {
    title: "Prainha Jurere",
    description: "Institutional landing page for Prainha Jurere with a modern responsive layout.",
    tags: ["CSS", "HTML"],
    lang: "CSS",
    github: "https://github.com/kaykuriel/PrainhaJurere",
    live: "https://prainhajurere.com.br/",
    ghRepo: "PrainhaJurere",
    image: "/projects/jurere.png",
  },
  {
    title: "Salary Manager",
    description: "Salary management app with a modern interface and data persistence.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    lang: "TypeScript",
    github: "https://github.com/kaykuriel/Salary-Manger",
    live: "https://salary-manger-szxj.vercel.app",
    ghRepo: "Salary-Manger",
    image: "/projects/salary.png",
  },
  {
    title: "To-Do List",
    description: "Task management app with a clean interface, filters, and browser persistence.",
    tags: ["TypeScript", "React", "Vercel"],
    lang: "TypeScript",
    github: "https://github.com/kaykuriel/to-do-list",
    live: "https://to-do-list-ten-zeta-96.vercel.app",
    ghRepo: "to-do-list",
    image: "/projects/todolist.png",
  },
  {
    title: "Twitter Clone",
    description: "Functional Twitter clone with a post feed, likes, and responsive layout.",
    tags: ["JavaScript", "HTML", "CSS"],
    lang: "JavaScript",
    github: "https://kaykuriel.github.io/twitter_clone/",
    live: "https://kaykuriel.github.io/twitter_clone",
    ghRepo: "twitter_clone",
    image: "/projects/twitter.png",
  },
   {
    title: "Login UI",
    description: "Login screen with responsive design, form validation, and entrance micro-animations.",
    tags: ["CSS", "HTML", "JavaScript"],
    lang: "CSS",
    github: "https://github.com/kaykuriel/login",
    live: "https://kaykuriel.github.io/login/",
    ghRepo: "login",
    image: "/projects/login.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

const langDot: Record<string, string> = {
  TypeScript: "bg-green-600",
  JavaScript: "bg-green-600",
  CSS: "bg-green-600",
  HTML: "bg-green-600",
};

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imgSrc =
    project.image ||
    `https://opengraph.githubassets.com/1/kaykuriel/${project.ghRepo}`;

  return (
    <AnimateIn delay={index * 55} from="bottom">
      <article className="project-card group flex flex-col rounded-xl border border-white/[0.07] hover:border-white/[0.14] bg-[#070707] hover:bg-[#0a0a0a] transition-all duration-300 overflow-hidden h-full">

        {/* Preview image */}
        <a
          href={project.live ?? project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-40 overflow-hidden bg-[#0d0d0d] shrink-0 block"
        >
          <Image
            src={imgSrc}
            alt={`${project.title} preview`}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Bottom gradient so the card border reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60" />
        </a>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${langDot[project.lang] ?? "bg-zinc-500"}`} />
              <h3 className="text-sm font-semibold text-white/90 leading-snug">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 ml-2 -mt-0.5">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors" title="Open site">
                  <ExternalIcon />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors" title="View on GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>

          <p className="text-[#4a4a4a] text-xs leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <AnimateIn>
          <div className="mb-14">
            <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#444] mb-3 font-mono">
              github.com/kaykuriel
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text mb-3">
              Projects
            </h2>
            <p className="text-[#444] text-sm max-w-sm leading-relaxed">
              Open source. All repositories are available on GitHub.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <AnimateIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/kaykuriel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#444] hover:text-white transition-colors duration-200 group"
            >
              <GithubIcon />
              View all repositories
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
