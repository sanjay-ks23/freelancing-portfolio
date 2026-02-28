import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import profileImg from '../assets/freelancing.jpg';
import './Hero.css';

const Hero = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-container">
            {/* Background Animated Rings */}
            <motion.div
                animate={{
                    scale: [1, 2, 2, 3, 1],
                    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                    borderRadius: ["20%", "20%", "50%", "80%", "20%"],
                }}
                transition={{
                    duration: 2.5,
                }}
                className="hero-rings"
            >
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
            </motion.div>

            <div className="hero-content">
                <h2 className="hero-subtitle heading-spaced"> </h2>
                <h1 className="hero-title">
                    <span className="hero-name">Sanjay K Saravanan</span>
                </h1>

                <div className="typewriter-container">
                    <h2 className="typewriter-text">
                        <span>
                            <Typewriter
                                words={[
                                    'Machine Learning Engineer',
                                    'Software Engineer',
                                    'Front End Developer',
                                    'AI Engineer',
                                    'Data Scientist'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h2>
                </div>

                {/* Navigation Pills */}
                <div className="nav-pills">
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="nav-pill">About</a>
                    <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="nav-pill">Clients</a>
                    <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="nav-pill">Expertise</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="nav-pill">Works</a>
                </div>

                {/* Social & Contact */}
                <div className="hero-socials">
                    <div className="social-icons-hero">
                        <a href="https://www.linkedin.com/in/sanjayks2317/" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={22} /></a>
                        <a href="https://x.com/Sanj_AI_space" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={22} /></a>
                        <a href="https://github.com/sanjay-ks23" target="_blank" rel="noreferrer" className="social-icon"><Github size={22} /></a>
                    </div>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hero-get-in-touch text-accent">
                        <Mail size={20} className="mail-icon" />
                        <span>GET IN TOUCH</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
