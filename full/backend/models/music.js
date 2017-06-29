var mongoose = require('mongoose')

var movieSchema = new mongoose.Schema({
  title: String,
  singer: String
})

var Music = mongoose.model('music', movieSchema)

module.exports = Music
