import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just simulate a submission
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Here you could integrate EmailJS, Formspree, or a backend API call
    };

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2>📩 Contact Us</h2>
                <p className="text-muted">
                    Have questions, feedback, or partnership ideas? We’d love to hear from you.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    {submitted && (
                        <div className="alert alert-success text-center">
                            ✅ Thank you! Your message has been sent.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-light">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                name="subject"
                                placeholder="What’s this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-4 py-2">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* <div className="text-center">
                        <p className="text-muted mb-1">Or reach us directly:</p>
                        <p>
                            📧 <a href="mailto:support@theqrify.com">support@theqrify.com</a>
                            <br />
                            🌐 <a href="https://theqrify.com" target="_blank" rel="noopener noreferrer">
                                https://theqrify.com
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
