import React, { useEffect, useState } from 'react'
import DomeGallery from './DomeGallery';

function GallerySection() {
  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    // Check immediately on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
  <div
      // flex flex-col
      className="w-full bg-cover h-screen bg-center bg-no-repeat flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: "url('/Slice 7.png')",
        aspectRatio: "1238 / 836",
        minHeight: "600px"
      }}
    >

      
      <h1
        className="relative z-10 text-[#532301] font-bold text-center 
                   pt-10 md:pt-[8%] 
                   mb-4 md:mb-8 
                   text-[2rem] md:text-[6rem] lg:text-[10rem] leading-none"
        style={{ fontFamily: "'Mokgech', cursive" }}
      >
        Gallery
      </h1>

     
      <div className="w-full flex-1 relative">
        <DomeGallery
          fit={isMobile ? 0.5 : 0.7} 
          minRadius={isMobile ? 300 : 600}
          maxVerticalRotationDeg={0}
          dragDampening={2}
          segments={isMobile ? 20 : 34}
        />
      </div>

    </div>
  )
}

export default GallerySection;
