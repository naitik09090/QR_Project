import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaCloud, FaDownload, FaCloudUploadAlt, FaEdit, 
    FaMobileAlt, FaLink, FaFolderOpen, FaLock, FaGlobe
} from 'react-icons/fa';
import '../../css/CloudFilesQRCodeLandingPage.scss';
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

const CloudFilesQRCodeLandingPage = () => {
    const [cloudUrl, setCloudUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = cloudUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('cloud-files-qr-code');
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
            downloadLink.download = `${fileName || 'cloud-file'}-qr.png`;
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
                "name": "What cloud services work with this QR generator?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Any cloud storage service that provides a shareable URL will work, including iCloud, OneDrive, Box, Mega, and custom FTP servers."
                }
            },
            {
                "@type": "Question",
                "name": "How do I make my cloud file accessible to everyone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Check your cloud provider's sharing settings and ensure the visibility is set to 'Public' or 'Anyone with the link' to avoid access errors for scanners."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a file size limit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The QR code only stores the link. The file size handled is determined entirely by your cloud storage provider."
                }
            }
        ]
    };

    return (
        <div className="cloud-landing-container no-select">
            <Helmet>
                <title>Free Cloud Files QR Code Generator | iCloud, OneDrive, Box | TheQrify</title>
                <meta name="description" content="Generate QR codes for iCloud, OneDrive, Box, and other cloud storage links for free. Professional file sharing tool for businesses and individuals by TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Connect <span>Cloud Files to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share assets from iCloud, OneDrive, Box, and more with a single scan. 
                        Create a professional QR code that links directly to your public cloud-hosted files or folders.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaCloud className="me-2" />
                                <span>Universal Cloud Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">Asset Label (Required)</label>
                                    <input 
                                        id="fileNameInput"
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Shared Project Folder"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="cloudUrlInput">Cloud Share URL (Required)</label>
                                    <input 
                                        id="cloudUrlInput"
                                        type="url" 
                                        className="custom-input"
                                        placeholder="Paste link from OneDrive, iCloud, Box, etc."
                                        value={cloudUrl}
                                        onChange={(e) => setCloudUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Compatible with any web-based file sharing link.
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
                                        id="cloud-files-qr-code"
                                        value={isAllFieldsFilled ? cloudUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Cloud QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Universal cloud accessibility' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Your Cloud, Simplified</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaGlobe /></div>
                                <h3>Universal Compatibility</h3>
                                <p>Whether it's iCloud, Box, OneDrive, or Mega, our generator creates a seamless bridge between physical materials and digital cloud assets.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaFolderOpen /></div>
                                <h3>Folder Sharing</h3>
                                <p>Don't just share one file. Create a QR code for an entire shared folder, giving scanners access to a collection of resources in one go.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaLock /></div>
                                <h3>Secure Exchange</h3>
                                <p>Leverage your cloud provider's security. Set up passwords or view-only permissions on your link, and the QR code will respect those rules.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="cloud-guide-box">
                                <h3>Professional Applications</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Corporate Handouts:</strong> Place QR codes on meeting agendas to link to a OneDrive folder of supporting docs.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Photography Portfolios:</strong> Share high-quality image galleries hosted on iCloud or Adobe Cloud via business cards.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Real Estate:</strong> Link flyers to cloud-hosted virtual tours and high-res property image folders.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Tech Support:</strong> Provide QR codes on hardware that lead to the latest drivers and firmware on your cloud server.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to set up your Cloud QR?</h3>
                            <p className="text-muted mb-4">
                                Most cloud providers follow a similar sharing process:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-info me-3" /> <strong>OneDrive/Box:</strong> Right-click file → Share → Copy link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-info me-3" /> <strong>iCloud:</strong> Share file → Copy link (ensure 'Anyone with link' is on).
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-info me-3" /> <strong>Mega/Custom:</strong> Copy any public HTTP/HTTPS URL from your provider.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Common Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for non-file links?",
                                    a: "Yes! Any standard URL can be converted to a QR code here. However, this tool is specifically optimized for cloud storage user experiences."
                                },
                                {
                                    q: "What happens if my link changes?",
                                    a: "If you regenerate a share link in your cloud provider, the old link inside the QR code will stop working. You would need to create a new QR code."
                                },
                                {
                                    q: "Do I need a paid account on cloud services?",
                                    a: "No. As long as your cloud provider allows you to generate a shareable link on their free tier, our generator will work perfectly."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-cloud-files' />
        </div>
    );
};

export default CloudFilesQRCodeLandingPage;
