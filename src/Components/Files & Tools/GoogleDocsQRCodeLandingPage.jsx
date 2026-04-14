import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaFileAlt, FaDownload, FaCloudUploadAlt, FaEdit, 
    FaMobileAlt, FaLink, FaShareSquare, FaGraduationCap, FaBriefcase
} from 'react-icons/fa';
import '../../css/GoogleDocsQRCodeLandingPage.scss';
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

const GoogleDocsQRCodeLandingPage = () => {
    const [docUrl, setDocUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = docUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('google-docs-qr-code');
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
            downloadLink.download = `${fileName || 'google-doc'}-qr.png`;
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
                "name": "How do I create a QR code for a Google Doc?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open your Google Doc, click the 'Share' button, and ensure the access is set to 'Anyone with the link'. Copy that link and paste it into our generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for Google Sheets or Slides?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! This generator works with any Google Workspace link, including Docs, Sheets, Slides, and Forms."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to update the QR if I edit the document?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Since the QR code links to the document's URL (which stays the same), any changes you make to the content will be reflected instantly for anyone who scans the code."
                }
            }
        ]
    };

    return (
        <div className="gdocs-landing-container no-select">
            <Helmet>
                <title>Free Google Docs QR Code Generator | Share Documents | TheQrify</title>
                <meta name="description" content="Generate QR codes for Google Docs, Sheets, and Slides for free. Share your cloud documents instantly with a simple scan. Professional and easy tool by TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Google Docs to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Collaborate faster and share information seamlessly. 
                        Create a professional QR code that links directly to your public or shared Google Doc.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFileAlt className="me-2" />
                                <span>Document Path</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">Document Name (Required)</label>
                                    <input 
                                        id="fileNameInput"
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Team Meeting Notes"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="docUrlInput">Google Docs Share URL (Required)</label>
                                    <input 
                                        id="docUrlInput"
                                        type="url" 
                                        className="custom-input"
                                        placeholder="https://docs.google.com/document/d/..."
                                        value={docUrl}
                                        onChange={(e) => setDocUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Note: Make sure your document is set to 'Anyone with the link' to allow public access.
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
                                        id="google-docs-qr-code"
                                        value={isAllFieldsFilled ? docUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download GDoc QR
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
                    <h2>Modern Collaboration Tools</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShareSquare /></div>
                                <h3>Quick Sharing</h3>
                                <p>Eliminate long URLs in emails or on printed materials. Let users jump straight into your document with one scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Real-Time Updates</h3>
                                <p>Since you are linking to the web document, your QR code always stays 'live' with the newest edits.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaBriefcase /></div>
                                <h3>Professional Look</h3>
                                <p>Perfect for proposals, resumes, and study guides. Give your materials a modern, tech-savvy upgrade.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="gdocs-guide-box">
                                <h3>Perfect Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Educational Handouts:</strong> Give students instant access to digital lecture notes during class.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Business Proposals:</strong> Include a QR code on physical documents for a digital copy of the full proposal.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Event Itineraries:</strong> Share living documents that you can update as the event progresses.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Restaurant Menus:</strong> Link to a Google Doc for a simple, cost-effective digital menu solution.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to set up sharing?</h3>
                            <p className="text-muted mb-4">
                                To ensure your QR code works for everyone, follow these steps:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 1: Open your Doc and click the blue <strong>Share</strong> button.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 2: Under 'General access', change to <strong>'Anyone with the link'</strong>.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 3: Copy the link and paste it into the generator above.
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
                                    q: "Can I track how many people scanned my doc?",
                                    a: "These are static QR codes. To track scans, you can use a URL shortener like Bitly for your Google Doc link before pasting it here."
                                },
                                {
                                    q: "Is it secure to share via QR?",
                                    a: "The QR code just holds the URL. Your document's security depends entirely on the sharing permissions you set in Google Docs."
                                },
                                {
                                    q: "Will this work with Microsoft Office Online?",
                                    a: "Yes! Any web-based document link (Office 365, Canva, Notion) can be converted to a QR code with this tool."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-google-docs' />
        </div>
    );
};

export default GoogleDocsQRCodeLandingPage;
