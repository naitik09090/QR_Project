import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaCoins, FaDownload, FaUtensils,
    FaCheckCircle, FaLock, FaUserCheck, FaSmile
} from 'react-icons/fa';
import '../../css/TipsQRCodeLandingPage.scss';


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

const TipsQRCodeLandingPage = () => {
    const [paymentLink, setPaymentLink] = useState('');
    const [staffName, setStaffName] = useState('');
    const [venueName, setVenueName] = useState('');
    const [amount, setAmount] = useState('');
    const isAllFieldsFilled = paymentLink.trim() !== '' && staffName.trim() !== '' && venueName.trim() !== '' && amount.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('tips-qr-code');
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
            downloadLink.download = `${staffName || 'tips'}-qr.png`;
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
                "name": "How can I use a QR code for tips?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Paste your personalized payment link (from apps like Venmo, Cash App, PayPal, or specialized tipping platforms) into the generator. Print the QR code on your service card, menu, or display it at your station to receive tips digitally."
                }
            },
            {
                "@type": "Question",
                "name": "Can I set a default tip amount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your payment provider supports pre-filled amounts via URL parameters (e.g., ?amount=5), simply use that full link in our generator."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe for my customers to scan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The QR code simply encodes your secure payment link. We do not store any financial data; we only provide the scannable bridge to your existing payment profile."
                }
            }
        ]
    };

    return (
        <div className="tips-landing-container no-select">
            <Helmet>
                <title>Free Tips QR Code Generator | Support Your Service Staff - TheQrify</title>
                <meta name="description" content="Generate a custom Tips QR code for waiters, baristas, and service professionals. Accept digital tips instantly with a secure scannable link. Modern and effortless." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Modern <span>Tips</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Reward exceptional service instantly. 
                        Empower your staff to receive appreciation via digital wallets with a professional and friendly tipping QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaCoins size={35} />
                                <span>Staff Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="paymentLinkInput">Your Payment Link (Venmo/PayPal/CashApp) (Required)</label>
                                    <input
                                        id="paymentLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://venmo.com/u/yourname"
                                        value={paymentLink}
                                        onChange={(e) => setPaymentLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">Link to your digital tip jar or payment profile.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="staffNameInput">Staff Name / ID (Required)</label>
                                            <input
                                                id="staffNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="John Doe"
                                                value={staffName}
                                                onChange={(e) => setStaffName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="amountInput">Default Amount (Required)</label>
                                            <input
                                                id="amountInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="0.00"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="custom-form-group">
                                    <label htmlFor="venueInput">Venue / Business Name (Required)</label>
                                    <input
                                        id="venueInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="The Grand Hotel"
                                        value={venueName}
                                        onChange={(e) => setVenueName(e.target.value)}
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
                        <Col lg={5} className="mt-4 mt-lg-0">
                                <div className={`qr-preview-container`}>
                                    <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                        <QRCodeSVG
                                            id="tips-qr-code"
                                            value={isAllFieldsFilled ? paymentLink : 'https://theqrify.com'}
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
                                        <FaDownload className="me-2" /> Download Tips QR
                                    </Button>
                                    <p className="text-muted small mt-3 mb-0 text-center">
                                        {isAllFieldsFilled ? `Digital Tip for ${staffName}` : 'Fill all fields to preview'}
                                    </p>
                                </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Boost Your Earnings</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserCheck /></div>
                                <h3>Higher Tip Volume</h3>
                                <p>Customers who don't carry cash can now tip you instantly using their phone's digital wallet.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSmile /></div>
                                <h3>Frictionless Experience</h3>
                                <p>One quick scan eliminates the awkwardness of manual entry and speeds up the process.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUtensils /></div>
                                <h3>Industry Standard</h3>
                                <p>Used by top-tier hospitality groups to modernize their service and appreciation workflows.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Get Started in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Identify Your Link</h4>
                                        <p>Find your personal profile link in Venmo, Cash App, or your preferred payment app.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Customize Profile</h4>
                                        <p>Input the link and add your venue or staff details to the landing page.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Display & Earn</h4>
                                        <p>Download your QR and place it where customers can easily scan it after great service.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For Service Pros</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Restaurant Waitstaff</li>
                                    <li className="mb-3"><FaCheckCircle /> Baristas & Bartenders</li>
                                    <li className="mb-3"><FaCheckCircle /> Valet & Hotel Porter Services</li>
                                    <li className="mb-3"><FaCheckCircle /> Freelance Artists & Musicians</li>
                                    <li className="mb-3"><FaCheckCircle /> Delivery Drivers</li>
                                    <li className="mb-3"><FaCheckCircle /> Salon & Spa Professionals</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Tips QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do I need a special app for this?",
                                    a: "No. Any standard smartphone camera can scan the QR code. TheQrify creates the code, and your customer's phone handles the rest."
                                },
                                {
                                    q: "Is there a fee for receiving tips?",
                                    a: "TheQrify is completely free to use. Standard fees from your payment platform (Venmo, PayPal, etc.) may apply depending on their policy."
                                },
                                {
                                    q: "Can I use this for a whole team?",
                                    a: "Yes! You can link the QR code to a group tip pool or a shared venue business account if preferred."
                                },
                                {
                                    q: "Where should I place my Tips QR?",
                                    a: "Best spots include the bottom of the check, on a discreet card at the table, or printed on your name badge."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
            <LandingPageFooter currentPath='/qr-code-for-tips' />
        </div>
    );
};

export default TipsQRCodeLandingPage;


