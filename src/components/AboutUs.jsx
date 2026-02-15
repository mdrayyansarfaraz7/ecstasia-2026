import React, { useEffect, useRef, useState } from "react";

function AboutUs() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => setShow(e.isIntersecting), {
      threshold: 0.2,
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('/Slice 3.png')",
        backgroundColor: "#FDECE2",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center -mt-61 md:mt-0">
        <div
          className={`transition-all duration-700 order-1 lg:order-2 text-center lg:text-left ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-5xl sm:text-7xl lg:text-8xl mb-4 text-[#5D3317]"
          >
            About us
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#8B4513] mx-auto lg:mx-0 "
          >
            Enter a realm where creativity knows no bounds! Ecstasia, the
            long-awaited cultural extravaganza, is poised to enchant at the
            heart of the University of Engineering and Management, Kolkata. This
            annual celebration isn't just an event; it's a tradition that sets
            our campus ablaze with excitement. Ecstasia stands as the grandest
            and most anticipated fest, igniting the spirit of camaraderie and
            unleashing a wave of exhilaration.
          </p>
        </div>
        <div
          className={`flex justify-center transition-all duration-700 order-2 lg:order-1 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770655208/xu3ylvphr2jfabqhkswk.png"
            alt="Detective"
            className="h-55 sm:h-70 md:h-110 lg:h-150 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
