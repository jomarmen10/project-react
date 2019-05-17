import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'

import Header from './components/Header/Header';
import Post from './components/Post/Post'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Edit from './components/Edit/Edit'


import * as routes from "./constant/routes"

import './App.css';


class App extends Component {

  state = {
    currentUser: null,
    logged:false,
    pics: [],
    searchPic: ''
  }

  // componentDidMount(){
  //   this.getPics().then(res => {
  //     return this.setState({pics: res})
  //   })
  // }

  apiHandler = (str) => {
    if(!str){
      return `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}&count=30`
    } else {
      return `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=${this.state.searchPic}&per_page=30`
    }
  }

  delUser = async () => {
    console.log('hello')
    try{
      const deleteUser = await fetch(`/users/delete/${this.state.currentUser._id}`, {
        method: "DELETE"
      })
      this.setState({
        logged: false,
        currentUser: null
      })
      this.props.history.push('/')
    }catch(err){
      return err
    }
  }

  update = async(info) => {
    try{
      const updateUser = await fetch(`/users/${this.state.currentUser._id}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updatedUser = await updateUser.json();
      if(updateUser.success){
        this.setState({
          currentUser: updatedUser.user

        })
      }
      this.props.history.push('/')
    }catch(err){
      return err
    }
  }

  register = async(info) => {
    try{
      const registeredUser = await fetch('/users/create', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const newUser = await registeredUser.json();
      if(newUser.success){
        this.setState({
          currentUser: newUser.user,
          logged: true
        })
      }

    }catch(err){
      return err
    }
  }

  login = async(info) => {

    try{
      const loginUser = await fetch('/users/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const logUser = await loginUser.json();
      if(logUser.success){
        this.setState({
          currentUser: logUser.user,
          logged: true
        })
      }

    }catch(err){
      return err
    }
  }

  searchUpdate = async(val) => {
    try{
      await this.setState({searchPic: val})
      const res = await this.getPics();
      return this.setState({pics: res})
    }catch(err){
      return err
    }
  }

  getPics = async() => {
    try {
      const data = await fetch(this.apiHandler(this.state.searchPic))
      const pics = await data.json()
      return pics.results ? pics.results : pics;
    }catch(err){
      return err
    }
  }



  render() {
    return (
      <div>
        <Header isLogged={this.state.logged} searchUpdate={this.searchUpdate}/>
        <Switch>
          <Route exact path={routes.PROFILE} render={()=> <Profile currentUser={this.state.currentUser} isLogged={this.state.logged}/>} />
          <Route exact path={'/edit/:id'} render={()=> <Edit currentUser={this.state.currentUser} update={this.update} deleteUser={this.delUser}/>}/>
          <Route exact path={'/login'} render={()=><Login login={this.login} currentUser={this.state.currentUser} isLogged={this.state.logged}/>}/>
          <Route exact path={routes.FEED} render={()=> <Post pics={this.state.pics}/>} />
          <Route exact path={routes.REGISTER} render={()=> <Register currentUser={this.state.currentUser} register={this.register} isLogged={this.state.logged}/>}/>
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
