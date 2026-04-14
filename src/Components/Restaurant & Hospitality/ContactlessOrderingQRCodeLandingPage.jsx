import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaHandPointer, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils, FaShieldAlt
} from 'react-icons/fa';
import '../../css/ContactlessOrderingQRCodeLandingPage.scss';
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

const ContactlessOrderingQRCodeLandingPage = () => {
    const [orderingUrl, setOrderingUrl] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const isAllFieldsFilled = orderingUrl.trim() !== '' && businessName.trim() !== '' && branchName.trim() !== '' && tableNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('contactless-ordering-qr-code');
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
            downloadLink.download = `${businessName || 'contactless-ordering'}-qr.png`;
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
                "name": "What is contactless ordering via QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contactless ordering allows customers to view a menu and place orders using their own mobile device by scanning a QR code. This removes the need for physical contact with shared menus or ordering kiosks."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe for customers to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it's highly secure. Customers use their own phones, reducing physical touchpoints. Additionally, ordering platforms use encrypted payment methods to protect financial data."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for my retail business too?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! While popular in food services, contactless ordering is great for retail 'scan & go' experiences or service-based businesses like salons and clinics."
                }
            }
        ]
    };

    return (
        <div className="contactless-ordering-landing-container no-select">
            <Helmet>
                <title>Free Contactless Ordering QR Code Generator | TheQrify</title>
                <meta name="description" content="Generate a free QR code for contactless ordering. Perfect for restaurants, cafes, and retail. Give your customers a safe, touch-free way to order and pay." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Safe <span>Contactless Ordering</span></h1>
                    <p className="hero-subtitle">
                        Provide a modern, touch-free experience for your customers. 
                        Enable self-service ordering and payments with a simple scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaHandPointer />
                                <span>Order Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="businessNameInput">Business Name (Required)</label>
                                    <input
                                        id="businessNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your business name"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="branchNameInput">Branch / Outlet Name (Required)</label>
                                    <input
                                        id="branchNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Downtown or Westside"
                                        value={branchName}
                                        onChange={(e) => setBranchName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="tableNumberInput">Table Number / Location (Required)</label>
                                    <input
                                        id="tableNumberInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Table 5 or VIP Section"
                                        value={tableNumber}
                                        onChange={(e) => setTableNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="orderingUrlInput">Ordering Link (URL) (Required)</label>
                                    <input
                                        id="orderingUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourorderingplatform.com"
                                        value={orderingUrl}
                                        onChange={(e) => setOrderingUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Paste the link where your customers should order from.
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
                                        id="contactless-ordering-qr-code"
                                        value={isAllFieldsFilled ? `${orderingUrl}?business=${encodeURIComponent(businessName)}&branch=${encodeURIComponent(branchName)}&table=${encodeURIComponent(tableNumber)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download QR Code
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High scan reliability for all devices' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Choose Contactless?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Enhanced Safety</h3>
                                <p>Eliminate shared physical menus and high-touch kiosks to keep your customers and staff healthy.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Operational Agility</h3>
                                <p>Instantly update your offerings and pricing without the lead time or cost of re-printing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Sales Optimization</h3>
                                <p>Reduce wait times and order friction, encouraging more frequent and higher-value purchases.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Go Contactless in Seconds</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Set Destination</h4>
                                        <p>Link to your menu, product list, or existing ordering platform URL.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Enter your details above and download your permanent high-resolution QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Deploy Anywhere</h4>
                                        <p>Display the code on tables, windows, or signage for instant customer access.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Restaurants & Food Trucks</li>
                                    <li className="mb-3"><FaCheckCircle /> Boutique & Retail Stores</li>
                                    <li className="mb-3"><FaCheckCircle /> Salons & Wellness Centers</li>
                                    <li className="mb-3"><FaCheckCircle /> Event Venues & Stadiums</li>
                                    <li className="mb-3"><FaCheckCircle /> Hotels & Resorts</li>
                                    <li className="mb-3"><FaCheckCircle /> Medical & Dental Clinics</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do customers need a special app to order?",
                                    a: "No. All they need is a smartphone with a camera. Most default camera apps can scan QR codes instantly and open the ordering link in their browser."
                                },
                                {
                                    q: "Can I use this for payments as well?",
                                    a: "Yes! If the ordering link you provide supports payments (like Shopify, Square, or custom portals), guests can complete their entire transaction via the QR code."
                                },
                                {
                                    q: "Is there a limit on scans?",
                                    a: "No. The static QR codes we generate have unlimited scans and will work indefinitely."
                                },
                                {
                                    q: "How many codes can I create?",
                                    a: "As many as you need. You can create different codes for different areas of your business or different store locations."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-contactless-ordering' />
        </div>
    );
};

export default ContactlessOrderingQRCodeLandingPage;


