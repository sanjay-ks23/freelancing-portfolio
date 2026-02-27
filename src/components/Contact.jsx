import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Define destination email and construct URL parts
        const toEmail = "sanjaysaravanan2317@gmail.com";
        const subjectLine = encodeURIComponent(formData.subject || `New enquiry from ${formData.name}`);
        const bodyText = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        // Directly open user's default email client
        window.location.href = `mailto:${toEmail}?subject=${subjectLine}&body=${bodyText}`;

        // Clear the form to allow a clean slate
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="contact-container"
        >
            <div className="contact-content">
                <h4 className="contact-heading">
                    Let's build something <span className="underline-blue">extraordinary.</span>
                </h4>
                <p className="contact-subtext">
                    Whether you need complex AI infrastructure or a sleek web platform, I'm ready to bring your vision to life. Let's discuss your next big project.
                </p>

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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-input"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject (Optional)"
                        className="form-input"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="form-textarea"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="submit-btn" disabled={status === 'Sending...'}>
                        {status || "Connect"}
                    </button>
                </form>

            </div>
        </motion.div>
    );
};

export default Contact;
