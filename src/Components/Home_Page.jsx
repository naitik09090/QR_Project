import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form, Dropdown, Tabs, Tab, Nav, Card } from 'react-bootstrap';
import step1Img from '../assets/step1.png';
import step2Img from '../assets/step2.png';
import step3Img from '../assets/step3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../assets/Google.png'
import { TfiWorld } from "react-icons/tfi";
import { FaRegImage, FaRegFilePdf, FaRegEdit, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { RiUserAddLine } from "react-icons/ri";
import { MdVideoLibrary } from 'react-icons/md';
import { MdBlockFlipped } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlinePianoOff } from "react-icons/md";
import { FaFilePdf, FaTags, FaUserPlus, FaImage, FaFont, FaVideo, FaListUl, FaBuilding } from 'react-icons/fa';
import img_3 from "../assets/Phone_img.png"
import { FaCircleCheck } from "react-icons/fa6";
import { FaChartLine, FaEdit, FaQrcode, FaUsers, FaFileDownload, FaMagic, FaBarcode, FaDownload, FaGlobe, FaLock, FaBolt, FaFacebookF, FaGoogle } from "react-icons/fa";
import qr_image_1 from '../assets/qr_image_1.png';
import qr_image_2 from '../assets/qr_image_2.png';
import qr_image_3 from '../assets/qr_image_3.png';
import qr_image_4 from '../assets/qr_image_4.png';
import qr_image_5 from '../assets/qr_image_5.png';
import qr_image_6 from '../assets/qr_image_6.png';
import img_7 from '../assets/img_7.png';
import img_8 from '../assets/img_8.png';
import img_9 from '../assets/img_9.png';
import img_10 from '../assets/img_10.jpg';
import img_11 from '../assets/img_11.png';
import img1 from "../assets/logo.jpg";


const qrTypes = [
    { key: 'website', label: 'Website', icon: <TfiWorld /> },
    { key: 'pdf', label: 'PDF', icon: <FaFilePdf /> },
    { key: 'product', label: 'Product', icon: <FaTags /> },
    { key: 'vCard', label: 'vCard Plus', icon: <FaUserPlus /> },
    { key: 'images', label: 'Images', icon: <FaImage /> },
    { key: 'text', label: 'Text', icon: <FaFont /> },
    { key: 'video', label: 'Video', icon: <FaVideo /> },
    { key: 'list', label: 'List of links', icon: <FaListUl /> },
    { key: 'business', label: 'Business', icon: <FaBuilding /> },
];

const features = [
    {
        icon: <FaChartLine size={24} />,
        title: "Complete analytics",
        desc: "Understand performance with detailed data"
    },
    {
        icon: <FaEdit size={24} />,
        title: "Editing and management of QRs",
        desc: "Customize and organize your QRs."
    },
    {
        icon: <FaQrcode size={24} />,
        title: "Dynamic QR Codes",
        desc: "QR codes that can be updated in real time"
    },
    {
        icon: <FaUsers size={24} />,
        title: "Unlimited Contributing Users",
        desc: "Manage your QR codes as a team"
    },
    {
        icon: <FaFileDownload size={24} />,
        title: "Variety of download formats",
        desc: "Expand the possibilities of use of your QRs"
    },
    {
        icon: <FaMagic size={24} />,
        title: "Templates",
        desc: "Save and reuse your own designs"
    },
    {
        icon: <FaBarcode size={24} />,
        title: "Static QR",
        desc: "Permanent QR codes"
    },
    {
        icon: <FaDownload size={24} />,
        title: "Bulk creation and download",
        desc: "Generate and download QRs on a large scale"
    },
    {
        icon: <FaGlobe size={24} />,
        title: "Custom Domain",
        desc: "Strengthen your brand with your own domain"
    },
    {
        icon: <FaLock size={24} />,
        title: "Password access protection",
        desc: ""
    },
    {
        icon: <FaBolt size={24} />,
        title: "Event tracking",
        desc: ""
    },
];

const PixelIntegrationCard = () => (
    <Card className="h-100">
        <Card.Body>
            <Card.Title className="fw-bold">Google and Facebook pixel integration</Card.Title>
            <Card.Text>Improve the analysis of your digital campaigns</Card.Text>
            <div className="d-flex gap-3 mt-3">
                <FaChartLine size={28} />
                <FaGoogle size={28} />
                <FaFacebookF size={28} />
            </div>
        </Card.Body>
    </Card>
);

const tabData = [
    {
        key: 'QR code for weddings',
        title: 'Create a unique invitation for an unforgettable event.',
        icon: 'bi-heart-fill',
        label: 'QR code for weddings',
        image: img_7,
    },
    {
        key: 'QR code for NGOs',
        title: 'Connect the world to your cause and facilitate donations.',
        icon: 'bi-piggy-bank',
        label: 'QR code for NGOs',
        image: img_8,
    },
    {
        key: 'QR code for Photographers',
        title: 'Showcase your portfolio and grow your client base.',
        icon: 'bi-camera-reels',
        label: 'QR code for Photographers',
        image: img_9,
    },
];

const StarIcons = () => {
    return (
        <>
            <svg width="18" height="18" fill="orange" className="me-1" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
            {/* repeat 4 more times */}
            <svg width="18" height="18" fill="orange" className="me-1" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
            <svg width="18" height="18" fill="orange" className="me-1" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
            <svg width="18" height="18" fill="orange" className="me-1" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
            <svg width="18" height="18" fill="orange" className="me-1" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
        </>
    );
}


const QRGenerator = () => {
    const [url, setUrl] = useState('');
    const [activeKey, setActiveKey] = useState('website');

    const sliderRef = useRef();



    const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = 300;
        if (direction === "left") container.scrollLeft -= scrollAmount;
        else container.scrollLeft += scrollAmount;
    };

    const getTabContent = (key) => {
        switch (key) {
            case 'website':
                return {
                    title: 'Website',
                    desc: 'Connect your URL to a QR code so everyone can access your website quickly and easily. Turn every visit into an opportunity for growth!',
                    button: 'Generate QR Code for Website',
                };
            case 'pdf':
                return {
                    title: 'PDF',
                    desc: 'Easily share downloadable PDFs via QR code.',
                    button: 'Generate PDF QR Code',
                };
            // Add other types similarly
            default:
                return {
                    title: key,
                    desc: `This is the ${key} content.`,
                    button: `Generate ${key} QR Code`,
                };
        }
    };

    const { title, desc, button } = getTabContent(activeKey);

    return (
        <>
            <div className="container bg-light min-vh-50 rounded py-5">
                <Container className="bg-white p-4 rounded shadow-sm py-5">
                    {/* Top Tabs */}
                    <Tabs defaultActiveKey="website" className="mb-4">
                        <Tab eventKey="website" title={<><TfiWorld className="me-1" /> Website</>} />
                        <Tab eventKey="text" title={<><FaRegEdit className="me-1" /> Text</>} />
                        <Tab eventKey="pdf" title={<><FaRegFilePdf className="me-1" /> PDF</>} />
                        <Tab eventKey="images" title={<><FaRegImage className="me-1" /> Images</>} />
                        <Tab eventKey="vCard" title={<><RiUserAddLine className="me-1" /> vCard Plus</>} />
                        <Tab eventKey="video" title={<><MdVideoLibrary className="me-1" /> Video</>} />
                    </Tabs>

                    <Row>
                        {/* Left Section */}
                        <Col lg={8}>
                            {/* Step 1 */}
                            <div className="mb-4">
                                <h5 className="fw-bold">1. Complete the content</h5>
                                <Form.Group className="mt-2">
                                    <Form.Label>Enter your Website</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="E.g. https://www.myweb.com/"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </Form.Group>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-4">
                                <h5 className="fw-bold">2. Design your QR</h5>

                                <Tabs defaultActiveKey="frame" className="mb-3">
                                    <Tab eventKey="frame" title="Frame">
                                        <div className="d-flex gap-2 flex-wrap">
                                            {/* Icons or placeholder designs */}
                                            <div className="border rounded p-3 text-center"><MdBlockFlipped /></div>
                                            <div className="border rounded p-3 text-center">QR_1</div>
                                            <div className="border rounded p-3 text-center">QR_2</div>
                                            <div className="border rounded p-3 text-center">QR_3</div>
                                            <div className="border rounded p-3 text-center">QR_4</div>
                                            <div className="border rounded p-3 text-center">QR_5</div>
                                            <div className="border rounded p-3 text-center">QR_6</div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="shape" title="Shape" />
                                    <Tab eventKey="logo" title="Logo" />
                                    <Tab eventKey="level" title="Level" />
                                </Tabs>
                            </div>
                        </Col>

                        {/* Right Section */}
                        <Col lg={4}>
                            <div className="bg-light rounded p-4 text-center shadow-sm">
                                <h5 className="fw-bold mb-3">3. Download your QR</h5>
                                <div className="bg-white p-4 rounded shadow-sm mb-3">
                                    {/* QR Preview */}
                                    <div style={{ width: 150, height: 150, margin: '0 auto', background: '#eee' }}>
                                        <p className="pt-5">[QR Code]</p>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" className="rounded-pill border w-100">
                                        Download QR
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>PNG</Dropdown.Item>
                                        <Dropdown.Item>SVG</Dropdown.Item>
                                        <Dropdown.Item>PDF</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>

                    {/* Footer Section */}
                </Container>
            </div>
            <div className='container mb-5'>
                <div className="row text-center mt-5">
                    <img className='col-md-1 gg_img' src={img2} alt="Google" />
                    <p className="col-md-4 mt-2 mb-0 fw-semibold">★ 4.7 Trusted by more than 15,499 people</p>
                    <Button variant="primary" className="col-md-3 rounded-pill p-2 mb-0">
                        Create your free account <FaChevronDown />
                    </Button>
                    <p className="col-md-4 text-muted mt-1" style={{ fontSize: '0.875rem' }}><MdOutlinePianoOff />No credit card required on Signup</p>
                </div>
            </div>

            {/* QR Code Generator: Create your Free QR Code */}

            <div className="py-5 text-center">
                <Container>
                    <h2 className="fw-bold">QR Code Generator: Create your Free QR Code</h2>
                    <p className="text-muted mb-5">Customize it with your color, shape and logo in 3 simple steps.</p>
                    <h3 className="fw-semibold mb-5">How to create a QR code?</h3>

                    <Row className="g-4 justify-content-center">
                        <Col md={4}>
                            <div className="d-flex flex-column align-items-center px-3">
                                <img src={step1Img} alt="Step 1" className="img-fluid mb-3" />
                                <h5 className="fw-bold">Choose the content of your QR code</h5>
                                <p className="text-muted">Select from a wide variety of options: PDF, menu, video, business cards, web, apps, etc.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex flex-column align-items-center px-3">
                                <img src={step2Img} alt="Step 2" className="img-fluid mb-3" />
                                <h5 className="fw-bold">Customize and design it to measure</h5>
                                <p className="text-muted">Fill in all the information and use our design tool to make your QR unique.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex flex-column align-items-center px-3">
                                <img src={step3Img} alt="Step 3" className="img-fluid mb-3" />
                                <h5 className="fw-bold">Download your QR code</h5>
                                <p className="text-muted">Get your QR code in different formats (pdf, png, svg), print it or show it in a digital format and voila!</p>
                            </div>
                        </Col>
                    </Row>

                    <div className="mt-5">
                        <Button variant="primary" size="lg" className="px-4 py-2 fw-semibold rounded-pill">
                            Create QR code
                        </Button>
                    </div>
                </Container>
            </div>

            {/* Generate different types of QR Codes */}

            <Container className="my-5">
                <h2 className="fw-bold text-center mb-4">Generate different types of QR Codes</h2>
                <p className="text-center text-muted mb-5">QR codes can hold a large amount of content and at QRFY, we offer them all.</p>

                <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                    <div className="mb-4">
                        <Nav variant="tabs" className="justify-content-center text-center flex-wrap">
                            {qrTypes.map(({ key, label, icon }) => (
                                <Nav.Item key={key} className="px-3">
                                    <Nav.Link eventKey={key} className="d-flex flex-column align-items-center">
                                        <div className="fs-4">{icon}</div>
                                        <small>{label}</small>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>

                    <Row className="align-items-center">
                        <Col md={4}>
                            <h4 className="fw-bold">{title}</h4>
                            <p className="text-muted">{desc}</p>
                            <Button variant="primary" className="rounded-pill px-4">{button}</Button>
                        </Col>
                        <Col md={4} className="text-center">
                            <img src={img_3} className="img-fluid" alt="QR Visual" />
                        </Col>
                        <Col md={1}>
                            <p className="text-center">
                                <FaCircleCheck className='Tick' />
                            </p>
                            <p className="text-center">
                                <FaCircleCheck className='Tick_2' />
                            </p>
                        </Col>
                        <Col md={3}>
                            <p className='TeXt'>
                                Provides quick access to your website or online store with a simple scan,
                                and optimizes the experience of users and potential customers.
                            </p>
                            <p className='TeXt_2'>
                                Update the link as many times as you need without having to modify the printed QR code, always ensuring relevant content.
                            </p>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>


            {/* Your all-in-one marketing platform */}

            <Container className="py-5 text-center">
                <h2 className="mb-5 fw-bold">Your all-in-one marketing platform</h2>
                <Row className="g-4">
                    {features.map((feat, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={4}>
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="icon-box hover-icon mb-3 mx-auto">{feat.icon}</div>
                                    <Card.Title className="fw-semibold">{feat.title}</Card.Title>
                                    <Card.Text className="text-muted small">{feat.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <PixelIntegrationCard />
                    </Col>
                </Row>

                <div className="mt-5">
                    <Button variant="primary" size="lg">Create QR code</Button>
                </div>
            </Container>

            {/* Discover how to use QR codes to boost your marketing strategy. */}

            <Container className="py-5">
                <p className="text-primary fw-semibold">QR CODES ON</p>
                <h2 className="mb-5 fw-bold">
                    Discover how to use QR codes to boost your marketing strategy.
                </h2>

                <div className="position-relative">
                    <div className="d-flex align-items-center gap-3">
                        <button onClick={() => scroll("left")} className="arrow-btn">
                            <FaArrowLeft />
                        </button>

                        <div className="slider-container" ref={sliderRef}>
                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_1} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Business cards</Card.Title>
                                    <Card.Text className="text-muted">
                                        Turn your card into an interactive tool by adding a QR code that connects clients and employers with your work, social networks and contact information.
                                    </Card.Text>
                                    <a href="#" className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>

                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_2} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Pamphlets</Card.Title>
                                    <Card.Text className="text-muted">
                                        Expand the printed information on your pamphlets with a QR code, offering interactive content and measuring its reach in real time,social networks and contact information.
                                    </Card.Text>
                                    <a href="#" className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>

                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_3} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Brochures</Card.Title>
                                    <Card.Text className="text-muted">
                                        Complement the content of your brochures by adding a QR code that provides access to multimedia content such as videos and online documents.
                                    </Card.Text>
                                    <a href="#" className="text-primary fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>
                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_6} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Bottles and cans</Card.Title>
                                    <Card.Text className="text-muted">
                                        Turn your packaging into smart labels with a QR code that offers access to information about origin, ingredients and exclusive promotions.
                                    </Card.Text>
                                    <a href="#" className="text-primary fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>
                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_5} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Product packaging</Card.Title>
                                    <Card.Text className="text-muted">
                                        Reduce the text on your packaging and provide access to key information, exclusive discounts and social media through a simple scan,social contact information.
                                    </Card.Text>
                                    <a href="#" className="text-primary fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>
                            <Card className="qr-slide-card">
                                <Card.Img variant="top" src={qr_image_4} className="qr-slide-img" />
                                <Card.Body>
                                    <Card.Title>Menu</Card.Title>
                                    <Card.Text className="text-muted">
                                        Keep your menu up to date with a QR code on your menu. Forget about reprints and make it easy for your diners to access interactive options, contact information.
                                    </Card.Text>
                                    <a href="#" className="text-primary fw-semibold text-decoration-none more-info-btn">
                                        More Info →
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>

                        <button onClick={() => scroll("right")} className="arrow-btn">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="mt-4 text-end">
                    <Button variant="outline-primary" className="rounded-pill px-4">
                        See more
                    </Button>
                </div>
            </Container>

            {/* Explore our extensive collection of QR codes */}

            <div className="container my-5">
                <div className='row'>
                    <div className='col-md-8 offset-sm-2 text-primary text-center mb-3'>
                        <h6>QR CODES FOR</h6>
                    </div>
                    <div className='col-md-12 text-center mb-3'>
                        <h1>Explore our extensive collection of QR codes</h1>
                    </div>
                    <div className='col-md-8 offset-sm-2 text-center mb-5'>
                        <h6>QR codes can contain a wide range of content and at QRFY we offer them all.</h6>
                    </div>
                </div>
                <div className="row align-items-center rounded shadow overflow-hidden">
                    <div className="col-md-12 p-0">
                        <img
                            src={tabData.find(item => item.key === activeKey)?.image || img_7}
                            alt="Hero Visual"
                            className="img-fluid w-100"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center gy-4">
                    {tabData.map((item) => (
                        <div className="d-flex col-md-3 col-10" key={item.key}>
                            <div
                                className={`rounded p-4 shadow-sm ${activeKey === item.key ? 'bg-light text-primary border-bottom border-primary' : 'text-muted bg-white'}`}
                                style={{ cursor: 'pointer',height: '100px' }}
                                onClick={() => setActiveKey(item.activeKey || item.key)}
                            >
                                <i className={`bi ${item.icon} fs-3`}></i>
                                <strong>{item.label}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Everything you need to know to get started */}

            <div className='container py-5 mb-5'>
                <div className='row justify-content-center text-center mb-5'>
                    <div className='col-md-12'>
                        <h1>Everything you need to know to get started</h1>
                    </div>
                    <div className='col-md-5'>
                        <p>In this section you will find the basic concepts and the necessary steps to start enjoying the benefits of using QR.</p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-5 ofset-sm-1'>
                        <img src={img_10} className='QR111' />
                    </div>
                    <div className='col-md-4'>
                        <div className="accordion" id="qrAccordion">
                            {/* Item 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What is a QR code?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#qrAccordion"
                                >
                                    <div className="accordion-body">
                                        The term “QR” stands for “quick response” and refers to instant access to the information contained in the Code.
                                        It is, in short, the evolution of the barcode, made up of patterns of black and white pixels.
                                        Denso Wave, a Japanese subsidiary of Toyota Denso, developed them in order to mark the components of their cars and thus speed up logistics in their production. Currently,
                                        it has gained great popularity, due to its versatility and accessibility, thanks to the functions of smart phones.
                                        <a href="https://en.wikipedia.org/wiki/QR_code" target="_blank" rel="noopener noreferrer"> Learn more</a>.
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Know the benefits of using QR
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#qrAccordion"
                                >
                                    <div className="accordion-body">
                                        You will have noticed that more and more companies choose to include QR,
                                        as a fundamental resource for the marketing and commercialization of their products and services.
                                        Its growing popularity is due to the multiplicity of uses that you can give it: to receive payments from your clients,
                                        share links to web pages, catalogs and price lists, receive comments on your products or services,
                                        invite the client to share images or videos , promote your business events and much more, with just a scan!
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        How to start using QR?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#qrAccordion"
                                >
                                    <div className="accordion-body">
                                        Many devices already have a built-in QR code reader. In this case,
                                        all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds,
                                        until a notification appears on the screen. In case this does not happen,
                                        go to settings to check that QR scanning is enabled. If you don't have the feature,
                                        just download and install a QR code reader from your app store.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 mb-5">
                <div className="row justify-content-center g-4">

                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm position-relative text-center pt-5">
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                alt="Donald Jackman"
                                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <div className="card-body mt-4">
                                <h5 className="card-title mb-1">Donald Jackman</h5>
                                <p className="text-muted mb-3">Content Creator</p>
                                <p className="card-text">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                                <div className="d-flex justify-content-center pt-2">
                                    {/* 5 Stars */}
                                    <StarIcons />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm position-relative text-center pt-5">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                                alt="Richard Nelson"
                                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <div className="card-body mt-4">
                                <h5 className="card-title mb-1">Richard Nelson</h5>
                                <p className="text-muted mb-3">Instagram Influencer</p>
                                <p className="card-text">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                                <div className="d-flex justify-content-center pt-2">
                                    <StarIcons />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm position-relative text-center pt-5">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="James Washington"
                                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <div className="card-body mt-4">
                                <h5 className="card-title mb-1">James Washington</h5>
                                <p className="text-muted mb-3">Marketing Manager</p>
                                <p className="card-text">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                                <div className="d-flex justify-content-center pt-2">
                                    <StarIcons />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container py-5'>
                <div className='row mb-5'>
                    <div className='col-md-12 text-center'><h1>Do not leave with doubt</h1></div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div className="accordion" id="qrAccordion1">

                            {/* Item 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne1"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What is a QR code generator?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne1"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        It is a tool that allows you to generate different types of QR codes, in an easy and intuitive way.
                                        The rise of QR codes has made our QR code generator sought after and required by many people and businesses,
                                        with businesses of all kinds: you can use our QR code generator to create QR codes for your website,
                                        share a PDF, a photo gallery, a playlist, a price list or menu, connect your customers with a service available in your business
                                        (WiFi network, attention, shifts, payments, etc.),advertise shows or other events on public roads through the link to the trailer or trailer,
                                        create a vCard with contact information and share it with your customers, and much more.
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo1"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Are QR codes free?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        Our qr code generator has a free trial version for seven days: the QR codes you generate are yours forever.
                                        From there, if you are satisfied with the product, you can access the plan that best suits your needs.
                                        By contracting the service, you will have unlimited access to all the functions: unlimited dynamic and editable QR creation,
                                        all the variety of QR types, QR editing and management, unlimited scans, complete analytics of your QRs and a variety of download formats.
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree1"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        So Can I Create an account to generate free QR Codes?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        Of course, the first seven days are on us so you can try our QR code generator for free.
                                    </div>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour1"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Why on other web pages making QR codes is free?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        This is because our QR codes are dynamic rather than static.
                                        All the QR codes that are generated with QRFY host the information on our servers such as PDF documents,
                                        Videos, Images and have a cost for that reason they are not free.
                                    </div>
                                </div>
                            </div>

                            {/* Item 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive1"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Can a generate QR codes be used for commerical purposes?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        The use of QR codes is today part of the marketing strategy of many companies.
                                        Do not hesitate: use the codes you generate on our platform to renew, give visibility and dynamism to your business.
                                    </div>
                                </div>
                            </div>

                            {/* Item 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix1"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        What kind of infomation can be stored in a QR code?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSix1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSix"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        QR codes can store a wide variety of information, adapting to what you need,
                                        since the URL can redirect the user to the type of content you want with just a scan: a website, a PDF,
                                        a photo gallery, a playlist, price lists, menus, technical service, WiFi network, shift platform, payment links,
                                        videos, contact information, etc. The possibilities are limitless.
                                    </div>
                                </div>
                            </div>

                            {/* Item 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven1"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        Do QR Code have a scan counter?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSeven1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        Yes. If you sign up for a plan, you can track the number of scans your QR codes receive.
                                        This way you will be able to observe the progress of your campaigns and even make the necessary adjustments to improve or expand them.
                                    </div>
                                </div>
                            </div>

                            {/* Item 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight1"
                                        aria-expanded="false"
                                        aria-controls="collapseEight"
                                    >
                                        For how long are the QR valid?Do they expire?
                                    </button>
                                </h2>
                                <div
                                    id="collapseEight1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingEight"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        QR codes do not have an expiration date. They will only stop working if you change or remove the link. However,
                                        you have the option to create dynamic codes,
                                        so you can replace the content or links when you need to.
                                    </div>
                                </div>
                            </div>

                            {/* Item 9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine1"
                                        aria-expanded="false"
                                        aria-controls="collapseNine"
                                    >
                                        What is different between a static and dynamic QR code?
                                    </button>
                                </h2>
                                <div
                                    id="collapseNine1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingNine"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        Static QR codes are those that cannot be edited and their scans cannot be tracked. On the other hand,
                                        dynamic codes allow you to make changes even after they have been generated: update their content, change their aesthetics,
                                        modify links and correct various types of errors. The latter also allow you to track the number of scans.
                                    </div>
                                </div>
                            </div>

                            {/* Item 10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen1"
                                        aria-expanded="false"
                                        aria-controls="collapseTen"
                                    >
                                        Can I manage the codes with the QR code generator?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTen1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTen"
                                    data-bs-parent="#qrAccordion1"
                                >
                                    <div className="accordion-body">
                                        Of course. When you have signed up for one of our plans, you can manage your QR codes as you wish: create,
                                        design, save, delete or modify your codes as you wish,
                                        add logos, frames, generate a domain, save your favorite designs, edit URLs And many other things.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src={img_11} className='QR_12' />
                    </div>
                    <div className="col-md-4 py-5">
                        <h1>Want to know more?</h1>
                        <p>Check our FAQs to find an answer to any questions you may have about our QR codes.</p>
                        <button className='btn btn-primary rounded-5 '>Answer all your question</button>
                    </div>
                </div>
            </div>


            {/* Footer */}

            <footer className="w-100 text-white" style={{ background: 'linear-gradient(to bottom, #1B004D, #2E0A6F)' }}>
                <div className="container py-5 d-flex flex-column align-items-center">
                    <div className="mb-4">
                        <img src={img1} alt="QRFY Logo" width="100" height="40" className="me-2 rounded-5" />
                    </div>
                    <p className="text-center text-sm" style={{ maxWidth: '600px' }}>
                        Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas into
                        reality.
                    </p>
                </div>

                <div className="border-top" style={{ borderColor: '#3B1A7A' }}>
                    <div className="container py-3 text-center text-sm">
                        <a href="https://prebuiltui.com" className="text-white text-decoration-none">
                            QRFY
                        </a>{' '}
                        ©2025. All rights reserved.
                    </div>
                </div>
            </footer>

        </>
    );
};

export default QRGenerator;
