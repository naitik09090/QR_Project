import React from "react";
import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";   //08-01//
// import "../css/PlansAndPayments.scss";


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
// import thinking from "../assets/thinking.png"
// import img2 from "../assets/Google.png";
import { TfiWorld } from "react-icons/tfi";
import { FaRegEdit, FaUtensils, FaBullhorn, FaGraduationCap, FaTicketAlt } from "react-icons/fa";
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
import ExploreAllGenerators from "./ExploreAllGenerators";
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
import { Link, QrCode, Whatsapp } from "react-bootstrap-icons";
// import { useSearchParams } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { BsChatDotsFill, BsGlobe, BsPersonFill, BsWifi, BsWhatsapp, BsEnvelopeFill, BsChatLeftTextFill, BsType, BsCpu, BsShieldLock, BsGrid3X3, BsQrCodeScan, BsLightningChargeFill, BsGraphUpArrow, BsCreditCardFill, BsRecycle, BsShieldLockFill, BsBarChartFill, BsPaletteFill, BsPhoneFill, BsBagFill, BsBriefcaseFill } from "react-icons/bs";
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
import frame_1 from "../assets/frame_1.webp";
import frame_2 from "../assets/frame_2.webp";
import frame_3 from "../assets/frame_3.webp";
import frame_4 from "../assets/frame_4.webp";
import frame_5 from "../assets/frame_5.webp";
import frame_6 from "../assets/frame_6.webp";
import frame_7 from "../assets/frame_7.webp";
import logo1 from "../assets/logo.webp";
import { HiOutlineDownload, HiOutlineShare, HiOutlineExternalLink } from "react-icons/hi";

// import QR_1 from "../assets/QR_1.webp";
// import Text_QR from "../assets/Text_QR.png";
// import Email_QR from "../assets/Email_QR.png";
// import VCard_QR from "../assets/VCard_QR.png";
// import WIFI_QR from "../assets/WIFI_QR.png";
// import Whatsapp_QR from "../assets/Whatsapp_QR.png";
// import SMS_QR from "../assets/SMS_QR.png";

import QR_1 from "../assets/QR_MAin.webp";
import Text_QR from "../assets/QR_MAin.webp";
import Email_QR from "../assets/QR_MAin.webp";
import VCard_QR from "../assets/QR_MAin.webp";
import WIFI_QR from "../assets/QR_MAin.webp";
import Whatsapp_QR from "../assets/QR_MAin.webp";
import SMS_QR from "../assets/QR_MAin.webp";
import { sendEvent } from "../gaEvents";

// const [qrImages1, setQrImages1] = useState({});

// const [activeTab, setActiveTab] = useState("wedding");
const QRGenerator = () => {
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
    [pWebsite, setPWebsite] = useState(""),
    [addressVcard, setAddressVcard] = useState(""),
    [phone1, setPhone1] = useState(""),
    [cpyName, setCpyName] = useState(""),
    [pTitleVcard, setPTitleVcard] = useState(""),
    [phone2, setPhone2] = useState(""),
    [message2, setMessage2] = useState(""),
    [email1, setEmail1] = useState(""),
    [subject, setSubject] = useState(""),
    [body, setBody] = useState(""),
    [ssid, setSsid] = useState(""),
    [password, setPassword] = useState(""),
    [encryption, setEncryption] = useState("WPA"),
    [hidden, setHidden] = useState(false),
    [loading, setLoading] = useState(false);

  // 09-01//
  const qrRef = useRef(null);

  // Callback ref to handle both desktop and mobile QR displays
  const setQrRef = (element) => {
    if (element) {
      qrRef.current = element;
    }
  };

  const [qrValue, setQrValue] = useState("");


  // const URL = "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net";

  const tabContent = {
    website: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <label htmlFor="websiteInput" className="text-muted text-start no-delay fw-bold">
                Enter your website URL
              </label>
            </div>
            <div className="col-md-12">
              <input
                id="websiteInput"
                type="url"
                placeholder="https://theqrify.com/"
                pattern="^https?://.*"
                title="URL must start with http:// or https://"
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
              <label htmlFor="textContentInput" className="text-muted no-delay fw-bold">
                Type any text you want to encode into a QR code.
              </label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="textContentInput"
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
                  <Form.Group controlId="fnameInput" className="py-2">
                    <Form.Label className="text-muted mb-2 fw-bold">Name *</Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="E.g. Paul"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lnameInput" className="py-2">
                    <Form.Label className="text-muted fw-bold">Surname</Form.Label>
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
                  <Form.Group controlId="phone1Input" className="py-2">
                    <Form.Label className="text-muted fw-bold">Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="E.g. +123456789"
                      className="custom-input"
                      value={phone1}
                      onChange={(e) => setPhone1(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="emailInput" className="py-2">
                    <Form.Label className="text-muted fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E.g. name@email.com"
                      className="custom-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="pWebsiteInput" className="py-2">
                    <Form.Label className="text-muted fw-bold">Personal website</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://..."
                      className="custom-input"
                      value={pWebsite}
                      onChange={(e) => setPWebsite(e.target.value)}
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
                        id="addressVcardInput"
                        placeholder="Search address"
                        className="custom-input"
                        value={addressVcard}
                        onChange={(e) => setAddressVcard(e.target.value)}
                        aria-label="Search address"
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
                      <Form.Group controlId="cpyNameInput" className="py-2">
                        <Form.Label className="text-muted fw-bold">Company</Form.Label>
                        <Form.Control
                          placeholder="E.g. Company LLC"
                          className="custom-input"
                          value={cpyName}
                          onChange={(e) => setCpyName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="pTitleVcardInput" className="py-2">
                        <Form.Label className="text-muted fw-bold">Title</Form.Label>
                        <Form.Control
                          placeholder="E.g. Your profession/position"
                          className="custom-input"
                          value={pTitleVcard}
                          onChange={(e) => setPTitleVcard(e.target.value)}
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
              <label htmlFor="whatsappPhoneInput" className="text-muted no-delay fw-bold">Number</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="whatsappPhoneInput"
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                maxLength={10}
                onChange={(e) =>
                  setPhone2("+91" + e.target.value.replace(/\D/g, ""))
                }
              />
            </div>
            <div className="col-md-12 py-2">
              <label htmlFor="whatsappMessageInput" className="text-muted no-delay fw-bold">Message</label>
            </div>
            <div className="col-12">
              <Form.Control
                id="whatsappMessageInput"
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
              <label htmlFor="emailAddressInput" className="text-muted no-delay fw-bold">Email</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="emailAddressInput"
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setEmail1(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <label htmlFor="emailSubjectInput" className="text-muted no-delay fw-bold">Subject</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="emailSubjectInput"
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <label htmlFor="emailBodyInput" className="text-muted no-delay fw-bold">Message</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="emailBodyInput"
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
              <label htmlFor="smsPhoneInput" className="text-muted text-start no-delay fw-bold">Number</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="smsPhoneInput"
                as="textarea"
                rows={1}
                placeholder="Enter your number here"
                className="custom-input mb-3"
                maxLength={10}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />
            </div>
            <div className="col-md-12 py-2">
              <label htmlFor="smsMessageInput" className="text-muted no-delay fw-bold">Message</label>
            </div>
            <div className="col-md-12">
              <Form.Control
                id="smsMessageInput"
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
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="fw-bold mb-1">Complete the content</h4>
              </div>

              <div className="row g-3 align-items-center">
                <div className="col-md-4 col-sm-6">
                  <label htmlFor="wifiSsidInput" className="form-label fw-bold text-muted">
                    Network name (SSID)*
                  </label>
                  <input
                    id="wifiSsidInput"
                    type="text"
                    placeholder="E.g. HomeWifi"
                    className="custom-input"
                    autoComplete="username"
                    required
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="wifiPasswordInput" className="form-label fw-bold text-muted">
                    Network password
                  </label>
                  <input
                    id="wifiPasswordInput"
                    type="password"
                    placeholder="E.g. Mypassword"
                    className="custom-input"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="row g-2 align-items-center">
                <div className="col-md-4 col-sm-6">
                  <label htmlFor="wifiSecuritySelect" className="form-label fw-bold text-muted">
                    Security
                  </label>
                  <select
                    id="wifiSecuritySelect"
                    className="custom-input"
                    value={encryption}
                    onChange={(e) => setEncryption(e.target.value)}
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
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
        </form>
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

  // const handleDownload = (qrUrl, name = "my-qr-code.png") => {
  //   if (!qrUrl) {
  //     alert("Please generate the QR code first!");
  //     return;
  //   }

  //   // Detect File Type
  //   const fileExtension = name.split(".").pop().toLowerCase();

  //   // 🎯 GA4 Event — QR Download
  //   sendEvent("qr_download", {
  //     event_category: "QR",
  //     event_label: "QR Code Downloaded",
  //     file_type: fileExtension,   // png / svg / pdf
  //     file_name: name,
  //   });

  //   // Download Logic
  //   const link = document.createElement("a");
  //   link.href = qrUrl;
  //   link.download = name;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };


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

  // const handleDownload = (qrUrl, name = "qr-code.png") => {
  //   if (!qrUrl) {
  //     alert("Please generate the QR code first!");
  //     return;
  //   }

  //   const link = document.createElement("a");
  //   link.href = qrUrl;
  //   link.setAttribute("download", name);
  //   link.setAttribute("target", "_blank");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const downloadCurrentQR = () => {
    // Simply call handleDownload which already handles the QRCodeSVG download
    handleDownload();
  };

  //08-01 --working//
  // const getQRValue = () => {
  //   switch (activeTab) {
  //     case "website":
  //       return website || "https://example.com";

  //     case "text":
  //       return text2 || "Sample text";

  //     case "sms":
  //       return phone && message
  //         ? `SMSTO:${phone}:${message}`
  //         : "";

  //     case "email":
  //       return email1 && subject && body
  //         ? `mailto:${email1}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  //         : "";

  //     case "whatsapp":
  //       return phone2 && message2
  //         ? `https://wa.me/${phone2}?text=${encodeURIComponent(message2)}`
  //         : "";

  //     case "wifi":
  //       return ssid
  //         ? `WIFI:T:WPA;S:${ssid};P:${password};H:${hidden};;`
  //         : "";

  //     default:
  //       return "";
  //   }
  // };

  // const getQRValue = () => {
  //   switch (activeTab) {
  //     case "website":
  //       return website || "https://example.com";

  //     case "text":
  //       return text2 || "Sample Text";

  //     case "sms":
  //       return phone && message
  //         ? `SMSTO:${phone}:${message}`
  //         : "SMSTO:+919999999999:Hello";

  //     case "email":
  //       return email1
  //         ? `mailto:${email1}?subject=${encodeURIComponent(subject || "")}&body=${encodeURIComponent(body || "")}`
  //         : "mailto:test@example.com";

  //     case "whatsapp":
  //       return phone2
  //         ? `https://wa.me/${phone2}?text=${encodeURIComponent(message2 || "")}`
  //         : "https://wa.me/919999999999";

  //     case "wifi":
  //       return ssid
  //         ? `WIFI:T:WPA;S:${ssid};P:${password || ""};H:${hidden ? "true" : "false"};;`
  //         : "WIFI:T:WPA;S:MyWifi;P:12345678;;";

  //     case "vcard":
  //       return `BEGIN:VCARD
  // VERSION:3.0
  // N:${lname || ""};${fname || ""}
  // FN:${fname || ""} ${lname || ""}
  // ORG:${cpyName || ""}
  // TITLE:${pTitleVcard || ""}
  // TEL:${phone1 || ""}
  // EMAIL:${email || ""}
  // URL:${pWebsite || ""}
  // END:VCARD`;

  //     default:
  //       return "https://example.com";
  //   }
  // };


  /// 09-01///
  // 🔹 QR VALUE GENERATOR
  const getQRValue = () => {
    switch (activeTab) {
      case "website":
        return website;

      case "text":
        // return text;
        return text2;

      case "sms":
        return `SMSTO:${phone}:${message}`;

      case "email":
        // return `mailto:${email}?subject=${encodeURIComponent(
        return `mailto:${email1}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

      case "whatsapp":
        // return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        return `https://wa.me/${phone2}?text=${encodeURIComponent(message2)}`;

      case "wifi": {
        const enc = encryption === 'nopass' ? 'nopass' : encryption;
        return `WIFI:S:${ssid};T:${enc};P:${password};H:${hidden ? 'true' : 'false'};;`;
      }

      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${fname} ${lname}\nTEL:${phone1}\nEMAIL:${email}\nURL:${pWebsite}\nORG:${cpyName}\nTITLE:${pTitleVcard}\nADR:${addressVcard}\nEND:VCARD`;

      default:
        return "";
    }
  };


  // const handleShare = async () => {
  //   if (!qrCode) {
  //     alert("Please generate a QR code first!");
  //     return;
  //   }

  //   // 🎯 GA4 Event — QR Share Clicked
  //   sendEvent("qr_share", {
  //     event_category: "QR",
  //     event_label: "QR Code Shared",
  //     share_method: navigator.share ? "native_share" : "fallback_download",
  //   });

  //   // If browser supports share API
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: "My QR Code",
  //         text: "Scan this QR code or open this link:",
  //         url: qrCode,
  //       });
  //       return;
  //     } catch (err) {
  //       console.error("Share link failed:", err);
  //     }
  //   }

  //   // fallback to download
  //   const link = document.createElement("a");
  //   link.href = qrCode;
  //   link.download = "my-qr-code.png";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleShare = async () => {
    console.log("Share button clicked");
    console.log("qrRef.current:", qrRef.current);
    console.log("qrValue:", qrValue);

    if (!qrRef.current || !qrValue) {
      alert("Please generate a QR code first!");
      return;
    }

    try {
      console.log("Converting QR to PNG...");
      // Dynamic import to reduce initial bundle size
      const htmlToImage = await import("html-to-image");
      // Convert QR code to PNG with enhanced options
      const dataUrl = await htmlToImage.toPng(qrRef.current, {
        skipFonts: true,
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        width: 300,
        height: 300,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      console.log("Conversion successful, dataUrl length:", dataUrl.length);

      // 🎯 GA4 Event — QR Share Clicked
      sendEvent("qr_share", {
        event_category: "QR",
        event_label: `QR Code Shared - ${activeTab}`,
        share_method: navigator.share ? "native_share" : "fallback_download",
      });

      // ✅ Native Share (Mobile) - Convert data URL to blob
      if (navigator.share) {
        console.log("Native share available, attempting to share...");
        try {
          // Convert data URL to blob
          const response = await fetch(dataUrl);
          const blob = await response.blob();
          const file = new File([blob], `${activeTab}-qr.png`, { type: "image/png" });

          // Check if files can be shared
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "My QR Code",
              text: "Scan this QR code:",
            });
            console.log("Share successful");
            return;
          } else {
            console.log("Cannot share files, falling back to download");
          }
        } catch (err) {
          console.error("Share failed:", err);
        }
      }

      // ⬇️ Fallback download
      console.log("Downloading QR code...");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${activeTab}-qr.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Download triggered");
    } catch (error) {
      console.error("Error sharing QR code:", error);
      console.error("Error details:", error.message, error.stack);
      alert("Failed to share QR code. Error: " + error.message);
    }
  };

  const handleOpenLink = () => {
    const liveValue = getQRValue();
    if (!liveValue) {
      alert("Please fill in the content first!");
      return;
    }

    let url = liveValue;

    // Special handling for vCard (download .vcf file)
    if (activeTab === "vcard") {
      const blob = new Blob([liveValue], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fname || "contact"}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      sendEvent("qr_open_vcard", {
        event_category: "QR",
        event_label: "vCard File Downloaded",
      });
      return;
    }

    // Special handling for WiFi (Attempting direct protocol trigger as requested)
    if (activeTab === "wifi") {
      if (password) {
        navigator.clipboard.writeText(password);
      }
      // Attempting to trigger the WIFI protocol directly. 
      // Most browsers will ignore this for security, but we attempt it for specialized handlers.
      window.location.href = liveValue;
      return;
    }

    // Special handling for Email (Avoiding blank tab and ensuring client opens)
    if (activeTab === "email") {
      // Direct Gmail Web Compose link fallback (most reliable for browser users)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email1)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Attempt to open the custom Gmail URL first for a better web experience
      window.open(gmailUrl, "_blank");

      sendEvent("qr_open_email", {
        event_category: "QR",
        event_label: "Email Opened in Gmail Web",
      });
      return;
    }

    // Special handling for SMS (Converting SMSTO to standard sms: protocol)
    if (activeTab === "sms") {
      const smsUrl = `sms:${phone}?body=${encodeURIComponent(message)}`;

      // Use location.href to trigger the native app directly
      window.location.href = smsUrl;

      sendEvent("qr_open_sms", {
        event_category: "QR",
        event_label: "SMS App Triggered",
      });
      return;
    }

    // If text tab and it's not a URL/special scheme, search on Google
    if (activeTab === "text") {
      const isUrl = /^(https?:\/\/|mailto:|tel:|sms:|wa\.me\/|WIFI:|www\.)/i.test(liveValue);
      if (!isUrl) {
        url = `https://www.google.com/search?q=${encodeURIComponent(liveValue)}`;
      } else if (url.toLowerCase().startsWith("www.")) {
        url = `https://${url}`;
      }
    }

    // Final check for website tab to ensure protocol
    if (activeTab === "website" && !/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    if (url) {
      window.open(url, "_blank");
    }

    // GA Event
    sendEvent("qr_open_link", {
      event_category: "QR",
      event_label: "QR Link Opened (Live)",
      tab_type: activeTab,
    });
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
    DEFAULT_SLOT = { top: 20, left: 20, width: 60, height: 60 };
  // QUIET_ZONE_PCT = 3;

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

  const fetchWithTimeout = async (url, options = {}, timeout = 15000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), timeout)
      )
    ]);
  };


  const [qrCode, setQrCode] = useState(qrImages.website);
  const [qrSMS, setQrSMS] = useState(qrImages.sms);
  const [qrText, setQrText] = useState(qrImages.text);
  const [qrVcard, setQrVcard] = useState(qrImages.vcard);
  const [qrWifi, setQrWifi] = useState(qrImages.wifi);
  const [qrWhatsapp, setQrWhatsapp] = useState(qrImages.whatsapp);
  const [qrEmail, setQrEmail] = useState(qrImages.email);



  const [qrColor, setQrColor] = useState("#000000"),
    [bgColor, setBgColor] = useState("#FFFFFF");

  // Colors that are applied to the generated QR code
  const [generatedQrColor, setGeneratedQrColor] = useState("#000000"),
    [generatedBgColor, setGeneratedBgColor] = useState("#FFFFFF");

  const handleQrColorChange = (newColor) => {
    const previousColor = qrColor; // old color

    setQrColor(newColor);

    // GA4 EVENT
    sendEvent("qr_change_color", {
      event_category: "Customization",
      event_label: "QR Color Changed",
      old_color: previousColor,
      new_color: newColor,
    });
  };

  const handleBgColorChange = (newColor) => {
    const previousColor = bgColor; // old bg color

    setBgColor(newColor);

    // GA4 EVENT (background color)
    sendEvent("qr_change_bg_color", {
      event_category: "Customization",
      event_label: "Background Color Changed",
      old_color: previousColor,
      new_color: newColor,
    });
  };
  // 🔹 GENERATE QR
  const handleGenerate = () => {
    if (loading) return;

    if (activeTab === "website") {
      const urlPattern = /^https?:\/\//i;
      if (!urlPattern.test(website)) {
        alert("Please enter a valid URL starting with http:// or https://");
        return;
      }
    }

    // GA EVENT
    sendEvent("qr_generate_click", {
      event_category: "CTA",
      event_label: "Generate QR Clicked",
      tab_type: activeTab, // website | sms | wifi etc
    });

    const value = getQRValue();
    if (!value) {
      alert("Please fill required fields");
      return;
    }

    // Capture colors at generation time
    setGeneratedQrColor(qrColor);
    setGeneratedBgColor(bgColor);

    setQrValue(value);
  };

  // 🔹 DOWNLOAD QR
  const handleDownload = async () => {
    if (!qrRef.current) return;

    try {
      // Dynamic import to reduce initial bundle size
      const htmlToImage = await import("html-to-image");
      const dataUrl = await htmlToImage.toPng(qrRef.current, {
        skipFonts: true,
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        width: 300,
        height: 300,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${activeTab}-qr.png`;
      link.click();

      // GA EVENT for download
      sendEvent("qr_download", {
        event_category: "QR",
        event_label: "QR Downloaded",
        tab_type: activeTab,
      });
    } catch (error) {
      console.error("Error downloading QR code:", error);
      alert("Failed to download QR code. Please try again.");
    }
  };




  return (
    <>
      <div className="Buton_2_BG bg-light" id="QR_Main">
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
                className="nn1"
              >
                {qrTypes.map((e) => (
                  <Tab
                    key={e.key}
                    eventKey={e.key}
                    title={
                      <div className="Top_BTn">
                        <span className="icon_Title">{e.icon}</span>

                        <span>{e.label}</span>
                      </div>
                    }
                  >
                    <div className="pt-3">{tabContent[e.key]}</div>
                  </Tab>
                ))}
              </Tabs>
              {/* Step 2 – Design your QR */}
              <div className="mt-4 p-3">
                <h4 className="fw-bold mb-3">Design your QR</h4>

                <Tabs defaultActiveKey="frame" className="mb-3">
                  <Tab eventKey="frame">
                    <div>
                      <Row className="g-3">

                        <div className="container">
                          <div className="row">
                            <div className="col-md-3 mb-3">
                              <label htmlFor="qrColorInput" className="fw-bold mb-1 d-block">Color</label>
                              <input
                                id="qrColorInput"
                                type="color"
                                value={qrColor}
                                className="custom-color"
                                //onChange={(e) => handleQrColorChange(e.target.value)}
                                onChange={(e) => setQrColor(e.target.value)} //09-01//
                              />
                            </div>

                            <div className="col-md-3">
                              <label htmlFor="bgColorInput" className="fw-bold mb-1 d-block">Background Color</label>
                              <input
                                id="bgColorInput"
                                type="color"
                                value={bgColor}
                                className="custom-color"
                                // onChange={(e) => handleBgColorChange(e.target.value)}
                                onChange={(e) => setBgColor(e.target.value)}  //09-01//
                              />
                            </div>
                          </div>

                          <div className="col-md-12 generate-btn py-4">
                            <button
                              className="btn btn-primary rounded-5"
                              disabled={loading}
                              onClick={handleGenerate}
                            >
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2"></span>
                                  Generating...
                                </>
                              ) : (
                                "Generate QR Code"
                              )}
                            </button>
                          </div>

                        </div>
                      </Row>
                    </div>
                  </Tab>


                </Tabs>
                <div className="RIght_Row"></div>
              </div>
            </Col>

            {/* Right: Preview + Download (matches your desktop screenshot) */}
            <Col md={4} className="text-center">
              <h4 className="fw-bold py-2">Download your QR</h4>
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
                  }}
                >
                  {/* Quiet zone: keep a little white margin so scanners read it reliably */}
                  <div
                    ref={setQrRef}
                    style={{
                      background: generatedBgColor,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                      borderRadius: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px"
                    }}
                    onClick={handleDownload}
                  >
                    {qrValue ? (
                      <QRCodeSVG
                        value={qrValue}
                        size={256}
                        fgColor={generatedQrColor}
                        bgColor={generatedBgColor}
                        level="H"
                        style={{ display: "block" }}
                      />
                    ) : (
                      <div style={{ textAlign: "center", color: "#999" }}>
                        <img
                          src={QR_1}
                          alt="TheQRIFY Img"
                          width={257}
                          height={259}
                          style={{
                            display: "block", objectFit: "contain", width: `${slot.width}%`,
                            height: `${slot.height}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>


              <div className="nnnn1">
                <Button
                  variant="light"
                  className="border text-center"
                  onClick={downloadCurrentQR}
                >
                  <HiOutlineDownload className="Dw_Icon" />
                  Download
                </Button>
                <Button
                  variant="light"
                  className="border text-center"
                  onClick={handleShare}
                >
                  <HiOutlineShare className="Dw_Icon" />
                  Share
                </Button>
                <Button
                  variant="primary"
                  className="primary-action text-center"
                  onClick={handleOpenLink}
                >
                  <HiOutlineExternalLink className="Dw_Icon" />
                  Open Link
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
              style={{ minHeight: "256px", padding: "20px" }}
            >
              <div
                ref={setQrRef}
                style={{
                  background: generatedBgColor,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                {qrValue ? (
                  <QRCodeSVG
                    value={qrValue}
                    size={220}
                    fgColor={generatedQrColor}
                    bgColor={generatedBgColor}
                    level="H"
                    style={{ display: "block" }}
                  />
                ) : (
                  <div style={{ textAlign: "center", color: "#999" }}>
                    <img
                      src={QR_1}
                      alt="TheQRIFY Img"
                      width={257}
                      height={259}
                      style={{
                        display: "block", objectFit: "contain", width: `${slot.width}%`,
                        height: `${slot.height}%`,
                      }}
                    />
                  </div>
                )}
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
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Generating...
                    </>
                  ) : (
                    "Generate QR Code"
                  )}
                  {/* {country?.toUpperCase()} */}
                </Button>

                {/* Action Buttons */}
                <div className="d-flex flex-column gap-2 mt-3">
                  <Button
                    variant="light"
                    className="rounded-pill border w-100 py-2 d-flex align-items-center justify-content-center"
                    onClick={downloadCurrentQR}
                  >
                    <HiOutlineDownload className="Dw_Icon" />
                    Download QR
                  </Button>
                  <Button
                    variant="light"
                    className="rounded-pill border w-100 py-2 d-flex align-items-center justify-content-center"
                    onClick={handleShare}
                  >
                    <HiOutlineShare className="Dw_Icon" />
                    Share QR
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-pill w-100 py-2 d-flex align-items-center justify-content-center fw-bold"
                    style={{ backgroundColor: '#015f9e', borderColor: '#015f9e' }}
                    onClick={handleOpenLink}
                  >
                    <HiOutlineExternalLink className="Dw_Icon" />
                    Open Link
                  </Button>
                </div>
              </>
            )}

            {/* Design Step */}
            {mobileStep === "design" && (
              <div className="bg-light p-3 rounded">
                <div className="row mb-3">
                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <label htmlFor="qrColorInputMobile" className="fw-bold mb-1">Color</label>
                    <input
                      id="qrColorInputMobile"
                      type="color"
                      value={qrColor}
                      className="custom-color mt-2"
                      onChange={(e) => setQrColor(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <label htmlFor="bgColorInputMobile" className="fw-bold mb-1">Background Color</label>
                    <input
                      id="bgColorInputMobile"
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
      </div>
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

      {/* QR Code Generator – Create Your Free, Custom QR Code in Seconds */}

      <div className="button_4_Bg text-center bg-white py-5 mb-5" id="About">
        <Container>
          <h1 className="fw-bold">
            QR Code Generator – Create Your Free, Custom QR Code in Seconds
          </h1>

          <p className="text-muted mb-5">
            Design, customize, and download your free QR code with your own colors, shapes, and logo — all in just 3 simple steps.
            Perfect for businesses, restaurants, creators, events, products, and personal use.
          </p>

          <h2 className="fw-semibold mb-5">How to create a QR code?</h2>

          <Row className="g-3 step_1_Img justify-content-center">
            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <picture className="w-100">
                  <source srcSet={step1} type="image/png" />
                  <img
                    src={step1}
                    alt="Step 1"
                    loading="lazy"
                    width={354}
                    height={177}
                    sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 354px"
                    srcSet={`${step1} 354w`}
                    className="card-img-top img-fluid p-3 step-card-img"
                  />
                </picture>

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 1</h1>
                  <h2 className="fw-bold h5 mb-3">Choose the Content for Your QR Code</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">
                      Select what you want your QR code to link to. TheQrify supports a wide variety of QR code types, including:
                    </p>
                    <ul className="text-start">
                      <li>Website URL</li>
                      <li>PDF documents</li>
                      <li>Restaurant menus</li>
                      <li>Videos</li>
                      <li>Business cards (vCard)</li>
                      <li>Social media</li>
                      <li>Apps & app stores</li>
                      <li>Text, contact info, WiFi, and more</li>
                    </ul>
                    <p className="mb-0">Simply pick the type and add your information.</p>
                  </div>

                  {/* optional spacer so footer/buttons stay at bottom */}
                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <picture className="w-100">
                  <source srcSet={step2} type="image/png" />
                  <img
                    src={step2}
                    alt="Step 2"
                    loading="lazy"
                    width={354}
                    height={177}
                    sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 354px"
                    srcSet={`${step2} 354w`}
                    className="card-img-top img-fluid p-3 step-card-img"
                  />
                </picture>

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 2</h1>
                  <h2 className="fw-bold h5 mb-3">Customize & Design Your QR Code</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">Make your QR code truly unique with our advanced design options:</p>
                    <ul className="text-start">
                      <li>Choose custom colors</li>
                      <li>Select from multiple shapes & styles</li>
                      <li>Add your own logo or brand mark</li>
                      <li>Edit frames, eyes, and patterns</li>
                      <li>Preview your QR code in real-time</li>
                    </ul>
                    <p className="mb-0">Our design tool helps you create a professional, branded QR code that stands out everywhere you display it.</p>
                  </div>

                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <picture className="w-100">
                  <source srcSet={step3} type="image/png" />
                  <img
                    src={step3}
                    alt="Step 3"
                    loading="lazy"
                    width={354}
                    height={177}
                    sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 354px"
                    srcSet={`${step3} 354w`}
                    className="card-img-top img-fluid p-3 step-card-img"
                  />
                </picture>

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 3</h1>
                  <h2 className="fw-bold h5 mb-3">Download Your QR Code Instantly</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">Once your design is ready, download your QR code in multiple high-quality formats:</p>
                    <ul className="text-start">
                      <li>PNG (best for digital use)</li>
                      <li>SVG (infinite scalability for print)</li>
                      <li>PDF (ideal for documents & flyers)</li>
                    </ul>
                    <p className="mb-0">Print it, share it digitally, or integrate it into menus, posters, business cards, packaging, brochures — anywhere. And just like that… your QR code is ready to use!</p>
                  </div>

                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <Button
              as="a"
              href="#QR_Main"
              variant="primary"
              className="fw-semibold rounded-pill"
              style={{ backgroundColor: '#005F9E', padding: '14px 26px', borderRadius: '50px', textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}
            >
              Create QR code
            </Button>
          </div>
        </Container>
      </div>

      {/* Why Choose TheQrify? */}

      {/* <div className="button_4_Bg text-center bg-white" id="About">
        <Container>
          <h1 className="fw-bold mb-4">
            Why Choose TheQrify?
          </h1>
          <Row className="g-3 step_1_Img justify-content-center">
            <Col md={2} sm={6} xs={12}></Col>
            <Col md={4} sm={4} xs={12}>
              <div className="h-100 d-flex flex-column align-items-center text-center">
                <img
                  src={thinking}
                  className="card-img-top1 img-fluid step-card-img"
                  alt="Step 3"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={5} sm={6} xs={12}>
              <div className="card-body d-flex flex-column">
                <ul className="text-start">
                  <li>100% free QR code generator</li>
                  <li>No login required</li>
                  <li>High-resolution downloads</li>
                  <li>Professional customization</li>
                  <li>Suitable for business and personal use</li>
                  <li>Simple, fast, and secure</li>
                </ul>
                <p className="mt-auto text-start">TheQrify helps you create modern, branded, and high-performing QR codes in minutes.</p>
              </div>
            </Col>
          </Row>

        </Container>
      </div> */}

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
          QR codes can contain a wide range of content and at TheQRIFY we offer them
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
      {/* ═══════════════════════════════════════════════════
          SECTION: What is a QR Code Generator
      ═══════════════════════════════════════════════════ */}
      <div id="what-is-qr-generator" style={{ background: "linear-gradient(135deg, #ECF7FF 0%, #ECF7FF 100%)", padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              {/* Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(31, 96, 160, 0.1)", borderRadius: "30px", padding: "6px 18px", marginBottom: "20px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F60A0", display: "inline-block", boxShadow: "0 0 6px rgba(31, 96, 160, 0.5)" }}></span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#1F60A0", letterSpacing: "0.5px", textTransform: "uppercase" }}>QR Code Generator</span>
              </div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0d1b2a", lineHeight: 1.25, marginBottom: "20px" }}>
                What is a QR Code Generator?
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>
                A <strong style={{ color: "#0d1b2a" }}>QR Code Generator</strong> is a powerful online tool that instantly converts any type of digital information — such as a website URL, phone number, contact card, WiFi credentials, payment link, or plain text — into a scannable QR code image.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>
                QR codes (Quick Response codes) are two-dimensional barcodes that can be read at high speed by any modern smartphone camera. Unlike traditional 1D barcodes that store only a handful of characters, a single QR code can hold up to <strong style={{ color: "#0d1b2a" }}>4,296 alphanumeric characters</strong> or 7,089 numeric characters — making them versatile for practically every use case imaginable.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, marginBottom: "24px" }}>
                <strong style={{ color: "#1F60A0" }}>TheQRIFY</strong> is a free, browser-based QR code generator that requires no download, no registration, and no technical knowledge. Simply choose your content type, enter your data, customise the colours, and download a high-resolution code in seconds.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {["No sign-up needed", "Free forever", "High-res downloads", "Custom colours", "Mobile-ready", "Instant generation"].map((tag) => (
                  <span key={tag} style={{ background: "#fff", border: "1.5px solid rgba(31, 96, 160, 0.15)", borderRadius: "20px", padding: "6px 14px", fontSize: "13px", fontWeight: 600, color: "#1F60A0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: "#fff", borderRadius: "24px", padding: "36px", boxShadow: "0 20px 60px rgba(31, 96, 160, 0.08)", border: "1px solid rgba(31, 96, 160, 0.1)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1b2a", marginBottom: "24px" }}>Types of QR Codes You Can Create</h3>
                <div className="row g-3">
                  {[
                    { icon: <BsGlobe />, label: "Website URL", sub: "Link any webpage", tabKey: "website" },
                    { icon: <BsPersonFill />, label: "vCard / Contact", sub: "Digital business card", tabKey: "vcard" },
                    { icon: <BsWifi />, label: "WiFi Access", sub: "Share network details", tabKey: "wifi" },
                    { icon: <BsWhatsapp />, label: "WhatsApp Chat", sub: "Instant messaging", tabKey: "whatsapp" },
                    { icon: <BsEnvelopeFill />, label: "Email Draft", sub: "Pre-filled email", tabKey: "email" },
                    { icon: <BsChatLeftTextFill />, label: "SMS Message", sub: "Text with a scan", tabKey: "sms" },
                    { icon: <BsType />, label: "Plain Text", sub: "Store any text data", tabKey: "text" },
                  ].map((item) => (
                    <div className="col-12 col-md-6" key={item.label}>
                      <a href="#QR_Main"
                        onClick={() => setActiveTab(item.tabKey)}
                        style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", borderRadius: "16px", padding: "12px 14px", border: "1.5px solid rgba(31, 96, 160, 0.08)", transition: "all 0.3s ease", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", height: "100%" }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(31, 96, 160, 0.1)"; e.currentTarget.style.borderColor = "rgba(31, 96, 160, 0.2)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.02)"; e.currentTarget.style.borderColor = "rgba(31, 96, 160, 0.08)"; }}
                      >
                        <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #1F60A0 0%, #3e81c1 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "#fff", flexShrink: 0, boxShadow: "0 4px 10px rgba(31, 96, 160, 0.2)" }}>
                          {item.icon}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b2a", lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</div>
                          <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.sub}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION: How QR Codes Work
      ═══════════════════════════════════════════════════ */}
      <div id="how-qr-codes-work" style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(31, 96, 160, 0.1)", borderRadius: "30px", padding: "6px 18px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F60A0", display: "inline-block", boxShadow: "0 0 6px rgba(31, 96, 160, 0.5)" }}></span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1F60A0", letterSpacing: "0.5px", textTransform: "uppercase" }}>The Technology</span>
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0d1b2a", marginBottom: "16px" }}>How QR Codes Work</h2>
            <p style={{ fontSize: "1.05rem", color: "#475569", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
              Understanding the technology behind QR codes helps you use them more effectively. Here is a step-by-step breakdown of how data is encoded and decoded.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="row g-4 mb-5">
            {[
              {
                step: "01",
                title: "Data Encoding",
                icon: <BsCpu />,
                desc: "When you generate a QR code, your input (URL, text, WiFi) is converted into a binary string using one of four encoding modes: Numeric, Alphanumeric, Binary/Byte, or Kanji. The encoding mode chosen depends on the type of characters in your data.",
              },
              {
                step: "02",
                title: "Error Correction",
                icon: <BsShieldLock />,
                desc: "QR codes use Reed-Solomon error correction, meaning even if up to 30% of the code is damaged, obscured, or dirty, the scanner can still read and reconstruct the original data. TheQRIFY uses Level H (Highest) error correction by default.",
              },
              {
                step: "03",
                title: "Matrix Construction",
                icon: <BsGrid3X3 />,
                desc: "The encoded binary data is arranged into the iconic square grid of dark and light modules (pixels). Special finder patterns in the three corners help scanners detect the QR code's position and orientation instantly, regardless of angle.",
              },
              {
                step: "04",
                title: "Scanning & Decoding",
                icon: <BsQrCodeScan />,
                desc: "When a smartphone camera points at a QR code, the camera app detects the finder patterns, corrects perspective distortion, samples each module, reverses the encoding process, and presents the decoded information — all in under half a second.",
              },
            ].map((item) => (
              <div className="col-md-6" key={item.step}>
                <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)", borderRadius: "20px", padding: "28px", height: "100%", border: "1.5px solid rgba(31, 96, 160, 0.1)", position: "relative", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                  <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "48px", opacity: 0.06, fontWeight: 900, color: "#1F60A0", fontFamily: "monospace" }}>{item.step}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", position: "relative", zIndex: 2 }}>
                    <div style={{ background: "linear-gradient(135deg, #1F60A0 0%, #3e81c1 100%)", borderRadius: "12px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#ffffff", flexShrink: 0, boxShadow: "0 4px 12px rgba(31, 96, 160, 0.3)" }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0d1b2a", margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.75, margin: 0, position: "relative", zIndex: 2 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Anatomy callout */}
          <div style={{ background: "linear-gradient(135deg, #1F60A0 0%, #1F60A0 100%)", borderRadius: "24px", padding: "36px 40px", color: "#fff", border: "1px solid rgba(31, 96, 160, 0.2)", boxShadow: "0 16px 40px rgba(31, 96, 160, 0.15)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px", color: "#ffffff" }}>Did You Know?</h3>
            <p style={{ fontSize: "1rem", color: "#cbd5e1", lineHeight: 1.8, marginBottom: 0 }}>
              A QR code invented in 1994 can now connect a printed poster on a café wall to a live table-booking form, a product package label to a playlist, or a business card to a complete digital portfolio — all without a single typed letter. The QR code bridges the physical and digital worlds in less than a second, and <strong style={{ color: "#fff" }}>TheQRIFY</strong> puts that power in your hands for free.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION: Benefits of QR Codes
      ═══════════════════════════════════════════════════ */}
      <div id="benefits-of-qr-codes" style={{ background: "linear-gradient(135deg, #ECF7FF 0%, #ECF7FF 100%)", padding: "80px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(31, 96, 160, 0.1)", borderRadius: "30px", padding: "6px 18px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F60A0", display: "inline-block", boxShadow: "0 0 6px rgba(31, 96, 160, 0.5)" }}></span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1F60A0", letterSpacing: "0.5px", textTransform: "uppercase" }}>Why Use QR Codes</span>
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0d1b2a", marginBottom: "16px" }}>Benefits of Using QR Codes</h2>
            <p style={{ fontSize: "1.05rem", color: "#475569", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
              QR codes are one of the most versatile and cost-effective tools available to businesses, marketers, educators, and individuals today. Here's why millions of people generate QR codes every day.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <BsLightningChargeFill />,
                title: "Instant, Contactless Sharing",
                desc: "Share menus, price lists, portfolios, app download links, WiFi passwords, or full documents with a single scan. No typing, no delays — just point, scan, and access.",
              },
              {
                icon: <BsGraphUpArrow />,
                title: "Powerful Marketing Tool",
                desc: "QR codes dramatically increase the ROI of print marketing. Add them to flyers, billboards, packaging, and business cards to instantly bridge the gap between offline and online.",
              },
              {
                icon: <BsCreditCardFill />,
                title: "Frictionless Payments",
                desc: "QR-based payment systems (UPI, PayPal, Stripe) have replaced cash registers in millions of businesses. Customers simply scan and pay — reducing queues and hardware costs.",
              },
              {
                icon: <BsRecycle />,
                title: "Eco-Friendly & Cost-Saving",
                desc: "Digital menus, catalogues, and brochures delivered via QR code eliminate printing costs and paper waste. Enabling real-time updates without reprinting saves thousands.",
              },
              {
                icon: <BsShieldLockFill />,
                title: "Secure & Reliable",
                desc: "QR codes use Reed-Solomon error correction so they remain scannable even when partially damaged or obscured. They simply link to your chosen destination, keeping data safe.",
              },
              {
                icon: <BsBarChartFill />,
                title: "Trackable Campaign Analytics",
                desc: "Dynamic QR codes let you track every scan — including device type, time, location, and frequency. Use this data to optimise your campaigns and measure real-world engagement.",
              },
              {
                icon: <BsPaletteFill />,
                title: "Highly Customisable",
                desc: "Modern QR codes are far from boring black-and-white squares. With TheQRIFY you can change colours, add your brand logo, choose styled frames, and maintain full scannability.",
              },
              {
                icon: <BsPhoneFill />,
                title: "Works on Every Device",
                desc: "No app required. Every modern iPhone and Android phone can scan a QR code directly from the native camera app. This universal compatibility means anyone can access your content.",
              },
            ].map((benefit) => (
              <div className="col-md-6 col-lg-3" key={benefit.title}>
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "32px 24px", height: "100%", boxShadow: "0 4px 20px rgba(31, 96, 160, 0.04)", border: "1.5px solid rgba(31, 96, 160, 0.08)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(31, 96, 160, 0.12)"; e.currentTarget.style.borderColor = "rgba(31, 96, 160, 0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(31, 96, 160, 0.04)"; e.currentTarget.style.borderColor = "rgba(31, 96, 160, 0.08)"; }}
                >
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #1F60A0 0%, #3e81c1 100%)", fontSize: "22px", color: "#fff", marginBottom: "20px", boxShadow: "0 4px 12px rgba(31, 96, 160, 0.2)" }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{benefit.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION: Use Cases
      ═══════════════════════════════════════════════════ */}
      <div id="qr-code-use-cases" style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(31, 96, 160, 0.15)", borderRadius: "30px", padding: "6px 18px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F60A0", display: "inline-block", boxShadow: "0 0 6px rgba(31, 96, 160, 0.5)" }}></span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1F60A0", letterSpacing: "0.5px", textTransform: "uppercase" }}>Real-World Applications</span>
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0d1b2a", marginBottom: "16px" }}>QR Code Use Cases</h2>
            <p style={{ fontSize: "1.05rem", color: "#475569", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
              From cafés to corporations, QR codes are transforming how businesses and individuals share information. Explore the most popular real-world applications.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                category: "Restaurants & Food",
                icon: <FaUtensils />,
                cases: [
                  "Digital menus — update prices without reprinting",
                  "Table ordering systems for faster service",
                  "Allergen & nutritional information pages",
                  "Loyalty reward programme check-ins",
                  "Online review collection (Google, Yelp)",
                ],
              },
              {
                category: "Retail & E-commerce",
                icon: <BsBagFill />,
                cases: [
                  "Product detail & sizing guide pages",
                  "Instant reorder / add-to-cart links",
                  "In-store promotions and discount codes",
                  "Unboxing experience & warranty registration",
                  "Omnichannel loyalty programmes",
                ],
              },
              {
                category: "Business & Networking",
                icon: <BsBriefcaseFill />,
                cases: [
                  "Digital business cards (vCard QR codes)",
                  "Conference & event badge check-in",
                  "Company brochure & portfolio links",
                  "Employee onboarding document packs",
                  "Office WiFi sharing without revealing passwords",
                ],
              },
              {
                category: "Marketing & Advertising",
                icon: <FaBullhorn />,
                cases: [
                  "Billboard & print-to-digital campaigns",
                  "YouTube / social media profile links",
                  "Promo landing pages for TV adverts",
                  "Packaging competitions & sweepstakes",
                  "Influencer trackable campaign links",
                ],
              },
              {
                category: "Education & Healthcare",
                icon: <FaGraduationCap />,
                cases: [
                  "Classroom resource & reading list links",
                  "Assignment submission portals",
                  "Patient intake forms & symptom checkers",
                  "Medication instructions & pharmacy info",
                  "Museum & gallery interactive audio guides",
                ],
              },
              {
                category: "Events & Entertainment",
                icon: <FaTicketAlt />,
                cases: [
                  "Ticket validation & e-guestlist check-in",
                  "Wedding RSVP forms & photo albums",
                  "Live poll & audience Q&A links",
                  "Event programme & speaker schedule",
                  "Charity donation & fundraising pages",
                ],
              },
            ].map((uc) => (
              <div className="col-md-6 col-lg-4" key={uc.category}>
                <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f4f8fc 100%)", borderRadius: "20px", padding: "32px 28px", height: "100%", border: "1.5px solid rgba(31, 96, 160, 0.12)", boxShadow: "0 8px 24px rgba(31, 96, 160, 0.04)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 15px 35px rgba(31, 96, 160, 0.1)"; e.currentTarget.style.borderColor = "rgba(1, 95, 158, 0.25)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(31, 96, 160, 0.04)"; e.currentTarget.style.borderColor = "rgba(31, 96, 160, 0.12)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", background: "linear-gradient(135deg, #1F60A0 0%, #3e81c1 100%)", borderRadius: "10px", fontSize: "20px", color: "#fff", boxShadow: "0 4px 10px rgba(31, 96, 160, 0.2)", flexShrink: 0 }}>{uc.icon}</div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0d1b2a", margin: 0 }}>{uc.category}</h3>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {uc.cases.map((c) => (
                      <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#475569", lineHeight: 1.65, marginBottom: "8px" }}>
                        <span style={{ color: "#1F60A0", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="text-center mt-5">
            <div style={{ background: "linear-gradient(135deg, #1F60A0 0%, #1F60A0 100%)", borderRadius: "24px", padding: "48px 32px", color: "#fff", boxShadow: "0 16px 40px rgba(31, 96, 160, 0.25)" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px" }}>Ready to Create Your QR Code?</h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", marginBottom: "28px", maxWidth: "560px", margin: "0 auto 28px" }}>
                Join thousands of businesses and creators. Generate your first free, customised QR code in under 30 seconds — no account required.
              </p>
              <a href="#QR_Main" style={{ display: "inline-block", background: "#fff", color: "#1F60A0", fontWeight: 700, padding: "14px 36px", borderRadius: "50px", textDecoration: "none", fontSize: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Generate Free QR Code Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Everything you need to know to get started */}
      <div className="bg-white mb-5" >
        <div className="container">
          <div className="row justify-content-center button_4_Bg text-center py-3 mb-3" id="FAQ">
            <div className="col-md-12">
              <h1>Everything You Need to Know to Get Started with QR Codes</h1>
            </div>

            <div className="col-md-9">
              <p>
                Discover the essential concepts, benefits, and simple steps to begin using QR codes effectively.
                This guide will help you understand what QR codes are, why they are so powerful, and how anyone—from individuals to businesses—can start using them instantly.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-3 img_10_png">
              <img
                src={img_10}
                alt="Getting started with QR Codes"
                className="img-fluid"
                loading="lazy"
                width="386"
                height="519"
              />
            </div>
            <div className="col-md-4 FaQ_Slider">
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
                      What Is a QR Code?
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      A <b className="B_Tages"> QR Code (Quick Response Code)</b> is a type of two-dimensional barcode that allows instant access to digital information through a simple scan.
                      Unlike traditional barcodes, QR codes can store <b className="B_Tages"> significantly more data</b>, including website links, contact details, menus, videos, app links,
                      documents, and more.
                      Created in 1994 by <b className="B_Tages"> Denso Wave</b>, a subsidiary of Toyota, QR codes were originally designed to track automotive parts and streamline logistics.
                      Today, QR codes have become an essential tool worldwide due to their:
                      <ul>
                        <li>High speed of scanning</li>
                        <li>Large storage capacity</li>
                        <li>Compatibility with all smartphones</li>
                        <li>Ability to connect the physical and digital worlds instantly</li>
                      </ul>
                      Thanks to modern smartphone cameras, anyone can scan a QR code without needing special equipment.
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
                      Benefits of Using QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      QR codes have become a powerful tool for businesses, creators, and individuals due to their <b className="B_Tages"> versatility, accessibility, and convenience.</b>
                      Here are some key benefits:
                      <ol>
                        <li><b className="B_Tages">1. Fast, Contactless Information Sharing</b></li>
                        Share menus, catalogs, PDFs, website links, app downloads, or product details instantly—no typing needed.
                        <li><b className="B_Tages">2. Ideal for Marketing & Promotions</b></li>
                        QR codes are widely used in digital marketing campaigns, posters, packaging, business cards, events, and advertisements.
                        With one scan, users reach exactly where you want them—your website, social profiles, form, or product page.
                        <li><b className="B_Tages">3. Supports Online Payments</b></li>
                        QR codes enable quick, secure payments through platforms like UPI, wallets, and banking apps—making transactions effortless.
                        <li><b className="B_Tages">4. Customer Engagement & Feedback</b></li>
                        Use QR codes to collect reviews, surveys, ratings, or customer feedback directly from your audience.
                        <li><b className="B_Tages">5. Boosts Business Visibility</b></li>
                        More brands today rely on QR codes to enhance customer interactions, increase conversions, and offer seamless digital experiences.
                      </ol>
                      From restaurants and retail stores to real estate agencies, freelancers, gyms, cafés, and e-commerce brands — QR codes help everyone communicate faster
                      and more effectively.

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
                      How to Start Using QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      Most modern smartphones have a <b className="B_Tages"> built-in QR scanner </b> within the camera app, making scanning extremely simple.
                      <ol>
                        <li><b className="B_Tages">Step 1: Open Your Camera</b></li>
                        Point your smartphone camera at any QR code and keep it still for a few seconds.
                        <li><b className="B_Tages">Step 2: Wait for the Popup</b></li>
                        A notification or link preview will appear on your screen automatically. Tap to open.
                        <li><b className="B_Tages">Step 3: If Scanning Doesn’t Work</b></li>
                      </ol>
                      <ul>
                        <li>Ensure QR scanning is enabled in your camera settings</li>
                        <li>Clean your camera lens</li>
                        <li>Improve lighting conditions</li>
                        <li>Try holding the phone steady at a slight distance</li>
                      </ul>
                      If your device does not support built-in scanning, simply download a <b className="B_Tages"> QR Code Reader</b> app from the App Store or Google Play.

                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Start Creating Your Own QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      Now that you understand QR codes and their benefits, creating your own is easy.
                      With TheQrify, you can generate <b className="B_Tages"> free, customizable QR codes </b> in just a few seconds—perfect for businesses, events, marketing, payments, and more.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
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
      < div className="bg-white" >
        <div className="container py-5">
          <div className="row py-5 button_4_Bg" id="FaQ1">
            <div className="col-md-12 text-center">
              <h1>FAQ – Don’t Leave With Doubts</h1>
              <p>Everything you need to know about creating, customizing, and using QR codes with TheQrify.</p>
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
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      1. What is a QR Code Generator?
                    </button>
                  </h2>

                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      A QR code generator is an online tool that lets you create QR codes quickly and easily.
                      With TheQrify, you can generate multiple types of QR codes such as:
                      <ul>
                        <li>Website links</li>
                        <li>PDF documents</li>
                        <li>Images & photo galleries</li>
                        <li>Menus & price lists</li>
                        <li>Video links</li>
                        <li>Playlists</li>
                        <li>Business cards (vCards)</li>
                        <li>WiFi access</li>
                        <li>App store links</li>
                        <li>Payment links</li>
                        <li>Customer feedback forms</li>
                        <li>Event promotions</li>
                      </ul>
                      Businesses across all industries use QR codes for marketing, payments, customer engagement, and seamless digital access.
                      TheQrify makes it simple, intuitive, and fully customizable.
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
                      2. Are QR Codes Free?
                    </button>
                  </h2>

                  <div
                    id="collapseTwo1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes — you can create <b className="B_Tages">free QR codes</b> with TheQrify.
                      In our upcoming version, we will offer:
                      <ul>
                        <li>Free access for basic features</li>
                        <li>Paid plans for advanced features like analytics, dynamic QR codes, and file hosting</li>
                      </ul>
                      Everything you generate during your free period remains yours forever.
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
                      3. Can I create an account to generate free QR Codes?

                    </button>
                  </h2>

                  <div
                    id="collapseThree1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Absolutely.
                      You will have <b className="B_Tages">free access</b> to generate QR codes with essential features.
                      When paid plans launch, you can upgrade anytime if you want advanced tools for business.
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
                      4. Why do some websites offer QR code creation for free?
                    </button>
                  </h2>

                  <div
                    id="collapseFour1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Many free platforms generate <b className="B_Tages">static QR codes</b>, which don’t allow:
                      <ul>
                        <li>Editing</li>
                        <li>Updating content</li>
                        <li>Tracking scans</li>
                        <li>Hosting files</li>
                      </ul>
                      At TheQrify, our goal is to provide <b className="B_Tages">dynamic, editable, and analytics-enabled QR codes,</b> which require hosting, storage, security, and server optimizations — hence premium plans will support these capabilities.
                      Static QR = free but limited
                      Dynamic QR = powerful, editable, trackable
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
                      5. Can the QR codes I generate be used for commercial purposes?
                    </button>
                  </h2>

                  <div
                    id="collapseFive1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes, 100%.
                      You can use TheQrify QR codes for:
                      <ul>
                        <li>Marketing campaigns</li>
                        <li>Product packaging</li>
                        <li>Restaurant menus</li>
                        <li>Offline-to-online promotions</li>
                        <li>Digital business cards</li>
                        <li>Retail displays</li>
                        <li>Events, exhibitions & brochures</li>
                        <li>Payments and service links</li>
                      </ul>
                      Thousands of businesses use QR codes to increase visibility, engagement, and conversions.
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
                      6. What kind of information can be stored in a QR Code?
                    </button>
                  </h2>

                  <div
                    id="collapseSix1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      QR codes can store a wide variety of data, including:
                      <ul>
                        <li>URLs</li>
                        <li>PDFs</li>
                        <li>Videos</li>
                        <li>Images</li>
                        <li>Playlists</li>
                        <li>Price lists</li>
                        <li>Menus</li>
                        <li>Documents</li>
                        <li>Payment links</li>
                        <li>WiFi details</li>
                        <li>Contact information (vCard)</li>
                        <li>App download links</li>
                      </ul>

                      With TheQrify, you can redirect users to any type of digital content with just a scan.
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
                      7. Do QR Codes have a scan counter or analytics?
                    </button>
                  </h2>

                  <div
                    id="collapseSeven1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes — in our paid plans (coming soon), you will get advanced analytics features such as:
                      <ul>
                        <li>Number of scans</li>
                        <li>Device type</li>
                        <li>Location insights</li>
                        <li>Scan time & engagement data</li>
                      </ul>
                      This helps you analyze and optimize your campaigns for better results.
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
                      8. How long are QR Codes valid? Do they expire?
                    </button>
                  </h2>

                  <div
                    id="collapseEight1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      QR codes do <b className="B_Tages">not</b> expire.
                      A QR code remains active unless:
                      <ul>
                        <li>The link changes</li>
                        <li>The linked file is deleted</li>
                        <li>The website goes offline</li>
                      </ul>
                      With <b className="B_Tages">dynamic QR codes,</b> you can update the link anytime without changing the printed code — ensuring long-term usability.
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
                      9. What is the difference between a static and dynamic QR code?
                    </button>
                  </h2>

                  <div
                    id="collapseNine1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Static QR Codes
                      <ul>
                        <li>Cannot be edited</li>
                        <li>Cannot track scans</li>
                        <li>Directly embed the URL</li>
                        <li>Best for simple, unchanging uses</li>
                      </ul>
                      Dynamic QR Codes
                      <ul>
                        <li>Fully editable even after printing</li>
                        <li>Track scan analytics</li>
                        <li>Allow link updates anytime</li>
                        <li>Ideal for business, marketing, and professional use</li>
                      </ul>
                      TheQrify offers dynamic QR capabilities in paid plans.
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
                      10. Can I manage all my QR Codes within the generator?
                    </button>
                  </h2>

                  <div
                    id="collapseTen1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes.
                      Once our dashboard and paid plans launch, you’ll be able to:
                      <ul>
                        <li>Create unlimited QR codes</li>
                        <li>Save and manage your designs</li>
                        <li>Edit or delete QR codes</li>
                        <li>Add logos, frames & customized styles</li>
                        <li>Update links in dynamic QR codes</li>
                        <li>Track analytics</li>
                        <li>Store your brand templates</li>
                      </ul>
                      Our goal is to provide a complete QR code management system for individuals and businesses.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2"></div>
          <div className="col-md-4 py-5">
            <img
              src={img_11}
              alt="QR Code customization options"
              className="QR_12"
              loading="lazy"
              width="386"
              height="386"
            />
          </div>

          <div className="col-md-6 py-5 d-flex align-items-center">
            <div className="QR_12_Font">
              <h1>Want to Know More?</h1>

              <p>
                Have questions about creating, customizing, or using QR codes?
                Explore our detailed <b className="B_Tages">Frequently Asked Questions</b> and find clear answers to everything you need to get started with TheQrify.
              </p>
              <a href="#FaQ1">
                <button
                  className="btn btn-primary rounded-5"
                  onClick={() =>
                    sendEvent("faq_open", {
                      event_category: "FAQ",
                      event_label: "FAQ Item Opened",
                      faq_id: "FaQ1",
                    })
                  }
                >
                  View FAQs
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ExploreAllGenerators />
      {/* Footer */}
      <footer className="w-100 text-white Buton_3_BG" >
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
              className="text-decoration-none"
              style={{ color: "#015f9e" }}
            >
              TheQRIFY
            </a>
            ©2026. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default QRGenerator;
