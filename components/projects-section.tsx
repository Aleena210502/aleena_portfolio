"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "LabVerse - Smart Lab Management System",
    description: "Full-Stack Web Application for College Lab Management with role-based dashboards for students, faculty, lab assistants, and administrators. Features lab booking, experiment submissions, attendance tracking, and JWT-based authentication.",
    techStack: ["React JS", "Node JS", "Express", "MongoDB", "Bootstrap"],
    githubUrl: "https://github.com/Aleena210502/LabVerse--Project",
    featured: true,
    stars: 245,
  },
  {
    title: "Full Stack Task Manager",
    description: "CRUD App for To-Do Tracking with Django REST Framework backend and React frontend. Enables real-time task operations with MySQL database for structured data storage.",
    techStack: ["React JS", "Django", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/Aleena210502/django-react-app",
    featured: true,
    stars: 189,
  },
  {
    title: "Blood Bank Management System",
    description: "Web App for Donor and Recipient Coordination with secure admin login, city-wise donor filtering, and blood group-based search functionality. Deployed on PythonAnywhere.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python Flask", "MySQL"],
    githubUrl: "https://github.com/Aleena210502",
    featured: false,
    stars: 156,
  },
]

export function ProjectsSection() {
  console.log("ProjectsSection loaded - Firebase deployment SUCCESS");
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work and side projects. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-0 shadow-lg">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {project.stars}
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex justify-center p-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </CardContent>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="px-8 py-3" asChild>
            <a
              href="https://github.com/Aleena210502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
