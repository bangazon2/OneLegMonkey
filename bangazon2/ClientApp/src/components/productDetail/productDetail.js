import React, { Component } from 'react';
import productRequest from '../../DBRequests/productRequest';

export class productDetail extends Component {

    state =
        {
            products: []
        }

    componentDidMount() {
        const productId = 5;
        productRequest.getProductById(productId)
            .then((res) => {
                this.setState({ products: [res] });
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const singleProduct = this.state.products.map((product) => {
            return (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <h2>Price: {product.price}</h2>
                    <h2>Quantity: {product.quantity}</h2>
                    <p>Description: {product.description}</p>
                    <button className="btn btn-danger">Add To Cart</button>
                </div>
            );
        });
        return (
            <div className='text-center'>
                <h1>Product Detail</h1>
                {singleProduct}
            </div>
        );
    }
}