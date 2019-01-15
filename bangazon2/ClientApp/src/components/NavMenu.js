import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>One Legged Monkey</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem><Glyphicon glyph='search' /><input type="text" placeholder="Search for products here"/></NavItem>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Products
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/productCategories'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Product Categories
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/cart'}>
              <NavItem>
                <Glyphicon glyph='shopping-cart' /> Cart
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/registration'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Registration
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
