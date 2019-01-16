import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { productDetail } from './components/productDetail/productDetail';
import { Registration } from './components/Registration/Registration';
import { Authentication } from './components/Authentication/Authentication';

import fbConnection from '../src/firebaseRequests/connection';

fbConnection();

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/productDetail' component={productDetail} />
        <Route path='/registration' component={Registration} />
        <Route path='/authentication' component={Authentication} />
      </Layout>
    );
  }
}
