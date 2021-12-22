import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './Common/PrivateRoute';

import Loader from './components/Loader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Services from './components/Services';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import ErrorPage from './components/ErrorPage';


function App() {
    return (
        <AuthProvider>
            <div>
                <Loader />
                <div className="container-fluid tm-main">
                    <div className="row tm-main-row">
                        <Header />
                        <Sidebar />
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content">
                            <Routes>
                                <Route path="/" element={<Intro />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/edit/:productId" element={<Edit />} />
                                <Route path="/details/:productId" element={<Details />} />
                                <Route path="*" element={<ErrorPage />} />

                                <Route element={<PrivateRoute />}>
                                    <Route path="/create" element={<Create />} />
                                </Route>
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
        </AuthProvider>
    );
}

export default App;









// import Projects from './components/Projects';
// import ContactUs from './components/ContactUs';
// <Route path="/projects" element={<Projects />} />
// <Route path="/contacts" element={<ContactUs />} />
