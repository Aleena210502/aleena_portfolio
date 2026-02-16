"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

export function AnimatedProfile() {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      className="relative mx-auto mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        variants={glowVariants}
        animate="animate"
        style={{
          background: theme === "dark" 
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Floating animation container */}
      <motion.div
        className="relative"
        variants={floatingVariants}
        animate="animate"
      >
        {/* Profile image with border animation */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
              backgroundSize: "300% 300%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "50% 100%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner border */}
          <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />

          {/* Profile image */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Aleena"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate-pulse">A</div>'
              }}
            />
          </div>

          {/* Decorative dots */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 -left-4 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-orange-500/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/4 -right-3 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.3, 1],
          borderColor: ["#a855f7", "#ec4899", "#3b82f6", "#a855f7"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  )
}
