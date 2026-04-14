import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaCoffee, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils
} from 'react-icons/fa';
import '../../css/CafeMenuQRCodeLandingPage.scss';
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

const CafeMenuQRCodeLandingPage = () => {
    const [menuUrl, setMenuUrl] = useState('');
    const [cafeName, setCafeName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const isAllFieldsFilled = menuUrl.trim() !== '' && cafeName.trim() !== '' && branchName.trim() !== '' && tableNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('cafe-menu-qr-code');
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
            downloadLink.download = `${cafeName || 'cafe-menu'}-qr.png`;
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
                "name": "How do guests access my cafe menu via QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Guests simply open their smartphone camera, point it at the QR code on your table, and a link will appear. One tap takes them directly to your digital menu."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for a seasonal cafe menu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you link to a URL on your website, you can update the content anytime. The QR code stays the same, but the menu guests see will always be your current seasonal offering."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a website to host my cafe menu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not necessarily. You can upload a PDF of your menu to Google Drive or Dropbox and use that sharing link to generate your QR code."
                }
            }
        ]
    };

    return (
        <div className="cafe-menu-landing-container no-select">
            <Helmet>
                <title>Free Cafe Menu QR Code Generator | QR Menus for Coffee Shops - TheQrify</title>
                <meta name="description" content="Create a contactless menu QR code for your cafe or coffee shop. Instant, free, and stylish. Enhance your guest experience with scannable cafe menus." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Modern <span>Cafe QR Menus</span></h1>
                    <p className="hero-subtitle">
                        Elevate your coffee shop with a sleek, contactless menu experience. 
                        Generate a professional QR code for your cafe in just a few clicks.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaCoffee />
                                <span>Cafe Details</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="cafeNameInput">Cafe or Coffee Shop Name (Required)</label>
                                    <input
                                        id="cafeNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your cafe name"
                                        value={cafeName}
                                        onChange={(e) => setCafeName(e.target.value)}
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
                                    <label htmlFor="menuUrlInput">Menu Link (URL or PDF) (Required)</label>
                                    <input
                                        id="menuUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourcafe.com/menu"
                                        value={menuUrl}
                                        onChange={(e) => setMenuUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Most guests scan these while waiting for or enjoying their coffee.
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
                                        id="cafe-menu-qr-code"
                                        value={isAllFieldsFilled ? `${menuUrl}?cafe=${encodeURIComponent(cafeName)}&branch=${encodeURIComponent(branchName)}&table=${encodeURIComponent(tableNumber)}` : 'https://theqrify.com'}
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
                                    {isAllFieldsFilled ? 'High-contrast design for easy scanning' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Benefits for Your Cafe</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Modern Vibe</h3>
                                <p>Provide the tech-savvy experience your guests expect in a modern coffee shop.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Quick Updates</h3>
                                <p>Easily update your daily specials or "Sold Out" items without re-printing paper menus.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Cost Savings</h3>
                                <p>Reduce paper waste and printing costs while keeping your cafe environmentally friendly.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Set Up Your Cafe QR</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Upload Your Menu</h4>
                                        <p>Link to your existing website menu or upload a PDF to cloud storage.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Enter your link above and download your permanent, high-quality QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Place on Tables</h4>
                                        <p>Print and place your QR codes on tables, drink coasters, or the service counter.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Artisan Coffee Shops</li>
                                    <li className="mb-3"><FaCheckCircle /> Neighborhood Bakeries</li>
                                    <li className="mb-3"><FaCheckCircle /> Dessert Parlors</li>
                                    <li className="mb-3"><FaCheckCircle /> Breakfast & Brunch Spots</li>
                                    <li className="mb-3"><FaCheckCircle /> Juice & Smoothie Bars</li>
                                    <li className="mb-3"><FaCheckCircle /> Tea Houses</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Cafe Menu FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use multiple QR codes for different menus?",
                                    a: "Absolutely. You can create separate QR codes for your Breakfast, Lunch, and Specialty Coffee menus if you wish."
                                },
                                {
                                    q: "Does the QR code expire?",
                                    a: "No. The static QR codes generated by TheQrify are permanent and will never expire."
                                },
                                {
                                    q: "Is it easy for older guests to use?",
                                    a: "Yes! Most modern phones automatically detect QR codes. It's as simple as taking a photo, and it's quickly becoming standard in cafes everywhere."
                                },
                                {
                                    q: "Can I add my logo to the QR code?",
                                    a: "Currently, we provide clean, reliable QR codes optimized for scanning. Logo customization is coming soon in our Pro version."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-cafe-menu' />
        </div>
    );
};

export default CafeMenuQRCodeLandingPage;


