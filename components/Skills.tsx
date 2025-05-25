"use client"
import Image from "next/image"
import skills from "@/data/skills.json"

export function Skills() {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group flex items-center gap-2 bg-zinc-300/95 text-xs px-2 py-2 rounded-full hover:bg-zinc-200/95 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <Image
              src={skill.logo || "/placeholder.svg"}
              width={22}
              height={22}
              alt={skill.name}
              className="transition-transform duration-200 group-hover:rotate-3"
            />

            {/* Tooltip */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 group-hover:-translate-y-1">
              {skill.name}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
