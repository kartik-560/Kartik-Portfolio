'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, Code2 } from 'lucide-react';
import { useState } from 'react';

// Using string paths to prevent compilation errors in the live preview.
// For your local Next.js environment, you can uncomment your original imports below:
import Image1 from "../E-commerce.png";
import Image2 from "../Travel.png";
import Image3 from "../hackgenx.png";

const ProjectCard = ({ title, description, image, technologies, demoUrl }) => {
    // Handle both string URLs and Next.js static image imports (objects with .src)
    const imgSrc = typeof image === 'string' ? image : image?.src || image;

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group flex flex-col h-full">
            <div className="h-48 overflow-hidden relative border-b border-slate-800">
                <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 text-xs bg-slate-950 text-slate-300 rounded border border-slate-800">{tech}</span>
                    ))}
                </div>
                <a href={demoUrl} className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-auto font-medium">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1, // Added IDs for reliable animation keys
            title: "E-Commerce Platform",
            description: "Built using Next.js with responsive UI and optimized performance.",
            image: Image1,
            technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
            demoUrl: "https://home-town-frontend-blush.vercel.app/",
            category: "Website"
        },
        {
            id: 2,
            title: "Travel Website",
            description: "Modern React-based website with smooth UI and responsive design.",
            image: Image2,
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            demoUrl: "https://betterbackpackingindia.com/",
            category: "Website"
        },
        {
            id: 3,
            title: "Hackathon Website",
            description: "Clean UI with efficient state management using Next.js.",
            image: Image3,
            technologies: ["Next.js", "React", "Tailwind CSS"],
            demoUrl: "#",
            category: "Website"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "API-based weather app with modern UI.",
            image: "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "APIs", "Tailwind CSS"],
            demoUrl: "#",
            category: "Dashboards"
        },
        {
            id: 5,
            title: "Landing Page",
            description: "Built using Next.js, responsive UI, and optimized for performance. Modern design with conversion-focused layout.",
            image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
            demoUrl: "https://example.com",
            category: "Frontend"
        },
        {
            id: 6,
            title: "Restaurant Website",
            description: "Built using React, responsive UI, and optimized for performance. Features modern design and mobile-first approach.",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            demoUrl: "https://example.com",
            category: "Frontend"
        }
    ];

    const categories = ['All', 'Website', 'Dashboards', 'Frontend'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="relative py-14 md:py-24 overflow-hidden bg-slate-950 text-slate-200">
            
            {/* Same Background Grid as About Page */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle at center, #22d3ee 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                 }} 
            />
            <div className="absolute inset-0 z-0 bg-slate-950/80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Minimalist Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        My <span className="text-cyan-400">Projects</span>
                    </h1>
                    
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-cyan-500/50 mx-auto rounded-full mb-8" 
                    />

                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        A selection of my recent work showcasing modern web development, clean UI design, and scalable architecture.
                    </p>
                </motion.div>

                {/* Interactive Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border ${
                                activeFilter === category
                                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                                    : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid with AnimatePresence for smooth filtering */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id} // Important for Framer Motion to track items
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                className="h-full"
                            >
                                <ProjectCard
                                    {...project}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Clean, Professional CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-800 text-center group">
                        
                        {/* Hover glow effect for the CTA box */}
                        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 transition-colors duration-300">
                                <Code2 className="w-8 h-8 text-cyan-400" />
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                Need a website or freelance help?
                            </h3>

                            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
                                I&apos;m currently available for freelance projects, UI improvements, and collaborations. Let&apos;s build something great together.
                            </p>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3 text-sm md:text-base font-semibold bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                            >
                                Start a Project
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}