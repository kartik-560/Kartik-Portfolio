'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home'); 

  useEffect(() => {
    const handleScroll = () => {
      // 1. CHANGED: Trigger the solid background much sooner (10px instead of 50px)
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'projects', 'contact'];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(sec);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      // 2. CHANGED: Added a slight background and blur to the non-scrolled state
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
          : 'bg-slate-950/40 backdrop-blur-sm border-b border-transparent py-5' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            
          {/* Interactive Logo */}
          <Link href="#home" onClick={() => setActive('home')} className="flex items-center space-x-3 group z-50">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-slate-950 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
              Kartik.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full px-2 py-1.5">
            {navItems.map((item) => {
              const isActive = active === item.id;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActive(item.id)}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Framer Motion background pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Hire Me Button (Desktop) */}
          <div className="hidden md:block">
             <Link 
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
             >
                Hire Me
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 bg-slate-900/50 backdrop-blur-md">
              {navItems.map((item, index) => {
                const isActive = active === item.id;
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActive(item.id);
                        setIsOpen(false);
                      }}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-slate-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;