import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 开启debug
Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)

import movie from './components/movie.vue'
import music from './components/music.vue'
import index from './components/index.vue'
const sometext  = {
  template: '<h1> text </h1>'
}

// const routes = [
//   { path: '/movie', component: movie },
//   { path: '/music', component: music }
// ]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/music',
      component: music
    },
    {
      path: '/text',
      component: sometext
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
