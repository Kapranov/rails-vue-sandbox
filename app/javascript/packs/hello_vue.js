import Vue from 'vue'
import App from './components/app.vue'
import BootstrapVue from 'bootstrap-vue'
import TurbolinksAdapter from 'vue-turbolinks'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mixins: [TurbolinksAdapter]
})

console.log(app)
