"use client";

import { NextMoveLink } from "@/components/ui/next-move-link";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export function HeroBanner() {
  const [showVideo, setShowVideo] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative bg-background pt-16">
      <div className="grid lg:grid-cols-2">
        {/* Left Content */}
        <div className="xl:px-36 md:px-20 sm:px-10 px-5 flex items-center lg:min-h-[70vh] max-lg:py-36 max-sm:py-20">
          <div className="max-w-[640px]">
            <h1 className="mb-5 text-3xl font-normal leading-tight text-white md:text-5xl lg:text-6xl">
              Meet the most beautiful messaging display
            </h1>
            <p className="mb-6 text-2xl text-grey-darker">
              Delight your family, guests or team with your Vestaboard.
            </p>
            <div className="flex flex-wrap gap-8">
              <NextMoveLink href="#"> Shop Vestaboard</NextMoveLink>
              <NextMoveLink href="#"> Vestaboard At Work</NextMoveLink>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative lg:absolute lg:right-0 lg:top-16 lg:h-full lg:w-1/2 rounded-2xl overflow-hidden">
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
                src="https://1984131.fs1.hubspotusercontent-na1.net/hubfs/1984131/30s-4k-16x9-Inhouse-adjusted-2.mp4"
                type="video/mp4"
              />
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

      <ModalVideo
        channel="custom"
        isOpen={showVideo}
        url="/html/video-player.html"
        onClose={() => setShowVideo(false)}
      />
    </section>
  );
}
