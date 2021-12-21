import { Link } from 'react-router-dom';


function Intro() {
    return (
        <section id="tm-section-1" className="tm-section">
            <div className="ml-auto tm-bg-transparent-black">
                <header className="mb-4"><h1 className="tm-text-shadow">Iridium Control</h1></header>
                <p className="mb-5 tm-font-big">
                    We provide full-stack intelligent and autonomous inspection solution delivering reliable data for construction and asset maintenance decisions.
                <br/>
                    Our company is created with a mission to protect the built world with predictive healthcare that extends asset life and increases long-term value for asset owners.
                </p>
                <Link to="/services" className="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Continue...</Link>
            </div>
        </section>
    );
};

export default Intro;