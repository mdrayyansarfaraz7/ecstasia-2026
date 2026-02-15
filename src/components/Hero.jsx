import { useEffect, useState } from "react";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="hero"
      className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/Slice 1.png')",
        aspectRatio: "1238 / 836",
      }}
    >
      <img
        src="/typo/Ecstasia26_hero_typo.svg"
        alt="Ecstasia26"
        className={`
          w-300 h-161.25 transition-all duration-2100 ease-linear
             ${isLoaded
            ? "scale-100 opacity-100 filter drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] drop-shadow-[0_0_16px_rgba(255,215,150,0.28)]"
            : "scale-[0.85] opacity-0"
          }
        `}
      />
    </div>
  );
}

export default Hero;
