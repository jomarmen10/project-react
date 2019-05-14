import React, { Component } from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post'

import './App.css';


class App extends Component {

  state = {
    pics: [],
    searchPic: 'dog'
  }

  componentDidMount(){
    this.getPics().then(res => {
      console.log(res)
      return this.setState({pics: res.results})
    })
  }
  //
  // componentWillUpdate(){
  //   this.getPics().then(res => {
  //     console.log(res)
  //     return this.setState({pics: res.results})
  //   })
  // }


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
      // const data = await fetch(this.apiHandler(this.state.searchPic))
      const data = await fetch(`https://api.unsplash.com/search/photos/?client_id=c60d9f090454d76d4344e50db930e0024b8b2268508a997cbd4595e916131e35&query=${this.state.searchPic}&per_page=30`)
      const pics = await data.json()
      return pics;
    }catch(err){
      return err
    }
  }

  render() {
    return (
      <div>
        <Header searchPic={this.searchUpdate}/>
        <div>
        <Post pics={this.state.pics}/>
        </div>
      </div>
    );
  }
}


export default App;
