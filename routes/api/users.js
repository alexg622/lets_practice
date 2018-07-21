const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const Post = require('../../models/Post')

router.get('/test', (req, res) => res.send("wordkfdjsa;f"))


router.get('/', (req, res) => {
  User.find().then(user => res.json(user))
})

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId).then(user => res.json(user))
})

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password
  })

  newUser.save().then(user => res.json(user))
})

router.patch('/:userId', (req, res) => {
  User.update({_id: req.params.userId}, {name: req.body.name, password: req.body.password})
    .then(user => res.json(user))
})

router.delete('/:userId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    user.remove().then(user => res.json(user))
  })
})


module.exports = router
