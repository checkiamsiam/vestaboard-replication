"use client";

import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

export default function CustomerSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="bg-foreground py-20">
      <div className="container mx-auto mb-20 -mt-96">
        <div className="flex md:flex-row flex-col items-center justify-between gap-5">
          <h2 className="sm:text-4xl text-3xl md:text-6xl text-foreground  lg:font-light font-bold max-md:w-full max-md:text-center">
            Meet Our {" "}
            <br className="max-md:hidden"/>
            Customers
          </h2>
          <Button
            variant="outline"
            className="relative border-foreground  text-foreground  bg-transparent  hover:text-secondary font-light transition-colors duration-300 ease-in-out"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="relative  min-h-[60vh]">
        <div
          className="overflow-hidden sm:ml-[max(1rem,calc((100%-85rem)/2))]"
          ref={emblaRef}
        >
          <div className="flex gap-6 ">
            {[1, 2, 4, 5, 6, 7, 8].map((customer, i) => (
              <div
                key={i}
                className={`bg-transparent border-0 pl-5  lg:flex-[0_0_380px] sm:flex-[0_0_210px] flex-[0_0_95%] justify-center items-center `}
              >
                <div className="relative aspect-[4/4] mb-4">
                  <Image
                    src="https://www.vestaboard.com/hubfs/image-1%20square.png"
                    alt="placeholder"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-background font-bold mb-2">
                  Wall Street Journal enhances live event experience with
                  Vestaboard
                </h3>
                <div className="flex gap-2 flex-wrap text-xs">
                  Customer Stories, Home, Vestaboard White
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto flex justify-between items-center sm:px-10 absolute lg:top-1/3 sm:top-[15%] top-[30%] sm:ml-[max(1rem,calc((100%-85rem)/2))]">
          <button
            className=" bg-black/60 backdrop-blur-sm rounded-full p-2 flex justify-center items-center"
            onClick={scrollPrev}
          >
            <ChevronLeft className="size-8 text-foreground" />
          </button>
          <button
            className=" bg-black/60 backdrop-blur-sm rounded-full p-2 flex justify-center items-center"
            onClick={scrollNext}
          >
            <ChevronRight className="size-8 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
