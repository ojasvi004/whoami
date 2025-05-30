import React from "react";

const AboutMe = () => {
  return (
    <section className="mb-8 ">
      <div className="flex items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
          About Me
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 via-zinc-800 to-transparent flex-1" />
      </div>
      <div className="space-y-2 text-zinc-200 text-md sm:text-md leading-relaxed ">
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
          participated in multiple hackathons, where I collaborate, build, and
          solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
