import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaMapMarkedAlt, FaDownload, FaMapPin, FaDirections,
    FaStore, FaAddressCard, FaCheckCircle, FaStar, FaGlobeAmericas
} from 'react-icons/fa';
import '../../css/LocationQRCodeLandingPage.scss';
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

const LocationQRCodeLandingPage = () => {
    const [locationType, setLocationType] = useState('url'); // 'url' or 'coords'
    const [mapUrl, setMapUrl] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [businessName, setBusinessName] = useState('');

    const isAllFieldsFilled = businessName.trim() !== '' && (
        locationType === 'url' ? mapUrl.trim() !== '' : (latitude.trim() !== '' && longitude.trim() !== '')
    );

    const downloadQRCode = () => {
        const svg = document.getElementById('location-qr-code');
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
            downloadLink.download = `${businessName || 'location'}-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    const qrValue = locationType === 'url'
        ? (mapUrl || 'https://maps.google.com')
        : `geo:${latitude},${longitude}`;

    return (
        <div className="location-landing-container no-select">
            <Helmet>
                <title>Free Location QR Code Generator | Google Maps QR | TheQrify</title>
                <meta name="description" content="Create a free QR code for your business location or Google Maps link. Help customers find your shop, office, or event easily. Fast, free, and accurate location QR codes." />
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Find Your Way with <span>Location QR Codes</span></h1>
                    <p className="hero-subtitle">
                        Help your customers find your exact location instantly. Generate a QR code for
                        your store, office, or event venue that works with Google Maps and Apple Maps.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaMapMarkedAlt className="me-2" />
                                <span>Location Details</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label>Business or Venue Name (Required)</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. My Coffee Shop"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="fw-bold mb-2">Input Method:</label>
                                    <div className="d-flex gap-3">
                                        <Form.Check
                                            type="radio"
                                            label="Google Maps URL"
                                            name="locationType"
                                            checked={locationType === 'url'}
                                            onChange={() => setLocationType('url')}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Latitude & Longitude"
                                            name="locationType"
                                            checked={locationType === 'coords'}
                                            onChange={() => setLocationType('coords')}
                                        />
                                    </div>
                                </div>

                                {locationType === 'url' ? (
                                    <div className="custom-form-group">
                                        <label>Google Maps Link (Required)</label>
                                        <input
                                            type="url"
                                            className="custom-input"
                                            placeholder="https://maps.app.goo.gl/..."
                                            value={mapUrl}
                                            onChange={(e) => setMapUrl(e.target.value)}
                                            required
                                        />
                                        <small className="text-muted mt-2 d-block">
                                            Open Google Maps, find your location, and click "Share" to get the link.
                                        </small>
                                    </div>
                                ) : (
                                    <Row>
                                        <Col md={6}>
                                            <div className="custom-form-group">
                                                <label>Latitude (Required)</label>
                                                <input
                                                    type="text"
                                                    className="custom-input"
                                                    placeholder="E.g. 40.7128"
                                                    value={latitude}
                                                    onChange={(e) => setLatitude(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="custom-form-group">
                                                <label>Longitude (Required)</label>
                                                <input
                                                    type="text"
                                                    className="custom-input"
                                                    placeholder="E.g. -74.0060"
                                                    value={longitude}
                                                    onChange={(e) => setLongitude(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                )}
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
                                        id="location-qr-code"
                                        value={isAllFieldsFilled ? qrValue : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Location QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Opens in your default maps app' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Make Finding You Easier</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaDirections /></div>
                                <h3>One-Scan Directions</h3>
                                <p>Customers don't need to type addresses. One scan opens their maps app with the route already prepared.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaStore /></div>
                                <h3>Increase Foot Traffic</h3>
                                <p>Perfect for new store openings or events in hard-to-find locations. Guide guests right to your door.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaGlobeAmericas /></div>
                                <h3>Universal Support</h3>
                                <p>Our location QR codes are compatible with Google Maps, Apple Maps, and Waze across all smartphones.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="location-guide-box">
                                <h3>Best Social Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Invitations:</strong> Print on wedding or birthday invites to help guests find the venue.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Business Cards:</strong> Add a mini map QR to the back of your card.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Flyers & Posters:</strong> Put them on local billboards to drive local residents to your shop.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Storefronts:</strong> Help people find your other branches easily.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to get your Latitude/Longitude?</h3>
                            <p className="text-muted mb-4">
                                If you don't have a direct link, you can find your exact coordinates using:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaMapPin className="text-primary me-3" /> <strong>On Google Maps:</strong> Right-click on any spot (or long-press on mobile) to see coordinates.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaMapPin className="text-primary me-3" /> <strong>On iPhone:</strong> Open Apple Maps, drop a pin, and scroll down to see Lat/Long.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" /> Precision matters for large venues or rural areas!
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Location QR FAQs</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Which map app will it open?",
                                    a: "If it's a Google Maps link, it will try to open Google Maps. If it's a coordinate-based QR (geo:), it will ask the user which map app they prefer (Google, Apple, or Waze)."
                                },
                                {
                                    q: "Do QR codes for location expire?",
                                    a: "No. Static location QR codes generated on TheQrify are permanent and will work as long as the location exists."
                                },
                                {
                                    q: "Can I use this for my mobile business?",
                                    a: "Yes, but since these are static codes, the location is fixed. For a mobile business (like a food truck), you would need to generate a new code for each new location or use a dynamic QR code."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>


            <LandingPageFooter currentPath='/location-qr-code' />
        </div>
    );
};

export default LocationQRCodeLandingPage;


