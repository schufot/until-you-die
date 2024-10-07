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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {Array.from({ length: YEARS_TO_SHOW }, (_, year) => (
            <tr key={year}>
              {Array.from({ length: WEEKS_IN_YEAR }, (_, week) => {
                const weekNumber = year * WEEKS_IN_YEAR + week;
                const isLived = weekNumber < weeksSinceBirth;
                return (
                  <td
                    key={week}
                    className={`w-2 h-2 border border-gray-300 ${
                      isLived ? "bg-violet-500" : "bg-white"
                    }`}
                  />
                );
              })}
              <td className="pl-2 text-xs">{year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeeksTable;
