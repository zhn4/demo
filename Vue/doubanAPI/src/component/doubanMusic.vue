<template>
  <div class="doubanmovies">
    <div class="title">
      {{contentTitle}}
    </div>
    <div class="search">
      <input type="text" placeholder="搜索音乐" v-model="inputText" v-on:keyup.13="getMusicData">
      <button v-on:click="getMusicData">搜索</button>
      <div class="loading" v-if="loading">Loading......</div>
      <div class="show">
        <ul>
          <li v-for="music in allMusic">
            <a v-bind:href="music.alt">
              <div class="cover">
                <img v-bind:src="music.image" alt="" />
              </div>
              <div class="details">
                {{music.title}}
              </div>
              标签:
              <span v-for="tag in music.tags">
                {{tag.name}}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTitle: '音乐',
      inputText: '输入搜索内容',
      loading: false,
      title: '',
      allMusic: []
    }
  },
  // mounted: function() {
  //   this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}).then(function(res) {
  //     console.log('success')
  //     this.loading = false
  //     console.log(res.data)
  //     this.movies = res.data.subjects
  //     this.title = res.data.title
  //   }, function(res) {
  //     console.log('error')
  //     console.log(res.data)
  //   })
  // },
  methods: {
    getMusicData() {
      this.loading = true
      var key = this.inputText
      this.$http.jsonp('https://api.douban.com/v2/music/search?q=' + key, {}).then(function(res) {
        console.log('success')
        this.loading = false
        console.log(res.data)
        this.allMusic = res.data.musics
      }, function(res) {
        console.log('error')
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="sass">
  body {
    font-family: "Microsoft YaHei";
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
  .doubanmovies {
    max-width: 414px;
    margin: 0 auto;
    .title {
      font-size: 18px;
      text-align: center;
      margin: 0;
      padding: 0;
      background-color: #f6faf9;
      padding: 10px 0;
      color: #2aac5e;
    }
  }
  .search {
    width: 100%;
    position: relative;
    input[type="text"] {
      width: 100%;
      height: 35px;
      box-sizing: border-box;
      outline: none;
      padding: 0 10px;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 35px;
      background-color: #2a8c70;
      color: #fff;
      border: 0;
      padding: 0 10px;
    }
    .loading {
      text-align: center;
    }
    .show {
      padding: 0 10px;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin-bottom: 5px;
          padding: 5px 0;
          border-bottom: 1px dashed #eee;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      .cover {
        float: right;
      }
      a {
        overflow: hidden;
        text-decoration: none;
        color: #37a;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
    }
  }
</style>
