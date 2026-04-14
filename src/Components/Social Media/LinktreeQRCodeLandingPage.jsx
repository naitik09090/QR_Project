import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaLink, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaTree
} from 'react-icons/fa';
import '../../css/LinktreeQRCodeLandingPage.scss';
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

const LinktreeQRCodeLandingPage = () => {
    const [linktreeUrl, setLinktreeUrl] = useState('');
    const [profileName, setProfileName] = useState('');

    const isAllFieldsFilled = linktreeUrl.trim() !== '' && profileName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('linktree-qr-code');
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
            downloadLink.download = `${profileName || 'linktree-profile'}-qr.png`;
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
                "name": "How do Linktree QR codes benefit creators?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Linktree QR codes act as a digital hub. Instead of sharing multiple links, you share one QR code that leads to all your socials, blogs, and stores, maximizing your traffic and bio-conversion."
                }
            },
            {
                "@type": "Question",
                "name": "Where should I display my Linktree QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best places are on your business cards, email signatures, Instagram posts, and physical marketing materials like posters or product packaging."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to generate a Linktree QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Generating a static Linktree QR code on TheQrify is completely free with no scan limits."
                }
            }
        ]
    };

    return (
        <div className="linktree-landing-container no-select">
            <Helmet>
                <title>Free Linktree QR Code Generator | Hub For All Links - TheQrify</title>
                <meta name="description" content="Generate a free Linktree QR code to centralize your online presence. Link directly to your Linktree profile from business cards, posters, and more." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <header className="hero-section">
                <Container>
                    <h1>Unified <span>Linktree QR Codes</span></h1>
                    <p className="hero-subtitle">
                        One scan, all your links. Connect your audience to your entire digital ecosystem instantly with a professional Linktree hub QR code.
                    </p>
                </Container>
            </header>

            <Container>
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaTree />
                                <span>Link Hub Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="profileNameInput">Profile Name / Handle (Required)</label>
                                    <input
                                        id="profileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="@yourhandle"
                                        value={profileName}
                                        onChange={(e) => setProfileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="linktreeUrlInput">Linktree URL (Required)</label>
                                    <input
                                        id="linktreeUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://linktr.ee/yourusername"
                                        value={linktreeUrl}
                                        onChange={(e) => setLinktreeUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your full Linktree profile.
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
                                        id="linktree-qr-code"
                                        value={isAllFieldsFilled ? linktreeUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Linktree QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Ready for cards & social posts' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section">
                    <h2>Centralize Your Online Presence</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLink /></div>
                                <h3>Simplified Sharing</h3>
                                <p>Stop sharing lists of links. One QR code connects your audience to everything you do.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Higher Conversion</h3>
                                <p>Make it effortless for people to find your store, socials, or blog in a single scannable step.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Cross-Channel Growth</h3>
                                <p>Drive traffic from physical marketing and social posts directly to your unified Linktree hub.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Streamline in Seconds</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Linktree URL</h4>
                                        <p>Copy your public Linktree URL from your account dashboard.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your clean, high-contrast QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Promote Everywhere</h4>
                                        <p>Use on business cards, emails, and flyers to drive traffic to your bio.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Personal Branding & Bios</li>
                                    <li className="mb-3"><FaCheckCircle /> Business Cards & Portfolios</li>
                                    <li className="mb-3"><FaCheckCircle /> Influencer Media Kits</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Store Signage</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Conference Displays</li>
                                    <li className="mb-3"><FaCheckCircle /> Real Estate Listings</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Linktree QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                { q: "Does Linktree already have a QR code?", a: "Linktree provides its own QR codes, but our tool allows you to generate high-resolution versions that are perfect for professional printing and custom design integration." },
                                { q: "Can I use this for other 'link in bio' tools?", a: "Yes! While optimized for Linktree, this generator works perfectly for any 'link in bio' tool like Beacons, Carrd, or Stan Store." },
                                { q: "Is the resolution high enough for flyers?", a: "Absolutely. Our QR codes are high-definition, ensuring sharp and crisp scans on printed materials of any size." },
                                { q: "What happens if I change my Linktree links?", a: "The QR code points to your Linktree URL. As long as that URL stays the same, you can update your links within Linktree without needing a new QR code." }
                            ].map((item, index) => ( <FAQItem key={index} q={item.q} a={item.a} /> ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-linktree' />
        </div>
    );
};

export default LinktreeQRCodeLandingPage;


