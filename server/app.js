'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const imdb = require('imdb-api')

const app = express()

// Use bodyParser
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Require the router
const router = require('./routes/movie.router')


app.use('/api', router)

app.listen(3000, () => {
  console.log('server is running on port 3000');
})
