import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { Helmet } from 'react-helmet-async';
import { 
    FaMusic, FaDownload, FaCloudUploadAlt, FaEdit, 
    FaMobileAlt, FaLink, FaVolumeUp, FaHeadphones, FaMicrophone
} from 'react-icons/fa';
import '../../css/AudioFileQRCodeLandingPage.scss';
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

const AudioFileQRCodeLandingPage = () => {
    const [audioUrl, setAudioUrl] = useState('');
    const [fileName, setFileName] = useState('');

    const isAllFieldsFilled = audioUrl.trim() !== '' && fileName.trim() !== '';

    const downloadQRCode = () => {
        const svg = document.getElementById('audio-qr-code');
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
            downloadLink.download = `${fileName || 'audio-track'}-qr.png`;
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
                "name": "How do I create a QR code for an audio file?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your audio file (MP3, WAV, etc.) to a service like SoundCloud, Google Drive, or your website. Paste the direct link into our generator above."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for podcasts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Link directly to an episode on Spotify, Apple Podcasts, or your hosting platform to let listeners scan and play instantly."
                }
            },
            {
                "@type": "Question",
                "name": "What audio formats are supported?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our QR codes link to URLs, so any format playable in a browser or by a mobile app (like MP3, AAC, OGG) will work."
                }
            }
        ]
    };

    return (
        <div className="audio-landing-container no-select">
            <Helmet>
                <title>Free Audio QR Code Generator | Link MP3 & Podcasts | TheQrify</title>
                <meta name="description" content="Convert your audio tracks, podcasts, and recordings to scannable QR codes for free. Let your audience listen instantly with TheQrify's Audio QR generator." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <header className="hero-section">
                <Container>
                    <h1>Convert <span>Audio to QR Code</span></h1>
                    <p className="hero-subtitle">
                        Share your music, podcasts, and voice notes instantly. 
                        Create a professional QR code that links directly to your hosted MP3, Spotify playlist, or SoundCloud track.
                    </p>
                </Container>
            </header>

            <Container>
                {/* Generator Card */}
                <section className="generator-card">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="form-title">
                                <FaVolumeUp className="me-2" />
                                <span>Audio Stream Linking</span>
                            </div>
                            <Form>
                                <div className="custom-form-group">
                                    <label htmlFor="fileNameInput">Track Name (Required)</label>
                                    <input 
                                        id="fileNameInput"
                                        type="text" 
                                        className="custom-input"
                                        placeholder="E.g. Podcast Episode #42"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label htmlFor="audioUrlInput">Audio Track URL (Required)</label>
                                    <input 
                                        id="audioUrlInput"
                                        type="url" 
                                        className="custom-input"
                                        placeholder="https://open.spotify.com/track/..."
                                        value={audioUrl}
                                        onChange={(e) => setAudioUrl(e.target.value)}
                                        required
                                    />
                                    <small className="text-muted mt-2 d-block">
                                        Note: Link directly to a Spotify track, Apple Music link, or an MP3 hosted on a cloud drive.
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
                                        id="audio-qr-code"
                                        value={isAllFieldsFilled ? audioUrl : 'https://theqrify.com'}
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
                                    <FaDownload className="me-2" /> Download Audio QR
                                </Button>
                                <p className="text-muted small mt-3 mb-0 text-center">
                                    {isAllFieldsFilled ? 'Instant listening for your audience' : 'Fill all fields to preview'}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="info-section">
                    <h2>Experience Sound Instantly</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaMusic /></div>
                                <h3>Direct Music Play</h3>
                                <p>Link to your songs on streaming platforms. Perfect for artist posters, album art, and band merch.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaEdit /></div>
                                <h3>Dynamic Playlists</h3>
                                <p>Update your playlist link anytime without changing the QR code. Keep your fans updated with your latest beats.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="icon-wrapper"><FaHeadphones /></div>
                                <h3>Seamless Listening</h3>
                                <p>Optimized for mobile music apps. One scan opens the player and starts the experience immediately.</p>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Guide Section */}
                <section className="info-section">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <div className="audio-guide-box">
                                <h3>Popular Use Cases</h3>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Artist Posters:</strong> Place QR codes on promotional banners to let fans scan and listen to your new single.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Podcast Merch:</strong> Add scannable codes to stickers and t-shirts to drive traffic to your latest episode.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Museum Guides:</strong> Link to audio descriptions or guided tours next to exhibits.</p>
                                </div>
                                <div className="guide-item">
                                    <div className="guide-bullet"></div>
                                    <p><strong>Wedding Invites:</strong> Share your wedding playlist or special voice recording with guests.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>Where to host your audio?</h3>
                            <p className="text-muted mb-4">
                                You can link to any platform where your audio is publicly accessible:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Streaming Services:</strong> Spotify, Apple Music, SoundCloud, Tidal.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Cloud Storage:</strong> Direct public links from Dropbox, OneDrive, or Google Drive.
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <FaLink className="text-primary me-3" /> <strong>Social Media:</strong> YouTube Music or TikTok sound links.
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
                                    q: "Can I use this for voice messages?",
                                    a: "Yes! Record a voice note, upload it to a cloud drive or a voice-sharing tool, and link it here to share it via QR."
                                },
                                {
                                    q: "Is there a limit to track length?",
                                    a: "No. Since we only store the link, the track can be as long as your hosting provider allows."
                                },
                                {
                                    q: "Can I track how many people scan my music QR?",
                                    a: "TheQrify provided here are static. For advanced tracking and analytics, you would typically use your streaming platform's internal stats."
                                }
                            ].map((item, index) => (
                                <FAQItem key={index} q={item.q} a={item.a} />
                            ))}
                        </Col>
                    </Row>
                </section>
            </Container>

            <LandingPageFooter currentPath='/qr-code-for-audio-file' />
        </div>
    );
};

export default AudioFileQRCodeLandingPage;
