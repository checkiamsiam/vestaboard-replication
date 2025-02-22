import { cn } from "@/lib/utils";
import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
  size?: number | string;
};

export function NextStepIcon({
  className,
  color = "currentColor",
  size = "1em",
  ...props
}: IconProps) {
  return (
    <svg
      className={cn("align-middle", className)}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M133.12 611.84h803.84v51.2H133.12zM806.144 712.3968l32.9472 39.168-237.0048 199.4752-32.9728-39.168z" />
      <path d="M658.0992 276.4544l283.5968 336.7936-39.168 32.9728-283.5968-336.7936z" />
    </svg>
  );
}
