import axios from 'axios'

export const fetchPosts = () => (
  axios.get("localhost:5000/api/posts")
)

export const fetchPost = id => (
  axios.get(`localhost:5000/api/posts/${id}`)
)

export const createPost = data => (
  axios.post(`localhost:5000/api/posts`, data)
)

export const deletePost = id => (
  axios.delete(`localhost:5000/api/posts/${id}`)
)
