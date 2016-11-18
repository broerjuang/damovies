const express = require('express');
const router = express.Router();

// require movie
const Movie = require('../controllers/movie.controller')
const Twillio = require('../controllers/twillio.controller');


//  post
router.post('/movies', Movie.find)

router.post('/movies/messages', Twillio.notification)

module.exports = router
