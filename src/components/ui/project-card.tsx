"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  index: number;
  title: string;
  badge?: string;
  description: string;
  longDescription: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export function ProjectCard({
  index,
  title,
  badge,
  description,
  longDescription,
  tags,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="transition-opacity duration-300 lg:group-hover/list:[&:not(:hover)]:opacity-50">
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
        className="group grid cursor-pointer gap-2 rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none sm:grid-cols-10 sm:gap-5 sm:p-6"
      >
        <span className="font-mono text-sm text-muted-foreground/70 sm:col-span-1 sm:pt-0.5">
          {String(index).padStart(2, "0")}
        </span>
        <div className="sm:col-span-9">
          <h3 className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-semibold transition-colors duration-300 group-hover:text-primary">
            {title}
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            {badge && (
              <span className="ml-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {badge}
              </span>
            )}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
          {(demoUrl !== "" || codeUrl !== "") && (
            <div className="mt-4 flex items-center gap-5">
              {demoUrl !== "" && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              {codeUrl !== "" && (
                <Link
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Project Details</h3>
              <p className="leading-relaxed text-muted-foreground">
                {longDescription}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {(demoUrl !== "" || codeUrl !== "") && (
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                {demoUrl !== "" && (
                  <Button asChild className="flex-1">
                    <Link
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </Link>
                  </Button>
                )}
                {codeUrl !== "" && (
                  <Button variant="outline" asChild className="flex-1">
                    <Link
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
}
