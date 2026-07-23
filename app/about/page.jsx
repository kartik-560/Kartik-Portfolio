'use client';

import { motion } from 'framer-motion';
import { Code as Code2, Globe, Smartphone, Database, Zap, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["APIs", "REST APIs", "Node.js"]
    },
    {
      category: "Tools",
      icon: Zap,
      technologies: ["Git", "GitHub", "Responsive Design"]
    },
    {
      category: "Services",
      icon: Smartphone,
      technologies: ["Next.js Development", "Landing Pages", "UI Fixes", "Performance"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
              <div className="flex items-start space-x-6">
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
                    Engineering Student & Freelance Developer
                  </h2>
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      I m an engineering student with 2+ years of hands-on experience in web development. 
                      I specialize in building modern, responsive web applications using Next.js, React, 
                      and Tailwind CSS. My focus is on creating clean, performant solutions that deliver 
                      excellent user experiences.
                    </p>
                    <p>
                      Currently available for freelance projects, I enjoy working on landing pages, 
                      Next.js websites, and UI improvements. I write clean, maintainable code and 
                      stay current with modern web development practices and tools.
                    </p>
                    <p>
                      When I m not studying or coding, I m exploring new web technologies, working on 
                      personal projects, and looking for opportunities to collaborate with other developers 
                      and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Skills & <span className="text-purple-400">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              I work with a diverse range of technologies to deliver comprehensive solutions 
              that meet your specific needs and exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.category}
                </h3>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mr-2 mb-2 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I m always excited to take on new challenges and help bring your ideas to life. 
              Let s discuss how we can create something amazing together.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Get In Touch</span>
              <Code2 className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
