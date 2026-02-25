import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Wind } from 'lucide-react';
import matsImg from '../assets/mats.jpeg';
import boopathiImg from '../assets/boopathi.jpeg';
import './Experience.css';

const experiences = [
    {
        role: "Machine Learning Engineer (Freelance)",
        company: "HyER Power B.V.",
        duration: "OCT 2025 - PRESENT",
        companyLogo: <Zap size={40} color="var(--bg-primary)" />,
        companyLogoBg: "#1e3a8a", // Dark blue placeholder
        techStack: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
        ],
        desc: [
            "Designing state-of-the-art load forecasting models used within the Energy Management System (EMS).",
            "Engineered high-precision machine learning pipelines for accurate, daily predictive energy modeling.",
            "Actively collaborating across engineering teams to understand the full system architecture beyond the forecasting scope."
        ],
        recommendation: {
            text: "Sanjay joined us specifically to build out the load forecasting module, and he delivered a very clean, solid solution that integrated perfectly with our EMS. He’s sharp, easy to communicate with when issues pop up, and really makes an effort to grasp the bigger picture of the architecture. Great guy to work with.",
            author: "Mats van der Gulik",
            image: matsImg
        }
    },
    {
        role: "AI/ML Engineer (Founding Member)",
        company: "SlateMate",
        duration: "JUN 2025 - PRESENT",
        companyLogo: <Shield size={40} color="var(--bg-primary)" />,
        companyLogoBg: "#065f46", // Dark green placeholder
        techStack: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        ],
        desc: [
            "Directing Agentic AI R&D for real-time juvenile safety and automated content monitoring.",
            "Architecting Graph-RAG frameworks for high-fidelity content moderation and user well-being.",
            "Engineering scalable, intelligent safety guardrails to protect next-gen users in digital spaces."
        ]
    },
    {
        role: "Machine Learning Researcher (Contract)",
        company: "National Institute of Wind Energy",
        duration: "OCT 2024 - MAR 2025",
        companyLogo: <Wind size={40} color="var(--text-primary)" />,
        companyLogoBg: "transparent",
        techStack: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
        ],
        desc: [
            "Developed a Temporal Fusion Transformer (TFT) for AEP forecasting on live wind farm data, achieving a 7.4% NRMSE and enabling site-specific accuracy using custom defined loss function.",
            "Engineered a zero-shot generalization pipeline for cross-site deployment without retraining, significantly reducing operational deployment overhead.",
            "Quantified long-term forecasting uncertainty using Monte Carlo simulations, in collaboration with DTU Wind Energy Systems."
        ],
        recommendation: {
            text: "Sanjay was engaged for the development of an Annual Energy Predictor utilising wind farm datasets. He has successfully fulfilled all the project requirements assigned to him. His methodology is mathematically rigorous, and the final model achieved the stipulated accuracy benchmarks. He maintained proper communication during our weekly reviews and demonstrated a strong capacity for independent research work.",
            author: "Dr. Boopathi K.",
            image: boopathiImg
        }
    }
];

const ExperienceCard = ({ exp }) => {
    return (
        <article className="experience-card">
            <div className="card-header">
                <h4 className="card-role">{exp.role}</h4>
                <p className="card-company">{exp.company}</p>
                {exp.techStack && (
                    <div className="card-tech-stack">
                        {exp.techStack.map((url, i) => (
                            <img key={i} src={url} alt="tech" className="tech-icon" />
                        ))}
                    </div>
                )}
                <p className="card-duration">{exp.duration}</p>
            </div>
            <div className="card-content">
                <ul className="card-desc">
                    {exp.desc.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                {exp.recommendation && (
                    <div className="recommendation-box">
                        <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                        <p className="recommendation-text">"{exp.recommendation.text}"</p>
                        <div className="recommendation-author-container">
                            {exp.recommendation.image && (
                                <img src={exp.recommendation.image} alt={exp.recommendation.author} className="recommendation-image" />
                            )}
                            <p className="recommendation-author">— {exp.recommendation.author}</p>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            onViewportEnter={() => {
                const scrollContainer = document.querySelector('.experience-cards-wrapper');
                if (scrollContainer) {
                    // Center the scroll symmetrically
                    scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
                }
            }}
            className="experience-container"
        >
            <h3 className="section-title heading-spaced">Experience</h3>

            <div className="experience-cards-wrapper">
                <div className="experience-cards-scroll">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} exp={exp} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
