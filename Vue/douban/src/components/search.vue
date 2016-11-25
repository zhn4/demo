<template lang="html">
  <div class="search">
    <input type="text"
      :placeholder="placeholder"
      spellcheck="false"
      ref="input"
      :value="value"
      @input="updateValue($event.target.value)"
      @keyup.13="enterFunction"
    >
    <input type="button" value="搜索">
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value', 'enterFunction'],
  data() {
    return {
      message: 'good',
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style lang="sass">
  .search {
    width: 100%;
    position: relative;
    input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
      outline: none;
    }
    input[type="button"] {
      position: absolute;
      right: 0;
      top: 0;
      height: 35px;
      text-align: center;
      box-sizing: border-box;
      border: none;
      background-color: #30A080;
      color: #FFF;
    }
  }
</style>
