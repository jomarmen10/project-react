import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/"></a>
          </div>
          <div className="search-bar">
            <input />
          </div>
        </div>
      </nav>
    )
  }
}



export default Header
