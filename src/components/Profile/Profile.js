import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import Edit from '../Edit/Edit'

import './Profile.css'

class Profile extends Component {
  state = {
    user: {},

  }

  componentDidMount() {
    this.getProfile().then(res => {
      return this.setState({user: res})
    })
  }

  getProfile = async() => {
    try{
      const data = await fetch(`https://api.unsplash.com/users/${this.props.match.params.id}?client_id=${process.env.REACT_APP_KEY}`)
      const profile = data.json()
      return profile
    }catch(err){
      return err
    }
  }

  render(){
    const {username, photos, profile_image, followers_count, following_count, bio, id } = this.state.user
    console.log(bio)

    return(

      <div >

        <div className='container'>
          <div className='profile'>
            <div className="profile-image">
              {profile_image ? <img src={profile_image.large}></img> : <img src='https://www.showflipper.com/blog/images/default.jpg'></img>}
            </div>
            <div className="profile-username">
              <h4>{username}</h4>
              {
                this.props.isLogged && (!id)
                  ? <Link to={`/edit/${this.props.currentUser._id}`} render={()=><Edit />}>EDIT</Link>
                  : null
              }

            </div>
            <div className='profile-stats'>
              <ul>
                <li>
                  {following_count} following
                </li>
                <li>
                  {followers_count} followers
                </li>
              </ul>
            </div>
            <div className='profile-bio'>
              <p>{bio}</p>
            </div>
          </div>
        </div>

        

        <div className='container'>
          <div className='gallery'>
            {
              photos
                ? photos.map((p,i) =>
                  <div className='gallery-item'>
                    <img className='gallery-image' key={i} src={p.urls.small}></img>
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
