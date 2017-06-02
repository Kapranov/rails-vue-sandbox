import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById("hello")
  if (element != null) {
    var app = new Vue({
      el: element,
      template: '<App/>',
      components: { App },
      mixins: [TurbolinksAdapter]
    })
  }
})
