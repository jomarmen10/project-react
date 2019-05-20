import React, { Component } from 'react';
import Edit from '../Edit/Edit'
import { Link } from 'react-router-dom';

class User extends Component {
  state = {
    current: null
  }

  componentDidMount(){
    this.setState({
      current: this.props.currentUser
    })
  }

  render(){
    console.log(this.props.currentUser)
    console.log(this.state.current)
    return(


      <div>
        {this.state.current.email}
      </div>
    )
  }
}

export default User;
