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
            })
    })
}

export default {
    getRequest,
}