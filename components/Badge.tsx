"use client";
import { Badge } from "./ui/badge";

export function BadgeComponent({ prop }: { prop: string }) {
  return (
    <Badge className="border border-indigo-400 text-indigo-400 text-xs px-2 py-1 rounded-lg flex items-center gap-2 bg-transparent">
      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
      {prop}
    </Badge>
  );
}
