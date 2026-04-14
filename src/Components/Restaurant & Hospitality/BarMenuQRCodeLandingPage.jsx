import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaGlassMartiniAlt, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaCocktail
} from 'react-icons/fa';
import '../../css/BarMenuQRCodeLandingPage.scss';
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

const BarMenuQRCodeLandingPage = () => {
    const [menuUrl, setMenuUrl] = useState('');
    const [barName, setBarName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const isAllFieldsFilled = menuUrl.trim() !== '' && barName.trim() !== '' && branchName.trim() !== '' && tableNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('bar-menu-qr-code');
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
            downloadLink.download = `${barName || 'bar-menu'}-qr.png`;
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
                "name": "Why use QR codes for bar menus?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bar environments are often dark or crowded. QR code menus allow guests to browse your drink selection on their own brightly lit screens, reducing the need for physical menus that get worn or spill-damaged."
                }
            },
            {
                "@type": "Question",
                "name": "Can I update drink specials in real-time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you link your QR code to a digital page or a cloud-hosted PDF, you can update your menu anytime. Your guests will always see the latest cocktail specials and tap lists."
                }
            },
            {
                "@type": "Question",
                "name": "How durable are printed QR codes in a bar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When printed on quality coasters, table tents, or laminated stickers, QR codes are very durable. They eliminate the high cost of regularly replacing expensive bar menu books."
                }
            }
        ]
    };

    return (
        <div className="bar-menu-landing-container no-select">
            <Helmet>
                <title>Free Bar Menu QR Code Generator | Drink & Cocktail Menus - TheQrify</title>
                <meta name="description" content="Create a contactless menu QR code for your bar or pub. Free, stylish, and durable. Let your guests browse your cocktail and tap list with a single scan." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Premium <span>Bar QR Menus</span></h1>
                    <p className="hero-subtitle">
                        Modernize your guest experience with scannable drink menus.
                        Generate high-contrast QR codes perfect for low-light bar environments.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaGlassMartiniAlt />
                                <span>Bar Menu Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="barNameInput">Bar or Pub Name (Required)</label>
                                    <input
                                        id="barNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter bar name"
                                        value={barName}
                                        onChange={(e) => setBarName(e.target.value)}
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
                                        placeholder="https://yourbar.com/drinks"
                                        value={menuUrl}
                                        onChange={(e) => setMenuUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: High-contrast designs scan better in dimly lit areas.
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
                                        id="bar-menu-qr-code"
                                        value={isAllFieldsFilled ? `${menuUrl}?bar=${encodeURIComponent(barName)}&branch=${encodeURIComponent(branchName)}&table=${encodeURIComponent(tableNumber)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Bar QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Optimized for fast scanning' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Elevate Your Service</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCocktail /></div>
                                <h3>Visual Sales</h3>
                                <p>Showcase beautiful cocktail photography on a screen to entice more high-margin drink orders.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Dynamic Specials</h3>
                                <p>Swap out tap lists or promote "Happy Hour" deals instantly without re-printing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Durable & Hygienic</h3>
                                <p>No more sticky, beer-soaked menus. A QR code on a coaster is permanent and easy to clean.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Setup Your Bar QR</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Upload Your List</h4>
                                        <p>Link to your website's drink page or upload a PDF cocktail list.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Get Your Code</h4>
                                        <p>Enter your URL above and download your permanent QR code for free.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Deploy on Bar</h4>
                                        <p>Place on coasters, bar mats, table tents, or wall signage.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Craft Beer Pubs</li>
                                    <li className="mb-3"><FaCheckCircle /> Cocktail Lounges</li>
                                    <li className="mb-3"><FaCheckCircle /> Rooftop Bars</li>
                                    <li className="mb-3"><FaCheckCircle /> Nightclubs</li>
                                    <li className="mb-3"><FaCheckCircle /> Sports Bars</li>
                                    <li className="mb-3"><FaCheckCircle /> Wine Bars</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Bar Menu FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use QR codes for 'Order & Pay' at the bar?",
                                    a: "Yes. Simply link the QR code to your bar's ordering platform like Square or Toast, and guests can order another round without leaving their seats."
                                },
                                {
                                    q: "What if my bar has low lighting?",
                                    a: "Our QR codes are high-contrast. We recommend printing them on white backgrounds or backlit stands to ensure easy scanning in any lighting."
                                },
                                {
                                    q: "Are these codes free forever?",
                                    a: "Absolutely. The static QR codes you generate here are yours to keep with no monthly fees or expiration."
                                },
                                {
                                    q: "Do I need to manage any software?",
                                    a: "No. TheQrify generates the code; you just provide the destination link for your menu."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
        
            <LandingPageFooter currentPath='/qr-code-for-bar-menu' />
        </div>
    );
};

export default BarMenuQRCodeLandingPage;


