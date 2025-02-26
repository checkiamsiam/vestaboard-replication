import MainFooter from "@/components/layouts/main/footer";
import { MainHeader } from "@/components/layouts/main/header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import type React from "react";

// Roboto font integration
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`font-sans antialiased ${roboto.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          {children}
          <MainFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
