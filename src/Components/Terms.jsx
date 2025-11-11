import React, { useEffect } from "react";

export default function TermsConditions() {
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

      <div className="text-center py-5">
        <h1 className="fw-bold">📜 Terms & Conditions</h1>
        <small className="text-secondary">
          Effective Date: [Insert Date] | Website:
          <a href="https://theqrify.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
             theqrify.com
          </a>
          <p style={{ fontSize: '0.95rem', opacity: 0.85 }}>
            Company: Infosync.ai (Product: TheQRify)
          </p>
        </small>
      </div>

      {/* Main Content */}
      <main className="mb-5">
        <article className="container" style={{ maxWidth: '1300px' }}>

          {/* 1. Acceptance of Terms */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Acceptance of Terms
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              By using or accessing TheQRify ("we," "our," or "us"), you agree to comply with these Terms & Conditions.
              If you do not agree with any part of these terms, please discontinue using the website immediately.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 2. Use of the Service */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Use of the Service
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              TheQRify provides tools to create, download, and manage QR codes. You agree to use the service only for lawful purposes
              and not for distributing malicious or harmful content, phishing, spam, or fraudulent activities, or creating QR codes
              that lead to illegal or offensive material.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We reserve the right to suspend or terminate access if misuse is detected.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 3. Intellectual Property */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Intellectual Property
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              All website content, including text, design, graphics, code, and functionality, is owned or licensed by TheQRify.
              You may not copy, modify, reproduce, or distribute our materials without prior written permission.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 4. Generated QR Codes */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Generated QR Codes
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              QR codes created through TheQRify are generated instantly and are not stored permanently on our servers.
              You are solely responsible for the content linked or encoded within the QR code.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              TheQRify is not liable for misuse, broken links, or expired URLs associated with your generated QR codes.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 5. Paid Features & Subscriptions */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Paid Features & Subscriptions
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              TheQRify offers both free and premium plans. By purchasing a subscription, you agree to provide accurate payment details,
              not share account credentials, and understand that subscription fees are non-refundable once activated (unless required by law).
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We may change pricing or plans at any time, with prior notice to existing users.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 6. Third-Party Services */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Third-Party Services
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              TheQRify may use third-party services such as Google Analytics for usage insights, Google AdSense for advertisements,
              and payment gateways for premium plans.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              These third parties may collect data under their respective privacy policies. TheQRify is not responsible for their practices.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 7. Limitation of Liability */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Limitation of Liability
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              TheQRify is provided "as is" without any warranties of any kind, express or implied. We do not guarantee uninterrupted
              availability, accuracy, or fitness for a particular purpose.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We are not responsible for losses arising from the use of or inability to use our platform.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 8. Privacy & Data Protection */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Privacy & Data Protection
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Your privacy is important to us. Please review our{' '}
              <a href="/privacy-policy"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                Privacy Policy
              </a>{' '}
              to understand how we collect, use, and protect information.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 9. Termination */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Termination
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We reserve the right to suspend or terminate access to TheQRify at any time, without notice,
              if we believe you've violated these terms.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 10. Changes to These Terms */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Changes to These Terms
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We may modify or update these Terms & Conditions from time to time. The latest version will always be available at{' '}
              <a href="https://theqrify.com/terms"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                https://theqrify.com/terms
              </a>.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* 11. Contact Us */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span> Contact Us
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              If you have any questions or concerns about these Terms, please contact us:
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              <strong>📧 Email:</strong>{' '}
              <a href="mailto:support@theqrify.com"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                support@theqrify.com
              </a>
              <br />
              <strong>🌐 Website:</strong>{' '}
              <a href="https://theqrify.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                https://theqrify.com
              </a>
            </p>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="text-center py-4" style={{
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