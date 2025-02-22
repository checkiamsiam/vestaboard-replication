"use client";

import { Button } from "@/components/ui/button";
import { NextStepIcon } from "../icons/next-step";

export function ShopNowButton() {
  return (
    <Button
      variant="outline"
      className="group border-foreground bg-transparent hover:bg-foreground hover:border-foreground/40 font-semibold text-foreground hover:text-background sm:text-lg text-sm px-4 sm:py-5  h-9 max-w-36  transition-colors duration-800 ease-in-out"
    >
      Shop Now
      <NextStepIcon className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </Button>
  );
}
