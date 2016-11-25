<template lang="html">
  <div class="music">
    <doubanTitle :title="title"></doubanTitle>
    <search
      :placeholder="placeholder"
      :enterFunction="getMusicData"
      v-model="message"
      >
    </search>
    <loading v-if="loading"></loading>
    <div class="show">
      <ul>
        <li v-for="music in musics">
          <div class="results">
            <div class="cover">
              <img :src="music.image" alt="">
            </div>
            <div class="name">{{music.title}}</div>
            <div class="authors">
              <span v-for="author in music.author">{{author.name}}</span>
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
      title: '豆瓣音乐',
      placeholder: '搜索音乐',
      loading: false,
      message: '',
      musics: []
    }
  },
  components: {
    doubanTitle, search, loading
  },
  mounted: function() {

  },
  methods: {
    enterFun() {
      console.log(this.message)
    },
    getMusicData() {
      this.loading = true
      var key = this.message
      this.$http.jsonp('https://api.douban.com/v2/music/search?q=' + key, {}).then(function(res) {
        console.log('success')
        this.loading = false
        console.log(res.data)
        console.log(res.data.musics)
        this.musics = res.data.musics
      }, function(res) {
        console.log('error')
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="sass">
  .music {
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
        .authors {
          span {
            margin-right: 6px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
