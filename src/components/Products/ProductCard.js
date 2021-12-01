import { Link } from 'react-router-dom';

function Product1() {
    return (
        <Link to="/img/gallery-img-01.jpg" className="tm-slider-img"><img src="/img/gallery-img-01-tn.jpg" alt="Img" className="img-fluid" /></Link>
    );
};

export default Product1;