import React, { Component } from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post'

import './App.css';


class App extends Component {

  state = {
    pics: [],
    searchPic: 'cat'
  }

  componentDidMount(){
    this.getPics().then(res => {
      console.log(res)
      return this.setState({pics: res.results})
    })
  }

  getPics = async() => {
    try {
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
        <Header />
        <div>
        <Post pics={this.state.pics}/>
        </div>
      </div>
    );
  }
}


export default App;
