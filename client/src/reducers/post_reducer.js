import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions'

const initialState = {
  posts: [],
  post: {}
}

const PostsReducer = (oldState = initialState, action) => {
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return {...oldState, posts: action.posts}
    case RECEIVE_POST:
      return {...oldState, post: action.post}
    case REMOVE_POST:
      return {...oldState, posts: oldState.posts.filter(post => post._id !== action.postId)}
    default:
      return oldState
  }
}

export default PostsReducer
