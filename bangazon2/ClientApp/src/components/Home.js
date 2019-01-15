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
        const latestProducts = this.state.products.map((product) => {
            return (
                <li>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
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
