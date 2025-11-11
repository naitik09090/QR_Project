import React from "react";
import { useState } from "react";
// import React from "react";
import { Container } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import step1 from "../assets/step1.webp";
import step2 from "../assets/step2.webp";
import step3 from "../assets/step3.webp";
// import img2 from "../assets/Google.png";
import { TfiWorld } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
// FaRegImage
// import { FaRegFilePdf } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
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
// import { FaChartLine } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";
// import { FaQrcode } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FaFileDownload } from "react-icons/fa";
// import { FaMagic } from "react-icons/fa";
// import { FaBarcode } from "react-icons/fa";
// import { FaDownload } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";

// import qr_image_1 from "../assets/qr_image_1.png";
// import qr_image_2 from "../assets/qr_image_2.png";
// import qr_image_3 from "../assets/qr_image_3.png";
// import qr_image_4 from "../assets/qr_image_4.png";
// import qr_image_5 from "../assets/qr_image_5.png";
// import qr_image_6 from "../assets/qr_image_6.png";
// import img_7 from "../assets/img_7.png";
// import img_8 from "../assets/img_8.png";
// import img_9 from "../assets/img_9.png";
import img_10 from "../assets/img_10.webp";
import img_11 from "../assets/img11.webp";
// import img1 from "../assets/logo.jpg";
import { Link, Whatsapp } from "react-bootstrap-icons";
// import { useSearchParams } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
// import { RxValueNone } from "react-icons/rx";
// import { SiWhatsapp } from "react-icons/si";
// import { RiLink } from "react-icons/ri";
// import { CiLocationOn } from "react-icons/ci";
// import { SlCalender } from "react-icons/sl";
// import { TfiEmail } from "react-icons/tfi";
// import { RiQrScan2Line } from "react-icons/ri";
// import { GrGallery } from "react-icons/gr";
// import { MdDinnerDining } from "react-icons/md";
// import { FaPaypal } from "react-icons/fa";
// import { FaBitcoin } from "react-icons/fa";
// import { MdOutlineHideSource } from "react-icons/md";
import null_1 from "../assets/null1.webp";
import frame_1 from "../assets/frame_1.png";
import frame_2 from "../assets/frame_2.png";
import frame_3 from "../assets/frame_3.png";
import frame_4 from "../assets/frame_4.png";
import frame_5 from "../assets/frame_5.png";
import frame_6 from "../assets/frame_6.png";
import frame_7 from "../assets/frame_7.png";
import logo from "../assets/logo.webp";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";

// import QR_1 from "../assets/QR_1.webp";
// import Text_QR from "../assets/Text_QR.png";
// import Email_QR from "../assets/Email_QR.png";
// import VCard_QR from "../assets/VCard_QR.png";
// import WIFI_QR from "../assets/WIFI_QR.png";
// import Whatsapp_QR from "../assets/Whatsapp_QR.png";
// import SMS_QR from "../assets/SMS_QR.png";

import QR_1 from "../assets/QR_MAin.png";
import Text_QR from "../assets/QR_MAin.png";
import Email_QR from "../assets/QR_MAin.png";
import VCard_QR from "../assets/QR_MAin.png";
import WIFI_QR from "../assets/QR_MAin.png";
import Whatsapp_QR from "../assets/QR_MAin.png";
import SMS_QR from "../assets/QR_MAin.png";

// const [qrImages1, setQrImages1] = useState({});

// const [activeTab, setActiveTab] = useState("wedding");
const QRGenerator = ({ country }) => {
  const [activeTab, setActiveTab] = useState("website"),
    [showTypeModal, setShowTypeModal] = useState(!1),
    [showContact, setShowContact] = useState(!1),
    [showLocation, setShowLocation] = useState(!1),
    [showCompany, setShowCompany] = useState(!1),
    [website, setWebsite] = useState(""),
    [phone, setPhone] = useState(""),
    [message, setMessage] = useState(""),
    [text2, setText2] = useState(""),
    [fname, setFname] = useState(""),
    [lname, setLname] = useState(""),
    [email, setEmail] = useState(""),
    [phone1, setPhone1] = useState(""),
    [phone2, setPhone2] = useState(""),
    [message2, setMessage2] = useState(""),
    [email1, setEmail1] = useState(""),
    [subject, setSubject] = useState(""),
    [body, setBody] = useState(""),
    [ssid, setSsid] = useState(""),
    [password, setPassword] = useState(""),
    [hidden, setHidden] = useState("");

  const URL = "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net";

  const tabContent = {
    website: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted text-start no-delay">
                Enter your website URL
              </b>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Enter your Website"
                className="custom-input"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </>
    ),
    text: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold">Complete the content</h4>
            </div>

            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">
                Type any text you want to encode into a QR code.
              </b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                className="custom-input"
                placeholder="Enter your text here"
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
          </div>
        </div>
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>

            <Form>
              {/* Name and Surname */}
              <Row className="mb-3">
                <Col>
                  <Form.Group className="py-2">
                    <b className="text-muted mb-2">Name *</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="E.g. Paul"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="py-2">
                    <b className="text-muted">Surname</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="E.g. Jones"
                      onChange={(e) => setLname(e.target.value)}
                    />
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
                  <Form.Group className="py-2">
                    <b className="text-muted">Phone</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="tel"
                      placeholder="E.g. +123456789"
                      className="custom-input"
                      value={phone1}
                      onChange={(e) => setPhone1(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <b className="text-muted">Email</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="E.g. name@email.com"
                      className="custom-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <b className="text-muted">Personal website</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="url"
                      placeholder="https://..."
                      className="custom-input"
                    />
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
                  {/* Responsive buttons row */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <Button variant="outline-primary">Complete</Button>
                    <Button variant="outline-secondary" disabled>
                      Url
                    </Button>
                    <Button variant="outline-secondary" disabled>
                      Coordinates
                    </Button>
                  </div>

                  {/* Responsive form row */}
                  <Row className="g-2 mb-3">
                    <Col xs={12} md>
                      <Form.Control
                        placeholder="Search address"
                        className="custom-input"
                      />
                    </Col>
                    <Col xs={12} md="auto">
                      <Button
                        variant="outline-primary"
                        className="w-100 h-100 rounded-3"
                      >
                        Manual entry
                      </Button>
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
                      <Form.Group className="py-2">
                        <b className="text-muted">Company</b>
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="E.g. Company LLC"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="py-2">
                        <b className="text-muted">Title</b>
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="E.g. Your profession/position"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Collapse>
            </Form>
          </div>
        </div>
      </>
    ),

    whatsapp: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Number</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setPhone2(e.target.value)}
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input"
                onChange={(e) => setMessage2(e.target.value)}
              />
            </div>
          </div>
        </div>
      </>
    ),
    email: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Email</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setEmail1(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Subject</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input"
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </>
    ),
    sms: (
      <>
        <div className="container">
          <div className="">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted text-start no-delay">Number</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your number here"
                className="custom-input mb-3"
                onChange={(e) => setPhone(e.target.value)} // ✅ setPhone
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-1">Complete the content</h4>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-md-4 col-sm-6">
                <label className="form-label fw-bold text-muted">
                  Network name (SSID)*
                </label>
                <input
                  type="text"
                  placeholder="E.g. HomeWifi"
                  className="custom-input"
                  required
                  value={ssid}
                  onChange={(e) => setSsid(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold text-muted">
                  Network password
                </label>
                <input
                  type="text"
                  placeholder="E.g. Mypassword"
                  className="custom-input"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-2 align-items-center">
              <div className="col-md-4 col-sm-6">
                <label className="form-label fw-bold text-muted">
                  Security
                </label>
                <select className="custom-input">
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
                    checked={hidden}
                    onChange={(e) => setHidden(e.target.checked)}
                  />
                  <label
                    htmlFor="hiddenNetwork"
                    className="form-check-label fw-bold text-muted"
                  >
                    Hidden Network
                  </label>
                </div>
              </div>
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

  // const [activeTabKey, setActiveTabKey] = useState("website");

  const handleDownload = (qrUrl, name = "my-qr-code.png") => {
    if (!qrUrl) {
      alert("Please generate the QR code first!");
      return;
    }

    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  // const handleShare = async () => {
  //   if (!qrCode) {
  //     alert("Please generate a QR code first!");
  //     return;
  //   }

  //   try {
  //     // Try to create shareable file
  //     const img = new Image();
  //     img.crossOrigin = "anonymous";
  //     img.src = qrCode;
  //     await new Promise((resolve, reject) => {
  //       img.onload = resolve;
  //       img.onerror = reject;
  //     });

  //     const canvas = document.createElement("canvas");
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     const ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);

  //     const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  //     const file = new File([blob], "my-qr-code.png", { type: "image/png" });

  //     if (navigator.canShare && navigator.canShare({ files: [file] })) {
  //       await navigator.share({
  //         files: [file],
  //         title: "My QR Code",
  //         text: "Here’s my QR code!",
  //       });
  //     } else if (navigator.share) {
  //       // Fallback: share the link instead
  //       await navigator.share({
  //         title: "My QR Code",
  //         text: "Scan this QR code or open this link:",
  //         url: qrCode,
  //       });
  //     } else {
  //       // Final fallback: download
  //       const link = document.createElement("a");
  //       link.href = qrCode;
  //       link.download = "my-qr-code.png";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   } catch (error) {
  //     console.error("Error sharing QR code:", error);
  //   }
  // };




  //   link = document.createElement("link");
  // (link.href = "../assets/logo.jpeg"), document.head.appendChild(link);


  const handleShare = async () => {
    if (!qrCode) {
      alert("Please generate a QR code first!");
      return;
    }

    // If browser supports share and we just send link -> always works
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My QR Code",
          text: "Scan this QR code or open this link:",
          url: qrCode,
        });
        return;
      } catch (err) {
        console.error("Share link failed:", err);
      }
    }

    // fallback to download
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "my-qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


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
    {
      key: "scooter",
      image: frame_6,
      slot: { top: 24, left: 21, width: 58, height: 50 },
    },
    {
      key: "alt",
      image: frame_2,
      slot: { top: 0, left: 10, width: 80, height: 80 },
    },
  ],
    DEFAULT_SLOT = { top: 20, left: 20, width: 60, height: 60 },
    QUIET_ZONE_PCT = 3;

  const [selectedFrameIndex] = useState(0),
    selectedFrame = frameOptions[selectedFrameIndex] || frameOptions[0],
    slot = selectedFrame?.slot || DEFAULT_SLOT,
    qrTypes = [
      { key: "website", icon: <TfiWorld />, label: "Website" },
      { key: "text", icon: <FaRegEdit />, label: "Text" },
      { key: "vcard", icon: <RiUserAddLine />, label: "vCard" },
      { key: "wifi", icon: <FaWifi />, label: "Wi-Fi" },
      { key: "whatsapp", icon: <Whatsapp />, label: "whatsapp" },
      { key: "email", icon: <MdEmail />, label: "email" },
      { key: "sms", icon: <BsChatDotsFill />, label: "SMS" },
    ],
    [mobileStep, setMobileStep] = useState("content"),
    qrImages = {
      website: QR_1,
      text: Text_QR,
      email: Email_QR,
      vcard: VCard_QR,
      wifi: WIFI_QR,
      whatsapp: Whatsapp_QR,
      sms: SMS_QR,
    };

  const [qrCode, setQrCode] = useState(qrImages.website);
  const [qrSMS, setQrSMS] = useState(qrImages.sms);
  const [qrText, setQrText] = useState(qrImages.text);
  const [qrVcard, setQrVcard] = useState(qrImages.vcard);
  const [qrWifi, setQrWifi] = useState(qrImages.wifi);
  const [qrWhatsapp, setQrWhatsapp] = useState(qrImages.whatsapp);
  const [qrEmail, setQrEmail] = useState(qrImages.email);

  const [qrColor, setQrColor] = useState("#000000"),
    [bgColor, setBgColor] = useState("#FFFFFF"),
    generateQr = async () => {
      if (!website || "" === website.trim()) {
        alert("URL is required");
        return;
      }
      try {
        let r = await fetch(
          `${URL}/api/qr-codes/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Example Website",
              qr_type: "url",
              content: { url: website },
              size: 10,
              border: 4,
              format: "png",
              fill_color: qrColor,
              back_color: bgColor,
            }),
          }
        ),
          e = await r.text(),
          t;
        try {
          t = JSON.parse(e);
        } catch {
          throw (
            (console.error("Server returned non-JSON:", e),
              Error("Server error: " + r.status))
          );
        }
        if (!r.ok)
          throw (
            (console.log("API raw result:", t),
              Error(t.message || "Failed to generate QR code"))
          );
        const a = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
        setQrCode(a);
        // handleShare(o);
      } catch (a) {
        console.error("Error generating QR:", a);
      }
    };

  const TextQr = async () => {
    if (!text2 || "" === text2.trim()) {
      alert("Text is required");
      return;
    }
    try {
      let e = await fetch(
        `${URL}/api/qr-codes/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Important Note",
            qr_type: "text",
            content: { text: text2 },
            format: "png",
            fill_color: qrColor,
            back_color: bgColor,
          }),
        }
      ),
        r = await e.text(),
        t;
      try {
        t = JSON.parse(r);
      } catch {
        throw (
          (console.error("Server returned non-JSON:", r),
            Error("Server error: " + e.status))
        );
      }
      if (!e.ok)
        throw (
          (console.log("API raw result:", t),
            Error(t.message || "Failed to generate QR code"))
        );
      const a = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
      console.log("✅ Final SMS QR URL:", a),
        setQrText(a);
      // handleDownload(a);
    } catch (i) {
      console.error("Error generating SMS QR:", i);
    }
  },
    VCardQr = async () => {
      if (!fname || "" === fname.trim()) {
        alert("name is required");
        return;
      }
      if (!lname || "" === lname.trim()) {
        alert("surname is required");
        return;
      }
      if (!phone1 || "" === phone1.trim()) {
        alert("phone is required");
        return;
      }
      if (!email || "" === email.trim()) {
        alert("email is required");
        return;
      }
      try {
        let e = await fetch(
          `${URL}/api/qr-codes/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Business Card",
              qr_type: "vcard",
              content: {
                first_name: fname,
                last_name: lname,
                phone: phone,
                email: email,
                website: website,
              },
              format: "png",
              fill_color: qrColor,
              back_color: bgColor,
            }),
          }
        ),
          r = await e.text(),
          t;
        try {
          t = JSON.parse(r);
        } catch {
          throw (
            (console.error("Server returned non-JSON:", r),
              Error("Server error: " + e.status))
          );
        }
        if (!e.ok)
          throw (
            (console.log("API raw result:", t),
              Error(t.message || "Failed to generate QR code"))
          );
        const a = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
        console.log("✅ Final SMS QR URL:", a),
          setQrVcard(a);
      } catch (i) {
        console.error("Error generating SMS QR:", i);
      }
    };
  const WifiQr = async () => {
    if (!ssid || "" === ssid.trim()) {
      alert("SSID is required");
      return;
    }
    if (!password || "" === password.trim()) {
      alert("Password is required");
      return;
    }
    if (null == hidden) {
      alert("Hidden value is required");
      return;
    }
    try {
      let e = await fetch(
        `${URL}/api/qr-codes/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Office WiFi",
            qr_type: "wifi",
            content: {
              ssid: ssid,
              password: password,
              security: "WPA",
              hidden: "true" === hidden || !0 === hidden,
            },
            description: "Guest WiFi Access",
            format: "png",
            size: 10,
            border: 4,
            fill_color: qrColor,
            back_color: bgColor,
          }),
        }
      ),
        r = await e.text(),
        t;
      try {
        t = JSON.parse(r);
      } catch {
        throw (
          (console.error("Server returned non-JSON:", r),
            Error("Server error: " + e.status))
        );
      }
      if (!e.ok)
        throw (
          (console.log("API raw result:", t),
            Error(t.message || "Failed to generate QR code"))
        );
      const i = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
      console.log("✅ Final WiFi QR URL:", i),
        setQrWifi(i);
    } catch (a) {
      console.error("Error generating WiFi QR:", a);
    }
  },
    whatsappQr = async () => {
      if (!phone2 || "" === phone2.trim()) {
        alert("Phone number is required");
        return;
      }
      if (!message2 || "" === message2.trim()) {
        alert("Message is required");
        return;
      }
      try {
        let e = await fetch(
          `${URL}/api/qr-codes/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "WhatsApp Message",
              qr_type: "whatsapp",
              content: { phone: phone2, message: message2 },
              format: "png",
              fill_color: qrColor,
              back_color: bgColor,
            }),
          }
        ),
          r = await e.text(),
          t;
        try {
          t = JSON.parse(r);
        } catch {
          throw (
            (console.error("Server returned non-JSON:", r),
              Error("Server error: " + e.status))
          );
        }
        if (!e.ok)
          throw (
            (console.log("API raw result:", t),
              Error(t.message || "Failed to generate QR code"))
          );
        let i = t.data?.qr_image_url || t.qr_image_url;
        console.log("✅ Final SMS QR URL:", i), setQrWhatsapp(i);
      } catch (a) {
        console.error("Error generating SMS QR:", a);
      }
    };

  const emailQr = async () => {
    if (!email1 || "" === email1.trim()) {
      alert("Email is required");
      return;
    }
    let e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e.test(email1)) {
      alert("Please enter a valid email address (e.g. test@example.com)");
      return;
    }
    if (!subject || "" === subject.trim()) {
      alert("Subject is required");
      return;
    }
    if (!body || "" === body.trim()) {
      alert("Body is required");
      return;
    }
    try {
      let r = await fetch(
        `${URL}/api/qr-codes/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Email Us",
            qr_type: "email",
            content: {
              email: email1.trim(),
              subject: subject.trim(),
              body: body.trim(),
            },
            format: "png",
            size: 10,
            border: 4,
            fill_color: qrColor,
            back_color: bgColor,
          }),
        }
      ),
        t = await r.text(),
        i = JSON.parse(t);
      if (!r.ok)
        throw (
          (console.log("API raw result:", i),
            Error(i.message || "Failed to generate QR code"))
        );
      let a = i.data?.qr_image_url || i.qr_image_url;
      console.log("✅ Final Email QR URL:", a), setQrEmail(a);
    } catch (o) {
      console.error("Error generating Email QR:", o);
    }
  },
    SMSQr = async () => {
      if (!phone || "" === phone.trim()) {
        alert("Phone number is required");
        return;
      }
      if (!message || "" === message.trim()) {
        alert("Message is required");
        return;
      }
      try {
        let e = await fetch(
          `${URL}/api/qr-codes/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Text Us",
              qr_type: "sms",
              content: { phone, message },
              format: "png",
              size: 10,
              border: 4,
              fill_color: qrColor,
              back_color: bgColor,
            }),
          }
        ),
          r = await e.text(),
          t = JSON.parse(r);
        if (!e.ok) throw Error(t.message || "Failed to generate QR code");
        let i = t.data?.qr_image_url || t.qr_image_url;
        setQrSMS(i);
      } catch (a) {
        console.error("Error generating SMS QR:", a);
      }
    };

  return (
    <>
      <div className="Buton_2_BG bg-light py-4">
        {/* DESKTOP / LAPTOP (md and up) */}
        <Container className="Buton_1_BG d-none d-md-block">
          <Row>
            {/* Left: tabs + content + design */}
            <Col md={8}>
              <Tabs
                activeKey={activeTab}
                onSelect={(e) => {
                  setActiveTab(e || "website"),
                    "website" === e && setQrCode(qrImages.website),
                    "sms" === e && setQrSMS(qrImages.sms),
                    "text" === e && setQrText(qrImages.text),
                    "vcard" === e && setQrVcard(qrImages.vcard),
                    "wifi" === e && setQrWifi(qrImages.wifi),
                    "whatsapp" === e && setQrWhatsapp(qrImages.whatsapp),
                    "email" === e && setQrEmail(qrImages.email);
                }}
                className="p-2 nn1"
              >
                {qrTypes.map((e) => (
                  <Tab
                    key={e.key}
                    eventKey={e.key}
                    title={
                      <>
                        <span className="p-1">{e.icon}</span>

                        <span className="p-1">{e.label}</span>
                      </>
                    }
                  >
                    <div className="pt-3">{tabContent[e.key]}</div>
                  </Tab>
                ))}
              </Tabs>
              {/* Step 2 – Design your QR (matches your desktop screenshot) */}
              <div className="mt-4 p-3">
                <h4 className="fw-bold mb-3">Design your QR</h4>

                <Tabs defaultActiveKey="frame" className="mb-3">
                  <Tab eventKey="frame">
                    {/* title="Frame" */}
                    {/* Frame Selection */}
                    {/* Frame Selector Grid */}
                    {/* Frame Preview */}
                    {/* QR Overlay */}
                    {/* <div className="d-flex gap-3 overflow-auto pb-2 mb-3">
                            <div>
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
                                    
                                    {frame.image ? (
                                      <img
                                        src={frame.image}
                                        alt={`Frame ${idx}`}
                                        loading="lazy"
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
                                    
                                    {qr && frame.slot && (
                                      <img
                                        src={qr}
                                        alt="QR Code Preview"
                                        fetchPriority="high"
                                        loading="eager"
                                        decoding="async" // non-blocking decode
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
                          </div> */}

                    {/* Frame Settings */}
                    <div>
                      {/* <div className="mb-3">
                              <label className="form-label fw-bold">Text</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Scan me!"
                                value={frameText}
                                onChange={(e) => setFrameText(e.target.value)}
                              />
                            </div> */}
                      <Row className="g-3">
                        { }

                        <div className="container">
                          <div className="row">
                            <div className="col-md-3 mb-2">
                              <b>Color</b>
                            </div>

                            <div className="col-md-3">
                              <b>Background Color</b>
                            </div>

                            <div className="col-md-6"></div>

                            <div className="col-md-3">
                              <input
                                type="color"
                                value={qrColor}
                                className="custom-color"
                                onChange={(e) => setQrColor(e.target.value)}
                              />
                            </div>

                            <div className="col-md-3">
                              <input
                                type="color"
                                value={bgColor}
                                className="custom-color"
                                onChange={(e) => setBgColor(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-12 generate-btn py-4">
                            <button
                              className="btn btn-primary rounded-5"
                              onClick={() => {
                                "sms" === activeTab
                                  ? (console.log("Calling SMSQr..."), SMSQr())
                                  : "website" === activeTab
                                    ? (console.log(
                                      "Calling Website generateQr..."
                                    ),
                                      generateQr())
                                    : "text" === activeTab
                                      ? (console.log("Calling Text generateQr..."),
                                        TextQr())
                                      : "vcard" === activeTab
                                        ? (console.log("Calling VCard generateQr..."),
                                          VCardQr())
                                        : "wifi" === activeTab
                                          ? (console.log("Calling Wifi generateQr..."),
                                            WifiQr())
                                          : "whatsapp" === activeTab
                                            ? (console.log(
                                              "Calling WhatsApp generateQr..."
                                            ),
                                              whatsappQr())
                                            : "email" === activeTab &&
                                            (console.log("Calling Email generateQr..."),
                                              emailQr());
                              }}
                            >
                              Generate QR Code {country?.toLowerCase()}
                            </button>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Tab>

                  {/* Shape Style Section */}
                  {/* Border & Center Style Section */}
                  {/* <Tab eventKey="shape" title="Shape">
                          <div className="mt-4">
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
                                      loading="lazy"
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
                                      loading="lazy"
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
                                      loading="lazy"
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
                        </Tab> */}

                  {/* Upload logo */}
                  {/* Logo options */}

                  {/* <Tab eventKey="logo" title="Logo">
                          <div className="p-3">
                            <h6 className="mb-3 fw-bold">Select a logo</h6>
      
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

                            <div className="border rounded p-3 text-center">
                              <input
                                type="file"
                                accept="image/*"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Tab> */}

                  {/* <Tab eventKey="level" title="Level">
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
                                    loading="lazy"
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
                        </Tab> */}
                </Tabs>
                <div className="RIght_Row"></div>
              </div>
            </Col>

            {/* Right: Preview + Download (matches your desktop screenshot) */}
            <Col md={4} className="text-center">
              <h4 className="fw-bold">Download your QR</h4>
              <div
                style={{
                  position: "relative",
                  width: "auto", // change as you like
                  margin: 0,
                  padding: 0,
                  aspectRatio: "1 / 1", // keep preview square; change if you want to match frame aspect
                  // border: "1px dashed #ddd",
                }}
              >
                {/* Frame (background or foreground—most frames work fine behind the QR) */}
                {/* ---- QR Preview ---- */}
                {/* <div>
                  {activeTab === "website" && qrCode && (
                    <img
                      src={qrCode}
                      alt="Website QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("website")}
                    />
                  )}

                  {activeTab === "sms" && qrSMS && (
                    <img
                      src={qrSMS}
                      alt="SMS QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("sms")}
                    />
                  )}
                  {activeTab === "text" && qrText && (
                    <img
                      src={qrText}
                      alt="Text QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("text")}
                    />
                  )}
                  {activeTab === "email" && qrEmail && (
                    <img
                      src={qrEmail}
                      alt="Email QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("email")}
                    />
                  )}
                  {activeTab === "vcard" && qrVcard && (
                    <img
                      src={qrVcard}
                      alt="VCard QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("vcard")}
                    />
                  )}
                  {activeTab === "wifi" && qrWifi && (
                    <img
                      src={qrWifi}
                      alt="WiFi QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("wifi")}
                    />
                  )}
                  {activeTab === "whatsapp" && qrWhatsapp && (
                    <img
                      src={qrWhatsapp}
                      alt="WhatsApp QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("whatsapp")}
                    />
                  )}
                </div> */}

                {/* QR SLOT */}
                <div
                  style={{
                    position: "absolute",
                    top: `${slot.top}%`,
                    left: `${slot.left}%`,
                    width: `${slot.width}%`,
                    height: `${slot.height}%`,
                    // display: "flex",
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
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"website" === activeTab && qrCode && (
                      <img
                        src={qrCode}
                        alt="Website QR Code"
                        className="img-fluid"
                        width={330}
                        height={330}
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                      />
                    )}


                    {"text" === activeTab && qrText && (
                      <img
                        src={qrText}
                        alt="Text QR Code"
                        className="img-fluid"
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                      />
                    )}

                    {"vcard" === activeTab && qrVcard && (
                      <img
                        src={qrVcard}
                        alt="vCard QR Code"
                        className="img-fluid"
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                        />
                    )}
                        {"sms" === activeTab && qrSMS && (
                          <img
                            src={qrSMS}
                            alt="SMS QR Code"
                            className="img-fluid"
                            style={{
                              width: "80%",
                              height: "80%",
                              objectFit: "contain",
                              cursor: "pointer",
                              position: "relative",
                              top: "40px",
                            }}
                            onClick={() => handleDownload(activeTab)}
                          />
                        )}

                    {"wifi" === activeTab && qrWifi && (
                      <img
                        src={qrWifi}
                        alt="Wi-Fi QR Code"
                        className="img-fluid"
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                      />
                    )}

                    {"whatsapp" === activeTab && qrWhatsapp && (
                      <img
                        src={qrWhatsapp}
                        alt="WhatsApp QR Code"
                        className="img-fluid"
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                      />
                    )}

                    {"email" === activeTab && qrEmail && (
                      <img
                        src={qrEmail}
                        alt="Email QR Code"
                        className="img-fluid"
                        style={{
                          width: "80%",
                          height: "100%",
                          objectFit: "contain",
                          cursor: "pointer",
                          position: "relative",
                          top: "40px",
                        }}
                        onClick={() => handleDownload(activeTab)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <Button
                  variant="light"
                  className="rounded-pill nnnn1 border text-center"
                  onClick={()=>handleDownload(activeTab)}
                >
                  <HiOutlineDownload className="Dw_Icon" />
                  Download QR
                </Button>
                <Button
                  variant="light"
                  className="rounded-pill nnnn2 border text-center"
                  onClick={() => handleShare(activeTab)}
                >
                  <HiOutlineShare className="Dw_Icon" /> Share QR
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* MOBILE (under md) – matches your mobile screenshots */}
        <Container className="bg-white p-3 rounded shadow-sm d-md-none">
          {/* Preview Card */}
          <div className="border rounded p-3 mb-3">
            <div className="text-center text-muted small mb-2">Preview</div>

            {/* QR Preview Wrapper */}
            <div
              className="border rounded d-flex align-items-center justify-content-center mb-4"
              style={{ width: "auto", height: "auto" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  margin: 0,
                  padding: 0,
                  aspectRatio: "1/1",
                }}
              >
                { }

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"website" === activeTab && qrCode && (
                    <img
                      src={qrCode}
                      alt="Website QR Code"
                      className="img-fluid"
                      width={330}
                      height={330}
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"sms" === activeTab && qrSMS && (
                    <img
                      src={qrSMS}
                      alt="SMS QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"text" === activeTab && qrText && (
                    <img
                      src={qrText}
                      alt="Text QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"vcard" === activeTab && qrVcard && (
                    <img
                      src={qrVcard}
                      alt="vCard QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"wifi" === activeTab && qrWifi && (
                    <img
                      src={qrWifi}
                      alt="Wi-Fi QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"whatsapp" === activeTab && qrWhatsapp && (
                    <img
                      src={qrWhatsapp}
                      alt="WhatsApp QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}

                  {"email" === activeTab && qrEmail && (
                    <img
                      src={qrEmail}
                      alt="Email QR Code"
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload(activeTab)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Step Toggles */}
            <div className="d-flex gap-2 mb-3">
              <Button
                size="sm"
                variant={"content" === mobileStep ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("content")}
              >
                Content
              </Button>

              <Button
                size="sm"
                variant={"design" === mobileStep ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("design")}
              >
                Design
              </Button>
            </div>

            {/* Content Step */}
            {mobileStep === "content" && (
              <>
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

                <Modal
                  show={showTypeModal}
                  onHide={() => setShowTypeModal(false)}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Select QR Type</Modal.Title>
                  </Modal.Header>
                  <Modal.Body
                    activeKey={activeTab}
                    onSelect={(k) => {
                      setActiveTab(k || "website");

                      if (k === "sms") {
                        setQrSMS(qrImages.sms); // 👈 show default SMS QR when switching
                      }
                      if (k === "website") {
                        setQrCode(qrImages.website); // 👈 show default Website QR
                      }
                      if (k === "text") {
                        setQrText(qrImages.text); // 👈 show default text QR
                      }
                      if (k === "vcard") {
                        setQrVcard(qrImages.vcard); // 👈 show default VCard QR
                      }
                      if (k === "wifi") {
                        setQrWifi(qrImages.wifi); // 👈 show default WiFi QR
                      }
                      if (k === "whatsapp") {
                        setQrWhatsapp(qrImages.whatsapp); // 👈 show default WhatsApp QR
                      }
                      if (k === "email") {
                        setQrEmail(qrImages.email); // 👈 show default Email QR
                      }
                    }}
                    className="p-2 nn1"
                  >
                    {qrTypes.map((t) => (
                      <Button
                        key={t.key}
                        variant={t.key === activeTab ? "primary" : "light"}
                        className="w-100 d-flex align-items-center justify-content-start gap-2 mb-2"
                        onClick={() => {
                          setActiveTab(t.key);
                          setShowTypeModal(false);
                        }}
                      >
                        {t.icon}
                        {t.label}
                      </Button>
                    ))}
                  </Modal.Body>
                </Modal>

                {/* Tab Content */}
                <div className="mb-3">{tabContent[activeTab]}</div>

                {/* Generate QR */}
                <Button
                  className="btn btn-primary rounded-4 w-100 mb-2"
                  onClick={() => {
                    if (activeTab === "sms") SMSQr();
                    else if (activeTab === "website") generateQr();
                    else if (activeTab === "text") TextQr();
                    else if (activeTab === "vcard") VCardQr();
                    else if (activeTab === "wifi") WifiQr();
                    else if (activeTab === "whatsapp") whatsappQr();
                    else if (activeTab === "email") emailQr();
                  }}
                >
                  Generate QR Code
                </Button>

                {/* Download QR */}
                <Button
                  variant="light"
                  className="rounded-pill border w-100"
                  onClick={() => handleDownload(activeTab)}
                >
                  Download QR
                </Button>
              </>
            )}

            {/* Design Step */}
            {mobileStep === "design" && (
              <div className="bg-light p-3 rounded">
                <div className="row mb-3">
                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <b>Color</b>
                    <input
                      type="color"
                      value={qrColor}
                      className="custom-color mt-2"
                      onChange={(e) => setQrColor(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <b>Background Color</b>
                    <input
                      type="color"
                      value={bgColor}
                      className="custom-color mt-2"
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>
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
                        <span className="d-inline-flex align-items-center button2 gap-2">
                          {t.icon}
                          {t.label}
                        </span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Modal.Body>
              </Modal> */}
      </div>
      <div className="button_4_Bg text-center bg-white py-5 mb-5">
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
                <picture>
                  <source srcset={step1} type="image/webp"></source>
                  <img
                    src={step1}
                    sizes="(max-width: 600px) 356px, (max-width: 1024px) 800px, 1164px"
                    alt="Step 2"
                    loading="lazy"
                    className="img-fluid h-auto w-auto mb-3"
                  />
                </picture>

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
      {/* Your all-in-one marketing platform */}
      {/* <Container className="py-5 text-center">
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
        </Container> */}
      {/* Discover how to use QR codes to boost your marketing strategy. */}
      {/* Left button with aria-label */}
      {/* Changed to h2 for correct heading hierarchy */}
      {/* Right button with aria-label */}
      {/* <div className="bg-white">
      <Container className="py-5">
        <p className="text-primary fw-semibold">QR CODES ON</p>
        <h2 className="mb-5 fw-bold">
          Discover how to use QR codes to boost your marketing strategy.
        </h2>

        <div className="position-relative">
          <div className="d-flex align-items-center gap-3">
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
    </div> */}
      {/* Explore our extensive collection of QR codes */}
      {/* Header */}
      {/* Desktop View (Split Layout) */}
      {/* <div className="bg-white">
      <div className="container text-center py-5">
        <p className="text-primary fw-bold">QR CODES FOR</p>
        <h2 className="fw-bold">
          Explore our extensive collection of QR codes
        </h2>
        <p className="text-muted">
          QR codes can contain a wide range of content and at QRIFY we offer them
          all.
        </p>

        <div className="d-none d-md-flex justify-content-center mt-4">
          <div className="card shadow-lg border-1 rounded-2 w-100">
            <div className="row Img_Slide g-0 align-items-center">
              <div className="col-md-4 p-5 text-start">
                <h3>{content[activeKey].title}</h3>
                <button className="btn border-1 rounded-5 border-white mt-3">
                  {content[activeKey].button}
                </button>
              </div>
              <div className="col-md-8">
                <img
                  src={content[activeKey].img}
                  alt={content[activeKey].title}
                  className="rounded-end-3 w-100"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

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
                    className="text-white text-center shadow-lg border-0 rounded"
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
                      <h1 className="fw-bold">{content[key].title}</h1>
                      <button className="btn btn-light mt-3">
                        {content[key].button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="prev"
              aria-label="Previous Slide"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="next"
              aria-label="Next Slide"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="d-none d-md-flex justify-content-center mt-4">
          <ul className="nav nav-tabs flex-wrap">
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${
                  activeKey === "wedding" ? "active" : ""
                }`}
                onClick={() => setActiveKey("wedding")}
              >
                QR code for weddings
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${activeKey === "ngo" ? "active" : ""}`}
                onClick={() => setActiveKey("ngo")}
              >
                QR code for NGOs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${
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
</div> */}
      {/* Everything you need to know to get started */}
      <div className="bg-white py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-12">
              <h1>Everything you need to know to get started</h1>
            </div>

            <div className="col-md-5">
              <p>
                In this section you will find the basic concepts and the
                necessary steps to start enjoying the benefits of using QR.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 img_10_png">
              <img
                src={img_10}
                alt="QR Code"
                className="img-fluid"
                loading="lazy"
                width="auto"
                height="auto"
              />
            </div>
            <div className="col-md-4">
              <div className="accordion" id="qrAccordion">
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
                      instant access to the information contained in the Code.
                      It is, in short, the evolution of the barcode, made up of
                      patterns of black and white pixels. Denso Wave, a Japanese
                      subsidiary of Toyota Denso, developed them in order to
                      mark the components of their cars and thus speed up
                      logistics in their production. Currently, it has gained
                      great popularity, due to its versatility and
                      accessibility, thanks to the functions of smart phones.
                      <Link
                        to="https://en.wikipedia.org/wiki/QR_code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more about QR codes
                      </Link>
                      .
                    </div>
                  </div>
                </div>
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
                      You will have noticed that more and more companies choose
                      to include QR, as a fundamental resource for the marketing
                      and commercialization of their products and services. Its
                      growing popularity is due to the multiplicity of uses that
                      you can give it: to receive payments from your clients,
                      share links to web pages, catalogs and price lists,
                      receive comments on your products or services, invite the
                      client to share images or videos , promote your business
                      events and much more, with just a scan!
                    </div>
                  </div>
                </div>

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
                      Many devices already have a built-in QR code reader. In
                      this case, all you have to do is open the camera on your
                      mobile phone and hold it over a code for a few seconds,
                      until a notification appears on the screen. In case this
                      does not happen, go to settings to check that QR scanning
                      is enabled. If you don't have the feature, just download
                      and install a QR code reader from your app store.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container py-5 mb-5">
        <div className="row justify-content-center g-4">
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
                  <StarIcons />
                </div>
              </div>
            </div>
          </div>

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
      </div> */}
      <div className="bg-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h1>Do not leave with doubt</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="accordion" id="qrAccordion1">
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
                      It is a tool that allows you to generate different types
                      of QR codes, in an easy and intuitive way. The rise of QR
                      codes has made our QR code generator sought after and
                      required by many people and businesses, with businesses of
                      all kinds: you can use our QR code generator to create QR
                      codes for your website, share a PDF, a photo gallery, a
                      playlist, a price list or menu, connect your customers
                      with a service available in your business (WiFi network,
                      attention, shifts, payments, etc.),advertise shows or
                      other events on public roads through the link to the
                      trailer or trailer, create a vCard with contact
                      information and share it with your customers, and much
                      more.
                    </div>
                  </div>
                </div>
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
                      there, if you are satisfied with the product, you can
                      access the plan that best suits your needs. By contracting
                      the service, you will have unlimited access to all the
                      functions: unlimited dynamic and editable QR creation, all
                      the variety of QR types, QR editing and management,
                      unlimited scans, complete analytics of your QRs and a
                      variety of download formats.
                    </div>
                  </div>
                </div>
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
                      Of course, the first seven days are on us so you can try
                      our QR code generator for free.
                    </div>
                  </div>
                </div>

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
                      This is because our QR codes are dynamic rather than
                      static. All the QR codes that are generated with QRIFY
                      host the information on our servers such as PDF documents,
                      Videos, Images and have a cost for that reason they are
                      not free.
                    </div>
                  </div>
                </div>
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
                      The use of QR codes is today part of the marketing
                      strategy of many companies. Do not hesitate: use the codes
                      you generate on our platform to renew, give visibility and
                      dynamism to your business.
                    </div>
                  </div>
                </div>
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
                      to what you need, since the URL can redirect the user to
                      the type of content you want with just a scan: a website,
                      a PDF, a photo gallery, a playlist, price lists, menus,
                      technical service, WiFi network, shift platform, payment
                      links, videos, contact information, etc. The possibilities
                      are limitless.
                    </div>
                  </div>
                </div>

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
                      Yes. If you sign up for a plan, you can track the number
                      of scans your QR codes receive. This way you will be able
                      to observe the progress of your campaigns and even make
                      the necessary adjustments to improve or expand them.
                    </div>
                  </div>
                </div>
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
                      QR codes do not have an expiration date. They will only
                      stop working if you change or remove the link. However,
                      you have the option to create dynamic codes, so you can
                      replace the content or links when you need to.
                    </div>
                  </div>
                </div>
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
                      modify links and correct various types of errors. The
                      latter also allow you to track the number of scans.
                    </div>
                  </div>
                </div>

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
                      Of course. When you have signed up for one of our plans,
                      you can manage your QR codes as you wish: create, design,
                      save, delete or modify your codes as you wish, add logos,
                      frames, generate a domain, save your favorite designs,
                      edit URLs And many other things.
                    </div>
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
      <footer className="w-100 text-white Buton_3_BG">
        <div className="container py-5 d-flex flex-column align-items-center">
          <div className="mb-4">
            <a href="https://theqrify.com/">
              <img
                src={logo}
                alt="QRIFY Logo"
                loading="lazy"
                width={120}
                height={55}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>

          <p className="text-center text-sm" style={{ maxWidth: "600px" }}>
            Empowering creators worldwide with the most advanced AI content
            creation tools. Transform your ideas into reality.
          </p>
        </div>

        <div className="border-top" style={{ borderColor: "#3B1A7A" }}>
          <div className="container py-3 text-center text-sm">
            <a
              href="https://theqrify.com/"
              className="text-decoration-none"
              style={{ color: "#015f9e" }}
            >
              QRIFY
            </a>
            ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default QRGenerator;
