import React from "react";

function Footer() {
  return (
    <div className="bg-[#190D00] w-full flex flex-col overflow-x-hidden">
      {/* Top footer content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start py-12 px-6">
        
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/ecstasia.png"
            alt="ecstasia logo"
            className="w-40 sm:w-48 sm:justify-center lg:-ml-20 lg:w-56"
          />
        </div>

        {/* Contacts */}
        <div className="text-center sm:text-center lg:-ml-20">
          <h1 className="text-white text-4xl lg:text-5xl font-heading mb-4">
            Contacts
          </h1>
          <p className="text-white my-1 font-light text-lg lg:text-xl font-body">
            ecstasia2026@gmail.com
          </p>
          <p className="text-white my-1 font-light text-lg lg:text-xl font-body">Rayyan Sarfaraz : 9832980351</p>
          <p className="text-white my-1 font-light text-lg lg:text-xl font-body">Nilanjan Saha : 9832980351</p>
          <p className="text-white my-1 font-light text-lg lg:text-xl font-body">Meghamitra Banerjee : 9832808351</p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center sm:items-center lg:items-start lg:ml-5">
          <h1 className="text-white text-4xl lg:text-5xl font-heading mb-4">
            Socials
          </h1>
          <p className="text-white font-body text-lg lg:ml-6 lg:text-xl">Instagram</p>
          <p className="text-white font-body text-lg lg:ml-6 lg:text-xl">YouTube</p>
          <p className="text-white font-body text-lg lg:ml-6 lg:text-xl">Facebook</p>
        </div>

        {/* Map */}
        <div className="flex flex-col items-center sm:items-center">
          <h1 className="text-white text-4xl lg:text-5xl font-heading mb-4">
            Map
          </h1>
          <iframe
            src="https://maps.google.com/maps?q=University%20of%20Engineering%20and%20Management%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40 rounded-md border max-w-xs"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#2C1802] text-white text-center text-sm sm:text-lg p-4 sm:p-5 font-body">
        © 2026 Copyright ECSTASIA-26
      </div>
    </div>
  );
}

export default Footer;
