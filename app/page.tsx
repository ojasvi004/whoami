import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

import { BadgeComponent } from "@/components/Badge";
import Image from "next/image";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/achievements";
import Footer from "@/components/Footer";
import { links } from "@/lib/links";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-xs text-zinc-400">
      </header>

      <div className="max-w-2xl mx-auto px-4 pb-8">
        {/* Profile Section */}
        <div className="flex gap-4 mb-8">
          <div className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Ojasvi Doye"
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-zinc-100">Ojasvi Doye</h1>
              <BadgeComponent prop="Available" />
            </div>
            <p className="text-zinc-400 text-sm mb-3">Student</p>
            <div className="flex gap-2">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                >
                  <Github className="h-3 w-3" />
                </Button>
              </a>

              <a href={links.x} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                >
                  <SiX className="h-3 w-3" />
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
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                >
                  <Linkedin className="h-3 w-3" />
                </Button>
              </a>

              <a href={links.email}>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                >
                  <Mail className="h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3 text-zinc-100">About Me.</h2>
          <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p>
              Hey! I&apos;m Ojasvi Doye, third year computer science student and
              full-stack developer who loves turning ideas into real, working
              products.
            </p>
            <p>
              I&apos;m flexible working with any tech stack, though I prefer modern
              tools. I&apos;m currently working with Next.js, Django, Express, and
              TypeScript.
            </p>
            <p>
              I love contributing to open-source projects and have actively
              participated in multiple hackathons, where I collaborate, build,
              and solve real-world problems.
            </p>
          </div>
        </section>

        {/* Achievements Section */}

        {/* Hire Me Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3 text-zinc-100">Hire Me.</h2>
          <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
            I&apos;m currently available for internships, full-time opportunities,
            and freelance projects. If you&apos;re looking for someone passionate,
            skilled, and ready to contribute, I&apos;m here to help bring your ideas
            to life!
          </p>
          <a
            href="mailto:ojasvidoye@gmail.com?subject=Interested%20in%20hiring%20you"
            className="inline-block"
          >
            <Button className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-100 text-sm h-8 px-3">
              <Mail className="h-3 w-3 mr-2" />
              Hire Me
            </Button>
          </a>
        </section>

        {/* Skills & Tools Section */}
        <section className="mb-8">
          <h2 className="mb-4">Skills & Tools.</h2>
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <Projects />
        </section>
        <Achievements />
        {/* Reach out to me Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3 text-zinc-100">
            Reach out to me.
          </h2>
          <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
            Feel free to reach out to me via email for any queries,
            collaboration opportunities, or further details. I&apos;m also active on
            X and LinkedIn, so feel free to DM me there :)
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
