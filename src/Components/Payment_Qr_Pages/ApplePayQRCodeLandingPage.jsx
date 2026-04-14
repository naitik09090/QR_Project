import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaApple, FaDownload, FaCreditCard,
    FaCheckCircle, FaLock, FaMobileAlt, FaWallet
} from 'react-icons/fa';
import '../../css/ApplePayQRCodeLandingPage.scss';



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

const ApplePayQRCodeLandingPage = () => {
    const [merchantLink, setMerchantLink] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const isAllFieldsFilled = merchantLink.trim() !== '' && businessName.trim() !== '' && amount.trim() !== '' && description.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('apple-pay-qr-code');
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
            downloadLink.download = `${businessName || 'apple-pay'}-payment-qr.png`;
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
                "name": "How do I create a QR code for Apple Pay?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply enter your Apple Pay enabled merchant link or payment URL. Customers scanning the QR code on an iPhone, iPad, or Mac will be able to complete the transaction instantly using Apple Pay."
                }
            },
            {
                "@type": "Question",
                "name": "Does this work for personal Apple Cash?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For personal Apple Cash, you can use payment links generated via iMessage. For business, we recommend using merchant payment links from providers like Stripe or Square that support Apple Pay."
                }
            },
            {
                "@type": "Question",
                "name": "Is it secure to pay via a QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Apple Pay uses a device-specific number and a unique transaction code. Your card number is never stored on your device or Apple servers, and it's never shared with merchants."
                }
            }
        ]
    };

    return (
        <div className="apple-pay-landing-container no-select">
            <Helmet>
                <title>Free Apple Pay QR Code Generator | Secure Contactless Payments - TheQrify</title>
                <meta name="description" content="Generate a professional Apple Pay QR code for your business. Accept secure, one-tap payments from iPhone and Mac users. Premium and contactless." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Secure <span>Apple Pay</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        The ultimate contactless experience.
                        Enable seamless one-tap payments for your customers using the world's most secure digital wallet.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaApple size={40} />
                                <span>Apple Pay Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="merchantLinkInput">Payment Link / Merchant URL (Required)</label>
                                    <input
                                        id="merchantLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://buy.stripe.com/..."
                                        value={merchantLink}
                                        onChange={(e) => setMerchantLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">Link to your Apple Pay enabled checkout page.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="businessNameInput">Business Name (Required)</label>
                                            <input
                                                id="businessNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Apple Store"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="amountInput">Display Amount (Required)</label>
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
                                    <label htmlFor="descriptionInput">Service Description (Required)</label>
                                    <input
                                        id="descriptionInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Order #12345"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
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
                                        id="apple-pay-qr-code"
                                        value={isAllFieldsFilled ? merchantLink : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Apple Pay QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? `Bridge to ${businessName}` : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Premium Payment Experience</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLock /></div>
                                <h3>Privacy First</h3>
                                <p>Apple Pay doesn't keep transaction information that can be tied back to your customers.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>One-Tap Checkout</h3>
                                <p>Users can pay instantly using Face ID or Touch ID, eliminating long checkout forms.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaWallet /></div>
                                <h3>Digital Wallet Integration</h3>
                                <p>Perfectly integrated with the Apple ecosystem for a high-trust, premium experience.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Accept Apple Pay in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Generate Link</h4>
                                        <p>Create a payment link using your preferred processor (Stripe, Square, etc.) that supports Apple Pay.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Customize QR</h4>
                                        <p>Input the link above and optionally add your business details for the landing page.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Place QR Code</h4>
                                        <p>Display the code on your counter, menu, or invoice for instant customer scanning.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For Modern Retail</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Upscale Boutiques & Retailers</li>
                                    <li className="mb-3"><FaCheckCircle /> Fine Dining & Cafes</li>
                                    <li className="mb-3"><FaCheckCircle /> Mobile Service Providers</li>
                                    <li className="mb-3"><FaCheckCircle /> High-End Event Services</li>
                                    <li className="mb-3"><FaCheckCircle /> Donation Points & Galleries</li>
                                    <li className="mb-3"><FaCheckCircle /> Fast-Track Ordering Points</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Apple Pay QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for my restaurant menu?",
                                    a: "Absolutely! You can link each QR code to a specific table's checkout or a general payment page, making settling bills effortless."
                                },
                                {
                                    q: "What devices can scan this?",
                                    a: "Any smartphone with a camera. However, the one-tap Apple Pay experience will be available for users on iPhone, iPad, and Mac (using Safari)."
                                },
                                {
                                    q: "Do I need a special terminal?",
                                    a: "No special hardware is required. As long as your online payment processor supports Apple Pay, this QR code will bridge the gap from offline to online."
                                },
                                {
                                    q: "Are there any scan limits?",
                                    a: "None. Like all TheQrify static codes, your Apple Pay QR code is permanent and supports unlimited scans."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>

            </Container>


            <LandingPageFooter currentPath='/qr-code-for-apple-pay' />
        </div>
    );
};


export default ApplePayQRCodeLandingPage;
