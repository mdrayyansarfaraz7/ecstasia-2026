import React, { useEffect, useState } from 'react';
import DomeGallery from './DomeGallery';

function GallerySection() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // simulate gallery ready (lets layout + images initialize)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="w-full bg-cover h-screen md:h-[150vh] bg-center bg-no-repeat flex flex-col items-center overflow-hidden relative"
      style={{
        backgroundImage: "url('/Slice 7.png')",
        aspectRatio: "1238 / 836",
        minHeight: "600px"
      }}
    >

      {/* ---------- Skeleton Overlay ---------- */}
      {loading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#f4eadb]/95 backdrop-blur-sm overflow-hidden">

          {/* film grain flicker */}
          <div className="absolute inset-0 opacity-20 mix-blend-multiply animate-pulse
      bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)]
      [background-size:6px_6px]"
          />

          {/* rotating film reel */}
          <div className="relative mb-8">

            <div className="w-28 h-28 rounded-full border-4 border-amber-900/40 animate-[spin_4s_linear_infinite] flex items-center justify-center bg-[#e7dccb] shadow-xl">

              <div className="w-16 h-16 rounded-full border-2 border-amber-800/40 grid grid-cols-2 gap-2 p-2">
                <div className="bg-amber-900/30 rounded-full" />
                <div className="bg-amber-900/30 rounded-full" />
                <div className="bg-amber-900/30 rounded-full" />
                <div className="bg-amber-900/30 rounded-full" />
              </div>

            </div>

            {/* evidence stamp */}
            <div className="absolute -bottom-4 -right-6 rotate-[-18deg] border-2 border-red-900/50 text-red-900/70 px-3 py-1 text-xs tracking-widest font-bold bg-red-100/40 backdrop-blur-sm animate-pulse">
              ARCHIVE
            </div>

          </div>

          {/* typewriter text */}
          <p className="font-mono text-amber-900 text-lg tracking-widest animate-[type_3s_steps(30)_infinite] whitespace-nowrap overflow-hidden border-r-2 border-amber-900">
            DEVELOPING EVIDENCE FILES
          </p>

          {/* subtext */}
          <p className="mt-3 text-amber-800/60 text-xs tracking-[0.3em] uppercase">
            dusting negatives & restoring prints
          </p>

          {/* progress dots */}
          <div className="flex gap-2 mt-4">
            <span className="w-2 h-2 bg-amber-900/60 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-amber-900/60 rounded-full animate-bounce [animation-delay:.15s]" />
            <span className="w-2 h-2 bg-amber-900/60 rounded-full animate-bounce [animation-delay:.3s]" />
          </div>

        </div>
      )}



      {/* ---------- Gallery ---------- */}
      <div className={`w-full flex-1 relative transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <DomeGallery
          fit={isMobile ? 0.5 : 0.7}
          minRadius={isMobile ? 300 : 600}
          maxVerticalRotationDeg={0}
          dragDampening={2}
          segments={isMobile ? 20 : 34}
        />
      </div>

    </div>
  );
}

export default GallerySection;