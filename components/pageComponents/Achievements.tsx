"use client";

import { Trophy, Award, Star } from "lucide-react";
import achievements from "@/data/achievements.json";
import { Libre_Baskerville } from "next/font/google";
import { BlueprintSection } from "../BlueprintOverlay";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const icons = {
  Trophy,
  Award,
  Star,
};

const colorMap: Record<string, string> = {
  Trophy: "text-violet-200",
  Award: "text-violet-300",
  Star: "text-violet-400",
};

export function Achievements() {
  return (
    <BlueprintSection label="Achievements" headingClassName={`${libre.className} font-normal text-violet-200`} tight>
      {/* Soft radial glow (kept) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 right-10 h-[22rem] w-[22rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-24 left-0 h-[18rem] w-[18rem] rounded-full bg-violet-400/10 blur-[110px]" />
      </div>
      {/* Timeline / Grid */}
      <div className="relative mt-2">
        <div aria-hidden className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/60 via-violet-500/20 to-transparent xl:hidden" />
        <ul className="space-y-3 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = icons[achievement.icon as keyof typeof icons];
            return (
              <li key={index} className="relative pl-12 xl:pl-0">
                <span className="absolute left-0 top-3 grid place-items-center h-7 w-7 rounded-full bg-zinc-900/80 ring-1 ring-white/10 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(99,102,241,0.55)] xl:hidden">
                  <span aria-hidden className="absolute inset-0 -z-10 rounded-full bg-violet-500/25 blur-xl" />
                  <IconComponent className={`h-4 w-4 ${colorMap[achievement.icon]}`} />
                </span>
                <div className="relative rounded-md border border-dashed border-white/15 bg-zinc-950/40 px-4 py-3 sm:px-5 sm:py-4 transition-all duration-200 hover:border-violet-300/40 hover:bg-zinc-950/55">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-30" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-20" />
                  <div className="flex items-start gap-3 relative">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-violet-100 font-medium text-lg sm:text-xl">{achievement.title}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-300 text-base sm:text-lg">{achievement.event}</span>
                        {achievement.detail && (
                          <span className="ml-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[10px] sm:text-xs tracking-wide text-violet-200">
                            {achievement.detail}
                          </span>
                        )}
                      </div>
                      <div className="text-zinc-400 text-sm sm:text-base mt-1">{achievement.organization}</div>
                    </div>
                    <span className="shrink-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 px-2.5 py-1 text-xs sm:text-sm text-violet-200">
                      {achievement.rank}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </BlueprintSection>
  );
}

export default Achievements;
