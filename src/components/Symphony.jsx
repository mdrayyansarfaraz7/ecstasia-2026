import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          const items = el.querySelectorAll(".stat-item");
          gsap.fromTo(
            items,
            { opacity: 0, y: 20, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
          );

          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/Slice 4.webp')" }}
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
      <div className="relative z-10 w-full flex justify-center mt-6 md:mt-16 px-3">
        <h1 className="font-heading text-white text-[9vw] md:text-[6.5vw] leading-none whitespace-nowrap text-center relative">
          Symp
          <span className="relative inline-block">
            h<span className="absolute left-[45%]">o</span>
          </span>
          ny of Experience
        </h1>
      </div>

      <div className="relative w-full md:flex md:items-end md:justify-between mt-9 md:mt-13 ">
        {/* <img
          src="https://res.cloudinary.com/dxdzicbnt/image/upload/v1771007229/Sherlock-Transparent-Image_1_2_xbgupl.png"
          className="hidden md:block md:w-105 md:ml-6 md:mt-10"
        /> */}
        <div
          className="
    relative z-10
    w-full
    px-6 md:px-10
    mt-8 md:mt-0
    mb-20 md:mb-20
    font-accent
  "
          ref={statsRef}
          id="stats-container"
        >
          <div className="grid grid-cols-3 text-center gap-y-6 md:gap-14">
            <div className="stat-item">
              <Stat start={statsInView} number="8+" label="Years" />
            </div>
            <div className="stat-item">
              <Stat start={statsInView} number="50+" label="Events" />
            </div>
            <div className="stat-item">
              <Stat start={statsInView} number="60+" label="Partners" />
            </div>
          </div>

          <div className="flex justify-center gap-10 md:gap-40 mt-6 md:mt-10">
            <div className="stat-item">
              <Stat start={statsInView} number="7000+" label="Participants" />
            </div>
            <div className="stat-item">
              <Stat start={statsInView} number="10000+" label="Footfall" />
            </div>
          </div>
        </div>
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
function Stat({ number, label, start = false }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const target = parseInt(number.replace("+", ""));

  useEffect(() => {
    if (!start) return undefined;

    const obj = { val: 0 };
    const duration = Math.min(1.6, Math.max(0.8, Math.ceil(target / 2000)) + 0.8);
    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease: "power1.out",
      onUpdate: () => setCount(Math.floor(obj.val)) ,
      onComplete: () => setCount(target),
    });

    return () => tween.kill();
  }, [start, target]);

  return (
    <div ref={ref}>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-accent">{count}+</h2>
      <p className="text-lg md:text-3xl lg:text-4xl mt-1 md:mt-2 font-body font-bold">
        {label}
      </p>
    </div>
  );
}

export default Symphony;
