"use client";

import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import clsx from "clsx";

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
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-4">

        <div className="h-px bg-gradient-to-r from-violet-700/40 via-zinc-800 to-transparent flex-1" />
      </div>

      <div className="rounded-2xl ring-1 ring-white/10 bg-zinc-900/60 p-4 sm:p-6 backdrop-blur shadow-lg">
        <div className="overflow-x-auto">
          <div
            className={clsx(
              "mx-auto min-w-[720px] transition-opacity duration-500",
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
          Data from GitHub •{" "}
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
        .react-calendar-heatmap .violet-level-0 {
          fill: #27272a;
        }
        .react-calendar-heatmap .violet-level-1 {
          fill: #312e81;
        }
        .react-calendar-heatmap .violet-level-2 {
          fill: #3730a3;
        }
        .react-calendar-heatmap .violet-level-3 {
          fill: #4338ca;
        }
        .react-calendar-heatmap .violet-level-4 {
          fill: #6366f1;
        }
        .react-calendar-heatmap .react-calendar-heatmap-day:hover {
          stroke: #c7d2fe;
          stroke-width: 1px;
        }
      `}</style>
    </section>
  );
}
