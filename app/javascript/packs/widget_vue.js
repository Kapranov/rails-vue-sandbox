import Vue from 'vue'
import Hello from './components/Widget.vue'

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    components: { Hello }
  })

  console.log(app)
})
