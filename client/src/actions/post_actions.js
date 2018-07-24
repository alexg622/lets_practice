import * as PostApiUtils from '../utils'
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const REMOVE_POST = "REMOVE_POST"

export const fetchPosts = () => dispatch => (
  PostApiUtils.fetchPosts().then(res => dispatch(receiveAllPosts(res.data)))
)

export const fetchPost = id => dispatch => (
  PostApiUtils.fetchPost(id).then(res => dispatch(receivePost(res.data)))
)

export const createPost = post => dispatch => (
  PostApiUtils.createPost(post).then(res => dispatch(receivePost(res.data)))
)

export const deletePost = postId => dispatch => (
  PostApiUtils.deletePost(postId).then(res => dispatch(removePost(res.data._id)))
)

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})
