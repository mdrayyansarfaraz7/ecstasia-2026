import React from "react";

const SecFallback = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#11110f] text-(--primary) font-mono overflow-hidden">
      {/* case file */}
      <div className="relative w-64 h-80 border border-(--primary)/30 bg-[#181713] overflow-hidden">
        {/* scanning line */}
        <div className="absolute inset-0 will-change-transform animate-[filescan_3s_linear_infinite]">
          <div className="h-1 w-full bg-(--primary)/50" />
        </div>

        {/* fake file lines */}
        <div className="flex flex-col gap-3 p-6 mt-6">
          <div className="h-2 bg-(--primary)/30 w-3/4 animate-pulse" />
          <div className="h-2 bg-(--primary)/30 w-full animate-pulse" />
          <div className="h-2 bg-(--primary)/30 w-2/3 animate-pulse" />
          <div className="h-2 bg-(--primary)/30 w-5/6 animate-pulse" />
          <div className="h-2 bg-(--primary)/30 w-1/2 animate-pulse" />
        </div>
      </div>

      {/* header */}
      <h1 className="mt-10 text-lg tracking-[0.5em] animate-pulse">
        CASE DOSSIER
      </h1>

      {/* typing log */}
      <p className="mt-3 text-xs tracking-[0.35em] border-r border-(--primary) pr-1 whitespace-nowrap overflow-hidden animate-[type_7s_steps(39)_infinite]">
        RECONSTRUCTING EVIDENCE
      </p>

      {/* progress */}
      <div className="flex gap-3 mt-6">
        <span className="w-2 h-2 bg-(--primary) rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-(--primary) rounded-full animate-bounce [animation-delay:.2s]" />
        <span className="w-2 h-2 bg-(--primary) rounded-full animate-bounce [animation-delay:.4s]" />
      </div>

      {/* footer */}
      <p className="absolute bottom-10 text-[10px] tracking-[0.4em] text-(--primary)/60 uppercase">
        compiling forensic timeline
      </p>
    </div>
  );
};

export default SecFallback;
