const baseUrl = 'https://my-softuni-custom-server.herokuapp.com/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/products`);
    let products = await response.json();
    let result = Object.values(products);
    return result;
};


export const getOne = (productId) => {
    return fetch(`${baseUrl}/products/${productId}`)
        .then(response => response.json());
};


export const create = async (productData) => {
    let response = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    });
    let result = await response.json();
    return result;
};