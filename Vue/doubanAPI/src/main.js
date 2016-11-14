import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter);
Vue.use(VueResource);

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
import index from './app.vue'
import movies from './component/doubanMovies.vue'
import music from './component/doubanMusic.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: index},
  { path: '/movies', component: movies},
  { path: '/music', component: music}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！

// import Vue from 'vue'
// import App from './App.vue'
//
// import VueRouter from "vue-router";
// import VueResource from 'vue-resource'
//
// //开启debug模式
// Vue.config.debug = true;
//
// Vue.use(VueRouter);
// Vue.use(VueResource);
//
// import doubanMovies from './component/doubanMovies.vue'
//
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: doubanMovies },
//     { path: '/movies', component: doubanMovies}
//   ]
// })
// const app = new Vue({
//   router
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
