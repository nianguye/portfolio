"use client";

import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";
import {useInView} from "react-intersection-observer"

export default function Home() {
  const [ref, inView] = useInView()

  return (
    <section className="mx-auto">
      <div ref={ref}  className={`flex flex-col items-center justify-center min-h-[90vh] text-center space-y-4 ${inView ? "fade-up" : null}`}>
        <section className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Nilson</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              A Software Developer passionate about building seamless digital
              experiences—from concept through to deployment.
            </p>
          </div>
        </section>
      </div>

      <div className="py-20">
        <About />
        <Project />
        <Contact />
      </div>
    </section>
  );
}

