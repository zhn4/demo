<template lang="html">
  <div>
    <h3>child send data to parent</h3>
    <input type="text"
      ref="input"
      :value="value"
      @input="updateValue($event.target.value)"
      @keyup.13="enterFunction"
    >
  </div>
</template>

<script>
export default {
  props: ['value', 'enterFunction'],
  methods: {
    updateValue(value) {
      this.$refs.input.value = value
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style lang="css">
</style>
