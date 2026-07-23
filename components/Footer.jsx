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
    <footer className="border-t border-gray-800 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Kartik Kanzode</span>
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kartik Kanzode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
