'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  demoUrl, 
  githubUrl, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Links Overlay */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900/80 hover:bg-cyan-500 text-white rounded-full transition-colors duration-200"
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900/80 hover:bg-purple-500 text-white rounded-full transition-colors duration-200"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs font-medium rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
