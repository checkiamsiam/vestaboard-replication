"use client";

import { Card } from "@/components/ui/card";
import { NextMoveLink } from "@/components/ui/next-move-link";
import { Apple, Globe, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

export default function ComparisonSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="bg-primary py-20 px-5  lg:pb-96">
      <section className=" flex items-center justify-center ">
        <div className="max-w-6xl mx-auto w-full">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <h1 className="sm:text-4xl md:text-5xl text-3xl font-light text-foreground mb-6">
              The best of analog and digital
            </h1>
            <p className="text-lg md:text-2xl text-grey-main max-w-3xl mx-auto font-light">
              It&apos;s not a digital screen. 8,448 magical spinning flaps you
              control with your device from anywhere.
            </p>
          </div>

          {/* Cards Section */}
          <div className="max-w-6xl mx-auto flex sm:flex-row flex-col-reverse justify-center">
            {/* Left Card */}
            <Card className="z-10 bg-secondary p-8 sm:p-12 sm:pr-28 py-20 max-w-md max-sm:mx-auto">
              <h2 className="text-2xl md:text-4xl font-light mb-4">
                Controlled from your phone or desktop
              </h2>
              <p className="text-grey-darker mb-8 font-light">
                Inspire others, display lists, menus, quotes, patterns, or
                connect to hundreds of services for automated content*.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <Apple className="w-6 h-6" />
                <Smartphone className="w-6 h-6" />
                <Globe className="w-6 h-6" />
              </div>
              <NextMoveLink
                href="#"
                className="text-background"
                textClassName="border-background"
              >
                Learn More
              </NextMoveLink>

              <p className="text-xs text-grey-darker mt-8">
                *integrations and more now available with Vistaboard+
              </p>
            </Card>

            {/* Right Video Card */}
            <Card className="max-w-sm my-5 border-none rounded-2xl overflow-hidden sm:-ml-20  max-sm:mx-auto  z-30">
              {!isClient ? (
                <img
                  src="/placeholder.svg"
                  alt="Loading..."
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source
                    src="https://1984131.fs1.hubspotusercontent-na1.net/hubfs/1984131/Test_ThumbnailVideo.mp4"
                    type="video/mp4"
                  />
                </video>
              )}
            </Card>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mt-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Cards Section */}
          <div className="max-w-6xl mx-auto flex sm:flex-row flex-col justify-center items-center">
            {/* Left Card */}
            <div className="sm:-mr-40  max-sm:mx-auto  z-30">
              <img
                src="https://www.vestaboard.com/hubfs/vb-bit-persp.png"
                alt="Loading..."
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Video Card */}
            <Card className="z-10 bg-secondary p-8 sm:p-12 sm:py-32 sm:pl-20 py-20 max-w-md max-sm:mx-auto">
              <h2 className="text-2xl md:text-4xl font-light mb-4">
                Award-winning product design
              </h2>
              <p className="text-grey-darker mb-5 font-light">
                Built with the highest quality, vetted materials. Designed by a
                seasoned team of experts, it&apos;s beautiful inside and out.
              </p>

              <NextMoveLink
                href="#"
                className="text-background"
                textClassName="border-background"
              >
                Learn More
              </NextMoveLink>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
