<template>
  <div id="app">
    <p>Hi {{ message }}</p>
    <input type="text" v-model="message" placeholder="edit me">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
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
