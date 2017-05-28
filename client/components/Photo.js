import React from 'react';
import PhotoSingle from './PhotoSingle';

const Photo = React.createClass({
  render () {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.id);    
    const post = this.props.posts[i]
    return (
      <div className="single-photo">
        <PhotoSingle i={i} post={post} {...this.props} />

      </div>
    );
  }
});

export default Photo;