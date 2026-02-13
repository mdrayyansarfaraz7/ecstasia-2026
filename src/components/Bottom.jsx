import React, { useEffect, useRef, useState } from "react";

function Bottom() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-10"
      style={{ backgroundImage: "url('/Slice 11.png')" }}
    >
      <div className="text-center">
        <h1
          className={`font-heading text-4xl sm:text-6xl lg:text-8xl text-[#2B2B2B] tracking-wide
          [text-shadow:6px_6px_6px_rgba(0,0,0,0.8)]
          transition-all duration-1000 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          Ecstasia
        </h1>

        <div className="h-4 sm:h-8" />

        <h2
          className={`font-heading text-4xl sm:text-6xl lg:text-8xl text-[#2B2B2B] tracking-wide
          [text-shadow:6px_6px_6px_rgba(0,0,0,0.8)]
          transition-all duration-1000 delay-300 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          Awaits Your Arrival
        </h2>
      </div>
    </div>
  );
}

export default Bottom;
