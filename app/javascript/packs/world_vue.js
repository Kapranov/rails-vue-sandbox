import Vue from 'vue'
import World from './components/world.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const world = new Vue({
  el: '#world',
  template: '<World/>',
  components: { World }
})

console.log(world)
