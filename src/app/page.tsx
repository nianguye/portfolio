import Link from "next/link";
import { Button } from "@/components/ui/button";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <section className="mx-auto  fade-up">
      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
        <section className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Nilson</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              A Full Stack Developer passionate about building seamless digital
              experiences—from concept through to deployment.
            </p>
          </div>
        </section>
      </div>

      <div className="py-24">
        <About />
        <Project />
        <Contact />
      </div>
    </section>
  );
}

