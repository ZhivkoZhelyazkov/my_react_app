import { useNavigate } from 'react-router-dom';

import * as productService from '../../services/productService';
import { useAuthContext } from '../../contexts/AuthContext';


function Create() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onProdCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        productService.create({
            title,
            description,
            imageUrl,
            type,
            author: user.email.split('@')[0]
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
                        <header><h2 className="tm-text-shadow">Add New NDT Method</h2></header>
                    </div>
                </div>
                <div className="row tm-page-5-content">
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="contact_message">
                            <form onSubmit={onProdCreate} method="POST" className="contact-form">
                                <div className="form-group">
                                    <input type="text" id="create_title" name="title" className="form-control" placeholder="Title" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" id="create_description" name="description" className="form-control" placeholder="Description" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" id="create_imageUrl" name="imageUrl" className="form-control" placeholder="Image URL" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select id="select_type" className="form-control" name="type">
                                        <option className="form-control" value=""></option>
                                        <option className="form-control" value="Coating">Coating</option>
                                        <option className="form-control" value="Concrete">Concrete</option>
                                        <option className="form-control" value="Rainforcement">Rainforcement</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Create</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="tm-address-box">
                            <h5>Here you may add your test method.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;