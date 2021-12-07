import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as productService from '../services/productService';
import { AuthContext } from '../contexts/AuthContext';


function Details() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;

    useEffect(() => {
        productService.getOne(productId)
            .then(productResult => {
                setProduct(productResult);
            });
    }, [productId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        productService.destroy(productId, user.accessToken)
            .then(() => {
                navigate('/products');
            });
    };

    const ownerButtons = (
        <>
            <Link id="edit_btn" to="#" className="btn tm-btn-submit tm-btn ml-auto">Edit</Link>
            <a id="delete_btn" href="#" className="btn tm-btn-submit tm-btn ml-auto" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = (<></>);

    return (
        <section id="tm-section-5" className="tm-section">
            <div className="tm-bg-transparent-black tm-contact-box-pad">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <header><h2 className="tm-text-shadow">Product Details</h2></header>
                    </div>
                </div>

                <div className="row tm-page-5-content">
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="contact_message">
                            <section className="contact-form">
                                <div className="form-group">
                                    <p id="contact_img" name="image" className="form-control"><img src={product.imageUrl} alt="Img" /></p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <section className="contact-form">
                            <div className="form-group">
                                <p id="contact_name" name="title" className="form-control">Title: {product.title}</p>
                            </div>
                            <div className="form-group">
                                <p id="contact_name" name="description" className="form-control">Description: {product.description}</p>
                            </div>
                        </section>
                    </div>

                    <div className="form-group col-sm-12">
                        <p id="product_imageUrl" name="imageUrl" className="form-control">imageUrl: {product.imageUrl}</p>
                    </div>
                </div>

                {user._id === product._ownerId ? ownerButtons : userButtons}

                {/* {user._id && (user._id === product._ownerId
                    ? ownerButtons
                    : userButtons
                )} */}

            </div>
        </section>
    );
};

export default Details;
