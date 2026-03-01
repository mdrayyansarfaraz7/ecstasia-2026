import React from "react";

function CentralRegisteration() {
  return (
    <div
      className="
        min-h-screen
        bg-[url('/GENERAL.webp')]
        bg-cover bg-center
        flex items-center justify-center
        px-4
      "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-3xl w-full bg-[#f2e6d0] border-4 border-[#4a3728] shadow-[8px_8px_0px_rgba(74,55,40,1)] p-10 text-center">
        
        <h1 className="font-heading text-4xl md:text-5xltracking-[0.15em] text-[#1a140f] mb-6">
          Central Registration
        </h1>

        <p className="font-body text-base md:text-lg leading-relaxed text-[#2b1e16]">
          <strong className="uppercase">
            solo events only
          </strong>.
          <br /><br />
          Please fill in your details carefully to confirm your participation.
          Note that this form is strictly for{" "}
          <strong>individual registrations</strong>. Ensure all information
          provided is accurate to avoid any issues during event coordination.
        </p>

        {/* Price Section */}
        <div className="mt-8 border-t-4 border-double border-[#4a3728] pt-6">
          <p className="font-heading text-xl tracking-[0.2em] text-[#1a140f]">
            Price to Pay
          </p>
          <p className="text-3xl font-bold mt-2 text-[#4a3728]">
            ₹250
          </p>
        </div>

        {/* Registration Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf9eCuIYzF7F_ne_sC5ILhOTUkbgWHSVVgaCA7DjqmhT2swdA/viewform?usp=dialog"
          className="
            inline-block mt-8
            px-10 py-3
            bg-[#1a140f] text-[#f4e9d8]
            tracking-[0.25em]
            font-heading text-sm
            hover:bg-[#4a3728]
            transition-all duration-300
            shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
          "
           target="_blank"
        >
          Proceed to Registration Form
        </a>

      </div>
    </div>
  );
}

export default CentralRegisteration;