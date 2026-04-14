import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaAppStoreIos, FaGooglePlay, FaDownload, FaMobileAlt,
    FaArrowRight, FaCheckCircle, FaStar, FaShareAlt, FaRocket
} from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import '../../css/WiFiQRCodeLandingPage.scss';
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

const AppStoreQRCodeLandingPage = () => {
    const [appUrl, setAppUrl] = useState('');
    const [appName, setAppName] = useState('');

    const isAllFieldsFilled = appUrl.trim() !== '' && appName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('app-qr-code');
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
            downloadLink.download = `${appName || 'app'}-qr-code.png`;
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
                "name": "Can one QR code link to both App Store and Google Play?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can use a smart link service that detects the user's OS and redirects them to the correct store. Simply paste that smart link into our generator."
                }
            },
            {
                "@type": "Question",
                "name": "How do QR codes help with app downloads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They eliminate the need for users to manually search for your app name, which can lead to downloading the wrong app or giving up. A scan takes them directly to your app page."
                }
            },
            {
                "@type": "Question",
                "name": "Is it better to link to a landing page or the store directly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For the highest conversion, link directly to the app store page. If you need to explain features or offer a cross-platform choice, a landing page might be better."
                }
            }
        ]
    };

    return (
        <div className="wifi-landing-container no-select">
            <Helmet>
                <title>QR Code for App Store & Google Play | Boost Installs - TheQrify</title>
                <meta name="description" content="Increase your mobile app downloads with custom QR codes. Link to iOS App Store or Google Play Store instantly with TheQrify's free generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>QR Codes for <span>App Downloads</span></h1>
                    <p className="hero-subtitle">
                        The fastest way to get your app onto users' phones.
                        Bridge the gap between your physical marketing and the app store.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="generator-card">
                            <Row className="g-4 align-items-center">
                                <Col md={7}>
                                    <h2 className="form-title">App Destination Details</h2>
                                    <Form>
                                        <div className="custom-form-group">
                                            <label htmlFor="appNameInput">App Name (Required)</label>
                                            <input
                                                id="appNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="My Awesome App"
                                                value={appName}
                                                onChange={(e) => setAppName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="custom-form-group">
                                            <label htmlFor="appUrlInput">App Store / Play Store URL (Required)</label>
                                            <input
                                                id="appUrlInput"
                                                type="url"
                                                className="custom-input"
                                                placeholder="https://apps.apple.com/app/your-app-id"
                                                value={appUrl}
                                                onChange={(e) => setAppUrl(e.target.value)}
                                                required
                                            />
                                            <small className="text-muted mt-2 d-block">
                                                Paste the direct link to your app on the App Store or Google Play Store.
                                            </small>
                                        </div>
                                        {!isAllFieldsFilled && (
                                            <div className="alert alert-info py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                                Please fill in all fields to generate the QR code.
                                            </div>
                                        )}
                                    </Form>
                                </Col>
                                <Col md={5}>
                                    <div className="qr-preview-container">
                                        <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                            <QRCodeSVG
                                                id="app-qr-code"
                                                value={isAllFieldsFilled ? appUrl : 'https://theqrify.com'}
                                                size={160}
                                                includeMargin={true}
                                                level="H"
                                            />
                                        </div>
                                        <Button
                                            className="btn-download"
                                            onClick={downloadQRCode}
                                            disabled={!isAllFieldsFilled}
                                        >
                                            <HiOutlineDownload className="me-2" /> Download App QR
                                        </Button>
                                        <p className="text-muted small mt-3 mb-0 text-center">
                                            {isAllFieldsFilled ? 'Optimized for mobile app installation' : 'Fill all fields to preview'}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Drive More Installs</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaRocket /></div>
                                <h3>Instant Access</h3>
                                <p>Take users directly to your app store listing, bypassing the search bar and manual entry.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Higher Conversion</h3>
                                <p>Frictionless downloads lead to higher conversion rates for your marketing campaigns.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShareAlt /></div>
                                <h3>Omnichannel</h3>
                                <p>Use your QR code on business cards, flyers, packaging, and even TV ads to drive app growth.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>Strategic Implementation</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Packaging:** Add a QR code to product boxes to encourage app-based support or loyalty.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**In-Store:** Place signs near checkouts to grow your digital customer base.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Business Cards:** A scan is much faster than typing a search query.</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Best Practices</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Stores:** Use icons for App Store and Play Store to set expectations.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Smart Links:** Consider using a multi-link that handles both OS.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **CTA:** Use "Scan to Download" or "Scan to Install".</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Post-Scan:** Ensure your store page is optimized for conversions.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – App Store QR Codes</h1>
                        <p>Everything you need to know about driving mobile app installs.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can one QR code link to both App Store and Google Play?",
                                    a: "Yes! You can use a smart link service that detects the user's OS and redirects them to the correct store. Simply paste that smart link into our generator."
                                },
                                {
                                    q: "How do QR codes help with app downloads?",
                                    a: "They eliminate the need for users to manually search for your app name, which can lead to downloading the wrong app or giving up. A scan takes them directly to your app page."
                                },
                                {
                                    q: "Is it better to link to a landing page or the store directly?",
                                    a: "For the highest conversion, link directly to the app store page. If you need to explain features or offer a cross-platform choice, a landing page might be better."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>
        
            <LandingPageFooter currentPath='/qr-code-for-app-store' />
        </div>
    );
};

export default AppStoreQRCodeLandingPage;


