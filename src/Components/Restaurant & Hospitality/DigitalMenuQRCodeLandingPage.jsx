import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaUtensils, FaArrowRight, FaDownload, FaMobileAlt,
    FaShieldAlt, FaSyncAlt, FaChartBar, FaCheckCircle, FaStar, FaQrcode
} from 'react-icons/fa';
import '../../css/DigitalMenuQRCodeLandingPage.scss';
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

const DigitalMenuQRCodeLandingPage = () => {
    const [menuUrl, setMenuUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const isAllFieldsFilled = menuUrl.trim() !== '' && restaurantName.trim() !== '' && branchName.trim() !== '' && tableNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('digital-menu-qr-code');
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
            downloadLink.download = `${restaurantName || 'digital-menu'}-qr.png`;
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
                "name": "How does a digital menu QR code work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A digital menu QR code redirects customers to an online version of your menu (PDF or website) when scanned with a smartphone camera. This eliminates the need for physical menus."
                }
            },
            {
                "@type": "Question",
                "name": "Can I update my menu without changing the QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you link the QR code to a website URL or a hosted PDF file, you can simply update the content at that URL. The QR code remains the same and will always point to the latest version of your menu."
                }
            },
            {
                "@type": "Question",
                "name": "Is this QR code generator really free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The static QR codes generated on TheQrify are 100% free, never expire, and can be used for commercial purposes without any hidden costs."
                }
            }
        ]
    };

    return (
        <div className="digital-menu-landing-container no-select">
            <Helmet>
                <title>Free Digital Menu QR Code Generator | Contactless Dining - TheQrify</title>
                <meta name="description" content="Create a contactless digital menu QR code for your restaurant, cafe, or bar. Instant, free, and secure. Enhance your customer experience with digital scannable menus." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Smart <span>Digital Menus</span> for Modern Dining</h1>
                    <p className="hero-subtitle">
                        Transform your guest experience with instant, contactless menu access. 
                        Generate a secure QR code for your digital menu in seconds.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaUtensils />
                                <span>Menu Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="restaurantNameInput">Restaurant or Cafe Name (Required)</label>
                                    <input
                                        id="restaurantNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your business name"
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
                                    <label htmlFor="menuUrlInput">Digital Menu Link (URL or PDF) (Required)</label>
                                    <input
                                        id="menuUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourwebsite.com/menu"
                                        value={menuUrl}
                                        onChange={(e) => setMenuUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to open your menu instantly.
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
                                        id="digital-menu-qr-code"
                                        value={isAllFieldsFilled ? `${menuUrl}?restaurant=${encodeURIComponent(restaurantName)}&branch=${encodeURIComponent(branchName)}&table=${encodeURIComponent(tableNumber)}` : 'https://theqrify.com'}
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
                                    {isAllFieldsFilled ? 'High resolution, ready for print' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Switch to Digital Menus?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Total Hygiene</h3>
                                <p>Provide a 100% contactless experience and keep your staff and guests safe.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Real-time Updates</h3>
                                <p>Change prices or ingredients on your digital menu instantly without re-printing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Operational Efficiency</h3>
                                <p>Guests can browse immediately, leading to faster ordering and higher table turnover.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>3 Easy Steps to Go Digital</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Prepare Your Link</h4>
                                        <p>Upload your menu to your website or a cloud storage service like Drive or Dropbox.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate Your QR</h4>
                                        <p>Paste the direct menu link into the generator above and customize your business name.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Deploy on Tables</h4>
                                        <p>Download the QR code and print it on table tents, stickers, or display boards.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For All Venues</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Fine Dining & Casual Restaurants</li>
                                    <li className="mb-3"><FaCheckCircle /> Busy Bars & Nightclubs</li>
                                    <li className="mb-3"><FaCheckCircle /> Cafes & Coffee Shops</li>
                                    <li className="mb-3"><FaCheckCircle /> Hotels & In-room Dining</li>
                                    <li className="mb-3"><FaCheckCircle /> Beach Clubs & Outdoor Resorts</li>
                                    <li className="mb-3"><FaCheckCircle /> Food Courts & Pop-up Venues</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Digital Menu FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do I need special hardware to use digital menus?",
                                    a: "No! All you need is a standard printer to print your QR codes. Your customers use their own smartphones to scan and view the menu."
                                },
                                {
                                    q: "Can I link to a social media page instead of a PDF?",
                                    a: "Yes. You can link to an Instagram profile, a Facebook menu page, or any other URL where your menu is visible."
                                },
                                {
                                    q: "Will the QR code stop working after some time?",
                                    a: "No. The static QR codes we generate are permanent. They don't have an expiration date and will work as long as your destination link is active."
                                },
                                {
                                    q: "Is it mobile-friendly?",
                                    a: "The QR code itself is just a link. To ensure a great guest experience, make sure the menu you link to is optimized for mobile viewing."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-digital-menu' />
        </div>
    );
};

export default DigitalMenuQRCodeLandingPage;


