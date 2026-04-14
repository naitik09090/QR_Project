import React from 'react'
import logo1 from "../assets/logo.webp";

const Footer = () => {
    return (
        <footer className="w-100 text-white Buton_3_BG" >
            <div className="container py-5 d-flex flex-column align-items-center">
                <div className="mb-4">
                    <a href="https://theqrify.com/">
                        <img
                            src={logo1}
                            alt="TheQRIFY Logo"
                            loading="lazy"
                            width={120}
                            height={55}
                            sizes="120px"
                            srcSet={`${logo1} 120w`}
                            style={{ objectFit: "contain" }}
                        />
                    </a>
                </div>

                <p className="text-center text-sm" style={{ maxWidth: "600px" }}>
                    Empowering creators and businesses with fast, customizable, and high-quality QR codes. Transform how you share information.
                </p>
            </div>

            <div className="border-top" style={{ borderColor: "#3B1A7A" }}>
                <div className="container py-3 text-center text-sm">
                    <a
                        href="https://theqrify.com/"
                        className="text-decoration-none"
                        style={{ color: "#015f9e" }}
                    >
                        TheQRIFY
                    </a>
                    ©2026. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer