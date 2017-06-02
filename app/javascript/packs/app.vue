<template>
  <div id="app">
    <p><b>{{ message }}</b></p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Vue.js - The Progressive JavaScript Framework"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
