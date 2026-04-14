import React, { useState } from "react";
import { sendEvent } from "../gaEvents";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("send contact:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    }

    return (
        <div className="contact-wrapper">
            <h1>Get In Touch</h1>
            <p className="subtitle">We'll create high-quality linkable content...</p>

            <div className="contact-card">
                <div className="contact-left">
                    <div>
                        <h2>Contact Information</h2>
                        <p className="info-text">
                            We'll create high-quality linkable content and build at least 40...
                        </p>

                        <div className="items">
                            {/* <p className="item"><span>📞</span> +988678363866</p> */}
                            {/* 📩 Email: <a href="mailto:support@theqrify.com" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>support@theqrify.com</a> */}
                            <p className="item"><span>📧</span> Support@theqrify.com</p>
                            <p className="item"><span>📍</span> New York, USA</p>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="form-row">
                            <div className="text-start">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-start">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Support@theqrify.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="text-start">
                            <label>Your Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="I want to hire you quickly"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="text-start">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write here your message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-btn"
                            onClick={() =>
                                sendEvent("contact_click", {
                                    event_category: "Engagement",
                                    event_label: "Contact Button Clicked",
                                    form_type: "contact_form",
                                })
                            }
                        >
                            Send Message
                        </button>


                        {submitted && <p className="success-msg">Message sent — thanks!</p>}
                    </form>
                </div>

            </div>
        </div>

    );
}
