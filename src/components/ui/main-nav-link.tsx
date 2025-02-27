import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LinkHTMLAttributes } from "react";
import { ClassNameValue } from "tailwind-merge";

export function MainNavigationLink({
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
    <Link href={href} className={cn("block   text-foreground hover:text-grey-dark transition-colors", className)} {...rest}>
      {children}
    </Link>
  );
}
