const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./.git/keys').mongoURI
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const cors = require('cors')

app.use(cors())

mongoose.connect(db).then(() => console.log("mongoDB is connected"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/users', users)
app.use('/api/posts', posts)

app.get('/test', (req, res) => res.send("testing works"))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))
