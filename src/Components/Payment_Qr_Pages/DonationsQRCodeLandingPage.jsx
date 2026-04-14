import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaHeart, FaDownload, FaHandHoldingHeart,
    FaCheckCircle, FaLock, FaGlobeAmericas, FaUsers
} from 'react-icons/fa';
import '../../css/DonationsQRCodeLandingPage.scss';


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

const DonationsQRCodeLandingPage = () => {
    const [donationLink, setDonationLink] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [cause, setCause] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const isAllFieldsFilled = donationLink.trim() !== '' && organizationName.trim() !== '' && cause.trim() !== '' && targetAmount.trim() !== '';

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('donation-qr-code');
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
            downloadLink.download = `${organizationName || 'donation'}-qr.png`;
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
                "name": "How can I use a QR code for donations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Paste your organization's donation page link (PayPal Giving Fund, GoFundMe, Tiltify, or your own website) into the generator. Print the QR code on flyers, mailers, or display it at events for instant donor access."
                }
            },
            {
                "@type": "Question",
                "name": "Can I track who donated via the QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by using UTM parameters in your donation link. Most fundraising platforms will then show you how much was raised specifically through the QR code source."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a limit to how many people can scan it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Our static QR codes support unlimited scans, making them perfect for large-scale charity campaigns and permanent donation boxes."
                }
            }
        ]
    };

    return (
        <div className="donations-landing-container no-select">
            <Helmet>
                <title>Free Donation QR Code Generator | Support Your Cause - TheQrify</title>
                <meta name="description" content="Create a custom donation QR code for your non-profit or personal cause. Accept contributions instantly with a scannable link. Secure, reliable, and free." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Empower Giving with <span>Donation</span> QR Codes</h1>
                    <p className="hero-subtitle">
                        Every scan counts.
                        Make it effortless for supporters to contribute to your cause with a professional, high-trust donation QR code.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaHeart size={35} />
                                <span>Cause Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="donationLinkInput">Donation Page / Fundraising URL (Required)</label>
                                    <input
                                        id="donationLinkInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.charity.org/donate"
                                        value={donationLink}
                                        onChange={(e) => setDonationLink(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-1 d-block">Link to your secure fundraising or donation portal.</small>
                                </div>
                                <Row>
                                    <Col md={7}>
                                        <div className="custom-form-group">
                                            <label htmlFor="orgNameInput">Organization Name (Required)</label>
                                            <input
                                                id="orgNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="Global Relief Fund"
                                                value={organizationName}
                                                onChange={(e) => setOrganizationName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="custom-form-group">
                                            <label htmlFor="targetInput">Goal Amount (Required)</label>
                                            <input
                                                id="targetInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="0.00"
                                                value={targetAmount}
                                                onChange={(e) => setTargetAmount(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="custom-form-group">
                                    <label htmlFor="causeInput">Mission / Cause Message (Required)</label>
                                    <input
                                        id="causeInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Supporting clean water initiatives"
                                        value={cause}
                                        onChange={(e) => setCause(e.target.value)}
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
                                            id="donation-qr-code"
                                            value={isAllFieldsFilled ? donationLink : 'https://theqrify.com'}
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
                                        <FaDownload className="me-2" /> Download Donation QR
                                    </Button>
                                    <p className="text-muted small mt-3 mb-0 text-center">
                                        {isAllFieldsFilled ? `Support ${organizationName}` : 'Fill all fields to preview'}
                                    </p>
                                </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Drive Impact Effortlessly</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHandHoldingHeart /></div>
                                <h3>Higher Conversion</h3>
                                <p>Remove the friction of typing URLs. One scan takes donors directly to your giving form.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaGlobeAmericas /></div>
                                <h3>Global Reach</h3>
                                <p>Whether in a church, a gallery, or on a social media post, your cause is always a scan away.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Community Trust</h3>
                                <p>A professional QR code builds confidence and shows that your organization is tech-forward.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Fundraise in 3 Simple Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Setup Your Portal</h4>
                                        <p>Ensure your donation page is mobile-optimized and ready to accept contributions.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate QR</h4>
                                        <p>Paste the URL and customize the landing page details to match your campaign theme.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Spread the Word</h4>
                                        <p>Print the QR on posters, display it on screens, or add it to your direct mail campaigns.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For Any Initiative</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Non-Profit Gala Events</li>
                                    <li className="mb-3"><FaCheckCircle /> Local Community Fundraisers</li>
                                    <li className="mb-3"><FaCheckCircle /> Religious Organizations</li>
                                    <li className="mb-3"><FaCheckCircle /> Personal Medical/Study Funds</li>
                                    <li className="mb-3"><FaCheckCircle /> Environmental Campaigns</li>
                                    <li className="mb-3"><FaCheckCircle /> Relief & Emergency Aid</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Donation QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does TheQrify take a percentage of donations?",
                                    a: "No. TheQrify is a free tool. We do not process the donations; we only provide the QR code that links to your payment provider. 100% of what your donors give goes to your chosen platform."
                                },
                                {
                                    q: "Can I use this for my personal GoFundMe?",
                                    a: "Absolutely! Just paste your GoFundMe link, and you'll get a professional QR code that makes it easier for people to support you."
                                },
                                {
                                    q: "What's the best way to display a donation QR code?",
                                    a: "High-visibility areas are best: checkout counters, registration desks, event programs, and the corners of presentation slides."
                                },
                                {
                                    q: "Does it work with recurring donations?",
                                    a: "Yes. If your donation page offers a recurring gift option, scanning the QR code will bring donors exactly there."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-donations' />
        </div>
    );
};


export default DonationsQRCodeLandingPage;