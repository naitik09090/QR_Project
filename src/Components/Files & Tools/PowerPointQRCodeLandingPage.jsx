import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFilePowerpoint, FaDownload, FaCloudUploadAlt, FaEdit,
    FaMobileAlt, FaLink, FaCheckCircle, FaTv
} from 'react-icons/fa';
import '../../css/PowerPointQRCodeLandingPage.scss';
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

const PowerPointQRCodeLandingPage = () => {
    const [pptUrl, setPptUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = pptUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('ppt-qr-code');
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
            downloadLink.download = `${fileName || 'presentation'}-ppt-qr.png`;
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
                "name": "How do I create a QR code for a PowerPoint presentation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your PowerPoint file (.ppt or .pptx) to a cloud storage service like Google Drive, OneDrive, or Dropbox. Copy the shareable link (set it to 'Anyone with link' can view) and paste it into the generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for Google Slides?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Just copy the 'Share' link from your Google Slides presentation and paste it here. Your audience will be taken directly to the presentation online."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if I update my slides?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you use a cloud-hosted link, any updates you make to your original PowerPoint or Google Slides file will be instantly accessible through the same QR code. You don't need to generate a new one."
                }
            }
        ]
    };

    return (
        <div className="ppt-landing-container no-select">
            <Helmet>
                <title>Free PowerPoint QR Code Generator | Share Presentations | TheQrify</title>
                <meta name="description" content="Generate 100% free QR codes for your PowerPoint presentations and Google Slides. Let your audience scan and follow along instantly with TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>PowerPoint to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your decks, pitches, and educational slides effortlessly.
                        Create a professional QR code that links directly to your hosted PPT or Google Slides presentation.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFilePowerpoint className="me-2" />
                                <span>Presentation Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">File Name (Required)</label>
                                    <input
                                        id="fileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. Q4 Growth Strategy"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="pptUrlInput">PowerPoint / Slides URL (Required)</label>
                                    <input
                                        id="pptUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://onedrive.live.com/view/..."
                                        value={pptUrl}
                                        onChange={(e) => setPptUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Host your .pptx on OneDrive or Google Drive and paste the public sharing link here.
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
                                        id="ppt-qr-code"
                                        value={isAllFieldsFilled ? pptUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download PPT QR
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
                    <h2>Interactive Presentations</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaTv /></div>
                                <h3>Follow Along</h3>
                                <p>Enable your audience to view your slides on their own devices during a live speech for better engagement.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Dynamic Revisions</h3>
                                <p>Modify your presentation in real-time. The QR code always points to the most recent version on your cloud drive.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Pocket Presentations</h3>
                                <p>Give clients a scannable way to carry your pitch deck home on their smartphones after a meeting.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="ppt-guide-box">
                                <h3>Common Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Conference Decks:</strong> Show a QR code on your last slide for instant handout downloads.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Investor Pitches:</strong> Include a QR code on your printed business plan for a digital deep-dive.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Educational Lectures:</strong> Let students scan QR codes in class to access study materials instantly.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Trade Shows:</strong> Display QR codes on banners to showcase product demos and catalogs.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to link your PowerPoint?</h3>
                            <p className="text-muted mb-4">
                                Your presentation must be hosted online to be scannable. Here are the most reliable methods:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Google Slides:</strong> Share → Get link → Anyone with the link → Copy Link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>OneDrive / SharePoint:</strong> Right-click file → Share → Copy link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Canva Presentations:</strong> Share → Public View Link → Copy link.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Everything You Need to Know</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does it work with large PowerPoint files?",
                                    a: "Yes. The QR code links to a URL, so the file size doesn't affect the code itself. However, smaller files load faster for your scanners on mobile data."
                                },
                                {
                                    q: "Can scanners download the file?",
                                    a: "This depends on your hosting settings. If you provide a direct download link, they can save it. If you provide a 'View Only' link, they can only browse it online."
                                },
                                {
                                    q: "Is it free to use forever?",
                                    a: "Absolutely. TheQrify provide static QR codes for presentations that never expire and have no scan limits."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-powerpoint' />
        </div>
    );
};

export default PowerPointQRCodeLandingPage;
