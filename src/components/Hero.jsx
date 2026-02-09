import { useEffect, useState } from "react";

function Hero() {
  const [imgScale, setImgScale] = useState(121);
  const [imgOpacity, setImgOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setImgScale(100);
      setImgOpacity(100);
    });
  }, []);

  return (
    <div
      className="w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/Slice 1.png')",
        aspectRatio: "1283 / 813",
      }}
    >
      <img
        src="/typo/Ecstasia26_hero_typo.svg"
        alt="Ecstasia26"
        className={`w-[95%] h-101.25 scale-${imgScale} opacity-${imgOpacity} transition-all duration-2700 linear`}
      />
    </div>
  );
}

export default Hero;
