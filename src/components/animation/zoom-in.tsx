"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type ZoomInProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  delay?: number;
};

const ZoomIn: FC<ZoomInProps> = ({ children, className, delay = 0, motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn", delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
