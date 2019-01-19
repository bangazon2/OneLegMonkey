import axios from 'axios';

const getRequest = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/product/latest`)
            .then(results => {
                resolve(results.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/product/${id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default {
    getRequest,
    getProductById
}