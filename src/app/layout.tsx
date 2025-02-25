import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vestaboard - The Most Beautiful Messaging Display",
  description: "Delight your family, guests or team with your Vestaboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
