import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as productService from '../services/productService';


function Details() {

    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;

    useEffect(async () => {
        let productResult = await productService.getOne(productId);
        setProduct(productResult);
    }, []);

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
                                    <p id="contact_img" name="image" className="form-control"><img src={product.imageUrl} /></p>
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

                <button id="edit_btn" type="submit" className="btn tm-btn-submit tm-btn ml-auto">Edit</button>
                <button id="delete_btn" type="submit" className="btn tm-btn-submit tm-btn ml-auto">Delete</button>
            </div>
        </section>
    );
};

export default Details;