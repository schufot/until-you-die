"use client";

import { useUntilYouDieStore } from "@/app/store";
import React, { useEffect, useState } from "react";

function Timer() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const data = useUntilYouDieStore((state) => state.data);

  useEffect(() => {
    if (!data) return;

    const { birthDate, birthPlace } = data;

    let lifeExpectancy;
    switch (birthPlace) {
      case "Africa":
        lifeExpectancy = 63;
        break;
      case "America":
        lifeExpectancy = 74;
        break;
      case "Asia":
        lifeExpectancy = 73;
        break;
      case "Europe":
        lifeExpectancy = 79;
        break;
      case "Oceania":
        lifeExpectancy = 74;
        break;
      default:
        lifeExpectancy = 0;
    }

    const deathDate = new Date(birthDate);
    deathDate.setFullYear(deathDate.getFullYear() + lifeExpectancy);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = deathDate.getTime() - now.getTime();

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const y = Math.floor(difference / 31556952000);
      setYears(y);

      const m = Math.floor((difference % 31556952000) / 2629746000);
      setMonths(m);

      const w = Math.floor((difference % 2629746000) / 604800000);
      setWeeks(w);

      const d = Math.floor((difference % 604800000) / 86400000);
      setDays(d);

      const h = Math.floor((difference % 86400000) / 3600000);
      setHours(h);

      const mi = Math.floor((difference % 3600000) / 60000);
      setMinutes(mi);

      const s = Math.floor((difference % 60000) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  if (!data) {
    return (
      <div>
        Please enter your birth date and place to see your remaining lifetime.
      </div>
    );
  }

  return (
    <div>
      Statistically speaking you have {years} years {months} months {weeks}{" "}
      weeks {days} days {hours} hours {minutes} minutes and {seconds} seconds to
      live.
    </div>
  );
}

export default Timer;
