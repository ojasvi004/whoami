"use client";

import React, { useState } from "react";
import Tooltip from "@/components/Tooltip";
import { BlueprintSection } from "../BlueprintOverlay";

const skills = [
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "C++", logo: "/logos/cplusplus.svg" },
  { name: "ReactJS", logo: "/logos/react.svg" },
  { name: "NextJS", logo: "/logos/nextdotjs.svg" },
  { name: "Angular", logo: "/logos/angular.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "Django", logo: "/logos/django.svg" },
  { name: "ExpressJS", logo: "/logos/express.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "Drizzle", logo: "/logos/drizzle.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Linux", logo: "/logos/linux.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Postman", logo: "/logos/postman.svg" },
];

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <BlueprintSection label="Skills & Tools">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Tooltip content={skill.name}>
              <div className="flex items-center justify-center p-2 rounded-md border border-dashed border-white/15 bg-zinc-900/40 backdrop-blur-sm transition-all duration-200 cursor-pointer group-hover:border-violet-300/40 group-hover:scale-105">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 invert"
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}

export default Skills;
