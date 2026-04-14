import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaHotel, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaConciergeBell
} from 'react-icons/fa';
import '../../css/HotelServicesQRCodeLandingPage.scss';
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

const HotelServicesQRCodeLandingPage = () => {
    const [serviceUrl, setServiceUrl] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const isAllFieldsFilled = serviceUrl.trim() !== '' && hotelName.trim() !== '' && branchName.trim() !== '' && roomNumber.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('hotel-services-qr-code');
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
            downloadLink.download = `${hotelName || 'hotel-services'}-qr.png`;
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
                "name": "How can hotel guests use QR codes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Guests can scan QR codes in their rooms to access room service menus, book spa appointments, request housekeeping, or view hotel facility hours and local guides."
                }
            },
            {
                "@type": "Question",
                "name": "Can I update the guest services link anytime?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! If you link your QR code to your hotel's guest portal or a hosted PDF guide, you can update the content behind that link without needing to reprint the QR codes in every room."
                }
            },
            {
                "@type": "Question",
                "name": "Are QR codes secure for hotel room service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The QR code simply points to your secure ordering portal. It's a faster and more hygienic alternative to traditional paper binders and phone-in orders."
                }
            }
        ]
    };

    return (
        <div className="hotel-services-landing-container no-select">
            <Helmet>
                <title>Free Hotel Services QR Code Generator | Guest Experience - TheQrify</title>
                <meta name="description" content="Generate a free QR code for hotel guest services. Enable contactless room service, digital guides, and concierge requests with a simple scan." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Premium <span>Hotel Guest Services</span></h1>
                    <p className="hero-subtitle">
                        Elevate your hospitality experience with smart QR solution. 
                        Provide your guests with instant, contactless access to all hotel amenities.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaHotel />
                                <span>Hotel Setup</span>
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
                                    <label htmlFor="serviceUrlInput">Guest Services Link (URL/Portal) (Required)</label>
                                    <input
                                        id="serviceUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourhotel.com/guest-services"
                                        value={serviceUrl}
                                        onChange={(e) => setServiceUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your digital concierge or room service menu.
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
                                        id="hotel-services-qr-code"
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
                                    <FaDownload className="me-2" /> Download Hotel QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High-resolution, ready for in-room printing' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Modern Hospitality Benefits</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaConciergeBell /></div>
                                <h3>Digital Concierge</h3>
                                <p>Reduce front-desk congestion by providing guests with automated info for FAQ and room services.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Instant Updates</h3>
                                <p>Swap out weekly specials or seasonal facility hours in real-time without re-printing binder materials.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Cost Efficient</h3>
                                <p>Eliminate the high cost of maintaining and replacing paper-based room service directories.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Implement in 3 Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Digitalize Your Info</h4>
                                        <p>Link to your hotel portal, digital menu, or guest welcome PDF.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Enter your URL above, label your hotel, and download the QR code.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Place in Guest Rooms</h4>
                                        <p>Print and place QR codes on bedside tables, TVs, or key cards.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Key Use Cases</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Digital Room Service</li>
                                    <li className="mb-3"><FaCheckCircle /> Spa & Amenity Bookings</li>
                                    <li className="mb-3"><FaCheckCircle /> Wi-Fi Access Guides</li>
                                    <li className="mb-3"><FaCheckCircle /> Local City Recommendations</li>
                                    <li className="mb-3"><FaCheckCircle /> Housekeeping Requests</li>
                                    <li className="mb-3"><FaCheckCircle /> Quick Check-out Portals</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Hotel Services FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use codes for specific rooms?",
                                    a: "Yes. Many hotels create unique codes for each room to ensure that room service orders are automatically tracked to the correct guest room."
                                },
                                {
                                    q: "Does it work with existing hotel management systems?",
                                    a: "Absolutely. As long as your system has a web-based link (URL), you can generate a QR code for it here."
                                },
                                {
                                    q: "Will the codes ever expire?",
                                    a: "No. The static QR codes we generate are permanent and will work as long as your destination link remains active."
                                },
                                {
                                    q: "What's the best way to present these to guests?",
                                    a: "Sophisticated table tents, acrylic blocks, or integrated graphics on the TV's welcome screen are highly effective for guest engagement."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-hotel-services' />
        </div>
    );
};

export default HotelServicesQRCodeLandingPage;


