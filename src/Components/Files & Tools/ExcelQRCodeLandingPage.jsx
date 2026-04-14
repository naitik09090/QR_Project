import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaFileExcel, FaDownload, FaCloudUploadAlt, FaEdit,
    FaMobileAlt, FaLink, FaCheckCircle, FaTable, FaFileAlt
} from 'react-icons/fa';
import '../../css/ExcelQRCodeLandingPage.scss';
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

const ExcelQRCodeLandingPage = () => {
    const [excelUrl, setExcelUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
    const isAllFieldsFilled = excelUrl.trim() !== '' && fileName.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('excel-qr-code');
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
            downloadLink.download = `${fileName || 'spreadsheet'}-excel-qr.png`;
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
                "name": "How do I create a QR code for an Excel file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your Excel file to a cloud storage service like Google Drive, OneDrive, or Dropbox. Set the sharing permissions to 'Anyone with the link' and paste that URL into our generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Does the QR code update if I change the Excel file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you use a cloud storage link, any changes you save to the original Excel file will be reflected when someone scans the existing QR code, as long as the URL remains the same."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for Google Sheets too?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. You can paste the link to a Google Sheet, and the QR code will take users directly to the online spreadsheet."
                }
            }
        ]
    };

    return (
        <div className="excel-landing-container no-select">
            <Helmet>
                <title>Free Excel QR Code Generator | Link Spreadsheets | TheQrify</title>
                <meta name="description" content="Generate 100% free QR codes for your Excel spreadsheets and Google Sheets. Share data, price lists, and inventory sheets instantly with TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Excel to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your spreadsheets, price lists, and data reports effortlessly.
                        Create a professional QR code that links directly to your hosted Excel or Google Sheets file.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaFileExcel className="me-2" />
                                <span>Spreadsheet Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">File Name (Required)</label>
                                    <input
                                        id="fileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. Inventory Report Q1"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="excelUrlInput">Excel / Spreadsheet URL (Required)</label>
                                    <input
                                        id="excelUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://docs.google.com/spreadsheets/..."
                                        value={excelUrl}
                                        onChange={(e) => setExcelUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Host your file on Google Drive, OneDrive, or Dropbox and paste the sharing link here.
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
                                        id="excel-qr-code"
                                        value={isAllFieldsFilled ? excelUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Excel QR
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
                    <h2>Modern Data Sharing</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaTable /></div>
                                <h3>Organized Access</h3>
                                <p>Provide a direct path to complex data sets without requiring users to search through folders or emails.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Dynamic Updates</h3>
                                <p>Update your spreadsheet data in the cloud, and the QR code will always point to the latest version.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Mobile Ready</h3>
                                <p>Optimized for mobile viewing, allowing team members or clients to check spreadsheets on the go.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="excel-guide-box">
                                <h3>Common Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Inventory Management:</strong> Link warehouse shelves directly to stock spreadsheets.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Event Registration:</strong> Share attendee lists or schedules with organizers.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Price Lists:</strong> Provide real-time pricing updates to sales teams or customers.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Project Tracking:</strong> Give stakeholders instant access to project timelines and status sheets.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to Host Your Excel File?</h3>
                            <p className="text-muted mb-4">
                                To use this generator, your Excel file needs to be hosted online. Here are the best ways to do it:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Google Sheets:</strong> Click Share → Set to 'Anyone with the link' → Copy Link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>OneDrive:</strong> Right-click file → Share → 'Allow editing' (optional) → Copy link.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Dropbox:</strong> Share → Create a link → Copy link.
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
                                    q: "Can I password protect the Excel file?",
                                    a: "Yes. You can set password protection on your hosting provider (like OneDrive or Google Drive). When someone scans the QR code, they will be prompted for the password before they can view the file."
                                },
                                {
                                    q: "Does it work with legacy .xls files?",
                                    a: "Yes, it works with .xls, .xlsx, .csv, and any other file format that can be hosted and linked via a URL."
                                },
                                {
                                    q: "Can I track scans on my Excel QR code?",
                                    a: "By using tracking URLs (like Bitly or UTM parameters) in the link you provide, you can monitor scan statistics through your chosen tracking service."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-excel-file' />
        </div>
    );
};

export default ExcelQRCodeLandingPage;
