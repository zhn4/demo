<!-- <template>
  <div id="app">
     <img src="./assets/logo.png" alt="" />
    <p>{{msg}}</p>
    <firstcomponent></firstcomponent>
    <ul>
      <li><router-link to="/first">第一个子页面</router-link></li>
      <li><router-link to="/second">第二个子页面</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div class="doubanmovies">
    <div class="title">
      {{title}}
    </div>
    <movies></movies>
  </div>
</template>

<script type="text/javascript">
  // import firstcomponent from './component/firstcomponent.vue'
  // export default {
  //   data () {
  //     return {
  //       msg: 'Hello Vue!'
  //     }
  //   },
  //   components: { firstcomponent }
  // }
  import movies from './component/doubanMovies.vue'
  export default {
    data() {
      return {
        title: 'Vue豆瓣电影查询'
      }
    },
    components: {movies}
  }
</script>

<style>
  body {
    font-family: "Microsoft YaHei";
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
  .doubanmovies {
    max-width: 414px;
    margin: 0 auto;
  }
  .title {
    font-size: 18px;
    text-align: center;
    /*border: 1px solid black;*/
    margin: 0;
    padding: 0;
    background-color: #f6faf9;
    padding: 10px 0;
    color: #2aac5e;
  }
</style>

<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style> -->
