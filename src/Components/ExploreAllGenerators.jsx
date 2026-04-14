import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { landingPages } from '../data/landingPagesData';
import { FaChevronRight, FaRocket, FaStar, FaThLarge } from 'react-icons/fa';

const ExploreAllGenerators = () => {
    const [filter, setFilter] = useState('All');

    const getCategory = (page) => {
        const path = page.path;
        if (path.includes('social') || path.includes('tiktok') || path.includes('twitter') || path.includes('pinterest') || path.includes('snapchat') || path.includes('instagram') || path.includes('facebook') || path.includes('youtube') || path.includes('video-file')) return 'Social Media';
        if (path.includes('payment') || path.includes('paypal') || path.includes('stripe') || path.includes('google-pay') || path.includes('apple-pay') || path.includes('donations') || path.includes('tips') || path.includes('freelancers') || path.includes('invoices') || path.includes('subscriptions') || path.includes('crypto')) return 'Payments & FinTech';
        if (path.includes('menu') || path.includes('restaurant') || path.includes('ordering') || path.includes('hotel') || path.includes('room-service') || path.includes('takeaway')) return 'Hospitality & Menu';
        if (path.includes('business') || path.includes('marketing') || path.includes('product') || path.includes('flyers') || path.includes('brochures') || path.includes('real-estate') || path.includes('email-signature') || path.includes('lead-generation') || path.includes('excel') || path.includes('word') || path.includes('powerpoint') || path.includes('zip') || path.includes('google-docs') || path.includes('google-sheets') || path.includes('dropbox') || path.includes('cloud-files')) return 'Business & Marketing';
        if (path.includes('audio')) return 'Essential Tools';
        return 'Essential Tools';
    };

    // Dynamically calculate categories that have tools
    const dynamicCategories = ['All', ...new Set(landingPages.map(page => getCategory(page)))];
    const categories = dynamicCategories;

    const filteredPages = filter === 'All'
        ? landingPages
        : landingPages.filter(p => getCategory(p) === filter);

    return (
        <section className="explore-generators-section">
            <Container>
                <div className="section-header text-center mx-auto" style={{ maxWidth: '800px' }}>
                    <h2 className="fw-bold mb-3">Infinite QR Possibilities</h2>
                    <p className="lead px-lg-5">
                        From high-conversion payment bridges to interactive social portals,
                        discover the perfect QR engine for your next project.
                    </p>
                </div>

                <div className="filter-tabs-container mb-5">
                    <div className="filter-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="generators-grid">
                    {filteredPages.map((page, index) => (
                        <a
                            key={index}
                            href={page.path}
                            className="generator-item-card"
                            style={{ '--accent-color': page.themeColor || '#2563eb' }}
                        >
                            <div className="card-inner">
                                {/* <div className="card-top">
                                    <div className="icon-box">
                                        <FaThLarge />
                                    </div>
                                    {page.type === 'pro' && (
                                        <span className="pro-tag">PRO</span>
                                    )}
                                </div> */}
                                <div className="card-body-content">
                                    {/* <p className="category-label">{getCategory(page)}</p> */}
                                    <h3>{page.title}</h3>
                                </div>
                                <div className="card-footer-box">
                                    <span>Launch Tool</span>
                                    <FaChevronRight className="arrow-icon" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>

            <style jsx="true">{`
                .explore-generators-section {
                    background: transparent; /* Very light slate/blue */
                    padding: 80px 0;
                    position: relative;
                }

                .section-header {
                    margin-bottom: 60px;
                }

                .section-header h2 {
                    color: #0f172a;
                    font-size: 2.8rem;
                    letter-spacing: -1px;
                }

                .section-header p {
                    color: #475569;
                    font-size: 1.1rem;
                }

                .filter-tabs-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .filter-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    justify-content: center;
                    padding: 10px;
                    background: #fff;
                    border-radius: 100px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e2e8f0;
                }

                .filter-tab {
                    padding: 12px 24px;
                    border-radius: 100px;
                    border: 1px solid transparent;
                    background: transparent;
                    color: #475569;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .filter-tab:hover {
                    color: #005F9E;
                    background: #f1f5f9;
                }

                .filter-tab.active {
                    background: #033252ff !important; /* Dark blue from theme */
                    color: #fff !important;
                    box-shadow: 0 10px 20px rgba(30, 64, 175, 0.2);
                }

                .generators-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 30px;
                }

                .generator-item-card {
                    position: relative;
                    border-radius: 24px;
                    text-decoration: none !important;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                }

                .generator-item-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
                    border-color: #cbd5e1;
                }

                .card-inner {
                    padding: 30px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }

                .icon-box {
                    width: 50px;
                    height: 50px;
                    background: #f1f5f9;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    color: var(--accent-color);
                    transition: all 0.3s ease;
                }

                .generator-item-card:hover .icon-box {
                    background: var(--accent-color);
                    color: #fff;
                    transform: scale(1.1);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .pro-tag {
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: #fff;
                    background: #1e293b;
                    padding: 4px 10px;
                    border-radius: 100px;
                }

                .category-label {
                    font-size: 0.75rem;
                    color: var(--accent-color);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    font-weight: 800;
                }

                .card-body-content h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 0;
                    letter-spacing: -0.5px;
                }

                .card-footer-box {
                    margin-top: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #475569;
                    padding-top: 20px;
                    border-top: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                }

                .generator-item-card:hover .card-footer-box {
                    color: #005F9E;
                }

                .arrow-icon {
                    transition: transform 0.3s ease;
                }

                .generator-item-card:hover .arrow-icon {
                    transform: translateX(5px);
                }

                @media (max-width: 768px) {
                    .explore-generators-section { padding: 60px 0; }
                    .section-header h2 { font-size: 2.2rem; }
                    .generators-grid { grid-template-columns: 1fr; }
                    .filter-tabs { border-radius: 20px; }
                }
            `}</style>
        </section>
    );
};

export default ExploreAllGenerators;
