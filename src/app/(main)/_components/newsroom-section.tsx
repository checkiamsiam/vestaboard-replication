import { NextMoveLink } from "@/components/ui/next-move-link";
import { NewsCard } from "./news-card";

const dummyImage = "/placeholder.svg";

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
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 sm:flex items-center justify-between">
          <h2 className="text-5xl font-normal text-foreground max-sm:mb-5">
            Newsroom
          </h2>
          <div>
            <NextMoveLink href="#">View all news</NextMoveLink>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
