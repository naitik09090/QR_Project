import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaGoogle, FaStar, FaDownload, FaArrowRight,
    FaQuoteLeft, FaChartLine, FaUsers, FaCheckCircle
} from 'react-icons/fa';
import '../../css/GoogleReviewQRCodeLandingPage.scss';
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

const GoogleReviewQRCodeLandingPage = () => {
    const [reviewUrl, setReviewUrl] = useState('');
    const [businessName, setBusinessName] = useState('');

    
    const isAllFieldsFilled = reviewUrl.trim() !== '' && businessName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('google-review-qr');
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
            downloadLink.download = `${businessName || 'business'}-review-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="review-landing-container no-select">
            <Helmet>
                <title>Free Google Review QR Code Generator | Boost Ratings | TheQrify</title>
                <meta name="description" content="Generate a direct Google Review QR code for your business. Make it easy for customers to leave 5-star reviews instantly. Grow your local SEO with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Get More <span>Google Reviews</span></h1>
                    <p className="hero-subtitle">
                        Boost your business rating and credibility. Create a QR code that takes
                        your customers directly to your Google review page with one simple scan.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaGoogle className="me-2" />
                                <span>Review Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="businessNameInput">Business Name (Required)</label>
                                    <input
                                        id="businessNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter your business name"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="reviewUrlInput">Google Review Link (Required)</label>
                                    <input
                                        id="reviewUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://g.page/r/your-id/review"
                                        value={reviewUrl}
                                        onChange={(e) => setReviewUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Paste your "Get more reviews" link from Google Business Profile.
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
                                        id="google-review-qr"
                                        value={isAllFieldsFilled ? reviewUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Review QR
                                </Button>
                                <div className="d-flex align-items-center mt-3 text-warning">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    <span className="ms-2 text-muted small">Ready for 5-star reviews</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Grow Your Business</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartLine /></div>
                                <h3>Improve Local SEO</h3>
                                <p>More reviews tell Google your business is trustworthy, helping you rank higher in local search results.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Build Trust</h3>
                                <p>Customer testimonials are the strongest form of social proof. Show new patrons why you're the best.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaQuoteLeft /></div>
                                <h3>Higher Response</h3>
                                <p>Removing friction is key. Customers are 80% more likely to leave a review if they don't have to search for you.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-4 align-items-center">
                        <Col lg={6}>
                            <div className="guide-box">
                                <h3>How To Find Your Review Link</h3>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p>Go to your <strong>Google Business Profile</strong> manager or search for your business on Google.</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p>Click on the <strong>"Get more reviews"</strong> button in the dashboard.</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p>Copy the shortened <strong>review URL</strong> (usually looks like g.page/r/...).</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p>Paste it here to generate your direct-to-review QR code.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Best Places to Display</h3>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> 🏢 At the checkout counter or reception.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> 🧾 On printed receipts or invoices.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> 🍽️ Table tents in restaurants and cafes.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> 📦 Inside product packaging or delivery bags.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> 🚪 On your storefront window or door.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this link open the review box directly?",
                                    a: "Yes! If you use the \"Get more reviews\" link from your Google Business Profile, the QR code will open your listing with the star rating box already popped up for the user."
                                },
                                {
                                    q: "Is this search engine optimized?",
                                    a: "The QR code himself isn't a direct SEO factor, but the increase in reviews you'll receive is one of the most critical ranking factors for Local SEO and Google Maps."
                                },
                                {
                                    q: "Can I use this for multiple locations?",
                                    a: "Absolutely. You just need to generate a unique QR code for each location's specific review link."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/google-review-qr-code' />
        </div>
    );
};

export default GoogleReviewQRCodeLandingPage;


