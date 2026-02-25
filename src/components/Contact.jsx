import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Home } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="contact-container"
        >
            <div className="contact-content">
                <h4 className="contact-heading">
                    I have got just what you need. <span className="underline-accent">Lets talk.</span>
                </h4>

                <h3 className="section-title-inline heading-spaced">Contact</h3>

                <div className="contact-info">
                    <div className="contact-item">
                        <Mail className="contact-icon" />
                        <a href="mailto:sanjaysaravanan2317@gmail.com" className="contact-link">sanjaysaravanan2317@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <Phone className="contact-icon" />
                        <a href="tel:+919176861844" className="contact-link">+91- 9176861844</a>
                    </div>

                    <div className="contact-item">
                        <MapPin className="contact-icon" />
                        <span className="contact-link" style={{ pointerEvents: 'none', textDecoration: 'none' }}>Chennai, Tamil Nadu, India</span>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                    </div>
                    <input type="text" placeholder="Subject" className="form-input" />
                    <textarea placeholder="Message" className="form-textarea"></textarea>
                    <button type="button" className="submit-btn">Submit</button>
                </form>

            </div>
        </motion.div>
    );
};

export default Contact;
