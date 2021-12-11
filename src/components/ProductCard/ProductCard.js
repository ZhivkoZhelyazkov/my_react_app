import { Link } from 'react-router-dom';


const ProductCard = ({
    product
}) => {

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            {/* <a href={product.imageUrl} className="fh5co-project-item image-popup"> */}
            <div href={product.imageUrl} className="fh5co-project-item image-popup">
                <figure>
                    <div className="overlay"><i className="ti-plus"></i></div>
                    <img src={product.imageUrl} alt="Img" className="img-responsive" />
                </figure>
                <div className="fh5co-text">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Type: {product.type}</p>
                    <Link to={`/details/${product._id}`} className="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Details</Link>
                </div>
            </div>
            {/* </a> */}
        </div>
    );
};

export default ProductCard;