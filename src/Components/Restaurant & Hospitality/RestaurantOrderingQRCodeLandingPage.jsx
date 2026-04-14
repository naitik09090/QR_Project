import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaShoppingCart, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils, FaCreditCard
} from 'react-icons/fa';
import '../../css/RestaurantOrderingQRCodeLandingPage.scss';
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

const RestaurantOrderingQRCodeLandingPage = () => {
    const [orderingUrl, setOrderingUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [branchName, setBranchName] = useState('');

    const isAllFieldsFilled = orderingUrl.trim() !== '' && restaurantName.trim() !== '' && tableNumber.trim() !== '' && branchName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('ordering-qr-code');
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
            downloadLink.download = `${restaurantName || 'restaurant-ordering'}-qr.png`;
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
                "name": "How does QR code ordering work for restaurants?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Customers scan a QR code on their table which redirects them to a digital ordering platform. They can browse the menu, select items, and pay directly from their phone."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for both dine-in and takeaway?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can generate separate QR codes for tables (dine-in) and place one at the entrance or on your website for takeaway and delivery orders."
                }
            },
            {
                "@type": "Question",
                "name": "What platform should I use for the ordering link?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can link to your existing website's ordering system, or third-party platforms like GloriaFood, Toast, or squareup. Simply paste that link into our generator."
                }
            }
        ]
    };

    return (
        <div className="restaurant-ordering-landing-container no-select">
            <Helmet>
                <title>Free Restaurant Ordering QR Code Generator | Table Ordering - TheQrify</title>
                <meta name="description" content="Create a secure QR code for restaurant ordering. Enable contactless table ordering and payments. Boost efficiency and sales with TheQrify QR generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Seamless <span>Restaurant Ordering</span></h1>
                    <p className="hero-subtitle">
                        Empower your guests to order and pay instantly from their tables. 
                        Streamline operations and increase revenue with smart QR ordering.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaShoppingCart />
                                <span>Ordering Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="restaurantNameInput">Restaurant Name (Required)</label>
                                    <input
                                        id="restaurantNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter restaurant name"
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
                                    <label htmlFor="orderingUrlInput">Ordering Platform Link (URL) (Required)</label>
                                    <input
                                        id="orderingUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourorderingsystem.com"
                                        value={orderingUrl}
                                        onChange={(e) => setOrderingUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your digital ordering portal.
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
                                        id="ordering-qr-code"
                                        value={isAllFieldsFilled ? `${orderingUrl}?restaurant=${encodeURIComponent(restaurantName)}&branch=${encodeURIComponent(branchName)}&table=${encodeURIComponent(tableNumber)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download ordering QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Optimized for fast table scanning' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Implement QR Ordering?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCreditCard /></div>
                                <h3>Higher Order Value</h3>
                                <p>Digital menus often see a 20-30% increase in average order size due to visual upsells.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Labor Efficiency</h3>
                                <p>Free up your staff from taking manual orders and processing payments at the table.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Faster Turnover</h3>
                                <p>Reduce wait times for ordering and billing, allowing you to serve more guests per shift.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Get Started in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Connect Your Store</h4>
                                        <p>Grab the URL of your online ordering system or digital menu page.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Paste the link above, name your restaurant, and download the QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Print & Table</h4>
                                        <p>Print the code on table stickers or stands and start taking orders instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Suited For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Quick Service Restaurants (QSR)</li>
                                    <li className="mb-3"><FaCheckCircle /> Self-Service Cafeterias</li>
                                    <li className="mb-3"><FaCheckCircle /> Table-Service Diners</li>
                                    <li className="mb-3"><FaCheckCircle /> Sports Bars & Pubs</li>
                                    <li className="mb-3"><FaCheckCircle /> Hotel Room Service</li>
                                    <li className="mb-3"><FaCheckCircle /> Rooftop & Poolside Dining</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Restaurant Ordering FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this replace my waitstaff?",
                                    a: "Not at all. It complements your team by handling the routine tasks of order-taking and payment, allowing them to focus on high-quality service."
                                },
                                {
                                    q: "Can I use one QR code for all tables?",
                                    a: "Yes, you can use one general code. However, some ordering systems provide unique URLs for each table so the kitchen knows exactly where the order came from."
                                },
                                {
                                    q: "Is it secure for payments?",
                                    a: "Yes. The QR code simply redirects to your ordering platform, which should use secure payment gateways like Stripe or PayPal."
                                },
                                {
                                    q: "How do I handle tips?",
                                    a: "Most modern digital ordering platforms have built-in tipping options that guests can select during checkout."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-restaurant-ordering' />
        </div>
    );
};

export default RestaurantOrderingQRCodeLandingPage;


