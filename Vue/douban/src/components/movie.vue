<template lang="html">
  <div class="movie">
    <doubanTitle :title="title"></doubanTitle>
    <search
      :placeholder="placeholder"
      :enterFunction="getMoviesData"
      v-model="message"
    ></search>
    <loading v-if="loading"></loading>
    <div class="show">
      <ul>
        <li v-for="movie in movies">
          <div class="results">
            <div class="cover">
              <img :src="movie.images.small" alt="">
            </div>
            <div class="name">{{movie.title}}</div>
            <div>
              <a href="javascript:;"
              v-for="cast in movie.casts"
              @click="getCastsInfo"
              :data-id="cast.id"
              >
                {{cast.name}}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import doubanTitle from './title.vue'
import search from './search.vue'
import loading from './loading.vue'
export default {
  data() {
    return {
      title: '豆瓣电影',
      placeholder: '搜索电影',
      loading: false,
      message: '',
      movies: []
    }
  },
  methods: {
    getMoviesData() {
      this.loading = true
      var key = this.message
      this.$http.jsonp('https://api.douban.com/v2/movie/search?q=' + key, {}).then(function(res) {
        console.log('success')
        this.loading = false
        console.log(res.data)
        this.movies = res.data.subjects
      }, function(res) {
        console.log('error')
        console.log(res.data)
      })
    },
    getCastsInfo() {
      // console.log('1')
      // console.log(event.target)
      // console.log(event.target.getAttribute('data-id'))
      const id = event.target.getAttribute('data-id')
      // https://api.douban.com/v2/movie/celebrity/1027502
      this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/' + id, {}).then(function(res) {
        console.log('success')
        console.log(res.data)
      }, function(res) {
        console.log('error')
        console.log(res.data)
      })
    }
  },
  mounted: function() {
    this.loading = true
    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}).then(function(res) {
      console.log('success')
      this.loading = false
      console.log(res.data)
      this.movies = res.data.subjects
    }, function(res) {
      console.log('error')
      console.log(res.data)
    })
  },
  components: {
    doubanTitle, search, loading
  }
}
</script>

<style lang="sass">
  .movie {
    .show {
      .results {
        border-bottom: 1px dashed #eee;
        padding: 10px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .cover {
          float: right;
          img {
            display: block;
          }
        }
        .name {
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
