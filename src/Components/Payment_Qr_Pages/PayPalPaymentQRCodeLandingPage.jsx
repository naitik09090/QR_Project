import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaPaypal, FaDownload, FaMoneyBillWave,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaLock, FaShoppingCart
} from 'react-icons/fa';
import '../../css/PayPalPaymentQRCodeLandingPage.scss';


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

const PayPalPaymentQRCodeLandingPage = () => {
    const [paypalEmail, setPaypalEmail] = useState('');
    const [itemName, setItemName] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [paymentUrl, setPaymentUrl] = useState('');

    const isAllFieldsFilled = paypalEmail.trim() !== '' && itemName.trim() !== '' && amount.trim() !== '';

    useEffect(() => {
        if (paypalEmail) {
            // PayPal Standard Payment URL Construction
            const baseUrl = "https://www.paypal.com/cgi-bin/webscr";
            const params = new URLSearchParams({
                cmd: "_xclick",
                business: paypalEmail,
                item_name: itemName || "Payment",
                amount: amount || "0.00",
                currency_code: currency,
                no_shipping: "1"
            });
            setPaymentUrl(`${baseUrl}?${params.toString()}`);
        } else {
            setPaymentUrl('');
        }
    }, [paypalEmail, itemName, amount, currency]);

    const downloadQRCode = () => {
        const svg = document.getElementById('paypal-qr-code');
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
            downloadLink.download = `paypal-payment-qr.png`;
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
                "name": "How does a PayPal QR code work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A PayPal QR code encodes a direct payment link. When scanned, it opens the PayPal checkout page with your email and the specified amount pre-filled, allowing for quick and secure transactions."
                }
            },
            {
                "@type": "Question",
                "name": "Can I set a fixed amount for the payment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can specify the exact amount and currency in the generator so customers don't have to enter it manually."
                }
            },
            {
                "@type": "Question",
                "name": "Is it secure to use QR codes for payments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The QR code simply redirects users to official PayPal secure servers. No payment data is stored in the QR code itself."
                }
            }
        ]
    };

    return (
        <div className="paypal-payment-landing-container no-select">
            <Helmet>
                <title>Free PayPal Payment QR Code Generator | Secure Instant Payments - TheQrify</title>
                <meta name="description" content="Generate a secure PayPal payment QR code and get paid instantly. Accept credit cards and PayPal balance with a professional scannable code for your business." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Secure <span>PayPal Payment</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Get paid instantly, anywhere. 
                        Enable seamless, secure transactions for products or services with a professional high-intent payment QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaPaypal />
                                <span>Payment Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="paypalEmailInput">PayPal Email / Merchant ID (Required)</label>
                                    <input
                                        id="paypalEmailInput"
                                        type="email"
                                        className="custom-input"
                                        placeholder="yourname@example.com"
                                        value={paypalEmail}
                                        onChange={(e) => setPaypalEmail(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">Required to receive payments.</small>
                                </div>
                                <Row>
                                    <Col md={8}>
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
                                    <Col md={4}>
                                        <div className="custom-form-group">
                                            <label htmlFor="currencySelect">Currency</label>
                                            <select
                                                id="currencySelect"
                                                className="custom-select"
                                                value={currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                            >
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="GBP">GBP</option>
                                                <option value="INR">INR</option>
                                                <option value="AUD">AUD</option>
                                                <option value="CAD">CAD</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="custom-form-group">
                                    <label htmlFor="itemNameInput">Item Name / Description (Required)</label>
                                    <input
                                        id="itemNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Consulting Service"
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
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
                                            id="paypal-qr-code"
                                            value={isAllFieldsFilled ? paymentUrl : 'https://theqrify.com'}
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
                                        {isAllFieldsFilled ? `Bridge to ${itemName}` : 'Fill all fields to preview'}
                                    </p>
                                </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Professional Payment Solutions</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLock /></div>
                                <h3>Fraud Protected</h3>
                                <p>QR codes leverage PayPal's world-class security, ensuring every transaction is protected for both parties.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMoneyBillWave /></div>
                                <h3>Instant Settlement</h3>
                                <p>Funds reach your PayPal account immediately after the customer completes the checkout scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShoppingCart /></div>
                                <h3>Higher Conversions</h3>
                                <p>Remove payment friction. Customers can pay with their phone's stored credit cards or balance.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Set Up Payments in Seconds</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Identify Yourself</h4>
                                        <p>Enter your PayPal business email or merchant ID to link the payment to your account.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Define Value</h4>
                                        <p>Add an optional amount and item description to create a dedicated 'Buy Now' QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Collect Payments</h4>
                                        <p>Download and print your QR code on invoices, product tags, or storefront signs.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>High-RPM Placements</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Freelance Invoices</li>
                                    <li className="mb-3"><FaCheckCircle /> Product Price Tags</li>
                                    <li className="mb-3"><FaCheckCircle /> Event Ticket Checkouts</li>
                                    <li className="mb-3"><FaCheckCircle /> Charity & Donation Boxes</li>
                                    <li className="mb-3"><FaCheckCircle /> Storefront Checkout Areas</li>
                                    <li className="mb-3"><FaCheckCircle /> Catalog & Magazine Orders</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>PayPal Payment FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do I need a PayPal Business account?",
                                    a: "You can use either a Personal or Business account, but a Business account provides more professional features and checkout experiences for your customers."
                                },
                                {
                                    q: "Can customers pay with credit cards?",
                                    a: "Yes. When they scan the QR code, PayPal offers them the choice to pay with their balance, linked bank account, or any major credit/debit card."
                                },
                                {
                                    q: "How many scans can the code handle?",
                                    a: "Infinite. Static PayPal QR codes created here have no scan limits and never expire."
                                },
                                {
                                    q: "Are there transaction fees?",
                                    a: "TheQrify does not charge any fees. Standard PayPal transaction fees apply to your account when you receive a payment."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
            <LandingPageFooter currentPath='/qr-code-for-paypal-payment' />
        </div>
    );
};


export default PayPalPaymentQRCodeLandingPage;
