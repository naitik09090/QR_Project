import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaBoxOpen, FaInfoCircle, FaRecycle, FaHistory, 
    FaDownload, FaShieldAlt, FaShareAlt, FaCheck, FaBarcode, FaLightbulb
} from 'react-icons/fa';
import '../../css/BusinessCardQRCodeLandingPage.scss'; 
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

const ProductPackagingQRCodeLandingPage = () => {
    const [productName, setProductName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [productUrl, setProductUrl] = useState('');

    const isAllFieldsFilled = productName.trim() !== '' && brandName.trim() !== '' && productUrl.trim() !== '';

const downloadQRCode = () => {
        const svg = document.getElementById('product-qr-code');
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
            downloadLink.download = `${productName || 'product'}-packaging-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="vcard-landing-container no-select">
            <Helmet>
                <title>QR Code for Product Packaging | Smart Packaging Solutions</title>
                <meta name="description" content="Enhance your product packaging with custom QR codes. Provide digital manuals, authentication, and sustainability info instantly with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Smart <span>Product Packaging</span></h1>
                    <p className="hero-subtitle">
                        Transform your physical products into digital gateways.
                        Provide instant access to user manuals, warranty registration, and brand stories.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaBoxOpen className="me-2" />
                                <span>Product Information Link</span>
                            </div>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="productNameInput">Product Name (Required)</label>
                                            <input
                                                id="productNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Smart Watch Pro"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label htmlFor="brandNameInput">Brand Name (Required)</label>
                                            <input
                                                id="brandNameInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. Acme Tech"
                                                value={brandName}
                                                onChange={(e) => setBrandName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="custom-form-group">
                                    <label htmlFor="productUrlInput">Product Details / Manual URL (Required)</label>
                                    <input
                                        id="productUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourbrand.com/products/manual"
                                        value={productUrl}
                                        onChange={(e) => setProductUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Link to your assembly guides, ingredient lists, or product authentication pages.
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
                                        id="product-qr-code"
                                        value={isAllFieldsFilled ? productUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Packaging QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Optimized for high-quality packaging print' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Modernize Your Packaging</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaInfoCircle /></div>
                                <h3>Digital Manuals</h3>
                                <p>Save printing costs and reduce paper waste by linking to digital instruction manuals and setup videos.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Authenticity</h3>
                                <p>Protect your brand and build customer trust by linking to product verification and warranty registration pages.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaRecycle /></div>
                                <h3>Sustainability</h3>
                                <p>Provide clear recycling instructions and detailed information about your ethical sourcing and supply chain.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Practical Use Cases */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="p-4 border rounded-4 bg-light">
                                <h3>Common Applications</h3>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 📦 **Cardboard Boxes:** Outer packaging for assembly guides.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🧴 **Cosmetics & Food:** Full ingredient lists and origin info.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 👕 **Clothing Tags:** Care instructions and brand storytelling.
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-success me-3" /> 🍷 **Wine & Spirits:** Tasting notes and pairing suggestions.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h3>Design Considerations</h3>
                            <p className="text-muted">
                                When printing on packaging, ensure the QR code has high contrast (usually black on white). 
                                Maintain a "quiet zone" of empty space around the code and test the scan with 
                                the final material to ensure gloss or texture doesn't interfere with readability.
                            </p>
                            <div className="d-flex align-items-center text-primary fw-bold mt-4">
                                <FaBarcode className="me-2" /> Elevate your brand experience beyond the box.
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Packaging QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "What size should a QR code be on packaging?",
                                    a: "The minimum recommended size is 2x2 cm (0.8x0.8 in) to ensure reliability across all smartphone cameras."
                                },
                                {
                                    q: "Can I use multiple QR codes on one package?",
                                    a: "Yes, but ensure they are spaced clearly apart so the camera doesn't get confused between a manual link and a social link."
                                },
                                {
                                    q: "Will the QR code work on curved surfaces?",
                                    a: "Yes, as long as the curvature is moderate (like a wine bottle). Avoid placing codes on sharp folds or corners."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-product-packaging' />
        </div>
    );
};

export default ProductPackagingQRCodeLandingPage;


