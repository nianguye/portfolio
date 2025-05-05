"use client";

import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export function ProjectCard({
  title,
  description,
  longDescription,
  tags,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Card
      onClick={() => setIsOpen(true)}
      className="flex flex-col h-full transition-all hover:shadow-md hover:scale-105"
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogClose asChild></DialogClose>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Project Details</h3>
              <p className="text-muted-foreground">{longDescription}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {(demoUrl !== "" || codeUrl !== "") && (
              <div className="grid grid-cols-2 sm:flex-row gap-4 pt-4">
                {(
                  <Button asChild className="flex-1">
                    <Link
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Link>
                  </Button>
                )}
                { (
                  <Button variant="outline" asChild className="flex-1">
                    <Link
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
