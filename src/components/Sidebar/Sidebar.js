import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


const Sidebar = () => {
    const { user } = useAuthContext();

    let userNav = (
        <li>
            <Link to="/login" id="tmNavLink6" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-6">
                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                <span>Login</span>
            </Link>
        </li>
    );

    let guestNav = (
        <li>
            <Link to="/register" id="tmNavLink7" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-7">
                <i className="fas fa-user-plus tm-nav-fa-icon"></i>
                <span>Register</span>
            </Link>
        </li>
    );

    let logout = (
        <li>
            <Link to="/logout" id="tmNavLink8" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-8">
                <i className="fas fa-sign-out-alt tm-nav-fa-icon"></i>
                <span>Logout</span>
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
                            <Link to="/services" id="tmNavLink3" className="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
                                <i className="fas fa-cogs tm-nav-fa-icon"></i>
                                <span>Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" id="tmNavLink5" className="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-5">
                                <i className="fas fa-balance-scale tm-nav-fa-icon"></i>
                                <span>NDT Methods</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" id="tmNavLink2" className="scrolly" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
                                <i className="fas fa-map tm-nav-fa-icon"></i>
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" id="tmNavLink4" className="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
                                <i className="fas fa-comments tm-nav-fa-icon"></i>
                                <span>Contact Us</span>
                            </Link>
                        </li>

                        {user.email ? logout : [userNav, guestNav]}

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;