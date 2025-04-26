"use client";

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={`max-w-4xl mx-auto py-24 md:py-32 space-y-8 w-full ${inView ? "fade-up" : ""}`}
    >
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground">
            I&apos;m always open to new opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col items-center justify-center p-8 border rounded-lg shadow-sm bg-white mt-8">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Email Me</h3>
            <a
              href="mailto:nianguye2002@gmail.com"
              className="text-primary hover:underline text-lg font-medium"
            >
              nianguye2002@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <a
              href="https://linkedin.com/in/nilson-nguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/nianguye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
