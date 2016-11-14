<template>
  <div class="index-nav">
    <router-link to="/">Index</router-link>
    <router-link to="/movies">Movie</router-link>
    <router-link to="/music">Music</router-link>
  </div>
</template>

<style lang="sass">
  .index-nav {
    max-width: 414px;
    margin: 0 auto;
    a {
      display: block;
      padding: 10px;
      text-align: center;
      border: 1px solid black;
      margin-bottom: 5px;
    }
  }
</style>
