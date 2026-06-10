"use client";

import { useEffect, useState } from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/nianguye",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nilson-nguyen",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:nianguye2002@gmail.com",
    icon: Mail,
  },
];

export default function SidePanel() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = section.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="fade-up text-4xl font-bold tracking-tight sm:text-5xl">
          Nilson Nguyen<span className="text-primary">.</span>
        </h1>
        <h2
          className="fade-up mt-3 text-lg font-medium text-foreground/90"
          style={{ animationDelay: "100ms" }}
        >
          Software Engineer @ Visa
        </h2>
        <p
          className="fade-up mt-4 max-w-xs leading-relaxed text-muted-foreground"
          style={{ animationDelay: "200ms" }}
        >
          I design, build, and ship full-stack web applications, from the
          data model to the deployed product.
        </p>

        <a
          href="/nilson_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
          style={{ animationDelay: "300ms" }}
        >
          <FileText className="h-4 w-4" />
          View Résumé
        </a>

        <nav
          className="fade-up mt-16 hidden lg:block"
          aria-label="Section navigation"
          style={{ animationDelay: "400ms" }}
        >
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex items-center gap-4 py-1.5"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === section.id
                        ? "w-16 bg-primary"
                        : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                      active === section.id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="fade-up mt-10 flex items-center gap-5 lg:mt-0"
        style={{ animationDelay: "500ms" }}
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
