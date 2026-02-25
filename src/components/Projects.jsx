import React from 'react';
import { motion } from 'framer-motion';
import chatbotImg from '../assets/image.png';
import etlImg from '../assets/etl_pipeline.png';
import bgSubImg from '../assets/image_copy.png';
import './Projects.css';

const projects = [
    {
        title: "AI-Powered Therapy Chatbot",
        desc: "Architected a hybrid AI engine using graph databases to boost reasoning accuracy by 40%. Engineered a real-time pipeline with caching and safety guardrails to ensure reliable, hallucination-free responses.",
        link: "https://github.com/sanjay-ks23",
        image: chatbotImg
    },
    {
        title: "Real-Time Social Media Data Pipeline",
        desc: "Developed a high-speed data extraction pipeline achieving lightning-fast query times for real-time analytics. Automated large-scale data collection from complex websites using advanced browser orchestration.",
        link: "https://github.com/sanjay-ks23",
        image: etlImg
    },
    {
        title: "Real-Time Moving Object Detection",
        desc: "Designed an efficient background subtraction algorithm optimized to run in real-time on small, resource-constrained devices. Proposed a complete optimization approach covering background modeling and autonomous updating.",
        link: "https://github.com/sanjay-ks23/Background-Subtraction-for-Moving-Object-detection",
        image: bgSubImg
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <article className="project-card">
            {project.image && (
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
            )}
            <div className="project-content">
                <h4 className="project-title">
                    {project.title}
                </h4>
                <div className="project-divider"></div>
                <p className="project-desc">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View Project On Github
                </a>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            onViewportEnter={() => {
                const scrollContainer = document.querySelector('.projects-cards-wrapper');
                if (scrollContainer) {
                    // Center the scroll symmetrically
                    scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
                }
            }}
            className="projects-container"
        >
            <h3 className="section-title heading-spaced">Projects</h3>

            <div className="projects-cards-wrapper">
                <div className="projects-cards-scroll">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} index={idx} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
