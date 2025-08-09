import React from "react";
import { Button } from "@/components/ui/button";
import { BadgeComponent } from "../Badge";
import Image from "next/image";
import Tooltip from "@/components/Tooltip";
import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/lib/links";
import { SiX } from "react-icons/si";

const ProfileSection = () => {
  return (
    <div className="mb-10">
      <div className="block sm:hidden">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-[80px] h-[80px] flex-shrink-0 overflow-hidden rounded-[4px]">
            <Image
              src="/lain2.gif"
              alt="Ojasvi Doye"
              fill
              className="object-cover scale-[2] transition-transform duration-300 hover:scale-[2.1]"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-xl font-bold text-violet-200 drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
                Ojasvi Doye
              </h1>
              <BadgeComponent prop="Available" />
            </div>
            <p className="text-sm text-zinc-400 font-medium mb-3">
              Student & Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-start">
          <Tooltip content="GitHub">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
              >
                <Github className="h-3 w-3" />
              </Button>
            </a>
          </Tooltip>

          <Tooltip content="X">
            <a href={links.x} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
              >
                <SiX className="h-3 w-3" />
              </Button>
            </a>
          </Tooltip>

          <Tooltip content="LinkedIn">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
              >
                <Linkedin className="h-3 w-3" />
              </Button>
            </a>
          </Tooltip>

          <Tooltip content="Email">
            <a href={links.email}>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
              >
                <Mail className="h-3 w-3" />
              </Button>
            </a>
          </Tooltip>
        </div>
      </div>

      <div className="hidden sm:flex gap-6">
        <div className="relative w-[140px] h-[140px] flex-shrink-0 overflow-hidden rounded-[6px]">
          <Image
            src="/lain2.gif"
            alt="Ojasvi Doye"
            fill
            className="object-cover scale-[2] transition-transform duration-300 hover:scale-[2.1]"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl font-bold text-violet-200 drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
              Ojasvi Doye
            </h1>
            <BadgeComponent prop="Available" />
          </div>
          <p className="text-zinc-400 text-lg mb-4 font-medium">
            Student & Full-Stack Developer
          </p>
          <div className="flex gap-2">
            <Tooltip content="GitHub">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
                >
                  <Github className="h-3 w-3" />
                </Button>
              </a>
            </Tooltip>

            <Tooltip content="X">
              <a href={links.x} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
                >
                  <SiX className="h-3 w-3" />
                </Button>
              </a>
            </Tooltip>

            <Tooltip content="LinkedIn">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
                >
                  <Linkedin className="h-3 w-3" />
                </Button>
              </a>
            </Tooltip>

            <Tooltip content="Email">
              <a href={links.email}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 bg-transparent hover:bg-zinc-900/60 text-zinc-300"
                >
                  <Mail className="h-3 w-3" />
                </Button>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
