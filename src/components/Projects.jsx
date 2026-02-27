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
        desc: "Designed a hybrid reasoning architecture combining graph databases and LLM pipelines to improve contextual accuracy by 40 percent. Implemented real time inference optimization and response validation guardrails to ensure reliability and safety.",
        link: "https://github.com/sanjay-ks23/GraphRAG-Psychotherapist-Agent",
        image: chatbotImg
    },
    {
        title: "Social Media Data Pipeline",
        desc: "Engineered a scalable ETL system for real time analytics, optimizing distributed data extraction and orchestration workflows to achieve low latency query performance across large scale datasets.",
        link: "https://github.com/sanjay-ks23/Social-Media-ETL-Pipeline",
        image: etlImg
    },
    {
        title: "Real Time Motion Segmentation System",
        desc: "Implemented an optimized background modeling and motion isolation framework designed for low resource edge devices, enabling real time performance under constrained compute environments.",
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
                <h3 className="section-title heading-spaced">PORTFOLIO</h3>
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
