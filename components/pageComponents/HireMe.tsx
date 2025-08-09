import React from "react";
import {
  Mail,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Clock,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const HireMe = () => {
  return (
    <section className="mb-8 mt-4">
      <div className="rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <h2 className={`${libre.className} text-3xl text-violet-200`}>
              Let’s build something great together!
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="h-9 px-4 bg-white text-zinc-900 hover:bg-zinc-200 border border-white/20 rounded-full"
              asChild
            >
              <a href={links.email}>
                <Mail className="h-4 w-4 mr-2" /> Talk
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-9 px-3 rounded-full bg-transparent border-zinc-700/70 text-violet-200 hover:bg-zinc-900/60"
              asChild
            ></Button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-violet-200/95">
          <span className="uppercase tracking-wider text-[11px] text-zinc-400 mr-1">
            Available for
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1">
            <Briefcase className="h-3.5 w-3.5" /> Freelance
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/25 bg-violet-500/5 px-2.5 py-1">
            <GraduationCap className="h-3.5 w-3.5" /> Internships
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-1">
            <Clock className="h-3.5 w-3.5" /> Part‑time
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-1">
            <Rocket className="h-3.5 w-3.5" /> MVP builds
          </span>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
