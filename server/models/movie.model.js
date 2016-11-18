var mongoose = require('mongoose')
var Schema = mongoose.Schema

var movieSchema = new Schema({
  "title":{type: String},
  "_year_data":{type: String},
  "year":{type: Number},
  "rated":{type: String},
  "released":{type: Date},
  "runtime":{type: String},
  "genres":{type: String},
  "director":{type: String},
  "writer":{type: Array},
  "actors":{type: Array},
  "languages":{type: Array},
  "country":[String],
  "awards":{type: String},
  "poster": {type: String}
  "metascore":{type: String},
  "rating":{type: Number},
  "votes":{type: Number},
  "imdbid":{type: String},
  "type":{type: String},
  "response":{type: String},
  "series":{type: Boolean},
  "imdburl":{type: String}
})

module.exports = mongoose.model('Movies', movieSchema)
