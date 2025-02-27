"use client";

import { ShopNowButton } from "@/components/common/shop-now-button";
import { Divider } from "@/components/ui/divider";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { MainNavigationLink } from "../../ui/main-nav-link";
import LanguageSwitch from "./language-switch";

export function MainNavigationInDrawer() {
  return (
    <nav className="h-full flex flex-col md:px-14 px-10 py-6 overflow-scroll">
      <div className="mb-4">
        <LanguageSwitch />
      </div>
      <ShopNowButton />
      <div className="flex-1 flex flex-col mt-5">
        {/* Main Navigation */}
        <div className="space-y-3 font-bold">
          <MainNavigationLink href="#" className="text-xl">
            Home
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Vestaboard
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Vestaboard White
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Product Detail
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Software
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Meet Our Customers
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            At Home
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            At Work
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            A&D / Trade
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Dealer Program
          </MainNavigationLink>
        </div>

        <Divider />

        {/* Additional Links */}
        <div className="space-y-3 font-bold">
          <MainNavigationLink href="/invest" className="text-xl">
            Invest
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            For Customers
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Accessories & Install
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            Newsroom
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            {" "}
            About Us
          </MainNavigationLink>
          <MainNavigationLink href="#" className="text-xl">
            {" "}
            Community
          </MainNavigationLink>
        </div>

        <Divider />

        {/* Contact and Social */}
        <div className="mt-auto font-bold">
          <MainNavigationLink href="#" className="text-xl">
            {" "}
            Contact
          </MainNavigationLink>

          <div className="flex items-center gap-5 mt-10 font-bold">
            <MainNavigationLink href="#" className="hover:text-foreground text-xl">
              <Twitter className="size-6 fill-foreground" />
            </MainNavigationLink>
            <MainNavigationLink href="#" className="hover:text-foreground text-xl">
              <Facebook className="size-6 fill-foreground" />
            </MainNavigationLink>
            <MainNavigationLink href="#" className="hover:text-foreground text-xl">
              <Instagram className="size-6 " />
            </MainNavigationLink>
            <MainNavigationLink href="#" className="hover:text-foreground text-xl">
              <Youtube className="size-8 " />
            </MainNavigationLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
