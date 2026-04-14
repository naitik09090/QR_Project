export default function Example() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center px-3" style={{ minHeight: "100vh" }}>
            <h1 className="fw-bold" style={{ fontSize: "8rem", color: "#005F9E" }}>
                404
            </h1>

            <div
                className="my-2 rounded"
                style={{ height: "4px", width: "64px", backgroundColor: "#005F9E" }}
            ></div>

            <p className="fs-2 fw-bold">Page Not Found</p>

            <p className="text-muted mt-2" style={{ maxWidth: "500px" }}>
                Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className="d-flex gap-3 mt-2 flex-wrap justify-content-center">
                <a href="/" className="btn px-4 py-2" style={{ backgroundColor: "#005F9E", color: "#EBF7FF" }}>
                    Return Home
                </a>

                <a href="/contact" className="btn px-4 py-2" style={{ backgroundColor: "#005F9E", color: "#EBF7FF" }}>
                    Contact Support
                </a>
            </div>
        </div>
    );
}
