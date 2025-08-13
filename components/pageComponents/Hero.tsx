"use client";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { Libre_Baskerville } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import BlueprintOverlay, { HeroBlueprintOverlay } from "../BlueprintOverlay";
import BlueprintBox from "../BlueprintBox";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const techLogos = [
  "/logos/nextdotjs.svg",
  "/logos/react.svg",
  "/logos/typescript.svg",
  "/logos/python.svg",
  "/logos/django.svg",
  "/logos/postgresql.svg",
  "/logos/docker.svg",
];

export default function Hero() {
  return (
    <HeroBlueprintOverlay>
      <section className="relative overflow-visible">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_16px)] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]" />
        </div>

        <div className="mx-auto max-w-6xl sm:max-w-7xl px-4 sm:px-6 pt-14 sm:pt-16 pb-10 sm:pb-14">
          <div className="relative grid gap-10 md:gap-20 md:grid-cols-2 items-start md:items-center">
            <div
              aria-hidden
              className="pointer-events-none hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            />

            {/* Left: headline, description, ctas with blueprint boxes that hug content */}
            <div className="max-w-3xl md:max-w-2xl space-y-4">
              <BlueprintBox className="p-3 md:p-4">
                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-zinc-100 ${libre.className}`}
                >
                  Ojasvi Doye
                  <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-violet-300/95 via-violet-300/95 to-violet-300/95 bg-clip-text text-transparent">
                    Full Stack developer & open source contributor
                  </span>
                </h1>
              </BlueprintBox>

              <div className="mt-1 h-px w-40 bg-gradient-to-r from-violet-400/40 to-transparent" />

              <BlueprintBox
                className="inline-block p-3 md:p-4"
                showHatch={false}
              >
                <p className="max-w-xl text-zinc-300 text-lg sm:text-xl leading-relaxed m-0">
                  I design, build and ship end‑to‑end web apps with a focus on
                  DX, performance and clarity. Available for select freelance
                  and product work.
                </p>
              </BlueprintBox>

              <div className="flex flex-wrap items-center gap-3 m-0">
                <a href={links.email}>
                  <Button className="h-12 px-6 text-base rounded-full bg-transparent text-zinc-300 border hover:bg-zinc-900  border-white/20 shadow-[0_8px_30px_-10px_rgba(99,102,241,0.45)]">
                    Get in touch
                  </Button>
                </a>
                <a href="#projects">
                  <Button
                    variant="outline"
                    className="h-12 px-6 text-base rounded-full bg-transparent border-zinc-700/70 text-violet-200 hover:bg-zinc-900/60"
                  >
                    View projects
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: wrap the whole aside so the box surrounds the actual UI */}
            <BlueprintBox
              className="inline-block p-2 md:p-3"
              showHatch={false}
              width={500}
            >
              <aside className="flex flex-col items-start md:items-end gap-4">
                {/* Social Links improved container */}
                <div className="mt-4 w-full flex justify-start md:justify-end">
                  <div className="relative inline-flex px-3 py-2 gap-3 rounded-sm bg-zinc-950/40 backdrop-blur-sm border border-dashed border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_20px_-4px_rgba(139,92,246,0.25)]">
                    <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent_85%)]">
                      <div className="absolute inset-x-0 top-0 h-5 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_10px)] opacity-25" />
                      <div className="absolute inset-x-0 bottom-0 h-5 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.16)_0,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_10px)] opacity-20" />
                    </div>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="group"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 bg-zinc-950/70 border-white/25 hover:border-violet-300/60 hover:bg-violet-950/40 transition-colors focus-visible:ring-2 focus-visible:ring-violet-400/50"
                      >
                        <Github className="h-5 w-5 text-zinc-300 group-hover:text-violet-300 transition-colors" />
                      </Button>
                    </a>
                    <a
                      href={links.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X / Twitter"
                      className="group"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 bg-zinc-950/70 border-white/25 hover:border-violet-300/60 hover:bg-violet-950/40 transition-colors focus-visible:ring-2 focus-visible:ring-violet-400/50"
                      >
                        <SiX className="h-5 w-5 text-zinc-300 group-hover:text-violet-300 transition-colors" />
                      </Button>
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 bg-zinc-950/70 border-white/25 hover:border-violet-300/60 hover:bg-violet-950/40 transition-colors focus-visible:ring-2 focus-visible:ring-violet-400/50"
                      >
                        <Linkedin className="h-5 w-5 text-zinc-300 group-hover:text-violet-300 transition-colors" />
                      </Button>
                    </a>
                    <a href={links.email} aria-label="Email" className="group">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 bg-zinc-950/70 border-white/25 hover:border-violet-300/60 hover:bg-violet-950/40 transition-colors focus-visible:ring-2 focus-visible:ring-violet-400/50"
                      >
                        <Mail className="h-5 w-5 text-zinc-300 group-hover:text-violet-300 transition-colors" />
                      </Button>
                    </a>
                    {/* subtle vertical separators */}
                    <div className="pointer-events-none absolute inset-0 flex gap-3 px-3">
                      <div className="flex-1 flex justify-evenly">
                        <span className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        <span className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        <span className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stack enhanced container (keeps overlapping stack) */}
                <div className="mt-4 w-full flex justify-end">
                  <div className="w-full md:w-auto">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 hidden md:block mb-2 text-right">
                      Stack
                    </span>
                    <div className="relative flex items-center justify-end px-4 py-3 rounded-sm bg-zinc-950/35 backdrop-blur-sm border border-dashed border-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_6px_24px_-6px_rgba(139,92,246,0.25)]">
                      {/* Top & bottom hatch bands */}
                      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent_85%)]">
                        <div className="absolute inset-x-1 top-0 h-4 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_8px)] opacity-25" />
                        <div className="absolute inset-x-1 bottom-0 h-4 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.16)_0,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_8px)] opacity-20" />
                      </div>
                      {/* Inner subtle boundary for logos */}
                      <div className="absolute inset-1 rounded-[2px] border border-white/10" />
                      <div className="flex items-center justify-end">
                        {techLogos.slice(0, 8).map((src, i) => (
                          <div
                            key={i}
                            className={`${
                              i > 0 ? "-ml-3 md:-ml-3.5" : ""
                            } relative transition-transform hover:z-10 hover:-translate-y-1`}
                          >
                            <img
                              src={src}
                              alt="tech"
                              className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-white p-2 
             border border-white/40 shadow-sm invert brightness-110 
             contrast-125 ring-1 ring-white hover:ring-violet-300/40 
             transition"
                            />
                            <span className="pointer-events-none absolute -inset-0.5 rounded-full opacity-0 hover:opacity-100 bg-[radial-gradient(circle_at_50%_45%,rgba(167,139,250,0.35),transparent_60%)] mix-blend-screen transition-opacity" />
                            <span className="pointer-events-none absolute -inset-[3px] rounded-full border border-dashed border-white/15 opacity-60 group-hover:opacity-80 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-3 text-base text-zinc-400 md:self-end">
                  <FaLocationDot />
                  <span className="hidden sm:inline font-mono">
                    Mumbai, India
                  </span>
                </div>
              </aside>
            </BlueprintBox>
          </div>
        </div>
      </section>
    </HeroBlueprintOverlay>
  );
}
