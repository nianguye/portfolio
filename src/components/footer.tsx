import Link from "next/link";
import { Button } from "@/components/ui/button"; 
import { Github, Linkedin } from "lucide-react";  


export default function Footer() {
  return (
    <header className="sticky top-0 z-1 border-t  shadow-none ">
      <div className="relative flex h-16 items-center justify-end mx-auto px-8">
        
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
    </header>
  );
}