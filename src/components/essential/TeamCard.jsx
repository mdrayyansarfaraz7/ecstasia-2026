

const TeamMemberCard = ({
    name,
    year,
    course,
    imageUrl,
    position,
    isStudent,
    linkedinURL,
    fsId = "FS2026-1025",
}) => {
    return (
        <div
            className="relative mx-auto w-full max-w-90 lg:w-90
      aspect-9/13
      bg-linear-to-br from-[#f4e9d8] via-[#ead7b5] to-[#d9c29e]
      border border-[#4a3728]
      shadow-[0_0_0_2px_rgba(74,55,40,0.45)] flex flex-col overflow-hidden select-none group"
        >
            {/* PAPER TEXTURE */}
            <div className="absolute inset-0 opacity-35 mix-blend-multiply pointer-events-none
        bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

            {/* EDGE DARKEN */}
            <div className="absolute inset-0 pointer-events-none
        shadow-[inset_0_0_90px_rgba(60,40,20,0.55)]"></div>

            {/* NAME */}
            <div className="px-5 sm:px-6 pt-6 pb-3 border-b border-[#8d6e63]/60">
                <h1 className="font-accent text-xl sm:text-2xl uppercase tracking-[0.18em]
          text-[#2d1b18] drop-shadow-[0_0_0.6px_rgba(0,0,0,0.7)]">
                    {name}
                </h1>
                <div className="mt-2 h-0.5 w-32 sm:w-36 bg-[#3e2723]/50"></div>
            </div>

            {/* META */}
            {isStudent && (
                <div className="grid grid-cols-2 text-[10px] sm:text-[11px] uppercase font-bold
      bg-[#e9dbbf]/90 border-b border-[#8d6e63]/60 text-[#5d4037]">

                    <div className="p-2 sm:p-3 border-r border-[#8d6e63]/60">
                        <p className="text-[8px] sm:text-[9px] opacity-60 tracking-widest mb-1">
                            Course
                        </p>
                        <p className="text-[#2d1b18] font-accent text-sm">{course}</p>
                    </div>

                    <div className="p-2 sm:p-3">
                        <p className="text-[8px] sm:text-[9px] opacity-60 tracking-widest mb-1">
                            Year
                        </p>
                        <p className="text-[#2d1b18] text-sm">{year}</p>
                    </div>

                </div>
            )}

            {/* ID */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3">
                <div>
                    <p className="text-[8px] sm:text-[9px] text-[#8d6e63] tracking-widest">
                        IDENTIFICATION
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold text-[#3e2723]">
                        {fsId}
                    </p>
                </div>

                <img
                    src="/ecstasia.png"
                    alt="logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain
            sepia brightness-75 contrast-150
            transition-all duration-1500 ease-out
            group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100"
                />
            </div>

            {/* PHOTO + BARCODE — now truly fills remaining space */}
            <div className="flex flex-1 px-5 sm:px-6 gap-4 pb-4 min-h-0">

                {/* BARCODE */}
                {/* BARCODE — REALISTIC HORIZONTAL STACK */}
                {/* BARCODE — LARGE REALISTIC HORIZONTAL */}
                <a
                    href={linkedinURL || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 sm:w-12 block"
                >
                    <div className="h-full border-l border-[#5d4037]/30 pl-2 flex items-center">
                        <div className="w-full h-full flex flex-col justify-center opacity-85">

                            {/* quiet zone */}
                            <div className="h-3" />

                            {[
                                [1, "96%"], [2, "96%"], [2, "96%"], [2, "96%"], [2, "96%"],
                                [1, "96%"], [1, "96%"], [3, "96%"], [1, "96%"], [4, "96%"],
                                [1, "96%"], [1, "96%"], [1, "96%"], [2, "96%"],
                                [1, "96%"], [2, "96%"], [2, "96%"], [2, "96%"], [2, "96%"],
                                [1, "96%"], [1, "96%"], [3, "96%"], [1, "96%"], [4, "96%"],
                                [1, "96%"], [1, "96%"], [1, "96%"], [2, "96%"],
                                [1, "96%"], [2, "96%"], [2, "96%"], [2, "96%"], [2, "96%"],
                                [1, "96%"], [1, "96%"], [3, "96%"], [1, "96%"], [1, "96%"],
                                [1, "96%"], [1, "96%"], [1, "96%"], [2, "96%"],
                                [2, "96%"], [2, "96%"], [2, "96%"], [1, "96%"], [1, "96%"],
                                [3, "96%"], [1, "96%"], [4, "96%"], [1, "96%"], [1, "96%"],
                                [1, "96%"], [2, "96%"],
                                [1, "96%"], [2, "96%"], [2, "96%"], [2, "96%"], [2, "96%"],
                                [1, "96%"], [1, "96%"], [3, "96%"], [1, "96%"], [4, "96%"],
                                [1, "96%"], [1, "96%"], [1, "96%"], [2, "96%"],
                                [1, "96%"], [2, "96%"], [2, "96%"], [2, "96%"], [2, "96%"],
                                [2, "96%"], [1, "96%"], [1, "96%"], [3, "96%"], [1, "96%"],
                            ]
                                .map(([h, w], i) => (
                                    <div
                                        key={i}
                                        className="bg-[#3e2723]"
                                        style={{
                                            height: `${h}px`,
                                            width: w,
                                            marginBottom: `1px`,
                                            opacity: 0.7 + (i % 3) * 0.1,
                                            filter: "blur(0.2px)", // ink bleed feel
                                        }}
                                    />
                                ))}

                            {/* quiet zone */}
                            <div className="h-3" />
                        </div>
                    </div>
                </a>



                {/* PHOTO — grows fully */}
                <div className="flex-1 border-2 border-white shadow-lg overflow-hidden min-h-0">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover
              contrast-150 brightness-80 sepia-[0.75] saturate-40
              transition-all duration-1600 ease-out
              group-hover:contrast-100 group-hover:brightness-100
              group-hover:sepia-0 group-hover:saturate-100"
                    />
                </div>
            </div>

            {/* POSITION — always attached to bottom */}
            <div className="bg-[#4a3728] py-4 text-center">
                <p className="text-[#f2e6d0] font-accent text-xs sm:text-sm
          tracking-[0.32em] uppercase px-2">
                    {position}
                </p>
            </div>

            {/* STAIN */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-[#5d4037]/10 blur-xl rounded-full top-10 right-8"></div>
        </div>
    );
};

export default TeamMemberCard;
