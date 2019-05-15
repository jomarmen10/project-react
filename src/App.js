import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Post from './components/Post/Post'
import Profile from './components/Profile/Profile'
import * as routes from "./constant/routes"

import './App.css';


class App extends Component {

  state = {
    pics: [],
    searchPic: 'dogs'
  }

  componentDidMount(){
    this.getPics().then(res => {
      console.log(res)
      return this.setState({pics: res})
    })
  }

  componentWillUpdate(){
    this.getPics().then(res => {
      console.log(res)
      return this.setState({pics: res})
    })
  }


  apiHandler = (str) => {
    if(!str){
      return `https://api.unsplash.com/photos/random/?client_id=c60d9f090454d76d4344e50db930e0024b8b2268508a997cbd4595e916131e35&count=30`
    } else {
      return `https://api.unsplash.com/search/photos/?client_id=c60d9f090454d76d4344e50db930e0024b8b2268508a997cbd4595e916131e35&query=${this.state.searchPic}&per_page=30`
    }
  }

  searchUpdate = (val) => {
    this.setState({
      searchPic: val
    })
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
        <Header searchPic={this.searchUpdate}/>
        <Switch>

            <Route exact path={routes.HOME} render={()=> <Post pics={this.state.pics}/>} />
            <Route exact path={'/users/:id'} render={()=> <Profile />} />
        </Switch>
      </div>
    );
  }
}


export default App;
