import React, { Component } from 'react';
import productsRequest from '../DBRequests/productRequest';

export class Home extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        productsRequest
            .getRequest()
            .then((products) => {
                this.setState({ products })
            })
            .catch();
    }

    render() {
        const singleProduct = (id) => {
            this.props.history.push(`/productDetail/${id}`);
        };

        const latestProducts = this.state.products.map((product) => {
            return (
                <li key={product.id} onClick={() => singleProduct(product.id)}>
                    <p>{product.name} &nbsp; ${product.price}.00</p>
                </li>
            );
        })
    return (
      <div>
        <h1>Bangazon, Inc.</h1>
        <ul>
            {latestProducts}
        </ul>
      </div>
    );
  }
}
