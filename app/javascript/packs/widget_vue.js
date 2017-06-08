import Vue from 'vue'
import Hello from './components/Widget.vue'

Vue.config.productionTip = false;

const widget = new Vue({
  el: '#widget',
  components: { Hello }
})

console.log(widget)
