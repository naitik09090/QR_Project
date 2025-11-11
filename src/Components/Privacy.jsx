// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-bootstrap-icons';

// const sections = [
//   {
//     id: 'intro',
//     title: 'Introduction',
//     body: `At TheQRify, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.`,
//   },
//   {
//     id: 'info-collect',
//     title: '1. Information We Collect',
//     body: `We may collect the following information:\n\n• Usage Data: Browser type, IP address, device information, and pages visited (via Google Analytics).\n• Generated Content: Text or URLs you enter to create QR codes (not stored on our servers).\n• Cookies: Used for analytics and Google AdSense personalization.`,
//   },
//   {
//     id: 'use-info',
//     title: '2. How We Use Your Information',
//     body: `We use your data to:\n\n• Improve our website and user experience.\n• Monitor traffic and usage via Google Analytics.\n• Display personalized ads via Google AdSense.`,
//   },
//   {
//     id: 'adsense',
//     title: '3. Google AdSense',
//     body: `We use Google AdSense to serve ads. Google may use cookies (DoubleClick cookie) to personalize ads based on your visits to this and other sites. You can opt out of personalized ads by visiting: https://adssettings.google.com`,
//   },
//   {
//     id: 'storage',
//     title: '4. Data Storage & Security',
//     body: `We do not store QR code input data. All analytics data is anonymized and processed by Google Analytics. Our site uses HTTPS encryption for secure communication.`,
//   },
//   {
//     id: 'rights',
//     title: '5. Your Rights',
//     body: `You may:\n\n• Request deletion of your analytics data (via Google tools).\n• Opt out of personalized advertising.\n• Contact us at support@theqrify.com for privacy-related concerns.`,
//   },
//   {
//     id: 'thirdparty',
//     title: '6. Third-Party Links',
//     body: `Our website may contain links to other websites. We are not responsible for their content or privacy practices.`,
//   },
//   {
//     id: 'updates',
//     title: '7. Updates to This Policy',
//     body: `We may update this policy from time to time. Changes will be reflected with a new "Effective Date."`,
//   },
//   {
//     id: 'contact',
//     title: '8. Contact Us',
//     body: `For any privacy-related questions or requests: support@theqrify.com`,
//   },
// ];

// export default function PrivacyPolicyTheQRify({ effectiveDate = '[Insert Date]' }) {
//   const [currentStep, setCurrentStep] = useState(0);
//   const stepsRef = useRef([]);

//   useEffect(() => {
//     function injectLink(href, id) {
//       if (id && document.getElementById(id)) return;
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = href;
//       if (id) link.id = id;
//       document.head.appendChild(link);
//     }

//     injectLink('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', 'bs5-css');
//     injectLink('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap', 'space-grotesk');

//     return () => { };
//   }, []);

//   useEffect(() => {
//     const el = stepsRef.current[currentStep];
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
//   }, [currentStep]);

//   const goNext = () => setCurrentStep((s) => Math.min(s + 1, sections.length - 1));
//   const goPrev = () => setCurrentStep((s) => Math.max(s - 1, 0));

//   const fontFamily = `"Space Grotesk", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;

//   return (
//     <div className="container-fluid py-5" style={{ fontFamily }}>
//       <div className="row justify-content-center">
//         <div className="col-12 col-md-10 col-lg-8">

//           <div className="d-flex align-items-center mb-4">
//             <div className="me-3">
//               <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 56, height: 56 }}>
//                 <strong style={{ fontSize: 20 }}>🔐</strong>
//               </div>
//             </div>
//             <div>
//               <h1 className="h4 mb-0">Privacy Policy — TheQRify</h1>
//               <small className="text-muted">Effective Date: {effectiveDate} <a href="https://theqrify.com" target="_blank" rel="noopener noreferrer">https://theqrify.com</a></small>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="progress" style={{ height: 10, borderRadius: 8 }}>
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: `${((currentStep + 1) / sections.length) * 100}%` }}
//                 aria-valuenow={(currentStep + 1)}
//                 aria-valuemin={1}
//                 aria-valuemax={sections.length}
//               />
//             </div>
//             <div className="d-flex justify-content-between mt-2 small text-muted">
//               <div>Step {currentStep + 1} of {sections.length}</div>
//               <div>{sections[currentStep].title}</div>
//             </div>
//           </div>

//           <div className="mb-4">
//             {sections.map((s, idx) => (
//               <div
//                 key={s.id}
//                 className={`card mb-3 ${idx === currentStep ? 'border-primary shadow-sm' : ''}`}
//                 ref={(el) => (stepsRef.current[idx] = el)}
//                 aria-hidden={idx !== currentStep}
//               >
//                 <div className="card-body">
//                   <div className="d-flex align-items-start">
//                     <div className="me-3">
//                       <div className={`badge rounded-pill ${idx === currentStep ? 'bg-primary' : 'bg-secondary'}`} style={{ minWidth: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
//                         <strong>{idx + 1}</strong>
//                       </div>
//                     </div>
//                     <div className="flex-grow-1">
//                       <h5 className="card-title mb-1">{s.title}</h5>
//                       <pre style={{ whiteSpace: 'pre-wrap', fontFamily, border: 'none', padding: 0, margin: 0 }} className="card-text text-muted">{s.body}</pre>

//                       {idx === currentStep && (
//                         <div className="mt-3 d-flex gap-2">
//                           <button className="btn btn-outline-primary btn-sm" onClick={() => navigator.clipboard?.writeText(s.body)}>
//                             Copy text
//                           </button>
//                           <button className="btn btn-primary btn-sm" onClick={goNext} disabled={currentStep >= sections.length - 1}>
//                             Next
//                           </button>
//                           <button className="btn btn-light btn-sm border" onClick={goPrev} disabled={currentStep === 0}>
//                             Previous
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// File: PrivacyPolicy.jsx

import React, { useEffect } from "react";

export default function PrivacyPolicy() {
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
    <div className="Privacy1" style={{
      fontFamily,
      background: 'transparent',
      minHeight: '100vh'
    }}>

      {/* Main Content */}
      <main className="py-5">
        <article className="container" style={{ maxWidth: '1300px' }}>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-6">🔐 Privacy Policy for TheQRify</h1>
            <p className="text-muted mb-0">
              (AdSense + GDPR + Global compliant — ready to publish at /privacy-policy)
            </p>
            <small className="text-secondary">
              Effective Date: [Insert Date] | Website:{" "}
              <a href="https://theqrify.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                theqrify.com
              </a>.
            </small>
          </div>

          {/* Introduction */}
          <section className="mb-3">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              At TheQRify, we value your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Information We Collect */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Information We Collect
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              We may collect usage data including browser type, IP address, device information, and pages visited.
              We also collect generated content such as text or URLs you enter to create QR codes, though this data is not stored.
              Additionally, cookies are used for analytics and Google AdSense personalization to improve your experience on our platform.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* How We Use Your Information */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              How We Use Your Information
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We use your data to improve our website, monitor usage, and display personalized ads via Google AdSense.
              This helps us provide a better service while keeping TheQRify free for all users.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Google AdSense */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Google AdSense
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Google may use cookies (DoubleClick cookie) to personalize ads based on your browsing activity.
              You can opt out of personalized advertising at{' '}
              <a href="https://adssettings.google.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                adssettings.google.com
              </a>.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Data Storage & Security */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Data Storage & Security
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We do not store QR code inputs that you create on our platform. Analytics data is anonymized via Google Analytics,
              and all communication is encrypted using HTTPS to ensure your information remains secure.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Your Rights */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Your Rights
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              You may request deletion of analytics data, opt out of personalized advertising, or contact us at{' '}
              <a href="mailto:support@theqrify.com"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                support@theqrify.com
              </a>{' '}
              with any privacy concerns or questions about your data.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Third-Party Links */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Third-Party Links
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              Our site may contain links to external websites. We are not responsible for their content or privacy practices.
              We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Updates to This Policy */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Updates to This Policy
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              We may update this policy periodically to reflect changes in our practices or legal requirements.
              Changes will be reflected with a new "Effective Date" at the top of this page.
            </p>
          </section>

          <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e2e8f0' }} />

          {/* Contact Us */}
          <section className="mb-3">
            <h2 className="fw-bold mb-3" style={{ color: '#1e293b', fontSize: '2rem' }}>
              <span style={{ marginRight: '0.5rem' }}>⭐</span>
              Contact Us
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.25rem' }}>
              For any privacy-related questions, please reach out at{' '}
              <a href="mailto:support@theqrify.com"
                style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>
                support@theqrify.com
              </a>.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#64748b' }}>
              Owner: TheQRify (Infosync.ai)
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