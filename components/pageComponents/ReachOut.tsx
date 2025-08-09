import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, Copy, X } from "lucide-react";
import { links } from "@/lib/links";
import { VT323 } from "next/font/google";

const vt323 = VT323({ subsets: ["latin"], weight: "400" });

const ReachOut = () => {
  const email = "ojasvidoye@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {}
  };

  return (
    <section className="mb-10">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/50 px-5 py-6 sm:px-7 sm:py-8">
        {/* soft background glow */}
        <div aria-hidden className="pointer-events-none absolute -inset-16 -z-10 rounded-xl bg-gradient-to-r from-violet-500/10 via-violet-400/5 to-transparent blur-2xl" />

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Copy */}
          <div className="max-w-2xl">
            <h2 className={`${vt323.className} text-2xl sm:text-3xl text-violet-200`}>
              Reach out to me
            </h2>
            <p className="mt-2 text-zinc-300 text-base sm:text-lg">
              Got a project or a question? I usually reply within a day.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="h-10 px-4 bg-white text-zinc-900 hover:bg-zinc-200 border border-white/20 rounded-full"
              asChild
            >
              <a href={links.email}>
                <Mail className="h-4 w-4 mr-2" /> Email me
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full bg-transparent border-zinc-700/70 text-violet-200 hover:bg-zinc-900/60"
              asChild
            >
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full bg-transparent border-zinc-700/70 text-violet-200 hover:bg-zinc-900/60"
              asChild
            >
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full bg-transparent border-zinc-700/70 text-violet-200 hover:bg-zinc-900/60"
              asChild
            >
              <a
                href={links.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <X className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Email row with copy */}
        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            <Send className="h-3.5 w-3.5 text-violet-300" /> {email}
          </span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1 text-violet-200/90 hover:text-violet-200"
          >
            <Copy className="h-3.5 w-3.5" /> Copy
          </button>

        </div>
      </div>
    </section>
  );
};

export default ReachOut;
