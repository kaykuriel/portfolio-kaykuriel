import AnimateIn from "@/components/AnimateIn";

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const contacts = [
  {
    label: "urielkaykcontato@gmail.com",
    href: "mailto:urielkaykcontato@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "(11) 94990-3367",
    href: "https://wa.me/5511949903367",
    icon: <PhoneIcon />,
  },
  {
    label: "in/kayk-uriel",
    href: "https://linkedin.com/in/kayk-uriel-a56450354",
    icon: <LinkedInIcon />,
  },
  {
    label: "@kaykuriel",
    href: "https://github.com/kaykuriel",
    icon: <GithubIcon />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.06] pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">

        <AnimateIn>
          <div className="mb-14">
            <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#444] mb-3 font-mono">
              contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text mb-3">
              Let&apos;s talk.
            </h2>
            <p className="text-[#444] text-sm max-w-sm leading-relaxed">
              Open for freelance projects, full-stack opportunities, and security consulting.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {contacts.map((c, i) => (
            <AnimateIn key={c.label} delay={i * 60}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/[0.07] hover:border-white/[0.15] bg-[#070707] hover:bg-[#0a0a0a] transition-all duration-300"
              >
                <span className="text-[#444] group-hover:text-white transition-colors duration-200 shrink-0">
                  {c.icon}
                </span>
                <span className="text-xs text-[#555] group-hover:text-[#ccc] transition-colors duration-200 truncate font-mono">
                  {c.label}
                </span>
              </a>
            </AnimateIn>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.04]">
          <span className="text-[11px] text-[#2a2a2a] font-mono">
            © {new Date().getFullYear()} Kayk Uriel
          </span>
          <span className="text-[11px] text-[#2a2a2a] font-mono">
            Full Stack Developer · Ethical Hacker · Red Team
          </span>
        </div>
      </div>
    </footer>
  );
}
