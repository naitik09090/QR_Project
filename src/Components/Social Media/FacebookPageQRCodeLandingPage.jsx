import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFacebook, FaDownload, FaThumbsUp,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaFlag
} from 'react-icons/fa';
import '../../css/FacebookPageQRCodeLandingPage.scss';
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

const FacebookPageQRCodeLandingPage = () => {
    const [fbUrl, setFbUrl] = useState('');
    const [pageName, setPageName] = useState('');

    const isAllFieldsFilled = fbUrl.trim() !== '' && pageName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('facebook-qr-code');
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
            downloadLink.download = `${pageName || 'facebook-page'}-qr.png`;
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
                "name": "How do Facebook Page QR codes help my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Facebook Page QR codes allow customers to reach your official page instantly. By placing them on storefronts, menus, or business cards, you encourage direct check-ins, reviews, and community engagement."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a specific Facebook post or review section?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can paste any valid Facebook URL—including direct links to posts, reviews, or your main page—into the generator."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to create Facebook QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Static Facebook QR codes created on TheQrify are 100% free with no scan limits or hidden subscription fees."
                }
            }
        ]
    };

    return (
        <div className="facebook-page-landing-container no-select">
            <Helmet>
                <title>Free Facebook Page QR Code Generator | Grow Your Community - TheQrify</title>
                <meta name="description" content="Generate a free Facebook Page QR code to boost likes and check-ins. Link directly to your business page or specific posts with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Official <span>Facebook Page QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Build your local community with a single scan. 
                        Enable instant page follows, reviews, and event check-ins with a professional, high-contrast QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFacebook />
                                <span>Facebook Page Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="pageNameInput">Page Name / Label (Required)</label>
                                    <input
                                        id="pageNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your business or page name"
                                        value={pageName}
                                        onChange={(e) => setPageName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="fbUrlInput">Facebook Page URL (Required)</label>
                                    <input
                                        id="fbUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.facebook.com/yourpagename"
                                        value={fbUrl}
                                        onChange={(e) => setFbUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your Facebook page or post.
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
                                         id="facebook-qr-code"
                                         value={isAllFieldsFilled ? fbUrl : 'https://theqrify.com'}
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
                                     <FaDownload className="me-2" /> Download Facebook QR
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
                    <h2>Drive Growth & Reviews</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaThumbsUp /></div>
                                <h3>Community Growth</h3>
                                <p>Encourage customers to like and follow your page instantly after a positive in-person experience.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaFlag /></div>
                                <h3>Direct Promotion</h3>
                                <p>Lead users directly to your latest event, promotion, or review section in a single scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Higher Engagement</h3>
                                <p>Bridge the gap between your physical storefront and your digital community strategy.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Social Proof in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy Page Link</h4>
                                        <p>Copy the URL of your business page from your browser bar or Facebook app.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your personalized Facebook Hub code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Share Everywhere</h4>
                                        <p>Place on business cards, menus, and storefronts to grow your online following.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Restaurant Tables & Menus</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Storefront Displays</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Local Flyers</li>
                                    <li className="mb-3"><FaCheckCircle /> Business Cards & Stationary</li>
                                    <li className="mb-3"><FaCheckCircle /> Post-Service Review Cards</li>
                                    <li className="mb-3"><FaCheckCircle /> Product Display Signage</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Facebook QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for my personal profile?",
                                    a: "Yes! While optimized for businesses, you can paste your personal profile link to make it easy for friends to find you."
                                },
                                {
                                    q: "Will the QR code ever expire?",
                                    a: "No. The static QR codes created on TheQrify are permanent and will work as long as your destination link is active."
                                },
                                {
                                    q: "Is the resolution high enough for flyers?",
                                    a: "Absolutely. Our generated QR codes are high-definition, ensuring sharp and crisp scans on printed materials of any size."
                                },
                                {
                                    q: "Can I link to an internal Facebook event?",
                                    a: "Yes! Simply paste the URL of your specific Facebook event to drive RSVPs and ticket sales."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-facebook-page' />
        </div>
    );
};

export default FacebookPageQRCodeLandingPage;


