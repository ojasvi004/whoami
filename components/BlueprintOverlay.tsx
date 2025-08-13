"use client";

import React from "react";

interface BlueprintOverlayProps {
  variant?: "hero" | "section" | "card" | "projects";
  className?: string;
  children?: React.ReactNode;
}

export default function BlueprintOverlay({
  variant = "section",
  className = "",
  children,
}: BlueprintOverlayProps) {
  if (variant === "hero") {
    return (
      <div className={`relative ${className}`}>
        {/* Cleaner architectural blueprint overlay for hero section */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block [mask-image:radial-gradient(circle_at_55%_45%,white,transparent_80%)] opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Subtle grid (40px major, 8px minor) */}
            <pattern
              id="hero-grid-minor"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M8 0H0V8"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.4"
              />
            </pattern>
            <pattern
              id="hero-grid-major"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill="url(#hero-grid-minor)" />
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.7"
              />
            </pattern>
            <pattern
              id="hero-hatch-a"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                stroke="rgba(255,255,255,1)"
                strokeWidth="2"
              />
            </pattern>
            <pattern
              id="hero-hatch-b"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                stroke="rgba(255,255,255,1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Grid background */}
          <rect
            x="0"
            y="0"
            width="1200"
            height="700"
            fill="url(#hero-grid-major)"
          />

          {/* Accent bounded left content area */}
          <g stroke="rgba(255,255,255,0.32)" strokeWidth="1" fill="none">
            <rect
              x="80"
              y="120"
              width="520"
              height="300"
              strokeDasharray="6 10"
            />
            {/* top + bottom hatched bands */}
            <rect
              x="80"
              y="120"
              width="520"
              height="60"
              fill="url(#hero-hatch-a)"
              opacity="0.30"
            />
            <rect
              x="80"
              y="360"
              width="520"
              height="60"
              fill="url(#hero-hatch-b)"
              opacity="0.25"
            />
          </g>

          {/* Internal guide lines */}
          <g
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.6"
            strokeDasharray="4 6"
          >
            <line x1="80" y1="250" x2="600" y2="250" />
            <line x1="80" y1="300" x2="600" y2="300" />
          </g>

          {/* Right side module frame for avatar / stack icons */}
          <g stroke="rgba(255,255,255,0.28)" strokeWidth="0.9" fill="none">
            <rect
              x="720"
              y="160"
              width="440" /* was 380 */
              height="260"
              strokeDasharray="5 8"
            />
            <rect
              x="720"
              y="160"
              width="440" /* was 380 */
              height="56"
              fill="url(#hero-hatch-a)"
              opacity="0.25"
            />
            <rect
              x="720"
              y="364"
              width="440" /* was 380 */
              height="56"
              fill="url(#hero-hatch-b)"
              opacity="0.18"
            />
          </g>

          {/* Measurement ticks (minimal for cleanliness) */}
          <g
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.9"
            strokeLinecap="square"
          >
            {/* Left block vertical ticks */}
            <line x1="70" y1="120" x2="75" y2="120" />
            <line x1="70" y1="240" x2="75" y2="240" />
            <line x1="70" y1="360" x2="75" y2="360" />
            <line x1="70" y1="420" x2="75" y2="420" />
            {/* Right block vertical ticks (shifted to new edge) */}
            <line x1="1170" y1="160" x2="1165" y2="160" />
            <line x1="1170" y1="290" x2="1165" y2="290" />
            <line x1="1170" y1="420" x2="1165" y2="420" />
          </g>

          {/* Soft focus highlight behind left content */}
          <rect
            x="60"
            y="100"
            width="560"
            height="340"
            fill="url(#hero-grid-major)"
            opacity="0.08"
          />
          <rect
            x="700"
            y="140"
            width="480" /* was 420 */
            height="300"
            fill="url(#hero-grid-major)"
            opacity="0.05"
          />

          {/* Subtle connecting lines between blocks */}
          <g
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.6"
            strokeDasharray="3 7"
          >
            <path d="M600 270 L720 270" />
            <path d="M600 310 L720 310" />
          </g>

          {/* Blueprint labels */}
          <g
            fontFamily="'IBM Plex Mono', 'ui-monospace', monospace"
            fontSize="10"
            fill="rgba(255,255,255,0.7)"
            style={{ letterSpacing: "2px" }}
          >
            {/* Left block labels moved to left edge */}
            <text x="72" y="132" textAnchor="end" fill="rgba(255,255,255,0.6)">NAME</text>
            <text x="72" y="372" textAnchor="end" fill="rgba(255,255,255,0.6)">ABOUT</text>
            {/* Right block labels */}
            <text x="728" y="172">
              SOCIAL LINKS
            </text>
            <text x="728" y="382">
              TECH STACK
            </text>
          </g>
        </svg>
        {children}
      </div>
    );
  }

  if (variant === "projects") {
    return (
      <div className={`relative ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="projects-hatch"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>

          <g stroke="rgba(255,255,255,0.32)" strokeWidth="0.8" fill="none">
            <rect
              x="40"
              y="60"
              width="920"
              height="680"
              strokeDasharray="3,5"
            />
            <line
              x1="500"
              y1="60"
              x2="500"
              y2="740"
              strokeDasharray="2,3"
              opacity="0.8"
            />
            <line
              x1="40"
              y1="400"
              x2="960"
              y2="400"
              strokeDasharray="2,3"
              opacity="0.8"
            />
          </g>

          <g stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none">
            <rect x="60" y="80" width="300" height="60" />
            <rect
              x="70"
              y="90"
              width="280"
              height="20"
              fill="url(#projects-hatch)"
              opacity="0.3"
            />
          </g>

          <g stroke="rgba(255,255,255,0.28)" strokeWidth="0.6" fill="none">
            <rect
              x="80"
              y="180"
              width="380"
              height="180"
              strokeDasharray="2,2"
            />
            <rect
              x="90"
              y="190"
              width="360"
              height="20"
              fill="url(#projects-hatch)"
              opacity="0.2"
            />
            <rect
              x="540"
              y="180"
              width="380"
              height="180"
              strokeDasharray="2,2"
            />
            <rect
              x="550"
              y="190"
              width="360"
              height="20"
              fill="url(#projects-hatch)"
              opacity="0.2"
            />
            <rect
              x="80"
              y="420"
              width="380"
              height="180"
              strokeDasharray="2,2"
              opacity="0.8"
            />
            <rect
              x="540"
              y="420"
              width="380"
              height="180"
              strokeDasharray="2,2"
              opacity="0.8"
            />
          </g>

          <g stroke="rgba(255,255,255,0.28)" strokeWidth="1" fill="none">
            <path d="M 60 80 L 70 80 M 60 80 L 60 90" />
            <path d="M 350 80 L 360 80 M 360 80 L 360 90" />
            <path d="M 80 180 L 90 180 M 80 180 L 80 190" />
            <path d="M 450 180 L 460 180 M 460 180 L 460 190" />
            <path d="M 540 180 L 550 180 M 540 180 L 540 190" />
            <path d="M 910 180 L 920 180 M 920 180 L 920 190" />
          </g>
        </svg>
        {children}
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`relative ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="section-hatch"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>

          <rect
            x="40"
            y="40"
            width="720"
            height="320"
            rx="2"
            fill="none"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="0.8"
            strokeDasharray="3,3"
          />
          <rect
            x="60"
            y="60"
            width="200"
            height="40"
            fill="url(#section-hatch)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.6"
          />
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="0.4">
            <line x1="40" y1="120" x2="760" y2="120" strokeDasharray="1,2" />
            <line x1="40" y1="200" x2="760" y2="200" strokeDasharray="1,2" />
            <line x1="40" y1="280" x2="760" y2="280" strokeDasharray="1,2" />
          </g>
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="0.8">
            <path d="M 40 60 L 50 60 M 40 60 L 40 70" />
            <path d="M 750 60 L 760 60 M 760 60 L 760 70" />
            <path d="M 40 340 L 40 350 M 40 350 L 50 350" />
            <path d="M 760 340 L 760 350 M 750 350 L 760 350" />
          </g>
        </svg>
        {children}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`relative ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="card-hatch"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>

          <rect
            x="20"
            y="20"
            width="360"
            height="260"
            rx="4"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.6"
            strokeDasharray="2,2"
          />
          <rect
            x="30"
            y="30"
            width="340"
            height="60"
            fill="url(#card-hatch)"
            opacity="0.4"
          />
          <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.6">
            <path d="M 20 35 L 28 35 M 20 35 L 20 43" />
            <path d="M 372 35 L 380 35 M 380 35 L 380 43" />
            <path d="M 20 265 L 20 273 M 20 273 L 28 273" />
            <path d="M 380 265 L 380 273 M 372 273 L 380 273" />
          </g>
          <line
            x1="200"
            y1="20"
            x2="200"
            y2="280"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.4"
            strokeDasharray="1,2"
          />
        </svg>
        {children}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
}

export function HeroBlueprintOverlay({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <BlueprintOverlay variant="hero" className={className}>
      {children}
    </BlueprintOverlay>
  );
}

export function ProjectsBlueprintOverlay({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <BlueprintOverlay variant="projects" className={className}>
      {children}
    </BlueprintOverlay>
  );
}

export function SectionBlueprintOverlay({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <BlueprintOverlay variant="section" className={className}>
      {children}
    </BlueprintOverlay>
  );
}

export function CardBlueprintOverlay({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <BlueprintOverlay variant="card" className={className}>
      {children}
    </BlueprintOverlay>
  );
}
