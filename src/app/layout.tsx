import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type React from "react";

import SmoothScroll from "@/components/providers/smooth-scroll";
import "./globals.css";

// Roboto font integration
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Vestaboard - The Most Beautiful Messaging Display",
  description: "Delight your family, guests or team with your Vestaboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <body className={`font-sans antialiased ${roboto.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
