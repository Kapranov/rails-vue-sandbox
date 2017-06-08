import Vue from 'vue'
import App from './components/app.vue'
import TurbolinksAdapter from 'vue-turbolinks'

Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mixins: [TurbolinksAdapter]
})

console.log(app)
