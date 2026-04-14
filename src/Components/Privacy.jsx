import React from "react";

export default function PrivacyPolicyTheQrify({ effectiveDate = new Date().toISOString().slice(0, 10) }) {
  const style = {
    color: "#0f172a",
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div className="py-5" style={style}>
        <div className="container" style={{ maxWidth: 1000 }}>
          {/* Header */}
          <header className="mb-4 text-center">
            <h1 className="fw-bold h2">🔐 Privacy Policy – <a href="https://theqrify.com" target="_blank" rel="noreferrer" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>TheQrify</a></h1>
            <p className="mb-1 text-muted">Last updated: <strong>{effectiveDate}</strong></p>
          </header>

          <section id="intro" className="mb-4">
            <h2 className="h5 fw-bold">Introduction</h2>
            <p>
              Welcome to TheQrify.com (“TheQrify”, “we”, “our”, “us”). We value your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, store, and protect information when you access or use our website theqrify.com and any related features, tools, or services.
            </p>
          </section>

          <section id="info-we-collect" className="mb-4">
            <h2 className="h5 fw-bold">1. Information We Collect</h2>

            <h6 className="fw-semibold mt-3">A. Information You Provide</h6>
            <p className="mb-2">When you use our platform, you may voluntarily provide:</p>
            <ul>
              <li>Content you enter to create the QR code (URLs, text, PDF links, contact details, menus, business profiles, etc.).</li>
              <li>Email address (only when opting for communication or subscriptions).</li>
              <li>Information filled while creating business cards or custom QR templates.</li>
            </ul>
            <p className="mb-2"><strong>Note:</strong> We do not sell or share your generated QR code data with third parties.</p>

            <h6 className="fw-semibold mt-3">B. Automatically Collected Information</h6>
            <p className="mb-2">We may automatically collect:</p>
            <ul>
              <li>Device information (browser type, OS, IP address).</li>
              <li>Usage analytics (pages visited, time spent).</li>
              <li>Click and interaction tracking.</li>
              <li>Cookies & similar tracking technologies.</li>
            </ul>
            <p className="mb-0">This helps us improve website performance and user experience.</p>

            <h6 className="fw-semibold mt-3">C. Information from Third Parties (Planned / Future)</h6>
            <p>
              When we introduce login, subscription, or business accounts, we may integrate trusted third parties such as:
            </p>
            <ul>
              <li>Payment processors (Stripe, Razorpay, PayPal, etc.).</li>
              <li>Social login providers (Google, LinkedIn).</li>
            </ul>
          </section>

          <section id="how-use" className="mb-4">
            <h2 className="h5 fw-bold">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide QR code generation and related features.</li>
              <li>Improve website performance & design.</li>
              <li>Customize user experience.</li>
              <li>Communicate updates or notifications (only with consent).</li>
              <li>Enable subscription-based features (future).</li>
              <li>Display relevant advertisements.</li>
              <li>Enhance security & prevent misuse.</li>
            </ul>
            <p className="mb-0"><strong>We never read, edit, or access the private data embedded inside your QR code</strong> for any purpose other than delivering the requested service, unless required legally.</p>
          </section>

          <section id="cookies" className="mb-4">
            <h2 className="h5 fw-bold">3. Cookies & Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Analyse traffic and usage patterns.</li>
              <li>Improve loading speed and user experience.</li>
              <li>Enhance personalization.</li>
              <li>Serve advertisements (non-personalized or personalized depending on consent).</li>
              <li>Help third-party vendors, including Google, to serve ads based on your prior visits to our website or other websites.</li>
            </ul>
            <p>You can disable cookies from your browser; however, some features may not work as intended if cookies are disabled.</p>
          </section>

          <section id="storage-security" className="mb-4">
            <h2 className="h5 fw-bold">4. Data Storage & Security</h2>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul>
              <li>Encrypted connections (HTTPS / TLS).</li>
              <li>Secure servers and infrastructure.</li>
              <li>Access-control policies and role-based access.</li>
              <li>Regular security audits and monitoring.</li>
            </ul>
            <p className="mb-0">Although we take precautions, no online service can be guaranteed 100% secure. Use the platform at your discretion.</p>
          </section>

          <section id="sharing" className="mb-4">
            <h2 className="h5 fw-bold">5. Sharing of Information</h2>
            <p>We do not sell your personal data. We may share limited information only with:</p>
            <ul>
              <li>Trusted service providers (hosting, analytics, email providers).</li>
              <li>Analytics tools (Google Analytics, Meta Pixel, etc.).</li>
              <li>Payment gateways (when subscriptions are available).</li>
              <li>Legal authorities if required by law (only when compelled).</li>
            </ul>
            <p className="mb-0">We require service providers to follow appropriate confidentiality and security practices.</p>
          </section>

          <section id="qr-visibility" className="mb-4">
            <h2 className="h5 fw-bold">6. QR Code Content Visibility</h2>
            <p>Whatever content you generate using TheQrify (URL, text, PDF, profiles) remains your responsibility.</p>
            <ul>
              <li>We do not store or analyze personal content unless required for service optimization or with explicit consent.</li>
              <li>If we introduce features that save templates or user profiles, storage practices will be disclosed and consent requested where required.</li>
            </ul>
          </section>

          <section id="ads" className="mb-4">
            <h2 className="h5 fw-bold">7. Advertisements & Google AdSense</h2>
            <p>This site uses Google AdSense which may use cookies to serve personalized ads. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.</p>
            <ul>
              <li>Google, as a third-party vendor, uses cookies to serve ads on TheQrify.</li>
              <li>Google's use of the DART cookie enables it to serve ads to users based on their visit to TheQrify and other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising.</li>
            </ul>
            <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TheQrify, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. Note that TheQrify has no access to or control over these cookies that are used by third-party advertisers.</p>
          </section>

          <section id="subscriptions" className="mb-4">
            <h2 className="h5 fw-bold">8. Subscription Plans (Future Feature)</h2>
            <p>For paid features, we may collect:</p>
            <ul>
              <li>Billing information (name, email, billing address).</li>
              <li>Transaction IDs and subscription history.</li>
              <li>Business-related information for business accounts.</li>
            </ul>
            <p>Payments will be processed through secure third-party gateways; we do not store credit/debit card details on our servers.</p>
          </section>

          <section id="thirdparty-links" className="mb-4">
            <h2 className="h5 fw-bold">9. Third-Party Links</h2>
            <p>Our platform may contain links to external websites. We are not responsible for their content, policies, or practices. We encourage you to read privacy policies on third-party sites you visit.</p>
          </section>

          <section id="your-rights" className="mb-4">
            <h2 className="h5 fw-bold">10. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Request access to your information.</li>
              <li>Ask for correction or deletion.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Disable cookies via browser settings.</li>
            </ul>
            <p>To make such requests, contact us at <a href="mailto:support@theqrify.com" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>support@theqrify.com</a>. We will respond per applicable law and internal procedures.</p>
          </section>

          <section id="child-privacy" className="mb-4">
            <h2 className="h5 fw-bold">11. Children’s Privacy</h2>
            <p>TheQrify is not intended for children under 13. We do not knowingly collect data from children under 13. If we become aware we have collected data from a child under 13, we will take steps to remove that data.</p>
          </section>

          <section id="changes" className="mb-4">
            <h2 className="h5 fw-bold">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy as we introduce new features or to comply with law. Updates will be posted on this page with a new "Last updated" date. We will provide notices if an update materially affects how we handle personal data.</p>
          </section>

          <section id="contact" className="mb-4">
            <h2 className="h5 fw-bold">13. Contact Us</h2>
            <p>If you have questions, complaints, or concerns about this policy or our practices:</p>
            <ul>
              <li>Email: <a href="mailto:support@theqrify.com" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>support@theqrify.com</a></li>
              <li>Website: <a href="https://theqrify.com" target="_blank" rel="noreferrer" style={{ color: '#015f9e', textDecoration: 'none', fontWeight: '500' }}>https://theqrify.com</a></li>
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
