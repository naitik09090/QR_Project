import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { landingPages } from '../data/landingPagesData';
import logo1 from "../assets/logo.webp";

const LandingPageFooter = ({ currentPath }) => {
    // Custom linking mapping: shows 3 random tools from the core 19 list
    const getRelatedLinks = () => {
        const coreToolPaths = [
            '/qr-code-for-app-store', '/wifi-qr-code', '/google-review-qr-code', '/business-card-qr-code',
            '/whatsapp-qr-code', '/qr-code-for-email-signature', '/qr-code-for-real-estate',
            '/qr-code-for-business-website', '/qr-code-for-small-business',
            '/youtube-qr-code', '/location-qr-code', '/qr-code-for-flyers', '/qr-code-for-marketing-campaign',
            '/qr-code-for-lead-generation', '/qr-code-for-product-packaging', '/qr-code-for-brochures', '/pdf-qr-code',
            '/qr-code-for-digital-menu', '/restaurant-menu-qr-code', '/qr-code-for-cafe-menu', '/qr-code-for-restaurant-ordering',
            '/qr-code-for-contactless-ordering', '/qr-code-for-table-menu', '/qr-code-for-bar-menu', '/qr-code-for-hotel-services',
            '/qr-code-for-room-service', '/qr-code-for-food-delivery-menu', '/qr-code-for-takeaway-menu', '/qr-code-for-tiktok',
            '/qr-code-for-twitter', '/qr-code-for-pinterest', '/qr-code-for-snapchat', '/qr-code-for-linktree',
            '/qr-code-for-social-media-profile', '/qr-code-for-social-media-links', '/qr-code-for-youtube-channel', '/qr-code-for-instagram-profile',
            '/qr-code-for-facebook-page', '/qr-code-for-paypal-payment', '/qr-code-for-stripe-payment', '/qr-code-for-google-pay',
            '/qr-code-for-apple-pay', '/qr-code-for-online-payments', '/qr-code-for-donations', '/qr-code-for-tips',
            '/qr-code-for-freelancers', '/qr-code-for-invoices', '/qr-code-for-subscriptions', '/qr-code-for-excel-file',
            '/qr-code-for-word-document', '/qr-code-for-powerpoint', '/qr-code-for-zip-file', '/qr-code-for-audio-file',
            '/qr-code-for-video-file', '/qr-code-for-google-docs', '/qr-code-for-google-sheets', '/qr-code-for-dropbox-link', '/qr-code-for-cloud-files'
        ];

        // Filter valid tools from the data we have, excluding current
        const availableTools = landingPages.filter(p =>
            coreToolPaths.includes(p.path) && p.path !== currentPath
        );

        // Shuffle and take 3
        return availableTools.sort(() => 0.5 - Math.random()).slice(0, 3);
    };

    const relatedLinks = getRelatedLinks();

    return (
        <>
            <footer className="landing-premium-footer">
                <div className="footer-overlay"></div>
                <Container className="position-relative">
                    <Row className="justify-content-center text-center">
                        <Col lg={10}>
                            <div className="related-section">
                                <h3 className="section-title">Elevate Your QR Strategy</h3>
                                <p className="section-subtitle">Suggestions for your next project.</p>

                                <div className="links-grid mt-5">
                                    {relatedLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.path}
                                            className="premium-tool-card"
                                            style={{ '--accent-color': link.themeColor || '#007bff' }}
                                        >
                                            <div className="card-glass"></div>
                                            <div className="card-content">
                                                <span className="tool-category">
                                                    {link.type === 'pro' ? 'Pro Tool' : 'Core Tool'}
                                                </span>
                                                <span className="tool-name">{link.title}</span>
                                                <div className="arrow-icon">→</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>


                    {/* <div className="footer-bottom mt-5 pt-5 pb-4 border-top border-white border-opacity-10 text-center">
                    <div className="brand-logo mb-3">
                        <span className="qr-text">THE</span><span className="q-text">QRIFY</span>
                    </div>
                    <p className="copyright-text">
                        © {new Date().getFullYear()} TheQrify. Premium QR Engineering for Modern Brands.
                    </p>
                    <div className="social-minimal mt-3">
                        <span className="dot-separator">•</span>
                        <span>Built for Performance</span>
                        <span className="dot-separator">•</span>
                        <span>Secured by Advanced Encryption</span>
                    </div>
                </div> */}
                </Container>

                <style jsx="true">{`
                .landing-premium-footer {
                    background: linear-gradient(180deg, #EBF7FF 0%, #EBF7FF 100%);
                    position: relative;
                    padding: 80px 0;
                    overflow: hidden;
                    color: #000;
                    font-family: 'Inter', sans-serif;
                }

                .footer-overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 80%;
                    height: 100%;
                    background: radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.02em;
                }

                .section-subtitle {
                    font-size: 1.15rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .links-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    width: 100%;
                }

                .premium-tool-card {
                    position: relative;
                    padding: 32px;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid #015f9e;
                    text-decoration: none !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: block;
                    text-align: left;
                    backdrop-filter: blur(12px);
                }

                .premium-tool-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255, 255, 255, 0.06);
                    border-color: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .tool-category {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 800;
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .tool-category::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    background: #3b82f6;
                    border-radius: 50%;
                    display: inline-block;
                }

                .tool-name {
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 24px;
                    line-height: 1.2;
                }

                .arrow-icon {
                    font-size: 1.5rem;
                    transition: all 0.3s ease;
                    margin-top: auto;
                }

                .premium-tool-card:hover .arrow-icon {
                    transform: translateX(8px);
                }

                @media (max-width: 992px) {
                    .links-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .section-title { font-size: 2rem; }
                    .links-grid { grid-template-columns: 1fr; }
                    .premium-tool-card { padding: 24px; }
                }
            `}</style>
            </footer>
            <div className="container py-5 d-flex flex-column align-items-center">
                <div className="mb-4">
                    <a href="https://theqrify.com/">
                        <img
                            src={logo1}
                            alt="TheQRIFY Logo"
                            loading="lazy"
                            width={120}
                            height={55}
                            sizes="120px"
                            srcSet={`${logo1} 120w`}
                            style={{ objectFit: "contain" }}
                        />
                    </a>
                </div>

                <p className="text-center text-sm" style={{ maxWidth: "600px" }}>
                    Empowering creators and businesses with fast, customizable, and high-quality QR codes. Transform how you share information.
                </p>
            </div>
            <div className="border-top" style={{ borderColor: "#3B1A7A" }}>
                <div className="container py-3 text-center text-sm">
                    <a
                        href="https://theqrify.com/"
                        className="text-decoration-underline"
                        style={{ color: "#015f9e" }}
                    >
                        TheQRIFY
                    </a>
                    ©2026. All rights reserved.
                </div>
            </div>
        </>
    );
};

export default LandingPageFooter;
