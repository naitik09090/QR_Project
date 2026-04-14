import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaGlobe, FaDownload, FaCreditCard,
    FaCheckCircle, FaLock, FaShieldAlt, FaRocket
} from 'react-icons/fa';
import '../../css/OnlinePaymentsQRCodeLandingPage.scss';


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

const OnlinePaymentsQRCodeLandingPage = () => {
    const [paymentLink, setPaymentLink] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [invoiceId, setInvoiceId] = useState('');
    const [amount, setAmount] = useState('');
    const isAllFieldsFilled = paymentLink.trim() !== '' && businessName.trim() !== '' && invoiceId.trim() !== '' && amount.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('online-payment-qr-code');
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
            downloadLink.download = `${businessName || 'online-payment'}-qr.png`;
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
                "name": "How do I create a QR code for online payments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply paste your payment gateway checkout URL (from Stripe, Square, LemonSqueezy, etc.) into the generator. Your customers can scan the code to be taken directly to your secure checkout page."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for any payment gateway?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! This generator works with any web-based checkout link. As long as you have a URL where customers can pay, you can turn it into a high-performance QR code."
                }
            },
            {
                "@type": "Question",
                "name": "Is my payment link safe?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The QR code simply encodes the URL you provide. We do not process the payments directly; we facilitate the connection between your offline customers and your existing secure online payment infrastructure."
                }
            }
        ]
    };

    return (
        <div className="online-payments-landing-container no-select">
            <Helmet>
                <title>Free Online Payment QR Code Generator | Bridge Offline to Online - TheQrify</title>
                <meta name="description" content="Convert any online payment link into a professional QR code. Perfect for invoices, storefronts, and digital menus. Secure, fast, and free to use." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Global <span>Online Payment</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        The ultimate bridge for your commerce. 
                        Transform any checkout link into a scannable payment portal for your customers, wherever they are.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaGlobe size={40} />
                                <span>Global Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="paymentLinkInput">Checkout URL / Payment Link (Required)</label>
                                    <input
                                        id="paymentLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://checkout.yourbrand.com/pay"
                                        value={paymentLink}
                                        onChange={(e) => setPaymentLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">The URL where your customers will complete their payment.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="businessNameInput">Business Name (Required)</label>
                                            <input
                                                id="businessNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Global Ventures Ltd."
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="amountInput">Currency & Amount (Required)</label>
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
                                    <label htmlFor="invoiceIdInput">Invoice # / Reference (Required)</label>
                                    <input
                                        id="invoiceIdInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="INV-2026-001"
                                        value={invoiceId}
                                        onChange={(e) => setInvoiceId(e.target.value)}
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
                                            id="online-payment-qr-code"
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
                                        <FaDownload className="me-2" /> Download Payment QR
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
                    <h2>Unified Commerce Solutions</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Enterprise Security</h3>
                                <p>QR codes leverage your existing payment provider's security, ensuring 100% PCI-DSS compliance.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaRocket /></div>
                                <h3>Instant Deployment</h3>
                                <p>No technical integration required. If you have a link, you have a global payment solution ready in seconds.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCreditCard /></div>
                                <h3>Multi-Method Support</h3>
                                <p>Support Credit Cards, Wallets, and Local methods through your primary gateway redirection.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Start Collecting in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Checkout Link</h4>
                                        <p>Grab the URL from your Stripe Payment Link, Square Online Store, or custom payment page.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate Premium QR</h4>
                                        <p>Paste the link above. Our generator optimizes the code for high-accuracy scanning at any distance.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Go Live Global</h4>
                                        <p>Download and embed the QR code in your digital invoices, printed brochures, or TV ads.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Strategic Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Digital Invoicing & Billing</li>
                                    <li className="mb-3"><FaCheckCircle /> Direct-to-Consumer Ads</li>
                                    <li className="mb-3"><FaCheckCircle /> Podcast & Video Stream Donations</li>
                                    <li className="mb-3"><FaCheckCircle /> Popup Shop Checkouts</li>
                                    <li className="mb-3"><FaCheckCircle /> SaaS Subscription Onboarding</li>
                                    <li className="mb-3"><FaCheckCircle /> Real Estate Escrow Payments</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Online Payment QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this replace my payment processor?",
                                    a: "No. TheQrify acts as a visual interface for your existing processor. It turns your payment link into a scannable QR code, but the actual transaction still happens on your provider's platform."
                                },
                                {
                                    q: "Can I track how many people scanned it?",
                                    a: "Static QR codes like these can be tracked if you use a URL with tracking parameters (UTM codes) or if your payment provider offers link analytics."
                                },
                                {
                                    q: "Is there a transaction limit?",
                                    a: "TheQrify imposes no limits. The limits for your transactions are governed entirely by your bank and your payment gateway (e.g., Stripe, PayPal)."
                                },
                                {
                                    q: "Will this work in any country?",
                                    a: "Yes. Our QR codes are universal. If your payment gateway supports international payments, your QR code will too."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-online-payments' />
        </div>
    );
};


export default OnlinePaymentsQRCodeLandingPage;