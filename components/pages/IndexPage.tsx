"use client";

import Projects from "@/components/pageComponents/Projects";
import Skills from "@/components/pageComponents/Skills";
import Achievements from "@/components/pageComponents/Achievements";
import Footer from "@/components/pageComponents/Footer";
import AnimatedWrapper from "@/components/animated-wrapper";
import AboutMe from "../pageComponents/AboutMe";
import HireMe from "../pageComponents/HireMe";
import ProfileSection from "../pageComponents/ProfileSection";
import ReachOut from "../pageComponents/ReachOut";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono relative overflow-hidden">
      <header className="flex justify-between items-center p-4 text-xs text-zinc-400 relative z-10"></header>

      <div className="max-w-3xl mx-auto px-3 sm:px-4 pb-8">
        <AnimatedWrapper delay={0.1}>
          <ProfileSection />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <AboutMe />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.3}>
          <HireMe />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.4}>
          <Skills />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.5}>
          <Projects />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.6}>
          <Achievements />
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.7}>
          <ReachOut />
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper delay={0.8}>
        <Footer />
      </AnimatedWrapper>
    </div>
  );
}
