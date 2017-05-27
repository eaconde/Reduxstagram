// increment likes
export function increament(photo) {
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
export function addComment(postId, commentId) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentId
  }
}
