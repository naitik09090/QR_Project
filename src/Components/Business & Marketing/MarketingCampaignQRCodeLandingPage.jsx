import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaChartBar, FaBullhorn, FaMousePointer, FaEye,
    FaDownload, FaRocket, FaShareAlt, FaCheck, FaAd, FaLightbulb
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

const MarketingCampaignQRCodeLandingPage = () => {
    const [campaignName, setCampaignName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [campaignUrl, setCampaignUrl] = useState('');

    const isAllFieldsFilled = campaignName.trim() !== '' && brandName.trim() !== '' && campaignUrl.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('marketing-qr-code');
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
            downloadLink.download = `${campaignName || 'marketing'}-campaign-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="vcard-landing-container no-select">
            <Helmet>
                <title>QR Code for Marketing Campaigns | Trackable QR Generator</title>
                <meta name="description" content="Launch successful marketing campaigns with custom QR codes. Drive engagement, track scans, and connect with your audience instantly with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Launch Viral <span>Marketing Campaigns</span></h1>
                    <p className="hero-subtitle">
                        Bridge the gap between offline ads and digital engagement.
                        Create high-conversion QR codes for flyers, billboards, and social media campaigns.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaBullhorn className="me-2" />
                                <span>Campaign Details</span>
                            </div>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="campaignNameInput">Campaign Name (Required)</label>
                                            <input
                                                id="campaignNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Summer Sale 2026"
                                                value={campaignName}
                                                onChange={(e) => setCampaignName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="brandNameInput">Brand Name (Required)</label>
                                            <input
                                                id="brandNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Acme Fashion"
                                                value={brandName}
                                                onChange={(e) => setBrandName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="custom-form-group">
                                    <label htmlFor="campaignUrlInput">Campaign Destination URL (Required)</label>
                                    <input
                                        id="campaignUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourbrand.com/campaign"
                                        value={campaignUrl}
                                        onChange={(e) => setCampaignUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Enter your UTM-tracked link or promo landing page to start your campaign.
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
                                        id="marketing-qr-code"
                                        value={isAllFieldsFilled ? campaignUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Campaign QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High-resolution output for print ads' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Use QR Codes in Marketing?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Data Driven</h3>
                                <p>Use UTM parameters to track scan sources and measure the ROI of your physical marketing materials.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMousePointer /></div>
                                <h3>CTAs Made Easy</h3>
                                <p>Direct customers straight to a checkout page, sign-up form, or app download with a single scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaRocket /></div>
                                <h3>Higher Engagement</h3>
                                <p>Interactive ads see much higher engagement rates than static text. Make your ads come alive.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Practical Use Cases */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="p-4 border rounded-4 bg-light">
                                <h3>Campaign Placements</h3>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 📰 **Magazine & Newspaper Ads:** Direct path to digital info.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🏢 **Out-of-Home (OOH):** QR codes on bus stops and billboards.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 📦 **Direct Mail & Packaging:** Exclusive offers for recipients.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 👕 **Event Merch:** Turn apparel into interactive marketing.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Pro Tip: Tracking</h3>
                            <p className="text-muted">
                                When creating a campaign QR, always use **UTM parameters** (e.g., `?utm_source=flyer&utm_medium=qr`).
                                This allows you to see in Google Analytics exactly which physical placement is driving
                                the most traffic, helping you optimize your marketing budget.
                            </p>
                            <div className="d-flex align-items-center text-primary fw-bold mt-4">
                                <FaLightbulb className="me-2" /> Make every print ad a measurable digital channel.
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Marketing Campaign FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use dynamic QR codes?",
                                    a: "Static QR codes like these are permanent. For dynamic tracking where the URL can change, we recommend our upcoming Pro features."
                                },
                                {
                                    q: "What is the best size for print?",
                                    a: "For small items like business cards, 2x2 cm. For flyers, 3x3 cm. For billboards, ensure the resolution is high (use SVG for best results)."
                                },
                                {
                                    q: "Is it really free for commercial use?",
                                    a: "Yes! There are no limits on scans or generation for your marketing campaigns with TheQrify."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-marketing-campaign' />
        </div>
    );
};

export default MarketingCampaignQRCodeLandingPage;


