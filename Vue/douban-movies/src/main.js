import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
