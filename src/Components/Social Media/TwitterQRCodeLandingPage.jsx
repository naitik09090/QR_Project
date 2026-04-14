import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaTwitter, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaHashtag
} from 'react-icons/fa';
import '../../css/TwitterQRCodeLandingPage.scss';
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

const TwitterQRCodeLandingPage = () => {
    const [twitterUrl, setTwitterUrl] = useState('');
    const [handle, setHandle] = useState('');

    const isAllFieldsFilled = twitterUrl.trim() !== '' && handle.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('twitter-qr-code');
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
            downloadLink.download = `${handle || 'twitter-profile'}-qr.png`;
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
                "name": "How do Twitter (X) QR codes work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Twitter QR codes link directly to your Twitter/X profile, a specific tweet, or a hashtag. When scanned, it opens the app or browser to your chosen destination, making it easy for people to follow or engage with you."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for promoting a specific hashtag?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Simply paste the search URL for your hashtag (e.g., https://twitter.com/hashtag/YourTag) into the generator to drive customers to join the conversation."
                }
            },
            {
                "@type": "Question",
                "name": "Is this tool free for business use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our Twitter QR code generator is free for both personal and professional use, with no scan limits or subscription fees."
                }
            }
        ]
    };

    return (
        <div className="twitter-landing-container no-select">
            <Helmet>
                <title>Free Twitter (X) QR Code Generator | Drive Engagement - TheQrify</title>
                <meta name="description" content="Generate a free Twitter (X) QR code to grow your followers and boost engagement. Link to your profile, tweets, or hashtags with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Premium <span>Twitter (X) QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Bridge the gap between your physical brand and your Twitter audience. 
                        Generate high-contrast QR codes to grow your followers and drive real-time engagement.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaTwitter />
                                <span>Twitter Profile Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="handleInput">Account Handle / Label (Required)</label>
                                    <input
                                        id="handleInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="@yourhandle"
                                        value={handle}
                                        onChange={(e) => setHandle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="twitterUrlInput">Profile, Tweet, or Hashtag Link (Required)</label>
                                    <input
                                        id="twitterUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://twitter.com/yourhandle"
                                        value={twitterUrl}
                                        onChange={(e) => setTwitterUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your Twitter profile or specific content.
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
                                         id="twitter-qr-code"
                                         value={isAllFieldsFilled ? twitterUrl : 'https://theqrify.com'}
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
                                     <FaDownload className="me-2" /> Download Twitter QR
                                 </Button>
                                 <p className="text-muted small mt-3 mb-0 text-center">
                                     {isAllFieldsFilled ? 'Ready for real-time engagement' : 'Fill all fields to preview'}
                                 </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Boost Your Network</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Follower Growth</h3>
                                <p>Enable instant follows from events, business cards, or storefronts with a single scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHashtag /></div>
                                <h3>Real-time Conversations</h3>
                                <p>Drive customers directly to your latest promo or a specific event hashtag to increase buzz.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Direct Traffic</h3>
                                <p>Convert offline visitors into online contributors by linking your QR code to your most engaging threads.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>3 Steps to Connect</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Grab Your Link</h4>
                                        <p>Copy the link to your profile, a viral tweet, or a specific hashtag search.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download your personalized Twitter QR code instantly.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Display Everywhere</h4>
                                        <p>Place on your business cards, flyers, or at event booths to start growing.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Ideal For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Personal Branding</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Conference Displays</li>
                                    <li className="mb-3"><FaCheckCircle /> Retail Signage</li>
                                    <li className="mb-3"><FaCheckCircle /> Campaign Distribution</li>
                                    <li className="mb-3"><FaCheckCircle /> Media Kits & Press Releases</li>
                                    <li className="mb-3"><FaCheckCircle /> Community Engagement</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Twitter QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Do I need an account to generate a code?",
                                    a: "No account is required on TheQrify. Simply paste your public Twitter link to generate your code for free."
                                },
                                {
                                    q: "Can I update the link later?",
                                    a: "Static QR codes are permanent. If you want to change the destination, you'll need to generate a new QR code."
                                },
                                {
                                    q: "Is it high-resolution enough for print?",
                                    a: "Yes. Our QR codes are high-definition, perfect for everything from small business cards to large event banners."
                                },
                                {
                                    q: "Does it work if the user doesn't have the app?",
                                    a: "Yes. The QR code will open your Twitter profile in their default mobile browser if the app isn't installed."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-twitter' />
        </div>
    );
};

export default TwitterQRCodeLandingPage;


