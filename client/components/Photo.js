import React from 'react';
import PhotoSingle from './PhotoSingle';
import Comment from './Comments';

const Photo = React.createClass({
  render () {
    const { id } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === id);    
    const post = this.props.posts[i]
    const postComments = this.props.comments[id] || [];
    console.log('====================================');
    console.log("postComments >> ", postComments);
    console.log('====================================');
    return (
      <div className="single-photo">
        <PhotoSingle i={i} post={post} {...this.props} />
        <Comment postComments={postComments} {...this.props} /> 
      </div>
    );
  }
});

export default Photo;