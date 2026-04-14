import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaShippingFast, FaDownload, FaMobileAlt,
    FaSyncAlt, FaChartBar, FaCheckCircle, FaUtensils, FaMotorcycle
} from 'react-icons/fa';
import '../../css/FoodDeliveryMenuQRCodeLandingPage.scss';
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

const FoodDeliveryMenuQRCodeLandingPage = () => {
    const [deliveryUrl, setDeliveryUrl] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [branchName, setBranchName] = useState('');

    const isAllFieldsFilled = deliveryUrl.trim() !== '' && restaurantName.trim() !== '' && branchName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('food-delivery-qr-code');
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
            downloadLink.download = `${restaurantName || 'food-delivery'}-qr.png`;
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
                "name": "How do I use a QR code for food delivery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Place the QR code on your takeout packaging, brochures, or social media. When customers scan it, they are instantly taken to your online ordering portal or delivery app page."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to third-party apps like UberEats or DoorDash?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can link your QR code to any destination URL, including your direct restaurant website, or your store page on any major food delivery platform."
                }
            },
            {
                "@type": "Question",
                "name": "Why put a QR code on food packaging?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It’s the best way to encourage repeat business. Customers who enjoyed their meal can simply scan the package to re-order in the future without searching for your name again."
                }
            }
        ]
    };

    return (
        <div className="food-delivery-landing-container no-select">
            <Helmet>
                <title>Free Food Delivery QR Code Generator | Takeaway Menus - TheQrify</title>
                <meta name="description" content="Generate a free QR code for your food delivery menu. Increase repeat orders by placing scannable QR codes on packaging and marketing materials. Easy and free tool." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Faster <span>Food Delivery QR</span></h1>
                    <p className="hero-subtitle">
                        Turn every delivery into a repeat order. 
                        Enable instant scannable access to your delivery menu from packaging, flyers, or social media.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaShippingFast />
                                <span>Delivery Configuration</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="restaurantNameInput">Restaurant Name (Required)</label>
                                    <input
                                        id="restaurantNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="Enter restaurant name"
                                        value={restaurantName}
                                        onChange={(e) => setRestaurantName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="branchNameInput">Branch / Outlet Name (Required)</label>
                                    <input
                                        id="branchNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g., Downtown or Westside"
                                        value={branchName}
                                        onChange={(e) => setBranchName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="deliveryUrlInput">Online Ordering Link (URL) (Required)</label>
                                    <input
                                        id="deliveryUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://yourdeliverylink.com"
                                        value={deliveryUrl}
                                        onChange={(e) => setDeliveryUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Scan this code to launch your delivery menu.
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
                                        id="food-delivery-qr-code"
                                        value={isAllFieldsFilled ? `${deliveryUrl}?restaurant=${encodeURIComponent(restaurantName)}&branch=${encodeURIComponent(branchName)}` : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Delivery QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'High durability for packaging prints' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Boost Your Takeout Revenue</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMotorcycle /></div>
                                <h3>Higher Retention</h3>
                                <p>Make it effortless for customers to order again by placing a QR code right on their food container.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaSyncAlt /></div>
                                <h3>Always Up-to-Date</h3>
                                <p>Unlike paper flyers, your QR code always points to your current menu and prices.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaChartBar /></div>
                                <h3>Direct Sales</h3>
                                <p>Encourage guests to order from your own website instead of high-commission third-party apps.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* How it Works */}
                <section className="info-section">
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="how-it-works-box">
                                <h3>Implement in 3 Simple Steps</h3>
                                <div className="step-item mt-4">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h4>Grab Your Link</h4>
                                        <p>Use your direct ordering website URL or your preferred delivery app link.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h4>Generate for Free</h4>
                                        <p>Paste the link above and download the QR code in high resolution.</p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h4>Stick on Packages</h4>
                                        <p>Print the QR on bags, boxes, or napkins to drive future orders.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="menu-use-case">
                                <h3>Ideal Placement</h3>
                                <ul className="mt-4">
                                    <li className="mb-3"><FaCheckCircle /> Pizza & Sushi Boxes</li>
                                    <li className="mb-3"><FaCheckCircle /> Take-out Carrier Bags</li>
                                    <li className="mb-3"><FaCheckCircle /> Delivery Flyers & Postcards</li>
                                    <li className="mb-3"><FaCheckCircle /> Social Media Profiles</li>
                                    <li className="mb-3"><FaCheckCircle /> Business Cards & Magnets</li>
                                    <li className="mb-3"><FaCheckCircle /> Restaurant Windows</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="info-section faq-section">
                    <h2>Food Delivery FAQ</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for multiple restaurant locations?",
                                    a: "Yes. You can generate a unique QR code for each store's specific delivery link."
                                },
                                {
                                    q: "What if I change my delivery provider?",
                                    a: "With static QR codes, the link is permanent. If you shift providers, you'd need to generate a new code. (Dynamic codes with edible links coming soon!)"
                                },
                                {
                                    q: "Are the QR codes high enough quality for printing?",
                                    a: "Yes, our tool provides high-resolution QR codes that are sharp and clear for everything from stickers to large posters."
                                },
                                {
                                    q: "Do I have to pay to keep the code active?",
                                    a: "No. The QR codes you create here are free forever and have no scan limits."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

        
            <LandingPageFooter currentPath='/qr-code-for-food-delivery-menu' />
        </div>
    );
};

export default FoodDeliveryMenuQRCodeLandingPage;


