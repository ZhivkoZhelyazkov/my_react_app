const Sidebar = ({
    navChangeHandler,
}) => {

    const onNavClick = (e) => {
        e.preventDefault();

        if(e.target.tagName === 'A') {
           let url = new URL(e.target.href);
            navChangeHandler(url.pathname);
        };
    };

    return (
        <div id="tmSideBar" className="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar" onClick={onNavClick}>

            <button id="tmMainNavToggle" className="menu-icon">&#9776;</button>

            <div className="inner">
                <nav id="tmMainNav" className="tm-main-nav">
                    <ul>
                        <li>
                            <a href="/intro" id="tmNavLink1" className="scrolly active" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
                                <i className="fas fa-home tm-nav-fa-icon"></i>
                                <span>Introduction</span>
                            </a>
                        </li>
                        <li>
                            <a href="/products" id="tmNavLink2" className="scrolly" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
                                <i className="fas fa-map tm-nav-fa-icon"></i>
                                <span>Our Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
                                <i className="fas fa-users tm-nav-fa-icon"></i>
                                <span>Our Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
                                <i className="fas fa-comments tm-nav-fa-icon"></i>
                                <span>Contact Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="/register" className="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-5">
                                <i className="fas fa-sign-in-alt tm-nav-fa-icon"></i>
                                <span>Register</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;