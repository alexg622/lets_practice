import React from 'react'

class PostsIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    const posts = this.props.posts.map(post => {
      return (
        <div key={post._id}>
          {post.title}
          {post.body}
          <button onClick={() => this.props.deletePost(post._id).then(() => this.props.fetchPosts())}>Delete</button>
        </div>
      )
    })
    return(
      <div>
        <h1>Hello Posts</h1>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default PostsIndex
