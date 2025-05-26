interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-1 py-1/2 text-xs font-medium bg-zinc-700 border border-zinc-600/90  text-zinc-300 rounded-lg">
      {tech}
    </span>
  );
}
