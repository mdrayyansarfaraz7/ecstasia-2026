import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";
import { horizontalLoop } from "../../utils/horizontalLoop";
import { TapeRow } from "./TapeRow";

gsap.registerPlugin(Observer);

function PrimaryTape() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      const rails = ref.current?.querySelectorAll<HTMLElement>(".rail");
      if (!rails?.length) return;
      const BASE = 0.9,
        BOOST = 1,
        DECAY = 1.5,
        DIR = 1;
      const loop = horizontalLoop([...rails], {
        repeat: -1,
        paddingRight: 30,
        speed: BASE,
      });
      loop.timeScale(DIR);
      const observer = Observer.create({
        target: window,
        type: "wheel,touch",
        onChangeY({ deltaY }) {
          const strength = Math.min(Math.abs(deltaY) / 100, 1);
          const direction = deltaY > 0 ? -1 : 1;
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
      className="relative mt-13 z-20 bg-[#d4be19] py-2 overflow-hidden w-full bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.85)_0px,rgba(0,0,0,0.85)_12px,transparent_12px,transparent_24px)]"
    >
      <TapeRow text="Ecstasia 2026" color="#d4be19" />
    </div>
  );
}

export default PrimaryTape;
