import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, Copy, X } from "lucide-react";
import { links } from "@/lib/links";
import { VT323 } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { BlueprintSection } from "../BlueprintOverlay";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const vt323 = VT323({ subsets: ["latin"], weight: "400" });

const ReachOut = () => {
  const email = "ojasvidoye@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {}
  };

  return (
    <BlueprintSection label="Reach Out" headingClassName={`text-violet-200 ${libre.className} font-normal`} tight>
      <div className="relative overflow-hidden rounded-md border border-dashed border-white/15 bg-zinc-950/40 px-5 py-6 sm:px-7 sm:py-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_60%_40%,white,transparent_75%)]">
          <div className="absolute inset-x-0 top-0 h-6 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-6 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-25" />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between relative">
          <div className="max-w-2xl">
            <h3 className={`text-2xl sm:text-3xl text-violet-200 ${libre.className}`}>Let&apos;s build something</h3>
            <p className="mt-2 text-zinc-300 text-base sm:text-lg">Got a project or a question? I usually reply within a day.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="h-10 px-4 rounded-full bg-transparent text-zinc-200 border border-white/25 hover:bg-zinc-900/60 shadow-[0_4px_18px_-6px_rgba(139,92,246,0.35)]" asChild>
              <a href={links.email}><Mail className="h-4 w-4 mr-2" /> Email me</a>
            </Button>
            {[{icon: Linkedin, href: links.linkedin, label: 'LinkedIn'}, {icon: Github, href: links.github, label: 'GitHub'}, {icon: X, href: links.x, label: 'X'}].map(({icon: Icon, href, label}, i) => (
              <Button key={i} variant="outline" className="h-10 w-10 rounded-full bg-zinc-950/60 border-white/25 text-violet-200 hover:bg-violet-950/40 hover:border-violet-300/60" asChild>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon className="h-4 w-4" /></a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400 relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"><Send className="h-3.5 w-3.5 text-violet-300" /> {email}</span>
          <button onClick={copyEmail} className="inline-flex items-center gap-1 text-violet-200/90 hover:text-violet-200"><Copy className="h-3.5 w-3.5" /> Copy</button>
        </div>
      </div>
    </BlueprintSection>
  );
};

export default ReachOut;
