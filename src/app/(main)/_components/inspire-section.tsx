import { Button } from "@/components/ui/button";
import Image from "next/image";

export function InspireSection() {
  return (
    <section className="lg:pt-40 pt-10 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="sm:grid sm:grid-cols-2 mb-16">
          <h2 className="mb-4 text-4xl font-light tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
            Inspire your favorite people from anywhere
          </h2>
          <div className="flex justify-end items-center">
            <p className="text-lg  lg:max-w-sm">
              Vestaboard creates a focal point that enhances any setting every
              day and captures attention with a shared messaging experience.
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {/* At Home Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 transition-all hover:shadow-lg">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg"
                alt="Vestaboard display in a modern home setting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 flex max-md:flex-col">
              <div className="md:w-2/3">
                <h3 className="mb-2 text-4xl font-light ">At Home</h3>
                <p className="text-lg font-light">
                  Art, organization and inspiration in a single frame.
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
          {/* At Work Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 transition-all hover:shadow-lg">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg"
                alt="Vestaboard display in a modern home setting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 flex max-md:flex-col">
              <div className="md:w-2/3">
                <h3 className="mb-2 text-4xl font-light ">At Work</h3>
                <p className="text-lg font-light">
                  Inform and inspire the people that move your business.
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
        </div>
      </div>
    </section>
  );
}
