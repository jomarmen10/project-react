import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import * as routes from '../../constant/routes';

class Header extends Component {
  state = {
    newSearch: ''
  };

  searchHandler = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  submitHandler = e => {
    console.log('submitted');
    console.log(this.props);
    e.preventDefault();
    this.props.searchUpdate(this.state.newSearch);
  };

  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" />
          </div>
          <div className="search-bar">
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                placeholder="search"
                value={this.state.newSearch}
                name="newSearch"
                onChange={this.searchHandler}
                autoComplete="off"
              />
            </form>
          </div>
          <div className="Nav-link">
            {this.props.isLogged ? (
              <div>
                <NavLink to={routes.FEED}>FEED</NavLink> <br />
                <NavLink to={routes.LOGIN}>PROFILE</NavLink> <br />
                <a href="/login">logout</a>
              </div>
            ) : (
              <div>
                <NavLink to={routes.REGISTER}>REGISTER</NavLink> <br />
                <NavLink to={routes.LOGIN}>LOGIN</NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
