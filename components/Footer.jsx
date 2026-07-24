'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/kartik-560',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/kartik-kanzode',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:kartikkanzode@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 overflow-hidden">
        
      {/* Subtle Background Glow matching other pages */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-center space-y-8">
            
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex items-center justify-center p-3 bg-slate-900 border border-slate-800 text-slate-400 rounded-full hover:bg-slate-950 hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <p className="text-slate-400 text-sm flex items-center justify-center space-x-1.5">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-cyan-500" />
              <span>by Kartik Kanzode</span>
            </p>
            <p className="text-slate-500 text-xs tracking-wider">
              © {new Date().getFullYear()} KARTIK KANZODE. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;