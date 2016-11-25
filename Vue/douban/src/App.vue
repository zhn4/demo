<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <!-- <Movie></Movie> -->
    <!-- <Music></Music> -->
    <!-- <div class="btn">
      <router-link to="/movie">Go to movie</router-link>
      <router-link to="/music">Go to music</router-link>
    </div> -->
    <!-- <h3>{{msg}}</h3> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Movie from './components/movie.vue'
// import Music from './components/music.vue'
export default {
  // name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  // components: {
  //   Movie, Music
  // }
}
</script>

<style lang="sass">
  @import "~normalize.css/normalize.css";

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 414px;
  margin: 0 auto;
}
//
// h1, h2 {
//   font-weight: normal;
// }
//
// ul {
//   list-style-type: none;
//   padding: 0;
// }
//
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
//
// a {
//   color: #42b983;
// }
</style>
