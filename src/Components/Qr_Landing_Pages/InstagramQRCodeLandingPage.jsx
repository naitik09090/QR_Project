import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaInstagram, FaDownload, FaCamera, FaHeart,
    FaUserPlus, FaShareAlt, FaCheckCircle, FaStar
} from 'react-icons/fa';
import '../../css/InstagramQRCodeLandingPage.scss';
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

const InstagramQRCodeLandingPage = () => {
    const [username, setUsername] = useState('');

    const isAllFieldsFilled = username.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('insta-qr-code');
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
            downloadLink.download = `${username || 'instagram'}-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    const instaUrl = username ? `https://www.instagram.com/${username.replace('@', '')}` : 'https://www.instagram.com';

    return (
        <div className="insta-landing-container no-select">
            <Helmet>
                <title>Free Instagram QR Code Generator | Increase Followers | TheQrify</title>
                <meta name="description" content="Generate a custom Instagram QR code for your profile. Make it easy for people to follow you instantly. Free, fast, and professional Instagram QR codes by TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Grow Your <span>Instagram</span></h1>
                    <p className="hero-subtitle">
                        Convert offline visitors into online followers. Create a custom QR code
                        that links directly to your Instagram profile, posts, or tags.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaInstagram className="me-2" />
                                <span>Profile Details</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="instaUsernameInput">Instagram Username (Required)</label>
                                     <div className="custom-input-group">
                                         <span className="input-prefix">instagram.com/</span>
                                         <input
                                             id="instaUsernameInput"
                                             type="text"
                                             className="custom-input"
                                             placeholder="your_username"
                                             value={username}
                                             onChange={(e) => setUsername(e.target.value)}
                                             required
                                         />
                                     </div>
                                    <small className="text-muted mt-2 d-block">
                                        Just enter your username, and we'll handle the link.
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
                                         id="insta-qr-code"
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
                                     <FaDownload className="me-2" /> Download Insta QR
                                 </Button>
                                 <p className="text-muted small mt-3 mb-0 text-center">
                                     {isAllFieldsFilled ? 'Ready to share on flyers and business cards' : 'Fill all fields to preview'}
                                 </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Boost Your Social Presence</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUserPlus /></div>
                                <h3>Gain Followers Fast</h3>
                                <p>Make it effortless for people to find and follow you in one second. No more manual searching.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCamera /></div>
                                <h3>Contactless Sharing</h3>
                                <p>Perfect for networking events, retail stores, and pop-up shops to grow your brand awareness.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHeart /></div>
                                <h3>Increase Engagement</h3>
                                <p>Link directly to specific posts or reels to boost likes and comments from offline audiences.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="insta-guide-box">
                                <h3>Why use a QR code?</h3>
                                <div className="guide-item">
                                    <div className="guide-num">1</div>
                                    <p>Your username might be hard to spell or remember.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-num">2</div>
                                    <p>Searching manually leads to misspellings or wrong profiles.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-num">3</div>
                                    <p>People are 3x more likely to follow when it's a "one-tap" process.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>Where to use your QR code?</h3>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-primary me-3" /> 📦 Product packaging and labels.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-primary me-3" /> 🏷️ Business cards and stationeries.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-primary me-3" /> 🏢 Storefront windows and mirrors.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-primary me-3" /> 🧴 Menu cards and event banners.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>FAQs</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this work for personal and business accounts?",
                                    a: "Yes! This QR code works for any public Instagram profile, whether it's personal, creator, or business."
                                },
                                {
                                    q: "Can I link to a specific Instagram post?",
                                    a: "Yes. Simply copy the link to the specific post and use our standard URL QR generator, or stay tuned for our advanced social media tools."
                                },
                                {
                                    q: "Is this free to use?",
                                    a: "Completely. The QR codes generated on TheQrify are 100% free and do not expire."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/instagram-qr-code' />
        </div>
    );
};

export default InstagramQRCodeLandingPage;


