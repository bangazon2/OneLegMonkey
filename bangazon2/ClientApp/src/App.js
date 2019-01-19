import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch}  from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { productDetail } from './components/productDetail/productDetail';
import { Registration } from './components/Registration/Registration';
import { Authentication } from './components/Authentication/Authentication';
import firebase from 'firebase';

import fbConnection from '../src/firebaseRequests/connection';

fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/authentication', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

export default class App extends Component {

  state =
  {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

  displayName = App.name
  render() {
    return (
      <BrowserRouter>
        <Layout authed={this.state.authed} runAway={this.runAway}>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/productCategories' authed={this.state.authed} component={Counter} />
            <PrivateRoute path='/cart' authed={this.state.authed} component={FetchData} />
            <PrivateRoute path='/productDetail/:id' authed={this.state.authed} component={productDetail} />
            <PublicRoute path='/registration' authed={this.state.authed} component={Registration} />
            <PublicRoute path='/authentication' authed={this.state.authed} component={Authentication} />
          </Switch>
        </Layout>
      </BrowserRouter>

    );
  }
}
