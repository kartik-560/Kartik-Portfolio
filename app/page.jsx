'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Button from '@/components/Button';
import Link from 'next/link';
import About from '@/components/About.jsx';
import Projects from '@/components/Project.jsx';
import Contact from '@/components/Contact.jsx';
import { useState, useRef, useEffect } from 'react';


const THEMES = {
  cyan: {
    name: 'Cyber Cyan',
    primary: 'from-cyan-400 via-blue-500 to-purple-600',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bgBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    btnGradient: 'from-cyan-500 via-blue-600 to-purple-600',
    glow: 'rgba(6, 182, 212, ',
    shadow: 'shadow-cyan-500/20'
  },
  violet: {
    name: 'Hyper Violet',
    primary: 'from-purple-400 via-pink-500 to-indigo-600',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    bgBadge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    btnGradient: 'from-purple-500 via-pink-600 to-indigo-600',
    glow: 'rgba(168, 85, 247, ',
    shadow: 'shadow-purple-500/20'
  },
  emerald: {
    name: 'Matrix Emerald',
    primary: 'from-emerald-400 via-teal-500 to-cyan-500',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bgBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    btnGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    glow: 'rgba(16, 185, 129, ',
    shadow: 'shadow-emerald-500/20'
  },
  amber: {
    name: 'Solar Amber',
    primary: 'from-amber-400 via-orange-500 to-red-500',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    bgBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    btnGradient: 'from-amber-500 via-orange-600 to-red-600',
    glow: 'rgba(245, 158, 11, ',
    shadow: 'shadow-amber-500/20'
  }
};

const InteractiveBackgroundCanvas = ({ activeTheme, canvasMode, particleCount, connectionRadius }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize Particles
    const count = parseInt(particleCount, 10) || 75;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      baseRadius: Math.random() * 2 + 1,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI,
      colorOffset: Math.random()
    }));

    // Mouse & Touch Physics Interaction
    let mouse = { x: null, y: null, radius: 180, isDown: false };
    let shockwaves = [];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 220,
        alpha: 1,
        speed: 6
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const themeGlow = THEMES[activeTheme]?.glow || 'rgba(6, 182, 212, ';

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Render shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha = 1 - sw.radius / sw.maxRadius;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${themeGlow}${sw.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
        }
      }

      // Constellation Mode Logic
      if (canvasMode === 'constellation' || canvasMode === 'cybergrid') {
        const rad = parseInt(connectionRadius, 10) || 130;

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < rad) {
              const lineAlpha = (1 - dist / rad) * 0.22;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `${themeGlow}${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      // Render Cyber Grid Overlay if active
      if (canvasMode === 'cybergrid') {
        const gridSize = 40;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Update & Draw Particles
      particles.forEach((p) => {
        // Warp Mode velocity acceleration
        if (canvasMode === 'warp') {
          const cx = width / 2;
          const cy = height / 2;
          const angle = Math.atan2(p.y - cy, p.x - cx);
          const distFromCenter = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2) || 1;
          const speedFactor = (distFromCenter / 200) + 0.5;

          p.x += Math.cos(angle) * speedFactor * 1.5;
          p.y += Math.sin(angle) * speedFactor * 1.5;

          if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = cx + (Math.random() - 0.5) * 40;
            p.y = cy + (Math.random() - 0.5) * 40;
          }
        } else {
          // Normal physics
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        // Pulse animation
        p.pulse += 0.03;
        p.radius = p.baseRadius + Math.sin(p.pulse) * 0.8;

        // Mouse Interactive Repulsion / Magnetic Glow
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;

            // Push away softly
            p.x -= Math.cos(angle) * force * 2.5;
            p.y -= Math.sin(angle) * force * 2.5;

            // Draw direct tether to mouse cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${themeGlow}${0.35 * force})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw particle dot with glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${themeGlow}${p.alpha})`;
        ctx.shadowColor = `${themeGlow}0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for performance
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTheme, canvasMode, particleCount, connectionRadius]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair z-0"
    />
  );
};

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('cyan');
  const [particleCount, setParticleCount] = useState(80);
  const [canvasMode, setCanvasMode] = useState('constellation');
  const [connectionRadius, setConnectionRadius] = useState(140);
  const [showControlPanel, setShowControlPanel] = useState(false);
  const themeConfig = THEMES[activeTheme];
  return (
    <div className="min-h-screen pt-14 md:pt-16">

      <section className="min-h-[85vh] md:min-h-[90vh] flex items-center justify-center relative overflow-hidden">

        <InteractiveBackgroundCanvas
          activeTheme={activeTheme}
          canvasMode={canvasMode}
          particleCount={particleCount}
          connectionRadius={connectionRadius}
        />


        {/* Ambient Radial Gradient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-8"
            >

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 125 }}
                className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-xs md:text-sm text-cyan-400"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Student & Available for freelance work
              </motion.div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight">
                <span className="text-white">Hi, I’m </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Kartik Kanzode
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-base sm:text-lg md:text-3xl font-light text-gray-300 mb-3 md:mb-6">
                Fullstack Developer & Student Freelancer
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-md sm:max-w-xl md:max-w-3xl mx-auto mb-6 md:mb-12 leading-relaxed">
                Building clean, fast, modern web apps. Engineering student with practical skills
                in JavaScript, React, and Tailwind CSS. Available for freelance projects and collaborations.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="w-full sm:w-auto max-w-xs px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Hire Me
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>

              <Button variant="outline" className="w-full sm:w-auto max-w-xs px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
                <a href="#projects" className="flex items-center justify-center gap-2">
                  View Work
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
            >
              {[
                { number: "10+", label: "Projects Built" },
                { number: "1.2+", label: "Years Practical Exp" },
                {
                  number: "100%",
                  label: "Dedicated Delivery",
                  icon: (
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 md:p-8 bg-[#0b0f19]/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-lg flex flex-col justify-center items-center"
                >
                  <div className="text-2xl md:text-4xl font-bold mb-2 flex items-center justify-center">
                    {stat.icon}
                    <span className={index === 2 ? "text-emerald-400" : "bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent"}>
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </section>

      <About />
      <Projects />
      <Contact />

    </div>
  );
}
