import React from 'react'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.post
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.props.fetchPosts();
  }

  handleSubmit(e){
    e.preventDefault()
    const newPost = this.state
    console.log(newPost);
    this.props.createPost(newPost).then(res => this.props.fetchPosts())
    this.setState({title: "", body: ""})
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render(){
    const posts = this.props.posts.posts.map(post => {
      return (
        <div key={post._id}>
          {post.title}
          {post.body}
          <button onClick={() => this.props.deletePost(post._id)}>Delete</button>
        </div>
      )
    })
    return(
      <div>
        <ul>
          {posts}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} placeholder="Title" onChange={this.update("title")}/>
          <input type="text" value={this.state.body} placeholder="Body" onChange={this.update("body")}/>
          <input type="submit" value="Create Post"/>
        </form>
      </div>
    )
  }
}

export default PostsIndex
