"use client";
import { NextMoveLink } from "@/components/ui/next-move-link";
import { NewsCard } from "./news-card";
import useEmblaCarousel from "embla-carousel-react";

const dummyImage = "https://www.vestaboard.com/hubfs/LA%20FIRES%2016x9.png";

const newsItems = [
  {
    image: dummyImage,
    title: "Inspired by the resilience of our Los Angeles community",
    author: {
      name: "Maddie Frame",
      avatar: dummyImage,
    },
    href: "/news/la-community",
  },
  {
    image: dummyImage,
    title:
      "Vestaboard Partners with NBPA to inspire players, teams and community",
    author: {
      name: "Maddie Frame",
      avatar: dummyImage,
    },
    href: "/news/nbpa-partnership",
    hasVideo: true,
  },
  {
    image: dummyImage,
    title: "Vestaboard White featured in Cool Material's Holiday Gift Guide",
    author: {
      name: "Maddie Frame",
      avatar: dummyImage,
    },
    href: dummyImage,
    tag: "COOL MATERIAL",
  },
];

export function NewsroomSection() {
   const [emblaRef] = useEmblaCarousel({ loop: false });
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="sm:text-5xl text-2xl sm:font-normal font-bold text-foreground max-sm:mb-5">
            Newsroom
          </h2>
          <div className="max-sm:-mt-5">
            <NextMoveLink href="#">View all news</NextMoveLink>
          </div>
        </div>
        <div className="overflow-hidden lg:hidden" ref={emblaRef}>
          <div className="flex">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0"
              >
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-lg:hidden">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
