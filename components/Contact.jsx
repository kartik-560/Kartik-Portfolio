'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });

                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Try again later.'
                });
            }
        } catch (err) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again.'
            });
        }

        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "kartikkanzode@gmail.com",
            href: "mailto:kartikkanzode@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9356851845",
            href: "tel:+919356851845"
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/kartik-560",
            username: "@kartik-560"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kartik-kanzode",
            username: "/in/kartik-kanzode"
        },
    ];

    return (
        <section id="contact" className="relative py-14 md:py-24 overflow-hidden bg-slate-950 text-slate-200">
            
            {/* Same Background Grid as About & Projects Pages */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle at center, #22d3ee 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                 }} 
            />
            <div className="absolute inset-0 z-0 bg-slate-950/80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h1>

                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-cyan-500/50 mx-auto rounded-full mb-8" 
                    />

                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Available for freelance projects, collaborations, and internships. Let’s discuss
                        how we can work together on your next web development project.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-start">

                    {/* Contact Form (Takes up 3/5 of the grid on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden group">
                            
                            {/* Subtle hover glow for the form container */}
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <h2 className="text-2xl font-semibold mb-8 text-white relative z-10">
                                Send me a message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                {/* Updated Button to match CTA from Projects page */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm md:text-base font-semibold bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>

                            {status && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-6 p-4 rounded-lg text-sm font-medium relative z-10 border ${
                                        status.type === 'success'
                                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                            : 'bg-red-500/10 text-red-400 border-red-500/20'
                                    }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info Sidebar (Takes up 2/5 of the grid) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {/* Contact Information Card */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-lg">
                            <h3 className="text-xl font-semibold mb-6 text-white">
                                Contact Info
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center space-x-4 p-4 bg-slate-950/50 border border-slate-800/50 rounded-xl hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg group-hover:bg-slate-950 group-hover:border-cyan-500/50 transition-colors">
                                            <info.icon className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{info.label}</div>
                                            <div className="text-slate-200 text-sm group-hover:text-cyan-400 transition-colors">
                                                {info.value}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links Card */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-lg">
                            <h3 className="text-xl font-semibold mb-6 text-white">
                                Follow Me
                            </h3>
                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800/50 rounded-xl hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg group-hover:bg-slate-950 group-hover:border-cyan-500/50 transition-colors">
                                                <social.icon className="w-4 h-4 text-cyan-400" />
                                            </div>
                                            <div>
                                                <div className="text-white text-sm font-medium">{social.label}</div>
                                                <div className="text-xs text-slate-400">{social.username}</div>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status Card */}
                        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-800 shadow-lg relative overflow-hidden">
                            {/* Subtle success glow */}
                            <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                            
                            <h3 className="text-xl font-semibold mb-3 text-white relative z-10">
                                Availability
                            </h3>
                            <p className="text-sm text-slate-400 mb-6 relative z-10">
                                I’m currently available for freelance projects, collaborations, and internships.
                            </p>
                            
                            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full relative z-10">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-slate-200 text-sm font-medium">
                                    Available for work
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}