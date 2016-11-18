
var imdb = require('imdb-api');

imdb.get('The Toxic Avenger').then(function(data) { console.log(data) });
