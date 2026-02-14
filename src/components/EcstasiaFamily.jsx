import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function EcstasiaFamily() {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [cards, setCards] = useState([
    { 
      id: 1,
      title: "Fest Advisors", 
      image: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770742906/vuycilnlfzqrenqvakxl.png",
      label: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770781311/byfvt32v85dobaqukdx5.png",
      link: "/ecstasia-family/fest-advisors"
    },
    { 
      id: 2,
      title: "Faculty Heads", 
      image: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770742906/vuycilnlfzqrenqvakxl.png",
      label: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770780107/h7yrd31pbnuoxld9xfda.png",
      link: "/ecstasia-family/faculty-heads"
    },
    { 
      id: 3,
      title: "Core Members", 
      image: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770742906/vuycilnlfzqrenqvakxl.png",
      label: "https://res.cloudinary.com/dooekcvv0/image/upload/v1770781678/qylzbthrzh0nqie3kqrh.png",
      link: "/ecstasia-family/core-team"
    },
  ]);

  const stepRef = useRef(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCards(prevCards => {
        const newCards = [...prevCards];
        const step = stepRef.current;
        
        // Oscillating Pattern: Move Right (L->R) then Move Left (R->L)
        // Steps 0, 1: Move content to the Right (Shift pops Left to Right?)
        // Wait, visually "Moving Right" means Left Card -> Center -> Right Card.
        // Array: [L, C, R].
        // desired: [C, R, L] (Left moved to end? No that wraps).
        // To move "content" Right: The element at Index 0 should go to Index 1.
        // [A, B, C] -> [C, A, B]. A (0) is now (1). Yes. This is `unshift(pop())`.
        
        if (step < 2) {
          // Visual Flow: Left -> Right
          const lastCard = newCards.pop();
          newCards.unshift(lastCard);
        } else {
          // Visual Flow: Right -> Left
          // [A, B, C] -> [B, C, A]. C (2) is now (1). Yes. This is `push(shift())`.
          const firstCard = newCards.shift();
          newCards.push(firstCard);
        }
        
        stepRef.current = (step + 1) % 4;
        return newCards;
      });
    }, 50000); // 50s per swap

    return () => clearInterval(interval);
  }, [isPaused]);

  // Helper to determine position styles based on index
  // Helper to determine position styles based on index
  const getCardStyle = (index) => {
    // Mobile: Stacked, slightly smaller
    // Desktop: Fan layout with V-shape
    
    const baseStyle = "w-[300px] h-[400px] md:w-[450px] md:h-[600px] transition-all duration-500";
    
    if (index === 1) {
      // Center (Focus)
      return `${baseStyle} z-40 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-4 scale-105 md:scale-115 opacity-100 drop-shadow-2xl brightness-110 hover:scale-[1.08] md:hover:scale-[1.2] hover:brightness-125`;
    } else if (index === 0) {
      // Left
      return `${baseStyle} z-20 md:absolute md:left-1/2 md:-translate-x-[160%] md:-translate-y-52 scale-95 md:scale-90 opacity-100 drop-shadow-xl brightness-95 hover:scale-[0.98] md:hover:scale-[0.95] hover:brightness-115`;
    } else {
      // Right
      return `${baseStyle} z-20 md:absolute md:left-1/2 md:translate-x-[60%] md:-translate-y-52 scale-95 md:scale-90 opacity-100 drop-shadow-xl brightness-95 hover:scale-[0.98] md:hover:scale-[0.95] hover:brightness-115`;
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/Slice 9.png')" }}
    >
      {/* Main Title */}
      <h1 
        className="relative z-40 text-6xl md:text-9xl font-heading text-white mb-16 drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]"
        style={{ fontFamily: '"Mokgech", serif' }}
      >
        Ecstasia Family
      </h1>

      <div 
        className="relative w-full max-w-7xl h-auto py-10 md:py-0 md:h-[700px] flex flex-col md:block items-center justify-center gap-8 md:gap-0 px-4 perspective-[1000px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cards.map((card, index) => {
          
          const isCenterPosition = index === 1;

          return (
            <div
              key={card.id}
              onClick={() => navigate(card.link)}
              className={`group relative flex flex-col items-center justify-end p-0 md:absolute md:top-1/2 md:-translate-y-1/2 cursor-pointer
              ${getCardStyle(index)}`}
            >
              {/* Card Background Image - Full Cover */}
              <img 
                src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770744474/isu2nrwcbeirrfskbjl8.png" 
                alt="Card Frame" 
                className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-2xl"
              />

              {/* Person Image */}
              <div className="relative z-10 w-[80%] h-[70%] mb-[15%] flex items-end justify-center overflow-hidden pointer-events-none">
                 <img 
                  src={card.image} 
                  alt={card.title} 
                  className={`object-contain object-bottom mix-blend-multiply opacity-95 grayscale-[0.1] contrast-125 drop-shadow-sm transition-all duration-500
                    ${isCenterPosition ? 'h-[105%] w-auto' : 'h-[100%] w-full'}`}
                />

              </div>

              {/* Card Label */}
              <div className="absolute bottom-[17%] left-0 w-full flex justify-center z-30 pointer-events-none">
                <img 
                  src={card.label} 
                  alt={`${card.title} Label`} 
                  className="w-[70%] opacity-100 mix-blend-multiply drop-shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default EcstasiaFamily;
