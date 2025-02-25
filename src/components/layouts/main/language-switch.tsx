"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import config from "@/config";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useTransition } from "react";

const LanguageSwitch = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  const handleChangeLanguage = (newLang: string) => {
    startTransition(() => {
      const newPath = pathname;
      router.replace(newPath, { locale: newLang, scroll: true });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src={`/flags/${currentLocale}.svg`} alt={currentLocale} width={28} height={28} priority />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-background text-foreground z-[999] border-none">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        {config.localLanguages.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => handleChangeLanguage(value)}
            className={cn(value === currentLocale ? "font-bold" : "", "font-semibold gap-3 cursor-pointer py-2")}
          >
            <Image src={`/flags/${value}.svg`} alt={currentLocale} width={20} height={20} priority />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;
