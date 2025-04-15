import Link from 'next/link';
import { Button } from '@/components/ui/button';
import About from '@/components/about';
import Project from '@/components/project';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <section className="mx-auto py-24 md:py-32 space-y-8 ">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Nilson</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
            A Full Stack Developer passionate about building seamless digital experiences—from concept through to deployment.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <About/>
          <Project/>
          <Contact/>
        </div>
        
      </section>


  );
}