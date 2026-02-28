import React from 'react';
import { motion } from 'framer-motion';
import './MobileServices.css';

const services = [
    {
        title: "Production Machine Learning Systems",
        offerings: [
            "End-to-end ML pipelines",
            "Forecasting & anomaly detection",
            "Computer vision systems",
            "Model serving & scalable APIs",
            "Monitoring & reliability tracking"
        ]
    },
    {
        title: "AI Automation & LLM Systems",
        offerings: [
            "Retrieval-Augmented Generation",
            "Custom AI assistants & workflow",
            "LLM fine-tuning & optimization",
            "Multi-agent orchestration",
            "Secure backend integration"
        ]
    },
    {
        title: "Frontend Development & Deployment",
        offerings: [
            "Responsive UI development",
            "API integration & state management",
            "Scalable cloud deployment",
            "Dockerized application deployment",
            "Domain configuration & hosting"
        ]
    }
];

const MobileServiceCard = ({ service }) => {
    return (
        <article className="service-grid-card">
            <div className="card-top">
                <div className="title-group">
                    <h4 className="service-main-title">
                        {service.title}
                    </h4>
                </div>
            </div>

            <div className="service-divider"></div>

            <div className="card-body">
                <ul className="service-list">
                    {service.offerings.map((item, idx) => (
                        <li key={idx}>
                            <span className="bullet-point">·</span>
                            <span className="bullet-text">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

const MobileServices = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="services-container"
        >
            <div className="services-header-area">
                <h3 className="section-title heading-spaced">EXPERTISE</h3>
            </div>

            <div className="services-grid-wrapper">
                {services.map((srv, idx) => (
                    <MobileServiceCard key={idx} service={srv} />
                ))}
            </div>
        </motion.div>
    );
};

export default MobileServices;
