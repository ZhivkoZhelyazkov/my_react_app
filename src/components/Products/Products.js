import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import * as productService from '../../services/productService';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => {
                setProducts(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <div className="gtco-section border-bottom">
            <div className="gtco-container tm-bg-transparent-black">
                <div className="row mb-4">
                    <header className="col-xl-12"><h2 className="tm-text-shadow">NDT Methods</h2></header>
                </div>
                <div className="row mb-4">

                    {products.length > 0
                        ? <>{products.map(x => <ProductCard key={x._id} product={x} />)}</>
                        : <h2 className="col-xl-12 tm-text-shadow">No NDT Methods in the database!</h2>
                    }

                </div>
                <Link id="create_btn" to="/create" className="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Add NDT Method</Link>
            </div>
        </div>
    );
};

export default Products;