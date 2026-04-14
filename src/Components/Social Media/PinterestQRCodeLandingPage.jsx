import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaPinterest, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUsers, FaTh
} from 'react-icons/fa';
import '../../css/PinterestQRCodeLandingPage.scss';
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

const PinterestQRCodeLandingPage = () => {
    const [pinterestUrl, setPinterestUrl] = useState('');
    const [boardName, setBoardName] = useState('');

    
    const isAllFieldsFilled = pinterestUrl.trim() !== '' && boardName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('pinterest-qr-code');
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
            downloadLink.download = `${boardName || 'pinterest-board'}-qr.png`;
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
                "name": "How do Pinterest QR codes help my brand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pinterest is a visual discovery engine. By using QR codes on product packaging or in-store displays, you can lead customers directly to your curated boards, DIY guides, or product catalogs, increasing engagement and inspiration."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a specific Pinterest board?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can link your QR code to your main profile, a specific board, or even a single Pin. This is perfect for promoting seasonal collections or specific project ideas."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to create Pinterest QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Static Pinterest QR codes generated on TheQrify are free to use, with no scan limits or expiration dates."
                }
            }
        ]
    };

    return (
        <div className="pinterest-landing-container no-select">
            <Helmet>
                <title>Free Pinterest QR Code Generator | Drive Visual Discovery - TheQrify</title>
                <meta name="description" content="Generate a free Pinterest QR code to grow your followers and inspire your audience. Link directly to your profile, boards, or pins with a professional scannable code." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Inspiring <span>Pinterest QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Bridge the gap between inspiration and action. 
                        Provide instant access to your curated boards and product pins with a professional, high-contrast QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaPinterest />
                                <span>Pinterest Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="boardNameInput">Board Name / Label (Required)</label>
                                    <input
                                        id="boardNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter board or profile name"
                                        value={boardName}
                                        onChange={(e) => setBoardName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="pinterestUrlInput">Pinterest Link (Required)</label>
                                    <input
                                        id="pinterestUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.pinterest.com/yourprofile/boardname"
                                        value={pinterestUrl}
                                        onChange={(e) => setPinterestUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your Pinterest board or profile.
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
                                        id="pinterest-qr-code"
                                        value={isAllFieldsFilled ? pinterestUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Pinterest QR
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
                    <h2>Drive Discovery & Inspiration</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Follower Growth</h3>
                                <p>Make it effortless for people to follow your brand by scanning a code on your packaging or catalog.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaTh /></div>
                                <h3>Visual Showcasing</h3>
                                <p>Lead your audience directly to curated collections or project ideas in a single scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Shopping Traffic</h3>
                                <p>Drive customers from offline materials directly to shopable Pins to boost your e-commerce sales.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Simple 3-Step Setup</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Copy the Link</h4>
                                        <p>Grab the URL of your Pinterest profile, a specific board, or a Pin you want to promote.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Paste the link above and download your personalized Pinterest QR code instantly.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Share with Style</h4>
                                        <p>Use your QR code on product tags, catalogs, and in-store displays to inspire customers.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Best Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Retail Packaging & Tags</li>
                                    <li className="mb-3"><FaCheckCircle /> Interior Design Portfolios</li>
                                    <li className="mb-3"><FaCheckCircle /> E-commerce Catalogs</li>
                                    <li className="mb-3"><FaCheckCircle /> Recipe & DIY Guides</li>
                                    <li className="mb-3"><FaCheckCircle /> Event & Wedding Planning</li>
                                    <li className="mb-3"><FaCheckCircle /> Product Display Signage</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Pinterest QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use QR codes for 'Pincodes'?",
                                    a: "While Pinterest has its own proprietary Pincodes, our tool generates standard QR codes that are universally scannable by any smartphone camera, ensuring better compatibility across all devices."
                                },
                                {
                                    q: "Will the QR code ever expire?",
                                    a: "No. The static QR codes created on TheQrify are permanent and will work as long as your Pinterest destination link remains active."
                                },
                                {
                                    q: "Can I link to someone else's board?",
                                    a: "Yes! You can link your QR code to any public Pinterest URL, whether it's your own content or something you find inspiring."
                                },
                                {
                                    q: "Is the resolution high enough for printing on product packaging?",
                                    a: "Absolutely. Our QR codes are high-resolution, making them perfect for sharp printing on retail packaging, labels, and tags."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-pinterest' />
        </div>
    );
};

export default PinterestQRCodeLandingPage;


