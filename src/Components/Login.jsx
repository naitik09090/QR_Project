import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import qr_image from "../assets/qr_image.png";

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert(`Welcome, ${data.user?.name || "User"}`);
        console.log("User logged in:", data.user);
        localStorage.setItem("token", data.token);

        // ✅ Redirect to dashboard/home page after login
        navigate("/");
      } else {
        // Show backend error if available
        const errorMsg =
          data?.detail ||
          data?.message ||
          "Invalid email or password. Please try again.";
        alert(errorMsg);
        console.log("Server response:", data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <img
        src={qr_image}
        alt="QR Code"
        className="img-fluid"
        style={{ Width: "auto",height: "auto" }}
      />

      <Form
        onSubmit={handleLogin}
        className="mx-auto border border-1 border-secondary rounded-4 p-5 bg-white"
        style={{ maxWidth: "100%", maxHeight: "500px" }}
      >
        <h1 className="text-center text-dark fs-3 mt-3 fw-medium">Login</h1>
        <p className="text-center text-muted small mt-2">
          Please sign in to continue
        </p>

        <div className="d-flex align-items-center bg-white border border-secondary rounded-pill px-3 py-2 mt-3">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border-0 shadow-none ms-2 text-muted"
          />
        </div>

        <div className="d-flex align-items-center bg-white border border-secondary rounded-pill px-3 py-2 mt-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-0 shadow-none ms-2 text-muted"
          />
        </div>

        <div className="text-start mt-3">
          <a href="#" className="text-decoration-none text-primary small">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-100 mt-3 rounded-pill bg-primary text-white text-center p-2 border-0"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-muted small mt-3 mb-2">
          Don’t have an account?{" "}
          <a href="/signUp" className="text-primary text-decoration-none">
            Sign up
          </a>
        </p>
      </Form>
    </div>
  );
}


