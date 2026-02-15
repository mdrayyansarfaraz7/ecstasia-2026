import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";
import { horizontalLoop } from "../../utils/horizontalLoop";
import { TapeRow } from "./TapeRow";

gsap.registerPlugin(Observer);

function AngledTape() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      const rails = ref.current?.querySelectorAll<HTMLElement>(".rail");
      if (!rails?.length) return;
      const BASE = 0.75,
        BOOST = 1,
        DECAY = 1.5,
        DIR = 1;
      const loop = horizontalLoop([...rails], {
        repeat: 1,
        paddingRight: 30,
        speed: BASE,
      });
      loop.timeScale(DIR);
      const observer = Observer.create({
        target: window,
        type: "wheel,touch",
        onChangeY({ deltaY }) {
          const strength = Math.min(Math.abs(deltaY) / 100, 1);
          const direction = deltaY < 0 ? -1 : 1;
          gsap
            .timeline({ defaults: { ease: "none" } })
            .to(loop, {
              timeScale: (BASE + strength * BOOST) * direction,
              duration: 0.15,
              overwrite: true,
            })
            .to(loop, {
              timeScale: BASE * direction,
              duration: DECAY,
            });
        },
      });
      return () => {
        loop.kill();
        observer.kill();
      };
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] -rotate-6 py-2 bg-[#bfa024] z-15 ] bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.85)_0px,rgba(0,0,0,0.85)_12px,transparent_12px,transparent_24px)]"
      style={{ transformOrigin: "45%" }}
    >
      <TapeRow text="The Enigma Beckons You" color="#bfa024" />
    </div>
  );
}

export default AngledTape;
