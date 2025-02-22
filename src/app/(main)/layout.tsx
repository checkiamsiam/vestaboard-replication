import MainFooter from "@/components/layouts/main/footer";
import { MainHeader } from "@/components/layouts/main/header";
import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <MainHeader />
      {children}
      <MainFooter />
    </main>
  );
}
