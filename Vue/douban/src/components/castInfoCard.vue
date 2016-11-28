<template lang="html">
  <div class="card" v-if="show" @click="toggle">
    <div class="image">
      <img :src="image" alt="">
    </div>
    <div>{{name}}</div>
    <div>{{name_en}}</div>
    <div>{{gender}}</div>
    <div>{{born_place}}</div>
  </div>
</template>

<script>
export default {
  props: ['name', 'born_place', 'gender', 'name_en', 'show', 'image'],
  data() {
    return {

    }
  },
  methods: {
    toggle() {
      if(this.show === true) {
        this.show = false
      }else {
        this.show = true
      }
    }
  }
}
</script>

<style lang="sass">
  .card {
    position: fixed;
    top: 50%;
    box-sizing: border-box;
    background-color: #eee;
    color: green;
    border: 1px solid green;
    width: 100%;
    .image {
      float: right;
      img {
        display: block;
      }
    }
  }
</style>
