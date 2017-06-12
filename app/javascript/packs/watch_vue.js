import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const watching = new Vue({
  el: '#watching',
  data: {
    my_send: 'xxx'
  },
  watch: {
    my_send: function() {
      console.log(this.my_send)
    }
  }
})

console.log(watching)
