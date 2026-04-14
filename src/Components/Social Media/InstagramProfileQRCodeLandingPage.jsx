import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaInstagram, FaDownload, FaCameraRetro,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaHashtag
} from 'react-icons/fa';
import '../../css/InstagramProfileQRCodeLandingPage.scss';
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

const InstagramProfileQRCodeLandingPage = () => {
    const [instaUrl, setInstaUrl] = useState('');
    const [userName, setUserName] = useState('');

    
    const isAllFieldsFilled = instaUrl.trim() !== '' && userName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('instagram-qr-code');
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
            downloadLink.download = `${userName || 'instagram-profile'}-qr.png`;
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
                "name": "How do Instagram QR codes grow my following?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Instagram QR codes remove the friction of manual searching. By placing them on business cards, menus, or shop windows, users can scan and reach your profile instantly, leading to higher follow-back rates."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a specific Instagram post or Reel?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can paste the URL of any Instagram profile, post, Reel, or IGTV video into the generator to create a direct link."
                }
            },
            {
                "@type": "Question",
                "name": "Are these Instagram QR codes free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, static Instagram QR codes generated on TheQrify are 100% free forever, with no scan limits or expiration date."
                }
            }
        ]
    };

    return (
        <div className="instagram-profile-landing-container no-select">
            <Helmet>
                <title>Free Instagram QR Code Generator | Drive Profile Growth - TheQrify</title>
                <meta name="description" content="Generate a free Instagram QR code to grow your followers and engagement. Link directly to your profile, posts, or Reels with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Elegant <span>Instagram QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Turn every real-world interaction into a new follower. 
                        Enable instant profile access and content views with a high-resolution, premium QR code hub.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaInstagram />
                                <span>Instagram Profile Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="userNameInput">Username / Display Name (Required)</label>
                                    <input
                                        id="userNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="@yourusername"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="instaUrlInput">Instagram Link (Required)</label>
                                    <input
                                        id="instaUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.instagram.com/yourusername"
                                        value={instaUrl}
                                        onChange={(e) => setInstaUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your Instagram content instantly.
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
                                        id="instagram-qr-code"
                                        value={isAllFieldsFilled ? instaUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Instagram QR
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
                    <h2>Drive Discovery & Engagement</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Follower Growth</h3>
                                <p>Make it effortless for people to follow you by scanning a code on your packaging or storefront.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHashtag /></div>
                                <h3>Higher Conversion</h3>
                                <p>Lead users directly to shopable posts or seasonal collections in a single scan from catalogs.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Viral Potential</h3>
                                <p>Bridge the gap between physical marketing and digital trends to boost your brand reach.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>3 Steps to Viral Reach</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy the Link</h4>
                                        <p>Grab the URL of your Instagram profile, a specific Reel, or a shopable post.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Paste the link above and download your personalized Instagram QR code instantly.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Promote Everywhere</h4>
                                        <p>Use your code on business cards, menus, and stickers to grow your audience offline.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Content Placements</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Restaurant Menus & Receipts</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Packaging & Tags</li>
                                    <li className="mb-3"><FaCheckCircle /> Business Cards & Portfolios</li>
                                    <li className="mb-3"><FaCheckCircle /> Real Estate Walkthroughs</li>
                                    <li className="mb-3"><FaCheckCircle /> Exhibition & Event Displays</li>
                                    <li className="mb-3"><FaCheckCircle /> Product Showcase Signs</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Instagram QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for Reels?",
                                    a: "Absolutely! You can paste any direct link to an Instagram Reel to drive traffic to your viral video content."
                                },
                                {
                                    q: "Will the QR code ever expire?",
                                    a: "No. The static QR codes created on TheQrify are permanent and will work as long as your Instagram destination link remains active."
                                },
                                {
                                    q: "Can I link to an Instagram Shop?",
                                    a: "Yes! Simply paste the URL of your Instagram Shop or a specific product post to drive e-commerce sales directly."
                                },
                                {
                                    q: "Is the resolution high enough for large posters?",
                                    a: "Yes. Our generated QR codes are high-definition, ensuring crisp scans on both small product tags and large event banners."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-instagram-profile' />
        </div>
    );
};

export default InstagramProfileQRCodeLandingPage;


