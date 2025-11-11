import React, { useEffect } from "react";

export default function AboutTheQRify() {
  // Inject Bootstrap 5 and Google Font
  useEffect(() => {
    const addLink = (href, id) => {
      if (document.getElementById(id)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.id = id;
      document.head.appendChild(link);
    };

    addLink("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", "bs5");
    addLink("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", "font-inter");
  }, []);

  const fontFamily = `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;

  return (
    <div style={{
      fontFamily,
      background: 'transparent',
      minHeight: '100vh'
    }}>

      {/* Main Content */}
      <main className="py-5">
        <article className="container" style={{ maxWidth: '1300px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">🧭 About Us — TheQRify</h2>
            <p className="text-muted">
              <strong>Title:</strong> About TheQRify | Free & Fast QR Code Generator
            </p>
          </div>
          {/* Who We Are */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>💡</span>
              Who We Are
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Welcome to <strong style={{ color: '#015f9e' }}>TheQRify</strong>, a modern, lightweight, and free QR Code Generator
              built to make creating and sharing QR codes effortless for everyone.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Whether you're a business owner, designer, restaurant manager, or student,
              TheQRify helps you generate custom, high-quality QR codes in seconds —
              without any signup or software installation.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We believe powerful tools should be simple, accessible, and fast — and that's exactly
              what TheQRify delivers.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* What We Do */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⚙️</span>
              What We Do
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              At TheQRify, we make it easy to create QR codes instantly for links, text, or menus.
              You can customize with colors and logos (coming soon), download in multiple formats like PNG, SVG, and PDF,
              and manage bulk and business QR codes with our Pro features.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We've designed TheQRify with <strong>speed, security, and simplicity</strong> in mind — so
              users can focus on what really matters: connecting with their audience.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Mission */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>🚀</span>
              Our Mission
            </h2>
            <blockquote style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              color: '#015f9e',
              fontWeight: '600',
              fontStyle: 'italic',
              borderLeft: '4px solid #015f9e',
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              "To make QR creation faster, smarter, and accessible to everyone — from individuals to enterprises."
            </blockquote>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              TheQRify aims to bridge the gap between physical and digital worlds by empowering
              businesses to use QR codes effectively in marketing, operations, and communication.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Why Choose Us */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>🌎</span>
              Why Choose TheQRify
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              TheQRify is <strong>lightning fast</strong> — generate a QR code in seconds with our user-friendly interface
              that has no learning curve. We're constantly adding smart features like upcoming Pro tools for analytics,
              bulk QRs, and branded designs.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Your privacy comes first — we don't store your data or track what you create.
              We're constantly improving and releasing new features to make TheQRify the go-to QR
              solution for creators and businesses worldwide.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Connect */}
          <section className="mb-3">
            <h2 className="fw-bold mb-4" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>🤝</span>
              Let's Connect
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              Have feedback or collaboration ideas? We'd love to hear from you!
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              <strong>Contact us:</strong>
              <a href="mailto:support@theqrify.com"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                support@theqrify.com
              </a>
              <br />
              <strong>Website:</strong>
              <a href="https://theqrify.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                theqrify.com
              </a>
            </p>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="text-center py-2" style={{
        background: 'transparent',
        borderTop: '1px solid #e2e8f0',
        color: '#64748b'
      }}>
        <div className="container">
          <p className="mb-0" style={{ fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} TheQRify (Infosync.ai) — All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}