"use client";

import { useUntilYouDieStore } from "@/app/store";
import React, { useState, useEffect, useMemo } from "react";

const REGION_EXPECTANCY: Record<string, number> = {
  Africa: 63,
  America: 74,
  Asia: 73,
  Europe: 79,
  Oceania: 74,
};

function addYears(date: Date, years: number) {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

function diffInWeeks(start: Date, end: Date) {
  const ms = end.getTime() - start.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 7));
}

export default function WeeksTable() {
  const { data } = useUntilYouDieStore();
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [expectancyYears, setExpectancyYears] = useState<number | null>(null);

  useEffect(() => {
    if (data?.birthDate) setBirthDate(new Date(data.birthDate));
    if (data?.birthPlace) {
      setExpectancyYears(REGION_EXPECTANCY[data.birthPlace] ?? null);
    }
  }, [data]);

  const { totalWeeks, livedWeeks, ticks } = useMemo(() => {
    if (!birthDate) {
      return { totalWeeks: 0, livedWeeks: 0, ticks: [] as number[] };
    }

    const eYears = expectancyYears ?? 80;
    const now = new Date();
    const deathDate = addYears(birthDate, eYears);

    const lived = diffInWeeks(birthDate, now);
    const total = diffInWeeks(birthDate, deathDate);

    const gridWeeks = Math.max(total, lived);

    const step = 5;
    const yShow = Math.ceil(gridWeeks / 52);
    const baseTicks = Array.from(
      { length: Math.floor(yShow / step) + 1 },
      (_, i) => i * step
    );
    if (baseTicks[baseTicks.length - 1] !== yShow) baseTicks.push(yShow);

    return { totalWeeks: gridWeeks, livedWeeks: lived, ticks: baseTicks };
  }, [birthDate, expectancyYears]);

  return (
    <div className="p-4 w-full overflow-x-auto">
      <div className="flex min-w-[1300px]">
        <div className="w-12" />
        <div className="flex-1 ml-1">
          <div className="grid grid-cols-[repeat(52,_minmax(0,_1fr))] gap-x-1 mb-2">
            {Array.from({ length: 12 }, (_, month) => (
              <div key={month} className="col-span-4 text-xs text-center">
                {new Date(0, month).toLocaleString("default", {
                  month: "short",
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex min-w-[1300px]">
        <div className="flex flex-col justify-between pr-2 w-12">
          {ticks.map((t, i) => (
            <span
              key={i}
              className="text-xs text-right h-[26px] flex items-center justify-end"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-[repeat(52,_minmax(0,_1fr))] gap-1">
          {Array.from({ length: totalWeeks }, (_, index) => {
            const isLived = index < livedWeeks;
            return (
              <div
                key={index}
                className={`aspect-square border border-gray-200 ${
                  isLived ? "bg-violet-500" : "bg-white"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
