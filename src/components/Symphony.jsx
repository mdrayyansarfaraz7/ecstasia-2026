import React from "react";
import { motion } from "framer-motion";


// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990481/bnhmo2qbmrt5si3d4dqi.png photo holder 4x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990525/yxvv8ozfhik0crgfaxsw.png photo holder 3x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990551/qdksamoucqvmpy04aart.png sherlock rightside 3x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990608/mijzmvlbhkzwlfrkudyc.png sherlock leftside 3x

//Images
// https://ibb.co/whQt1bfv
// https://ibb.co/kgmT5yCz
// https://ibb.co/dw6VSLQb
// https://ibb.co/zMNQJrH
// https://ibb.co/MybKNsDX
// https://ibb.co/tFwFtvD


const images = [
  "https://ibb.co/whQt1bfv",
  "https://ibb.co/kgmT5yCz",
  "https://ibb.co/dw6VSLQb",
  "https://ibb.co/zMNQJrH",
  "https://ibb.co/MybKNsDX",
  "https://ibb.co/tFwFtvD",
];




function Symphony() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Slice 4.png')",
        aspectRatio: "1238 / 836",
      }}
    >

      {/* Marquee */}
      <div className="w-full overflow-hidden pt-10">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative w-[220px] h-[300px]">
              {/* White Frame */}
              <img
                src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990481/bnhmo2qbmrt5si3d4dqi.png"
                alt="frame"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
              />

              {/* Photo */}
              <img
                src={img}
                alt=""
                className="absolute top-[12%] left-[12%] w-[76%] h-[76%] object-cover rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </div>


      <div className="w-full">
          <div className="w-ful">
              <h1 className="text-white flex justify-center items-center ">Symphony of Experience</h1>
          </div>
      </div>

    </div>
  );
}

export default Symphony;
