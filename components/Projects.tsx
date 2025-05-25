"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { BadgeComponent } from "./Badge";
import Image from "next/image";
import { Eye, ExternalLink, Github } from "lucide-react";
import projects from "@/data/projects.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-zinc-100">Projects.</h2>

      <div className="space-y-4">
        {displayedProjects.map((project, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-[120px] h-[120px] overflow-hidden rounded">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={120}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {project.title}
                    </h3>
                    <BadgeComponent prop={project.status.toLowerCase()} />
                    <div className="flex gap-1 ml-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
                            onClick={() => setPreviewIndex(index)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl w-full p-6">
                          <Carousel>
                            <CarouselContent>
                              {projects[index].screenshots?.map(
                                (img: string, i: number) => (
                                  <CarouselItem key={i}>
                                    <div className="flex items-center justify-center">
                                      <img
                                        src={img}
                                        alt={`Screenshot ${i + 1}`}
                                        className="rounded-lg max-h-[70vh] mx-auto object-contain"
                                      />
                                    </div>
                                  </CarouselItem>
                                )
                              )}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </DialogContent>
                      </Dialog>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
                        asChild
                      >
                        <a href={project.live} target="_blank">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
                        asChild
                      >
                        <a href={project.github} target="_blank">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length > 2 && (
        <div className="text-center mt-4">
          <Button
            variant="ghost"
            className="text-zinc-400 hover:bg-transparent hover:text-zinc-200 text-xs"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "⌃ Show less" : "⌄ Show all"}
          </Button>
        </div>
      )}
    </div>
  );
}
export default Projects;