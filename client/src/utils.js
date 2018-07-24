import axios from 'axios'

export const fetchPosts = () => (
  axios.get("http://localhost:5000/api/posts")
)

export const fetchPost = id => (
  axios.get(`http://localhost:5000/api/posts/${id}`)
)

export const createPost = post => (
  axios.post(`http://localhost:5000/api/posts`, post)
)

export const deletePost = id => (
  axios.delete(`http://localhost:5000/api/posts/${id}`)
)
