import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaHome, FaKey, FaVideo, FaMapMarkedAlt,
    FaDownload, FaSign, FaShareAlt, FaCheck, FaBuilding, FaLightbulb,
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

const RealEstateQRCodeLandingPage = () => {
    const [propertyAddress, setPropertyAddress] = useState('');
    const [agentName, setAgentName] = useState('');
    const [propertyUrl, setPropertyUrl] = useState('');

    const isAllFieldsFilled = propertyAddress.trim() !== '' && agentName.trim() !== '' && propertyUrl.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('realestate-qr-code');
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
            downloadLink.download = `${propertyAddress || 'property'}-listing-qr.png`;
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
                "name": "How do real estate agents use QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agents use them on 'For Sale' signs to provide instant access to property details, virtual tours, high-res photos, and agent contact information."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a 3D virtual tour?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can link to Matterport tours, YouTube walkthroughs, or your property listing page on Zillow or your own agency website."
                }
            },
            {
                "@type": "Question",
                "name": "What size should a QR code be on a yard sign?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On a standard yard sign, the QR code should be at least 4-6 inches wide so it can be scanned easily from the sidewalk or a car."
                }
            }
        ]
    };

    return (
        <div className="wifi-landing-container no-select">
            <Helmet>
                <title>QR Code for Real Estate | Property Listing QR Generator - TheQrify</title>
                <meta name="description" content="Boost property sales with professional Real Estate QR codes. Link to virtual tours, listings, and contact info instantly with TheQrify's free generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Real Estate <span>QR Code Generator</span></h1>
                    <p className="hero-subtitle">
                        Sell properties faster with digital integration.
                        Allow buyers to access virtual tours, property specs, and your contact details with a single scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <section className="generator-card">
                    <Row className="g-4 align-items-center">
                        <Col lg={7}>
                            <h2 className="form-title">Property Listing Info</h2>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="propertyAddressInput">Property Address / ID (Required)</label>
                                            <input
                                                id="propertyAddressInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. 123 Maple Ave"
                                                value={propertyAddress}
                                                onChange={(e) => setPropertyAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="agentNameInput">Agent / Agency Name (Required)</label>
                                            <input
                                                id="agentNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. John Doe Realty"
                                                value={agentName}
                                                onChange={(e) => setAgentName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="custom-form-group">
                                    <label htmlFor="propertyUrlInput">Listing / Virtual Tour URL (Required)</label>
                                    <input
                                        id="propertyUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://agency.com/listing/property-id"
                                        value={propertyUrl}
                                        onChange={(e) => setPropertyUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Link to your listing page, 3D tour, or photo gallery.
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
                                        id="realestate-qr-code"
                                        value={isAllFieldsFilled ? propertyUrl : 'https://theqrify.com'}
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
                                    <HiOutlineDownload className="me-2" /> Download Real Estate QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Optimized for outdoor signs and flyers' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Modernize Your Property Listings</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaVideo /></div>
                                <h3>Virtual Link</h3>
                                <p>Launch a 3D walkthrough or video tour instantly, letting buyers see the interior without a scheduled showing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMapMarkedAlt /></div>
                                <h3>Location Details</h3>
                                <p>Provide instant access to neighborhood info, school ratings, and Google Maps directions for open houses.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaKey /></div>
                                <h3>Direct Contact</h3>
                                <p>Link to your vCard or a lead-capture form so serious buyers can contact you immediately after scanning.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>How to use in Real Estate</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Yard Signs:** Add a large QR code to 'For Sale' signs for street-side engagement.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Property Flyers:** Include a QR code on handouts to link to full galleries.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Open House:** Place codes on cards for easy digital brochure downloads.</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Signage Best Practices</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Visibility:** Ensure the code is large enough to scan from a distance.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Contrast:** Use black on white for maximum outdoor scannability.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Tracking:** Use UTM links to see which signs generate the most leads.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **CTA:** Add text like "Scan for Photo Gallery".</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – Real Estate QR Codes</h1>
                        <p>Everything you need to know about digital real estate tools.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "How do real estate agents use QR codes?",
                                    a: "Agents use them on 'For Sale' signs to provide instant access to property details, virtual tours, high-res photos, and agent contact information."
                                },
                                {
                                    q: "Can I link to a 3D virtual tour?",
                                    a: "Yes! You can link to Matterport tours, YouTube walkthroughs, or your property listing page on Zillow or your own agency website."
                                },
                                {
                                    q: "What size should a QR code be on a yard sign?",
                                    a: "On a standard yard sign, the QR code should be at least 4-6 inches wide so it can be scanned easily from the sidewalk or a car."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>


            <LandingPageFooter currentPath='/qr-code-for-real-estate' />
        </div>
    );
};

export default RealEstateQRCodeLandingPage;


