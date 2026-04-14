import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaStore, FaPhone, FaGlobe, FaMapMarkerAlt, 
    FaDownload, FaStar, FaShareAlt, FaCheck, FaBuilding, FaFacebook, FaInstagram
} from 'react-icons/fa';
import '../../css/BusinessCardQRCodeLandingPage.scss'; 
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

const SmallBusinessQRCodeLandingPage = () => {
    const [businessUrl, setBusinessUrl] = useState('');

    
    const isAllFieldsFilled = businessUrl.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('smallBiz-qr-code');
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
            downloadLink.download = `small-business-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="vcard-landing-container no-select">
            <Helmet>
                <title>QR Code Generator for Small Business | Boost Local Sales</title>
                <meta name="description" content="Generate a free QR code specifically tailored for small businesses. Drive traffic to your website, social media, or Google Reviews instantly with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Supercharge Your <span>Small Business</span></h1>
                    <p className="hero-subtitle">
                        Create custom QR codes that instantly connect customers to your website, menu, 
                        online store, or Google Reviews. Ideal for storefronts and local marketing.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaStore className="me-2" />
                                <span>Business Website / Main Link</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="businessUrlInput">Destination URL (Required)</label>
                                    <input
                                        id="businessUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourstore.com"
                                        value={businessUrl}
                                        onChange={(e) => setBusinessUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Enter your online store, Google My Business review link, or social media page.
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
                                        id="smallBiz-qr-code"
                                        value={isAllFieldsFilled ? businessUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Business QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    Ready for your storefront window!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Grow Your Local Presence</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaStar /></div>
                                <h3>Boost Reviews</h3>
                                <p>Link directly to your Google My Business page to gather 5-star reviews effortlessly from happy customers.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShareAlt /></div>
                                <h3>Social Growth</h3>
                                <p>Direct foot traffic to your Instagram or Facebook to grow your local following and online community.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBuilding /></div>
                                <h3>Digital Storefront</h3>
                                <p>Allow customers passing by after hours to scan and shop your online catalog instantly.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Practical Use Cases */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="p-4 border rounded-4 bg-light">
                                <h3>Where to place your QR Code</h3>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🏢 **Storefront Windows:** Engage window shoppers 24/7.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🛍️ **Shopping Bags:** Bring offline buyers back online.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🧾 **Receipts:** Perfect for feedback and review links.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> ✉️ **Flyers & Menus:** Connect physical marketing to your site.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Marketing Strategy</h3>
                            <p className="text-muted">
                                Small businesses thrive on connection. A QR code removes the friction of 
                                typing out a long URL. Whether you run a cafe, an auto shop, or a boutique, 
                                a simple scannable code bridges the gap between your physical location and 
                                your digital services.
                            </p>
                            <div className="d-flex align-items-center text-primary fw-bold mt-4">
                                <FaStore className="me-2" /> Give your business a competitive digital edge.
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Small Business FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for my Google Reviews page?",
                                    a: "Absolutely! Just copy your specific Google Review link and paste it into the destination URL field above. Print the QR code and put it on your counter."
                                },
                                {
                                    q: "Do QR codes expire?",
                                    a: "No! The static QR codes generated here will last forever, so long as the link you provided stays active."
                                },
                                {
                                    q: "Can I link to my UberEats or DoorDash menu?",
                                    a: "Yes. Simply paste the direct link to your restaurant's delivery page, and customers can order instantly."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-small-business' />
        </div>
    );
};

export default SmallBusinessQRCodeLandingPage;


