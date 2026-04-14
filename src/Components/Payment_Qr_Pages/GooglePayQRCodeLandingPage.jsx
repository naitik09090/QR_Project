import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaGooglePay, FaDownload, FaMoneyCheckAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaLock, FaGlobe
} from 'react-icons/fa';
import '../../css/GooglePayQRCodeLandingPage.scss';


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

const GooglePayQRCodeLandingPage = () => {
    const [upiId, setUpiId] = useState('');
    const [payeeName, setPayeeName] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionNote, setTransactionNote] = useState('');
    const [paymentUri, setPaymentUri] = useState('');
    const isAllFieldsFilled = upiId.trim() !== '' && payeeName.trim() !== '' && amount.trim() !== '' && transactionNote.trim() !== '';

    useEffect(() => {
        if (upiId) {
            // UPI Deep Link construction for Google Pay / BharatQR etc.
            const params = new URLSearchParams({
                pa: upiId,
                pn: payeeName || upiId.split('@')[0],
                tn: transactionNote || 'Payment',
                am: amount || '',
                cu: 'INR'
            });
            // Google Pay uses the standard UPI protocol for fast scannable payments
            setPaymentUri(`upi://pay?${params.toString()}`);
        } else {
            setPaymentUri('');
        }
    }, [upiId, payeeName, amount, transactionNote]);

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('gpay-qr-code');
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
            downloadLink.download = `google-pay-payment-qr.png`;
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
                "name": "How do I use a Google Pay QR code for payments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply enter your UPI ID or merchant VPA, your name, and an optional amount. Download the generated QR code and display it. Customers can scan it with their Google Pay app to pay you instantly."
                }
            },
            {
                "@type": "Question",
                "name": "Does this work for personal Google Pay too?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can use your personal UPI ID (e.g., yourname@okaxis) to receive payments from friends or family directly into your bank account."
                }
            },
            {
                "@type": "Question",
                "name": "Are there any hidden transaction fees?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. TheQrify provides the QR generator for free. Google Pay and your bank handle the transaction via UPI, which is generally free for peer-to-peer transfers."
                }
            }
        ]
    };

    return (
        <div className="google-pay-landing-container no-select">
            <Helmet>
                <title>Free Google Pay QR Code Generator | Instant Deep-Link Payments - TheQrify</title>
                <meta name="description" content="Generate a free Google Pay QR code using secure UPI deep links. Accept instant payments from GPay users without complex HTTP URLs. Professional and secure." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Secure <span>Google Pay</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Fast, frictionless, and secure. 
                        Enable instant peer-to-peer or merchant payments using official UPI deep links—no browser redirects required.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaGooglePay size={50} />
                                <span>GPay Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="upiIdInput">UPI ID / VPA (Virtual Payment Address) (Required)</label>
                                    <input
                                        id="upiIdInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., mobile@okaxis or merchant@upi"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">This is where your money will be sent.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="payeeNameInput">Name / Business Name (Required)</label>
                                            <input
                                                id="payeeNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Payee Name"
                                                value={payeeName}
                                                onChange={(e) => setPayeeName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="amountInput">Amount (Required)</label>
                                            <input
                                                id="amountInput"
                                                type="number"
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
                                    <label htmlFor="noteInput">Transaction Note (Required)</label>
                                    <input
                                        id="noteInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Coffee Payment"
                                        value={transactionNote}
                                        onChange={(e) => setTransactionNote(e.target.value)}
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
                                            id="gpay-qr-code"
                                            value={isAllFieldsFilled ? paymentUri : 'https://theqrify.com'}
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
                                        <FaDownload className="me-2" /> Download GPay QR
                                    </Button>
                                    <p className="text-muted small mt-3 mb-0 text-center">
                                        {isAllFieldsFilled ? `Bridge to ${payeeName}` : 'Fill all fields to preview'}
                                    </p>
                                </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Next-Gen Payment Experience</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLock /></div>
                                <h3>Direct Bank-to-Bank</h3>
                                <p>Funds are transferred directly between banks, utilizing superior encryption and official payment gateways.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaGlobe /></div>
                                <h3>No HTTP Redirects</h3>
                                <p>Our codes use native deep links that launch payment apps instantly, bypassing slow and insecure browser redirects.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMoneyCheckAlt /></div>
                                <h3>Zero Platform Fees</h3>
                                <p>TheQrify doesn't take a cut. Every scan goes 100% to your account according to your bank's policy.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Accept Payments in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Enter VPA Details</h4>
                                        <p>Input your Virtual Payment Address (UPI ID) and your display name.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Custom Amount</h4>
                                        <p>Optionally add a fixed amount to simplify the checkout for your customers.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Display & Collect</h4>
                                        <p>Print the QR on your till or send it digitally to receive money instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Ideal For Small Businesses</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Street Vendors & Local Shops</li>
                                    <li className="mb-3"><FaCheckCircle /> Freelancers & Service Providers</li>
                                    <li className="mb-3"><FaCheckCircle /> Home-based Businesses</li>
                                    <li className="mb-3"><FaCheckCircle /> Donation Drives & NGOs</li>
                                    <li className="mb-3"><FaCheckCircle /> Personal Fund Collection</li>
                                    <li className="mb-3"><FaCheckCircle /> In-App Fast Checkout</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Google Pay QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I receive international payments?",
                                    a: "Currently, this deep-link QR generator is optimized for UPI-enabled regions. For international payments, consider our PayPal or Stripe solutions."
                                },
                                {
                                    q: "What happens if I type the wrong UPI ID?",
                                    a: "Please double-check your ID. Money sent to a wrong but valid ID cannot be reversed by TheQrify, as we are only the generator and not the payment processor."
                                },
                                {
                                    q: "Can I use this for my retail billing?",
                                    a: "Yes! You can generate individual codes for each invoice by specifying the amount and order ID in the note field."
                                },
                                {
                                    q: "Does it work with other UPI apps?",
                                    a: "Yes. While branded for Google Pay, these standard UPI deep links can also be scanned by PhonePe, Paytm, or any banking app."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-google-pay' />
        </div>
    );
};

export default GooglePayQRCodeLandingPage;
