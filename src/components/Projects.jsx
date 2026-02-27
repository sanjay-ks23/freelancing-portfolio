import React from 'react';
import { motion } from 'framer-motion';
import chatbotImg from '../assets/image.png';
import etlImg from '../assets/etl_pipeline.png';
import bgSubImg from '../assets/image_copy.png';
import avoccoImg from '../assets/avocco_ecommerce.png';
import './Projects.css';

const projects = [
    {
        title: "Agentic Conversational Support System",
        desc: "Architected a hybrid AI engine using graph databases to boost reasoning accuracy by 40%. Engineered a real-time pipeline with caching and safety guardrails to ensure reliable, hallucination-free responses.",
        link: "https://github.com/sanjay-ks23/Agentic-Conversational-Support-System",
        image: chatbotImg
    },
    {
        title: "Real Time Social Media Data Pipeline",
        desc: "Developed a high-speed data extraction pipeline achieving lightning-fast query times for real-time analytics. Automated large-scale data collection from complex websites using advanced browser orchestration.",
        link: "https://github.com/sanjay-ks23/Real-time-Social-Media-Data-Pipeline",
        image: etlImg
    },
    {
        title: "Real Time Motion Segmentation System",
        desc: "Designed an efficient background subtraction algorithm optimized to run in real-time on small, resource-constrained devices. Proposed a complete optimization approach covering background modeling and autonomous updating.",
        link: "https://github.com/sanjay-ks23/Background-Subtraction-for-Moving-Object-detection",
        image: bgSubImg
    },
    {
        title: "E-Commerce Website",
        desc: "Developed a responsive frontend e-commerce platform leveraging modern web technologies to deliver a seamless shopping experience. Integrated dynamic product rendering, state management, and an intuitive user interface.",
        link: "https://avocco-web.vercel.app/",
        image: avoccoImg
    }
];

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
        >
            {project.image && (
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
            )}
            <div className="project-content">
                <div className="project-header-row">
                    <h4 className="project-title">{project.title}</h4>
                </div>
                {project.desc && (
                    <p className="project-desc">{project.desc}</p>
                )}
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="projects-container"
        >
            <div className="projects-header-area">
                <h3 className="section-title heading-spaced">MY WORKS</h3>
            </div>

            <div className="projects-cards-wrapper">
                <div className="projects-cards-scroll">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
