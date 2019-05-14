import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Profile extends Component {
  state = {
    user: {},
    userId: 'boxedwater'
  }

  conponentDidMount() {
    this.getProfile().then(res => {
      console.log(res)
      return this.setState({user: res})
    })
    //fecth the data from instagram

    //get the id from the params e.g. this.props.params.match.id
    //after you get the data setState e.g. User
  }

  getProfile = async() => {
    try{
      const data = await fetch(`https://api.unsplash.com/users/${this.state.userId}?client_id=c60d9f090454d76d4344e50db930e0024b8b2268508a997cbd4595e916131e35`)
      const profile = data.json()
      return profile
    }catch(err){
      return err
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.user.username}</h1>
      </div>
    )
  }
}

export default withRouter(Profile);
