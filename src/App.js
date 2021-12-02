import { useState, useEffect } from 'react';
import * as authService from './services/authService';


import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Projects from './components/Projects/Projects';
import Services from './components/Services';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';

import Create from './components/Create';
import Details from './components/Details';
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
    const onLogout = (username) => {
        setUserInfo({
            isAuthenticated: false,
            user: '',
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
                            <Route path="/services" element={<Services />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contacts" element={<ContactUs />} />
                            <Route path="/login" element={<Login onLogin={onLogin} />} />
                            <Route path="/logout" element={<Logout onLogout={onLogout} />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create" element={<Create />} />
                            <Route path="/details/:productId" element={<Details />} />
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
