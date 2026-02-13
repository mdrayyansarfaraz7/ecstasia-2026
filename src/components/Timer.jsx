import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ✅ Automatically set countdown to next March 14
  const getNextMarch14 = () => {
    const now = new Date();
    let year = now.getFullYear();

    let target = new Date(year, 2, 14, 0, 0, 0); // March = month index 2

    // If March 14 already passed this year → use next year
    if (now > target) {
      target = new Date(year + 1, 2, 14, 0, 0, 0);
    }

    return target.getTime();
  };

  const targetDate = getNextMarch14();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress =
        (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
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

  const timerAppearance = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.2));
  const splitFactor = Math.max(0, Math.min(1, (scrollProgress - 0.45) / 0.18));
  const xMove = splitFactor * 340;
  const textOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.65) / 0.08));

  const HFix = ({ children, isTagline = false }) => (
    <span className="inline-flex items-baseline">
      <span className="relative">h</span>
      <span
        style={{
          marginLeft: isTagline ? '-0.75em' : '-0.6em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </span>
  );

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/Slice 2.png')",
        backgroundColor: '#FDECE2',
        minHeight: '160vh',
      }}
    >
      <div className="sticky top-1/4 flex flex-col items-center justify-center w-full max-w-6xl">
        <div className="relative flex items-center justify-center w-full min-h-[500px]">
          
          <div
            className="z-20 absolute transition-transform duration-150 linear"
            style={{ transform: `translateX(${-xMove}px)` }}
          >
            <img
              src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770660295/lbei505cdeepiauuntar.png"
              alt="Hourglass"
              className="w-60 md:w-[500px] h-auto drop-shadow-2xl"
            />
          </div>

          <div
            className="z-10 absolute flex gap-6 md:gap-14 transition-all duration-150 linear text-black"
            style={{
              transform: `translateX(${xMove}px)`,
              opacity: timerAppearance,
            }}
          >
            {[
              { val: timeLeft.days, lab: 'days' },
              { val: timeLeft.hours, lab: 'hours' },
              { val: timeLeft.minutes, lab: 'minutes' },
              { val: timeLeft.seconds, lab: 'second' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h2
                  style={{ fontFamily: 'var(--font-accent)' }}
                  className="text-4xl md:text-7xl leading-none"
                >
                  {item.val.toString().padStart(2, '0')}
                </h2>
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-xl md:text-4xl mt-2"
                >
                  {item.lab === 'hours' ? <HFix>ours</HFix> : item.lab}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 w-full px-4 text-center text-black"
          style={{
            opacity: textOpacity,
            transform: `translateY(${(1 - textOpacity) * 30}px)`,
            transition: 'all 0.5s ease-out',
          }}
        >
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-2xl md:text-6xl whitespace-nowrap"
          >
            An Uncovered truth awaits your investigation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
