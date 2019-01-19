import React, { Component } from 'react';
import authRequests from '../../firebaseRequests/auth';
import { Link } from 'react-router-dom';

export class Registration extends Component {

  state = {
    user: {
      firstname:'Jeffrey',
      lastname: 'Chen',
      email: 'jeffreychen2016@gmail.com',
      password: '123456',
    },
  };

  registerClickEvent = e => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then((fbUser) => {
        this.props.history.push('/cart');
        const userToPost = {
          FirstName: user.firstname,
          LastName: user.lastname,
          IsActive: 1,
          FirebaseId: fbUser.user.uid
        }
        authRequests.addCustomer(userToPost);
      })
      .catch(error => {
        console.error('there was an error when registering', error);
      });
  };

  firstNameChange = e => {
    const tempuser = { ...this.state.user };
    tempuser.firstname = e.target.value;
    this.setState({ user: tempuser });
  }

  lastNameChange = e => {
    const tempuser = { ...this.state.user };
    tempuser.lastname = e.target.value;
    this.setState({ user: tempuser });
  }

  emailChange = e => {
    const tempuser = { ...this.state.user };
    tempuser.email = e.target.value;
    this.setState({ user: tempuser });
  };

  passwordChange = e => {
    const tempuser = { ...this.state.user };
    tempuser.password = e.target.value;
    this.setState({ user: tempuser });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
          <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                First Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                  value={user.firstname}
                  onChange={this.firstNameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Last Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                  value={user.lastname}
                  onChange={this.lastNameChange}
                />
              </div>
            </div>
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
                  value={user.email}
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
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/authentication">Need to Login?</Link>
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
