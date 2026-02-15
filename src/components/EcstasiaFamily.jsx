import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EcstasiaFamily() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([0, 1, 2]);

  const cards = [
    {
      id: 1,
      title: "Fest Advisors",
      image:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770744474/isu2nrwcbeirrfskbjl8.png",
      link: "/ecstasia-family/fest-advisors",
    },
    {
      id: 2,
      title: "Faculty Heads",
      image:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770744474/isu2nrwcbeirrfskbjl8.png",
      link: "/ecstasia-family/faculty-heads",
    },
    {
      id: 3,
      title: "Core Members",
      image:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770744474/isu2nrwcbeirrfskbjl8.png",
      link: "/ecstasia-family/core-team",
    },
  ];

  /* rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[1], prev[2], prev[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const positionStyle = (pos) => {
    if (pos === 0) return "translate-x-[-110%] scale-90 z-10 opacity-90";
    if (pos === 1) return "translate-x-0 scale-105 z-30";
    return "translate-x-[110%] scale-90 z-10 opacity-90";
  };

  const viewText = "VIEW TEAM".split("");

  return (
    <div
      id="ecstasiaFamily"
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-10 overflow-hidden 
                scroll-mt-9"
      style={{ backgroundImage: "url('/Slice 9.png')" }}
    >
      {/* Title */}
      <h1
        className="text-5xl sm:text-7xl lg:text-8xl text-white mb-10 text-center"
        style={{ fontFamily: '"Mokgech", serif' }}
      >
        Ecstasia Family
      </h1>

      {/* Stage */}
      <div className="relative w-full max-w-5xl h-105 sm:h-120 md:h-140 -mt-9 flex items-center justify-center">
        {order.map((cardIndex, pos) => {
          const card = cards[cardIndex];

          return (
            <div
              key={card.id}
              onClick={() => navigate(card.link)}
              className={`
                group absolute cursor-pointer
                transition-all duration-700 ease-in-out 
                ${positionStyle(pos)}
              `}
            >
              <div className="relative w-60 sm:w-70 md:w-95 h-85 sm:h-100 md:h-115">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-fill drop-shadow-xl"
                />

                {/* TEXT AREA */}
                <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 text-center">
                  {/* ---- TITLE (fade out first) ---- */}
                  <div
                    className="
                      font-accent uppercase tracking-widest
                      text-lg lg:text-2xl text-red-700
                      transition-all duration-300
                      group-hover:opacity-0 group-hover:-translate-y-2
                    "
                  >
                    {card.title}
                  </div>

                  {/* ---- VIEW TEAM (letter stagger reveal) ---- */}
                  <div className="absolute inset-0 flex justify-center">
                    {viewText.map((char, i) => (
                      <span
                        key={i}
                        style={{ transitionDelay: `${i * 60 + 120}ms` }}
                        className="
                          inline-block font-accent uppercase
                          text-lg lg:text-2xl text-red-700
                          opacity-0 translate-y-3 skew-x-12
                          transition-all duration-300
                          group-hover:opacity-100
                          group-hover:translate-y-0
                          group-hover:skew-x-0
                        "
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EcstasiaFamily;
