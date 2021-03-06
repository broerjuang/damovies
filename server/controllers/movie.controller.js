'use strict'

const imdb = require('imdb-api')

const find = (req, res) => {
  imdb
    .get(req.body.title)
    .then((movie) => {
      console.log(movie)
      res.json(JSON.parse(JSON.stringify(movie)))
    })
    .catch((err) => res.json({message: 'No movie in such title'}))
}

module.exports = {
  find
}
