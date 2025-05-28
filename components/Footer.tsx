"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-3">
          <a href={links.email}>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-zinc-400 hover:bg-inherit hover:text-zinc-100"
            >
              <Mail className="h-3 w-3" />
            </Button>
          </a>

          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-zinc-400 hover:bg-inherit hover:text-zinc-100"
            >
              <Github className="h-3 w-3" />
            </Button>
          </a>

          <a href={links.x} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-zinc-400 hover:bg-inherit hover:text-zinc-100"
            >
              <SiX className="h-3 w-3" />
            </Button>
          </a>

          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-zinc-400 hover:bg-inherit hover:text-zinc-100"
            >
              <Linkedin className="h-3 w-3" />
            </Button>
          </a>
        </div>
        <div className="flex justify-center items-center gap-3 text-xs">
          <p className="text-zinc-400">
            © 2025 Ojasvi Doye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
