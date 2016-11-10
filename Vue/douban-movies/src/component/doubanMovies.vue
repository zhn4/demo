<template>
  <div class="search">
    <input type="text" placeholder="搜索电影" v-model="inputText" v-on:keyup.13="getMoviesData">
    <button v-on:click="getMoviesData">搜索</button>
    <div class="loading" v-if="loading">Loading......</div>
    <div class="show">
      <p>{{title}}</p>
      <ul>
        <li v-for="movie in movies">
          <a v-bind:href="movie.alt">
            <div class="cover">
              <img v-bind:src="movie.images.small" alt="" />
            </div>
            <div class="details">
              {{movie.title}}（{{movie.year}}）
            </div>
            <span v-for="name in movie.casts">
              {{name.name}}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '输入搜索内容',
      loading: true,
      title: '',
      movies: []
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}).then(function(res) {
      console.log('success')
      this.loading = false
      console.log(res.data)
      this.movies = res.data.subjects
      this.title = res.data.title
    }, function(res) {
      console.log('error')
      console.log(res.data)
    })
  },
  methods: {
    getMoviesData() {
      this.loading = true
      var key = this.inputText
      this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + key, {}).then(function(res) {
        console.log('success')
        this.loading = false
        console.log(res.data)
        this.movies = res.data.subjects
        this.title = res.data.title
      }, function(res) {
        console.log('error')
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="sass">
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
