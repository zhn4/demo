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
  app.delete('/api/deleteMusic/:id', function(req, res, next) {
    Music.findOneAndRemove({
      _id: req.params.id
    })
    .then(res.json({msg: '删除成功'}))
    .catch(err => res.json(err))
  })
  app.post('/api/search', function(req, res, next) {
    // Music.find({
    //   singer: new RegExp(req.body.key_word, 'i')
    // })
    // .then(musics => {
    //   res.json(musics)
    // })
    // .catch(err => {
    //   res.json(err)
    // })
    Music.find().or([
      {
        title: new RegExp(req.body.key_word, 'i')
      },
      {
        singer: new RegExp(req.body.key_word, 'i')
      }
    ])
    .then(musics => {
      res.json(musics)
    })
    .catch(err => {
      res.json(err)
    })
  })
}
