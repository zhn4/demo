<template lang="html">
  <div>
    <h3>{{title}}</h3>
    <div>输出B组件输入框的数据：{{message}}</div>
    <Bcomp v-model="message"></Bcomp>
  </div>
</template>

<script>
import Bcomp from './B.vue'
export default {
  data() {
    return {
      title: 'A组件',
      message: ''
    }
  },
  methods: {
    enter() {
      console.log(this.message)
    }
  },
  components: {
    Bcomp
  }
}
</script>

<style lang="css">
</style>
