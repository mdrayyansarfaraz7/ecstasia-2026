import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function ExcitingEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [showFilm, setShowFilm] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [flashActive, setFlashActive] = useState(false);

  const frames = [
    "/frames/1.png",
    "/frames/2.png",
    "/frames/3.png",
    "/frames/4.png",
    "/frames/5.png",
    "/frames/6.png",
  ];

  // Initial flash on scroll
  useEffect(() => {
    if (isInView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFlashActive(true);

      setTimeout(() => {
        setFlashActive(false);
        setShowFilm(true);
      }, 900);
    }
  }, [isInView]);

  // Frame loop + flash after full cycle
  useEffect(() => {
    if (!showFilm) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        const next = prev + 1;

        if (next === frames.length) {
          setFlashActive(true);

          setTimeout(() => {
            setFlashActive(false);
          }, 800);

          return 0;
        }

        return next;
      });
    }, 2600);

    return () => clearInterval(interval);
  }, [frames.length, showFilm]);

  return (
    <section
      id="excitingEvent"
      ref={ref}
      className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-16 bg-cover bg-center overflow-hidden scroll-mt-9"
      style={{ backgroundImage: "url('/Slice 5.png')" }}
    >
      <div className="max-w-xl text-white text-center lg:text-left mb-4 lg:mb-0">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Exciting Events
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl opacity-80"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Enter a realm where creativity knows no bounds! Ecstasia, the
          long-awaited cultural extravaganza, is poised to enchant at the heart
          of the University of Engineering and Management, Kolkata. This annual
          celebration isn't just an event; it's a tradition that sets our campus
          ablaze with excitement. Ecstasia stands as the grandest and most
          anticipated fest, igniting the spirit of camaraderie and unleashing a
          wave of exhilaration.
        </p>
      </div>

      <div className="relative w-full h-65 sm:h-90 lg:h-112.5 flex items-center justify-center">
        <motion.img
          src="/camera.png"
          alt="camera"
          className="absolute bottom-0 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 w-55 sm:w-90 lg:w-155 z-10"
          animate={isInView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        />

        {flashActive && (
          <motion.div
            className="absolute rounded-full bg-white z-30 pointer-events-none
                       bottom-30 sm:bottom-42.5 lg:bottom-52.5
                       right-1/2 translate-x-1/2
                       lg:right-48.75 lg:translate-x-0
                       w-17.5 h-17.5 sm:w-22.5 sm:h-22.5 lg:w-27.5 lg:h-27.5"
            style={{ filter: "blur(10px)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 2.2, 0] }}
            transition={{ duration: 0.8 }}
          />
        )}

        <div
          className="absolute z-20 bottom-5 sm:bottom-12.5 lg:bottom-22.5
                        right-1/2 translate-x-1/2 lg:right-35 lg:translate-x-0
                        w-40 sm:w-52.5 lg:w-62.5"
        >
          <AnimatePresence mode="wait">
            {showFilm && (
              <motion.img
                key={frames[frameIndex]}
                src={frames[frameIndex]}
                alt="event frame"
                className="w-full h-auto"
                initial={
                  frameIndex === 0
                    ? { scale: 0.2, opacity: 0, x: 40 }
                    : { x: 100, opacity: 0 }
                }
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{
                  duration: frameIndex === 0 ? 1.2 : 1,
                  ease: "easeInOut",
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ExcitingEvents;
