import img1 from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 py-2">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={img1} alt="QRFY Logo" width="100" height="40" className="me-2" />
                    </a>

                    {/* Toggle Button (Mobile) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarContent">

                        {/* Auth Buttons */}
                        <div className="d-flex gap-2 justify-content-end ms-auto">
                            <a href="login">
                                <button className="btn btn-outline-secondary rounded-pill">Log In</button>
                            </a>
                            <a href="signUp">
                                <button className="btn btn-primary rounded-pill">Register</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
