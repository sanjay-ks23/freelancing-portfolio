import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Left Side: Social Icons */}
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="social-icons"
                >
                    <a href="https://www.linkedin.com/in/sanjayks2317/" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
                    <a href="https://x.com/Sanj_AI_space" target="_blank" rel="noreferrer"><Twitter size={24} /></a>
                    <a href="https://github.com/sanjay-ks23" target="_blank" rel="noreferrer"><Github size={24} /></a>
                </motion.div>

                {/* Right Side: Get In Touch */}
                <motion.div
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="get-in-touch"
                >
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="contact-link">
                        <Mail size={24} />
                        <span className="contact-text">GET IN TOUCH</span>
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
