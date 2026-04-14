import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaYoutube, FaDownload, FaPlay, FaUsers,
    FaMobileAlt, FaChartBar, FaCheckCircle, FaStar
} from 'react-icons/fa';
import '../../css/YouTubeQRCodeLandingPage.scss';
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

const YouTubeQRCodeLandingPage = () => {
    const [ytUrl, setYtUrl] = useState('');
    const [title, setTitle] = useState('');

    
    const isAllFieldsFilled = ytUrl.trim() !== '' && title.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('youtube-qr-code');
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
            downloadLink.download = `${title || 'youtube'}-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="youtube-landing-container no-select">
            <Helmet>
                <title>Free YouTube QR Code Generator | Channel & Video QR | TheQrify</title>
                <meta name="description" content="Generate a 100% free YouTube QR code for your channel or specific videos. Increase views and subscribers instantly. Clean, professional QR codes from TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Boost Your <span>YouTube Views</span></h1>
                    <p className="hero-subtitle">
                        Turn your offline audience into viewers and subscribers. Create a direct
                        QR code for your channel, a specific video, or even a live stream.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaYoutube className="me-2" />
                                <span>YouTube Content</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="titleInput">Video or Channel Title (Required)</label>
                                    <input
                                        id="titleInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="My Channel Name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>YouTube URL (Required)</label>
                                    <input
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://youtube.com/c/yourchannel or video link"
                                        value={ytUrl}
                                        onChange={(e) => setYtUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Paste your channel link, video URL, or Shorts link.
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
                                        id="youtube-qr-code"
                                        value={isAllFieldsFilled ? ytUrl : 'https://youtube.com'}
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
                                    <FaDownload className="me-2" /> Download YouTube QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Scannable by all smartphones' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Why Use YouTube QR Codes?</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUsers /></div>
                                <h3>Gain Subscribers</h3>
                                <p>Place QR codes on your business cards or products to get people to subscribe instantly without typing your name.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaPlay /></div>
                                <h3>Increase Views</h3>
                                <p>Drive traffic directly to your new video or tutorial from physical posters, flyers, or magazines.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Track Engagement</h3>
                                <p>Use static codes for permanent links or track your video marketing campaigns accurately.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-4 align-items-center">
                        <Col lg={6}>
                            <div className="yt-guide-box">
                                <h3>Where to print your QR code</h3>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p><strong>Merchandise:</strong> On t-shirts, hoodies, or caps to promote your vlog.</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p><strong>Product Manuals:</strong> Link to "How-To" videos for better customer support.</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p><strong>TV Commercials:</strong> Let viewers scan their TV to watch more content on mobile.</p>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <p><strong>Posters/Banners:</strong> Promote your upcoming movie or music video offline.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Best Practices</h3>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="me-3" /> Ensure the video privacy is set to "Public".
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="me-3" /> Test the QR code with different scanning apps.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="me-3" /> Use a high-quality download for printing.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="me-3" /> Keep the QR code at least 2cm x 2cm for scans.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>YouTube QR FAQs</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does it open the YouTube app directly?",
                                    a: "Yes! On most smartphones, scanning a YouTube URL QR code will automatically trigger the official YouTube app to open and play the video or show the channel."
                                },
                                {
                                    q: "Can I generate a QR code for YouTube Shorts?",
                                    a: "Absolutely. Just paste the link to your Shorts video into our generator, and it will work perfectly."
                                },
                                {
                                    q: "Is there a scan limit?",
                                    a: "No. The static QR codes generated on TheQrify have no scan limits and will last forever."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>


            <LandingPageFooter currentPath='/youtube-qr-code' />
        </div>
    );
};

export default YouTubeQRCodeLandingPage;


