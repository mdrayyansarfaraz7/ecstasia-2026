import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function ExcitingEvents() {
  const ref = useRef(null);
  const camRef = useRef(null);
  const flashRef = useRef(null);
  const frameImgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showFilm, setShowFilm] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [flashActive, setFlashActive] = useState(false);

  const frames = [
    "/frames/1.webp",
    "/frames/2.webp",
    "/frames/3.webp",
    "/frames/4.webp",
    "/frames/5.webp",
    "/frames/6.webp",
  ];

  // Initial flash on scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      setFlashActive(true);
      setTimeout(() => {
        setFlashActive(false);
        setShowFilm(true);
      }, 900);
    }
  }, [isInView]);

  // Frame loop
  useEffect(() => {
    if (!showFilm) return;

    const currentRef = { idx: frameIndex };

    const advance = () => {
      const prev = currentRef.idx;
      const next = prev + 1 === frames.length ? 0 : prev + 1;

      const el = frameImgRef.current;
      if (el) {
        gsap.to(el, {
          x: -113,
          opacity: 0,
          duration: 0.75,
          ease: "power1.in",
          onComplete: () => {
            currentRef.idx = next;
            setFrameIndex(next);

            if (next === 0) {
              setFlashActive(true);
              setTimeout(() => setFlashActive(false), 700);
            }
          },
        });
      } else {
        currentRef.idx = next;
        setFrameIndex(next);
      }
    };

    currentRef.idx = frameIndex;
    const interval = setInterval(advance, 2600);
    return () => clearInterval(interval);
  }, [frameIndex, frames.length, showFilm]);

  // Camera pulsing
  useEffect(() => {
    if (!isInView || !camRef.current) return;

    const tween = gsap.to(camRef.current, {
      scale: 1.05,
      duration: 1.6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    return () => tween.kill();
  }, [isInView]);

  // Flash animation
  useEffect(() => {
    const el = flashRef.current;
    if (!el) return;

    if (flashActive) {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 2.2,
          duration: 0.4,
          ease: "power1.out",
          onComplete: () => gsap.to(el, { opacity: 0, duration: 0.4 }),
        }
      );
    } else {
      gsap.set(el, { opacity: 0, scale: 0 });
    }
  }, [flashActive]);

  // Frame entrance animation
  useEffect(() => {
    const el = frameImgRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { x: 120, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: frameIndex === 0 ? 1.2 : 1,
        ease: "power2.out",
      }
    );
  }, [frameIndex, showFilm]);

  return (
    <section
      id="excitingEvent"
      ref={ref}
      className="relative w-full min-h-[50vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-16 bg-cover bg-center overflow-hidden scroll-mt-19"
      style={{ backgroundImage: "url('/Slice 5.webp')" }}
    >
      {/* TEXT SECTION */}
      <div className="relative z-30 max-w-xl text-white text-center lg:text-left mb-4 lg:mb-0">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Exciting Events
        </h1>

        <p
          className="text-base md:text-lg lg:text-xl opacity-80 mt-11 md:mt-17"
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

        <Link to="/event-category">
          <button className="relative z-50 bg-[#EFEFEF] px-6 py-1 text-lg font-accent mt-11 text-[#633604] border-3 border-[#633604] cursor-pointer">
            View all
          </button>
        </Link>
      </div>

      {/* CAMERA SECTION */}
      <div className="relative z-10 w-full h-65 sm:h-90 lg:h-112.5 flex items-center justify-center">
        <div className="relative w-full flex justify-center">
          <img
            ref={camRef}
            src="/camera.webp"
            alt="camera"
            className="w-90 lg:w-155 z-10 duration-500"
          />
        </div>

        <div
          ref={flashRef}
          className="absolute rounded-full bg-white z-30 pointer-events-none
                     bottom-30 sm:bottom-42.5 lg:bottom-52.5
                     right-1/2 translate-x-1/2
                     lg:right-48.75 lg:translate-x-0
                     w-17.5 h-17.5 sm:w-22.5 sm:h-22.5 lg:w-27.5 lg:h-27.5"
          style={{ filter: "blur(10px)", opacity: 0 }}
        />

        <div
          className="absolute z-20 bottom-5 sm:bottom-12.5 lg:bottom-22.5
                     right-1/2 translate-x-1/2 lg:right-35 lg:translate-x-0
                     w-40 sm:w-52.5 lg:w-62.5"
        >
          {showFilm && (
            <img
              ref={frameImgRef}
              key={frames[frameIndex]}
              src={frames[frameIndex]}
              alt="event frame"
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ExcitingEvents;