import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaBed, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils
} from 'react-icons/fa';
import '../../css/RoomServiceQRCodeLandingPage.scss';
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

const RoomServiceQRCodeLandingPage = () => {
    const [serviceUrl, setServiceUrl] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const isAllFieldsFilled = serviceUrl.trim() !== '' && hotelName.trim() !== '' && branchName.trim() !== '' && roomNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('room-service-qr-code');
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
            downloadLink.download = `${hotelName || 'room-service'}-qr.png`;
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
                "name": "How does room service via QR code work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Guests scan a QR code placed in their room, which instantly opens the hotel's room service menu on their smartphone. They can browse, customize, and place orders without picking up the phone."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use unique QR codes for each room?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is highly recommended. Many ordering platforms allow you to generate room-specific links so the kitchen knows exactly where to deliver the order automatically."
                }
            },
            {
                "@type": "Question",
                "name": "Is it more efficient than traditional phone ordering?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. It reduces order errors, frees up staff from answering phones, and often leads to higher average order values due to visual menu presentation and easy upselling."
                }
            }
        ]
    };

    return (
        <div className="room-service-landing-container no-select">
            <Helmet>
                <title>Free Room Service QR Code Generator | Hotel Dining - TheQrify</title>
                <meta name="description" content="Generate a free QR code for your hotel's room service menu. Modernize guest dining with contactless ordering. Easy, fast, and guest-friendly room service solution." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Modern <span>Room Service QR</span></h1>
                    <p className="hero-subtitle">
                        Streamline your in-room dining experience. 
                        Give your guests the convenience of ordering room service directly from their own devices.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaBed />
                                <span>Room Service Setup</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="hotelNameInput">Hotel Name (Required)</label>
                                    <input
                                        id="hotelNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter hotel name"
                                        value={hotelName}
                                        onChange={(e) => setHotelName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="branchNameInput">Branch / Resort Wing (Required)</label>
                                    <input
                                        id="branchNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Beach Wing or Main Tower"
                                        value={branchName}
                                        onChange={(e) => setBranchName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="roomNumberInput">Room Number / Location (Required)</label>
                                    <input
                                        id="roomNumberInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Room 402 or Pool Area"
                                        value={roomNumber}
                                        onChange={(e) => setRoomNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="menuUrlInput">Digital Menu Link (URL or PDF) (Required)</label>
                                    <input
                                        id="menuUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourhotel.com/room-service"
                                        value={serviceUrl}
                                        onChange={(e) => setServiceUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your digital room service menu.
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
                                        id="room-service-qr-code"
                                        value={isAllFieldsFilled ? `${serviceUrl}?hotel=${encodeURIComponent(hotelName)}&branch=${encodeURIComponent(branchName)}&room=${encodeURIComponent(roomNumber)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Room Service QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Professional scan quality for hotel prints' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Enhance Guest Satisfaction</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaUtensils /></div>
                                <h3>Visual Temptation</h3>
                                <p>Guests are more likely to order when they can see high-quality photos of your room service specialties.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Real-time Control</h3>
                                <p>Instantly update menu availability or current delivery times to manage guest expectations perfectly.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Revenue Growth</h3>
                                <p>Hotels using QR room service often see a 15-25% increase in F&B revenue through automated upselling.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>3 Steps to Better Dining</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Upload Your Menu</h4>
                                        <p>Link to your hotel’s digital order portal or a hosted PDF menu.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate the QR</h4>
                                        <p>Enter the link above and download your permanent, high-resolution QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Place in Guest Rooms</h4>
                                        <p>Print the code on bedside menu cards, TV welcome screens, or door hangers.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Perfect For</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Luxury Hotels & Resorts</li>
                                    <li className="mb-3"><FaCheckCircle /> Boutique Bed & Breakfasts</li>
                                    <li className="mb-3"><FaCheckCircle /> Serviced Apartments</li>
                                    <li className="mb-3"><FaCheckCircle /> Airport Hotels</li>
                                    <li className="mb-3"><FaCheckCircle /> Business Travel Hotels</li>
                                    <li className="mb-3"><FaCheckCircle /> Glamping & Alternative Lodging</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Room Service QR FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Does this replace the house phone?",
                                    a: "Not necessarily, but it significantly reduces phone volume, allowing your staff to focus on order preparation and high-touch guest interactions."
                                },
                                {
                                    q: "What format should the menu be in?",
                                    a: "A mobile-responsive web link is best, but a PDF hosted on your website or cloud storage works perfectly as a starting point."
                                },
                                {
                                    q: "Can I use one general code for the whole hotel?",
                                    a: "Yes, you can. Guests will just need to enter their room number manually when placing their order through the link."
                                },
                                {
                                    q: "Are there any scan limits?",
                                    a: "Never. The static QR codes from TheQrify offer unlimited scans and will never expire."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-room-service' />
        </div>
    );
};

export default RoomServiceQRCodeLandingPage;


