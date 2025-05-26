interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-[1/2] text-xs font-semibold bg-zinc-300/90 text-zinc-900 border-none rounded-lg">
      {tech}
    </span>
  );
}
