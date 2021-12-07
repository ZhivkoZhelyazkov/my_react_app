// const baseUrl = 'http://my-softuni-custom-server.herokuapp.com/data';
const baseUrl = 'http://localhost:3030/data';


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


export const create = async (productData, token) => {
    let response = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(productData)
    });
    let result = await response.json();
    return result;
};


export const destroy = (productId, token) => {
    return fetch(`${baseUrl}/products/${productId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(response => response.json());
};