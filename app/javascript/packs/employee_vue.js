import Vue from 'vue'
import Employee from './components/employee.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

var employees = new Vue({
  el: '#employees',
  data: {
    employees: []
  },
  ready: function() {
    var that;
    that = this;
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
      }
    })
  }
})
