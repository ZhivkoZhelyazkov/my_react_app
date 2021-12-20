import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';


const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                navigate('/services');
            })
            .catch(err => {
                console.log(err);
                navigate('/register');
            });
    };

    return (
        <section id="tm-section-5" className="tm-section">
            <div className="tm-bg-transparent-black tm-contact-box-pad">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <header><h2 className="tm-text-shadow">Login</h2></header>
                    </div>
                </div>
                <div className="row tm-page-5-content">
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="contact_message">
                            <form className="contact-form" onSubmit={onLoginHandler}>
                                <div className="form-group">
                                    <input type="email" id="contact_email" name="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="contact_password" name="password" className="form-control" placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 tm-contact-col">
                        <div className="tm-address-box">
                            <p>Aliquam interdum, nisl sedd faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor.</p>
                            <p>Curabitur venenatis leo in augue convallis, vulputate sollicitudin ex maximus.</p>
                            <address>
                                120-240 Aliquam nec neque augue<br />
                                Suspendisse tincidunt nunc,<br />
                                vitae sagis justo 11000
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;