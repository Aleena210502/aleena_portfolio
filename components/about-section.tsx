"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Code, Database, Globe, Smartphone, Cloud } from "lucide-react"

const skills = [
  { name: "HTML/CSS", level: 95, icon: Code },
  { name: "JavaScript", level: 90, icon: Code },
  { name: "React JS", level: 85, icon: Globe },
  { name: "Node JS", level: 80, icon: Database },
  { name: "MongoDB", level: 75, icon: Database },
  { name: "SQL", level: 80, icon: Database },
  { name: "Bootstrap", level: 85, icon: Smartphone },
  { name: "Express", level: 80, icon: Cloud },
  { name: "Git", level: 85, icon: Code },
  { name: "Python", level: 75, icon: Globe },
  { name: "C/C++", level: 70, icon: Code },
]

const softSkills = [
  "Collaboration and Teamwork",
  "Problem-Solving", 
  "Leadership",
  "Adaptability and Quick Learning",
  "Strong Communication",
  "Creative Thinking"
]

const education = [
  {
    year: "2024 - Present",
    title: "Master of Computer Application (MCA)",
    institution: "FEDERAL INSTITUTE OF SCIENCE & TECHNOLOGY (FISAT)",
    description: "Currently pursuing MCA with focus on advanced web development and database management.",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor of Science in Chemistry",
    institution: "SACRED HEART COLLEGE, CHALAKUDY",
    description: "Completed B.Sc with CGPA 7.22 (72%), developed strong analytical skills.",
  },
  {
    year: "2016 - 2020",
    title: "High School Education",
    institution: "LITTLE FLOWER PUBLIC SCHOOL, MURINGOOR",
    description: "12 Standard: 76%, 10 Standard: 83%",
  },
]

const experience = [
  {
    year: "2023",
    title: "Web Development Intern",
    company: "ICT Academy of Kerala",
    description: "15 days online internship focusing on Python web development and modern frameworks.",
  },
  {
    year: "2023",
    title: "Full Stack Development Intern",
    company: "GenZ Educatewing",
    description: "Online internship in Full Stack development using React, Django, and MySQL.",
  },
]

export function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <User className="h-6 w-6" />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Proactive and detail-oriented MCA student with a solid foundation in computer science and web development. 
                  Passionate about solving real-world problems with creative thinking and building innovative applications. 
                  Eager to contribute to a dynamic team and grow as a reliable professional.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mt-4">
                  Currently pursuing Master of Computer Application at FISAT, with hands-on experience in full-stack development, 
                  database management, and modern web technologies. Strong background in both frontend and backend development 
                  with multiple internships and personal projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Code className="h-6 w-6" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-lg">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
                
                {/* Soft Skills Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4">Soft Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-sm py-2 px-3">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Education</CardTitle>
                <CardDescription className="text-lg">Academic background and qualifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative flex items-start gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{item.year.slice(0, 4)}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {item.institution}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Experience</CardTitle>
                <CardDescription className="text-lg">Professional internships and work experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
                  <div className="space-y-6">
                    {experience.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative flex items-start gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{item.year}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {item.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
