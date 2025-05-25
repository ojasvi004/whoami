"use client";
import { Badge } from "./ui/badge";

export function BadgeComponent({ prop }: { prop: string }) {
  return (
    <Badge className="border border-indigo-500 text-indigo-500 text-xs px-2 py-1 rounded-xl flex items-center gap-2 animate-pulse bg-transparent">
      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
      {prop}
    </Badge>
  );
}
