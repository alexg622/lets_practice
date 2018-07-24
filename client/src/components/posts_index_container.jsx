import { connect } from 'react-redux'
import PostsIndex from './posts_index.jsx'
import {fetchPosts, createPost, deletePost} from '../actions/post_actions'


const mapStateToProps = state => ({
  posts: state.post.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: post => dispatch(createPost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
