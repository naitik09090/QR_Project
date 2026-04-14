import React, { useState, useEffect } from 'react'
import blog from '../assets/blog.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import '../css/Blog.scss';
// import blog1 from '../assets/b2.jpg'
// import blog3 from '../assets/b3.jpg'
// import blog4 from '../assets/b5.jpg'
// import blog5 from '../assets/b6.jpg'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

const CARDS_PER_PAGE = 8;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const openBlog = (item) => {
        navigate("/blog-news", {
            state: { card: item }
        });
    };




    const totalPages = Math.ceil(blogData.length / CARDS_PER_PAGE);

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const currentCards = blogData.slice(
        startIndex,
        startIndex + CARDS_PER_PAGE
    );

    return (
        <>
            {/* desktop view */}
            <div className="container-fluid blog-hero-section d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-6">
                            <h1 className="mb-4 display-4 fw-bold blog-header-text">TheQRIFY <span className="text-gradient">Blog</span></h1>
                            <h2 className="h2 fw-bold text-dark mb-4">
                                The Ultimate Guide to QR Code Marketing in 2025
                            </h2>
                            <p className="py-2 lead mb-4" style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: '1.7' }}>
                                Stay ahead of the curve with our comprehensive guide to QR code marketing.
                                Discover innovative ways to engage customers, track performance, and
                                bridge the physical-to-digital gap seamlessly.
                            </p>
                            <button
                                className="btn px-5 py-3 rounded-pill read-post-btn shadow-lg"
                                onClick={() => openBlog(blogData[12])} // Link to a specific relevant blog
                                aria-label="Read the full blog post"
                            >
                                Read The Post
                            </button>
                        </div>

                        <div className="col-md-6 mt-5 mt-md-0">
                            <div className="hero-img-wrapper position-relative">
                                <LazyLoadImage
                                    src={blog}
                                    alt="TheQRIFY Blog Featured Post"
                                    className="w-100 blog_Main_Data rounded-5 shadow-2xl"
                                    effect="blur"
                                />
                                <div className="floating-card p-4 rounded-4 shadow-lg bg-white d-none d-lg-block">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="icon-circle bg-success text-white">
                                            <FaArrowRightLong />
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark">Trending Now</div>
                                            <div className="small text-muted">10k+ scans analysis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="container d-block d-md-none">
                <div className="row my-4">
                    <div className="col-12 text-center">
                        <LazyLoadImage
                            src={blog}
                            alt="TheQRIFY Blog Featured Post"
                            className="w-100 blog_Main_Data rounded-4 shadow-sm mb-4"
                            effect="blur"
                        />
                    </div>

                    <div className="col-12 text-center px-4">
                        <h1 className="mb-3 display-5 fw-bold blog-header-text">TheQRIFY <span className="text-gradient">Blog</span></h1>
                        <h2 className="h4 fw-bold text-dark mb-3">
                            The Ultimate Guide to QR Code Marketing in 2025
                        </h2>
                        <p className="py-3 text-muted" style={{ fontSize: '1rem' }}>
                            Stay ahead of the curve with our comprehensive guide to QR code marketing strategies.
                        </p>
                        <button
                            className="btn px-4 py-2 rounded-pill read-post-btn shadow"
                            onClick={() => openBlog(blogData[12])}
                            aria-label="Read the full blog post"
                        >
                            Read The Post
                        </button>
                    </div>
                </div>
            </div>


            {/* <div className="container">
                <div className="d-flex row align-items-center my-5 py-5">
                    <div className="card p-3 col-md-3">
                        <img src={blog1} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog2} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog3} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                    <div className="card p-3 col-md-3">
                        <img src={blog4} alt="" className='w-100 p-2 rounded-4' />
                        <h1 className='h4 mx-2'>Announcing Amazon Quick Suite: your new agentic teammate</h1>
                        <button type='button' className='w-100 btn mb-2 rounded-pill'>Learn More</button>
                    </div>
                </div>
            </div> */}
            {/* <p className="text-start text-muted mt-1">
                    <img src={calendar} className="m-1 claendar_Icon" height={20} width={20} />
                    {new Date(data?.published_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    })}
                </p> */}

            {/* <div className="container text-center py-5">
                <div className="row gx-4 gy-4 justify-content-center pt-4">
                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card h-100 max-w-100 w-100">
                            <img
                                src={blog1}
                                alt="Color Psychology in UI"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">Announcing Amazon Quick Suite: your new agentic teammate</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog5}
                                alt="Design Patterns"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">AWS named as a Leader in 2025 Gartner Magic Quadrant for Strategic Cloud Platform Services</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog3}
                                alt="Color Psychology in UI 2"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">OpenAI open weight modelsnow available on AWS</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0;"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                        <div className="card border-0 blog-card max-w-100 w-100">
                            <img
                                src={blog4}
                                alt="Color Psychology in UI 2"
                                className="card-img-top p-3 rounded-3 img-fluid"
                            />
                            <div className="card-body px-0 pt-3 pb-0">
                                <h3 className="card-title h5 blog-title mb-1">Introducing Claude Sonnet 4.5 in Amazon Bedrock: Anthropic’s most intelligent model</h3>
                                <a href="/blog-news" className="text-decoration-none text: #0f3aa0"><p className="blog-meta mx-4 text-start mb-2">Learn more <FaArrowRightLong /></p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    {currentCards.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div
                                onClick={() => openBlog(item)}
                                style={{
                                    background: "#fff",
                                    borderRadius: "20px",
                                    border: "1px solid rgba(1,95,158,0.08)",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    boxShadow: "0 8px 24px rgba(1,95,158,0.04)",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    position: "relative"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(1,95,158,0.12)";
                                    e.currentTarget.style.borderColor = "rgba(1,95,158,0.2)";
                                    const img = e.currentTarget.querySelector('.blog-img-zoom');
                                    if (img) img.style.transform = "scale(1.05)";
                                    const arrow = e.currentTarget.querySelector('.blog-arrow-move');
                                    if (arrow) arrow.style.transform = "translateX(4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(1,95,158,0.04)";
                                    e.currentTarget.style.borderColor = "rgba(1,95,158,0.08)";
                                    const img = e.currentTarget.querySelector('.blog-img-zoom');
                                    if (img) img.style.transform = "scale(1)";
                                    const arrow = e.currentTarget.querySelector('.blog-arrow-move');
                                    if (arrow) arrow.style.transform = "translateX(0)";
                                }}
                            >
                                <div style={{ width: "100%", aspectRatio: "16/11", overflow: "hidden", background: "#f8fafc" }}>
                                    <LazyLoadImage
                                        src={item.img}
                                        alt={item.title}
                                        effect="blur"
                                        className="blog-img-zoom"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                                        }}
                                    />
                                </div>

                                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <h2 style={{
                                        fontSize: "1.15rem",
                                        fontWeight: 800,
                                        color: "#0d1b2a",
                                        lineHeight: 1.45,
                                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                        letterSpacing: "-0.3px",
                                        marginBottom: "20px",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}>
                                        {item.title}
                                    </h2>

                                    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid rgba(1,95,158,0.06)", paddingTop: "16px" }}>
                                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#015f9e", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                            Read Article
                                        </span>
                                        <span className="blog-arrow-move" style={{ color: "#015f9e", transition: "transform 0.3s ease", display: "flex" }}>
                                            <FaArrowRightLong />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex justify-content-center mb-5">
                <div className="pagination-container">
                    <ul className="pagination">
                        {/* PREV */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                aria-label="Previous"
                            >
                                <FaArrowLeftLong className="me-1" />
                            </button>
                        </li>

                        {/* PAGE NUMBERS */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <li
                                key={page}
                                className={`page-item ${page === currentPage ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(page)}
                                    aria-label={`Page ${page}`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}

                        {/* NEXT */}
                        <li
                            className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                aria-label="Next"
                            >
                                <FaArrowRightLong className="ms-1" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog