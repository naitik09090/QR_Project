import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFileInvoiceDollar, FaDownload, FaBriefcase,
    FaCheckCircle, FaLock, FaBuilding, FaRegClock
} from 'react-icons/fa';
import '../../css/InvoicesQRCodeLandingPage.scss';


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

const InvoicesQRCodeLandingPage = () => {
    const [invoiceLink, setInvoiceLink] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [clientName, setClientName] = useState('');
    const [amount, setAmount] = useState('');
    const isAllFieldsFilled = invoiceLink.trim() !== '' && invoiceNumber.trim() !== '' && clientName.trim() !== '' && amount.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('invoice-qr-code');
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
            downloadLink.download = `${invoiceNumber || 'invoice'}-qr.png`;
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
                "name": "How do I add a QR code to my invoice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply paste the link to your digital invoice or your direct payment portal (Stripe, PayPal, etc.) into our generator. Download the resulting high-resolution QR code and embed it into your PDF or printed invoice."
                }
            },
            {
                "@type": "Question",
                "name": "Why use QR codes for invoices?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "QR codes reduce friction for your clients, allowing them to scan and pay instantly from their mobile devices. This leads to faster payments and fewer overdue invoices for your business."
                }
            },
            {
                "@type": "Question",
                "name": "Is it secure for my clients?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The QR code only contains the URL you provide. It redirects your clients to your existing secure payment environment. We do not store or process any of the financial data."
                }
            }
        ]
    };

    return (
        <div className="invoices-landing-container no-select">
            <Helmet>
                <title>Free Invoice QR Code Generator | Get Paid Faster - TheQrify</title>
                <meta name="description" content="Create professional QR codes for your business invoices. Let clients scan and pay instantly. Compatible with Stripe, PayPal, and more. Secure and free." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Accelerate Payments with <span>Invoice</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Streamline your billing cycle. 
                        Make it effortless for clients to settle their balances by adding a scannable payment bridge to every invoice you send.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFileInvoiceDollar size={35} />
                                <span>Invoice Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="invoiceLinkInput">Invoice URL / Payment Gateway Link (Required)</label>
                                    <input
                                        id="invoiceLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://billing.yourcompany.com/inv-123"
                                        value={invoiceLink}
                                        onChange={(e) => setInvoiceLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">The secure destination where your client completes the payment.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="clientNameInput">Client Name / Business (Required)</label>
                                            <input
                                                id="clientNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Acme Corp"
                                                value={clientName}
                                                onChange={(e) => setClientName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="amountInput">Total Amount Due (Required)</label>
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
                                    <label htmlFor="invoiceNumInput">Invoice Number / ID (Required)</label>
                                    <input
                                        id="invoiceNumInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="INV-2026-0042"
                                        value={invoiceNumber}
                                        onChange={(e) => setInvoiceNumber(e.target.value)}
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
                                            id="invoice-qr-code"
                                            value={isAllFieldsFilled ? invoiceLink : 'https://theqrify.com'}
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
                                        <FaDownload className="me-2" /> Download Invoice QR
                                    </Button>
                                    <p className="text-muted small mt-3 mb-0 text-center">
                                        {isAllFieldsFilled ? `Bridge to Invoice ${invoiceNumber}` : 'Fill all fields to preview'}
                                    </p>
                                </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Professional Billing Solutions</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaRegClock /></div>
                                <h3>Reduce DSOs</h3>
                                <p>Decrease your Days Sales Outstanding by giving clients a faster, more convenient way to pay.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCheckCircle /></div>
                                <h3>Error Reduction</h3>
                                <p>Eliminate manual entry errors. The QR code takes the client directly to the correct payment page.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBuilding /></div>
                                <h3>Brand Reputation</h3>
                                <p>Show your clients that your business uses modern, efficient technology for all interactions.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Optimize Your Workflow</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Generate Payment Link</h4>
                                        <p>Create a payment request or digital invoice in your accounting software (Xero, QuickBooks, etc.).</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Create Your QR</h4>
                                        <p>Paste the link above and download the QR code in high definition for printing.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Embed and Send</h4>
                                        <p>Place the QR code prominently on your invoice templates and start getting paid faster.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Ideal For Any Industry</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> B2B Service Agencies</li>
                                    <li className="mb-3"><FaCheckCircle /> Independent Consultants</li>
                                    <li className="mb-3"><FaCheckCircle /> Construction & Trade Services</li>
                                    <li className="mb-3"><FaCheckCircle /> Freelance Creative Work</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail & Wholesale Suppliers</li>
                                    <li className="mb-3"><FaCheckCircle /> Subscription-Based Businesses</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Invoice QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for printed invoices?",
                                    a: "Yes! In fact, QR codes are most effective on printed invoices, as they allow clients to pay using their phone without having to manually type a complex URL."
                                },
                                {
                                    q: "Does it work with multiple currencies?",
                                    a: "The QR code links to your payment gateway. If your gateway supports multiple currencies, the QR code will facilitate that transaction as well."
                                },
                                {
                                    q: "Can I embed my company logo?",
                                    a: "Current static QR codes are optimized for scannability. For custom branding with logos, stay tuned for our upcoming Pro features."
                                },
                                {
                                    q: "Is there a limit to how many I can make?",
                                    a: "No. You can generate unlimited invoice QR codes for free on TheQrify."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
            <LandingPageFooter currentPath='/qr-code-for-invoices' />
        </div>
    );
};


export default InvoicesQRCodeLandingPage;