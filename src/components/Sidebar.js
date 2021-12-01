import { Link } from 'react-router-dom';

const Sidebar = ({
    isAuthenticated,
    username,
}) => {

    let userNav = (
        <li>
            <Link to="/login" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-5">
                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                <span>Login</span>
            </Link>
        </li>
    );

    let guestNav = (
        <li>
            <Link to="/register" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-5">
                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                <span>Register</span>
            </Link>
        </li>
    );

    return (
        <div id="tmSideBar" className="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">

            <button id="tmMainNavToggle" className="menu-icon">&#9776;</button>

            <div className="inner">
                <nav id="tmMainNav" className="tm-main-nav">
                    <ul>
                        <li>
                            <Link to="/" id="tmNavLink1" className="scrolly active" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
                                <i className="fas fa-home tm-nav-fa-icon"></i>
                                <span>Introduction</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" id="tmNavLink2" className="scrolly" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
                                <i className="fas fa-map tm-nav-fa-icon"></i>
                                <span>Our Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
                                <i className="fas fa-users tm-nav-fa-icon"></i>
                                <span>Our Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
                                <i className="fas fa-comments tm-nav-fa-icon"></i>
                                <span>Contact Us</span>
                            </Link>
                        </li>

                        {isAuthenticated ? '' : [userNav, guestNav]}

                        {/* <li>
                            <Link to="/login" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-5">
                                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                                <span>Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-5">
                                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                                <span>Register</span>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;