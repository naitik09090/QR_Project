import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaYoutube, FaDownload, FaPlayCircle,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaVideo
} from 'react-icons/fa';
import '../../css/YouTubeChannelQRCodeLandingPage.scss';
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

const YouTubeChannelQRCodeLandingPage = () => {
    const [channelUrl, setChannelUrl] = useState('');
    const [channelName, setChannelName] = useState('');

    
    const isAllFieldsFilled = channelUrl.trim() !== '' && channelName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('youtube-qr-code');
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
            downloadLink.download = `${channelName || 'youtube-channel'}-qr.png`;
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
                "name": "How do YouTube QR codes help my channel grow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YouTube QR codes allow viewers to access your channel or specific videos instantly from physical marketing materials like business cards, posters, or product packaging, removing the friction of manual searching."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a specific YouTube video?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! While this page is optimized for channel growth, you can paste any YouTube URL (video, playlist, or shorts) into the generator to create a direct link."
                }
            },
            {
                "@type": "Question",
                "name": "Are these QR codes free for creators?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Static YouTube QR codes generated on TheQrify are 100% free with no scan limits and no expiration dates."
                }
            }
        ]
    };

    return (
        <div className="youtube-channel-landing-container no-select">
            <Helmet>
                <title>Free YouTube QR Code Generator | Grow Your Subscribers - TheQrify</title>
                <meta name="description" content="Generate a free YouTube QR code for your channel or videos. Drive subscribers and engagement from your physical marketing directly to your content." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Viral <span>YouTube QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Turn every physical touchpoint into a subscription. 
                        Enable instant channel access and video plays with a professional, high-performance scannable code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaYoutube />
                                <span>YouTube Content Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="channelNameInput">Channel Name / Label (Required)</label>
                                    <input
                                        id="channelNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your creator name"
                                        value={channelName}
                                        onChange={(e) => setChannelName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="channelUrlInput">YouTube URL (Required)</label>
                                    <input
                                        id="channelUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.youtube.com/@yourchannel"
                                        value={channelUrl}
                                        onChange={(e) => setChannelUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your YouTube content instantly.
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
                                        id="youtube-qr-code"
                                        value={isAllFieldsFilled ? channelUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download YouTube QR
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
                    <h2>Boost Your Watch Time & Subs</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Subscriber Growth</h3>
                                <p>Make it effortless for fans to subscribe by scanning a code on your merchandise or videos.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaVideo /></div>
                                <h3>Direct Promotion</h3>
                                <p>Lead users directly to your latest upload, premiere, or livestream link in a single scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Multi-Channel traffic</h3>
                                <p>Bridge the gap between your offline marketing and your digital growth strategy seamlessly.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Creator Growth in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy YouTube Link</h4>
                                        <p>Grab your channel URL, specific video link, or your @handle from YouTube.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your clean, creator-branded QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Deploy Everywhere</h4>
                                        <p>Use on business cards, posters, and in-video overlays to grow your audience.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Content Placements</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Business Cards & Bios</li>
                                    <li className="mb-3"><FaCheckCircle /> Merchandise & Gear</li>
                                    <li className="mb-3"><FaCheckCircle /> Posters & Event Signage</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Packaging</li>
                                    <li className="mb-3"><FaCheckCircle /> Postcards & Mailers</li>
                                    <li className="mb-3"><FaCheckCircle /> In-Store Display Samples</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>YouTube QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for YouTube Shorts?",
                                    a: "Yes! Simply paste the URL of your YouTube Short to drive mobile users directly to your vertical video content."
                                },
                                {
                                    q: "Will the QR code ever expire?",
                                    a: "No. The static QR codes created on TheQrify are permanent and will work as long as your YouTube destination remains active."
                                },
                                {
                                    q: "Can I link to a specific playlist?",
                                    a: "Absolutely. Paste any playlist URL to give your audience access to a curated series of your videos."
                                },
                                {
                                    q: "Is it high-resolution enough for banners?",
                                    a: "Yes. Our generated QR codes are high-definition, ensuring sharp scans even on large-format posters and banners."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-youtube-channel' />
        </div>
    );
};

export default YouTubeChannelQRCodeLandingPage;


