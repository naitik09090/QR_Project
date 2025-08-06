import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Registration() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        address: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add your submit logic here (API call, validation, etc.)
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <Form
                onSubmit={handleSubmit}
                className="mx-auto border border-1 border-secondary rounded-4 p-4 bg-white"
                style={{ maxWidth: "600px" }}
            >
                <h2 className="text-center text-dark fs-3 fw-medium mb-4">Register</h2>

                {/* Full Name */}
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Email and Phone */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Password and Confirm */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
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
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Gender and DOB */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Address */}
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Enter your address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Terms and Conditions */}
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="I agree to the terms and conditions"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <a href="/login">
                    <buttton type="submit" className="w-100 mt-3 rounded-pill bg-primary text-white text-center p-2 border-0">
                        Register
                    </buttton>
                </a>

                <p className="text-center text-muted small mt-3">
                    Already have an account? <a href="/login" className="text-primary">Login</a>
                </p>
            </Form>
        </div>
    );
}
