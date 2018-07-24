import { combineReducers } from 'redux'
import PostsReducer from './post_reducer'

export default combineReducers({
  posts: PostsReducer
})
