import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaUserPlus, FaBullseye, FaFilter, FaChartPie,
    FaDownload, FaHandshake, FaShareAlt, FaCheck, FaMagnet, FaLightbulb,
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

const LeadGenerationQRCodeLandingPage = () => {
    const [campaignName, setCampaignName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [leadUrl, setLeadUrl] = useState('');

    const isAllFieldsFilled = campaignName.trim() !== '' && businessName.trim() !== '' && leadUrl.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('lead-qr-code');
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
            downloadLink.download = `${campaignName || 'lead-gen'}-qr-code.png`;
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
                "name": "How do QR codes help in lead generation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "QR codes connect offline prospects to online lead forms, free trials, or newsletter sign-ups instantly, drastically reducing the friction in the lead capture process."
                }
            },
            {
                "@type": "Question",
                "name": "Where should I place lead-gen QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Place them on physical touchpoints where prospects are highly engaged: product packaging, event booths, direct mail, or print advertisements."
                }
            },
            {
                "@type": "Question",
                "name": "Is it better to link to my home page or a specific landing page?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Always link to a specific, optimized landing page. This ensures the prospect stays focused on the offer and increases your conversion rate."
                }
            }
        ]
    };

    return (
        <div className="wifi-landing-container no-select">
            <Helmet>
                <title>QR Code for Lead Generation | High-Conversion QR - TheQrify</title>
                <meta name="description" content="Capture more prospects with high-conversion Lead Generation QR codes. Link to sign-up forms, trials, and offers instantly with TheQrify's free generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Lead Generation <span>QR Code Tool</span></h1>
                    <p className="hero-subtitle">
                        Turn every physical impression into a digital lead.
                        Bridge the gap between your offline ads and your sales funnel with smart, trackable QR codes.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <section className="generator-card">
                    <Row className="g-4 align-items-center">
                        <Col lg={7}>
                            <h2 className="form-title">Lead Campaign Info</h2>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="campaignNameInput">Campaign Name / Offer (Required)</label>
                                            <input
                                                id="campaignNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Free eBook Offer"
                                                value={campaignName}
                                                onChange={(e) => setCampaignName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="businessNameInput">Business Name (Required)</label>
                                            <input
                                                id="businessNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Growth Agency Inc"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="custom-form-group">
                                    <label htmlFor="leadUrlInput">Lead Magnet / Form URL (Required)</label>
                                    <input
                                        id="leadUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourbrand.com/get-free-e-book"
                                        value={leadUrl}
                                        onChange={(e) => setLeadUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Link to your Typeform, Google Form, or high-conversion landing page.
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
                                        id="lead-qr-code"
                                        value={isAllFieldsFilled ? leadUrl : 'https://theqrify.com'}
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
                                    <HiOutlineDownload className="me-2" /> Download Lead-Gen QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Optimized for lead capture campaigns' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Capture Prospects Faster</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMagnet /></div>
                                <h3>Lead Magnets</h3>
                                <p>Offer instant access to e-books, whitepapers, or discount codes in exchange for a scan and form submission.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBullseye /></div>
                                <h3>Targeted Traffic</h3>
                                <p>Drive pre-qualified prospects from specific physical locations directly into your targeted sales funnels.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartPie /></div>
                                <h3>Conversion Insights</h3>
                                <p>Use UTM parameters to track which physical sources (flyers, signs, ads) are providing the highest quality leads.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>Strategic Lead Capture</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Trade Shows:** Replace paper sign-up sheets with scan-to-register QR codes.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Direct Mail:** Increase response rates by providing an instant digital path to claim an offer.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>**Product In-Box:** Encourage reviews or warranty registration to capture customer data post-purchase.</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Conversion Best Practices</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **CTA:** Use "Scan to Get [Offer]" rather than just "Scan Me".</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Fast Load:** Ensure your destination page loads in under 2 seconds.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Mobile-First:** Forms must be easy to fill out on a small screen.</li>
                                    <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> **Test Funnel:** Verify the entire scan-to-lead flow works flawlessly.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – Lead Generation QR</h1>
                        <p>Everything you need to know about capturing digital leads from physical media.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "How do QR codes help in lead generation?",
                                    a: "QR codes connect offline prospects to online lead forms, free trials, or newsletter sign-ups instantly, drastically reducing the friction in the lead capture process."
                                },
                                {
                                    q: "Where should I place lead-gen QR codes?",
                                    a: "Place them on physical touchpoints where prospects are highly engaged: product packaging, event booths, direct mail, or print advertisements."
                                },
                                {
                                    q: "Is it better to link to my home page or a specific landing page?",
                                    a: "Always link to a specific, optimized landing page. This ensures the prospect stays focused on the offer and increases your conversion rate."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-lead-generation' />
        </div>
    );
};

export default LeadGenerationQRCodeLandingPage;


