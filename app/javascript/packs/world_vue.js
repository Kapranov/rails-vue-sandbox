import Vue from 'vue'
import World from './components/world.vue'

Vue.config.productionTip = false;

const world = new Vue({
  el: '#world',
  template: '<World/>',
  components: { World }
})

console.log(world)
