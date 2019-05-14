import React, { Component } from 'react';

import './Post.css';

class Post extends Component {



  render() {
    const { pics } = this.props
    return(
      <div>
        {pics.map((p,i)=>
          <article className="Post" ref="Post" key={i}>
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={ p.user.profile_image.small} alt="Chris" />
                </div>
                <div className="Post-user-nickname">
                  <span>{p.user.username}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src={ p.urls.small} />
              </div>
            </div>
            <div className="Post-caption">

              <strong>{p.user.username}</strong>
              {
                p.description
                  ? p.description
                  : p.alt_description
              }
            </div>
          </article>
        )}
      </div>
    )
  }
}

export default Post;
