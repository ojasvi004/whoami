"use client";

import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { Libre_Baskerville } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";

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
    <section className="relative overflow-visible">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_16px)] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl sm:max-w-7xl px-4 sm:px-6 pt-14 sm:pt-16 pb-10 sm:pb-14">
        <div className="relative grid gap-10 md:gap-20 md:grid-cols-2 items-start md:items-center">
          <div aria-hidden className="pointer-events-none hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="max-w-3xl md:max-w-2xl">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-zinc-100 ${libre.className}`}
            >
              Ojasvi Doye
              <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-violet-300/95 via-violet-300/95 to-violet-300/95 bg-clip-text text-transparent">
                Full Stack developer & open source contributor
              </span>
            </h1>

            <div className="mt-3 h-px w-48 bg-gradient-to-r from-violet-400/40 to-transparent" />

            <p className="mt-4 max-w-xl text-zinc-300 text-lg sm:text-xl leading-relaxed">
              I design, build and ship end‑to‑end web apps with a focus on DX,
              performance and clarity. Available for select freelance and
              product work.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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

          <aside className="md:pl-6 md:justify-self-end flex flex-col items-start md:items-end gap-4">
            <div className="mt-4 flex items-center gap-2">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 bg-zinc-950 border-zinc-700 hover:bg-zinc-900"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={links.x} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 bg-zinc-950 border-zinc-700 hover:bg-zinc-900"
                >
                  <SiX className="h-5 w-5" />
                </Button>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 bg-zinc-950 border-zinc-700 hover:bg-zinc-900"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href={links.email}>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 bg-zinc-950 border-zinc-700 hover:bg-zinc-900"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="mt-4 w-full">
              <span className="text-xs uppercase tracking-wider text-zinc-500 hidden md:block mb-2 md:text-right">
                Stack
              </span>
              <div className="flex items-center md:justify-end">
                {techLogos.slice(0, 8).map((src, i) => (
                    <div key={i} className={`${i > 0 ? "-ml-3 md:-ml-3.5" : ""} relative`}>
                    <img
                      src={src}
                      alt="tech"
                      className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-white p-2 border border-white/20 shadow-sm invert brightness-110 contrast-125"
                    />
                    </div>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3 text-base text-zinc-400 md:self-end">
              <FaLocationDot />
              <span className="hidden sm:inline font-mono">Mumbai, India</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
