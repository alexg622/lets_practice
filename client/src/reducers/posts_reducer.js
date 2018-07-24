import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions'

const initialState = {
  posts: []
}

const PostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return {...state, posts: action.posts}
    case RECEIVE_POST:
      return {...state, posts: [action.post, ...state]}
    case REMOVE_POST:
      return {...state, posts: state.posts.filter(post => post._id !== action.postId)}
    default:
      return state
  }
}

export default PostsReducer
