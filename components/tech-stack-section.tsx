"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazonaws
} from "react-icons/si"

const techStack = [
  { name: "HTML/CSS", icon: SiJavascript, color: "text-orange-500" },
  { name: "JavaScript", icon: SiTypescript, color: "text-yellow-500" },
  { name: "React JS", icon: SiReact, color: "text-cyan-500" },
  { name: "Node JS", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "SQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "Bootstrap", icon: SiTailwindcss, color: "text-cyan-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Python", icon: SiJavascript, color: "text-blue-500" },
  { name: "C/C++", icon: SiJavascript, color: "text-purple-500" },
]

export function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4 flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-12 w-12 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing MCA with focus on advanced web development and database management. 
                Passionate about learning new technologies and frameworks to build innovative applications. 
                Exploring AI/ML integration and modern development practices for future projects.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Cloud Native
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Microservices
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                  DevOps
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
