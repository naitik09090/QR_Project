import { useRef } from "react";
import { useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import img2 from "../assets/Google.png";
import { TfiWorld } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
// FaRegImage
// import { FaRegFilePdf } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaThumbsUp } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
// import { FaMusic } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
// import { MdBlockFlipped } from "react-icons/md";
// MdVideoLibrary
// import { FaChevronDown } from "react-icons/fa";
// import { MdOutlinePianoOff } from "react-icons/md";
// import {
//   FaFilePdf,
//   FaTags,
//   FaUserPlus,
//   FaImage,
//   FaFont,
//   FaVideo,
//   FaListUl,
//   FaBuilding,
// } from "react-icons/fa";
// import { FaCircleCheck } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import qr_image_1 from "../assets/qr_image_1.png";
import qr_image_2 from "../assets/qr_image_2.png";
import qr_image_3 from "../assets/qr_image_3.png";
import qr_image_4 from "../assets/qr_image_4.png";
import qr_image_5 from "../assets/qr_image_5.png";
import qr_image_6 from "../assets/qr_image_6.png";
import img_7 from "../assets/img_7.png";
import img_8 from "../assets/img_8.png";
import img_9 from "../assets/img_9.png";
import img_10 from "../assets/img_10.jpg";
import img_11 from "../assets/img_11.png";
// import img1 from "../assets/logo.jpg";
import { Whatsapp } from "react-bootstrap-icons";
// import { useSearchParams } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
import { RxValueNone } from "react-icons/rx";
import { SiWhatsapp } from "react-icons/si";
import { RiLink } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { RiQrScan2Line } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { MdDinnerDining } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
// import { MdOutlineHideSource } from "react-icons/md";
import null_1 from "../assets/null1.png";
import frame_1 from "../assets/frame_1.png";
import frame_2 from "../assets/frame_2.png";
import frame_3 from "../assets/frame_3.png";
import frame_4 from "../assets/frame_4.png";
import frame_5 from "../assets/frame_5.png";
import frame_6 from "../assets/frame_6.png";
import frame_7 from "../assets/frame_7.png";

const features = [
  {
    icon: <FaChartLine size={24} />,
    title: "Complete analytics",
    desc: "Understand performance with detailed data",
  },
  {
    icon: <FaEdit size={24} />,
    title: "Editing and management of QRs",
    desc: "Customize and organize your QRs.",
  },
  {
    icon: <FaQrcode size={24} />,
    title: "Dynamic QR Codes",
    desc: "QR codes that can be updated in real time",
  },
  {
    icon: <FaUsers size={24} />,
    title: "Unlimited Contributing Users",
    desc: "Manage your QR codes as a team",
  },
  {
    icon: <FaFileDownload size={24} />,
    title: "Variety of download formats",
    desc: "Expand the possibilities of use of your QRs",
  },
  {
    icon: <FaMagic size={24} />,
    title: "Templates",
    desc: "Save and reuse your own designs",
  },
  {
    icon: <FaBarcode size={24} />,
    title: "Static QR",
    desc: "Permanent QR codes",
  },
  {
    icon: <FaDownload size={24} />,
    title: "Bulk creation and download",
    desc: "Generate and download QRs on a large scale",
  },
  {
    icon: <FaGlobe size={24} />,
    title: "Custom Domain",
    desc: "Strengthen your brand with your own domain",
  },
  {
    icon: <FaLock size={24} />,
    title: "Password access protection",
    desc: "",
  },
  {
    icon: <FaBolt size={24} />,
    title: "Event tracking",
    desc: "",
  },
];

const PixelIntegrationCard = () => (
  <Card className="h-100">
    <Card.Body>
      <Card.Title className="fw-bold">
        Google and Facebook pixel integration
      </Card.Title>
      <Card.Text>Improve the analysis of your digital campaigns</Card.Text>
      <div className="d-flex gap-3 mt-3">
        <FaChartLine size={28} />
        <FaGoogle size={28} />
        <FaFacebookF size={28} />
      </div>
    </Card.Body>
  </Card>
);

// const tabData = [
//   {
//     key: "QR code for weddings",
//     title: "Create a unique invitation for an unforgettable event.",
//     icon: "bi-heart-fill",
//     label: "QR code for weddings",
//     image: img_7,
//   },
//   {
//     key: "QR code for NGOs",
//     title: "Connect the world to your cause and facilitate donations.",
//     icon: "bi-piggy-bank",
//     label: "QR code for NGOs",
//     image: img_8,
//   },
//   {
//     key: "QR code for Photographers",
//     title: "Showcase your portfolio and grow your client base.",
//     icon: "bi-camera-reels",
//     label: "QR code for Photographers",
//     image: img_9,
//   },
// ];

const StarIcons = () => {
  return (
    <>
      <svg
        width="18"
        height="18"
        fill="orange"
        className="me-1"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
      </svg>
      {/* repeat 4 more times */}
      <svg
        width="18"
        height="18"
        fill="orange"
        className="me-1"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
      </svg>
      <svg
        width="18"
        height="18"
        fill="orange"
        className="me-1"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
      </svg>
      <svg
        width="18"
        height="18"
        fill="orange"
        className="me-1"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
      </svg>
      <svg
        width="18"
        height="18"
        fill="orange"
        className="me-1"
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
      </svg>
    </>
  );
};

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [activeKey, setActiveKey] = useState("wedding");
  const [activeTab, setActiveTab] = useState("website");
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Level Q");
  const [qrType, setQrType] = useState("website"); // default QR type

  // vcard
  const [showContact, setShowContact] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  // const [activeTab, setActiveTab] = useState("wedding");

  const content = {
    wedding: {
      title: "Create a unique invitation for an unforgettable event.",
      button: "See more",
      img: img_7,
    },
    ngo: {
      title: "Connect the world to your cause and facilitate donations.",
      button: "See more",
      img: img_8,
    },
    photographer: {
      title: "Share your portfolio instantly with a single scan.",
      button: "See more",
      img: img_9,
    },
  };

  const tabContent = {
    website: (
      <>
        <h4 className="fw-bold mb-4">
          <span className="step-number">1</span> QR Website
        </h4>
        <span className="text-muted no-delay mb-3">
          Enter your website URL to generate a QR code for easy sharing.
        </span>

        <Form.Group>
          <Form.Label>Enter your Website</Form.Label>
          <Form.Control
            type="url"
            placeholder="E.g. https://www.myweb.com/"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
      </>
    ),
    text: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number">1</span>QR Text
        </h4>
        <p className="text-muted no-delay">
          Type any text you want to encode into a QR code.
        </p>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
        />
      </>
    ),
    // pdf: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR PDF</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       From menus to user guides to creative portfolios, give your clients
    //       access to PDF documents quickly and efficiently.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //   </>
    // ),
    // images: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Images</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Share memories and special moments like never before through a QR
    //       code, where each image tells a story and is accessible to everyone.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <p>Upload an image to create a QR code linking to it.</p>
    //     <Form.Control type="file" /> */}
    //   </>
    // ),
    vcard: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number">1</span> Complete the content
        </h4>

        <Form>
          {/* Name and Surname */}
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Name *</Form.Label>
                <Form.Control type="text" placeholder="E.g. Paul" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="E.g. Jones" />
              </Form.Group>
            </Col>
          </Row>

          {/* Contact Info */}
          <Button
            variant="light"
            className="w-100 text-start border mb-2"
            onClick={() => setShowContact(!showContact)}
            aria-controls="contact-info"
            aria-expanded={showContact}
          >
            Contact info {showContact ? "▲" : "▼"}
          </Button>
          <Collapse in={showContact}>
            <div id="contact-info" className="border p-3 mb-3 rounded">
              <Button variant="outline-primary" className="mb-3">
                + Add Phone
              </Button>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="E.g. name@email.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Personal website</Form.Label>
                <Form.Control type="url" placeholder="https://..." />
              </Form.Group>
            </div>
          </Collapse>

          {/* Location */}
          <Button
            variant="light"
            className="w-100 text-start border mb-2"
            onClick={() => setShowLocation(!showLocation)}
            aria-controls="location-info"
            aria-expanded={showLocation}
          >
            Location {showLocation ? "▲" : "▼"}
          </Button>
          <Collapse in={showLocation}>
            <div id="location-info" className="border p-3 mb-3 rounded">
              <div className="d-flex mb-3">
                <Button variant="outline-primary" className="me-2">
                  Complete
                </Button>
                <Button variant="outline-secondary" disabled>
                  Url
                </Button>
                <Button variant="outline-secondary" disabled>
                  Coordinates
                </Button>
              </div>
              <Row className="mb-3">
                <Col>
                  <Form.Control placeholder="Search address" />
                </Col>
                <Col xs="auto">
                  <Button variant="outline-primary">Manual entry</Button>
                </Col>
              </Row>
            </div>
          </Collapse>

          {/* Company */}
          <Button
            variant="light"
            className="w-100 text-start border mb-2"
            onClick={() => setShowCompany(!showCompany)}
            aria-controls="company-info"
            aria-expanded={showCompany}
          >
            Company {showCompany ? "▲" : "▼"}
          </Button>
          <Collapse in={showCompany}>
            <div id="company-info" className="border p-3 rounded">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control placeholder="E.g. Company LLC" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="E.g. Your profession/position" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Collapse>
        </Form>
      </>
    ),

    whatsapp: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number">1</span>
          Complete the content
        </h4>
        <p className="text-muted no-delay">Number</p>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className="text-muted no-delay">Message</p>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
        />
      </>
    ),
    email: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number">1</span>
          Complete the content
        </h4>
        <p className="text-muted no-delay">Email</p>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <p className="text-muted no-delay">Subject</p>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <p className="text-muted no-delay">Message</p>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </>
    ),
    SMS: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number">1</span>
          Complete the content
        </h4>
        <p className="text-muted no-delay">Number</p>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className="text-muted no-delay">Message</p>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your text here"
          onChange={(e) => setUrl(e.target.value)}
        />
      </>
    ),
    // video: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
    // whatsapp: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    /* <Form.Control type="url" placeholder="Video URL" /> */
    //   </>
    // ),
    // social: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
    wifi: (
      <>
        <h4 className="fw-bold mb-3">
          <span className="step-number text-white">1</span> Complete the content
        </h4>

        <div className="row g-3 mb-4 align-items-center">
          <div className="col-md-4">
            <label className="form-label">Network name (SSID)*</label>
            <input
              type="text"
              placeholder="E.g. HomeWifi"
              className="form-control p-2"
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Network password</label>
            <input
              type="text"
              placeholder="E.g. Mypassword"
              className="form-control p-2"
              required
            />
          </div>
        </div>
        <div className="row g-4 align-items-center mb-4">
          <div className="col-md-4 col-sm-6">
            <label className="form-label fw-bold">Security</label>
            <select className="form-select p-2">
              <option value="wep">WEP</option>
              <option value="wpa">WPA</option>
              <option value="wpa2-eap">WPA2-EAP</option>
              <option value="nopass">No Password</option>
            </select>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="form-check d-flex align-items-center mt-4">
              <input
                type="checkbox"
                id="hiddenNetwork"
                style={{ width: "20px", height: "20px" }}
                className="form-check-input me-2"
              />
              <label
                htmlFor="hiddenNetwork"
                className="form-check-label fw-bold"
              >
                Hidden Network
              </label>
            </div>
          </div>
        </div>
        {/* <Form.Control type="url" placeholder="Video URL" /> */}
      </>
    ),
    // mp3: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p
    //       className="P_Tages_qr text-muted no-delay
    //     "
    //     >
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
  };
    // const [qrcode, setQrcode] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await fetch(
    //         "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/api/qr-codes/"
    //       );
    //       if (!res.ok) throw new Error("Failed to fetch QR codes");
    //       const data = await res.json();
    //       console.log("API data:", data); // 👈 Check structure
    //       setQrcode(Array.isArray(data) ? data : data.qrCodes || []);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchData();
    // }, []);

// async function generateQrCode() {
//   try {
//     const response = await fetch(
//       "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/api/qr-codes/",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer {{access_token}}`, // replace with your token
//         },
//       }
//     );

//     if (!response.ok) throw new Error("Failed to generate QR Code");

//     const result = await response.json();
//     return result.qr_image_url; // ✅ only image URL
//   } catch (err) {
//     console.error("QR API Error:", err);
//     return null;
//   }
// }

// useEffect(() => {
//   async function fetchQr() {
//     const qrUrl = await generateQrCode({
//       url: frameText || "https://example.com", // 👈 your text or URL
//       fillColor: qrColor,
//       backColor: bgColor,
//     });
//     if (qrUrl) setQr(qrUrl);
//   }
//   fetchQr();
// }, [frameText, qrColor, bgColor]);


  const qrImages = {
    website:
      "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/24/2c718be4-e36a-49c9-b1d1-df597b75378e.png?se=2025-08-21T05%3A57%3A53Z&sp=r&sv=2025-07-05&sr=b&sig=MT3o8bhwLnEFbJVG4Wb4rzDCfyykztazQyqTE/HY4zA%3D",
    text: "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/2ee4a34f-f73d-4e11-a9f6-c2e6086c4f97.png?se=2025-08-21T04%3A52%3A55Z&sp=r&sv=2025-07-05&sr=b&sig=b2JFraOBU7FS4BnFaRGRjUHGL5NysEvFwL%2BreKRWQKk%3D",
    email:
      "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/93eda8d7-c212-483e-8676-29405dba2bd5.png?se=2025-08-21T04%3A52%3A46Z&sp=r&sv=2025-07-05&sr=b&sig=rF/aGTtDgt%2BO6FoCMc6vuVAri1gQ%2BJTaxnHNzIQfjVE%3D",
    vcard:
      "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/a9d47dda-c144-4ddc-a343-262a669c3d33.png?se=2025-08-21T04%3A52%3A50Z&sp=r&sv=2025-07-05&sr=b&sig=J3AP/mmf6B1GKJMNp9sFGp29TI1IZRGumCw4yRCpX1Q%3D",
    wifi: "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/f4108d69-56c0-4dcc-8641-7ec95ec66339.png?se=2025-08-21T04%3A52%3A58Z&sp=r&sv=2025-07-05&sr=b&sig=v96S/1jooHnHCB%2Bn3EzwaSGYaUwIS/2N1MJqqlOpihk%3D",
    whatsapp:
      "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/8acd190d-1f6c-45a6-bd85-8613095cd77f.png?se=2025-08-21T04%3A52%3A54Z&sp=r&sv=2025-07-05&sr=b&sig=/g9bgxCrNMx8wey/Oq/JRGahkHnkGUgVv%2Bqfazn8xrQ%3D",
    SMS: "https://qrcodegenstor.blob.core.windows.net/media/qr_codes/23/e2cf0589-ab6b-4fed-8637-83d0bb853dfc.png?se=2025-08-21T04%3A52%3A54Z&sp=r&sv=2025-07-05&sr=b&sig=5TxQBnZzTpsafKuhEdewhHpfHBFJ%2B1VSZBNUDy27lLs%3D",
  };

  // mp3: "https://via.placeholder.com/200x200.png?text=MP3+QR",
  // pdf: "https://via.placeholder.com/200x200.png?text=PDF+QR",
  // video: "https://via.placeholder.com/200x200.png?text=Video+QR",
  // whatsapp: "https://via.placeholder.com/200x200.png?text=WhatsApp+QR",
  // social: "https://via.placeholder.com/200x200.png?text=Social+QR",
  // images: "https://via.placeholder.com/200x200.png?text=Images+QR",

  // Desktop view
  const frameOptions = [
    {
      key: "null",
      image: null_1,
      slot: { top: 0, left: 0, width: 100, height: 100 },
    },
    {
      key: "simple",
      image: frame_1,
      slot: { top: 1, left: 23, width: 55, height: 55 },
    },
    {
      key: "envelope",
      image: frame_3,
      slot: { top: 5, left: 24, width: 55, height: 52 },
    },
    {
      key: "tray",
      image: frame_4,
      slot: { top: 15, left: 22, width: 56, height: 56 },
    },
    {
      key: "scanme",
      image: frame_5,
      slot: { top: 22, left: 15, width: 66, height: 62 },
    },
    {
      key: "mug",
      image: frame_7,
      slot: { top: 8, left: 0, width: 38, height: 38 },
    },
    // Scooter-like frame: QR sits a bit right-of-center and smaller
    {
      key: "scooter",
      image: frame_6,
      slot: { top: 24, left: 20, width: 58, height: 50 },
    },
    {
      key: "alt",
      image: frame_2,
      slot: { top: 0, left: 10, width: 80, height: 80 },
    },
  ];

  // Mobile view

  const frameOptions1 = [
    {
      key: "none",
      image: null_1,
      slot: { top: 0, left: 0, width: 100, height: 100 },
    }, // fallback, centered
    {
      key: "simple",
      image: frame_1,
      slot: { top: 1, left: 23, width: 55, height: 55 },
    },
    {
      key: "envelope",
      image: frame_3,
      slot: { top: 5, left: 24, width: 55, height: 52 },
    },
    {
      key: "tray",
      image:frame_4,
      slot: { top: 15, left: 22, width: 56, height: 56 },
    },
    {
      key: "scanme",
      image: frame_5,
      slot: { top: 22, left: 15, width: 66, height: 62 },
    },
    {
      key: "mug",
      image: frame_7,
      slot: { top: 8, left: 0, width: 38, height: 38 },
    },
    // Scooter-like frame: QR sits a bit right-of-center and smaller
    {
      key: "scooter",
      image: frame_6,
      slot: { top: 24, left: 20, width: 58, height: 50 },
    },
    {
      key: "alt",
      image: frame_2,
      slot: { top: 0, left: 10, width: 80, height: 80 },
    },
  ];

  const DEFAULT_SLOT = { top: 20, left: 20, width: 60, height: 60 };
  const QUIET_ZONE_PCT = 3; // white margin around QR inside slot

  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);
  // const [selectedFrame1Index, setSelectedFrame1Index] = useState(0);
  // selectedFrameIndex (your state)
  // const selectedFrame1 = frameOptions1[selectedFrameIndex] || frameOptions1[0];
  const selectedFrame = frameOptions[selectedFrameIndex] || frameOptions[0];
  const slot = selectedFrame?.slot || DEFAULT_SLOT;

  const qr = qrImages[qrType];

  // const selectedFrame = frameOptions[selectedFrameIndex];

  const sliderRef = useRef();

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 300;
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  const qrTypes = [
    { key: "website", icon: <TfiWorld />, label: "Website" },
    { key: "text", icon: <FaRegEdit />, label: "Text" },
    { key: "vcard", icon: <RiUserAddLine />, label: "vCard" },
    { key: "wifi", icon: <FaWifi />, label: "Wi-Fi" },
    { key: "whatsapp", icon: <Whatsapp />, label: "whatsapp" },
    { key: "email", icon: <MdEmail />, label: "email" },
    { key: "SMS", icon: <BsChatDotsFill />, label: "SMS" },
  ];
  // { key: "pdf", icon: <FaRegFilePdf />, label: "PDF" },
  // { key: "images", icon: <FaRegImage />, label: "Images" },
  // { key: "mp3", icon: <FaMusic />, label: "MP3" },
  // { key: "video", icon: <MdVideoLibrary />, label: "Video" },
  // { key: "whatsapp", icon: <FaWhatsapp />, label: "WhatsApp" },
  // { key: "social", icon: <FaThumbsUp />, label: "Social" },

  // const [selectedFrame, setSelectedFrame] = useState(frameOptions[0]);
  const [frameText, setFrameText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [mobileStep, setMobileStep] = useState("content"); // "content" | "design"

  // const { title, desc, button } = getTabContent(activeKey);

  return (
    <>
      <div className="container-fluid bg-light rounded py-4">
        {/* DESKTOP / LAPTOP (md and up) */}
        <Container className="bg-white p-4 rounded shadow-sm d-none d-md-block">
          <Row>
            {/* Left: tabs + content + design */}
            <Col md={8}>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => {
                  setActiveTab(k || "website");
                  setQrType(k || "website"); // 🔥 update QR type
                }}
              >
                {qrTypes.map((t) => (
                  <Tab
                    key={t.key}
                    eventKey={t.key}
                    title={
                      <span className="d-inline-flex align-items-center gap-2">
                        {t.icon}
                        {t.label}
                      </span>
                    }
                  >
                    <div className="pt-3">{tabContent[t.key]}</div>
                  </Tab>
                ))}
              </Tabs>

              {/* Step 2 – Design your QR (matches your desktop screenshot) */}
              <div className="mt-4 border rounded p-3">
                <h5 className="fw-bold mb-3">
                  <span className="step-number">2</span>
                  Design your QR
                </h5>

                <Tabs defaultActiveKey="frame" className="mb-3">
                  <Tab eventKey="frame" title="Frame">
  {/* Frame Selection */}
  <div className="d-flex gap-3 overflow-auto pb-2 mb-3">
    <div>
      {/* Frame Selector Grid */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
        }}
      >
        {frameOptions1.map((frame, idx) => (
          <div
            key={idx}
            role="button"
            className={`border rounded text-center p-2 ${
              selectedFrameIndex === idx ? "border-primary bg-light" : ""
            }`}
            style={{
              width: 130,
              height: 150,
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setSelectedFrameIndex(idx)}
          >
            {/* Frame Preview */}
            {frame.image ? (
              <img
                src={frame.image}
                alt={`Frame ${idx}`}
                loading={idx === 0 ? "eager" : "lazy"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            ) : (
              <span></span>
            )}
            {/* QR Overlay */}
{qr && frame.slot && (
  <img
    src={qr}
    alt="QR Code Preview"
    style={{
      position: "absolute",
      objectFit: "contain",
      zIndex: 2,
      pointerEvents: "none",
      top: `${frame.slot.top}%`,
      left: `${frame.slot.left}%`,
      width: `${frame.slot.width}%`,
      height: `${frame.slot.height}%`,
    }}
  />
)}

          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Frame Settings */}
  <div className="bg-light p-3 rounded">
    <div className="mb-3">
      <label className="form-label fw-bold">Text</label>
      <input
        type="text"
        className="form-control"
        placeholder="Scan me!"
        value={frameText}
        onChange={(e) => setFrameText(e.target.value)}
      />
    </div>

    <Row className="g-3">
      <Col md={4}>
        <label className="form-control fw-bold">
          Text color
          <input
            type="color"
            className="form-control-color ms-2"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
      </Col>
      <Col md={4}>
        <label className="form-control fw-bold">
          Colour
          <input
            type="color"
            className="form-control-color ms-2"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
          />
        </label>
      </Col>
      <Col md={4}>
        <label className="form-control fw-bold">
          Background colour
          <input
            type="color"
            className="form-control-color ms-2"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
      </Col>
    </Row>
  </div>
</Tab>


                  <Tab eventKey="shape" title="Shape">
                    <div className="mt-4">
                      {/* Shape Style Section */}
                      <div className="border rounded p-3 mb-4">
                        <h5 className="fw-bold mb-3">Shape style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(8)].map((_, i) => (
                            <button
                              key={`shape-${i + 1}`} // ✅ clearer, more explicit
                              className="btn btn-light border p-2"
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "contain",
                              }}
                            >
                              <img
                                src={`/shapes/shape${i + 1}.png`}
                                alt={`Shape ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <label className="form-label">
                              Border colour
                              <input
                                type="color"
                                className="form-control form-control-color"
                                defaultValue="#000000"
                              />
                            </label>
                          </div>
                          <div>
                            <label className="form-label">
                              Background colour
                              <input
                                type="color"
                                className="form-control form-control-color"
                                defaultValue="#FFFFFF"
                              />
                            </label>
                          </div>
                          <button className="btn btn-outline-primary mt-4">
                            Invert
                          </button>
                        </div>
                      </div>

                      {/* Border & Center Style Section */}
                      <div className="border rounded p-3">
                        <h5 className="fw-bold mb-3">Border style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(10)].map((_, i) => (
                            <button
                              key={`border-${i + 1}`} // ✅ key on top-level element
                              className="btn btn-light border p-2"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                src={`/borders/border${i + 1}.png`}
                                alt={`Border ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <h5 className="fw-bold mb-3">Center style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(10)].map((_, i) => (
                            <button
                              key={`center-${i + 1}`} // ✅ better than just `i`
                              className="btn btn-light border p-2"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                src={`/centers/center${i + 1}.png`}
                                alt={`Center ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <label className="form-label">Border colour</label>
                            <input
                              type="color"
                              className="form-control form-control-color"
                              defaultValue="#000000"
                            />
                          </div>
                          <div>
                            <label className="form-label">
                              Background colour
                            </label>
                            <input
                              type="color"
                              className="form-control form-control-color"
                              defaultValue="#000000"
                            />
                          </div>
                          <button className="btn btn-outline-primary mt-4">
                            Invert
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="logo" title="Logo">
                    <div className="p-3">
                      <h6 className="mb-3 fw-bold">Select a logo</h6>

                      {/* Logo options */}
                      <div
                        className="d-flex gap-3 overflow-auto mb-3 pb-2"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RxValueNone className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <SiWhatsapp className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RiLink className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <CiLocationOn className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaWifi className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <SlCalender className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <TfiEmail className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RiQrScan2Line className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <GrGallery className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <MdDinnerDining className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaQrcode className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaPaypal className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaBitcoin className="LoGo_122" />
                        </div>
                      </div>

                      {/* Upload logo */}
                      <div className="border rounded p-3 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="level" title="Level">
                    <div className="mt-3">
                      <h6 className="fw-bold mb-3">Select a level</h6>
                      <div className="d-flex gap-4 flex-wrap">
                        {[
                          {
                            name: "Level Q",
                            percent: "25%",
                            img: "your-q-image.png",
                          },
                          {
                            name: "Level H",
                            percent: "30%",
                            img: "your-h-image.png",
                          },
                          {
                            name: "Level M",
                            percent: "15%",
                            img: "your-m-image.png",
                          },
                          {
                            name: "Level L",
                            percent: "7%",
                            img: "your-l-image.png",
                          },
                        ].map((level) => (
                          <div
                            key={level.name} // ✅ better: unique & stable
                            role="button"
                            onClick={() => setSelectedLevel(level.name)}
                            className={`border rounded p-2 text-center ${
                              selectedLevel === level.name
                                ? "border-primary bg-light"
                                : ""
                            }`}
                            style={{
                              cursor: "pointer",
                              width: "auto",
                              height: "100px",
                            }}
                          >
                            <img
                              src={level.img}
                              alt={level.name}
                              className="img-fluid"
                              style={{ width: "80px", height: "80px" }}
                            />
                            <div className="mt-2 small fw-semibold">
                              {level.name}
                            </div>
                            <div className="text-muted">{level.percent}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>

            {/* Right: Preview + Download (matches your desktop screenshot) */}
            <Col md={4} className="text-center">
              <h5 className="fw-bold mb-3">
                <span className="step-number">3</span>
                Download your QR
              </h5>

              <div
                style={{
                  position: "relative",
                  width: "360px", // change as you like
                  aspectRatio: "1 / 1", // keep preview square; change if you want to match frame aspect
                  // border: "1px dashed #ddd",
                }}
              >
                {/* Frame (background or foreground—most frames work fine behind the QR) */}
                {selectedFrame?.image && (
                  <img
                    src={selectedFrame.image}
                    alt="Selected Frame"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* QR SLOT */}
                <div
                  style={{
                    position: "absolute",
                    top: `${slot.top}%`,
                    left: `${slot.left}%`,
                    width: `${slot.width}%`,
                    height: `${slot.height}%`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    // optional: visualize the slot while tuning
                    // outline: "1px dashed rgba(0,0,0,.2)",
                  }}
                >
                  {/* Quiet zone: keep a little white margin so scanners read it reliably */}
                  <div
                    style={{
                      position: "relative",
                      width: `${100 - QUIET_ZONE_PCT * 2}%`,
                      height: `${100 - QUIET_ZONE_PCT * 2}%`,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={qr}
                      alt="QR Code"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>

              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  className="rounded-pill border w-100"
                >
                  Download QR
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>PNG</Dropdown.Item>
                  <Dropdown.Item>SVG</Dropdown.Item>
                  <Dropdown.Item>PDF</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>

        {/* MOBILE (under md) – matches your mobile screenshots */}
        <Container className="bg-white p-3 rounded shadow-sm d-md-none">
          {/* preview card */}
          <div className="border rounded p-3 mb-3">
            <div className="text-center text-muted small mb-2">Preview</div>
            <div
              className="border rounded d-flex align-items-center justify-content-center mb-3"
              style={{ height: 220 }}
            >
              <div
                style={{
                  position: "relative",
                  width: "360px", // change as you like
                  aspectRatio: "1 / 1", // keep preview square; change if you want to match frame aspect
                  // border: "1px dashed #ddd",
                }}
              >
                {/* Frame (background or foreground—most frames work fine behind the QR) */}
                {selectedFrame?.image && (
                  <img
                    src={selectedFrame.image}
                    alt="Selected Frame"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* QR SLOT */}
                <div
                  style={{
                    position: "absolute",
                    top: `${slot.top}%`,
                    left: `${slot.left}%`,
                    width: `${slot.width}%`,
                    height: `${slot.height}%`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    // optional: visualize the slot while tuning
                    // outline: "1px dashed rgba(0,0,0,.2)",
                  }}
                >
                  {/* Quiet zone: keep a little white margin so scanners read it reliably */}
                  <div
                    style={{
                      position: "relative",
                      width: `${100 - QUIET_ZONE_PCT * 2}%`,
                      height: `${100 - QUIET_ZONE_PCT * 2}%`,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={qr}
                      alt="QR Code"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* step toggles */}
            <div className="d-flex gap-2 mb-3">
              <Button
                size="sm"
                variant={mobileStep === "content" ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("content")}
              >
                <span className="badge bg-dark me-2">1</span>Content
              </Button>
              <Button
                size="sm"
                variant={mobileStep === "design" ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("design")}
              >
                <span className="badge bg-primary me-2">2</span>Design
              </Button>
            </div>

            {/* Content step */}
            {mobileStep === "content" && (
              <>
              {/* <Tabs
                activeKey={activeTab}
                onSelect={(k) => {
                  setActiveTab(k || "website");
                  setQrType(k || "website"); // 🔥 update QR type
                }}
              >
                {qrTypes.map((t) => (
                  <Tab
                    key={t.key}
                    eventKey={t.key}
                    title={
                      <span className="d-inline-flex align-items-center gap-2">
                        {t.icon}
                        {t.label}
                      </span>
                    }
                  >
                    <div className="pt-3">{tabContent[t.key]}</div>
                  </Tab>
                ))}
              </Tabs> */}

                <Button
                  variant="light"
                  className="w-100 border rounded mb-3 d-flex justify-content-between align-items-center"
                  onClick={() => setShowTypeModal(true)}
                >
                  <span className="d-inline-flex align-items-center gap-2">
                    {qrTypes.find((t) => t.key === activeTab)?.icon}
                    {qrTypes.find((t) => t.key === activeTab)?.label}
                  </span>
                  <span className="caret">▾</span>
                </Button>
                
                <Modal show={showTypeModal} onHide={() => setShowTypeModal(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Select QR Type</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {qrTypes.map((t) => (
                      <Button
                        key={t.key}
                        variant={t.key === activeTab ? "primary" : "light"}
                        className="w-100 d-flex align-items-center justify-content-start gap-2 mb-2"
                        onClick={() => {
                          setActiveTab(t.key);
                          setQrType(t.key);
                          setShowTypeModal(false); // close after selection
                        }}
                      >
                        {t.icon}
                        {t.label}
                      </Button>
                    ))}
                  </Modal.Body>
                </Modal>
                {tabContent[activeTab]}
                <Button variant="primary" className="w-100 rounded-pill mt-3">
                  Download QR
                </Button>
              </>
            )}

            {/* Design step */}
            {mobileStep === "design" && (
              <>
                <Tabs defaultActiveKey="frame" className="mb-3">
                  <Tab eventKey="frame" title="Frame">
                    {/* Frame Selection */}
                    <div className="d-flex gap-3 overflow-auto pb-2 mb-3">
                      <div>
                        {/* Frame Selector Grid */}
                        <div
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                            overflowX: "auto",
                          }}
                        >
                          {frameOptions1.map((frame, idx) => (
                            <div
                              key={idx}
                              role="button"
                              className={`border rounded text-center p-2 ${
                                selectedFrameIndex === idx
                                  ? "border-primary bg-light"
                                  : ""
                              }`}
                              style={{
                                width: 130,
                                height: 150,
                                flex: "0 0 auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                cursor: "pointer",
                              }}
                              onClick={() => setSelectedFrameIndex(idx)}
                            >
                              {/* Frame Preview */}
                              {frame.image ? (
                                <img
                                  src={frame.image}
                                  alt={`Frame ${idx}`}
                                  loading={idx === 0 ? "eager" : "lazy"}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                    position: "absolute", // Frame at bottom
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                  }}
                                />
                              ) : (
                                <span></span>
                              )}

                              {/* QR Overlay */}
{qr && frame.slot && (
  <img
    src={qr}
    alt="QR Code Preview"
    style={{
      position: "absolute",
      objectFit: "contain",
      zIndex: 2,
      pointerEvents: "none",
      top: `${frame.slot.top}%`,
      left: `${frame.slot.left}%`,
      width: `${frame.slot.width}%`,
      height: `${frame.slot.height}%`,
    }}
  />
)}

                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Frame Settings */}
                    <div className="bg-light p-3 rounded">
                      <div className="mb-3">
                        <label className="form-label fw-bold">Text</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Scan me!"
                          value={frameText}
                          onChange={(e) => setFrameText(e.target.value)}
                        />
                      </div>

                      <Row className="g-3">
                        <Col md={4}>
                          <label className="form-control fw-bold">
                            Text color
                            <input
                              type="color"
                              className="form-control-color ms-2"
                              value={textColor}
                              onChange={(e) => setTextColor(e.target.value)}
                            />
                          </label>
                        </Col>
                        <Col md={4}>
                          <label className="form-control fw-bold">
                            Colour
                            <input
                              type="color"
                              className="form-control-color ms-2"
                              value={qrColor}
                              onChange={(e) => setQrColor(e.target.value)}
                            />
                          </label>
                        </Col>
                        <Col md={4}>
                          <label className="form-control fw-bold">
                            Background colour
                            <input
                              type="color"
                              className="form-control-color ms-2"
                              value={bgColor}
                              onChange={(e) => setBgColor(e.target.value)}
                            />
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="shape" title="Shape">
                    <div className="mt-4">
                      {/* Shape Style Section */}
                      <div className="border rounded p-3 mb-4">
                        <h5 className="fw-bold mb-3">Shape style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(8)].map((_, i) => (
                            <button
                              key={`shape-${i + 1}`} // ✅ clearer, more explicit
                              className="btn btn-light border p-2"
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "contain",
                              }}
                            >
                              <img
                                src={`/shapes/shape${i + 1}.png`}
                                alt={`Shape ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <label className="form-label">
                              Border colour
                              <input
                                type="color"
                                className="form-control form-control-color"
                                defaultValue="#000000"
                              />
                            </label>
                          </div>
                          <div>
                            <label className="form-label">
                              Background colour
                              <input
                                type="color"
                                className="form-control form-control-color"
                                defaultValue="#FFFFFF"
                              />
                            </label>
                          </div>
                          <button className="btn btn-outline-primary mt-4">
                            Invert
                          </button>
                        </div>
                      </div>

                      {/* Border & Center Style Section */}
                      <div className="border rounded p-3">
                        <h5 className="fw-bold mb-3">Border style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(10)].map((_, i) => (
                            <button
                              key={`border-${i + 1}`} // ✅ key on top-level element
                              className="btn btn-light border p-2"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                src={`/borders/border${i + 1}.png`}
                                alt={`Border ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <h5 className="fw-bold mb-3">Center style</h5>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {[...Array(10)].map((_, i) => (
                            <button
                              key={`center-${i + 1}`} // ✅ better than just `i`
                              className="btn btn-light border p-2"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                src={`/centers/center${i + 1}.png`}
                                alt={`Center ${i + 1}`}
                                className="img-fluid"
                              />
                            </button>
                          ))}
                        </div>
                        <br />
                        <div className="d-flex gap-3 align-items-center">
                          <div>
                            <label className="form-label">Border colour</label>
                            <input
                              type="color"
                              className="form-control form-control-color"
                              defaultValue="#000000"
                            />
                          </div>
                          <div>
                            <label className="form-label">
                              Background colour
                            </label>
                            <input
                              type="color"
                              className="form-control form-control-color"
                              defaultValue="#000000"
                            />
                          </div>
                          <button className="btn btn-outline-primary mt-4">
                            Invert
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="logo" title="Logo">
                    <div className="p-3">
                      <h6 className="mb-3 fw-bold">Select a logo</h6>

                      {/* Logo options */}
                      <div
                        className="d-flex gap-3 overflow-auto mb-3 pb-2"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RxValueNone className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <SiWhatsapp className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RiLink className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <CiLocationOn className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaWifi className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <SlCalender className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <TfiEmail className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <RiQrScan2Line className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <GrGallery className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <MdDinnerDining className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaQrcode className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaPaypal className="LoGo_122" />
                        </div>
                        <div
                          role="button"
                          className="border rounded p-2 text-center"
                        >
                          <FaBitcoin className="LoGo_122" />
                        </div>
                      </div>

                      {/* Upload logo */}
                      <div className="border rounded p-3 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="level" title="Level">
                    <div className="mt-3">
                      <h6 className="fw-bold mb-3">Select a level</h6>
                      <div className="d-flex gap-4 flex-wrap">
                        {[
                          {
                            name: "Level Q",
                            percent: "25%",
                            img: "your-q-image.png",
                          },
                          {
                            name: "Level H",
                            percent: "30%",
                            img: "your-h-image.png",
                          },
                          {
                            name: "Level M",
                            percent: "15%",
                            img: "your-m-image.png",
                          },
                          {
                            name: "Level L",
                            percent: "7%",
                            img: "your-l-image.png",
                          },
                        ].map((level) => (
                          <div
                            key={level.name} // ✅ better: unique & stable
                            role="button"
                            onClick={() => setSelectedLevel(level.name)}
                            className={`border rounded p-2 text-center ${
                              selectedLevel === level.name
                                ? "border-primary bg-light"
                                : ""
                            }`}
                            style={{
                              cursor: "pointer",
                              width: "auto",
                              height: "100px",
                            }}
                          >
                            <img
                              src={level.img}
                              alt={level.name}
                              className="img-fluid"
                              style={{ width: "80px", height: "80px" }}
                            />
                            <div className="mt-2 small fw-semibold">
                              {level.name}
                            </div>
                            <div className="text-muted">{level.percent}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab>
                </Tabs>

                {/* <div className="bg-light p-2 rounded">
                  <div className="mb-2">
                    <label className="form-label fw-bold">Text</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Scan me!"
                      value={frameText}
                      onChange={(e) => setFrameText(e.target.value)}
                    />
                  </div>
                  <Row className="g-2">
                    <Col xs={4}>
                      <label className="form-control fw-bold">
                        Text
                        <input
                          type="color"
                          className="form-control-color ms-2"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                        />
                      </label>
                    </Col>
                    <Col xs={4}>
                      <label className="form-control fw-bold">
                        Colour
                        <input
                          type="color"
                          className="form-control-color ms-2"
                          value={qrColor}
                          onChange={(e) => setQrColor(e.target.value)}
                        />
                      </label>
                    </Col>
                    <Col xs={4}>
                      <label className="form-control fw-bold">
                        BG
                        <input
                          type="color"
                          className="form-control-color ms-2"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                        />
                      </label>
                    </Col>
                  </Row>
                </div> */}

                <Button variant="primary" className="w-100 rounded-pill mt-3">
                  Download QR
                </Button>
              </>
            )}
          </div>
        </Container>

        {/* modal for mobile type selection */}
        {/* <Modal
          show={showTypeModal}
          onHide={() => setShowTypeModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Select a QR type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {qrTypes.map((t) => (
                <ListGroup.Item
                  key={`qr-${t.key}`} // ✅ scoped, descriptive key
                  action
                  onClick={() => {
                    setActiveTab(t.key);
                    setShowTypeModal(false);
                  }}
                >
                  <span className="d-inline-flex align-items-center gap-2">
                    {t.icon}
                    {t.label}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Modal.Body>
        </Modal> */}
      </div>

      <div className="py-5 text-center bg-white">
        <Container>
          <h1 className="fw-bold">
            QR Code Generator: Create your Free QR Code
          </h1>
          <p className="text-muted mb-5">
            Customize it with your color, shape and logo in 3 simple steps.
          </p>
          <h2 className="fw-semibold mb-5">How to create a QR code?</h2>

          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <div className="d-flex flex-column align-items-center px-3">
                <img
                  src={step1}
                  alt="Step 2"
                  loading="lazy"
                  className="img-fluid h-auto w-auto mb-3"
                />
                <h3 className="fw-bold">Choose the content of your QR code</h3>
                <p className="text-muted">
                  Select from a wide variety of options: PDF, menu, video,
                  business cards, web, apps, etc.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-column align-items-center px-3">
                <img
                  src={step2}
                  alt="Step 2"
                  loading="lazy"
                  className="img-fluid h-auto w-auto mb-3"
                />
                <h3 className="fw-bold">Customize and design it to measure</h3>
                <p className="text-muted">
                  Fill in all the information and use our design tool to make
                  your QR unique.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-column align-items-center px-3">
                <img
                  src={step3}
                  alt="Step 2"
                  loading="lazy"
                  className="img-fluid h-auto w-auto mb-3"
                />
                <h3 className="fw-bold">Download your QR code</h3>
                <p className="text-muted">
                  Get your QR code in different formats (pdf, png, svg), print
                  it or show it in a digital format and voila!
                </p>
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <Button
              variant="primary"
              size="lg"
              className="px-4 py-2 fw-semibold rounded-pill"
            >
              Create QR code
            </Button>
          </div>
        </Container>
      </div>

      {/* Generate different types of QR Codes */}

      <Container className="my-5">
        <h2 className="fw-bold text-center mb-4">
          Generate different types of QR Codes
        </h2>
        <p className="text-center text-muted mb-5">
          QR codes can hold a large amount of content and at QRFY, we offer them
          all.
        </p>
      </Container>

      {/* Your all-in-one marketing platform */}

      <Container className="py-5 text-center">
        <h2 className="mb-5 fw-bold">Your all-in-one marketing platform</h2>
        <Row className="g-4">
          {features.map((feat) => (
            <Col key={feat.title} xs={12} sm={6} md={4} lg={4}>
              <Card className="h-100 feature-card">
                <Card.Body>
                  <div className="icon-box hover-icon mb-3 mx-auto">
                    {feat.icon}
                  </div>
                  <Card.Title className="fw-semibold">{feat.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {feat.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Col xs={12} sm={6} md={4} lg={4}>
            <PixelIntegrationCard />
          </Col>
        </Row>

        <div className="mt-5">
          <Button variant="primary" size="lg">
            Create QR code
          </Button>
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
            {/* Left button with aria-label */}
            <button
              onClick={() => scroll("left")}
              className="arrow-btn"
              aria-label="Scroll left"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <div className="slider-container" ref={sliderRef}>
              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_1}
                  alt="Business card with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  {/* Changed to h2 for correct heading hierarchy */}
                  <Card.Title as="h2">Business cards</Card.Title>
                  <Card.Text className="text-muted">
                    Turn your card into an interactive tool by adding a QR code
                    that connects clients and employers with your work, social
                    networks and contact information.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Business cards"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_2}
                  alt="Pamphlet with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Pamphlets</Card.Title>
                  <Card.Text className="text-muted">
                    Expand the printed information on your pamphlets with a QR
                    code, offering interactive content and measuring its reach
                    in real time.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Pamphlets"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_3}
                  alt="Brochure with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Brochures</Card.Title>
                  <Card.Text className="text-muted">
                    Complement the content of your brochures by adding a QR code
                    that provides access to multimedia content such as videos
                    and online documents.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Brochures"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_6}
                  alt="Bottle with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Bottles and cans</Card.Title>
                  <Card.Text className="text-muted">
                    Turn your packaging into smart labels with a QR code that
                    offers access to information about origin, ingredients and
                    exclusive promotions.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Bottles and cans"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_5}
                  alt="Product packaging with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Product packaging</Card.Title>
                  <Card.Text className="text-muted">
                    Reduce the text on your packaging and provide access to key
                    information, exclusive discounts and social media through a
                    simple scan.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Product packaging"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_4}
                  alt="Menu with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Menu</Card.Title>
                  <Card.Text className="text-muted">
                    Keep your menu up to date with a QR code. Forget about
                    reprints and make it easy for your diners to access
                    interactive options.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Menu"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>
            </div>

            {/* Right button with aria-label */}
            <button
              onClick={() => scroll("right")}
              className="arrow-btn"
              aria-label="Scroll right"
            >
              <FaArrowRight aria-hidden="true" />
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

      <div className="container text-center py-5">
        {/* Header */}
        <p className="text-primary fw-bold">QR CODES FOR</p>
        <h2 className="fw-bold">
          Explore our extensive collection of QR codes
        </h2>
        <p className="text-muted">
          QR codes can contain a wide range of content and at QRFY we offer them
          all.
        </p>

        {/* Desktop View (Split Layout) */}
        <div className="d-none d-md-flex justify-content-center mt-4">
          <div className="card shadow-lg border-0 w-100">
            <div className="row Img_Slide g-0 align-items-center">
              {/* Text Side */}
              <div className="col-md-4 p-5 Img_Slide_1 text-start text-white rounded-start">
                <h4>{content[activeKey].title}</h4>
                <button className="btn mt-3">
                  {content[activeKey].button}
                </button>
              </div>
              {/* Image Side */}
              <div className="col-md-8">
                <img
                  src={content[activeKey].img}
                  className="img-fluid rounded-end"
                  alt="QR showcase"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View (Card Slider) */}
        <div className="d-block d-md-none mt-4">
          <div
            id="qrCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {Object.keys(content).map((key, index) => (
                <div
                  key={key}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div
                    className="card text-white text-center shadow-lg border-0 rounded"
                    style={{
                      backgroundImage: `url(${content[key].img})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className="card-body d-flex flex-column justify-content-end p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      }}
                    >
                      <h5 className="fw-bold">{content[key].title}</h5>
                      <button className="btn btn-light mt-3">
                        {content[key].button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Tabs (Desktop only) */}
        <div className="d-none d-md-flex justify-content-center mt-4">
          <ul className="nav nav-tabs flex-wrap">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeKey === "wedding" ? "active" : ""
                }`}
                onClick={() => setActiveKey("wedding")}
              >
                QR code for weddings
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeKey === "ngo" ? "active" : ""}`}
                onClick={() => setActiveKey("ngo")}
              >
                QR code for NGOs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeKey === "photographer" ? "active" : ""
                }`}
                onClick={() => setActiveKey("photographer")}
              >
                QR code for Photographers
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Everything you need to know to get started */}

      <div className="container py-5 mb-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-12">
            <h1>Everything you need to know to get started</h1>
          </div>
          <div className="col-md-5">
            <p>
              In this section you will find the basic concepts and the necessary
              steps to start enjoying the benefits of using QR.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 img_10_png">
            <img
              src={img_10}
              alt="QR code"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-md-4">
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
                    The term “QR” stands for “quick response” and refers to
                    instant access to the information contained in the Code. It
                    is, in short, the evolution of the barcode, made up of
                    patterns of black and white pixels. Denso Wave, a Japanese
                    subsidiary of Toyota Denso, developed them in order to mark
                    the components of their cars and thus speed up logistics in
                    their production. Currently, it has gained great popularity,
                    due to its versatility and accessibility, thanks to the
                    functions of smart phones.
                    <a
                      href="https://en.wikipedia.org/wiki/QR_code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about QR codes
                    </a>
                    .
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
                    You will have noticed that more and more companies choose to
                    include QR, as a fundamental resource for the marketing and
                    commercialization of their products and services. Its
                    growing popularity is due to the multiplicity of uses that
                    you can give it: to receive payments from your clients,
                    share links to web pages, catalogs and price lists, receive
                    comments on your products or services, invite the client to
                    share images or videos , promote your business events and
                    much more, with just a scan!
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
                    Many devices already have a built-in QR code reader. In this
                    case, all you have to do is open the camera on your mobile
                    phone and hold it over a code for a few seconds, until a
                    notification appears on the screen. In case this does not
                    happen, go to settings to check that QR scanning is enabled.
                    If you don't have the feature, just download and install a
                    QR code reader from your app store.
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
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body mt-4">
                <h3 className="card-title mb-1">Donald Jackman</h3>
                <p className="text-muted mb-3">Content Creator</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
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
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body mt-4">
                <h3 className="card-title mb-1">Richard Nelson</h3>
                <p className="text-muted mb-3">Instagram Influencer</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
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
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body mt-4">
                <h3 className="card-title mb-1">James Washington</h3>
                <p className="text-muted mb-3">Marketing Manager</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
                <div className="d-flex justify-content-center pt-2">
                  <StarIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h1>Do not leave with doubt</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
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
                    It is a tool that allows you to generate different types of
                    QR codes, in an easy and intuitive way. The rise of QR codes
                    has made our QR code generator sought after and required by
                    many people and businesses, with businesses of all kinds:
                    you can use our QR code generator to create QR codes for
                    your website, share a PDF, a photo gallery, a playlist, a
                    price list or menu, connect your customers with a service
                    available in your business (WiFi network, attention, shifts,
                    payments, etc.),advertise shows or other events on public
                    roads through the link to the trailer or trailer, create a
                    vCard with contact information and share it with your
                    customers, and much more.
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
                    Our qr code generator has a free trial version for seven
                    days: the QR codes you generate are yours forever. From
                    there, if you are satisfied with the product, you can access
                    the plan that best suits your needs. By contracting the
                    service, you will have unlimited access to all the
                    functions: unlimited dynamic and editable QR creation, all
                    the variety of QR types, QR editing and management,
                    unlimited scans, complete analytics of your QRs and a
                    variety of download formats.
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
                    Of course, the first seven days are on us so you can try our
                    QR code generator for free.
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
                    All the QR codes that are generated with QRFY host the
                    information on our servers such as PDF documents, Videos,
                    Images and have a cost for that reason they are not free.
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
                    Can a generate QR codes be used for commercial purposes?
                  </button>
                </h2>
                <div
                  id="collapseFive1"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#qrAccordion1"
                >
                  <div className="accordion-body">
                    The use of QR codes is today part of the marketing strategy
                    of many companies. Do not hesitate: use the codes you
                    generate on our platform to renew, give visibility and
                    dynamism to your business.
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
                    QR codes can store a wide variety of information, adapting
                    to what you need, since the URL can redirect the user to the
                    type of content you want with just a scan: a website, a PDF,
                    a photo gallery, a playlist, price lists, menus, technical
                    service, WiFi network, shift platform, payment links,
                    videos, contact information, etc. The possibilities are
                    limitless.
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
                    Yes. If you sign up for a plan, you can track the number of
                    scans your QR codes receive. This way you will be able to
                    observe the progress of your campaigns and even make the
                    necessary adjustments to improve or expand them.
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
                    QR codes do not have an expiration date. They will only stop
                    working if you change or remove the link. However, you have
                    the option to create dynamic codes, so you can replace the
                    content or links when you need to.
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
                    Static QR codes are those that cannot be edited and their
                    scans cannot be tracked. On the other hand, dynamic codes
                    allow you to make changes even after they have been
                    generated: update their content, change their aesthetics,
                    modify links and correct various types of errors. The latter
                    also allow you to track the number of scans.
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
                    Of course. When you have signed up for one of our plans, you
                    can manage your QR codes as you wish: create, design, save,
                    delete or modify your codes as you wish, add logos, frames,
                    generate a domain, save your favorite designs, edit URLs And
                    many other things.
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
            <img
              src={img_11}
              alt="QR Code"
              className="QR_12"
              width="200"
              height="200"
              loading="lazy"
            />
          </div>
          <div className="col-md-4 py-5">
            <h1>Want to know more?</h1>
            <p>
              Check our FAQs to find an answer to any questions you may have
              about our QR codes.
            </p>
            <button className="btn btn-primary rounded-5 ">
              Answer all your question
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer
        className="w-100 text-white"
        style={{ background: "linear-gradient(to bottom, #1B004D, #2E0A6F)" }}
      >
        <div className="container py-5 d-flex flex-column align-items-center">
          <div className="mb-4">
            <img
              src="/src/assets/logo.jpg"
              alt="QRFY Logo"
              width={120}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-center text-sm" style={{ maxWidth: "600px" }}>
            Empowering creators worldwide with the most advanced AI content
            creation tools. Transform your ideas into reality.
          </p>
        </div>

        <div className="border-top" style={{ borderColor: "#3B1A7A" }}>
          <div className="container py-3 text-center text-sm">
            <a
              href="https://prebuiltui.com"
              className="text-white text-decoration-none"
            >
              QRFY
            </a>
            ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default QRGenerator;
