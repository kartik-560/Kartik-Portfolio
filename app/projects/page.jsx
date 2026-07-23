'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import Image1 from "../../E-commerce.png";
import Image2 from "../../Travel.png";
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built using Next.js, responsive UI, and optimized for performance. Features modern design patterns and clean code architecture.",
      image: Image1,
      technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://home-town-frontend-blush.vercel.app/",
      // githubUrl: "https://github.com",
      category: "Website"
    },
    {
      title: "Travel Website",
      description: "Built using React, responsive UI, and optimized for performance. Clean design with smooth animations and modern layout.",
      image: Image2,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://betterbackpackingindia.com/",
      // githubUrl: "https://github.com",
      category: "Website"
    },
    {
      title: "Task Management App",
      description: "Built using Next.js, responsive UI, and optimized for performance. Features clean interface and efficient state management.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      demoUrl: "https://example.com",
      // githubUrl: "https://github.com",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "Built using React, responsive UI, and optimized for performance. Integrates weather APIs with clean, modern interface.",
      image: "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "APIs", "Tailwind CSS"],
      demoUrl: "https://example.com",
      // githubUrl: "https://github.com",
      category: "Frontend"
    },
    {
      title: "Landing Page",
      description: "Built using Next.js, responsive UI, and optimized for performance. Modern design with conversion-focused layout.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://example.com",
      // githubUrl: "https://github.com",
      category: "Frontend"
    },
    {
      title: "Restaurant Website",
      description: "Built using React, responsive UI, and optimized for performance. Features modern design and mobile-first approach.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://example.com",
      // githubUrl: "https://github.com",
      category: "Frontend"
    }
  ];

  const categories = ['All', 'Website', 'Dasboards'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent projects and freelance work. Each project demonstrates
            practical skills in modern web development and clean, responsive design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${activeFilter === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
            >
              {category === 'All' && <Filter className="w-4 h-4" />}
              <span>{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a website or freelance help?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I m available for freelance projects, collaborations, and internships.
              Let s discuss how we can work together on your next web project.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
