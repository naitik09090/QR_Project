import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaTicketAlt, FaDownload, FaCalendarAlt, FaMapMarkerAlt, 
    FaUserCheck, FaShieldAlt, FaCheckCircle, FaStar, FaQrcode
} from 'react-icons/fa';
import '../../css/EventTicketQRCodeLandingPage.scss';
import LandingPageFooter from '../LandingPageFooter';

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item-custom mb-3">
            <button 
                className={`faq-question-btn ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{q}</span>
                <span className="icon">{isOpen ? '−' : '+'}</span>
            </button>
            <Collapse in={isOpen}>
                <div className="faq-answer-content">
                    <p>{a}</p>
                </div>
            </Collapse>
        </div>
    );
};

const EventTicketQRCodeLandingPage = () => {
    const [eventName, setEventName] = useState('');
    const [ticketUrl, setTicketUrl] = useState('');
    const [ticketId, setTicketId] = useState('');

    
    const isAllFieldsFilled = eventName.trim() !== '' && ticketUrl.trim() !== '' && ticketId.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('event-qr-code');
        if (!svg) return;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `event-ticket-${eventName || 'qr'}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    // Value for QR code: combines URL or ID
    const qrValue = ticketUrl || ticketId || 'https://theqrify.com/events';

    return (
        <div className="event-landing-container no-select">
            <Helmet>
                <title>Free Event Ticket QR Code Generator | Check-in Solutions | TheQrify</title>
                <meta name="description" content="Generate 100% free QR codes for event tickets. Simplify check-ins for concerts, conferences, and private parties. Secure and easy to scan." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Smart <span>Event Ticket</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Revolutionize your event management. Create professional QR codes for tickets, 
                        invites, and RSVPs to ensure a seamless check-in experience for your guests.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaTicketAlt className="me-2" />
                                <span>Ticket Information</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label>Event Name (Required)</label>
                                    <input 
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Summer Music Festival"
                                        value={eventName}
                                        onChange={(e) => setEventName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Ticket URL or Link (Required)</label>
                                    <input 
                                        type="url" 
                                        className="custom-input"
                                        placeholder="https://your-event.com/ticket/123"
                                        value={ticketUrl}
                                        onChange={(e) => setTicketUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Paste the link to the digital ticket or registration page.
                                    </small>
                                </div>
                                <div className="custom-form-group">
                                    <label>Ticket ID / Serial (Required)</label>
                                    <input 
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. TKT-9988-XY"
                                        value={ticketId}
                                        onChange={(e) => setTicketId(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Enter a unique seat or ticket identifier.
                                    </small>
                                </div>
                                                            {!isAllFieldsFilled && (
                                    <div className="alert alert-info py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                        Please fill in all fields to generate the QR code.
                                    </div>
                                )}

                            </Form>
                        </Col>
                        <Col lg={5} className="mt-4 mt-lg-0">
                            <div className="qr-preview-container">
                                <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                    <QRCodeSVG 
                                        id="event-qr-code"
                                        value={isAllFieldsFilled ? qrValue : 'https://theqrify.com/events'}
                                        size={220}
                                        includeMargin={true}
                                        level="H"
                                    />
                                </div>
                                <Button 
                                    className="btn-download" 
                                    onClick={downloadQRCode}
                                    disabled={!isAllFieldsFilled}
                                >
                                    <FaDownload className="me-2" /> Download Ticket QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Compatible with all entry scanners' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Seamless Event Management</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserCheck /></div>
                                <h3>Fast Entry</h3>
                                <p>Reduce queues at the door. One quick scan confirms the ticket and lets guests in instantly.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Fraud Prevention</h3>
                                <p>Generate unique codes that are difficult to replicate, ensuring only valid ticket holders gain access.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaQrcode /></div>
                                <h3>Contactless Tech</h3>
                                <p>Provide a safe, touch-free check-in experience that modern attendees expect and appreciate.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="ticket-guide-box">
                                <h3>Professional Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Concerts & Festivals:</strong> Manage thousands of entries with high-speed scanning.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Corporate Conferences:</strong> Track attendance for workshops and seminars accurately.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Private Parties:</strong> Use QR codes on digital invites for exclusive guest lists.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Webinars & Online Events:</strong> Link codes to virtual meeting rooms for easy access.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Check-in Tips</h3>
                            <p className="text-muted">
                                To get the most out of your ticket QR codes, follow these industry standards:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCalendarAlt className="text-primary me-3" /> Include the event date and time clearly near the QR code.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaMapMarkerAlt className="text-primary me-3" /> Add the venue address or a map link for guest convenience.
                                    </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> Test your scanner app with the code before the event starts.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaStar className="text-warning me-3" /> Ensure the QR code has a high contrast for low-light scanning.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Event QR FAQs</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this work with any scanning app?",
                                    a: "Yes! Our codes are standard SVG/PNG formats that can be read by any universal QR scanner or professional check-in software."
                                },
                                {
                                    q: "Can I use it for RSVP management?",
                                    a: "Absolutely. You can link the QR code to a Google Form or your own RSVP portal to track guest confirmations."
                                },
                                {
                                    q: "What if the guest's screen is cracked?",
                                    a: "We generate codes with High Error Correction (Level H). This means the code can often still be scanned even if part of the screen or paper is damaged."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/event-ticket-qr-code' />
        </div>
    );
};

export default EventTicketQRCodeLandingPage;


