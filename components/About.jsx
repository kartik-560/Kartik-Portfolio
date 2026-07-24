'use client';

import React, { useRef, useState } from 'react';
import { Globe, Smartphone, Database, Zap, Heart } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// Custom component for the mouse-tracking spotlight effect on skills
const SkillCard = ({ skill, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative overflow-hidden rounded-xl bg-slate-900/40 border border-slate-800 p-6 transition-colors duration-300 group"
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`,
                }}
            />
            
            {/* Card Content */}
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-950 border border-slate-800 mb-5 group-hover:border-cyan-500/50 group-hover:bg-slate-900 transition-all duration-300 shadow-lg">
                    <skill.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-slate-200 group-hover:text-white transition-colors">
                    {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium bg-slate-950/80 text-slate-400 rounded border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-300 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// Custom component for the 3D tilt effect on the intro card
const TiltIntroCard = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for the 3D rotation
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="mb-20 md:mb-32 max-w-5xl mx-auto perspective-[2000px]"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl relative"
            >
                {/* Floating inner content to enhance 3D effect */}
                <div style={{ transform: "translateZ(40px)" }} className="flex flex-col md:flex-row md:items-start gap-8 lg:gap-12 relative z-10">
                    
                    {/* Interactive Avatar */}
                    <div className="flex justify-center md:block flex-shrink-0">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.1)] group cursor-pointer"
                        >
                            <Heart className="w-10 h-10 text-cyan-400 group-hover:fill-cyan-400/20 transition-all duration-300" />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-5 text-slate-300 text-base md:text-lg leading-relaxed text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            Engineering Student & Freelance Developer
                        </h2>

                        <p>
                            I&apos;m an engineering student with <span className="text-cyan-400 font-medium">1.2 year of hands-on experience</span> in web development, building modern, responsive web applications using Next.js, React, and Tailwind CSS.
                        </p>

                        <p>
                            Currently available for freelance projects, I focus on landing pages, Next.js apps, and UI improvements. I write clean, maintainable code and follow modern best practices to deliver exceptional digital experiences.
                        </p>

                        <p>
                            Outside of coding, I explore new technologies, work on personal projects, and collaborate with developers and businesses to bring ideas to life.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

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
            technologies: ["APIs", "REST APIs", "Node.js", "Express"]
        },
        {
            category: "Tools",
            icon: Zap,
            technologies: ["Git", "GitHub", "Vercel", "Figma"]
        },
        {
            category: "Services",
            icon: Smartphone,
            technologies: ["Next.js Dev", "Landing Pages", "UI Fixes", "Performance"]
        }
    ];

    return (
        <section id="about" className="relative py-14 md:py-24 md:mt-10 overflow-hidden bg-slate-950 text-slate-200">
            
            {/* Subtle Interactive Background Grid */}
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
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        About <span className="text-cyan-400">Me</span>
                    </h1>
                    
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-cyan-500/50 mx-auto rounded-full" 
                    />
                </motion.div>

                {/* Main Intro Card with 3D Tilt */}
                <TiltIntroCard />

                {/* Skills Section with Mouse-tracking Spotlight */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                            Skills & Technologies
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                            The arsenal of tools and technologies I use to build scalable, modern, and performant web applications.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
                        {skills.map((skill, index) => (
                            <SkillCard key={skill.category} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}