import React, { Component } from 'react';
import PhotoSingle from './PhotoSingle';

const PhotoGrid = React.createClass({
  // NOTE: use of ES2016 spread op (...this.props)
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => 
          <PhotoSingle {...this.props} key={i} i={i} post={post} />)}
      </div>
    );
  }
});

export default PhotoGrid;