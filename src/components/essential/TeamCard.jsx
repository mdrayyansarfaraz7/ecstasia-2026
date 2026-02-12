import React from 'react';

const TeamMemberCard = ({
    name,
    year,
    course,
    imageUrl,
    position,
    linkedinURL,
    fsId = "FS2026-1025",
}) => {
    return (
        <div className="relative w-87.5 h-130 bg-[#f2e6d0] border-2 border-[#4a3728] shadow-2xl flex flex-col font-serif overflow-hidden select-none mx-auto group">

            {/* Subtle Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            {/* Header Section */}
            <div className="pt-8 pb-4 text-center">
                <div className="h-0.5 w-32 bg-[#3e2723] mx-auto opacity-40"></div>
                <p className="mt-2 text-[10px] tracking-[0.3em] font-bold text-[#3e2723]/60 uppercase">
                    Official Case File
                </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 text-[11px] border-y border-[#8d6e63]/50 bg-[#e9dbbf] uppercase font-bold text-[#5d4037]">
                <div className="p-3 border-r border-[#8d6e63]/50">
                    <p className="text-[9px] opacity-60 mb-1 leading-none">Student Name</p>
                    <p className="truncate text-[#2d1b18]">{name}</p>
                </div>
                <div className="p-3 flex flex-col">
                    <p className="text-[9px] opacity-60 mb-1 leading-none">Stream & Year</p>
                    <p className="truncate text-[#2d1b18]">{course}</p>
                    <p className="text-[10px] text-[#5d4037]/80 mt-1 leading-none">{year} Year</p>
                </div>
            </div>

            {/* Case ID and Ecstasia Image */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex flex-col">
                    <span className="text-[9px] text-[#5d4037] font-bold opacity-60">IDENTIFICATION NO.</span>
                    <span className="text-xl font-mono font-bold text-[#3e2723] tracking-tighter">
                        {fsId}
                    </span>
                </div>

                {/* Ecstasia Image */}
                <div className="w-14 h-14 flex items-center justify-center grayscale sepia brightness-75 hover:grayscale-0 transition-all duration-500 cursor-help">
                    <img
                        src="/ecstasia.png"
                        alt="Ecstasia Logo"
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=ECSTASIA'; }}
                    />
                </div>
            </div>

            {/* Main Content: Barcode (Clickable) & Photo */}
            <div className="flex flex-1 px-6 gap-6 pb-6 items-start">

                {/* Clickable Barcode Area */}
                <a
                    href={linkedinURL || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 block group/barcode"
                    title="Scan for LinkedIn Profile"
                >
                    <div className="flex flex-col justify-between h-40 opacity-80 border-l border-[#5d4037]/20 pl-2 group-hover/barcode:opacity-100 transition-opacity">
                        {[...Array(18)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[#3e2723] w-full"
                                style={{ height: `${[2, 4, 1, 6, 2, 8, 2][i % 7]}px`, marginBottom: '1px' }}
                            />
                        ))}
                    </div>
                </a>

                {/* Subject Profile Photo */}
                <div className="flex-1 relative h-52">
                    <div className="w-full h-full bg-[#dcc9a8] border-2 border-white shadow-lg overflow-hidden -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover transition-all duration-700 grayscale sepia contrast-125 brightness-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100"
                        />
                        {/* Vintage Photo Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#f2e6d0]/40"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#f2e6d0]/40"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Designation Banner */}
            <div className="mt-auto bg-[#4a3728] py-4 text-center">
                <p className="text-[#f2e6d0] text-sm font-bold tracking-[0.25em] uppercase">
                    {position}
                </p>
            </div>
        </div>
    );
};

export default TeamMemberCard;