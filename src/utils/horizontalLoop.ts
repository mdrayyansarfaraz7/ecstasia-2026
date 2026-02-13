import { gsap } from "gsap";

export interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | boolean;
  paddingRight?: number;
  reversed?: boolean;
}

export function horizontalLoop(
  items: string | gsap.TweenTarget[],
  config: HorizontalLoopConfig = {}
) {
  const elements = gsap.utils.toArray(items) as HTMLElement[];
  
  if (!elements || elements.length === 0) {
    console.warn("horizontalLoop: No elements found");
    return gsap.timeline();
  }

  const length = elements.length;
  const startX = elements[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  let curIndex = 0;
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap =
    config.snap === false
      ? (v: number) => v
      : gsap.utils.snap(typeof config.snap === "number" ? config.snap : 1);

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  gsap.set(elements, {
    xPercent: (i: number, el: HTMLElement) => {
      const w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string
      ));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          (gsap.getProperty(el, "xPercent") as number)
      );
      return xPercents[i];
    },
  });

  gsap.set(elements, { x: 0 });

  const totalWidth =
    elements[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    (elements[length - 1].offsetWidth as number) *
      (gsap.getProperty(elements[length - 1], "scaleX") as number) +
    (parseFloat(String(config.paddingRight)) || 0);

  elements.forEach((item: HTMLElement, i: number) => {
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add(`label${i}`, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  });

  function toIndex(index: number, vars?: Partial<gsap.TweenVars>) {
    vars = vars || {};
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length;
    }

    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;

    return tl.tweenTo(time, vars);
  }

  tl.next = (vars?: Partial<gsap.TweenVars>) => toIndex(curIndex + 1, vars);
  tl.previous = (vars?: Partial<gsap.TweenVars>) =>
    toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars?: Partial<gsap.TweenVars>) =>
    toIndex(index, vars);
  tl.times = times;

  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }

  return tl;
}
