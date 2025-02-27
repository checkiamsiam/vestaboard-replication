import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function InspireSection() {
  const t = useTranslations("section_4");

  const cards = [
    {
      id: 1,
      title: t("card_1.title"),
      description: t("card_1.description"),
      image: "https://www.vestaboard.com/hubfs/athome.jpg",
    },
    {
      id: 2,
      title: t("card_2.title"),
      description: t("card_2.description"),
      image: "https://www.vestaboard.com/hubfs/athome.jpg",
    },
    {
      id: 3,
      title: t("card_3.title"),
      description: t("card_3.description"),
      image: "https://www.vestaboard.com/hubfs/athome.jpg",
    },
    {
      id: 4,
      title: t("card_4.title"),
      description: t("card_4.description"),
      image: "https://www.vestaboard.com/hubfs/athome.jpg",
    },
  ];

  return (
    <section className="lg:pt-40 py-10 lg:py-0 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-20 mb-16">
          <h2 className="mb-4 text-3xl md:font-light font-bold max-md:text-center tracking-tight text-background md:text-5xl lg:text-6xl max-w-xs">
            {/* Elyxm Flow <br className="max-md:hidden" /> at Work */}
            {t("title")}
          </h2>
          <div className="flex justify-end items-center">
            <p className="lg:text-lg  leading-relaxed text-gray-600 font-light lg:max-w-sm max-md:text-center">
              {t("description")}
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
                  <p className=" font-light text-gray-600">
                    {card.description}
                  </p>
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
