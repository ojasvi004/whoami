"use client";

import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import clsx from "clsx";
import { BlueprintSection } from "../BlueprintOverlay";

type Value = { date: string | Date; count?: number };

export default function GithubHeatmap() {
  const username = "ojasvi004";
  const [values, setValues] = React.useState<Value[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/github-contributions?username=${username}`);
        if (!res.ok) return;
        const data: Value[] = await res.json();
        setValues(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 371);

  return (
    <BlueprintSection label="GitHub" headingClassName="text-violet-300">
      <div className="relative overflow-hidden rounded-md border border-dashed border-white/15 bg-zinc-950/40 px-4 py-5 sm:px-6 sm:py-7 backdrop-blur">
        {/* hatch accent bands */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_55%_45%,white,transparent_80%)]">
          <div className="absolute inset-x-0 top-0 h-5 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-5 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_10px)] opacity-25" />
        </div>
        <div className="overflow-x-auto relative z-10 flex justify-center">
          <div
            className={clsx(
              // further enlarged footprint
              "w-full max-w-[980px] lg:max-w-[1040px] transition-opacity duration-500 px-1",
              loading ? "opacity-0" : "opacity-100"
            )}
          >
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={values}
              classForValue={(v?: Value) => {
                const c = v?.count ?? 0;
                let level = c <= 4 ? c : 0;
                if (c > 4) {
                  if (c >= 10) level = 4;
                  else if (c >= 7) level = 3;
                  else if (c >= 4) level = 2;
                  else if (c >= 1) level = 1;
                }
                return `violet-level-${level}`;
              }}
              tooltipDataAttrs={(v?: Value) => ({
                title: v?.date
                  ? `${v.date}: ${v?.count ?? 0} contributions`
                  : "",
              })}
              showWeekdayLabels={false}
              gutterSize={2}
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-400 text-center">
          Data from GitHub • {""}
          <a
            className="underline hover:text-violet-300 transition-colors"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            @{username}
          </a>
        </p>
      </div>

      <style jsx global>{`
        .react-calendar-heatmap .violet-level-0 { fill: #27272a; }
        .react-calendar-heatmap .violet-level-1 { fill: #312e81; }
        .react-calendar-heatmap .violet-level-2 { fill: #3730a3; }
        .react-calendar-heatmap .violet-level-3 { fill: #4338ca; }
        .react-calendar-heatmap .violet-level-4 { fill: #6366f1; }
        .react-calendar-heatmap .react-calendar-heatmap-day { width: 13px; height: 13px; rx: 2px; ry: 2px; }
        .react-calendar-heatmap .react-calendar-heatmap-day:hover { stroke: #c7d2fe; stroke-width: 1px; }
      `}</style>
    </BlueprintSection>
  );
}
