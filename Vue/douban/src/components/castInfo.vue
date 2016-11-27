<template lang="html">
  <div class="cast-info">
    <doubanTitle :title="title"></doubanTitle>
    
  </div>
</template>

<script>
import doubanTitle from './title.vue'
export default {
  data() {
    return {
      title: '演员信息'
    }
  },
  components: {
    doubanTitle
  }
}
</script>

<style lang="css">
</style>
