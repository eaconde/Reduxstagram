// increment likes
function incrementLikes(photo) {
  return {
    type: 'INCREMENT_LIKES',
    photo
  }
}

// add comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId, 
    author, 
    comment
  }
}

// remove comment
function addComment(postId, commentId) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentId
  }
}
