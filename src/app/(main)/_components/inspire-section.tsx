import { Button } from "@/components/ui/button";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Concerts & Festivals",
    description:
      "Serve massive crowds quickly without sacrificing quality. Our tech-driven approach ensures consistently perfect pours, even at the largest venues.",
    image: "https://www.vestaboard.com/hubfs/athome.jpg",
  },
  {
    id: 2,
    title: "Weddings & Celebrations",
    description:
      "Curate an unforgettable beverage experience that matches the elegance and exclusivity of your event. Every detail, from flavor profiles to presentation, is meticulously crafted.",
    image: "https://www.vestaboard.com/hubfs/athome.jpg",
  },
  {
    id: 3,
    title: "Leading Spirit Brands",
    description:
      "Showcase your portfolio at premier events. With Elyxm Flow, each pour reflects your brand’s identity, guaranteeing a consistent, high-impact impression on attendees.",
    image: "https://www.vestaboard.com/hubfs/athome.jpg",
  },
  {
    id: 4,
    title: "Corporate & Conferences",
    description:
      "Elevate networking sessions and after-hours mixers with precision-crafted cocktails that leave a lasting impression—perfect for boosting engagement and brand reputation.",
    image: "https://www.vestaboard.com/hubfs/athome.jpg",
  },
];

export function InspireSection() {
  return (
    <section className="lg:pt-40 py-10 lg:py-0 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-20 mb-16">
          <h2 className="mb-4 text-3xl md:font-light font-bold max-md:text-center  tracking-tight text-background md:text-5xl lg:text-6xl ">
            Elyxm Flow <br className="max-md:hidden" /> at Work
          </h2>
          <div className="flex justify-end items-center">
            <p className="lg:text-lg  leading-relaxed text-background font-light lg:max-w-sm max-md:text-center">
              Elyxm Flow revolutionizes mixology for events at scale—whether
              you're energizing a festival or curating a tailored luxury
              celebration. With our blend of advanced technology and masterful
              craftsmanship, you serve consistently exceptional cocktails that
              captivate guests and streamline event operations.
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-2xl bg-secondary transition-all hover:shadow-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src={card.image}
                  alt="Vestaboard display in a modern home setting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:p-10 p-5 flex max-md:flex-col">
                <div className="md:w-2/3">
                  <h3 className="mb-2 md:text-4xl text-3xl md:font-light font-bold  ">
                    {card.title}
                  </h3>
                  <p className="text-lg font-light">{card.description}</p>
                </div>
                <div className="md:w-1/3 md:flex md:items-end md:justify-end max-md:mt-4">
                  <Button
                    variant="outline"
                    className="relative border-black text-black bg-foreground hover:bg-black hover:text-white font-light transition-colors duration-300 ease-in-out"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
