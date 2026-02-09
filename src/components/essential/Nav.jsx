import { Link } from "react-router-dom";
import { TextAlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const listener = () => setIsMobile(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="z-200 fixed top-0 right-0 left-0 flex items-center justify-between m-6 px-4 h-22 rounded-3xl bg-[#c1c6cf29] backdrop-blur-2xl">
      <div className="flex items-center flex-row">
        <img src="/uem.png" alt="UEMK" className="h-11 md:h-17 lg:h-21" />
        <img
          src="/ecstasia.png"
          alt="Ecstasia26"
          className="h-17 md:h-23 lg:h-27 drop-shadow-[3px_3px_9px_rgba(250,250,250,0.5)]"
        />
      </div>
      <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6">
        {!isMobile && <NavLinks />}
        <img
          src="/icons/sound_icon.svg"
          alt="music"
          className="mt-2 w-11 md:w-15"
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

function NavLinks() {
  return (
    <nav className="flex items-center gap-7 text-[#ffede5] text-xl lg:text-2xl font-heading">
      <Link
        to={"/"}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Home
      </Link>
      <Link
        to={"/"}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Timeline
      </Link>
      <Link
        to={"/"}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Exciting Event
      </Link>
      <Link
        to={"/"}
        className="drop-shadow-[2px_2px_4px_rgba(50,50,50,0.5)]"
      >
        Ecstasia Family
      </Link>
    </nav>
  );
}
