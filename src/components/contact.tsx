"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-mt-16 py-12 lg:py-0 ${
        inView ? "fade-up" : "opacity-0"
      }`}
    >
      <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-background/80 px-6 py-4 text-xs font-semibold uppercase tracking-widest backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        Contact
      </h2>

      <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
        Get in{" "}
        <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
          touch
        </span>
        .
      </h3>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        Have a question or just want to say hi? The fastest way to reach me
        is by email.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button size="lg" asChild>
          <a href="mailto:nianguye2002@gmail.com">
            <Mail className="h-4 w-4" />
            nianguye2002@gmail.com
          </a>
        </Button>
        <div className="flex gap-3">
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://linkedin.com/in/nilson-nguyen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com/nianguye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      <p className="mt-20 text-xs text-muted-foreground/70">
        © {new Date().getFullYear()}{" "}Nilson Nguyen. Designed and built with
        Next.js &amp; Tailwind CSS.
      </p>
    </section>
  );
}
