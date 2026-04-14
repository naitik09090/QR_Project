import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaUser, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, 
    FaDownload, FaAddressCard, FaShareAlt, FaCheck, FaBuilding, FaBriefcase
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

const BusinessCardQRCodeLandingPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        website: '',
        company: '',
        jobTitle: '',
        address: ''
    });

    const [vCard, setVCard] = useState('');

    const isAllFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

    useEffect(() => {
        const { firstName, lastName, phone, email, website, company, jobTitle, address } = formData;
        if (!firstName && !lastName) {
            setVCard('https://theqrify.com');
            return;
        }

        const vCardString = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${company}
TITLE:${jobTitle}
TEL;TYPE=CELL:${phone}
EMAIL;TYPE=INTERNET:${email}
URL:${website}
ADR;TYPE=WORK:;;${address};;;;
END:VCARD`;
        setVCard(vCardString);
    }, [formData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const downloadQRCode = () => {
        if (!isAllFieldsFilled) return;
        const svg = document.getElementById('vcard-qr-code');
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
            downloadLink.download = `${formData.firstName || 'business'}-card-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="vcard-landing-container no-select">
            <Helmet>
                <title>Free Business Card QR Code Generator | vCard QR Code | TheQrify</title>
                <meta name="description" content="Generate a professional vCard QR code for your business card. Allow people to save your contact details instantly. Free, fast, and eco-friendly with TheQrify." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Your Digital <span>Business Card</span></h1>
                    <p className="hero-subtitle">
                        Create a professional vCard QR code that lets anyone save your contact details 
                        instantly to their phone. Perfect for networking and modern business cards.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row>
                        <Col lg={8}>
                            <div className="form-title">Contact Information</div>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaUser className="me-2" /> First Name (Required)</label>
                                            <input name="firstName" type="text" className="custom-input" placeholder="John" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label>Last Name (Required)</label>
                                            <input name="lastName" type="text" className="custom-input" placeholder="Doe" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaBuilding className="me-2" /> Company (Required)</label>
                                            <input name="company" type="text" className="custom-input" placeholder="Acme Inc." onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaBriefcase className="me-2" /> Job Title (Required)</label>
                                            <input name="jobTitle" type="text" className="custom-input" placeholder="Manager" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaPhone className="me-2" /> Phone Number (Required)</label>
                                            <input name="phone" type="text" className="custom-input" placeholder="+1 234 567 890" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaEnvelope className="me-2" /> Email Address (Required)</label>
                                            <input name="email" type="email" className="custom-input" placeholder="john@example.com" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaGlobe className="me-2" /> Website (Required)</label>
                                            <input name="website" type="url" className="custom-input" placeholder="https://www.example.com" onChange={handleInputChange} required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="custom-form-group">
                                            <label><FaMapMarkerAlt className="me-2" /> Address (Required)</label>
                                            <input name="address" type="text" className="custom-input" placeholder="City, Country" onChange={handleInputChange} required />
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
                        <Col lg={4} className="mt-4 mt-lg-0">
                            <div className="qr-preview-container">
                                <div className={`qr-wrapper ${!isAllFieldsFilled ? 'empty' : ''}`}>
                                    <QRCodeSVG 
                                        id="vcard-qr-code"
                                        value={isAllFieldsFilled ? vCard : 'https://theqrify.com'}
                                        size={200}
                                        includeMargin={true}
                                        level="M"
                                    />
                                </div>
                                <Button className="btn-download" onClick={downloadQRCode} disabled={!isAllFieldsFilled}>
                                    <FaDownload className="me-2" /> Download Business QR
                                </Button>
                                <p className="text-muted small mt-3 text-center">
                                    {isAllFieldsFilled ? 'Scan to test contact saving' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Modern Networking</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaAddressCard /></div>
                                <h3>Instant Save</h3>
                                <p>Allow people to save your contact information directly to their phone's address book with one scan.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper">< FaShareAlt /></div>
                                <h3>Eco-Friendly</h3>
                                <p>Reduce paper waste by sharing your digital business card instead of traditional paper ones.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaCheck /></div>
                                <h3>Zero Errors</h3>
                                <p>Eliminate manual entry mistakes. Your details are captured exactly as you entered them.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Use Cases */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="use-case-box">
                                <h3>Professional Uses</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheck /> Networking Events & Conferences</li>
                                    <li className="mb-3"><FaCheck /> On the back of your physical card</li>
                                    <li className="mb-3"><FaCheck /> Email Signatures</li>
                                    <li className="mb-3"><FaCheck /> LinkedIn Profile or Portfolios</li>
                                    <li className="mb-3"><FaCheck /> Storefronts or Reception Desks</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="p-4">
                                <h3>Why vCard?</h3>
                                <p className="text-muted">
                                    A vCard (Virtual Contact File) is a standard format for electronic business cards. 
                                    By embedding this data into a QR code, you bridge the gap between physical 
                                    networking and digital convenience. Most smartphones recognize this format 
                                    natively, suggesting an "Add to Contacts" action immediately upon scanning.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Common Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does it work with any smartphone?",
                                    a: "Yes! iPhones and almost all Android phones built in the last 5 years have native QR and vCard support in their standard camera apps."
                                },
                                {
                                    q: "Is my contact info private?",
                                    a: "The data is encoded directly into the image. We don't store your personal information on our database for static vCards generated here."
                                },
                                {
                                    q: "What information can I include?",
                                    a: "You can include your Name, Phone, Email, Company, Job Title, Website, and Address. Keep it concise for a clean, easy-to-scan QR code."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/business-card-qr-code' />
        </div>
    );
};

export default BusinessCardQRCodeLandingPage;


