import { Link } from "react-router-dom";
import { TextAlignJustify } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => {
    if (isPlaying) {
      // Stop & destroy
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.load(); // release resource
        audioRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Destroy old instance just in case
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }

      // Create new audio instance and play
      audioRef.current = new Audio("/detective_music.mp3");
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 767px)");
    const listener = (e) => {
      setOpen(e.matches);
    };
    listener(media);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="z-200 fixed top-0 right-0 left-0 flex items-center justify-between m-3 sm:m-6 px-4 h-22 rounded-3xl bg-[#c1c6cf29] backdrop-blur-2xl">
      <div className="flex items-center flex-row">
        <img src="/uem.svg" alt="UEMK" className="h-11 md:h-17 lg:h-21" />
        <img
          src="/ecstasia.png"
          alt="Ecstasia26"
          className="h-17 md:h-23 lg:h-29 drop-shadow-[1px_1px_9px_rgba(200,200,200,0.5)]"
        />
      </div>
      <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6">
        {open && <NavLinks setOpen={setOpen} />}
        <img
          src="/icons/sound_icon.svg"
          alt="music"
          className={`mt-2 w-11 md:w-15 cursor-pointer ${isPlaying ? `drop-shadow-[1px_1px_9px_rgb(255,255,255)]` : ``}`}
          onClick={toggleMusic}
        />
        <TextAlignJustify
          className="mr-3 text-2xl text-[#ffede5] font-bold drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)] md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Nav;

function NavLinks({ setOpen }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const listener = (e) => {
      setIsMobile(e.matches);
    };
    listener(media);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <nav
      className={`flex items-center gap-7 text-[#ffede5] text-md lg:text-2xl font-heading ${
        isMobile &&
        `flex-col items-start fixed top-23 right-1 w-41 p-3 rounded-3xl bg-[#55463c]/75
    shadow-lg z-50 backdrop-blur-xl`
      }`}
    >
      <a
        href={"#hero"}
        onClick={() => {
          if (isMobile) setOpen(false);
        }}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Home
      </a>
        <a
          href={"#timeline"}
          onClick={() => {
            if (isMobile) setOpen(false);
          }}
          className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
        >
          Timeline
        </a>
      <a
        href={"#excitingEvent"}
        onClick={() => {
          if (isMobile) setOpen(false);
        }}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Exciting Event
      </a>
      <a
        href={"#ecstasiaFamily"}
        onClick={() => {
          if (isMobile) setOpen(false);
        }}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Ecstasia Family
      </a>
    </nav>
  );
}
