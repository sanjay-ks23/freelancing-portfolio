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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch("https://formsubmit.co/ajax/sanjaysaravanan2317@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "New Contact Form Submission",
                    message: formData.message,
                    _captcha: "false" // Disable CAPTCHA for cleaner UX if preferred
                })
            });

            if (response.ok) {
                setStatus('Sent Successfully!');
                // Clear the form to allow a clean slate
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                // Reset status text after 3 seconds
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Failed to send. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error occurred. Please try again.');
        }
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
