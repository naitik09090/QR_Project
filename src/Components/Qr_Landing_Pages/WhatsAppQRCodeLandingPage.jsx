import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaWhatsapp, FaDownload, FaCommentDots, FaUserCheck,
    FaBolt, FaShareAlt, FaCheckCircle, FaStar, FaMobileAlt
} from 'react-icons/fa';
import '../../css/WhatsAppQRCodeLandingPage.scss';
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

const WhatsAppQRCodeLandingPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const isAllFieldsFilled = phoneNumber.trim() !== '' && message.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('whatsapp-qr-code');
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
            downloadLink.download = `whatsapp-qr-${phoneNumber || 'contact'}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    // Construct WhatsApp link
    // Format: https://wa.me/number?text=message
    let cleanNumber = phoneNumber.replace(/\D/g, '');

    // Auto-prepend India country code (91) if 10 digits are entered
    if (cleanNumber.length === 10) {
        cleanNumber = '91' + cleanNumber;
    }

    const encodedMessage = encodeURIComponent(message);
    const waValue = cleanNumber
        ? `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`
        : 'https://wa.me/';

    return (
        <div className="whatsapp-landing-container no-select">
            <Helmet>
                <title>Free WhatsApp QR Code Generator | Chat Instantly | TheQrify</title>
                <meta name="description" content="Generate a 100% free WhatsApp QR code. Allow customers and friends to start a chat with you instantly without saving your number. Easy and fast." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Start Conversations with <span>WhatsApp QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Make it effortless for anyone to message you. Create a custom QR code
                        that opens a WhatsApp chat with your number and a pre-filled message.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaWhatsapp className="me-2" />
                                <span>WhatsApp Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="waPhoneInput">Phone Number (with Country Code) (Required)</label>
                                    <input
                                        id="waPhoneInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g. 9876543210 (Auto +91 for India)"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        For India: enter your 10-digit number (we add 91 automatically). <br />
                                        For other countries: include your country code without '+' (e.g., 1 for USA).
                                    </small>
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="waMessageInput">Pre-filled Message (Required)</label>
                                    <textarea
                                        id="waMessageInput"
                                        className="custom-input"
                                        placeholder="Hi! I'm interested in your services..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        This message will appear automatically in the user's chat box.
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
                                        id="whatsapp-qr-code"
                                        value={isAllFieldsFilled ? waValue : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download WhatsApp QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready for your website or business card' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Use WhatsApp QR Codes?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserCheck /></div>
                                <h3>No Number Saving</h3>
                                <p>Allow people to message you instantly without the hassle of saving your contact in their phonebook first.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCommentDots /></div>
                                <h3>Pre-filled Context</h3>
                                <p>Know exactly what your customers need by setting a custom message like "I have a question about my order."</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBolt /></div>
                                <h3>Higher Conversion</h3>
                                <p>Removing friction leads to more inquiries. Just scan and send - the fastest way to connect.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Practical Use Cases */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="p-4 border rounded-4 bg-light">
                                <h3>Perfect Use Cases</h3>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheckCircle className="me-3" /> **Customer Support:** On product packaging or websites.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheckCircle className="me-3" /> **Personal Profiles:** On your resume or portfolio.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheckCircle className="me-3" /> **Retail Stores:** For orders or product inquiries.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheckCircle className="me-3" /> **RSVPs:** On event invitations for quick responses.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Professional Advice</h3>
                            <p className="text-muted">
                                When using a WhatsApp QR code for business, always ensure your **WhatsApp Business**
                                settings are optimized. A pre-filled message helps you categorize incoming leads
                                immediately, such as "Order Inquiry" or "Price Quote Request".
                            </p>
                            <div className="d-flex align-items-center text-primary fw-bold mt-4">
                                <FaShareAlt className="me-2" /> Share your link across all offline touchpoints.
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>WhatsApp QR FAQs</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does it work with WhatsApp Business?",
                                    a: "Yes! This QR code works perfectly with both standard WhatsApp and WhatsApp Business accounts."
                                },
                                {
                                    q: "Do I need to include the '+' sign?",
                                    a: "No. For the QR code to function correctly, simply enter the numbers only, including your country code (e.g., 1 for USA, 44 for UK)."
                                },
                                {
                                    q: "Is this service private?",
                                    a: "We do not store your phone number or messages on our servers. The QR code is generated locally in your browser."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>


            <LandingPageFooter currentPath='/whatsapp-qr-code' />
        </div>
    );
};

export default WhatsAppQRCodeLandingPage;


