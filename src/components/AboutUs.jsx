import React, { useEffect, useRef, useState } from 'react';

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full relative flex items-start justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-16 md:pt-32"
      style={{
        backgroundImage: "url('/Slice 3.png')",
        aspectRatio: "1238 / 836",
        backgroundColor: "#FDECE2",
      }}
    >
      {/* Scroll Animation Styles */}
      <style>{`
        .slide-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 1s ease-out;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(100px);
          transition: all 1s ease-out;
        }
        .active-slide {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="flex flex-col md:flex-row items-start w-full max-w-7xl px-8 md:px-12 gap-8 md:gap-12">
        
        {/* Left Section: Image slides from Left */}
        <div className={`w-full md:w-[40%] flex justify-center slide-left ${isVisible ? 'active-slide' : ''}`}>
          <img 
            src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770655208/xu3ylvphr2jfabqhkswk.png" 
            alt="Detective Silhouette" 
            className="h-auto max-h-[75vh] object-contain"
          />
        </div>

        {/* Right Section: Writing slides from Right */}
        <div className={`w-full md:w-[60%] flex flex-col pt-4 md:pt-16 slide-right ${isVisible ? 'active-slide' : ''}`}>
          <h1 
            style={{ 
              fontFamily: "var(--font-heading, 'Mokgech', serif)", 
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              color: "#5D3317",
              marginBottom: "1.5rem",
              lineHeight: "1.1"
            }}
          >
            About us
          </h1>

          <p 
            className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed"
            style={{ 
              fontFamily: "var(--font-body, 'Karma', serif)", 
              color: "#8B4513",
              textAlign: "left",
              maxWidth: "900px", // Allows writing to stay in fewer, wider lines
              width: "100%"
            }}
          >
            Enter a realm where creativity knows no bounds! Ecstasia, the 
            long-awaited cultural extravaganza, is poised to enchant at 
            the heart of the University of Engineering and Management, 
            Kolkata. This annual celebration isn't just an event; it's a 
            tradition that sets our campus ablaze with excitement. Ecstasia 
            stands as the grandest and most anticipated fest, igniting the 
            spirit of camaraderie and unleashing a wave of exhilaration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;