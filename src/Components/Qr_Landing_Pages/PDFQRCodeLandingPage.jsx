import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFilePdf, FaDownload, FaCloudUploadAlt, FaEdit,
    FaMobileAlt, FaLink, FaCheckCircle, FaStar
} from 'react-icons/fa';
import '../../css/PDFQRCodeLandingPage.scss';
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

const PDFQRCodeLandingPage = () => {
    const [pdfUrl, setPdfUrl] = useState('');
    const [fileName, setFileName] = useState('');

    const isLocalPath = (url) => {
        return url.includes(':\\') || url.startsWith('file://') || url.startsWith('"C:') || url.startsWith('C:');
    };

    const hasLocalPathError = isLocalPath(pdfUrl);
    const isAllFieldsFilled = pdfUrl.trim() !== '' && fileName.trim() !== '' && !hasLocalPathError;

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('pdf-qr-code');
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
            downloadLink.download = `${fileName || 'document'}-pdf-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="pdf-landing-container no-select">
            <Helmet>
                <title>Free PDF QR Code Generator | Link Documents | TheQrify</title>
                <meta name="description" content="Generate 100% free QR codes for your PDF files. Share documents, menus, brochures, and E-books instantly. Easy to scan and professional with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>PDF to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your documents, catalogs, and brochures effortlessly. Create a
                        professional QR code that links directly to your hosted PDF file.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFilePdf className="me-2" />
                                <span>PDF Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label>File Name (Required)</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. Restaurant Menu 2026"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>PDF URL (Required)</label>
                                    <input
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourwebsite.com/file.pdf"
                                        value={pdfUrl}
                                        onChange={(e) => setPdfUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Upload your PDF to Google Drive (set to 'Anyone with link') or your website and paste the URL here.
                                    </small>
                                </div>
                                {hasLocalPathError && (
                                    <div className="alert alert-danger py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                        Local file paths (like C:\...) won't work on mobile scanners. Please upload your PDF online (e.g., Google Drive) and paste the public link.
                                    </div>
                                )}
                                {!isAllFieldsFilled && !hasLocalPathError && (
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
                                        id="pdf-qr-code"
                                        value={isAllFieldsFilled ? pdfUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download PDF QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Instant digital access to your file' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Go Paperless with PDF QRs</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCloudUploadAlt /></div>
                                <h3>Eco-Friendly</h3>
                                <p>Reduce printing costs and paper waste by sharing digital catalogs, brochures, and manuals.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Real-time Access</h3>
                                <p>Ensure your audience always sees the latest version of your document without re-printing.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Mobile Optimized</h3>
                                <p>Give users a seamless way to save documents directly to their smartphones for later viewing.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="pdf-guide-box">
                                <h3>Perfect Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Restaurant Menus:</strong> Replace physical menus for better hygiene.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Real Estate:</strong> Show property brochures and floor plans.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Event Programs:</strong> Share schedules and maps with attendees.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Instruction Manuals:</strong> Link products to their digital setup guides.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to link your PDF?</h3>
                            <p className="text-muted mb-4">
                                Currently, we provide linking for hosted PDFs. Here's a quick guide if your
                                file is not yet online:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Google Drive:</strong> Upload → Share → Set to 'Anyone with link' → Copy Link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Dropbox:</strong> Upload → Share link → Change 'dl=0' to 'dl=1' for direct view.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Your Website:</strong> Upload to your /media folder and use the direct URL.
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
                                    q: "Does it work with any PDF file?",
                                    a: "Yes! As long as the PDF is hosted online and accessible via a public link, our QR generator can create a scan code for it."
                                },
                                {
                                    q: "Can I use a PDF for my menu?",
                                    a: "Absolutely. This is our most popular use case. Restaurants use PDF QR codes to provide clean, digital menus to their guests."
                                },
                                {
                                    q: "Are there file size limits?",
                                    a: "The QR code itself has no limit since it links to a URL. However, for the best user experience, we recommend keeping your PDF size under 5MB for fast loading on mobile networks."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>


            <LandingPageFooter currentPath='/pdf-qr-code' />
        </div>
    );
};

export default PDFQRCodeLandingPage;


