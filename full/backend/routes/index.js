var express = require('express');
var router = express.Router();

var Music = require('../models/music.js')

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
  app.post('/api/addMusic', function(req, res, next) {
    var music = new Music({
      title: req.body.title,
      singer: req.body.singer
    })
    music.save(function(err, doc) {
      if(err) {
        console.log('保存失败')
        console.log(err)
        res.json({
          msg: '保存失败'
        })
        return
      }
      console.log('保存成功')
      res.json({
        msg: '保存成功'
      })
    })
  })
  app.post('/api/search', function(req, res, next) {
    Music.findOne({
      'title': req.body.title
    })
    .then(musics => {
      res.json(musics)
    })
    .catch(err => {
      res.json(err)
    })
  })
}
