import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { productDetail } from './components/productDetail/productDetail';
import { Registration } from './components/Registration/Registration';
import fbConnection from '../src/firebaseRequests/connection';

fbConnection();

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/productCategories' component={Counter} />
        <Route path='/cart' component={FetchData} />
        <Route path='/productDetail' component={productDetail} />
        <Route path='/registration' component={Registration} />
      </Layout>
    );
  }
}
