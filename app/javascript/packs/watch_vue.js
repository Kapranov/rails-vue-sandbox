import Vue from 'vue'

Vue.config.productionTip = false;

const watching = new Vue({
  el: '#watching',
  data: {
    xxx: 'xxx'
  },
  watch: {
    my_send: function() {
      console.log(this.xxx)
    }
  }
})

console.log(watching)
