import Vue from 'vue'
import Hello from './components/Widget.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const widget = new Vue({
  el: '#widget',
  components: { Hello }
})

console.log(widget)
