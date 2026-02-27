import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/freelancing.jpeg';
import './About.css';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="about-container"
        >
            <h3 className="section-title heading-spaced">About</h3>

            <div className="about-content">
                <motion.img
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    src={profileImg}
                    alt="Sanjay K. Saravanan"
                    className="about-image"
                />

                <div className="about-text">
                    <h4 className="about-subtitle">Here is a little background</h4>
                    <p>
                        Hey, I'm a Machine Learning Engineer based in Chennai, India. I studied Machine Learning and Artificial Intelligence for my undergrad, and I genuinely enjoy everything about AI, ML, and coding. I strongly believe that meaningful change to make the world a better place can come from anywhere.
                    </p>
                    <p>
                        I’ve been fortunate to meet and work with people from across the globe, collaborating on systems that solve real world problems and create practical impact. Having had these experiences, I am always looking for opportunities to help people and build technology that makes a positive difference.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
