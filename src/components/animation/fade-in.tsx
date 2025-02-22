"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
};

const getInitialFadeIn = (direction: "up" | "down" | "left" | "right", distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return { x: 0, y: 0 };
  }
};

const FadeIn: FC<FadeInProps> = ({ children, className, delay = 0, direction = "up", distance = 100, motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { x, y } = getInitialFadeIn(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : x, y: isInView ? 0 : y }}
      transition={{ duration: 0.5, ease: "easeIn", delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
