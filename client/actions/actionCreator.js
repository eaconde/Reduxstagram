// increment likes
export function incrementLikes(photo) {
  return {
    type: 'INCREMENT_LIKES',
    photo
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId, 
    author, 
    comment
  }
}

// remove comment
export function removeComment(postId, commentId) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentId
  }
}
