import { useUntilYouDieStore } from "@/app/store";
import React, { useState, useEffect } from "react";
const WEEKS_IN_YEAR = 52;
const YEARS_TO_SHOW = 90;

function WeeksTable() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const { data } = useUntilYouDieStore();

  useEffect(() => {
    if (data?.birthDate) {
      setBirthDate(new Date(data.birthDate));
    }
  }, [data]);

  const getWeeksSinceBirth = (birthDate: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birthDate.getTime());
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks;
  };

  const weeksSinceBirth = birthDate ? getWeeksSinceBirth(birthDate) : 0;

  return (
    <div className="p-4 w-full overflow-x-auto">
      <div className="flex min-w-[1300px]">
        {" "}
        {/* Minimum width to ensure proper display */}
        <div className="w-12"></div>
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
        {" "}
        {/* Minimum width to ensure proper display */}
        <div className="flex flex-col justify-between pr-2 w-12">
          {Array.from({ length: YEARS_TO_SHOW / 5 + 1 }, (_, i) => (
            <span
              key={i}
              className="text-xs text-right h-[26px] flex items-center justify-end"
            >
              {i * 5}
            </span>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-[repeat(52,_minmax(0,_1fr))] gap-1">
          {Array.from({ length: YEARS_TO_SHOW * WEEKS_IN_YEAR }, (_, index) => {
            const isLived = index < weeksSinceBirth;
            return (
              <div
                key={index}
                className={`aspect-square ${
                  isLived ? "bg-violet-500" : "bg-white"
                } border border-gray-200`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WeeksTable;
