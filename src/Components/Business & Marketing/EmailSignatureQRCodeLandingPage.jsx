import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaEnvelope, FaSignature, FaUserTie, FaShareAlt, 
    FaDownload, FaLink, FaCheck, FaIdCard, FaLightbulb,
    FaArrowRight, FaCheckCircle
} from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import '../../css/WiFiQRCodeLandingPage.scss'; 
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

const EmailSignatureQRCodeLandingPage = () => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [emailUrl, setEmailUrl] = useState('');
    const [bio, setBio] = useState('');

    const isAllFieldsFilled = name.trim() !== '' && jobTitle.trim() !== '' && company.trim() !== '' && emailUrl.trim() !== '' && bio.trim() !== '';

    const getQRValue = () => {
        if (name || jobTitle || company) {
            // Generate a simple vCard if name info is provided
            return `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:${company}\nTITLE:${jobTitle}\nURL:${emailUrl}\nNOTE:${bio}\nEND:VCARD`;
        }
        return emailUrl || 'https://theqrify.com';
    };

    const downloadQRCode = () => {
        const svg = document.getElementById('email-qr-code');
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
            downloadLink.download = `email-signature-qr-code.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why use a QR code in an email signature?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It allows recipients to quickly save your contact details (vCard), visit your portfolio, or book a meeting directly from their smartphone while viewing your email on a computer."
                }
            },
            {
                "@type": "Question",
                "name": "How do I add the QR code to my Gmail or Outlook?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Download the QR code as a PNG, then go to your email settings, find the 'Signature' section, and upload the image. You can also link the image to your website."
                }
            },
            {
                "@type": "Question",
                "name": "Will the QR code work in all email clients?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Since the QR code is a standard image file (PNG), it will display correctly in Gmail, Outlook, Apple Mail, and others."
                }
            }
        ]
    };

    return (
        <div className="wifi-landing-container no-select">
            <Helmet>
                <title>QR Code for Email Signatures | Professional Contact QR - TheQrify</title>
                <meta name="description" content="Professionalize your emails with a custom QR code signature. Link to your vCard, portfolio, or booking page effortlessly with TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Email Signature <span>QR Generator</span></h1>
                    <p className="hero-subtitle">
                        Make your professional emails interactive. 
                        Let recipients save your contact details or visit your professional links with a quick scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="generator-card">
                            <Row className="g-4">
                                <Col md={7}>
                                    <h2 className="form-title">Professional Signature Details</h2>
                                    <Form>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="custom-form-group">
                                                    <label htmlFor="nameInput">Full Name (Required)</label>
                                                    <input
                                                        id="nameInput"
                                                        type="text"
                                                        className="custom-input"
                                                        placeholder="John Doe"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="custom-form-group">
                                                    <label htmlFor="titleInput">Job Title (Required)</label>
                                                    <input
                                                        id="titleInput"
                                                        type="text"
                                                        className="custom-input"
                                                        placeholder="Marketing Manager"
                                                        value={jobTitle}
                                                        onChange={(e) => setJobTitle(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="custom-form-group">
                                            <label htmlFor="companyInput">Company Name (Required)</label>
                                            <input
                                                id="companyInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Global Tech Solutions"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="custom-form-group">
                                            <label htmlFor="emailUrlInput">Website / Portfolio URL (Required)</label>
                                            <input
                                                id="emailUrlInput"
                                                type="url"
                                                className="custom-input"
                                                placeholder="https://yourname.com"
                                                value={emailUrl}
                                                onChange={(e) => setEmailUrl(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="custom-form-group">
                                            <label htmlFor="bioInput">Short Bio / Note (Required)</label>
                                            <textarea
                                                id="bioInput"
                                                className="custom-input"
                                                rows="2"
                                                placeholder="Helping brands grow with digital strategy"
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {!isAllFieldsFilled && (
                                            <div className="alert alert-info py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                                Please fill in all fields to generate the QR code.
                                            </div>
                                        )}
                                    </Form>
                                </Col>
                                <Col md={5}>
                                    <div className="qr-preview-container">
                                        <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                            <QRCodeSVG 
                                                id="email-qr-code"
                                                value={isAllFieldsFilled ? getQRValue() : 'https://theqrify.com'}
                                                size={160}
                                                includeMargin={true}
                                                level="H"
                                            />
                                        </div>
                                        <Button 
                                            className="btn-download" 
                                            onClick={downloadQRCode}
                                            disabled={!isAllFieldsFilled}
                                        >
                                            <HiOutlineDownload className="me-2" /> Download Signature QR
                                        </Button>
                                        <p className="text-muted small mt-3 mb-0 text-center">
                                            Optimized for digital display (96 DPI)
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Modernize Your Professional Emails</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaIdCard /></div>
                                <h3>Digital Networking</h3>
                                <p>Bridge the gap between desktop emails and mobile contacts. Let people save your info in one scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserTie /></div>
                                <h3>Professional Edge</h3>
                                <p>Stand out from the crowd with a tech-forward signature that shows you value efficiency and modern design.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLink /></div>
                                <h3>Quick Booking</h3>
                                <p>Link to your Calendly or booking page so clients can schedule a call without leaving their inbox.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>How to Setup</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Generate:** Enter your primary professional link above.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Download:** Save the QR code as a high-quality PNG image.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Insert:** Upload the image to your Gmail, Outlook, or mail client's signature settings.</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Signature Best Practices</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Size:** Keep it around 100px to 150px wide.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Alt Text:** Add hidden descriptive text for screen readers.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Clean Design:** Don't clutter with too many other icons.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Testing:** Send a test email to yourself to check alignment.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – Email Signature QR</h1>
                        <p>Everything you need to know about professional digital signatures.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Why use a QR code in an email signature?",
                                    a: "It allows recipients to quickly save your contact details, visit your portfolio, or book a meeting directly from their smartphone while viewing your email on a computer."
                                },
                                {
                                    q: "How do I add the QR code to my Gmail or Outlook?",
                                    a: "Download the QR code as a PNG, then go to your email settings, find the 'Signature' section, and upload the image. You can also link the image to your website."
                                },
                                {
                                    q: "Will the QR code work in all email clients?",
                                    a: "Yes! Since the QR code is a standard image file (PNG), it will display correctly in Gmail, Outlook, Apple Mail, and others."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-email-signature' />
        </div>
    );
};

export default EmailSignatureQRCodeLandingPage;


