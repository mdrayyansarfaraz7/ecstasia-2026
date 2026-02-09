import React, { useEffect, useRef, useState } from "react";
import { TriangleAlert } from "lucide-react";

interface TapeRowProps {
  text?: string;
  color?: string;
}

export const TapeRow: React.FC<TapeRowProps> = ({
  text = "caution",
  color = "#c7bb5b",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(100);

  useEffect(() => {
    const calculateRepeatCount = () => {
      if (!containerRef.current || !itemRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = itemRef.current.offsetWidth;
      if (itemWidth > 0) {
        // Calculate how many items needed to fill container + buffer for seamless loop
        const count = Math.ceil((containerWidth * 2) / itemWidth) + 10;
        setRepeatCount(count);
      }
    };
    // Calculate on mount
    calculateRepeatCount();
    // Recalculate on window resize
    window.addEventListener("resize", calculateRepeatCount);
    return () => window.removeEventListener("resize", calculateRepeatCount);
  }, [text]);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex whitespace-nowrap font-bold uppercase tracking-widest text-sm sm:text-lg lg:text-xl will-change-transform rail"
      >
        {/* Hidden measurement item */}
        <div
          ref={itemRef}
          style={{ backgroundColor: color, color: color }}
          className="px-6 uppercase flex flex-row items-center invisible absolute whitespace-nowrap arrow-left arrow-right"
        >
          <TriangleAlert className="-ml-5 text-black" />
          <span className="ml-7 text-black">{text}</span>
        </div>

        {/* Dynamically generated repeated items */}
        {Array.from({ length: repeatCount }).map((_, i) => (
          <div
            key={i}
            style={{ backgroundColor: color, color: color }}
            className="px-6 uppercase flex flex-row items-center arrow-left arrow-right"
          >
            <TriangleAlert className="-ml-5 text-black" />
            <span className="ml-7 text-black">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
