const express = require('express');
const router = exporess.Router();
const Controller = require('../controllers/movie.controller')

router.get('/movies', Controller.find)
