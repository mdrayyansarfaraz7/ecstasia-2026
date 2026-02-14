import { useNavigate } from 'react-router-dom';

function Timeline() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat overflow-x-hidden min-h-screen lg:min-h-0 lg:[aspect-ratio:1238/836] relative pb-10 lg:pb-0"
      style={{
        backgroundImage: "url('/Slice%206.png')",
        backgroundColor: "#dccfb8",
      }}
    >
      <div className="w-full h-full relative flex flex-col lg:block">
        
        <style>
          {`
            @keyframes swing {
              0% { transform: rotate(5deg); }
              50% { transform: rotate(-5deg); }
              100% { transform: rotate(5deg); }
            }

            .font-mokgech {
                font-family: 'Mokgech', 'UnifrakturMaguntia', cursive;
            }
          `}
        </style>

        {/* 1. Header Title */}
        <div className="order-1 mt-8 lg:mt-0 text-center w-full lg:absolute lg:top-[8%] lg:right-[7%] z-30 lg:text-right lg:w-auto">
          <h1 
            // Scaled text: text-5xl (mobile) -> text-7xl (tablet) -> text-9xl (desktop)
            className="text-5xl md:text-7xl lg:text-[9rem] leading-none text-[#532301] font-heading drop-shadow-sm" 
          >
            Timeline
          </h1>
        </div>

        {/* 2. Pocket Watch */}
        <div 
          className="order-2 relative w-[50%] md:w-[40%] mx-auto -mt-2 z-0 lg:absolute md:top-[21%] md:right-[8%] lg:top-[19%] lg:right-[0.5%] lg:w-[35%] xl:lg:w-[45%] lg:mt-0 lg:mx-0 pointer-events-none" 
          style={{ 
            transformOrigin: "top center", 
            animation: "swing 3.5s ease-in-out infinite" 
          }}
        >
          <img 
            src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770915171/qgns1thw1itnhi72lxw3.png" 
            alt="Pocket Watch" 
            className="w-full drop-shadow-2xl"
          />
        </div>

        {/* 3. Dates Container */}
        <div className="order-3 z-20 flex flex-col items-center gap-4 -mt-6 w-full lg:block lg:absolute lg:top-[42%] lg:left-[8%] lg:gap-0 lg:mt-0 lg:mb-0 lg:w-auto">
          
          {/* --- Date 1: 14th March --- */}
          <div 
            onClick={() => handleNavigation('/event/1')}
            className="relative w-[90%] max-w-sm h-32 md:h-40 lg:h-52 lg:w-104 flex items-center justify-center lg:translate-x-72 group cursor-pointer transition-all duration-300"
          >
            <img 
              src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770915215/t2cx3iar3oyws0yvcsyq.png" 
              alt="Paper Patch" 
              className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pt-1">
              <span 
                className="text-3xl md:text-5xl lg:text-[3.5rem] leading-tight text-[#550a0a] font-mokgech transition-transform duration-300 ease-out group-hover:-translate-y-2 lg:group-hover:-translate-y-3"
              >
                14th march
              </span>
              
              <span 
                className="absolute bottom-5 md:bottom-6 lg:bottom-10 text-xs md:text-base lg:text-xl text-[#532301] font-bold tracking-wide opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                style={{ fontFamily: 'Mokgech' }}
              >
                View events for Day - 1
              </span>
            </div>
          </div>

          {/* --- Date 2: 15th March --- */}
          <div 
            onClick={() => handleNavigation('/event/2')}
            className="relative w-[90%] max-w-sm h-32 md:h-40 lg:h-52 lg:w-104 flex items-center justify-center group cursor-pointer transition-all duration-300"
          >
            <img 
              src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770915215/t2cx3iar3oyws0yvcsyq.png" 
              alt="Paper Patch" 
              className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pt-1">
              <span 
                className="text-3xl md:text-5xl lg:text-[3.5rem] leading-tight text-[#550a0a] font-mokgech transition-transform duration-300 ease-out group-hover:-translate-y-2 lg:group-hover:-translate-y-3"
              >
                15th march
              </span>
              
              <span 
                className="absolute bottom-5 md:bottom-6 lg:bottom-10 text-xs md:text-base lg:text-xl text-[#532301] font-bold tracking-wide opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                style={{ fontFamily: 'Mokgech' }}
              >
                View events for Day - 2
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Timeline;

// import React from 'react'

// function Timeline() {
//   return (
//     <div
//       className="w-full bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/Slice 6.png')",
//         aspectRatio: "1238 / 836",
//       }}
//     >
//     </div>
//   )
// }

// export default Timeline