import {connect} from 'react-redux'
import PostsIndex from './posts_index.jsx'
import { fetchPosts, deletePost, createPost } from '../actions/post_actions'

const mapStateToProps = state => ({
  posts: state.posts,
  post: {title: "", body: "", author: "5b528de0b022da2327831c84"}
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id)),
  createPost: post => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
