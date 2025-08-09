import React from "react";
import { Libre_Baskerville } from "next/font/google";
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const AboutMe = () => {
  return (
    <section className="mb-8 ">
      <div className="flex items-center gap-4">
        <h2 className={`text-3xl sm:text-4xl font-bold text-violet-300 ${libre.className}`}>
          About me
        </h2>
        <div className="h-px bg-gradient-to-r from-violet-700/40 via-zinc-800 to-transparent flex-1" />
      </div>
      <div className="space-y-3 text-zinc-300 text-xl sm:text-xl mt-4 leading-relaxed ">
        <p>
          Hey! I&apos;m Ojasvi Doye, third year computer science student and
          full-stack developer who loves turning ideas into real, working
          products. I&apos;m flexible working with any tech stack, though I
          prefer modern tools. I&apos;m currently working with Next.js, Django,
          Express, and TypeScript.
        </p>
        <p>
          I love contributing to open-source projects and have actively
          participated in multiple hackathons, where I collaborate, build, and
          solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
