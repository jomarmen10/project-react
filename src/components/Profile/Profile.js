import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './Profile.css'

class Profile extends Component {
  state = {
    user: {},

  }

  componentDidMount() {
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
      const data = await fetch(`https://api.unsplash.com/users/${this.props.match.params.id}?client_id=c60d9f090454d76d4344e50db930e0024b8b2268508a997cbd4595e916131e35`)
      const profile = data.json()
      return profile
    }catch(err){
      return err
    }
  }

  render(){
    const {username, photos, profile_image, followers_count, following_count, bio } = this.state.user
    console.log(bio)

    return(

      <div >

        <div class='container'>
          <div class='profile'>
            <div class="profile-image">
              {profile_image ? <img src={profile_image.large}></img> : null}
            </div>
            <div class="profile-username">
              <h4>{username}</h4>
            </div>
            <div class='profile-stats'>
              <ul>
                <li>
                  {following_count} following
                </li>
                <li>
                  {followers_count} followers
                </li>
              </ul>
            </div>
            <div class='profile-bio'>
              <p>{bio}</p>
            </div>
          </div>
        </div>



        <div class='container'>
          <div class='gallery'>
            {
              photos
                ? photos.map((p,i) =>
                  <div class='gallery-item'>
                    <img class='gallery-image' key={i} src={p.urls.small}></img>
                  </div>
                )
                : null
            }
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Profile);
