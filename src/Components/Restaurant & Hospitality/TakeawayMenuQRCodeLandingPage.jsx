import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaShoppingBag, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils, FaStore
} from 'react-icons/fa';
import '../../css/TakeawayMenuQRCodeLandingPage.scss';
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

const TakeawayMenuQRCodeLandingPage = () => {
    const [takeawayUrl, setTakeawayUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [branchName, setBranchName] = useState('');

    const isAllFieldsFilled = takeawayUrl.trim() !== '' && restaurantName.trim() !== '' && branchName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('takeaway-menu-qr-code');
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
            downloadLink.download = `${restaurantName || 'takeaway-menu'}-qr.png`;
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
                "name": "How do Takeaway Menu QR codes benefit my restaurant?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They allow customers to view your menu instantly by scanning a code on your window or marketing materials, reducing the need for physical menus and speeding up the ordering process."
                }
            },
            {
                "@type": "Question",
                "name": "Where should I place takeaway QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most effective spots are on your front window, counter, takeaway bags, and local flyers. This ensures maximum visibility for both passersby and existing customers."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link the QR code to my Facebook or Instagram menu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can link your QR code to any URL, including your social media pages, your website, or a cloud-hosted PDF menu."
                }
            }
        ]
    };

    return (
        <div className="takeaway-menu-landing-container no-select">
            <Helmet>
                <title>Free Takeaway Menu QR Code Generator | Modern Ordering - TheQrify</title>
                <meta name="description" content="Create a free, stylish QR code for your takeaway menu. Simplify the ordering process and attract more customers with a single scan." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Smart <span>Takeaway QR Menus</span></h1>
                    <p className="hero-subtitle">
                        Streamline your takeaway business. 
                        Provide instant menu access to your customers with a professional QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaStore />
                                <span>Takeaway Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="restaurantNameInput">Business Name (Required)</label>
                                    <input
                                        id="restaurantNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter business name"
                                        value={restaurantName}
                                        onChange={(e) => setRestaurantName(e.target.value)}
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
                                    <label htmlFor="takeawayUrlInput">Menu Link (URL or PDF) (Required)</label>
                                    <input
                                        id="takeawayUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourrestaurant.com/takeaway"
                                        value={takeawayUrl}
                                        onChange={(e) => setTakeawayUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your digital takeaway menu.
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
                                        id="takeaway-menu-qr-code"
                                        value={isAllFieldsFilled ? `${takeawayUrl}?business=${encodeURIComponent(restaurantName)}&branch=${encodeURIComponent(branchName)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Takeaway QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready for window & bag printing' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Modernize Your Takeaway</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShoppingBag /></div>
                                <h3>Higher Sales</h3>
                                <p>Encourage spontaneous orders from passersby who can scan your menu from the window.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Zero Print Costs</h3>
                                <p>Update your digital menu anytime without having to reprint hundreds of paper flyers.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Faster Turnarounds</h3>
                                <p>Speed up the line as customers arrive having already browsed your menu via the QR code.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Launch in Minutes</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Digitalize Your Menu</h4>
                                        <p>Ensure your menu is available online via your website or a PDF host.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your personalized takeover QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Deploy Your Code</h4>
                                        <p>Print on your front window, counter, and takeaway bags for instant access.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Locations</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Store Front Windows</li>
                                    <li className="mb-3"><FaCheckCircle /> Takeaway Packaging</li>
                                    <li className="mb-3"><FaCheckCircle /> Checkout Counters</li>
                                    <li className="mb-3"><FaCheckCircle /> Promotional Flyers</li>
                                    <li className="mb-3"><FaCheckCircle /> Local Community Boards</li>
                                    <li className="mb-3"><FaCheckCircle /> Social Media Posts</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Takeaway Menu FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for multiple restaurant locations?",
                                    a: "Absolutely. You can create different QR codes for each of your takeaway outlets to track local performance."
                                },
                                {
                                    q: "What if I change my menu prices?",
                                    a: "If you link to a digital page, the QR code stays the same while you update the prices on your website."
                                },
                                {
                                    q: "Is it really free?",
                                    a: "Yes. Static QR codes created on TheQrify are free forever with no scan limits or hidden charges."
                                },
                                {
                                    q: "Do I need any special software?",
                                    a: "No special software is needed. Your customers just need a smartphone camera to scan the code."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-takeaway-menu' />
        </div>
    );
};

export default TakeawayMenuQRCodeLandingPage;


