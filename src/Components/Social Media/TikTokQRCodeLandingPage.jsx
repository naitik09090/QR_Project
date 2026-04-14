import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaTiktok, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaShareAlt
} from 'react-icons/fa';
import '../../css/TikTokQRCodeLandingPage.scss';
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

const TikTokQRCodeLandingPage = () => {
    const [tiktokUrl, setTiktokUrl] = useState('');
    const [username, setUsername] = useState('');

    const isAllFieldsFilled = tiktokUrl.trim() !== '' && username.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('tiktok-qr-code');
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
            downloadLink.download = `${username || 'tiktok-profile'}-qr.png`;
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
                "name": "How do TikTok QR codes work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TikTok QR codes are scannable images that link directly to your TikTok profile, a specific video, or a hashtag. When scanned, they open the TikTok app (or a browser if the app isn't installed) to the destination you've set."
                }
            },
            {
                "@type": "Question",
                "name": "Where should I use my TikTok QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can use your TikTok QR code on business cards, posters, flyers, product packaging, and even other social media platforms like Instagram or LinkedIn to drive traffic to your TikTok content."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to generate a TikTok QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Generating a static TikTok QR code on TheQrify is completely free and has no scan limits."
                }
            }
        ]
    };

    return (
        <div className="tiktok-landing-container no-select">
            <Helmet>
                <title>Free TikTok QR Code Generator | Drive Profile Growth - TheQrify</title>
                <meta name="description" content="Generate a free TikTok QR code to boost your followers and engagement. Link directly to your profile, videos, or hashtags with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Viral <span>TikTok QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Boost your TikTok growth and engagement. 
                        Provide instant access to your profile or viral videos with a professional, high-contrast QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaTiktok />
                                <span>TikTok Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="usernameInput">TikTok Username / Label (Required)</label>
                                    <input
                                        id="usernameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="@yourusername"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="tiktokUrlInput">Profile or Video Link (URL) (Required)</label>
                                    <input
                                        id="tiktokUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.tiktok.com/@username"
                                        value={tiktokUrl}
                                        onChange={(e) => setTiktokUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your TikTok profile or a specific video.
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
                                        id="tiktok-qr-code"
                                        value={isAllFieldsFilled ? tiktokUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download TikTok QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready for posters and branding' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Go Viral with QR Codes</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Follower Growth</h3>
                                <p>Make it effortless for people to follow you by scanning a code on your gear, packaging, or cards.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShareAlt /></div>
                                <h3>Instant Sharing</h3>
                                <p>Bridge the gap between physical and digital. Share your latest challenge or video in one scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Cross-Platform Traffic</h3>
                                <p>Drive your existing audience from Instagram, LinkedIn, or YouTube directly to TikTok.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Launch Your Growth</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Your Link</h4>
                                        <p>Grab your TikTok profile link or a specific video URL from the TikTok app.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your custom TikTok QR code instantly.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Share Everywhere</h4>
                                        <p>Use your QR code on social posts, posters, and in your business environment.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Content Creators & Influencers</li>
                                    <li className="mb-3"><FaCheckCircle /> Brand Promotion</li>
                                    <li className="mb-3"><FaCheckCircle /> Event Marketing</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Packaging</li>
                                    <li className="mb-3"><FaCheckCircle /> Resume & Portfolios</li>
                                    <li className="mb-3"><FaCheckCircle /> Offline Ad Campaigns</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>TikTok QR Code FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I track how many scans my TikTok QR code gets?",
                                    a: "The static QR codes generated here do not include tracking. To track scans, you'd need a dynamic QR code service (updates coming soon!)."
                                },
                                {
                                    q: "Will the TikTok QR code expire?",
                                    a: "No. The static QR codes created on TheQrify are permanent and will work as long as your TikTok link is active."
                                },
                                {
                                    q: "Can I change the link after downloading?",
                                    a: "Not with a static QR code. If you want to change the link, you'll need to generate and download a new QR code."
                                },
                                {
                                    q: "What's the best resolution for printing?",
                                    a: "Our QR codes are generated in high quality, suitable for everything from business cards to billboard-sized posters."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-tiktok' />
        </div>
    );
};

export default TikTokQRCodeLandingPage;


