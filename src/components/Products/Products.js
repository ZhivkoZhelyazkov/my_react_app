import { Routes, Route, Link } from 'react-router-dom';
import Product1 from './ProductCard';

function Products() {
    return (
        <section id="tm-section-2" className="tm-section tm-section-carousel">
            <div>
                <header className="mb-4"><h2 className="tm-text-shadow">Our Products</h2></header>
                <div className="tm-img-container">
                    <div className="tm-img-slider">
                        {/* <Routes>
                        <Route path="/img/gallery-img-01-tn.jpg" element={<Product1 />} /> */}
                        <Link to="/img/gallery-img-01.jpg" className="tm-slider-img"><img src="/img/gallery-img-01-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        <Link to="/img/gallery-img-02.jpg" className="tm-slider-img"><img src="/img/gallery-img-02-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        <Link to="/img/gallery-img-03.jpg" className="tm-slider-img"><img src="/img/gallery-img-03-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        <Link to="/img/gallery-img-04.jpg" className="tm-slider-img"><img src="/img/gallery-img-04-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        <Link to="/img/gallery-img-05.jpg" className="tm-slider-img"><img src="/img/gallery-img-05-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        <Link to="/img/gallery-img-06.jpg" className="tm-slider-img"><img src="/img/gallery-img-06-tn.jpg" alt="Img" className="img-fluid" /></Link>
                        {/* </Routes> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;