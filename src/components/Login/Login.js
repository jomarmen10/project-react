import React, { Component } from 'react'
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  inputHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.login(this.state)
  }

  render(){
    return(
      <div>
        {
          this.props.isLogged
            ? <Redirect to={`/users/${this.props.currentUser._id}`}/>
            :<form onSubmit={this.submitHandler}>
            <input type='text' name='email' value={this.state.email} placeholder='email' onChange={this.inputHandler}></input>
            <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.inputHandler}></input>
            <button type='Submit'>Login</button>
          </form>

        }


      </div>
    )
  }
}

export default Login;
