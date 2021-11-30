import { useState } from 'react';

import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Products from './components/Products';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {

    const [page, setPage] = useState('/');
    const routes = {
        '/intro': <Introduction />,
        '/products': <Products />,
        '/services': <Services />,
    };
    const navChangeHandler = (path) => {
        setPage(path);
    };




    return (
        <div>
            <Loader />
            <div className="container-fluid tm-main">
                <div className="row tm-main-row">
                    <Sidebar 
                        navChangeHandler = {navChangeHandler}
                    />
                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content">
                        
                        {routes[page] || <ErrorPage />}
                        
                        {/* <Introduction />
                        <Products />
                        <Services /> */}
                        <ContactUs />
                        <Register />

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
