import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useProductState from '../hooks/useProductState';

import * as productService from '../services/productService';
import { useAuthContext } from '../contexts/AuthContext';
import SaveDialog from '../Common/SaveDialog';


const types = [
    {value: 'Concrete', text: 'Concrete'},
    {value: 'Rainforcement', text: 'Rainforcement'}
];


function Edit() {
    const { productId } = useParams();
    const [product, setProduct] = useProductState(productId);

    const productEditSubmitHandler = (e) => {
        e.preventDefault();

        console.log('submit');
    };


    // const navigate = useNavigate();
    // const { user } = useAuthContext();
    const [showSaveDialog, setShowSaveDialog] = useState(false);

    const saveHandler = (e) => {
        e.preventDefault();
        // productService.destroy(productId, user.accessToken)
        //     .then(() => {
        //         setShowDeleteDialog(false);
        //         navigate('/products');
        //     })
        //     .finally(() => {
        //         setShowDeleteDialog(false);
        //     });
    };

    const saveClickHandler = (e) => {
        e.preventDefault();
        setShowSaveDialog(true);
    };


    return (
        <>
            <SaveDialog show={showSaveDialog} onClose={() => setShowSaveDialog(false)} onConfirm={saveHandler} />
            <section id="tm-section-5" className="tm-section">
                <div className="tm-bg-transparent-black tm-contact-box-pad">
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <header><h2 className="tm-text-shadow">Edit the Product</h2></header>
                        </div>
                    </div>

                    <div className="row tm-page-5-content">
                        <div className="col-md-6 col-sm-12 tm-contact-col">
                            <div className="contact_message">
                                <section className="contact-form">
                                    <div className="form-group">
                                        <p id="contact_img" name="image" className="form-control"><img src={product.imageUrl} alt="Img" width="500" /></p>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <form className="edit-form form-group col-sm-12" nethod="POST" onSubmit={productEditSubmitHandler}>
                            <div className="form-group">
                                <input type="text" id="edit_title" name="title" className="form-control" defaultValue={product.title} />
                            </div>
                            <div className="form-group">
                                <input type="text" id="edit_discription" name="description" className="form-control" defaultValue={product.description} />
                            </div>
                            <div className="form-group">
                                <select id="edit_type" name="type" className="form-control" value="con">
                                    {types.map(x => <option key={x.value} value={x.value}>{x.value}</option>)}
                                </select>
                            </div>
                            <input type="text" id="edit_imageUrl" name="imageUrl" className="form-control" defaultValue={product.imageUrl} />
                        </form>
                    </div>

                    <Link id="cancel_btn" to={`/details/${product._id}`} className="btn tm-btn-submit tm-btn ml-auto">Cancel</Link>
                    <a id="save_btn" href="#" className="btn tm-btn-submit tm-btn ml-auto" onClick={saveClickHandler}>Save</a>

                </div>
            </section>
        </>
    );
};

export default Edit;
