import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaStripeS, FaDownload, FaCreditCard,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaLock, FaShoppingCart
} from 'react-icons/fa';
import '../../css/StripePaymentQRCodeLandingPage.scss';


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

const StripePaymentQRCodeLandingPage = () => {
    const [stripeLink, setStripeLink] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const isAllFieldsFilled = stripeLink.trim() !== '' && businessName.trim() !== '' && productName.trim() !== '' && price.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('stripe-qr-code');
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
            downloadLink.download = `${businessName || 'stripe-payment'}-qr.png`;
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
                "name": "How do I create a Stripe Payment QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "First, create a 'Payment Link' in your Stripe Dashboard. Then, copy that URL and paste it into our generator to create a high-resolution QR code for your customers to scan."
                }
            },
            {
                "@type": "Question",
                "name": "Is it secure for my customers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The QR code simply redirects users to official Stripe secure checkout pages. Stripe handles all the encryption and payment processing."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for physical products?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Print your Stripe QR code on product tags, catalogs, or posters to enable direct purchases without a complex website setup."
                }
            }
        ]
    };

    return (
        <div className="stripe-payment-landing-container no-select">
            <Helmet>
                <title>Free Stripe Payment QR Code Generator | Secure Checkout - TheQrify</title>
                <meta name="description" content="Generate a secure Stripe payment QR code. Lead customers directly to your Stripe Payment Links for fast, professional checkout on any device." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Official <span>Stripe Payment</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Bridge the gap between physical and digital sales.
                        Enable ultra-fast, secure checkouts using Stripe's world-class payment infrastructure with a single scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaStripeS />
                                <span>Stripe Link Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="businessNameInput">Business Name / Project Label (Required)</label>
                                    <input
                                        id="businessNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., My Awesome Store"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="stripeLinkInput">Stripe Payment Link URL (Required)</label>
                                    <input
                                        id="stripeLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://buy.stripe.com/..."
                                        value={stripeLink}
                                        onChange={(e) => setStripeLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Paste your Stripe Payment Link (from your Stripe Dashboard) here.
                                    </small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="productNameInput">Product / Service Name (Required)</label>
                                            <input
                                                id="productNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Premium Subscription"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
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
                                        id="stripe-qr-code"
                                        value={isAllFieldsFilled ? stripeLink : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Stripe QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? `Bridge to ${productName}` : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Empower Your Sales Strategy</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLock /></div>
                                <h3>Enterprise Security</h3>
                                <p>Leverage Stripe's industry-leading security to protect every transaction and customer detail.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCreditCard /></div>
                                <h3>Universal Payments</h3>
                                <p>Accept Apple Pay, Google Pay, and all major credit cards instantly through a simple scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShoppingCart /></div>
                                <h3>One-Touch Checkout</h3>
                                <p>Reduce cart abandonment by leading users directly to a pre-filled, high-conversion checkout page.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Set Up in 3 Simple Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Create Stripe Link</h4>
                                        <p>Go to your Stripe Dashboard &gt; Payments &gt; Payment Links and create your product link.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste your 'buy.stripe.com' link above and download your personalized Stripe QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Start Selling</h4>
                                        <p>Embed the code on packaging, social media, or flyers to collect payments anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Top Placement Ideas</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Direct-to-Consumer Packaging</li>
                                    <li className="mb-3"><FaCheckCircle /> Exhibition & Trade Show Booths</li>
                                    <li className="mb-3"><FaCheckCircle /> Instagram & Facebook Shop Posts</li>
                                    <li className="mb-3"><FaCheckCircle /> Service Provider Invoices</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Storefront Windows</li>
                                    <li className="mb-3"><FaCheckCircle /> Event Ticketing & Promotion</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Stripe Payment FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do I need a website to use Stripe QR codes?",
                                    a: "No! As long as you have a Stripe account and can create a Payment Link, you can use our QR codes to sell products without any website."
                                },
                                {
                                    q: "Does Stripe charge for using QR codes?",
                                    a: "Stripe doesn't charge for the code itself. You only pay their standard payment processing fees when a customer makes a purchase."
                                },
                                {
                                    q: "Will the QR code work on all phones?",
                                    a: "Yes. Any modern smartphone camera can scan these QR codes and open the Stripe checkout page in seconds."
                                },
                                {
                                    q: "Can I use this for subscriptions?",
                                    a: "Absolutely. If you create a subscription-based Payment Link in Stripe, the QR code will lead users to that specific plan."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
            <LandingPageFooter currentPath='/qr-code-for-stripe-payment' />
        </div>
    );
};


export default StripePaymentQRCodeLandingPage;