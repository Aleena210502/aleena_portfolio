"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown, Instagram, Facebook } from "lucide-react"
import { useTheme } from "next-themes"
import { AnimatedProfile } from "@/components/animated-profile"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000" />
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-8000" />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedProfile />
          
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text animate-pulse-glow">
                Hi, I'm Aleena
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-100 mb-8 drop-shadow-lg">
              Full Stack Developer & MCA Student
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-200/90 max-w-5xl mx-auto leading-relaxed drop-shadow-md">
              Proactive and detail-oriented MCA student with a solid foundation in computer science and web development. 
              Passionate about solving real-world problems with creative thinking and building innovative applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-2xl shadow-purple-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-600/70 w-full sm:w-auto animate-pulse-glow" asChild>
              <a href="#contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white bg-white/10 backdrop-blur-md text-gray-800 hover:bg-white/20 hover:border-white/80 font-bold px-10 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 w-full sm:w-auto" asChild>
              <a href="/cv.pdf" download="aleena-cv.pdf" className="flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-8 justify-center">
            <motion.a
              href="https://github.com/Aleena210502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125"
              whileHover={{ 
                scale: 1.3, 
                rotate: 15,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aleenajoshy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125"
              whileHover={{ 
                scale: 1.3, 
                rotate: -15,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/__aleena_joshy__?fbclid=IwY2xjawP2srdleHRuA2FlbQIxMABicmlkETF2eE9vaFpKTDZ0UXdCRkJLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoa_Q4L-NerW3N0mo80AoiTb1yOT2aYdqrci30pn7ABwWTjjYjvV_s46AzDQ_aem_RQ7QIv74BdZlL6INMnxVNg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125"
              whileHover={{ 
                scale: 1.3, 
                rotate: 10,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/aleena.joshy.402974"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125"
              whileHover={{ 
                scale: 1.3, 
                rotate: -10,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="h-7 w-7" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joshy200467@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125"
              whileHover={{ 
                scale: 1.3, 
                rotate: -5,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-7 w-7" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
          whileHover={{
            scale: 1.2,
            color: "#ec4899"
          }}
        >
          <ChevronDown className="h-8 w-8 text-white/60 animate-bounce drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  )
}
    
