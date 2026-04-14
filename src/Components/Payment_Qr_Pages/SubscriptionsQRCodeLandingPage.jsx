import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaSync, FaDownload, FaCreditCard,
    FaCheckCircle, FaLock, FaUsers, FaArrowRight
} from 'react-icons/fa';
import '../../css/SubscriptionsQRCodeLandingPage.scss';


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

const SubscriptionsQRCodeLandingPage = () => {
    const [subLink, setSubLink] = useState('');
    const [planName, setPlanName] = useState('');
    const [billingCycle, setBillingCycle] = useState('');
    const [price, setPrice] = useState('');

    const isAllFieldsFilled = subLink.trim() !== '' && planName.trim() !== '' && billingCycle.trim() !== '' && price.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('subscription-qr-code');
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
            downloadLink.download = `${planName || 'subscription'}-qr.png`;
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
                "name": "How do I create a QR code for subscriptions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Link your subscription checkout page (from Stripe Billing, PayPal Subscriptions, or Chargebee) to our generator. Ensure all plan details are filled out for a professional display."
                }
            },
            {
                "@type": "Question",
                "name": "Can it handle monthly and yearly plans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You specify the billing cycle in the generator, which helps clarify the subscription terms for your customers before they scan."
                }
            },
            {
                "@type": "Question",
                "name": "Is the recurring payment secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The QR code simply encodes your secure checkout link. The actual subscription management and recurring billing are handled by your existing PCI-compliant payment provider."
                }
            }
        ]
    };

    return (
        <div className="subscriptions-landing-container no-select">
            <Helmet>
                <title>Free Subscription QR Code Generator | Recurring Revenue - TheQrify</title>
                <meta name="description" content="Generate professional QR codes for your subscription services. Perfect for SaaS, newsletters, and memberships. Secure, recurring, and free to use." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Automate Growth with <span>Subscription</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Build stable recurring revenue.
                        Give your customers instant access to your membership or subscription plans with a single high-accuracy scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaSync size={35} />
                                <span>Subscription Details</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="subLinkInput">Full Subscription Link (Required)</label>
                                    <input
                                        id="subLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://billing.yourbrand.com/subscribe"
                                        value={subLink}
                                        onChange={(e) => setSubLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">The URL to your secure subscription checkout page.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="planNameInput">Plan Name (Required)</label>
                                            <input
                                                id="planNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Premium Membership"
                                                value={planName}
                                                onChange={(e) => setPlanName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="priceInput">Price (Required)</label>
                                            <input
                                                id="priceInput"
                                                type="number"
                                                className="custom-input"
                                                placeholder="0.00"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="custom-form-group">
                                    <label htmlFor="cycleInput">Billing Cycle (Required)</label>
                                    <input
                                        id="cycleInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Monthly / Annually"
                                        value={billingCycle}
                                        onChange={(e) => setBillingCycle(e.target.value)}
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
                            <div className="qr-preview-container">
                                <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                    <QRCodeSVG
                                        id="subscription-qr-code"
                                        value={isAllFieldsFilled ? subLink : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Subscription QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? `Bridge to ${planName}` : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Compound Your Growth</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSync /></div>
                                <h3>Predictable Revenue</h3>
                                <p>Turn one-time customers into lifelong supporters with easy-to-scan recurring billing options.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCheckCircle /></div>
                                <h3>Seamless Onboarding</h3>
                                <p>Fast-track your membership enrollment. No complicated navigation; just scan and sign up.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Community Building</h3>
                                <p>Perfect for gyms, coworking spaces, and digital communities looking to simplify renewals.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Launch Your Plan in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Define Your Offer</h4>
                                        <p>Create your subscription plan in your billing dashboard (Stripe, PayPal, etc.) and copy the link.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Fill Plan Data</h4>
                                        <p>Input the plan name, price, and cycle to ensure your QR code is generated with full context.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Activate Renewals</h4>
                                        <p>Download the QR and display it at your point of sale, on product packaging, or in email campaigns.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Recurring Business Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> SaaS Platform Subscriptions</li>
                                    <li className="mb-3"><FaCheckCircle /> Fitness & Gym Memberships</li>
                                    <li className="mb-3"><FaCheckCircle /> Monthly Supplement Deliveries</li>
                                    <li className="mb-3"><FaCheckCircle /> Newsletter & Content Paywalls</li>
                                    <li className="mb-3"><FaCheckCircle /> Coworking & Office Rentals</li>
                                    <li className="mb-3"><FaCheckCircle /> VIP Loyalty Club Onboarding</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Subscription QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for free trials?",
                                    a: "Yes. If your payment link leads to a checkout page with a free trial period, the QR code will direct them exactly to that onboarding flow."
                                },
                                {
                                    q: "What happens if I change my price?",
                                    a: "If your subscription link remains the same while you update the price on your billing provider's end, the QR code will still work. If the link changes, you will need to generate a new QR."
                                },
                                {
                                    q: "Do I need to be a large business?",
                                    a: "Not at all. Whether you're a YouTuber with a Patreon or a local coffee shop with a monthly pass, subscription QR codes help you scale."
                                },
                                {
                                    q: "Is there a limit on scans?",
                                    a: "No. The static QR codes we generate allow for unlimited scans, supporting your growth from your first 10 to your first 10,000 subscribers."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
            <LandingPageFooter currentPath='/qr-code-for-subscriptions' />
        </div>
    );
};

export default SubscriptionsQRCodeLandingPage;
