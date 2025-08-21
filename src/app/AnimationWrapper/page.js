"use client";

import { motion } from "framer-motion";

export default function AnimationWrapper({
  children,
  type = "fadeInUp", // default effect
  duration = 0.8,
  delay = 0,
  once = true,
  stagger = 0.15, // for multiple children
}) {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -40, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -15, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={variants[type]}
            transition={{
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1], // easeInOut cubic bezier
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={variants[type]}
          transition={{
            duration,
            delay,
            type: "spring",
            stiffness: 90,
            damping: 18,
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
