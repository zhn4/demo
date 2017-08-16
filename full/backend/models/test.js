require('./connect')

var Music = require('./music')

// var music = new Music({
//   title: '永远',
//   singer: '张靓颖'
// })
//
// music.save(function(err, doc) {
//   if(err) {
//     console.log('保存失败')
//   }
//   console.log('保存成功')
// })

var music_array = [
  {
    title: '第七感',
    singer: '张靓颖'
  },
  {
    title: '七里香',
    singer: '周杰伦'
  },
  {
    title: '渡口',
    singer: '蔡琴'
  },
  {
    title: '我们到最后终于变成朋友',
    singer: '金玟岐'
  },
  {
    title: '只得一次',
    singer: '关淑怡'
  },
  {
    title: '亲近',
    singer: '陈奕迅'
  },
  {
    title: 'hello',
    singer: 'adele'
  },
  {
    title: 'ghost town  ',
    singer: 'Adam Lambert'
  },
  {
    title: 'animals',
    singer: 'Maroon 5'
  },
]

for(var i = 0; i < music_array.length; i++) {
  var music = new Music({
    title: music_array[i].title,
    singer: music_array[i].singer
  })
  music.save(function(err, doc) {
    if(err) {
      console.log('保存失败')
    }
    console.log('保存成功')
  })
}
