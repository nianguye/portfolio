import Link from "next/link";
import { Button } from "@/components/ui/button"; // adjust import as needed
import { Github, Linkedin } from "lucide-react";  // example icon imports

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-sky-100 backdrop-blur">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="font-bold">
          Portfolio
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/nianguye" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/nilson-nguyen" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}