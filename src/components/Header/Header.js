import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    newSearch: ""
  }

  searchHandler = (e) =>{
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.searchPic(this.state.newSearch)
  }

  render() {
    return(
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/"></a>
          </div>
          <div className="search-bar">
            <form onSubmit={this.submitHandler}>
              <input type='text' placeholder='search' value={this.state.newSearch} name='newSearch' onChange={this.searchHandler}></input>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}



export default Header
