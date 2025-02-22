import FadeIn from "@/components/animation/fade-in";
import { NextMoveLink } from "@/components/ui/next-move-link";
import Image from "next/image";

export function VestaboardWhiteSection() {
  return (
    <div className="lg:pt-20 max-lg:pt-10 bg-secondary lg:-mb-20 max-lg:pb-10">
      <div className="lg:relative  max-lg:mb-10 lg:min-h-[70vh]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse max-lg:gap-10">
            <div className="w-full lg:w-1/2 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 ">
              <div className="h-full">
                <Image
                  src="/placeholder.svg"
                  alt="Vestaboard displaying an inspirational message in a modern living room"
                  className="rounded-xl overflow-hidden lg:hidden"
                  width={800}
                  height={800}
                />
                <Image
                  src="/placeholder.svg"
                  alt="Vestaboard displaying an inspirational message in a modern living room"
                  fill
                  className="object-cover rounded-xl overflow-hidden max-lg:hidden"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:min-h-[60vh] lg:w-1/2 flex items-center lg:pl-20">
              {/* Left side content, constrained by container */}
              <div className="flex justify-center items-center gap-10">
                <FadeIn>
                  <div className="max-w-md">
                    <h2 className="mb-6 text-4xl font-light leading-tight tracking-tight text-gray-900 lg:text-6xl">
                      Vestaboard White
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-grey-darker">
                      Brighten your day with Vestaboard White. Inspire family,
                      team members, or guests by easily sending messages from
                      anywhere with a fresh take on the award-winning messaging
                      display.
                    </p>
                    <NextMoveLink
                      href="#"
                      className="text-background"
                      textClassName="border-background"
                    >
                      Learn More
                    </NextMoveLink>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
