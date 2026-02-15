import React from 'react';

function FestTimeline() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center text-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/timeline.png')" }}
      />


      <div className="relative z-10 space-y-4 font-heading">
        <h1 className="text-4xl md:text-8xl  tracking-wide">
          Timeline
        </h1>
        <p className="text-lg md:text-4xl opacity-90">
          Coming soon...
        </p>
      </div>

    </div>
  );
}

export default FestTimeline;
