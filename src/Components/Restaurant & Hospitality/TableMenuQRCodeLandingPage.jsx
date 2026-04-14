import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaUtensils, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaQrcode
} from 'react-icons/fa';
import '../../css/TableMenuQRCodeLandingPage.scss';
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

const TableMenuQRCodeLandingPage = () => {
    const [menuUrl, setMenuUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const isAllFieldsFilled = menuUrl.trim() !== '' && restaurantName.trim() !== '' && branchName.trim() !== '' && tableNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('table-menu-qr-code');
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
            downloadLink.download = `${restaurantName || 'table-menu'}-qr.png`;
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
                "name": "How do I create a QR code for my restaurant tables?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply enter your menu's URL or upload your menu PDF to a cloud service and paste the link into our generator. Download the high-resolution QR code and print it for your table stands."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use the same QR code on all tables?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can use one universal QR code for all tables that links guests to your digital menu. If you need table-specific ordering, you might need unique codes for each table."
                }
            },
            {
                "@type": "Question",
                "name": "Is it better to link to a PDF or a website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Linking to a mobile-optimized website is generally better as it's easier for guests to navigate. However, a high-quality PDF is a great and simple starting point."
                }
            }
        ]
    };

    return (
        <div className="table-menu-landing-container no-select">
            <Helmet>
                <title>Free Table Menu QR Code Generator | Contactless Menus - TheQrify</title>
                <meta name="description" content="Create a contactless table menu QR code for your restaurant. Instant, free, and secure. Enhance your dining experience with scannable table menus." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Smart <span>Table Menu QR</span> Codes</h1>
                    <p className="hero-subtitle">
                        Bring your menu directly to your guests' fingertips. 
                        Generate professional, high-scan QR codes for your restaurant tables in seconds.
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
                                <span>Table Menu Config</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="restaurantNameInput">Restaurant Name (Required)</label>
                                    <input
                                        id="restaurantNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your restaurant name"
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
                                    <label htmlFor="menuUrlInput">Digital Menu Link (URL or PDF)</label>
                                    <input
                                        id="menuUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourmenu.com"
                                        value={menuUrl}
                                        onChange={(e) => setMenuUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your digital table menu.
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
                                        id="table-menu-qr-code"
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
                                    <FaDownload className="me-2" /> Download Table Menu QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High-resolution, ready for printing' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Improve Your Table Experience</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Instant Access</h3>
                                <p>Guests can browse your menu immediately upon sitting, even before a server arrives.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Easy Updates</h3>
                                <p>Out of an item? Update your digital menu instantly without crossing things out on paper.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Higher Turnover</h3>
                                <p>Streamline the ordering process and allow guests to check the menu for a second round or dessert faster.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Deploy on Your Tables</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Link Your Menu</h4>
                                        <p>Use your website URL or upload a menu PDF to a cloud service.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Paste the link into our tool above and download the scannable code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Place on Tables</h4>
                                        <p>Print the QR codes and place them on individual tables or coasters.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Ideal For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Casual Dining Restaurants</li>
                                    <li className="mb-3"><FaCheckCircle /> Outdoor Cafes & Terraces</li>
                                    <li className="mb-3"><FaCheckCircle /> Fast Casual Eateries</li>
                                    <li className="mb-3"><FaCheckCircle /> Tapas & Wine Bars</li>
                                    <li className="mb-3"><FaCheckCircle /> Hotel Restaurants</li>
                                    <li className="mb-3"><FaCheckCircle /> Pop-up Food Stalls</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Table Menu QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use these codes permanently?",
                                    a: "Yes. The static QR codes generated on TheQrify are 100% free and do not have an expiration date."
                                },
                                {
                                    q: "Will they work if my menu is on Facebook?",
                                    a: "Yes. You can link to any destination URL, including social media pages, though a dedicated menu page is recommended for better UX."
                                },
                                {
                                    q: "Can I track how many people scan the table codes?",
                                    a: "Static QR codes themselves don't provide analytics. For tracking, you would need our upcoming Dynamic QR Pro version."
                                },
                                {
                                    q: "What's the best size for a table QR code?",
                                    a: "A size of about 2cm x 2cm is usually sufficient for modern phones to scan easily from a seating distance on a table stand."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-table-menu' />
        </div>
    );
};

export default TableMenuQRCodeLandingPage;


