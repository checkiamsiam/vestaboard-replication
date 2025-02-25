"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return null; // No UI component needed
};

export default SmoothScroll;
