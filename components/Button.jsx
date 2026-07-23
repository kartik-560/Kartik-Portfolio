'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    onClick,
    href,
    type = 'button',
    ...props 
  }, ref) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950";
    
    const variants = {
      primary: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/25",
      secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 border border-gray-700",
      outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} ${className}`;

    const Component = href ? motion.a : motion.button;

    return (
      <Component
        ref={ref}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        href={href}
        type={href ? undefined : type}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
