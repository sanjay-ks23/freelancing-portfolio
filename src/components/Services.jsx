import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: "AI System Development",
        offerings: [
            "Custom Model Design",
            "System Architecture",
            "Model Evaluation",
            "Deployment Strategy"
        ]
    },
    {
        title: "Forecasting & Predictive Analytics",
        offerings: [
            "Time-Series Modeling",
            "Multi-Site Generalization",
            "Performance Benchmarking",
            "Forecast Reliability"
        ]
    },
    {
        title: "LLM & Intelligent Applications",
        offerings: [
            "Retrieval-Augmented Systems",
            "Context Management",
            "Guardrails & Validation",
            "Workflow Automation"
        ]
    },
    {
        title: "Computer Vision Systems",
        offerings: [
            "Real-Time Video Processing",
            "Object Tracking",
            "Motion Detection",
            "Vision-Based Analytics"
        ]
    },
    {
        title: "ML Infrastructure & Deployment",
        offerings: [
            "API Development",
            "Containerization",
            "Cloud Deployment",
            "Monitoring & Scaling"
        ]
    },
    {
        title: "Technical Web Deployment",
        offerings: [
            "Custom Portfolio Sites",
            "Responsive Interfaces",
            "Domain Setup",
            "Hosting & Optimization"
        ]
    }
];

const ServiceCard = ({ service }) => {
    return (
        <article className="service-card">
            <h4 className="service-title">{service.title}</h4>
            <div className="service-divider"></div>
            <ul className="service-list">
                {service.offerings.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </article>
    );
};

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="services-container"
        >
            <h3 className="section-title heading-spaced">Services Offered</h3>

            <div className="services-cards-wrapper">
                <div className="services-cards-scroll">
                    {services.map((srv, idx) => (
                        <ServiceCard key={idx} service={srv} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
