import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


import './Header.css';
import * as routes from '../../constant/routes'

class Header extends Component {
  state = {
    newSearch: ""
  }

  searchHandler = (e) =>{
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.searchUpdate(this.state.newSearch)
  }


  render() {
    return(
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo"></a>
          </div>
          <div className="search-bar">
            <form onSubmit={this.submitHandler}>
              <input type='text' placeholder='search' value={this.state.newSearch} name='newSearch' onChange={this.searchHandler}></input>
            </form>
          </div>

          {
            this.props.isLogged
              ?<div>
                <NavLink to={routes.FEED}>FEED</NavLink> <br/>
                <NavLink to={routes.LOGIN}>PROFILE</NavLink>
              </div>
              :
              <div>
                <NavLink to={routes.REGISTER}>REGISTER</NavLink> <br/>
                <NavLink to={routes.LOGIN}>LOGIN</NavLink>
              </div>
          }


        </div>
      </nav>
    )
  }
}



export default Header
