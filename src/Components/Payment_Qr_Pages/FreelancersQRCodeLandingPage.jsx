import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaUserTie, FaDownload, FaBriefcase,
    FaCheckCircle, FaLock, FaPalette, FaCode
} from 'react-icons/fa';
import '../../css/FreelancersQRCodeLandingPage.scss';


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

const FreelancersQRCodeLandingPage = () => {
    const [portfolioLink, setPortfolioLink] = useState('');
    const [freelancerName, setFreelancerName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [rate, setRate] = useState('');
    const isAllFieldsFilled = portfolioLink.trim() !== '' && freelancerName.trim() !== '' && serviceType.trim() !== '' && rate.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('freelance-qr-code');
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
            downloadLink.download = `${freelancerName || 'freelance'}-qr.png`;
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
                "name": "How do freelancers use QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Freelancers use QR codes to link to their portfolios, resumes, LinkedIn profiles, or direct payment pages. Simply include the QR code on your digital business card or invoice for instant access."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link this to my Upwork or Fiverr profile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can paste any link—whether it's your personal website, your Upwork profile, or a direct Stripe payment link—to create your custom QR code."
                }
            },
            {
                "@type": "Question",
                "name": "Is it professional to put a QR code on an invoice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. It shows you're tech-savvy and makes it much easier for clients to pay you, reducing the time you spend chasing invoices."
                }
            }
        ]
    };

    return (
        <div className="freelancers-landing-container no-select">
            <Helmet>
                <title>Free Freelancer QR Code Generator | Portfolio & Payment - TheQrify</title>
                <meta name="description" content="Elevate your freelance business with a custom QR code. Link to your portfolio, resume, or payment portal instantly. Professional, secure, and 100% free." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Professional <span>Freelancer</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Your business, one scan away.
                        Give clients instant access to your portfolio, services, and payment options with a sleek, professional QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaUserTie size={35} />
                                <span>Freelance Identity</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="portfolioLinkInput">Portfolio / Profile / Payment URL (Required)</label>
                                    <input
                                        id="portfolioLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourname.com/portfolio"
                                        value={portfolioLink}
                                        onChange={(e) => setPortfolioLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">Link to where clients can see your work or pay you.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="nameInput">Full Name / Brand Name (Required)</label>
                                            <input
                                                id="nameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Alex Design Studio"
                                                value={freelancerName}
                                                onChange={(e) => setFreelancerName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="rateInput">Fixed Rate / Fee (Required)</label>
                                            <input
                                                id="rateInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="0.00"
                                                value={rate}
                                                onChange={(e) => setRate(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="custom-form-group">
                                    <label htmlFor="serviceInput">Service niche (e.g. Backend Dev) (Required)</label>
                                    <input
                                        id="serviceInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Full Stack Web Development"
                                        value={serviceType}
                                        onChange={(e) => setServiceType(e.target.value)}
                                        required
                                    />
                                </div>
                                {!isAllFieldsFilled && (
                                    <div className="alert alert-info py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                        Please fill in all fields to generate the QR code.
                                    </div>
                                )}
                            </Form>
                        </Col>
                        <Col lg={5} className="mt-4 mt-lg-0">
                            <div className={`qr-preview-container`}>
                                <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                    <QRCodeSVG
                                        id="freelance-qr-code"
                                        value={isAllFieldsFilled ? portfolioLink : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Freelance QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? `Portfolio of ${freelancerName}` : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Own Your Independence</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaPalette /></div>
                                <h3>Brand Consistency</h3>
                                <p>Maintain a professional image across all touchpoints, from digital resumes to printed flyers.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCode /></div>
                                <h3>Tech-Forward</h3>
                                <p>Show clients you use modern tools to streamline communication and project onboarding.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBriefcase /></div>
                                <h3>Instant Trust</h3>
                                <p>Provide immediate access to your testimonials and past projects with a single scan.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Scale Your Business in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Pick Your Destination</h4>
                                        <p>Whether it's your GitHub, Behance, or a custom payment page, get your link ready.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate QR</h4>
                                        <p>Input your business details and generate a high-resolution, scannable QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Apply Everywhere</h4>
                                        <p>Add the QR code to your email signature, business cards, and even your custom invoices.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Built For Every Creative</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> UI/UX & Graphic Designers</li>
                                    <li className="mb-3"><FaCheckCircle /> Independent Developers & Engineers</li>
                                    <li className="mb-3"><FaCheckCircle /> Content Creators & Ghostwriters</li>
                                    <li className="mb-3"><FaCheckCircle /> Digital Marketing Consultants</li>
                                    <li className="mb-3"><FaCheckCircle /> Virtual Assistants</li>
                                    <li className="mb-3"><FaCheckCircle /> Professional Photographers</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Freelancer QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for non-payment links?",
                                    a: "Yes. Many freelancers use it to link to their Calendly for session bookings or their Linktree to show multiple profiles at once."
                                },
                                {
                                    q: "Do I need a separate QR for each client?",
                                    a: "Not necessarily. A single QR linking to your main portfolio or payment portal works for most, though some choose to make unique codes for specific high-value invoices."
                                },
                                {
                                    q: "Is it free for commercial use?",
                                    a: "Yes. All QR codes generated on TheQrify are free for you to use in your business and commercial projects without any royalties."
                                },
                                {
                                    q: "Will the QR code ever expire?",
                                    a: "No. These are static QR codes that encode your URL directly. As long as your link is active, the QR code will work forever."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-freelancers' />
        </div>
    );
};


export default FreelancersQRCodeLandingPage;