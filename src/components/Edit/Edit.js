import React , { Component } from 'react'
import { Link } from 'react-router-dom';


class Edit extends Component {

  state={
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePic: '',
    postPic: ''
  }

  componentDidMount(){
    this.setState({
      firstName: this.props.currentUser.firstName,
      lastName: this.props.currentUser.lastName,
      email: this.props.currentUser.email,
      password: this.props.currentUser.password,
      profilePic: this.props.currentUser.profilePic,
      postPic: this.props.currentUser.postPic,
    })
  }

  inputHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.update(this.state)
  }

  render(){
    const {firstName, lastName, email, password, profilePic, postPic} = this.state
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='firstName' value={firstName} placeholder="First Name" onChange={this.inputHandler}></input>
          <input type='text' name='lastName' value={lastName} placeholder="Last Name" onChange={this.inputHandler}></input>
          <input type='text' name='email' value={email} placeholder="Email" onChange={this.inputHandler}></input>
          <input type='password' name='password' value={password} placeholder='Password' onChange={this.inputHandler}></input>
          <input type='text' name='profilePic' value={profilePic} placeholder='Profile Picture (URL)' onChange={this.inputHandler}></input>
          <input type='text' name='postPic' value={postPic} placeholder='Upload photo(URL)' onChange={this.inputHandler}></input>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.props.deleteUser}>delete user</button>
      </div>
    )
  }
}

export default Edit;
