"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type ZoomOutProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  delay?: number;
};

const ZoomOut: FC<ZoomOutProps> = ({ children, className, delay = 0, motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isInView ? 0 : 1, scale: isInView ? 0.5 : 1 }}
      transition={{ duration: 0.5, ease: "easeIn", delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default ZoomOut;
