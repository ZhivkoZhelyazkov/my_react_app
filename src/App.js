import { useState, useEffect } from 'react';
import * as authService from './services/authService';


import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Products from './components/Products/Products';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
// import ErrorPage from './components/ErrorPage';

function App() {

    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });
    useEffect(() => {
        let user = authService.getUser();
        setUserInfo({
            isAuthenticated: Boolean(user),
            user: user
        });
    }, []);
    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            user: username,
        });
    };

    return (
        <div>
            <Loader />
            <div className="container-fluid tm-main">
                <div className="row tm-main-row">
                    <Header {...userInfo} />
                    <Sidebar {...userInfo} />

                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content">

                        <Routes>
                            <Route path="/" element={<Intro />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contacts" element={<ContactUs />} />
                            <Route path="/login" element={<Login onLogin={onLogin} />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>

                    </div>
                    <Footer />
                </div>
            </div>
            <div id="preload-01"></div>
            <div id="preload-02"></div>
            <div id="preload-03"></div>
            <div id="preload-04"></div>
        </div>
    );
}

export default App;
