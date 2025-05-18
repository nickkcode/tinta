"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const palettes = [
  {
    title: "Stranger Things",
    colors: [
      { name: "Blood Red", hex: "#2B0000" },
      { name: "Dark Cherry", hex: "#5C1A1B" },
      { name: "Rust", hex: "#8A2B2B" },
      { name: "Fire Red", hex: "#B83A3A" },
      { name: "Neon Red", hex: "#FF4747" },
    ],
  },
  {
    title: "Barbie",
    colors: [
      { name: "Cotton Candy", hex: "#FFC0CB" },
      { name: "Barbie Pink", hex: "#FF69B4" },
      { name: "Deep Pink", hex: "#FF1493" },
      { name: "Pink Rose", hex: "#DB7093" },
      { name: "Hot Pink", hex: "#C71585" },
    ],
  },
  {
    title: "Cyberpunk 2077",
    colors: [
      { name: "Midnight", hex: "#0F0F0F" },
      { name: "Cyber Yellow", hex: "#FFD700" },
      { name: "Neon Blue", hex: "#00FFF7" },
      { name: "Neon Pink", hex: "#FF007F" },
      { name: "Gunmetal", hex: "#1F1F1F" },
    ],
  },
  {
    title: "Wes Anderson",
    colors: [
      { name: "Dust Rose", hex: "#E0A899" },
      { name: "Peach", hex: "#F4D6CC" },
      { name: "Clay", hex: "#D6C6B8" },
      { name: "Blush", hex: "#CDB4BF" },
      { name: "Slate", hex: "#A9A9A9" },
    ],
  },
  {
    title: "Google",
    colors: [
      { name: "Google Blue", hex: "#4285F4" },
      { name: "Google Red", hex: "#EA4335" },
      { name: "Google Yellow", hex: "#FBBC05" },
      { name: "Google Green", hex: "#34A853" },
      { name: "Black", hex: "#000000" },
    ],
  },
];

const cardReveal = {
  hidden: () => ({
    opacity: 0,
    rotate: -10,
    transition: { duration: 2 },
  }),
  visible: (i: number) => ({
    opacity: 1,
    rotate: i * 10,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function HeroGraphics() {
  const [index, setIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle(true);
      setIndex((prev) => (prev + 1) % palettes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(false), 2500);
    return () => clearTimeout(timeout);
  }, [index]);

  const currentPalette = palettes[index];

  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full flex items-center justify-center">
        {currentPalette.colors.map((color, i) => (
          <motion.div
            key={color.hex + i + index}
            custom={i}
            initial="hidden"
            animate={!showTitle ? "visible" : "hidden"}
            variants={cardReveal}
            className="absolute w-64 h-80 rounded-xl shadow-2xl origin-bottom -rotate-12 bg-black dark:bg-white p-2 pb-16"
            style={{
              transform: `rotate(${i * 6}deg) translateX(${i * 35 - 70}px)`,
              zIndex: currentPalette.colors.length - i,
            }}
          >
            <div
              className="relative w-full h-full rounded-md overflow-hidden"
              style={{ backgroundColor: color.hex }}
            >
              <div
                className="absolute text-6xl top-1/2 -translate-y-1/2 -rotate-90 left-1/2 -translate-x-1/2 font-cabinet font-extrabold brightness-50"
                style={{ color: color.hex }}
              >
                {color.name}
              </div>
                <div className="absolute -bottom-10 z-50 left-1/2 -translate-x-1/2 text-sm font-semibold text-white bg-black/40 dark:bg-white/40 dark:text-black backdrop-blur px-3 py-1 rounded-md">
                {color.hex}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
