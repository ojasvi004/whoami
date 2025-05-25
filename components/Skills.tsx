"use client";
import Image from "next/image";
import skills from "@/data/skills.json";
import Tooltip from "@/components/Tooltip";

export function Skills() {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group flex items-center gap-2 bg-zinc-300/95 text-xs px-2 py-2 rounded-md hover:bg-zinc-200/95 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <Tooltip content={skill.name}>
              <Image
                src={skill.logo || "/placeholder.svg"}
                width={22}
                height={22}
                alt={skill.name}
                className="transition-transform duration-200"
              />
            </Tooltip>

         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
