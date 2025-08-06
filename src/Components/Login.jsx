import React from "react";
import { Form } from "react-bootstrap";

export default function LoginForm() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <Form className="mx-auto border border-1 border-secondary rounded-4 p-5 bg-white" style={{ maxWidth: "1000px",maxHeight: "500px"}}>
                <h1 className="text-center text-dark fs-3 mt-3 fw-medium">Login</h1>
                <p className="text-center text-muted small mt-2">Please sign in to continue</p>

                {/* Email input */}
                <div className="d-flex align-items-center bg-white border border-secondary rounded-pill px-3 py-2 mt-4">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                    </svg>
                    <Form.Control
                        type="email"
                        placeholder="Email id"
                        className="border-0 shadow-none ms-2 text-muted"
                        required
                    />
                </div>

                {/* Password input */}
                <div className="d-flex align-items-center bg-white border border-secondary rounded-pill px-3 py-2 mt-3">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                    </svg>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="border-0 shadow-none ms-2 text-muted"
                        required
                    />
                </div>

                <div className="text-start mt-3">
                    <a href="#" className="text-decoration-none text-primary small">Forgot password?</a>
                </div>

                <a href="/">
                    <buttton type="submit" className="w-100 mt-3 rounded-pill bg-primary text-white text-center p-2 border-0">
                        Login
                    </buttton>
                </a>

                <p className="text-center text-muted small mt-3 mb-2">
                    Don’t have an account? <a href="/signUp" className="text-primary text-decoration-none">Sign up</a>
                </p>
            </Form>
        </div>
    );
}
