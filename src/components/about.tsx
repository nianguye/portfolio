"use client";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiCplusplus, SiLua } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#659AD2" },
  { name: "Lua", icon: SiLua, color: "#8B93E8" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Svelte", icon: RiSvelteFill, color: "#FF3E00" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#cbd5e1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#5e98c9" },
  { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
];

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-16 py-12 lg:py-0 lg:pb-24 ${
        inView ? "fade-up" : "opacity-0"
      }`}
    >
      <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-background/80 px-6 py-4 text-xs font-semibold uppercase tracking-widest backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        About
      </h2>

      <div className="space-y-5 leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a{" "}
          <span className="font-medium text-foreground">
            Software Engineer at Visa
          </span>{" "}
          on the VRM team, with a B.S. in Computer Science from{" "}
          <span className="font-medium text-foreground">UC Davis</span>. I build
          software across the stack, from{" "}
          <span className="font-medium text-foreground">
            scalable applications
          </span>{" "}
          to systems that support real-world users at scale.
        </p>

        <p>
          I care about the unglamorous parts of shipping software:{" "}
          <span className="font-medium text-foreground">
            responsive, accessible interfaces
          </span>{" "}
          on the front end, and{" "}
          <span className="font-medium text-foreground">
            reliable, efficient systems
          </span>{" "}
          behind them. I&apos;m constantly exploring new technologies to keep both
          ends sharp.
        </p>

        <p>
          In my free time, I enjoy hitting the gym for a good workout, embarking on
          spontaneous hiking trips to explore nature, and collecting{" "}
          <span className="font-medium text-foreground">Pokémon cards</span>.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <tech.icon className="h-4 w-4" style={{ color: tech.color }} />
            <span className="text-xs font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
