"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

import { BadgeComponent } from "@/components/Badge";
import Image from "next/image";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/achievements";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/animated-wrapper";
import { links } from "@/lib/links";
import Tooltip from "@/components/Tooltip";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono relative overflow-hidden">
      {/* Header */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
 */}
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-xs text-zinc-400 relative z-10"></header>

      <div className="max-w-3xl mx-auto px-3 sm:px-4 pb-8">
        {/* Profile Section */}
        <AnimatedWrapper delay={0.1}>
          <div className="mb-12 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 shadow-2xl">
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-[80px] h-[80px] flex-shrink-0 overflow-hidden rounded-xl ring-2 ring-zinc-700/50 ring-offset-2 ring-offset-zinc-950">
                  <Image
                    src="/lain2.gif"
                    alt="Ojasvi Doye"
                    fill
                    className="object-cover scale-[2] transition-transform duration-300 hover:scale-[2.1]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-xl font-bold text-zinc-100 bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text">
                      Ojasvi Doye
                    </h1>
                    <BadgeComponent prop="Available" />
                  </div>
                  <p className="text-sm text-zinc-400 font-medium mb-3">
                    Student & Full-Stack Developer
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start">
                <Tooltip content="GitHub">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </a>
                </Tooltip>

                <Tooltip content="X">
                  <a href={links.x} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                    >
                      <SiX className="h-3 w-3" />
                    </Button>
                  </a>
                </Tooltip>

                <Tooltip content="LinkedIn">
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                    >
                      <Linkedin className="h-3 w-3" />
                    </Button>
                  </a>
                </Tooltip>

                <Tooltip content="Email">
                  <a href={links.email}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                    >
                      <Mail className="h-3 w-3" />
                    </Button>
                  </a>
                </Tooltip>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex gap-6">
              <div className="relative w-[140px] h-[140px] flex-shrink-0 overflow-hidden rounded-xl ring-2 ring-zinc-700/50 ring-offset-2 ring-offset-zinc-950">
                <Image
                  src="/lain2.gif"
                  alt="Ojasvi Doye"
                  fill
                  className="object-cover scale-[2] transition-transform duration-300 hover:scale-[2.1]"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold text-zinc-100 bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text">
                    Ojasvi Doye
                  </h1>
                  <BadgeComponent prop="Available" />
                </div>
                <p className="text-zinc-400 text-lg mb-4 font-medium">
                  Student & Full-Stack Developer
                </p>
                <div className="flex gap-2">
                  <Tooltip content="GitHub">
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    </a>
                  </Tooltip>

                  <Tooltip content="X">
                    <a href={links.x} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                      >
                        <SiX className="h-3 w-3" />
                      </Button>
                    </a>
                  </Tooltip>

                  <Tooltip content="LinkedIn">
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    </a>
                  </Tooltip>

                  <Tooltip content="Email">
                    <a href={links.email}>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-900 hover:text-100"
                      >
                        <Mail className="h-3 w-3" />
                      </Button>
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* About Me Section */}
        <AnimatedWrapper delay={0.2}>
          <section className="mb-8 ">
            <div className="flex items-center gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
                About Me
              </h2>
              <div className="h-px bg-gradient-to-r from-zinc-700 via-zinc-800 to-transparent flex-1" />
            </div>
            <div className="space-y-2 text-zinc-200 text-md sm:text-md leading-relaxed ">
              <p>
                Hey! I&apos;m Ojasvi Doye, third year computer science student
                and full-stack developer who loves turning ideas into real,
                working products.
              </p>
              <p>
                I&apos;m flexible working with any tech stack, though I prefer
                modern tools. I&apos;m currently working with Next.js, Django,
                Express, and TypeScript.
              </p>
              <p>
                I love contributing to open-source projects and have actively
                participated in multiple hackathons, where I collaborate, build,
                and solve real-world problems.
              </p>
            </div>
          </section>
        </AnimatedWrapper>

        {/* Hire Me Section */}
        <AnimatedWrapper delay={0.3}>
          <section className="mb-10 p-3 rounded-xl bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-700/40">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for Hire
            </h2>
            <p className="text-zinc-200 text-sm sm:text-base mb-6 leading-relaxed">
              I&apos;m currently available for internships, full-time
              opportunities, and freelance projects. If you&apos;re looking for
              someone passionate, skilled, and ready to contribute, I&apos;m
              here to help bring your ideas to life!
            </p>
            <a
              href="mailto:ojasvidoye@gmail.com?subject=Interested%20in%20hiring%20you"
              className="inline-block"
            >
              <Button className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-100 text-md h-8 px-3">
                <Mail className="h-3 w-3 mr-2" />
                Hire Me
              </Button>
            </a>
          </section>
        </AnimatedWrapper>

        {/* Skills & Tools Section */}
        <AnimatedWrapper delay={0.4}>
          <section className="mb-8">
            <Skills />
          </section>
        </AnimatedWrapper>

        {/* Projects Section */}
        <AnimatedWrapper delay={0.5}>
          <section className="mb-8">
            <Projects />
          </section>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.6}>
          <Achievements />
        </AnimatedWrapper>

        {/* Reach out to me Section */}
        <AnimatedWrapper delay={0.7}>
          <section className="mb-8">
            <h2 className="text-base sm:text-lg font-bold mb-3 text-zinc-100">
              Reach out to me.
            </h2>
            <p className="text-zinc-200 text-md sm:text-md mb-4 leading-relaxed">
              Feel free to reach out to me via email for any queries,
              collaboration opportunities, or further details. I&apos;m also
              active on X and LinkedIn, so feel free to DM me there :)
            </p>
          </section>
        </AnimatedWrapper>
      </div>

      {/* Footer */}
      <AnimatedWrapper delay={0.8}>
        <Footer />
      </AnimatedWrapper>
    </div>
  );
}
