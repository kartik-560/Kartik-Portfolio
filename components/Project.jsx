'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import Image1 from "../E-commerce.png";
import Image2 from "../Travel.png";
import Image3 from "../hackgenx.png";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Built using Next.js with responsive UI and optimized performance.",
            image: Image1,
            technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
            demoUrl: "https://home-town-frontend-blush.vercel.app/",
            category: "Website"
        },
        {
            title: "Travel Website",
            description: "Modern React-based website with smooth UI and responsive design.",
            image: Image2,
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            demoUrl: "https://betterbackpackingindia.com/",
            category: "Website"
        },
        {
            title: "Hackathon Website",
            description: "Clean UI with efficient state management using Next.js.",
            image:Image3,
            technologies: ["Next.js", "React", "Tailwind CSS"],
            demoUrl: "#",
            category: "Website"
        },
        {
            title: "Weather Dashboard",
            description: "API-based weather app with modern UI.",
            image: "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "APIs", "Tailwind CSS"],
            demoUrl: "#",
            category: "Dashboards"
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

    const categories = ['All', 'Website', 'Dashboards'];

    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                        My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                    </h1>

                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-5 md:mb-6" />

                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        A selection of my recent work showcasing modern web development and clean UI design.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 md:px-5 py-2 text-xs md:text-sm rounded-full transition ${activeFilter === category
                                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 md:p-8 border border-cyan-500/20">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                            Need a website or freelance help?
                        </h3>

                        <p className="text-gray-400 text-sm md:text-base mb-5 md:mb-6 max-w-xl mx-auto">
                            I&apos;m available for freelance projects and collaborations. Let&apos;s build something great.
                        </p>

                        <a
                            href="#contact"
                            className="inline-block px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition"
                        >
                            Start a Project
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}