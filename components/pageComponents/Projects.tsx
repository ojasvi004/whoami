"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { BadgeComponent } from "../Badge";
import Image from "next/image";
import { Eye, Github, ArrowUpRight, Play } from "lucide-react";
import projects from "@/data/projects.json";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TechBadge } from "../tech-badge";
import { ArcadeEmbed } from "../DiscountlyEmbed";
import { ProjectsBlueprintOverlay, CardBlueprintOverlay } from "../BlueprintOverlay";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <ProjectsBlueprintOverlay>
      <section className="space-y-8 mb-8" id="projects">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-zinc-100">Projects</h2>
          <div className="h-px bg-gradient-to-r from-zinc-700 via-zinc-800 to-transparent flex-1" />
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {displayedProjects.map((project, index) => (
            <CardBlueprintOverlay key={index}>
              <Card
                className="group bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-500 hover:bg-zinc-900/60 overflow-hidden backdrop-blur-sm"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />

                <div
                  className={
                    "absolute top-4 right-4 flex gap-2 transition-all duration-300"
                  }
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        className="h-9 w-9 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/50 backdrop-blur-sm shadow-lg"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full p-8 bg-zinc-900/95 border-zinc-800 backdrop-blur-md">
                      <Carousel>
                        <CarouselContent>
                          {projects[index].screenshots?.map(
                            (img: string, i: number) => (
                              <CarouselItem key={i}>
                                <div className="flex items-center justify-center w-full">
                                  {project.title === "Discountly" && i === 0 ? (
                                    <div className="w-full">
                                      <ArcadeEmbed />
                                    </div>
                                  ) : (
                                    <img
                                      src={img || "/placeholder.svg"}
                                      alt={`Screenshot ${i + 1}`}
                                      className="rounded-xl max-h-[75vh] mx-auto object-contain shadow-2xl"
                                    />
                                  )}
                                </div>
                              </CarouselItem>
                            )
                          )}
                        </CarouselContent>
                        <CarouselPrevious className="bg-zinc-800/90 border-zinc-700 hover:bg-zinc-700/90 backdrop-blur-sm" />
                        <CarouselNext className="bg-zinc-800/90 border-zinc-700 hover:bg-zinc-700/90 backdrop-blur-sm" />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex} tech={tech} />
                    ))}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Dialog>
                    <DialogContent className="max-w-5xl w-full p-8 bg-zinc-900/95 border-zinc-800 backdrop-blur-md">
                      <Carousel>
                        <CarouselContent>
                          {projects[index].screenshots?.map(
                            (img: string, i: number) => (
                              <CarouselItem key={i}>
                                <div className="flex items-center justify-center">
                                  <img
                                    src={img || "/placeholder.svg"}
                                    alt={`Screenshot ${i + 1}`}
                                    className="rounded-xl max-h-[75vh] mx-auto object-contain shadow-2xl"
                                  />
                                </div>
                              </CarouselItem>
                            )
                          )}
                        </CarouselContent>
                        <CarouselPrevious className="bg-zinc-800/90 border-zinc-700 hover:bg-zinc-700/90 backdrop-blur-sm" />
                        <CarouselNext className="bg-zinc-800/90 border-zinc-700 hover:bg-zinc-700/90 backdrop-blur-sm" />
                      </Carousel>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-700/50 hover:border-zinc-600/50 text-zinc-300 hover:text-zinc-100 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-md font-medium">Live Demo</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-700/50 hover:border-zinc-600/50 text-zinc-300 hover:text-zinc-100 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">Source</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
            </CardBlueprintOverlay>
        ))}
      </div>

      {projects.length > 2 && (
        <div className="flex justify-center pt-6">
          <Button
            variant="outline"
            className="text-zinc-300 hover:text-zinc-100 bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50 px-7 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
            onClick={() => setShowAll(!showAll)}
          >
            <span className="text-sm font-medium">
              {showAll ? "Show less" : `Show all projects`}
            </span>
            <span className="ml-3 text-xs transition-transform duration-300">
              {showAll ? "↑" : "↓"}
            </span>
          </Button>
        </div>
      )}
    </section>
    </ProjectsBlueprintOverlay>
  );
}

export default Projects;
