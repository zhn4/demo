<template lang="html">
  <div class="douban-title">
    <a href="javascript:window.history.back();" class="back">后退</a>
    <div class="title">
      {{title}}
    </div>
    <!-- <div class="nav-bar">
      <ul>
        <li><router-link to="/movie">Movie</router-link></li>
        <li><router-link to="/music">Music</router-link></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="sass">
  .douban-title {
    position: relative;
    .title {
      text-align: center;
      margin: 0;
      padding: 0;
      background-color: #f6faf9;
      padding: 10px 0;
      color: #2aac5e;
    }
    .back {
      position: absolute;
      top: 0;
      left: 0 ;
      padding: 10px 0;
    }
    .nav-bar {

    }
  }
</style>
