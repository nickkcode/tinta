"use client";

import { motion } from "motion/react";
import { FC } from "react";

const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#A66DD4"];

const getDropletVariant = (i: number) => ({
  rotate: 360,
  pathLength: 1,
  scale: 1,
  opacity: 1,
  x: Math.cos((i * 2 * Math.PI) / colors.length) * 20,
  y: Math.sin((i * 2 * Math.PI) / colors.length) * 20,
  transition: {
    duration: 1.5,
    delay: i * 0.1,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
});

const MagicLoader: FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {colors.map((color, i) => (
          <motion.circle
            key={i}
            initial={{
              rotate: 0,
              pathLength: 0,
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={getDropletVariant(i)}
            cx="60"
            cy="60"
            r="8"
            fill={color}
            style={{
              filter: `drop-shadow(0 0 6px ${color})`,
              mixBlendMode: "screen",
            }}
          />
        ))}
        <motion.circle
          cx="60"
          cy="60"
          r="4"
          fill="#fff"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.9, 0.5, 0.9],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default MagicLoader;