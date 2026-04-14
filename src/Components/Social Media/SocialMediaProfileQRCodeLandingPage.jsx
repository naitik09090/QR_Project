import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaShareAlt, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUserCircle, FaNetworkWired
} from 'react-icons/fa';
import '../../css/SocialMediaProfileQRCodeLandingPage.scss';
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

const SocialMediaProfileQRCodeLandingPage = () => {
    const [profileUrl, setProfileUrl] = useState('');
    const [profileName, setProfileName] = useState('');

    const isAllFieldsFilled = profileUrl.trim() !== '' && profileName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('social-profile-qr-code');
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
            downloadLink.download = `${profileName || 'social-profile'}-qr.png`;
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
                "name": "What is a Social Media Profile QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Social Media Profile QR code is a scannable code that links directly to one of your social media profiles (like Instagram, Facebook, LinkedIn, etc.), making it easy for people to follow you instantly."
                }
            },
            {
                "@type": "Question",
                "name": "Where can I use my social profile QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can use it on business cards, resumes, email signatures, flyers, or even as a sticker on your laptop to share your online presence effortlessly."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to generate and use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! The static QR codes generated on TheQrify are 100% free forever, with no scan limits and no hidden costs."
                }
            }
        ]
    };

    return (
        <div className="social-profile-landing-container no-select">
            <Helmet>
                <title>Free Social Media Profile QR Code Generator | Drive Followers - TheQrify</title>
                <meta name="description" content="Generate a free QR code for your social media profiles. Link directly to your Instagram, LinkedIn, or Facebook page with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Connect Faster with <span>Social QR</span></h1>
                    <p className="hero-subtitle">
                        Grow your online presence in seconds. 
                        Enable instant follows and profile views across any platform with a professional, high-impact QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaShareAlt />
                                <span>Profile Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="profileNameInput">Label / Name (Required)</label>
                                    <input
                                        id="profileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., My Instagram"
                                        value={profileName}
                                        onChange={(e) => setProfileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="profileUrlInput">Social Profile URL (Required)</label>
                                    <input
                                        id="profileUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://social-platform.com/yourprofile"
                                        value={profileUrl}
                                        onChange={(e) => setProfileUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your shared social media profile.
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
                                        id="social-profile-qr-code"
                                        value={isAllFieldsFilled ? profileUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Profile QR
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
                    <h2>Grow Your Online Network</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserCircle /></div>
                                <h3>Higher Conversion</h3>
                                <p>Make it effortless for new contacts to find and follow you in one scannable step.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Always Reliable</h3>
                                <p>Static codes are permanent. As long as your profile link works, so will the QR code.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Direct Engagement</h3>
                                <p>Bridge the gap between your physical marketing and your digital growth strategy.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Connect in 3 Easy Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Grab Your Link</h4>
                                        <p>Copy the direct URL of your Facebook, Instagram, LinkedIn, or any social profile.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your personalized social profile QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Share Everywhere</h4>
                                        <p>Embed the code on business cards, resumes, or social posts to drive traffic.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Personal Business Cards</li>
                                    <li className="mb-3"><FaCheckCircle /> Professional Resumes</li>
                                    <li className="mb-3"><FaCheckCircle /> Email Signatures</li>
                                    <li className="mb-3"><FaCheckCircle /> Storefront Signage</li>
                                    <li className="mb-3"><FaCheckCircle /> Conference Networking</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Speaker Promotions</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Social Profile FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for my LinkedIn profile?",
                                    a: "Absolutely! You can paste your LinkedIn public profile URL to generate a code for your professional networking needs."
                                },
                                {
                                    q: "What if I change my username?",
                                    a: "If your username changes and your old profile URL breaks, you will need to generate a new QR code with the updated link."
                                },
                                {
                                    q: "Is the QR code quality good for printing?",
                                    a: "Yes. Our tool provides high-resolution QR codes that remain sharp even when printed on postcards or large posters."
                                },
                                {
                                    q: "Do I have to pay to keep the code active?",
                                    a: "No. The static QR codes you create here are free forever and have no scan limits."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-social-media-profile' />
        </div>
    );
};

export default SocialMediaProfileQRCodeLandingPage;


