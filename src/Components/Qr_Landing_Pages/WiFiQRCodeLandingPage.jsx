import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Collapse, Button } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { FaWifi, FaLock, FaGlobe, FaShieldAlt, FaPrint, FaArrowRight, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import '../../css/WiFiQRCodeLandingPage.scss';
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

const WiFiQRCodeLandingPage = () => {
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [encryption, setEncryption] = useState('WPA');
    const [hidden, setHidden] = useState(false);

    const isAllFieldsFilled = ssid.trim() !== '' && password.trim() !== '';

    // Generate WiFi string for QR: WIFI:S:SSID;T:WPA;P:PASSWORD;H:false;;
    const enc = encryption === 'nopass' ? 'nopass' : encryption;
    const wifiString = `WIFI:S:${ssid};T:${enc};P:${password};H:${hidden ? 'true' : 'false'};;`;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I scan a WiFi QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply open your smartphone camera or a QR scanner app and point it at the code. A notification will appear asking if you want to join the network."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to share my WiFi via QR code?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. It is more secure than writing your password on paper. The QR code encrypts the credentials securely."
                }
            },
            {
                "@type": "Question",
                "name": "What encryption type should I choose?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WPA/WPA2 is the most common and secure for modern routers. Choose WEP only if you have a very old router, or None if your network has no password."
                }
            }
        ]
    };

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('wifi-qr-svg');
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
            downloadLink.download = `${ssid || 'wifi'}-qr-code.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="wifi-landing-container">
            <Helmet>
                <title>Free WiFi QR Code Generator | Scannable WiFi QR - TheQrify</title>
                <meta name="description" content="Generate a custom QR Code for WiFi instantly. Let guests connect to your network by scanning a QR code flawlessly. Free, secure generator by TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>WiFi QR Code Generator</h1>
                    <p className="hero-subtitle">
                        Generate a scannable QR code for your WiFi network instantly. No typing passwords, just scan and connect.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Tool Section */}
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="generator-card">
                            <Row className="g-4">
                                <Col md={7}>
                                    <h2 className="form-title">Network Configuration</h2>
                                    <Form>
                                        <div className="custom-form-group">
                                            <label htmlFor="wifiSsidInput">Network Name (SSID) (Required)</label>
                                            <input
                                                id="wifiSsidInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="e.g. MyHomeNetwork"
                                                value={ssid}
                                                onChange={(e) => setSsid(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="custom-form-group">
                                            <label htmlFor="wifiPasswordInput">Password (Required)</label>
                                            <input
                                                id="wifiPasswordInput"
                                                type="text"
                                                className="custom-input"
                                                placeholder="WiFi Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <Row className="g-3">
                                            <Col sm={6}>
                                                <div className="custom-form-group">
                                                    <label htmlFor="wifiEncryptionSelect">Encryption</label>
                                                    <select
                                                        id="wifiEncryptionSelect"
                                                        className="custom-input"
                                                        value={encryption}
                                                        onChange={(e) => setEncryption(e.target.value)}
                                                    >
                                                        <option value="WPA">WPA/WPA2</option>
                                                        <option value="WEP">WEP</option>
                                                        <option value="nopass">None</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col sm={6} className="d-flex align-items-end">
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id="hidden-wifi"
                                                        label="Hidden Network"
                                                        checked={hidden}
                                                        onChange={(e) => setHidden(e.target.checked)}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        {!isAllFieldsFilled && (
                                            <div className="alert alert-info py-2" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                                                Please fill in all fields to generate the QR code.
                                            </div>
                                        )}
                                    </Form>
                                </Col>
                                <Col md={5}>
                                    <div className="qr-preview-container">
                                        <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                            <QRCodeSVG
                                                id="wifi-qr-svg"
                                                value={isAllFieldsFilled ? wifiString : 'https://theqrify.com'}
                                                size={160}
                                                level="M"
                                                includeMargin={true}
                                            />
                                        </div>
                                        <Button 
                                            className="btn-download" 
                                            onClick={downloadQRCode}
                                            disabled={!isAllFieldsFilled}
                                        >
                                            <HiOutlineDownload className="me-2" /> Download Image
                                        </Button>
                                        <p className="text-muted small mt-3 mb-0 text-center">
                                            {isAllFieldsFilled ? 'Scan to connect instantly' : 'Fill all fields to preview'}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                {/* Features & Info Section */}
                <section className="info-section">
                    <h2>Benefits of WiFi QR Codes</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCheckCircle /></div>
                                <h3>Convenient</h3>
                                <p>No more manual typing of long passwords. One scan connects you instantly.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaShieldAlt /></div>
                                <h3>Secure</h3>
                                <p>Share access without dictating your password out loud in public spaces.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaPrint /></div>
                                <h3>Printable</h3>
                                <p>Generate once, print it, and place it where your guests can easily see it.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        <Col md={6}>
                            <h2>How it works</h2>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>Enter your network name (SSID) and security details.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>The tool encodes these credentials into a standard QR format.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-start">
                                    <FaArrowRight className="mt-1 me-2 text-primary" />
                                    <span>Scan the code with your phone camera to connect immediately.</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="use-case-box">
                                <h3>Common Uses</h3>
                                <ul className="list-unstyled mb-0">
                                    <li>🏡 Guest access for your home WiFi.</li>
                                    <li>☕ Easy customer connection for cafes.</li>
                                    <li>💼 Office meeting room connectivity.</li>
                                    <li>🏨 Hotel room information kits.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <div className="faq-title">
                        <h1>FAQ – Don’t Leave With Doubts</h1>
                        <p>Everything you need to know about creating WiFi QR codes with TheQrify.</p>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Is it compatible with iPhone and Android?",
                                    a: "Yes, all modern smartphones support native WiFi QR scanning via their default camera apps. Simply point your camera and tap the join notification."
                                },
                                {
                                    q: "Is my WiFi data stored on your servers?",
                                    a: "No. The generation happens entirely within your browser using local JavaScript. Your network details and passwords are never sent to our servers or stored anywhere."
                                },
                                {
                                    q: "What is an SSID and where do I find it?",
                                    a: "SSID is simply the name of your WiFi network as it appears when you scan for available connections. You can find it in your router settings or device's WiFi menu."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            {/* Footer */}
        
            <LandingPageFooter currentPath='/wifi-qr-code' />
        </div>
    );
};

export default WiFiQRCodeLandingPage;


