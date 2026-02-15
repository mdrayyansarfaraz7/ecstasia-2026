import React, { useEffect, useState } from "react";
import DomeGallery from "./DomeGallery";
import SecFallback from "./SecFallback";

function GallerySection() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // simulate gallery ready (lets layout + images initialize)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="cursor-pointer w-full bg-cover h-[70vh] md:h-[150vh] bg-center bg-no-repeat flex flex-col items-center overflow-hidden relative"
      style={{
        backgroundImage: "url('/Slice 7.png')",
        aspectRatio: "1238 / 836",
        minHeight: "600px",
      }}
    >
      {/* ---------- Fallback Overlay ---------- */}
      {loading && <SecFallback />}

      {/* ---------- Gallery ---------- */}
      <div
        className={`w-full flex-1 relative transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <DomeGallery
          fit={isMobile ? 0.8 : 0.7}
          minRadius={isMobile ? 300 : 600}
          maxVerticalRotationDeg={0}
          dragDampening={5}
          segments={isMobile ? 20 : 34}
        />
      </div>
    </div>
  );
}

export default GallerySection;
