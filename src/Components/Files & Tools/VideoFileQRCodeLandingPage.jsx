import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import {
    FaVideo, FaDownload, FaCloudUploadAlt, FaEdit,
    FaMobileAlt, FaLink, FaPlayCircle, FaFilm, FaYoutube
} from 'react-icons/fa';
import '../../css/VideoFileQRCodeLandingPage.scss';
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

const VideoFileQRCodeLandingPage = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [fileName, setFileName] = useState('');

    const isAllFieldsFilled = videoUrl.trim() !== '' && fileName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('video-qr-code');
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
            downloadLink.download = `${fileName || 'video'}-qr.png`;
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
                "name": "How do I create a QR code for a video file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your video to a hosting platform like YouTube, Vimeo, Google Drive, or your own server. Copy the shareable video link and paste it into our generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Can I link to a private video?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The QR code will lead to the URL you provide. If the video is private, users will need to log in or have permission to view it. For public sharing, ensure your video's privacy settings are set to 'Public' or 'Anyone with the link'."
                }
            },
            {
                "@type": "Question",
                "name": "What video formats are supported?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our QR codes link to any video URL. Whether it's an MP4 file, a YouTube link, or a Vimeo stream, it will work seamlessly as long as the link is accessible."
                }
            }
        ]
    };

    return (
        <div className="video-landing-container no-select">
            <Helmet>
                <title>Free Video QR Code Generator | Link MP4, YouTube & Vimeo | TheQrify</title>
                <meta name="description" content="Generate high-quality QR codes for your videos. Link to YouTube, Vimeo, or hosted MP4 files for free. Instant scanning and seamless playback with TheQrify." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Video to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your trailers, tutorials, and brand stories instantly.
                        Create a professional QR code that links directly to your hosted video file or social media clip.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaPlayCircle className="me-2" />
                                <span>Video Content Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">Video Title (Required)</label>
                                    <input
                                        id="fileNameInput"
                                        type="text"
                                        className="custom-input"
                                        placeholder="E.g. Product Demo 2026"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="videoUrlInput">Video URL (Required)</label>
                                    <input
                                        id="videoUrlInput"
                                        type="url"
                                        className="custom-input"
                                        placeholder="https://www.youtube.com/watch?v=..."
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Tip: Link to a YouTube video, a TikTok clip, or an MP4 file from your cloud storage.
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
                                        id="video-qr-code"
                                        value={isAllFieldsFilled ? videoUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Video QR
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
                    <h2>The Power of Video QR</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaFilm /></div>
                                <h3>Visual Storytelling</h3>
                                <p>Enhance your brochures and business cards with scannable links to immersive video content.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Dynamic Linking</h3>
                                <p>Change your video source URL anytime. Keep your printed QR codes relevant with fresh video content.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMobileAlt /></div>
                                <h3>Mobile Optimized</h3>
                                <p>Provide a seamless transition from print to mobile video playback, optimized for every smartphone browser.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="video-guide-box">
                                <h3>Smart Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Real Estate:</strong> Add QR codes to 'For Sale' signs to give potential buyers a virtual video tour.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Product Packaging:</strong> Link to 'How-to' tutorials and unboxing videos right on the box.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Event Promotion:</strong> Place QR codes on flyers to showcase event highlights and trailers.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Educational Materials:</strong> Link printed textbooks to supplementary video lessons and experiments.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>How to host your video?</h3>
                            <p className="text-muted mb-4">
                                Any platform that provides a shareable URL will work. Here are the best options:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Video Platforms:</strong> YouTube, Vimeo, Wistia, Dailymotion.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Cloud Storage:</strong> Direct public links from Google Drive, Dropbox, or iCloud.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="me-3" /> <strong>Social Media:</strong> Instagram Reels, TikTok videos, or Facebook clips.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                {/* FAQ Section */}
                <section className="info-section faq-section">
                    <h2>Common Questions</h2>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            {[
                                {
                                    q: "Can I use this for offline video files?",
                                    a: "The QR code needs a URL to work. You'll need to upload local video files to a cloud service or video hosting platform first."
                                },
                                {
                                    q: "Is there a limit on video resolution?",
                                    a: "No. The QR code links to the web address where the video lives. Your viewers' experience depends on your hosting provider's streaming quality."
                                },
                                {
                                    q: "Do I need a special app to scan?",
                                    a: "No. Most modern iPhone and Android camera apps can read QR codes natively and open the video link directly."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-video-file' />
        </div>
    );
};

export default VideoFileQRCodeLandingPage;
