"use client";

import Projects from "@/components/pageComponents/Projects";
import Skills from "@/components/pageComponents/Skills";
import Achievements from "@/components/pageComponents/Achievements";
import Footer from "@/components/pageComponents/Footer";
import AnimatedWrapper from "@/components/animated-wrapper";
import AboutMe from "../pageComponents/AboutMe";
import HireMe from "../pageComponents/HireMe";
import ReachOut from "../pageComponents/ReachOut";
import Hero from "../pageComponents/Hero";
import GithubHeatmap from "../pageComponents/GithubHeatmap";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-retro text-zinc-100 relative">
      {/* Main */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 pb-12">
        <AnimatedWrapper delay={0.05}>
          <Hero />
        </AnimatedWrapper>

        <section id="about" className="scroll-mt-20">
          <AnimatedWrapper delay={0.15}>
            <AboutMe />
          </AnimatedWrapper>
        </section>

        {/* GitHub Heatmap */}
        <section id="github" className="scroll-mt-20">
          <AnimatedWrapper delay={0.18}>
            <GithubHeatmap />
          </AnimatedWrapper>
        </section>

        <section id="hire" className="scroll-mt-20">
          <AnimatedWrapper delay={0.2}>
            <HireMe />
          </AnimatedWrapper>
        </section>

        <section id="skills" className="scroll-mt-20">
          <AnimatedWrapper delay={0.25}>
            <Skills />
          </AnimatedWrapper>
        </section>

        <section id="projects" className="scroll-mt-20">
          <AnimatedWrapper delay={0.3}>
            <Projects />
          </AnimatedWrapper>
        </section>

        <section id="achievements" className="scroll-mt-20">
          <AnimatedWrapper delay={0.35}>
            <Achievements />
          </AnimatedWrapper>
        </section>

        <section id="contact" className="scroll-mt-20">
          <AnimatedWrapper delay={0.4}>
            <ReachOut />
          </AnimatedWrapper>
        </section>
      </div>

      <AnimatedWrapper delay={0.45}>
        <Footer />
      </AnimatedWrapper>
    </div>
  );
}
