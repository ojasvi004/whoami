"use client";
import { Badge } from "./ui/badge";

export function BadgeComponent({ prop }: { prop: string }) {
  return (
    <Badge className="border border-violet-400 text-violet-400 text-xs px-2 py-1 rounded-full flex items-center gap-2 bg-violet-600/20">
      {prop}
    </Badge>
  );
}
