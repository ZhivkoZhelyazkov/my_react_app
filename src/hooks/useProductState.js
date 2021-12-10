import { useState, useEffect } from 'react';
import * as productService from '../services/productService';

const useProductState = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        productService.getOne(productId)
            .then(productResult => {
                setProduct(productResult);
            });
    }, [productId]);

    return [
        product,
        setProduct
    ];
};

export default useProductState;