"use client";

import useClickOutside from "@/hooks/use-click-outside";
import { useScrollTransparency } from "@/hooks/use-scroll-transparency";
import { Logo } from "@/components/common/logo";
import { ShopNowButton } from "@/components/common/shop-now-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import { MainNavigationInDrawer } from "./main-navigation";
import LanguageSwitch from "./language-switch";

export function MainHeader() {
  const drawerRef = useRef(null);
  const headerRef = useRef(null);
  const isTransparent = useScrollTransparency(50);
  const [open, setOpen] = useState(false);
  useClickOutside([drawerRef, headerRef], () => setOpen(false));
  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          `fixed top-0 z-[200] w-full dark border-b border-transparent transition-colors duration-200 `,
          isTransparent ? "bg-primary" : "bg-black/90 backdrop-blur-sm"
        )}
      >
        <div className="flex h-16 items-center justify-between sm:px-10 px-5  relative z-[200] ">
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:bg-transparent hover:text-foreground/90 flex items-center justify-center cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <div>
                <span className="flex items-center justify-center  pointer-events-none select-none ">
                  <Hamburger toggled={open} animateOnMount />
                </span>
                <span className="sr-only">Toggle menu</span>
              </div>
            </Button>
          </div>

          <div>
            <Logo />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: !open ? 1 : 0, y: !open ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="max-sm:hidden flex gap-4 items-center"
            >
              <LanguageSwitch/>
              <ShopNowButton />
            </motion.div>
          </div>
        </div>
      </header>
      {/* /drawer */}
      <motion.div
        ref={drawerRef}
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full sm:max-w-xs h-screen bg-black/90 backdrop-blur-sm border-r-0 z-30 pt-16 shadow-lg"
      >
        <MainNavigationInDrawer />
      </motion.div>
    </>
  );
}
