<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2"> </div>
        <div class="col-12 col-md-auto">
          <p>Hi {{ message }}</p>
          <input type="text" v-model="message" placeholder="edit me">
        </div>
        <div class="col col-lg-2"> </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue! "
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
