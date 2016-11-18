'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const imdb = require('imdb-api')

const app = express()

var movie;

app.use('/api/movies', (req, res) => {
  imdb.getReq({ name: 'lolita' }, function(err, things) {
      movie = things;
  });
  let test = JSON.parse(JSON.stringify(movie))
  console.log(test.title);
  res.send(movie)
})

app.listen(3000, () => {
  console.log('server is running on port 3000');
})
