<template>
  <div class="doubanmovies">
    <div class="title">
      {{title}}
    </div>
    <movies></movies>
  </div>
</template>

<script type="text/javascript">
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
    margin: 0;
    padding: 0;
    background-color: #f6faf9;
    padding: 10px 0;
    color: #2aac5e;
  }
</style>
