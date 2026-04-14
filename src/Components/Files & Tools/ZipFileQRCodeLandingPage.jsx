import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFileArchive, FaDownload, FaCloudUploadAlt, FaEdit,
    FaMobileAlt, FaLink, FaFolderPlus, FaShieldAlt, FaHistory
} from 'react-icons/fa';
import '../../css/ZipFileQRCodeLandingPage.scss';
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

const ZipFileQRCodeLandingPage = () => {
    const [zipUrl, setZipUrl] = useState('');
    const [fileName, setFileName] = useState('');


    const isAllFieldsFilled = zipUrl.trim() !== '' && fileName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('zip-qr-code');
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
            downloadLink.download = `${fileName || 'archive'}-zip-qr.png`;
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
                "name": "How do I create a QR code for a ZIP file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your ZIP file to a cloud service like WeTransfer, Dropbox, Google Drive, or your own server. Copy the direct download link and paste it into our ZIP QR generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Can I share multiple files in one QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! By compressing multiple files into a single ZIP archive, you can share folders, image sets, or multiple documents through one scannable QR code."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a file size limit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The QR code itself has no limit as it only stores the URL. The limit depends on the cloud service you use to host your ZIP file."
                }
            }
        ]
    };

    return (
        <div className="zip-landing-container no-select">
            <Helmet>
                <title>Free ZIP File QR Code Generator | Share Archives | TheQrify</title>
                <meta name="description" content="Convert your ZIP archives to scannable QR codes for free. Share bulk files, software, and document sets instantly with TheQrify's ZIP QR generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>ZIP to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share bulk datasets, image collections, and project folders instantly.
                        Create a professional QR code that links directly to your hosted ZIP or RAR archive.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFileArchive className="me-2" />
                                <span>Archive Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">Archive Name (Required)</label>
                                    <input
                                        id="fileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. Project Assets 2026"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="zipUrlInput">ZIP File URL (Required)</label>
                                    <input
                                        id="zipUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.dropbox.com/s/..."
                                        value={zipUrl}
                                        onChange={(e) => setZipUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Note: Ensure the link is direct or public so users can download the file after scanning.
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
                                        id="zip-qr-code"
                                        value={isAllFieldsFilled ? zipUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download ZIP QR
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
                    <h2>Master Bulk File Sharing</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaFolderPlus /></div>
                                <h3>Organized Bundles</h3>
                                <p>Package dozens of files into one archive. Perfect for sharing event photos or project documentation sets.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Professional Delivery</h3>
                                <p>Provide a clean ZIP download link on your marketing materials instead of messy lists of individual file links.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHistory /></div>
                                <h3>Quick Deployment</h3>
                                <p>Ideal for software developers sharing builds or designers delivering high-res asset packages to clients.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="zip-guide-box">
                                <h3>Top Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Software Distribution:</strong> Link to the latest build or source code archive on your website.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Photography Portfolios:</strong> Share high-resolution image sets with clients via a simple scan.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Marketing Kits:</strong> Provide brand assets, logos, and guidelines in one scannable package.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Conference Resources:</strong> Bundle all session notes, slides, and handouts into one ZIP for attendees.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to link your ZIP file?</h3>
                            <p className="text-muted mb-4">
                                Any file-sharing service that provides a direct download link will work perfectly:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>WeTransfer:</strong> Generate a transfer link and paste it above.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Dropbox:</strong> Copy the share link (change 'dl=0' to 'dl=1' for direct download).
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>GitHub:</strong> Link to your repository's 'Download ZIP' URL for instant access.
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
                                    q: "Can I use this for RAR or 7Z files?",
                                    a: "Yes! Any compressed archive format will work. As long as you have a URL that points to the file, our generator can create a QR code for it."
                                },
                                {
                                    q: "Does the link expire?",
                                    a: "The QR code itself is permanent, but the link will only work as long as your hosting provider keeps the file active. Check your provider's expiration policies."
                                },
                                {
                                    q: "Is it secure?",
                                    a: "TheQrify doesn't host your files; we only create the bridge. Your file security depends entirely on your hosting provider's authentication settings."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-zip-file' />
        </div>
    );
};

export default ZipFileQRCodeLandingPage;
