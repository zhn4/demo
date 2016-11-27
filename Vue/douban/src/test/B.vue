<template lang="html">
  <div>
    <input type="text"
    ref="Binput"
    :value="value"
    @input="updateValue($event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: ['value', 'enter'],
  methods: {
    updateValue(value) {
      this.$emit('input', this.$refs.Binput.value)
    }
  }
}
</script>

<style lang="css">
input[type="text"] {
  border: 1px solid black;
}
</style>
