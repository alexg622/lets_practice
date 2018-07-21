const express = require('express')
const router = express.Router()
const User = require("../../models/User")
const Post = require("../../models/Post")

router.get('/test', (req, res) => res.send("working"))


router.get('/', (req, res) => {
  Post.find().then(post => res.json(post))
})

router.get('/:postId', (req, res) => {
  Post.findById(req.params.postId).then(post => res.json(post))
})

router.post('/', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.authorId
  })

  newPost.save().then(post => {
    User.findById(post.author).then(user => {
      user.posts.unshift(post)
      user.save()
    })
    res.json(post)
  })
})

router.patch('/:postId', (req, res) => {
  Post.update({_id: req.params.postId}, {title: req.body.title, body: req.body.title})
    .then(post => res.json(post))
})

router.delete('/:postId', (req, res) => {
  Post.findById(req.params.postId).then(post => {
    User.findById(post.author).then(user => {
      idx = user.posts.indexOf(post._id)
      user.posts.splice(idx, 1)
      user.save()
    })
    post.remove().then(post => res.json(post))
  })
})




module.exports = router
