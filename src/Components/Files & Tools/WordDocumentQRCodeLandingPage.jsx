import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaFileWord, FaDownload, FaCloudUploadAlt, FaEdit, 
    FaMobileAlt, FaLink, FaCheckCircle, FaFileAlt, FaLock
} from 'react-icons/fa';
import '../../css/WordDocumentQRCodeLandingPage.scss';
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

const WordDocumentQRCodeLandingPage = () => {
    const [wordUrl, setWordUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = wordUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('word-qr-code');
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
            downloadLink.download = `${fileName || 'document'}-word-qr.png`;
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
                "name": "How do I create a QR code for a Word document?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "First, upload your Word file (.doc or .docx) to a cloud hosting service like Google Drive, OneDrive, or Dropbox. Set the privacy settings to 'Anyone with the link' and paste that URL into our QR generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Does the QR code work if I update the document?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you are using a cloud-hosted link (like a OneDrive or Google Docs share link), you can edit the document content anytime, and the QR code will automatically point to the updated version without needing a new scan."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for resume sharing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. It's a professional way to share your resume. Just link your hosted portfolio or resume document, and recruiters can scan it instantly during interviews or at career fairs."
                }
            }
        ]
    };

    return (
        <div className="word-landing-container no-select">
            <Helmet>
                <title>Free Word QR Code Generator | Link Documents | TheQrify</title>
                <meta name="description" content="Generate 100% free QR codes for your Word documents, resumes, and reports. Share files instantly with scannable QR codes. Fast, secure, and professional." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Word to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your resumes, reports, and manuals effortlessly. 
                        Create a professional QR code that links directly to your hosted Word document or Google Doc.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFileWord className="me-2" />
                                <span>Document Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">File Name (Required)</label>
                                    <input 
                                        id="fileNameInput"
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Project Proposal 2026"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="wordUrlInput">Word Document URL (Required)</label>
                                    <input 
                                        id="wordUrlInput"
                                        type="url" 
                                        className="custom-input"
                                        placeholder="https://docs.google.com/document/..."
                                        value={wordUrl}
                                        onChange={(e) => setWordUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Upload your .docx to Google Drive or OneDrive and paste the sharing link here.
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
                                        id="word-qr-code"
                                        value={isAllFieldsFilled ? wordUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Word QR
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
                    <h2>Seamless Document Sharing</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaFileAlt /></div>
                                <h3>Quick Access</h3>
                                <p>Eliminate the need for bulky email attachments. Let your audience scan and read documents on demand.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Always Up-to-Date</h3>
                                <p>Using cloud links ensures that scans always lead to the most current version of your Word file.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Multi-Device Support</h3>
                                <p>Optimized for mobile scanners, perfect for business cards, resumes, and printed corporate reports.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="word-guide-box">
                                <h3>Perfect Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Professional Resumes:</strong> Add a QR code to your printed resume for instant mobile viewing.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Corporate Reports:</strong> Link QR codes in brochures to detailed annual reports or whitepapers.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Real Estate:</strong> Share detailed property descriptions and terms via on-site QR codes.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Educational Materials:</strong> Link textbooks to supplementary reading lists and worksheets.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to Share Your Word File?</h3>
                            <p className="text-muted mb-4">
                                Ensure your document is hosted on a cloud service. We recommend these platforms for the best results:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Google Docs:</strong> File → Share → Copy Link (set to 'Anyone with link').
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Office 365 / OneDrive:</strong> Share → Copy link (ensure permissions are set).
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Dropbox:</strong> Upload → Share → Create and copy public link.
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
                                    q: "Can I protect my Word document with a password?",
                                    a: "Yes, you can apply password protection within Word itself or via your cloud provider. Scanners will be prompted for the password before they can access the content."
                                },
                                {
                                    q: "Does the QR code work with .doc and .docx?",
                                    a: "Yes. As long as your hosting service provides a link to the document, the QR code will work regardless of the Word version."
                                },
                                {
                                    q: "Is there a limit on scans?",
                                    a: "TheQrify offers unlimited scans for free. There are no restrictions on how many times people can scan your document QR code."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-word-document' />
        </div>
    );
};

export default WordDocumentQRCodeLandingPage;
