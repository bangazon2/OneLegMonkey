﻿import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export class productDetail extends Component {

    state =
        {
            products: []
        }

    componentDidMount() {
        // send data to state
    }

    render() {
        const singleProduct = this.state.products.map((product) => {
            return (
                <div>
                    <h1>Title</h1>
                    <h2>Desc</h2>
                    <h3>{product}</h3>
                </div>
            );
        });
        return (
            <div>
                <h1>Product Detail</h1>
                {singleProduct}
            </div>
        );
    }
}