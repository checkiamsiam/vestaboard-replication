"use client";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && scrollRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      locoScroll.update();

      return () => {
        locoScroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}
