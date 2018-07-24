import * as UtilApiPosts from '../utils'

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const REMOVE_POST = "REMOVE_POST"


export const fetchPosts = () => dispatch => (
  UtilApiPosts.fetchPosts().then(res => dispatch(receiveAllPosts(res.data)))
)

export const fetchPost = postId => dispatch => (
  UtilApiPosts.fetchPost(postId).then(res => dispatch(receivePost(res.data)))
)

export const createPost = post => dispatch => (
  UtilApiPosts.fetchPost(post).then(res => dispatch(receivePost(res.data)))
)

export const deletePost = postId => dispatch => (
  UtilApiPosts.deletePost(postId).then(res => dispatch(removePost(res.data)))
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
