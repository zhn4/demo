<template lang="html">
  <div class="loading">
    Loading
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .loading {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    &::after {
      content: "...";

    }
  }
</style>
