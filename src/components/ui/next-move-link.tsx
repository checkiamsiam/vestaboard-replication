import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkHTMLAttributes } from "react";
import { ClassNameValue } from "tailwind-merge";
import { NextStepIcon } from "../icons/next-step";

export function NextMoveLink({
  className,
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  className?: ClassNameValue;
  href: string;
} & LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-white hover:opacity-8 ",
        className
      )}
      {...rest}
    >
      <span className="pb-1 border-b border-foreground">{children}</span>
      <NextStepIcon
        className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        size={24}
      />
    </Link>
  );
}
