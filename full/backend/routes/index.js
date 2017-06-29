var express = require('express');
var router = express.Router();

var Music = require('../models/music.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Express'
    })
  })
  app.get('/api/music', function(req, res, next) {
    Music.find({})
         .then(musics => {
           res.json(musics)
         })
         .catch(err => {
           res.json(err)
         })
  })
}
