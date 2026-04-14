import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaUtensils, FaArrowRight, FaDownload, FaMobileAlt,
    FaShieldAlt, FaSyncAlt, FaChartBar, FaCheckCircle, FaStar
} from 'react-icons/fa';
import '../../css/MenuQRCodeLandingPage.scss';
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

const MenuQRCodeLandingPage = () => {
    const [menuUrl, setMenuUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');

    const isAllFieldsFilled = menuUrl.trim() !== '' && restaurantName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('menu-qr-code');
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
            downloadLink.download = `${restaurantName || 'restaurant'}-menu-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="menu-landing-container no-select">
            <Helmet>
                <title>Free Restaurant Menu QR Code Generator | TheQrify</title>
                <meta name="description" content="Create contactless digital menu QR codes for your restaurant or cafe. Free, easy to use, and safe for customers. Boost your dining experience with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Digitalize Your <span>Restaurant Menu</span></h1>
                    <p className="hero-subtitle">
                        Create a modern, contactless dining experience in seconds.
                        Give your guests instant access to your menu with a simple scan.
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
                                <span>Menu Details</span>
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
                                    <label htmlFor="menuUrlInput">Menu URL or PDF Link (Required)</label>
                                    <input
                                        id="menuUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourmenu.com or PDF link"
                                        value={menuUrl}
                                        onChange={(e) => setMenuUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Upload your PDF to Google Drive or Dropbox and paste the link here.
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
                                        id="menu-qr-code"
                                        value={isAllFieldsFilled ? menuUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Menu QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready to print for your tables' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Use QR Menus?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Contactless</h3>
                                <p>Provide a safe and hygienic dining experience by eliminating physical menu sharing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Save Printing Costs</h3>
                                <p>Update your prices or items online without ever needing to re-print your menus.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Faster Service</h3>
                                <p>Guests can check the menu immediately upon sitting, reducing table turnover time.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>How It Works</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Upload Your Menu</h4>
                                        <p>Upload your menu PDF to a cloud drive (Drive, Dropbox) or your website.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Paste the direct link into our generator above and name your code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Print & Place</h4>
                                        <p>Download your QR code, print it, and place it on tables or at the entrance.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Fine Dining Restaurants</li>
                                    <li className="mb-3"><FaCheckCircle /> Cafes & Coffee Shops</li>
                                    <li className="mb-3"><FaCheckCircle /> Bars & Rooftop Lounges</li>
                                    <li className="mb-3"><FaCheckCircle /> Hotels & Room Service</li>
                                    <li className="mb-3"><FaCheckCircle /> Food Trucks & Pop-up Stores</li>
                                    <li className="mb-3"><FaCheckCircle /> Bakeries & Patisseries</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Everything You Need to Know</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do my customers need an app to scan the menu?",
                                    a: "No! Most modern smartphones (iOS and Android) can scan QR codes directly through their standard camera app. Just point and scan."
                                },
                                {
                                    q: "Can I use a PDF for my menu?",
                                    a: "Yes. Simply upload your PDF to a service like Google Drive, set the sharing to \"Public\" or \"Anyone with the link\", and paste that link into our generator."
                                },
                                {
                                    q: "Can I customize the look of the QR code?",
                                    a: "Currently, we provide clean, high-contrast QR codes for maximum scan reliability. We are working on custom colors and logo features for our upcoming Pro version."
                                },
                                {
                                    q: "Is this service really free?",
                                    a: "The static QR codes generated on this page are 100% free and never expire. You can generate as many as you need for your business."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/restaurant-menu-qr-code' />
        </div>
    );
};

export default MenuQRCodeLandingPage;


