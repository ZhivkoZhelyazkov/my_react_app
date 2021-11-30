function Register() {
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
                            <form action="#contact" method="post" className="contact-form">
                                <div className="form-group">
                                    <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
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

export default Register;