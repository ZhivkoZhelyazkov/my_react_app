import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as productService from '../services/productService';
import { AuthContext } from '../contexts/AuthContext';


function Create() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onProdCreate = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        productService.create({
            title,
            description,
            imageUrl
        }, user.accessToken)
            .then(response => {
                navigate('/products');
            });    
    };

    return (
        <section id="tm-section-5" className="tm-section">
            <div className="tm-bg-transparent-black tm-contact-box-pad">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <header><h2 className="tm-text-shadow">Create Product</h2></header>
                    </div>
                </div>
                <div className="row tm-page-5-content">
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="contact_message">
                            <form onSubmit={onProdCreate} method="POST" className="contact-form">
                                <div className="form-group">
                                    <input type="text" id="contact_name" name="title" className="form-control" placeholder="Title" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="contact_name" name="description" className="form-control" placeholder="Description" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="contact_email" name="imageUrl" className="form-control" placeholder="Image URL" required />
                                </div>
                                <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Create</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="tm-address-box">
                            <p>Aliquam interdum, nisl sedd faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor.</p>
                            <p>Curabitur venenatis leo in augue convallis, vulputate sollicitudin ex maximus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;