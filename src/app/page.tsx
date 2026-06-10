"use client";

import { useRef } from "react";
import SidePanel from "@/components/side-panel";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseMove={(e) => {
        spotlightRef.current?.style.setProperty(
          "background",
          `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, oklch(0.78 0.13 230 / 0.05), transparent 80%)`
        );
      }}
    >
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
      />
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <SidePanel />
          <main className="pb-16 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Project />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
