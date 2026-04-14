import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaTicketAlt, FaPercent, FaHandPointer, 
    FaDownload, FaPrint, FaShareAlt, FaCheck, FaFileAlt, FaLightbulb,
    FaArrowRight, FaCheckCircle
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

const FlyersQRCodeLandingPage = () => {
    const [flyerName, setFlyerName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [flyerUrl, setFlyerUrl] = useState('');

    const isAllFieldsFilled = flyerName.trim() !== '' && brandName.trim() !== '' && flyerUrl.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('flyer-qr-code');
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
            downloadLink.download = `${flyerName || 'flyer'}-qr-code.png`;
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
                "name": "Can I customize the color of my flyer QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! While our landing page uses standard black/white for maximum scannability, you can use our main home page generator to customize colors."
                }
            },
            {
                "@type": "Question",
                "name": "How do I test my flyer QR code before printing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Always do a 'hand-scan' test. Print one copy at home at the actual size and scan it with a few different phones to ensure it works."
                }
            },
            {
                "@type": "Question",
                "name": "Will the QR code still work if the flyer is posted outside?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. So long as the ink doesn't fade and there's enough contrast, the code will remain fully functional out in the wild."
                }
            }
        ]
    };

    return (
        <div className="wifi-landing-container no-select">
            <Helmet>
                <title>QR Code for Flyers & Posters | High-Resolution Print QR - TheQrify</title>
                <meta name="description" content="Generate high-resolution QR codes for your flyers, posters, and brochures. Boost engagement and track offline conversions instantly with TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>QR Codes for <span>Flyers & Posters</span></h1>
                    <p className="hero-subtitle">
                        Turn your physical flyers into interactive marketing tools.
                        Connect readers to your event details, promo codes, or online sign-up forms instantly.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <section className="generator-card">
                    <Row className="g-4 align-items-center">
                        <Col lg={7}>
                            <h2 className="form-title">Flyer Details</h2>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="flyerNameInput">Flyer / Event Name (Required)</label>
                                            <input
                                                id="flyerNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Rock Concert 2026"
                                                value={flyerName}
                                                onChange={(e) => setFlyerName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="brandNameInput">Brand / Organization Name (Required)</label>
                                            <input
                                                id="brandNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Downtown Music Collective"
                                                value={brandName}
                                                onChange={(e) => setBrandName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="custom-form-group">
                                    <label htmlFor="flyerUrlInput">Promo / Event URL (Required)</label>
                                    <input
                                        id="flyerUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourbrand.com/promo-flyer"
                                        value={flyerUrl}
                                        onChange={(e) => setFlyerUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Enter the link for your event registration, discount code, or digital brochure.
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
                                        id="flyer-qr-code"
                                        value={isAllFieldsFilled ? flyerUrl : 'https://theqrify.com'}
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
                                    <HiOutlineDownload className="me-2" /> Download Flyer QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High-resolution output for print ads' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Enhance Your Print Marketing</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaPercent /></div>
                                <h3>Direct Conversions</h3>
                                <p>Instead of hoping they remember your URL, let them scan a QR code to claim a discount or buy a ticket immediately.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHandPointer /></div>
                                <h3>Save Space</h3>
                                <p>Keep your flyer design clean and minimal by moving secondary information to a digital landing page.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaTicketAlt /></div>
                                <h3>Event Ready</h3>
                                <p>Perfect for event posters. Link to Google Maps for directions or an 'Add to Calendar' button.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>How it works</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>Enter the destination URL for your campaign or event.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>Download the high-resolution QR code image.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>Add the QR code to your flyer design and print!</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Flyer Layout Tips</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **CTA:** Add "Scan for [Benefit]" text.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Size:** Ensure at least 3x3 cm on a flyer.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Contrast:** Keep it scannable against backgrounds.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Level:** High correction for wrinkled paper.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – Flyer QR Codes</h1>
                        <p>Everything you need to know about professional print QR codes.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I customize the color of my flyer QR code?",
                                    a: "Yes! While our landing page uses standard black/white for maximum scannability, you can use our main home page generator to customize colors."
                                },
                                {
                                    q: "How do I test my flyer QR code before printing?",
                                    a: "Always do a 'hand-scan' test. Print one copy at home at the actual size and scan it with a few different phones to ensure it works."
                                },
                                {
                                    q: "Will the QR code still work if the flyer is posted outside?",
                                    a: "Yes. So long as the ink doesn't fade and there's enough contrast, the code will remain fully functional out in the wild."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-flyers' />
        </div>
    );
};

export default FlyersQRCodeLandingPage;