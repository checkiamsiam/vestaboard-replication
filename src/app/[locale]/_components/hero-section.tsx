"use client";

import { NextMoveLink } from "@/components/ui/next-move-link";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { BrandingSign } from "./branding-sign";
import { useTranslations } from "next-intl";

export function HeroBanner() {
  const t = useTranslations("section_1");
  const [showVideo, setShowVideo] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative bg-[#141416] pt-16">
      <div className="flex lg:flex-row flex-col-reverse">
        {/* Left Content */}
        <div className="xl:px-36 md:px-20  px-5 flex items-center lg:min-h-[70vh] max-lg:py-36 max-sm:py-20 lg:w-1/2">
          <div className="lg:max-w-[640px]">
            <h1 className="mb-5 text-3xl font-light leading-tight text-white md:text-5xl lg:text-[54px] ">
              {t("title")}
            </h1>
            <p className="mb-6 md:text-2xl text-lg text-gray-300 font-light">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-8">
              <NextMoveLink href="#" className="max-sm:text-xs">
                {" "}
                Shop Vestaboard
              </NextMoveLink>
              <NextMoveLink href="#" className="max-sm:text-xs">
                {" "}
                Vestaboard At Work
              </NextMoveLink>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative lg:absolute lg:right-0 lg:top-16 lg:h-full lg:w-1/2 lg:rounded-2xl overflow-hidden">
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
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          )}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute left-8 top-8 flex items-center gap-2 rounded-full  px-4 py-2 text-foreground backdrop-blur-sm transition-colors group"
          >
            <span className="group-hover:text-grey-dark transition-colors duration-300 ease-in-out">
              Watch
            </span>
            <div className="border border-foreground rounded-full p-1">
              <Play className="size-3" />
            </div>
          </button>
        </div>
      </div>
      <div className="lg:hidden -mt-14 ">
        <BrandingSign />
      </div>
      <ModalVideo
        channel="custom"
        isOpen={showVideo}
        url="/video/hero-video.mp4"
        onClose={() => setShowVideo(false)}
      />
    </section>
  );
}
