import React, { Component } from 'react';

class User extends Component {

  render(){
    console.log(this.props.currentUser)
    return(
      <div>
        userpage
        {this.props.currentUser.firstName}
        
      </div>
    )
  }
}

export default User;
