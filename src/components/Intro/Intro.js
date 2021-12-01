import { Link } from 'react-router-dom';

function Intro() {
    return (
        <section id="tm-section-1" className="tm-section">
            <div className="ml-auto">
                <header className="mb-4"><h1 className="tm-text-shadow">Constructive Design</h1></header>
                <p className="mb-5 tm-font-big">Aenean fermentum vestibulum ipsum, ut pretium erat sodales sodales. Pellentesque quis orci vitae dui commodo sodales et ut quam. Etiam vitae egestas purus, ut malesuada enim.</p>
                <Link to="/products" className="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Continue...</Link>
            </div>
        </section>
    );
};

export default Intro;