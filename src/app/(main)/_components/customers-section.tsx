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
      <div className="container mx-auto mb-20 lg:-mt-96">
        <div className="flex items-center justify-between">
          <h2 className="sm:text-4xl text-2xl md:text-6xl lg:text-foreground text-background font-light">
            Meet Our
            <br />
            Customers
          </h2>
          <Button
            variant="outline"
            className="relative lg:border-foreground border-background lg:text-foreground text-background bg-transparent  hover:text-secondary font-light transition-colors duration-300 ease-in-out"
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
                className={`bg-transparent border-0 pl-5 flex-[0_0_90%] md:flex-[0_0_380px]`}
              >
                <div className="relative aspect-[4/4] mb-4">
                  <Image
                    src={"/placeholder.svg"}
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

        <div className="container mx-auto flex justify-between items-center sm:px-10 absolute top-1/3 sm:ml-[max(1rem,calc((100%-85rem)/2))]">
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
