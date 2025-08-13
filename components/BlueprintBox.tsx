"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BlueprintBoxProps {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  showHatch?: boolean;
  width?: number;
}

export default function BlueprintBox({
    children,
    className,
    borderClassName,
    showHatch = true,
    width = 750
}: BlueprintBoxProps) {
    return (
        <div className={cn("relative", className)}>
            {children}
            {/* Overlay */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
                {/* Dashed border around content */}
                <div
                    className={cn(
                        "absolute inset-1 rounded-sm border border-dashed",
                        "border-white/25",
                        borderClassName
                    )}
                    style={{ width: `${width}px` }}
                />
                {showHatch && (
                    <div className="absolute left-0 right-0 top-0 h-8 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.12)_0,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_12px)] opacity-35" />
                )}
            </div>
        </div>
    );
}
