import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaSnapchatGhost, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaGhost
} from 'react-icons/fa';
import '../../css/SnapchatQRCodeLandingPage.scss';
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

const SnapchatQRCodeLandingPage = () => {
    const [snapchatUrl, setSnapchatUrl] = useState('');
    const [username, setUsername] = useState('');

    const isAllFieldsFilled = snapchatUrl.trim() !== '' && username.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('snapchat-qr-code');
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
            downloadLink.download = `${username || 'snapchat-profile'}-qr.png`;
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
                "name": "How do Snapchat QR codes help my growth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Snapchat QR codes (similar to Snapcodes) allow users to add you or view your story instantly. By placing them on your social media, website, or physical merchandise, you make it effortless for customers to connect with your brand's personality."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a specific Snapchat Lens or Filter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you have a public link for your Lens or Filter, you can paste it into the generator to drive traffic directly to that experience."
                }
            },
            {
                "@type": "Question",
                "name": "Is this tool free for influencers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our Snapchat QR code generator is free for everyone, with no scan limits or subscription requirements."
                }
            }
        ]
    };

    return (
        <div className="snapchat-landing-container no-select">
            <Helmet>
                <title>Free Snapchat QR Code Generator | Grow Your Following - TheQrify</title>
                <meta name="description" content="Generate a free Snapchat QR code to boost your followers and engagement. Link directly to your profile or lenses with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Instant <span>Snapchat QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Connect with your audience where they are most active. 
                        Enable instant adds and story views with a high-contrast, professional QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaSnapchatGhost />
                                <span>Snapchat Profile Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="usernameInput">Username / Display Name (Required)</label>
                                    <input
                                        id="usernameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your Snapchat username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="snapchatUrlInput">Snapchat Profile or Lens Link (Required)</label>
                                    <input
                                        id="snapchatUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.snapchat.com/add/yourusername"
                                        value={snapchatUrl}
                                        onChange={(e) => setSnapchatUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to add your account or launch a lens.
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
                                        id="snapchat-qr-code"
                                        value={isAllFieldsFilled ? snapchatUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Snapchat QR
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
                    <h2>Grow Your Snap Audience</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Higher Retention</h3>
                                <p>Make it effortless for fans to add you by scanning a code on your physical gear or digital posts.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaGhost /></div>
                                <h3>Instant Interaction</h3>
                                <p>Drive users directly to your latest lens or story for an immediate brand experience.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Direct Traffic</h3>
                                <p>Bridge the gap between your other social profiles and your Snapchat community in one scan.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>3 Steps to Viral Growth</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Your Snap Link</h4>
                                        <p>Grab your 'Add Friend' link from the Snapchat app profile settings.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the Code</h4>
                                        <p>Paste the link above and download your personalized Snapchat QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Promote Offline</h4>
                                        <p>Print on your business cards, flyers, or at events to grow your following.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Placements</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Merchandise & Gear</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Conference Badges</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Store Windows</li>
                                    <li className="mb-3"><FaCheckCircle /> Social Media Bio Pages</li>
                                    <li className="mb-3"><FaCheckCircle /> Influencer Media Kits</li>
                                    <li className="mb-3"><FaCheckCircle /> Campaign Postcards</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Snapchat QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this replace the official Snapcode?",
                                    a: "No, this is a standard QR code that links to your Snapchat profile. Many users find standard QR codes more versatile for inclusion in various designs and layouts."
                                },
                                {
                                    q: "Can I use this for my business account?",
                                    a: "Yes! You can link to your personal profile, public profile, or business account equally well."
                                },
                                {
                                    q: "Is it high-resolution enough for large banners?",
                                    a: "Absolutely. Our generated QR codes are high-definition and perfect for sharp printing at any scale."
                                },
                                {
                                    q: "Will the link ever expire?",
                                    a: "The QR code itself is permanent. It will work as long as your Snapchat username or lens link remains active."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-snapchat' />
        </div>
    );
};

export default SnapchatQRCodeLandingPage;


