"use client";

import { useInView } from "react-intersection-observer";

const experiences = [
  {
    period: "Feb 2025 - Present",
    role: "Software Engineer",
    company: "Visa",
    summary: "Software Engineer on the VRM team.",
    tags: [],
  },
  {
    period: "Apr 2025 - Feb 2026",
    role: "Freelance Developer",
    company: "Self-employed",
    summary:
      "Build and ship websites for small businesses. Most recently pinkynailspa.com, a responsive Next.js marketing site with an AWS SES contact flow that lifted customer inquiries by 20%.",
    tags: ["Next.js", "Tailwind CSS", "AWS SES"],
  },
  {
    period: "Feb 2025 - Feb 2026",
    role: "Freelance Roblox Developer",
    company: "Self-employed",
    summary:
      "Engineer server-side game systems in Lua for experiences supporting 2,000+ concurrent players, with a modular service architecture, secure client-server communication, and synchronized cross-server features like a global shop.",
    tags: ["Lua", "Roblox"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className={`scroll-mt-16 py-12 lg:py-0 lg:pb-24 ${
        inView ? "fade-up" : "opacity-0"
      }`}
    >
      <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-background/80 px-6 py-4 text-xs font-semibold uppercase tracking-widest backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        Experience
      </h2>

      <ol className="space-y-3">
        {experiences.map((job) => (
          <li
            key={`${job.role}-${job.company}`}
            className="rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card/70 sm:grid sm:grid-cols-10 sm:gap-5 sm:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80 sm:col-span-3 sm:pt-1">
              {job.period}
            </span>
            <div className="mt-2 sm:col-span-7 sm:mt-0">
              <h3 className="font-semibold">
                {job.role} · <span className="text-primary">{job.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {job.summary}
              </p>
              {job.tags.length > 0 && (
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
