import React from "react";
import { Libre_Baskerville } from "next/font/google";
import { BlueprintSection } from "../BlueprintOverlay";
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const AboutMe = () => {
  return (
    <BlueprintSection label="About Me" headingClassName={`text-violet-300 ${libre.className}`}>
      <div className="space-y-3 text-zinc-300 text-xl sm:text-xl leading-relaxed mt-1">
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
    </BlueprintSection>
  );
};

export default AboutMe;
