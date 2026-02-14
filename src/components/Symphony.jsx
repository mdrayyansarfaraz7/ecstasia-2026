import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const images = [
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771004908/_MG_2586.JPG_at77iu.jpg",
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771004982/_MG_0566.JPG_tbz4uz.jpg",
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771005027/20250311_010942.jpg_zez3so.jpg",
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771005073/_MG_1162.JPG_j39kmf.jpg",
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771005079/_MG_0001.JPG_l9vgrp.jpg",
  "https://res.cloudinary.com/dxdzicbnt/image/upload/v1771005124/_MG_4179.JPG_op95vu.jpg",
];

function Symphony() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/Slice 4.png')" }}
    >
      <div className="w-full overflow-hidden">
        <Marquee speed={60} pauseOnHover gradient={false}>
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative w-27.5 h-40 md:w-50 md:h-72.5">
              <img
                src={img}
                className="absolute top-[10%] left-[20%] w-[60%] h-[70%] object-cover z-10"
              />
              <img
                src="/rec.png"
                className="absolute inset-0 w-full h-[90%] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* symphony */}
      <div className="relative z-10 w-full  flex justify-center mt-6 md:mt-16 px-3">
        <h1 className="font-heading text-white text-[9vw] md:text-[6.5vw] leading-none whitespace-nowrap text-center relative">
          Symp
          <span className="relative inline-block">
            h<span className="absolute left-[45%]">o</span>
          </span>
          ny of Experience
        </h1>
      </div>

      <div className="relative w-full md:flex md:items-end md:justify-between">
        <img
          src="https://res.cloudinary.com/dxdzicbnt/image/upload/v1771007229/Sherlock-Transparent-Image_1_2_xbgupl.png"
          className="hidden md:block md:w-105 md:ml-6 md:mt-10"
        />

        <motion.div
          className="
    relative z-10
    w-full
    px-6 md:px-10
    mt-8 md:mt-0
    mb-20 md:mb-20
    font-accent
  "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-3 text-center gap-y-6 md:gap-14">
            <Stat number="7+" label="Years" />
            <Stat number="35+" label="Events" />
            <Stat number="50+" label="Partners" />
          </div>

          <div className="flex justify-center gap-10 md:gap-40 mt-6 md:mt-10">
            <Stat number="7000+" label="Participants" />
            <Stat number="10000+" label="Footfall" />
          </div>
        </motion.div>
      </div>

      {/* sherlock mobile */}
      <img
        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990608/mijzmvlbhkzwlfrkudyc.png"
        className="md:hidden absolute bottom-0 left-0 w-20 opacity-70"
      />

      <img
        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990551/qdksamoucqvmpy04aart.png"
        className="md:hidden absolute bottom-0 right-0 w-20 opacity-70"
      />
    </div>
  );
}
function Stat({ number, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(1);

  const target = parseInt(number.replace("+", ""));

  useEffect(() => {
    if (!inView) return;

    let start = 1;
    const duration = 1000;
    const stepTime = Math.max(10, duration / target);

    const counter = setInterval(() => {
      start += Math.ceil(target / 100);

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <h2 className="text-4xl md:text-9xl lg:text-8xl font-accent">
        {count}+
      </h2>
      <p className="text-lg md:text-3xl lg:text-4xl mt-1 md:mt-2 font-body font-bold">
        {label}
      </p>
    </div>
  );
}

export default Symphony;
