"use client"

import { motion } from "motion/react"

const blobs = [
  { size: 800, color: "from-pink-500 to-yellow-500", xOffset: -450, yOffset: -200 },
  { size: 600, color: "from-purple-500 to-indigo-500", xOffset: 400, yOffset: 250 },
  { size: 700, color: "from-blue-500 to-teal-400", xOffset: -450, yOffset: 200 },
]

export function FluidGradientBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br ${blob.color} opacity-20 blur-3xl mix-blend-lighten`}
          style={{
            width: blob.size,
            height: blob.size,
            transform: `translate(-50%, -50%) translate(${blob.xOffset}px, ${blob.yOffset}px)`,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, -180, 0],
          }}
          transition={{
            duration: 10 + index,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: index * 1,
          }}
        />
      ))}
    </div>
  )
}
