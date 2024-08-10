"use client";

import React, { useEffect, useState } from 'react'

function Timer() {
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [weeks, setWeeks] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const target = new Date("12/30/2030 18:00:00"); // Daten vom statistischen Bundesamt bzw. Todestag
        const interval = setInterval(() => {
            const now = new Date() // Birthdate vom User
            const difference = target.getTime() - now.getTime();

            const y = Math.floor(difference / 31556952000);
            setYears(y);

            const m = Math.floor((difference % 31556952000) / 2629746000);
            setMonths(m);

            const w = Math.floor((difference % 2629746000) / 604800000);
            setWeeks(w);

            const d = Math.floor((difference % 604800000) / 86400000);
            setDays(d);

            const h = Math.floor((difference % 86400000) / 3600000) -1;
            setHours(h);

            const mi = Math.floor((difference % 3600000) / 60000);
            setMinutes(mi);

            const s = Math.floor((difference % 60000) / 1000);
            setSeconds(s);

        }, 1000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div>Years: {years} Months: {months} Weeks: {weeks} Days: {days} Hours: {hours} Minutes: {minutes} Seconds: {seconds}</div>
  )
}

export default Timer