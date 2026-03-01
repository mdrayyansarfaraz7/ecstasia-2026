/* eslint-disable react-hooks/static-components */
import React, { useState, useEffect } from "react";

function Timer() {
  const getNextMarch14 = () => {
    const now = new Date();
    let year = now.getFullYear();
    let target = new Date(year, 2, 14, 0, 0, 0);
    if (now > target) target = new Date(year + 1, 2, 14, 0, 0, 0);
    return target.getTime();
  };

  const targetDate = getNextMarch14();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [show, setShow] = useState(false);
  const [textShow, setTextShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => setTextShow(true), 400);

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const Box = ({ value, label }) => (
    <div className="text-center">
      <h2
        style={{ fontFamily: "var(--font-accent)" }}
        className="text-3xl sm:text-5xl lg:text-7xl"
      >
        {value.toString().padStart(2, "0")}
      </h2>
      <p
        style={{ fontFamily: "var(--font-heading)" }}
        className="text-lg sm:text-xl lg:text-3xl"
      >
        {label}
      </p>
    </div>
  );

  return (
    <div
      className="w-full min-h-[55vh] bg-cover bg-center flex flex-col items-center justify-center gap-8 px-4 py-9"
      style={{
        backgroundImage: "url('/Slice 2.webp')",
        backgroundColor: "#FDECE2",
      }}
    >
      <div
        className={`transition-all duration-700 w-full max-w-6xl mx-auto ${
          show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-11 pt-5">
          <img
            src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770660295/lbei505cdeepiauuntar.png"
            alt="Hourglass"
            className="w-41 h-full"
          />

          <div className="flex gap-6">
            <Box value={timeLeft.days} label="days" />
            <Box value={timeLeft.hours} label="hours" />
            <Box value={timeLeft.minutes} label="minutes" />
            <Box value={timeLeft.seconds} label="seconds" />
          </div>
        </div>
      </div>
      <p
        style={{ fontFamily: "var(--font-heading)" }}
        className={`text-2xl sm:text-4xl lg:text-5xl text-black text-center transition-all duration-700 ${
          textShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        An Uncovered truth awaits your investigation.
      </p>
    </div>
  );
}

export default Timer;
