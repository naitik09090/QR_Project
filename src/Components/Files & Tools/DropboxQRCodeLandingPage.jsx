import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaDropbox, FaDownload, FaCloudUploadAlt, FaEdit, 
    FaMobileAlt, FaLink, FaShareAlt, FaShieldAlt, FaSyncAlt
} from 'react-icons/fa';
import '../../css/DropboxQRCodeLandingPage.scss';
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

const DropboxQRCodeLandingPage = () => {
    const [dropboxUrl, setDropboxUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = dropboxUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('dropbox-qr-code');
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
            downloadLink.download = `${fileName || 'dropbox'}-qr.png`;
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
                "name": "How do I create a QR code for a Dropbox file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Go to Dropbox, find your file or folder, click 'Share' and then 'Copy link'. Paste that link into our generator above to create your QR code."
                }
            },
            {
                "@type": "Question",
                "name": "Can I share entire folders via QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you share a Dropbox folder link, the QR code will lead users to all the files within that folder."
                }
            },
            {
                "@type": "Question",
                "name": "Does the QR code work for direct downloads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By default, Dropbox links open a preview page. To make it a direct download, you can change the 'dl=0' at the end of your link to 'dl=1' before generating the QR code."
                }
            }
        ]
    };

    return (
        <div className="dropbox-landing-container no-select">
            <Helmet>
                <title>Free Dropbox QR Code Generator | Share Files Easily | TheQrify</title>
                <meta name="description" content="Convert your Dropbox share links into scannable QR codes for free. Share folders, documents, and large files instantly with TheQrify's Dropbox QR generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Dropbox to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your cloud files and folders effortlessly. 
                        Create a professional QR code that links directly to your shared Dropbox assets or project deliverables.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaDropbox className="me-2" />
                                <span>Cloud Asset Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">File/Folder Name (Required)</label>
                                    <input 
                                        id="fileNameInput"
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Branding Assets v2"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="dropboxUrlInput">Dropbox Share URL (Required)</label>
                                    <input 
                                        id="dropboxUrlInput"
                                        type="url" 
                                        className="custom-input"
                                        placeholder="https://www.dropbox.com/scl/fi/..."
                                        value={dropboxUrl}
                                        onChange={(e) => setDropboxUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Pro Tip: Replace 'dl=0' with 'dl=1' in your link if you want an instant download experience.
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
                                        id="dropbox-qr-code"
                                        value={isAllFieldsFilled ? dropboxUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Dropbox QR
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
                    <h2>Simplified File Distribution</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShareAlt /></div>
                                <h3>Modern Distribution</h3>
                                <p>Stop sending long, complex URLs. A simple scan provides instant access to your shared work or marketing assets.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Auto-Updating Links</h3>
                                <p>Dropbox links are dynamic. If you update the file in your folder, the QR code still connects to the latest version.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Controlled Access</h3>
                                <p>Manage your document security through Dropbox. Set passwords or expiration dates on your shared links via their platform.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="dropbox-guide-box">
                                <h3>Smart Integration Ideas</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Portfolio Samples:</strong> Add a QR code to your resume that leads to a Dropbox folder of your design work.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Print Advertisements:</strong> Link physical ads to high-res catalogs or video brochures hosted on your cloud drive.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Business Operations:</strong> Give staff instant access to shared standard operating procedures (SOPs) via workplace posters.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Collaborative Projects:</strong> Share QR codes with partners for quick access to centralized project resource folders.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to get your Dropbox link?</h3>
                            <p className="text-muted mb-4">
                                Follow these quick steps to get your QR code ready:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 1: Right-click your file or folder in <strong>Dropbox</strong>.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 2: Select 'Share' and then click <strong>'Copy link'</strong>.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> Step 3: Paste the link into the URL field above to generate your QR.
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
                                    q: "Can anyone see my file after scanning?",
                                    a: "Only if you've set the link permissions to 'Anyone with the link'. You can always change access settings in Dropbox to restrict who can see the file."
                                },
                                {
                                    q: "What happens if I move the file in Dropbox?",
                                    a: "If you move the file or folder within your Dropbox, the share link might break. It's best to verify the link if you reorganize your cloud storage."
                                },
                                {
                                    q: "Can I use this for Dropbox Paper?",
                                    a: "Absolutely! Any shareable URL from the Dropbox ecosystem—including Paper docs—is compatible with our generator."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-dropbox-link' />
        </div>
    );
};

export default DropboxQRCodeLandingPage;
