import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import calendar from "../assets/calendar.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// import '../css/Blog_News.scss';
// import Blog from "../assets/blog.png";
import blogData from "../data/blogData";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog_News = () => {
    const location = useLocation();
    const initialCard = location.state?.card || blogData[0];
    const [selectedCard, setSelectedCard] = useState(initialCard);
    const sidebarRef = useRef(null);

    const handleCardClick = (item) => {
        setSelectedCard(item);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (sidebarRef.current) {
            sidebarRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selectedCard]);

    // Structured Data for SEO
    const articleSchema = selectedCard ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": selectedCard.title,
        "image": selectedCard.img,
        "datePublished": "2025-12-04",
        "description": selectedCard.metaDescription || selectedCard.title,
        "author": {
            "@type": "Organization",
            "name": "TheQrify"
        },
        "publisher": {
            "@type": "Organization",
            "name": "TheQrify",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theqrify.com/icon-512.png"
            }
        }
    } : null;

    return (
        <div className='container-fluid'>
            {selectedCard && (
                <Helmet>
                    <title>{selectedCard.metaTitle || selectedCard.title}</title>
                    <meta name="description" content={selectedCard.metaDescription || selectedCard.title} />
                    <meta property="og:title" content={selectedCard.metaTitle || selectedCard.title} />
                    <meta property="og:description" content={selectedCard.metaDescription || selectedCard.title} />
                    <meta property="og:image" content={selectedCard.img} />
                    <meta property="og:type" content="article" />
                    {articleSchema && (
                        <script type="application/ld+json">
                            {JSON.stringify(articleSchema)}
                        </script>
                    )}
                </Helmet>
            )}
            <div className='row mb-5'>
                <div className='col-12 col-md-9 col-lg-9'>
                    {selectedCard ? (
                        <>
                            <div className='py-3'>
                                <LazyLoadImage
                                    src={selectedCard.img}
                                    className="img-fluid rounded-5"
                                    alt="news"
                                    style={{
                                        width: "100%",
                                        maxHeight: "600px",
                                        objectFit: "contain",
                                        borderRadius: "20px",
                                        effect: "blur"
                                    }}
                                />
                            </div>

                            <p className="text-start text-muted mt-2">
                                <img
                                    src={calendar}
                                    className="m-1 mx-4 claendar_Icon"
                                    height={20}
                                    width={20}
                                />
                                04 Dec 2025
                            </p>

                            <h1 className="text-start mx-3">{selectedCard.title}</h1>

                            <div
                                className="mt-4 mx-3 text-start text-black"
                                style={{ fontSize: "18px", lineHeight: "1.6" }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: selectedCard.content }} />
                            </div>
                        </>
                    ) : (
                        <div className="py-5">
                            <h3 className="text-start mx-3 text-muted">
                                Please click a blog card to view details.
                            </h3>
                        </div>
                    )}
                </div>

                <div className="vertical-line"></div>

                {/* RIGHT SIDEBAR */}
                <div
                    ref={sidebarRef}
                    className='col-12 col-md-2 col-lg-2 py-2 sidebar-scrollable'
                    style={{ maxHeight: "1060px", overflowY: "auto", paddingRight: "10px" }}
                >
                    {blogData.map((item) => (
                        <div key={item.id} className="col-12 col-md-12 py-2">
                            <div
                                className="Main-Card_1 mb-3 shadow-sm"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCardClick(item)}
                            >
                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "195px", width: "100%", objectFit: "cover", borderRadius: "30px" }}
                                />

                                <div className="card-body1 d-flex flex-column">
                                    <p className="text-start text-muted mt-1">
                                        <img src={calendar} className="m-1 mx-3 claendar_Icon" height={20} width={20} />
                                        04 Dec 2025
                                    </p>

                                    <h6 className="mx-3 text-start">{item.title}</h6>

                                    <div className="mt-auto">
                                        <div className="d-flex align-items-center justify-content-between px-3 rounded">
                                            <p className="text-black">Learn More</p>
                                            <button type="button" className="learn_BTn">
                                                <FaArrowRightLong />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};

export default Blog_News;
