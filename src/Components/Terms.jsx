// File: TermsConditionsTheQrify.jsx
import React from "react";

export default function TermsConditionsTheQrify({ effectiveDate = new Date().toISOString().slice(0, 10) }) {
  // inject Bootstrap & font only once


  const style = {
    color: "#0f172a",
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={style}>
        <div className="container" style={{ maxWidth: 1000 }}>
          {/* Header */}
          <header className="py-5 text-center">
            <h1 className="fw-bold h3">📜 Terms & Conditions – <a href="https://theqrify.com" target="_blank" rel="noreferrer" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>TheQrify</a></h1>
            <p className="mb-1 text-muted">
              Last updated: <strong>{effectiveDate}</strong>
            </p>
          </header>

          {/* Terms content */}
            <section id="acceptance" className="mb-4">
              <h2 className="h5 fw-bold">1. Acceptance of Terms</h2>
              <p>
                These Terms & Conditions govern your use of the TheQrify platform, including QR code generation, customization tools,
                downloads, and other services provided through theqrify.com. By using TheQrify you accept and agree to follow these terms.
                If you do not agree, please discontinue using our platform immediately.
              </p>
            </section>

            <section id="use-services" className="mb-4">
              <h2 className="h5 fw-bold">2. Use of Our Services</h2>
              <p>
                TheQrify offers tools that allow users to:
              </p>
              <ul>
                <li>Generate QR codes.</li>
                <li>Customize design, color, shapes, and logos.</li>
                <li>Download QR codes in PNG, SVG, and PDF formats.</li>
                <li>Use QR codes for web links, videos, menus, business cards, apps, and more.</li>
              </ul>
              <p className="mb-0">All generated QR codes are based on user input. We provide the tool — the content behind each QR belongs to you.</p>
            </section>

            <section id="user-responsibility" className="mb-4">
              <h2 className="h5 fw-bold">3. User Responsibility (Strict Clause)</h2>

              <h6 className="fw-semibold mt-2">3.1 Sole Responsibility for Content</h6>
              <p>
                You are fully and solely responsible for all URLs, files, PDFs, text, business details, media, or data you input into the platform.
                TheQrify does not review, monitor, verify, or validate your content. Any consequences arising from your content or QR code usage are entirely your responsibility.
              </p>

              <h6 className="fw-semibold mt-2">3.2 Prohibited Misuse</h6>
              <p>You must not generate QR codes containing or redirecting to:</p>
              <ul>
                <li>Illegal or harmful content.</li>
                <li>Malware, spyware, viruses, or phishing.</li>
                <li>Fraudulent or scam-related material.</li>
                <li>Hate speech, violence, or abusive content.</li>
                <li>Pornographic, explicit, or adult content (if restricted by region).</li>
                <li>Copyright-infringing material.</li>
                <li>Impersonation, identity theft, or deceptive content.</li>
                <li>Any action violating U.S., Indian, or local laws.</li>
              </ul>
            </section>

            <section id="legal-compliance" className="mb-4">
              <h2 className="h5 fw-bold">4. Legal Compliance (Multi-Jurisdiction Obligations)</h2>
              <p>
                Since TheQrify is operated as a U.S.-based company, you must comply with applicable laws where you use the platform.
              </p>

              <h6 className="fw-semibold mt-2">4.1 U.S. Laws</h6>
              <p>Including but not limited to:</p>
              <ul>
                <li>Digital Millennium Copyright Act (DMCA).</li>
                <li>Computer Fraud and Abuse Act (CFAA).</li>
                <li>Federal Trade Commission (FTC) guidelines.</li>
                <li>U.S. privacy & data regulations.</li>
              </ul>

              <h6 className="fw-semibold mt-2">4.2 Indian Laws (If you use the platform from India)</h6>
              <ul>
                <li>Information Technology Act, 2000.</li>
                <li>Rules on data privacy and digital security.</li>
                <li>Indian cybercrime & fraud regulations.</li>
              </ul>

              <h6 className="fw-semibold mt-2">4.3 Local Laws in Your Country</h6>
              <p>You must follow local laws regarding digital content, online safety, data protection, QR usage restrictions, copyright & IP laws. Failure to comply may result in termination of service and legal action.</p>
            </section>

            <section id="intellectual-property" className="mb-4">
              <h2 className="h5 fw-bold">5. Intellectual Property & Legal Protection</h2>
              <p>
                All intellectual property on TheQrify — including website design, brand identity, layout, code, scripts, algorithms, features,
                tools, QR design interfaces, templates, icons, and visual elements — is the exclusive property of TheQrify.
              </p>
              <p className="mb-0"><strong>You may not:</strong></p>
              <ul>
                <li>Copy, reproduce, or clone our platform.</li>
                <li>Resell or commercially distribute any part of our system.</li>
                <li>Reverse-engineer, decompile, or attempt to extract our source code.</li>
                <li>Replicate our design, branding, templates, or interface.</li>
                <li>Create competing platforms using our assets or code.</li>
                <li>Modify or redistribute our platform content.</li>
              </ul>

              <h6 className="fw-semibold mt-2">Legal Action for Violation</h6>
              <p>If you engage in unauthorized copying or other violations, we may suspend or terminate your access, and pursue legal action under applicable laws (U.S., Indian, or local). You may be liable for damages and enforcement costs.</p>
            </section>

            <section id="liability" className="mb-4">
              <h2 className="h5 fw-bold">6. Limitations of Liability</h2>
              <p>
                You agree that TheQrify is not liable for:
              </p>
              <ul>
                <li>Damages resulting from incorrect or harmful QR code content.</li>
                <li>Loss caused by expired links or broken external websites.</li>
                <li>Issues arising from third-party redirection.</li>
                <li>Loss of revenue, business opportunities, or data.</li>
                <li>Service downtime, technical glitches, or interruptions.</li>
              </ul>
              <p className="mb-0">All services are provided “as is” without warranties.</p>
            </section>

            <section id="future-features" className="mb-4">
              <h2 className="h5 fw-bold">7. Future Features: Subscriptions & Business Plans</h2>
              <p>In upcoming versions (TheQrify 2.0), we may introduce:</p>
              <ul>
                <li>Paid subscription plans.</li>
                <li>Bulk QR generation.</li>
                <li>Dynamic QR codes.</li>
                <li>Analytics & scan tracking.</li>
                <li>Ad-free premium experience.</li>
                <li>Branded templates and business solutions.</li>
              </ul>
              <p>Paid features will have separate pricing and terms, which will be displayed before purchase.</p>
            </section>

            <section id="ads" className="mb-4">
              <h2 className="h5 fw-bold">8. Advertisements (Future Version)</h2>
              <p>
                The free version may include display ads, sponsored templates, and promotional placements provided by third-party ad networks.
                TheQrify does not endorse advertiser content and is not responsible for their claims.
              </p>
            </section>

            <section id="third-party" className="mb-4">
              <h2 className="h5 fw-bold">9. Third-Party Links</h2>
              <p>
                QR codes created on TheQrify may redirect users to external websites. TheQrify is not responsible for third-party website content,
                privacy practices, security issues, or misleading/harmful material. Users should review third-party terms and privacy policies before engaging.
              </p>
            </section>

            <section id="termination" className="mb-4">
              <h2 className="h5 fw-bold">10. Termination of Use</h2>
              <p>
                We may suspend, restrict, or block your access if you violate these Terms, misuse the platform, break applicable laws, or use the service
                for harmful/illegal purposes. We reserve the right to take action without prior notice where necessary.
              </p>
            </section>

            <section id="changes" className="mb-4">
              <h2 className="h5 fw-bold">11. Changes to These Terms</h2>
              <p>
                TheQrify may modify, update, or revise these Terms at any time. Changes will be posted on this page with an updated “Last Revised” date.
                Continued use of the website after updates means you accept the revised Terms.
              </p>
            </section>

            <section id="contact-terms" className="mb-4">
              <h2 className="h5 fw-bold">12. Contact Us</h2>
              <p>If you have any questions, legal concerns, or need support, contact us:</p>
              <ul>
                <li>📩 Email: <a href="mailto:support@theqrify.com" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>support@theqrify.com</a></li>
                <li>🌐 Website: <a href="https://theqrify.com" target="_blank" rel="noreferrer" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>https://theqrify.com</a></li>
              </ul>
              <p className="small text-muted mb-0">Owner: TheQrify</p>
            </section>

            <hr />

            <p className="small text-muted">© {new Date().getFullYear()} TheQrify — All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
