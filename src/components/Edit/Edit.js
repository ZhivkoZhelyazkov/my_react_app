import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as productService from '../../services/productService';
import useProductState from '../../hooks/useProductState';


const types = [
    { value: 'Coating', text: 'Coating' },
    { value: 'Concrete', text: 'Concrete' },
    { value: 'Rainforcement', text: 'Rainforcement' },
];


const Edit = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useProductState(productId);
    const [errors, setErrors] = useState({ title: false });
    

    const productEditSubmitHandler = (e) => {
        e.preventDefault();
        let productData = Object.fromEntries(new FormData(e.currentTarget));
        productService.update(productId, productData)
            .then(response => {
                navigate('/products');
            });
    };


    const changeTypeHandler = (e) => {
        e.preventDefault();
        setProduct(state => ({...state, type: e.target.value}));
    };

    const titleChangeHandler = (e) => {
        let currentTitle = e.target.value;
        if (currentTitle.length < 3) {
            setErrors(state => ({ ...state, title: 'The title should be at least 3 characters long.' }));
        } else if (currentTitle.length > 30) {
            setErrors(state => ({ ...state, title: 'The title should be at most 30 characters long.' }));
        } else {
            setErrors(state => ({ ...state, title: false }));
        }
    };


    return (
            <section id="tm-section-5" className="tm-section">
                <div className="tm-bg-transparent-black tm-contact-box-pad">
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <header><h2 className="tm-text-shadow">Edit the NDT Method</h2></header>
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

                        <form className="edit-form form-group col-sm-12" method="POST" onSubmit={productEditSubmitHandler}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="edit_title"
                                    name="title"
                                    className="form-control"
                                    defaultValue={product.title}
                                    onChange={titleChangeHandler}
                                    style={{ borderColor: errors.title ? 'red' : '' }}
                                />
                            </div>

                            <div className="alert alert-primary" role="alert" style={{ display: errors.title ? 'inline' : 'none' }}>{errors.title}</div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="edit_discription"
                                    name="description"
                                    className="form-control"
                                    defaultValue={product.description}
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    id="edit_type"
                                    name="type"
                                    className="form-control"
                                    value={product.type}
                                    onChange={changeTypeHandler}
                                >
                                    {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                                </select>
                            </div>
                            <input
                                type="text"
                                id="edit_imageUrl"
                                name="imageUrl"
                                className="form-control"
                                defaultValue={product.imageUrl}
                            />

                            <Link id="cancel_btn" to={`/details/${product._id}`} className="btn tm-btn-submit tm-btn ml-auto">Cancel</Link>
                            <input id="save_btn" type="submit" className="btn tm-btn-submit tm-btn ml-auto" value="Save" />
                        </form>
                    </div>

                </div>
            </section>
    );
};

export default Edit;
