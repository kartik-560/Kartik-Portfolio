'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Zap, Heart } from 'lucide-react';

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
        <section id="about" className="py-20 md:py-24">
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
                        About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                    </h1>

                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-gray-800">

                        <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-6 md:space-y-0">

                            {/* Icon */}
                            <div className="flex justify-center md:block">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 space-y-4 text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left">
                                <h2 className="text-xl md:text-3xl font-bold text-cyan-400">
                                    Engineering Student & Freelance Developer
                                </h2>

                                <p>
                                    I&apos;m an engineering student with 1 year of hands-on experience in web development, building modern, responsive web applications using Next.js, React, and Tailwind CSS.
                                </p>

                                <p>
                                    Currently available for freelance projects, I focus on landing pages, Next.js apps,
                                    and UI improvements. I write clean, maintainable code and follow modern best practices.
                                </p>

                                <p>
                                    Outside of coding, I explore new technologies, work on personal projects,
                                    and collaborate with developers and businesses.
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                            Skills & <span className="text-purple-400">Technologies</span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                            Technologies and tools I use to build scalable and modern web applications.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4">
                                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                                </div>

                                <h3 className="text-base md:text-lg font-semibold mb-3 text-white group-hover:text-cyan-400">
                                    {skill.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 md:px-3 py-1 text-xs md:text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}