import React, { Component } from 'react';

export class Cart extends Component {
    state = {
        products: this.props.cart,
    }

    componentWillReceiveProps() {
        this.setState({ products: this.props.cart })
    }

    render() {
        const myProducts = this.state.products.map((product) => {
            return (
                <li key={product.id}>
                    <p>{product.name}</p>
                </li>
                )
        });

        return (
            <div>
                <h1>My Cart</h1>
                <ul>{myProducts}</ul>
            </div>
        );
    }
}
