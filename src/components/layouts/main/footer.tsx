"use client";

import { Logo } from "@/components/common/logo";
import { NewsletterForm } from "@/components/common/news-letter-form";
import { ShopNowButton } from "@/components/common/shop-now-button";
import { Divider } from "@/components/ui/divider";
import { MainNavigationLink } from "@/components/ui/main-nav-link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="bg-background text-white pt-16 pb-8">
      <div className="container   flex max-md:flex-col-reverse gap-10 md:justify-between">
        <div className="flex gap-20">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="h-14">
              <ShopNowButton />
            </div>

            <Divider />
            <nav className="grid gap-2 ">
              <MainNavigationLink href="#">Vestaboard</MainNavigationLink>
              <MainNavigationLink href="#">Vestaboard White</MainNavigationLink>
              <MainNavigationLink href="#">Product Detail</MainNavigationLink>
              <MainNavigationLink href="#">Software</MainNavigationLink>
              <MainNavigationLink href="#">
                Meet Our Customers
              </MainNavigationLink>
              <MainNavigationLink href="#">At Home</MainNavigationLink>
              <MainNavigationLink href="#">At Work</MainNavigationLink>
              <MainNavigationLink href="#"> A&D / Trade</MainNavigationLink>
              <MainNavigationLink href="#">
                Dealers / Resellers
              </MainNavigationLink>
              <MainNavigationLink href="#">Refurbished</MainNavigationLink>
              <MainNavigationLink href="#">
                Inspire Community
              </MainNavigationLink>
              <MainNavigationLink href="#">FAQs</MainNavigationLink>
              <MainNavigationLink href="#">Developers</MainNavigationLink>
              <MainNavigationLink href="/invest">Invest</MainNavigationLink>
            </nav>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <div className="h-14 flex items-center">
              <MainNavigationLink href="#">For Customers</MainNavigationLink>
            </div>

            <Divider />
            <nav className="grid gap-2">
              <MainNavigationLink href="#"> Help Center</MainNavigationLink>
              <MainNavigationLink href="#"> Newsroom</MainNavigationLink>
              <MainNavigationLink href="#"> About Us</MainNavigationLink>
              <MainNavigationLink href="#"> Contact</MainNavigationLink>
              <MainNavigationLink href="#"> Press Resources</MainNavigationLink>
              <MainNavigationLink href="#"> Affiliates</MainNavigationLink>
              <MainNavigationLink href="#"> Legal</MainNavigationLink>
            </nav>
          </div>
        </div>

        {/* Right Column - Newsletter Form */}
        <div className="space-y lg:min-w-80">
          <h3 className="text-2xl font-semibold mb-5">
            Sign up to get the latest
          </h3>
          <NewsletterForm />
        </div>
      </div>

      <div className="container">
        <Divider />
      </div>

      {/* Bottom Section */}
      <div className="container pt-8 ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <Image
              src="https://www.vestaboard.com/hubfs/Assets/photos/reddot-logo.png"
              alt="Red Dot Award 2021"
              width={140}
              height={70}
              className="opacity-80"
            />
          </div>

          <div className="text-sm text-gray-400">
            <div className="flex items-center justify-end gap-3 mb-3 font-bold">
              <MainNavigationLink
                href="#"
                className="hover:text-foreground text-xl"
              >
                <Twitter className="size-6 fill-foreground" />
              </MainNavigationLink>
              <MainNavigationLink
                href="#"
                className="hover:text-foreground text-xl"
              >
                <Facebook className="size-6 fill-foreground" />
              </MainNavigationLink>
              <MainNavigationLink
                href="#"
                className="hover:text-foreground text-xl"
              >
                <Instagram className="size-6 " />
              </MainNavigationLink>
              <MainNavigationLink
                href="#"
                className="hover:text-foreground text-xl"
              >
                <Youtube className="size-8 " />
              </MainNavigationLink>
            </div>
            <div className="flex justify-end">
              <Logo />
            </div>
            <p className="mt-1 text-end">Copyright © 2023, Vestaboard, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
