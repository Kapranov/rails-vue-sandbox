import Vue from 'vue'
import App from './world.vue'

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    template: '<App/>',
    components: { App }
  })

  console.log(app)
})
