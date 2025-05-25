"use client";
import { Trophy, Award, Medal, Star, Flame } from "lucide-react";

const achievements = [
  {
    title: "Winner",
    event: "PULSE GenAI Hackathon",
    organization: "Aditya Birla Group & OAB, at IIT Bombay Techfest",
    detail: "selected from 400+ teams",
    icon: Trophy,
    rank: "1st",
    color: "text-indigo-100",
  },
  {
    title: "Domain Winner",
    event: "BBB Hackathon",
    organization: "SPIT, Mumbai",
    detail: "SaaS Track",
    icon: Award,
    rank: "Winner",
    color: "text-indigo-200",
  },
  {
    title: "Top 10 Finalist",
    event: "ISTD Hackathon",
    organization: "by Let's Upgrade",
    detail: "",
    icon: Star,
    rank: "Top 10",
    color: "text-indigo-300",
  },
  {
    title: "Top 25 Finalist",
    event: "48-hour Hackathon",
    organization: "BITS Pilani",
    detail: "",
    icon: Star,
    rank: "Top 25",
    color: "text-indigo-400",
    },
  {
    title: "Completed",
    event: "100 Days of Code Challenge",
    organization: "on X",
    detail: "",
    icon: Flame,
    rank: "",
    color: "text-indigo-500",
  },
];

export function Achievements() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3 text-zinc-100">Achievements.</h2>
      <div className="space-y-2">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={index}
              className="group flex items-start gap-3 p-2 rounded-md hover:bg-zinc-900/50 transition-all duration-200"
            >
              <div className="flex-shrink-0 pt-1">
                <IconComponent className={`h-4 w-4 ${achievement.color}`} />
              </div>

              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-zinc-100 text-sm">
                    {achievement.title}
                  </span>
                  <span className="text-zinc-400 text-sm">•</span>
                  <span className="text-zinc-300 text-sm">{achievement.event}</span>
                  {achievement.detail && (
                    <>
                      <span className="text-zinc-500 text-sm">•</span>
                      <span className="text-zinc-500 text-xs">{achievement.detail}</span>
                    </>
                  )}
                  <span className="ml-auto font-semibold text-xs text-zinc-300">
                    {achievement.rank}
                  </span>
                </div>
                <div className="text-zinc-400 text-xs">{achievement.organization}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
