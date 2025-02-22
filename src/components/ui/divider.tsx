import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

export function Divider({
  className,
}: {
  className?: ClassNameValue;
}) {
  return <div className={cn("my-6 border-t border-grey-darker", className)} />;
}
