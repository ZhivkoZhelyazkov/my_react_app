import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';


function Register() {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);
                navigate('/services');
            });
    };

    return (
        <section id="tm-section-5" className="tm-section">
            <div className="tm-bg-transparent-black tm-contact-box-pad">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <header><h2 className="tm-text-shadow">Register</h2></header>
                    </div>
                </div>
                <div className="row tm-page-5-content">
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="contact_message">
                            <form method="POST" className="contact-form" onSubmit={registerSubmitHandler}>
                                <div className="form-group">
                                    <input type="email" id="contact_email" name="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="contact_password" name="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="contact_confirm_pass" name="confirm_pass" className="form-control" placeholder="Repeat Password" required />
                                </div>
                                <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="tm-address-box">
                            <h5>The personal data collected when you register on our Website will be stored as long as your account remains active and will be deleted immediately after the closure of your account.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;