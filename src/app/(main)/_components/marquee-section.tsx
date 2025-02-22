"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
}

export function InfiniteMarquee({ className }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    []
  );

  const logos = [
    { src: "/placeholder.svg", alt: "BoingBoing" },
    { src: "/placeholder.svg", alt: "The Wall Street Journal" },
    { src: "/placeholder.svg", alt: "Rolling Stone" },
    { src: "/placeholder.svg", alt: "The Week" },
    { src: "/placeholder.svg", alt: "Design" },
  ];

  useEffect(() => {
    if (!isHovered && marqueeRef.current) {
      const marquee = marqueeRef.current;
      let scrollAmount = 1;
      let animationFrame: number;

      const scrollMarquee = () => {
        marquee.scrollLeft += scrollAmount;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
        setScrollPosition(marquee.scrollLeft);
        animationFrame = requestAnimationFrame(scrollMarquee);
      };

      animationFrame = requestAnimationFrame(scrollMarquee);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isHovered]);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isHovered && embla) {
      embla.reInit();
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft = scrollPosition;
      }
    }
  }, [isHovered, embla, scrollPosition]);

  return (
    <div
      className={cn(
        "w-full bg-secondary overflow-hidden xl:px-36 md:px-20 sm:px-10 px-5 sm:py-10 lg:py-20 py-5",
        className
      )}
    >
      <div>
        <div className="flex items-center gap-8 w-1/2">
          <span className="text-sm text-grey-darker whitespace-nowrap">
            As seen in
          </span>
          <div
            className="relative w-full overflow-hidden"
            ref={isHovered ? emblaRef : marqueeRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={cn(
                "flex items-center gap-5",
                isHovered ? "touch-pan-x cursor-grab" : "flex-nowrap"
              )}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] min-w-[120px] opacity-60 transition-opacity duration-200 hover:opacity-100"
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <div>
          <Image
            src="https://www.vestaboard.com/hs-fs/hubfs/Assets/photos/FastCompany_300-min.png"
            alt="Placeholder"
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  );
}
