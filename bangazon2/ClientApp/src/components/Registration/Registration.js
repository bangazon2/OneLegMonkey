import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import { Link } from 'react-router-dom';

export class Registration extends Component {

  state = {
    credential: {
      email: 'jeffreychen2016@gmail.com',
      password: '123456',
    },
  };

  registerClickEvent = e => {
    const { credential } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(credential)
      .then(() => {
        this.props.history.push('/counter');
      })
      .catch(error => {
        console.error('there was an error when registering', error);
      });
  };

  emailChange = e => {
    const tempCredential = { ...this.state.credential };
    tempCredential.email = e.target.value;
    this.setState({ credential: tempCredential });
  };

  passwordChange = e => {
    const tempCredential = { ...this.state.credential };
    tempCredential.password = e.target.value;
    this.setState({ credential: tempCredential });
  };

  render() {
    const { credential } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={credential.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">
                Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={credential.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/login">Need to Login?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.registerClickEvent}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
