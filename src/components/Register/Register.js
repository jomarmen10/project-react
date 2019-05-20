import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    logged: false
  }

  inputHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  submitHandler= async(e) => {
    e.preventDefault();
    this.props.register(this.state)
  }

  render(){
    const {firstName, lastName, email, password} = this.state
    return(
      <div>
        {this.props.isLogged
          ? <Redirect to={`/edit/${this.props.currentUser._id}`}/>
          :
          (
            <form onSubmit={this.submitHandler}>
              <input type='text' name='firstName' value={firstName} placeholder="First Name" onChange={this.inputHandler}></input>
              <input type='text' name='lastName' value={lastName} placeholder="Last Name" onChange={this.inputHandler}></input>
              <input type='text' name='email' value={email} placeholder="Email" onChange={this.inputHandler}></input>
              <input type='password' name='password' value={password} placeholder='Password' onChange={this.inputHandler}></input>

              <button type="submit">REGISTER</button>
            </form>
          )
        }
      </div>
    )
  }
}

export default Register;
