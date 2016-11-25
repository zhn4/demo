<template lang="html">
  <div class="movie">
    <doubanTitle title="豆瓣电影"></doubanTitle>
    <search placeholder="搜索电影"></search>
    <loading v-if="show"></loading>
    <p>{{mark}}</p>
  </div>
</template>

<script>
import doubanTitle from './title.vue'
import search from './search.vue'
import loading from './loading.vue'
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    doubanTitle, search, loading
  }
}
</script>

<style lang="sass">
  .movie {
    color: tomato;
  }
</style>
