import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import qr_image from "../assets/qr_image.png";

export default function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    const apiData = {
      username: formData.username,
      email: formData.email,
      password1: formData.password,
      password2: formData.confirmPassword,
      first_name: formData.first_name,
      last_name: formData.last_name,
    };

    try {
      const res = await fetch(
        "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/auth/register/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        const errorMsg =
          data.username?.[0] ||
          data.email?.[0] ||
          data.password1?.[0] ||
          "Registration failed!";
        alert(errorMsg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <Row className="w-100 align-items-center">
        {/* QR Code Column */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <img
            src={qr_image}
            alt="QR Code"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </Col>

        {/* Form Column */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Form
            onSubmit={handleSubmit}
            className="w-100 border border-1 border-secondary rounded-4 p-4 bg-white"
            style={{ maxHeight: "100%" , maxWidth: "500px" }}
          >
            <h2 className="text-center text-dark fs-3 fw-medium mb-4">
              Register
            </h2>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Your Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="Enter Your First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>

            <p className="text-center text-muted small mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
