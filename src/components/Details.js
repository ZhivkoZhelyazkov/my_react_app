import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as productService from '../services/productService';
import { useAuthContext } from '../contexts/AuthContext';
import useProductState from '../hooks/useProductState';
import ConfirmDialog from '../Common/ConfirmDialog';


function Details() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { productId } = useParams();
    const [product, setProduct] = useProductState(productId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);


    const deleteHandler = (e) => {
        e.preventDefault();

        productService.destroy(productId, user.accessToken)
            .then(() => {
                setShowDeleteDialog(false);
                navigate('/products');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    };

    const ownerButtons = (
        <>
            <Link id="edit_btn" to={`/edit/${product._id}`} className="btn tm-btn-submit tm-btn ml-auto">Edit</Link>
            <a id="delete_btn" href="#" className="btn tm-btn-submit tm-btn ml-auto" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const userButtons = (<></>);

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onConfirm={deleteHandler} />
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
                                    <p id="product_title" name="title" className="form-control">Title: {product.title}</p>
                                </div>
                                <div className="form-group">
                                    <p id="product_description" name="description" className="form-control">Description: {product.description}</p>
                                </div>
                                <div className="form-group">
                                    <p id="product_type" name="type" className="form-control">Type: {product.type}</p>
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
        </>
    );
};

export default Details;
