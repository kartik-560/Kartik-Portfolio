'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import Button from '@/components/Button';

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
        <section id="contact" className="pt-20 pb-12 md:pt-24 md:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                        Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                    </h1>

                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 md:mb-8" />

                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                        Available for freelance projects, collaborations, and internships. Let’s discuss
                        how we can work together on your next web development project.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
                            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-cyan-400">
                                Send me a message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

                                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group"
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>

                            {status && (
                                <div className={`mt-6 p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-green-500/10 text-green-400'
                                        : 'bg-red-500/10 text-red-400'
                                    }`}>
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Contact Information */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
                            <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-purple-400">
                                Contact Information
                            </h3>

                            <div className="space-y-5 md:space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center space-x-4 p-3 md:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                                            <info.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                                        </div>

                                        <div>
                                            <div className="text-xs md:text-sm text-gray-400">{info.label}</div>
                                            <div className="text-white group-hover:text-cyan-400">
                                                {info.value}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
                            <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-purple-400">
                                Follow Me
                            </h3>

                            <div className="space-y-3 md:space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="flex items-center justify-between p-3 md:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                                                <social.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                                            </div>

                                            <div>
                                                <div className="text-white font-medium">{social.label}</div>
                                                <div className="text-xs md:text-sm text-gray-400">{social.username}</div>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cyan-500/20">
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400">
                                Availability
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                                I’m currently available for freelance projects, collaborations, and internships.
                            </p>

                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-green-400 text-sm md:text-base font-medium">
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