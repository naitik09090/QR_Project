import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaShareAlt, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaNetworkWired, FaLink
} from 'react-icons/fa';
import '../../css/SocialMediaLinksQRCodeLandingPage.scss';
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

const SocialMediaLinksQRCodeLandingPage = () => {
    const [linksUrl, setLinksUrl] = useState('');
    const [labelName, setLabelName] = useState('');

    const isAllFieldsFilled = linksUrl.trim() !== '' && labelName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('social-links-qr-code');
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
            downloadLink.download = `${labelName || 'social-links'}-qr.png`;
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
                "name": "What is a Social Media Links QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Social Media Links QR code is a scannable tool that points to a landing page containing all your social media profiles, websites, and contact information, allowing users to choose how they want to connect with you."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a Linktree or Beacons page?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! This QR code generator is perfect for linking to 'link in bio' tools like Linktree, Beacons, or your own custom landing page."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a limit on how many people can scan it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The static QR codes created on TheQrify have no scan limits and will remain active forever as long as your destination URL is live."
                }
            }
        ]
    };

    return (
        <div className="social-links-landing-container no-select">
            <Helmet>
                <title>Free Social Media Links QR Code Generator | One Code, All Links - TheQrify</title>
                <meta name="description" content="Generate a free QR code for all your social media links. Perfect for Linktree, personal bios, and business cards. Connect your audience to all your platforms with one scan." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>One <span>QR Code</span> for All Your Links</h1>
                    <p className="hero-subtitle">
                        Simplify your digital footprint. 
                        Provide instant access to all your social profiles, websites, and portfolios through a single, elegant QR code hub.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaLink />
                                <span>Link Hub Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="labelNameInput">Hub Label / Display Name (Required)</label>
                                    <input
                                        id="labelNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Jane's Social Hub"
                                        value={labelName}
                                        onChange={(e) => setLabelName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="linksUrlInput">Target URL (Linktree, Beacons, or Portfolio) (Required)</label>
                                    <input
                                        id="linksUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://linktr.ee/yourusername"
                                        value={linksUrl}
                                        onChange={(e) => setLinksUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your unified links page.
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
                                        id="social-links-qr-code"
                                        value={isAllFieldsFilled ? linksUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Links QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready for printing and flyers' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Master Your Digital Presence</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaNetworkWired /></div>
                                <h3>Multi-Platform Reach</h3>
                                <p>Instead of sharing one profile, share them all. Let your audience choose how they want to connect.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Seamless Updates</h3>
                                <p>Link to a hub like Linktree, and you can update your links anytime without changing your QR code.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Growth Focused</h3>
                                <p>Drive more traffic to your secondary platforms by making them accessible in the same scan.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Launch Your Hub in Seconds</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Hub URL</h4>
                                        <p>Grab the link to your 'link in bio' page or custom landing page.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate QR</h4>
                                        <p>Paste the link above and download your personalized Hub QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Distribute Broadly</h4>
                                        <p>Print on business cards, flyers, and merchandise to grow your network.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Top Placement Ideas</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Personal & Business Cards</li>
                                    <li className="mb-3"><FaCheckCircle /> Email Signatures</li>
                                    <li className="mb-3"><FaCheckCircle /> Posters & Flyers</li>
                                    <li className="mb-3"><FaCheckCircle /> Networking Event Tags</li>
                                    <li className="mb-3"><FaCheckCircle /> Product Packaging</li>
                                    <li className="mb-3"><FaCheckCircle /> Event Presentations</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Social Media Links FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for my Linktree account?",
                                    a: "Absolutely! Simply paste your Linktree profile URL to create a code that directs users to all your links."
                                },
                                {
                                    q: "Is the QR code permanent?",
                                    a: "Yes. Static QR codes created here are permanent and will never expire."
                                },
                                {
                                    q: "Can I use it on my resume?",
                                    a: "We highly recommend it. It's a professional way to lead recruiters to your portfolio, LinkedIn, and other professional profiles."
                                },
                                {
                                    q: "How do I ensure the code is scannable?",
                                    a: "Our generator uses high-contrast settings and error correction to ensure maximum scannability on all devices."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-social-media-links' />
        </div>
    );
};

export default SocialMediaLinksQRCodeLandingPage;


